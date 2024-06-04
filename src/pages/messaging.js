import React from 'react';
import { useState } from 'react';
import CHATS from '../data/chats.json';
import { NavLink } from 'react-router-dom';
import ProfilePopUp from './profilepopup';
import Dropdown from 'react-bootstrap/Dropdown';

function MessagingPage() {

  // Set-up profile pop-up
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  // Set channels and channel list functions (one for each group of channels) to display and navigate through channels
  const channel_names = ["#main", "#exec", "#finance", "#social", "#random"];
  const dm_names = ["#user2", "#user3", "#user2, user3"];
  const external_names = ["#RSO15", "#RSO2", "#HUB Activities"];

  const [currentChannel, setCurrentChannel] = useState(null);

  const changeChannel = (newChannel) => {
    setCurrentChannel(newChannel);
  }

  function ChannelList(props) {
    const { channel_names, currentChannel, changeChannelFunction } = props;
    
    const handleClick = (event) => {
      event.preventDefault();
      const linkName = event.target.textContent;
      changeChannelFunction(linkName);
    }

    const channelArray = channel_names.map((channelNameString) => {
      let classListString = "";
      if(channelNameString === currentChannel) {
        classListString += "bg-purple";
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
      let classListString = "";
      if(dmNameString === currentChannel) {
        classListString += "bg-purple";
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
      let classListString = "";
      if(externalNameString === currentChannel) {
        classListString += "bg-purple";
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

  // Create message box form for typing in forms
  function MessageBoxForm(props) {
    
    const {addMessageFunction, currentChannel} = props;

    const [typedText, setTypedText] = useState('');
    console.log(typedText);

    const handleChange = (event) => {
      const typedValue = event.target.value;
      setTypedText(typedValue);
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      const userObj = { userId: "nkanna", userName: "nkanna", userImg: "/img/noUser.jpg" }

      addMessageFunction(userObj, typedText, currentChannel);
      setTypedText('');
    }

    return (
      <form className="my-2" onSubmit={handleSubmit}>
        <div className="input-group">
          <textarea rows="2" placeholder="Type a new message" value={typedText} onChange={handleChange} />
          <button className="btn" type="submit">
            <span id="send-message" className="material-icons">send</span>
          </button>
        </div>
      </form>
    );
  }

  // Create messaging display to display sent messages
  function MessagingDisplay(props) {
    const { currentChannel } = props;
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
      setChats(newArray);
    }

    const chronologicalMessages = chats
      .sort((m1, m2) => m1.timestamp - m2.timestamp);

    const channelMessages = chronologicalMessages.filter((msgObj) => {
      return msgObj.channel === currentChannel;
    })

    const messageItemArray = channelMessages.map((chatObj) => {
      const elem = <MessageChat key={chatObj.timestamp} messageData={chatObj} />
      return elem;
    });

    return (
      <div id="chat-area" className="scrollable-pane">
        {messageItemArray.length === 0 && <p>No messages found</p>}
        {messageItemArray}

        <MessageBoxForm className="message_box" addMessageFunction={addMessage} currentChannel={currentChannel} />
      </div>
    )
  }

  //Display message, and allow user to favorite/'like' messages
  function MessageChat(props) {
    const {userName, userImg, text} = props.messageData;
    const [color, setColor] = useState('white');

    const handleClick = (event) => {
      setColor('#D22B2B');
    }

    return (
      <div>
        <img id="messageImg" src={userImg} alt={userName + " profile picture"}/>
        <strong>{userName}</strong>
        <p>{text}</p>
        <button id="likeBtn" onClick={handleClick} alt="Like">
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
      <div id="header">
        <div className="container">
          <h1 id="messaging-h1">Messaging</h1>
        </div>
        <NavLink to="/homepage" className="home-icon" aria-label="Go to homepage">
          <span className="material-icons home-icon">home</span>
        </NavLink>
        <div className="nav-right">
          <div className="profile-icon" onClick={toggleProfile}>
            <span className="material-icons">person</span>
          </div>
        </div>
      </div>
      {/* Main section of content */}
      <div id="messaging-main">
        <div id="main-content">
          <div id="left-rect">
            <div id="channels">
              <div id="channel-section">
                <Dropdown>

                  <Dropdown.Toggle variant="light" id="channels-dropdown">
                    <h2>channels</h2>
                  </Dropdown.Toggle>
                  
                  <Dropdown.Menu>
                    <Dropdown.Item>
                    <ChannelList channel_names={channel_names} currentChannel={currentChannel} changeChannelFunction={changeChannel}/>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div id="dm_section">
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dms-dropdown">
                    <h2>direct messages</h2>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                    <DmList dm_names={dm_names} currentChannel={currentChannel} changeChannelFunction={changeChannel}/>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div id="external-section">
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="externals-dropdown">
                    <h2>external channels</h2>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                    <ExternalList external_names={external_names} currentChannel={currentChannel} changeChannelFunction={changeChannel}/>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div id="back-arrow">
              <h4>back</h4>
              <span id="back-arrow-icon" class="material-icons upper-lower-left" aria-label="Go-back">arrow_back</span>
            </div>
            <div id="right-rect">
              <div>
                <h2 id="current-channel">{currentChannel}</h2>
              </div>
              <div id="messaging-chats" className="d-flex">
                <MessagingDisplay currentChannel={currentChannel} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isProfileOpen && (
        <ProfilePopUp isOpen={isProfileOpen} onClose={toggleProfile} >
          <div className="profile-content">
              <h2>Jane Doe</h2>
              <p>Role: Student</p>
              <p>Username: nkanna</p>
              <p>Email: nkanna@uw.edu</p>
          </div>
        </ProfilePopUp>
      )}
    </div>
  );
}

export default MessagingPage;

/*
CITATIONS:
Work supported by:
Chatbot demo from INFO340 C Lectures 13, 14, & 15
*/