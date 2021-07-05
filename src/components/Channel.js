import { BiHash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setChannelInfo } from "../features/counter/channelSlice";

function Channel({id, channelName}) {
    const dispatch = useDispatch()
    const history = useHistory()

    const setChannel = () => {
        dispatch(
            setChannelInfo({
            channelId: id, 
            channelName: channelName, 

        }))

        history.push(`/channels/${id}`)
            }

    return (
        <>
        <div className="font-medium hover:bg-discord_channelHoverBG w-full py-1 rounded-md hover:text-white cursor-pointer" onClick={setChannel}>
        <h1 className="flex items-center"> <BiHash/> {channelName}</h1>
        </div>
        
        
            
        </>
    )
}

export default Channel


