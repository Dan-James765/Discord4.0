import { AiOutlineMenu } from 'react-icons/ai';
import {useAuthState} from "react-firebase-hooks/auth"
import { auth, provider } from '../firebase';
import { useHistory } from 'react-router-dom';

function Header() {

    const [user] = useAuthState(auth)
    const history = useHistory()

    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithPopup(provider)
        .then(() => history.push("/channels"))
        .catch((error) => alert (error.message))
    }

    return (
        <>
            <header className=" flex items-center justify-between py-4 px-6 bg-discord_blue">
                <a href="">
                    <img src="https://upe.cs.fiu.edu/wp-content/uploads/sites/3/2018/12/Discord-LogoWordmark-White.png" alt="" className="w-32 h-12 object-contain" />
                </a>
                
                <div className="text-white hidden lg:flex space-x-6 ">
                    <a href="" className="link">Download</a>
                    <a href="" className="link">Why Discord</a>
                    <a href="" className="link">Nitro</a>
                    <a href="" className="link">Safety</a>
                    <a href="" className="link">Support</a>             
                </div>

                <div className="flex space-x-4 items-center">
                    <button className="bg-white p-2 rounded-full text-xs md:text-sm px-4 focus:outline-none  transition duration-200 ease-in-out whitespace-nowrap font-medium hover:text-discord_blurple" onClick={!user ? signIn : () => history.push("/channels")}> {!user ? "Login" : "Open Discord"}</button>
               <AiOutlineMenu className="text-white cursor-pointer h-9 lg:hidden sm:text-xl"/>
                </div>

            </header>
            
        </> 
    )
}

export default Header




