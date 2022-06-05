import React, { useContext, useState, useEffect, useRef } from 'react'
import ChatOnline from '../ChatOnline/ChatOnline'
import Conversations from '../Conversations/Conversations'
import Message from '../Message/Message'
import "./Messenger.css"
import axios from "axios"
import { AppContext } from '../../Context/AppContext'
import { io } from 'socket.io-client'
function Messengers() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState("")
  const { cuser } = useContext(AppContext);
  const scrollRef = useRef();
  const socket = useRef()

  useEffect(() => {
    socket.current = io("ws://localhost:5000")

    socket.current.on("getMessage",data=>{
      setArrivalMessage({
        sender:data.senderId,
        text:data.text,
        createdAt:Date.now(),
      })
    })
  }, [])


  useEffect(() => {
    socket.current.emit("addUser", cuser._id)
    socket.current.on("getUsers", users => {
      console.log(users);
    })
  }, [cuser])


  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(process.env.React_App_PUBLIC_URL + "/conversation/" + cuser._id);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [cuser._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("/message/" + currentChat?._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: cuser._id,
      text: newMessage,
      conversationId: currentChat._id,
    };
    const receverId=currentChat.members.find(member=>member !==cuser._id)
    socket.current.emit("sendMessage",{
      senderId:cuser._id,
      receverId:receverId,
      text:newMessage,
    })

    try {
      const res = await axios.post(process.env.React_App_PUBLIC_URL + "/message", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    arrivalMessage && currentChat ?.members.includes(arrivalMessage.sender) &&
    setMessages((prev)=>[...messages,arrivalMessage])
  }, [arrivalMessage,currentChat])
  

  return (
    <div className='messenger'>
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input placeholder='serch for friends...' className="chatMenuInput" />
          {conversations.map((c) => (
            <div onClick={() => setCurrentChat(c)}>
              <Conversations conversation={c} currentUser={cuser} />
            </div>
          ))}

        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          {currentChat ? (
            <>
              <div className="chatBoxTop">
                {messages.map((m) => (
                  <div ref={scrollRef}>
                    <Message message={m} own={m.sender === cuser._id} />

                  </div>
                ))}
                <div className="chatBoxBottom">
                  <textarea name="" className='chatMessageinput' placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}></textarea>
                  <button onClick={handleSubmit} className='chatSubmitButton'>send</button>
                </div>
              </div>
            </>) : (<span className="noConversationText">
              Open a conversation to start a chat.
            </span>)}
        </div>
      </div>
      <div className="chatOnline">
        <div className="chatOnlineWrapper">
          <ChatOnline />

        </div>
      </div>

    </div>
  )
}

export default Messengers