import React from 'react';
import { useState } from 'react';
import CHATS from '../data/chats.json';
import { NavLink } from 'react-router-dom';
//import Dropdown from 'react-bootstrap/Dropdown';

function MessagingPage() {

  //const defaultUser = {userId: "netra", userName: "Netra", userImg: "/img/Netra.JPG"};
  //const [currentUser, setCurrentUser] = useState(defaultUser);
  /*
  const changeUser = (newUser) => {
    setCurrentUser(newUser);
  }
  */
  const channel_names = ["#main", "#exec", "#finance", "#social", "#random"];
  const dm_names = ["#user2", "#user3", "#user2, user3"];
  const external_names = ["#RSO15", "#RSO2", "#HUB Activities"];

  const [currentChannel, setCurrentChannel] = useState('#main');

  const changeChannel = (newChannel) => {
    setCurrentChannel(newChannel);
  }

  function ChannelList(props) {
    const { channel_names, currentChannel, changeChannelFunction } = props;
    
    const handleClick = (event) => {
      event.preventDefault();
      const linkName = event.target.textContent;
      console.log("Clicked on" + linkName);
      changeChannelFunction(linkName);
    }

    const channelArray = channel_names.map((channelNameString) => {
      let classListString = "px-2";
      if(channelNameString === currentChannel) { //on current channel
        classListString += " bg-warning";
      }
  
      return (
        <div className={classListString} key={channelNameString}>
          <h3 key={channelNameString}><a className='channel-names' href={"/" + channelNameString} onClick={handleClick}>{channelNameString}</a></h3>
        </div>
      );
    })
  
    return (
      <div>
        {channelArray}
      </div>
    )
  }

  function DmList(props) {
    const { dm_names, currentChannel, changeChannelFunction } = props;
    
    const handleClick = (event) => {
      event.preventDefault();
      const linkName = event.target.textContent;
      console.log("Clicked on" + linkName);
      changeChannelFunction(linkName);
    }

    const dmArray = dm_names.map((dmNameString) => {
      let classListString = "px-2";
      if(dmNameString === currentChannel) { //on current channel
        classListString += " bg-warning";
      }
  
      return (
        <div className={classListString} key={dmNameString}>
          <h3 key={dmNameString}><a className='channel-names' href={"/" + dmNameString} onClick={handleClick}>{dmNameString}</a></h3>
        </div>
      );
    })
  
    return (
      <div>
        {dmArray}
      </div>
    )
  }


  function ExternalList(props) {
    const { external_names, currentChannel, changeChannelFunction } = props;
    
    const handleClick = (event) => {
      event.preventDefault();
      const linkName = event.target.textContent;
      console.log("Clicked on" + linkName);
      changeChannelFunction(linkName);
    }

    const externalArray = external_names.map((externalNameString) => {
      let classListString = "px-2";
      if(externalNameString === currentChannel) { //on current channel
        classListString += " bg-warning";
      }
  
      return (
        <div className={classListString} key={externalNameString}>
          <h3 key={externalNameString}><a className='channel-names' href={"/" + externalNameString} onClick={handleClick}>{externalNameString}</a></h3>
        </div>
      );
    })
  
    return (
      <div>
        {externalArray}
      </div>
    )
  }


  function ComposeForm(props) {
    
    const {addMessageFunction, currentChannel} = props;

    const [typedText, setTypedText] = useState('');
    console.log(typedText);

    //typing
    const handleChange = (event) => {
      setTypedText(event.target.value);
    }

    //submission
    const handleSubmit = (event) => {
      event.preventDefault();
      const userObj = { userId: "netra", userName: "Netra", userImg: "/img/netra.JPG" }

      addMessageFunction(userObj, typedText, currentChannel);
      setTypedText('');
    }

    return (
      <form className="my-2" onSubmit={handleSubmit}>
        <div className="input-group">
          <textarea className="form-control" rows="2" placeholder="Type a new message" value={typedText} onChange={handleChange} />
          <button className="btn" type="submit">
            <span id="send-message" className="material-icons">send</span>
          </button>
        </div>
      </form>
    );
  }


  function ChatPane() {
    const [chats, setChats] = useState(CHATS);

    const addMessage = function(userObj, messageText, channel) {
      const newMessage = {
        "userId": userObj.userId,
        "userName": userObj.userName,
        "userImg": userObj.userImg,
        "text": messageText,
        "timestamp": Date.now(),
        "channel": channel
      }
      const newArray = [...chats, newMessage];
      setChats(newArray); //update the board & re-render
    }

    const chronologicalMessages = chats
      .sort((m1, m2) => m1.timestamp - m2.timestamp);

    const channelMessages = chronologicalMessages.filter((msgObj) => {
      return msgObj.channel === currentChannel;
    })

    const messageItemArray = channelMessages.map((chatObj) => {
      const elem = <MessageChat key={chatObj.timestamp} messageData={chatObj} />
      return elem; //put it in the new array!
    });

    return (
      <div id="chat-area" className="scrollable-pane">
        {/* button demo 
        <div className="pt-2 my-2">
          {/* button.addEventListener('click', handleClick) 
          <button 
            className="btn btn-success"
            onClick={handleClick} 
          >Click me!</button>
          <p>You clicked me X times</p>
        </div>
        <hr/>
      */}

        {/* Messages */}
        {messageItemArray.length === 0 && <p>No messages found</p>}
        {messageItemArray}

        <ComposeForm className="message_box" addMessageFunction={addMessage} />
      </div>
    )
  }


  function MessageChat(props) {
    const {userName, userImg, text} = props.messageData;
    const [color, setColor] = useState('white');

    const handleClick = (event) => {
      console.log("You like a post by " + userName);
      setColor('red');
    }

    return (
      <div className="message">
        <div>
          <img id="messageImg" src={userImg} alt={userName + "'s profile picture"}/>
          <strong>{userName}</strong>
        </div>
        <p>{text}</p>
        <button id="likeBtn" onClick={handleClick} className="btn btn-secondary" alt="Like">
          <span id="like-btn" className="material-icons" style={{color:color}} aria-label="Like">
            favorite
          </span>
        </button>
      </div>
    )
    
  }

  return (
    <div id="messaging-body">
      {/* Page header */}
      <nav>
        <div className="container">
          <h1>Messaging</h1>
        </div>
        <NavLink to="/homepage" className="home-icon" aria-label="Go to homepage">
          <span className="material-icons home-icon">home</span>
        </NavLink>
      </nav>
      {/* Main section of content */}
      <div id="messaging-main">
        <div id="main-content">
          <div id="left-rect">
            <div id="channels">
              <div id="channel-section">
                <div className="dropdown">
                  <h2>channels</h2>
                  <span
                    id="dropdown-arrow"
                    className="material-icons"
                    aria-label="Collapse-channels"
                  >
                    arrow_drop_down
                  </span>
                </div>
                <ChannelList channel_names={channel_names} currentChannel={currentChannel} changeChannelFunction={changeChannel}/>
                {/*channelsArray*/}
                {/*
                <a href="messaging_iphone_p2.html" id="main-link">
                  <h3 id="main-channel" class="channel-names">#main</h3>
                </a>
                */} 
              </div>
              <div id="dm_section">
                <div className="dropdown">
                  <h2>direct messages</h2>
                  <span
                    id="dropdown-arrow"
                    className="material-icons"
                    aria-label="Collapse-dms"
                  >
                    arrow_drop_down
                  </span>
                </div>
                <DmList dm_names={dm_names} currentChannel={currentChannel} changeChannelFunction={changeChannel}/>
              </div>
              <div id="external-section">
                <div className="dropdown">
                  <h2>external channels</h2>
                  <span
                    id="dropdown-arrow"
                    className="material-icons"
                    aria-label="Collapse-external"
                  >
                    arrow_drop_down
                  </span>
                </div>
                <ExternalList external_names={external_names} currentChannel={currentChannel} changeChannelFunction={changeChannel}/>
              </div>
            </div>
            <div id="right-rect">
              <div>
                <h2 id="current-channel">#main</h2>
              </div>
              <div id="messaging-chats" className="d-flex">
                <ChatPane currentChannel={currentChannel} />
                {/*<Messages chats={CHATS}/>*/}
              </div>
              {/*
              <div className="message-box">
                <h3>type a message</h3>
                <span id="send-icon" className="material-icons" aria-label="Send">
                  send
                </span>
              </div>
              */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagingPage;

/*
function MessagingPage() {
  return (
    <>
      <Header />
      
      <main>
        <div id="main-content">
          <LeftRect />
          <RightRect />
        </div>
      </main>
    </>
  );
}

export default MessagingPage;


function Header() {
    return (
      <nav>
          <div className="container">
              <h1>Messaging</h1>
          </div>
          <a href="homepage.html" className="upper-left">
            <span className="material-icons" aria-label="Home">
              home
            </span>
          </a>
      </nav>
    );
}

function LeftRect() {
  return (
    <div id="left-rect">
      <div id="channels">
        <div id="channel-section">
          <div className="dropdown">
            <h2>channels</h2>
            <span
              id="dropdown-arrow"
              className="material-icons"
              aria-label="Collapse-channels"
            >
              arrow_drop_down
            </span>
          </div>
          <a href="messaging_iphone_p2.html" id="main-link">
            <h3 id="main-channel">#main</h3>
          </a>
          <h3>#exec</h3>
          <h3>#finance</h3>
          <h3>#social</h3>
          <h3>#random</h3>
        </div>
        <div id="dm_section">
          <div className="dropdown">
            <h2>direct messages</h2>
            <span
              id="dropdown-arrow"
              className="material-icons"
              aria-label="Collapse-dms"
            >
              arrow_drop_down
            </span>
          </div>
          <div>
            <h3>#user2</h3>
            <h3>#user3</h3>
            <h3>#user2, user3</h3>
          </div>
        </div>
        <div id="external-section">
          <div className="dropdown">
            <h2>external channels</h2>
            <span
              id="dropdown-arrow"
              className="material-icons"
              aria-label="Collapse-external"
            >
              arrow_drop_down
            </span>
          </div>
          <div>
            <h3>#RSO15</h3>
            <h3>#RSO2</h3>
            <h3>#HUB Activities</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightRect() {
  return (
    <div id="right-rect">
      <div>
        <h2>#main</h2>
      </div>
      <div id="message-box">
        <h3>type a message</h3>
        <span id="send-icon" className="material-icons" aria-label="Send">
          send
        </span>
      </div>
    </div>
  );
}
*/

/*
CITATIONS:
Chatbot demo from INFO340 C Lectures 13 & 14
*/