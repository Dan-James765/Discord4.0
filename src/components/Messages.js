import moment from "moment"
import { auth, db } from "../firebase";
import { BsTrash } from "react-icons/bs"
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { selectChannelId } from "../features/counter/channelSlice";

function Messages({id, message, timestamp, name, email, photoURL }) {


    const [user] = useAuthState(auth)
    const channelId = useSelector(selectChannelId)

    return (
        <div className="flex items-center p-1 pl-5 my-5 mr-2 hover:bg-discord_messageBG group">
            <img src={photoURL} alt="" className="h-10 rounded-full cursor-pointer mr-3 transform hover:scale-105 delay-75"/>
        
            <div className="flex flex-col">
                <h4 className="flex items-center space-x-2 font-medium">
                    <span className="hover:underline text-gray-300 text-sm cursor-pointer">{name}</span>
                    <span className=" text-discord_message text-xs cursor-pointer py-1">{moment(timestamp?.toDate().getTime()).format("LL")}</span>
                </h4>
                <p className="text-sm text-white ">{message}</p>
            </div>
            {user?.email === email && (
                <div className="hover:bg-discord_deleteiconBg rounded-sm hover:opacity-70 p-1 ml-auto hover:text-white text-discord_deleteiconBg cursor-pointer " onClick={() => db.collection("channels").doc(channelId).collection("messages").doc(id).delete()}> 
                    <BsTrash className="h-5 text-xs items-center opacity-0 group-hover:opacity-100"/> 

                </div>

            )}
            
        </div>

    )
}

export default Messages
