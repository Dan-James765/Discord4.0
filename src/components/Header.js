import { AiOutlineMenu } from 'react-icons/ai';
function Header() {


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
                    <button className="bg-white p-2 rounded-full text-xs md:text-sm px-4 focus:outline-none  transition duration-200 ease-in-out whitespace-nowrap font-medium hover:text-discord_blurple ">Login</button>
               <AiOutlineMenu className="text-white cursor-pointer h-9 lg:hidden sm:text-xl"/>
                </div>

            </header>
            
        </> 
    )
}

export default Header
