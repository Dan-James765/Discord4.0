import { useAuthState } from "react-firebase-hooks/auth"
import { Redirect } from "react-router-dom"
import { auth, db } from "../firebase"
import ServerIcon from "./ServerIcon"
import { BiChevronDown, BiPlus } from 'react-icons/bi';
import Channel from "./Channel";
import { useCollection } from 'react-firebase-hooks/firestore'
import { BsFillMicFill } from 'react-icons/bs';
import { AiTwotonePhone } from 'react-icons/ai';
import { FaCog } from 'react-icons/fa';
import Chat from "./Chat";



function Home() {

    const [user] = useAuthState(auth)
    const [channels] = useCollection(db.collection("channels"))




    const handleAddChannel = () => {
        const channelName= prompt("Enter a new channel name")

        if(channelName) {
            db.collection("channels").add({
                channelName: channelName,

            })
        }


    }

    return (
        <>
        {!user && <Redirect to="/"/>}
        <div className="flex">
            <div className="flex flex-col space-y-3 bg-discord_serverContainerBG p-3 min-w-max h-screen">
                <div className="server-default hover:bg-discord_purple">
                    <img src="https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png" className="h-5"/>
                </div>
                <hr className="border-gray-400 border-1 w-8 mx-auto" />
                <ServerIcon image="https://forums2.cubiccastles.com/uploads/editor/y7/3d73bziwurfn.png"/> 
                <ServerIcon image="https://scontent.flhr3-3.fna.fbcdn.net/v/t1.6435-9/198516518_10218960170982832_6052204744790778098_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ObI00VosJ3kAX9ikOnF&_nc_ht=scontent.flhr3-3.fna&oh=903c4add484938fe01a9a9cb79d7c4cc&oe=60E82EDD"/> 
                <ServerIcon image="https://scontent.flhr3-4.fna.fbcdn.net/v/t1.6435-9/54256140_10220194386076254_9036174014652874752_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7l6DGrEopGQAX-olFrE&_nc_ht=scontent.flhr3-4.fna&oh=032a220f8ade3cbe7ff45e18599dd9e2&oe=60E8DC45"/> 
                

                <div className="server-default hover:bg-discord_green group">
                    <BiPlus className="text-discord_green text-3xl group-hover:text-white"/> 
                </div>
            </div>
            <div className="bg-discord_channelsBG flex flex-col min-w-max">
                <h2 className="flex text-white font-bold text-sm items-center justify-between border-b border-gray-800 p-4 hover:bg-discord_serverNameHoverBG cursor-pointer">Official SUPA Server... <BiChevronDown className="text-3xl ml-2"/> </h2>
            <div className="text-discord_channel flex-grow overflow-y-scroll scrollbar-hide ">
                <div className="flex items-center p-2 mb-2">
                    <BiChevronDown className=" mr-2 text-2xl "/> 
                    <h4 className="font-semibold">Channels</h4>
                    <BiPlus className="h-6 ml-auto cursor-pointer hover:text-white" onClick={handleAddChannel}/> 
                </div>
                <div className="flex flex-col space-y-2 px-2 mb-4 ">
                    {channels?.docs.map((doc) => (
                        <Channel
                        key={doc.id}
                        id={doc.id}
                        channelName={doc.data().channelName}
                        />
                    ))}
                          
             </div>
            </div>
            <div  className="bg-discord_userSectionBg p-2 flex justify-between items-center space-x-8 ">
                <div  className="pl-2 flex items-center space-x-1"> 
                    <img src={user?.photoURL} alt="" className="h-10 rounded-full cursor-pointer" onClick={() => auth.signOut()} />
                    <h4 className="text-white text-xs font-medium">{user?.displayName}<span className="text-discord_userID block">#{user?.uid.substring(0, 4)}
                        
                        </span></h4>

                </div>
                <div className="text-gray-400 flex items-center">
                <div  className="icondiv">
                    <BsFillMicFill className="icon"/> 
                </div>
                <div  className="icondiv">
                    <AiTwotonePhone className="icon"/> 
                </div>
                <div  className="icondiv">
                    <FaCog className="icon"/> 
                </div>
                </div>


            </div>
            </div>
            <div  className="bg-discord_chatBg flex-grow ">
                <Chat/> 

            </div>

        </div>
            
        </>
    )
}

export default Home
