import React from 'react';
import { useState } from 'react';
import CHATS from '../data/chats.json';
import Dropdown from 'react-bootstrap/Dropdown';

function MessagingPage() {

  //const defaultUser = {userId: "netra", userName: "Netra", userImg: "/img/Netra.JPG"};
  //const [currentUser, setCurrentUser] = useState(defaultUser);
  /*
  const changeUser = (newUser) => {
    setCurrentUser(newUser);
  }
  */

  const [currentChannel, setCurrentChannel] = useState('#main');

  const changeChannel = (newChannel) => {
    setCurrentChannel(newChannel);
  }

  const channel_names = ["#main", "#exec", "#finance", "#social", "#random"];
  const channelsArray = channel_names.map((channel_name) => {
    return (
      <div>
        <h3 key={channel_name}><a className="channel-names" href={"/" + channel_name}>{channel_name}</a></h3>
      </div>
    )
  });

  const dm_names = ["#user2", "#user3", "#user2, user3"];
  const dmArray = dm_names.map((dm_name) => {
    return (
      <div>
        <h3 key={dm_name}><a className="channel-names" href={"/" + dm_name}>{dm_name}</a></h3>
      </div>
    )
  });

  const external_names = ["#RSO15", "#RSO2", "#HUB Activities"];
  const externalArray = external_names.map((external_name) => {
    return (
      <div>
        <h3 key={external_name}><a className="channel-names" href={"/" + external_name}>{external_name}</a></h3>
      </div>
    )
  });

  function ChannelList(props) {
    const { channelNames, currentChannel, changeChannelFunction } = props;
    
    const handleClick = (event) => {
      event.preventDefault();
      const linkName = event.target.name;
      console.log("Clicked on", linkName);
      changeChannelFunction(linkName);
    }
  }

  function ComposeForm(props) {
    const {addMessage} = props;

    const [typedText, setTypedText] = useState('');
    console.log(typedText);

    const handleChange = (event) => {
      setTypedText(event.target.value);
    }

    const handleSubmit = (event) => {
      event.preventDefault();

      addMessage("netra", typedText, "#main");
      setTypedText('');
    }

    return (
      <form className="my-2" onSubmit={handleSubmit}>
        <div className="input-group">
          <textarea className="form-control" rows="2" placeholder="Type a new message" value={typedText} onChange={handleChange}></textarea>
          <button className="btn btn-secondary" type="submit">
            <span id="send-message" className="material-icons">send</span>
          </button>
        </div>
      </form>
    );
  }

  function ChatPane() {

    const [currentCount, setCurrentCount] = useState(0);
    const [chats, setChats] = useState(CHATS);

    const handleClick = function(event) {
      setCurrentCount(currentCount + 1);
      console.log(currentCount);
    }

    const addMessage = (userName, text, channel) => {
      const newMessage ={
        "userId": userName,
        "userName": userName,
        "userImg": "../img/" + userName + ".JPG",
        "text": text,
        "timestamp": Date.now(),
        "channel": channel
      }
      const newArray = [...chats, newMessage];

      setChats(newArray);
    }

  const messageObjArray = chats
    .sort((m1, m2) => m1.timestamp - m2.timestamp);

  if (messageObjArray.length === 0) {
    return (
      <p>No messages found</p>
    )
  }

  const messageItemArray = messageObjArray.map((chatObj) => {
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
      {messageItemArray}

      <ComposeForm className="message_box" addMessage={addMessage} />
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
        <button onClick={handleClick} className="btn btn-secondary" alt="Like">
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
        <a href="homepage.html" className="upper-left">
          <span className="material-icons" aria-label="Home">
            home
          </span>
        </a>
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
                <ChannelList channelNames={channelsArray} currentChannel={currentChannel} changeChannelFunction={changeChannel}/>
                {channelsArray}
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
                {dmArray}
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
                {externalArray}
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