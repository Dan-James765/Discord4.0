import { useAuthState } from "react-firebase-hooks/auth";
import { BiHash, BiQuestionMark, BiSearch, BiUser } from "react-icons/bi";
import { BsBell, BsChatDots, BsInbox, BsPlusCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from "../features/counter/channelSlice";
import { auth } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore"

function Chat() {

    const channelId = useSelector(selectChannelId)
    const channelName = useSelector(selectChannelName)
    const [user] = useAuthState(auth)
    const [messages] = useCollection()

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
        <main className="flex-grow overflow-y-scroll scrollbar-hide "></main>
            <div className="flex items-center p-2.5 bg-discord_chatInputBG mx-5 mb-7 rounded-lg">
                <BsPlusCircleFill className="icon mr-4"/>
                <form >
                    <input type="text" disabled={!channelId} placeholder={channelId ? `Message #${channelName}` : "Select a channel"}/>
                </form>
            </div>

        
       
        
        </div>
        </>
    )
}

export default Chat
