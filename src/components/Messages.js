import moment from "moment"

function Messages({is, message, timestamp, name, email, photoURL }) {
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
            
        </div>

    )
}

export default Messages
