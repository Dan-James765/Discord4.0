import { useAuthState } from "react-firebase-hooks/auth";
import { BiGift, BiHash, BiQuestionMark, BiSearch, BiSmile, BiUser } from "react-icons/bi";
import { BsBell, BsChatDots, BsFillGiftFill, BsInbox, BsPlusCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from "../features/counter/channelSlice";
import { auth, db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore"
import { useRef } from "react";
import firebase from "firebase"
import Messages from "./Messages";

function Chat() {

    const channelId = useSelector(selectChannelId)
    const channelName = useSelector(selectChannelName)
    const [user] = useAuthState(auth)
    const [messages] = useCollection(
        channelId && 
        db
        .collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "asc")
    )
        
    const inputRef = useRef("")
    const chatRef = useRef(null)

    const scrollToBottom = () => {
        chatRef.current.scrollIntoView({
            behavior: "smooth", 
            block: "start", 
        })

    }
    

    const sendMessage = (e) => {
        e.preventDefault()

        if (inputRef.current.value !== ""){
            db.collection("channels").doc(channelId).collection("messages").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: inputRef.current.value,
                name: user?.displayName,
                photoURL: user?.photoURL,
                email: user?.email, 


            })

        }
        inputRef.current.value = ""
        scrollToBottom()

    }

    return (
        <>
        <div className="flex flex-col h-screen">
        <header className="flex items-center justify-between space-x-5 border-b border-gray-800 p-4 -mt-1 ">
            <div>
                <BiHash className="text-discord_chatHeaderIcon text-md"/> 
                <h4 className="text-white font-semibold">{channelName}</h4>
            </div>
            <div className="flex space-x-3">
                <BsBell  className="icon"/> 
                <BsChatDots className="icon"/> 
                <BiUser className="icon"/> 
                <div className="flex bg-discord_chatHeaderInputBG text-xs p-1 rounded-md">
                    <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none text-white pl-1 placeholder-discord_chatHeaderIcon" />
                    <BiSearch className="h-4 text-discord_chatHeaderIcon mr-1 text-lg"/>
                </div>
                <BsInbox className="icon"/> 
                <BiQuestionMark className="icon"/>
            </div>
        </header>
        <main className="flex-grow overflow-y-scroll scrollbar-hide ">
            {messages?.docs.map((doc) => {
                const {message, timestamp, name, photoURL, email} = doc.data()

                return <Messages key={doc.id} id={doc.id} message={message} timestamp={timestamp} name={name} email={email} photoURL={photoURL}/>
            })}
            <div ref={chatRef} className="pb-16"/>
        </main>
            <div className="flex items-center p-2.5 bg-discord_chatInputBG mx-5 mb-7 rounded-lg">
                <BsPlusCircleFill className="icon mr-4"/>
                <form className="flex-grow  ">
                    <input type="text" disabled={!channelId} placeholder={channelId ? `Message #${channelName}` : "Select a channel"} className="bg-transparent focus:outline-none text-white w-full placeholder-discord_chatHeaderIcon text-sm" ref={inputRef}/>
                    <button hidden type="submit" onClick={sendMessage}>Send</button>

                </form>
                    <BiGift  className="icon mr-2 "/>
                    <BiSmile className="icon "/>  
            </div>

        
       
        
        </div>
        </>
    )
}

export default Chat
