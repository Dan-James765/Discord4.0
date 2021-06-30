import { BiDownload } from 'react-icons/bi';

function Hero() {
    return (
        <>
            <div className="bg-discord_blue pb-8 md:pb-0">
                <div className="p-7 py-9 h-screen md:h-83vh md:flex relative">
                    <div className="flex flex-col gap-7 md:max-w-md lg:max-w-none lg:justify-center">
                        <h1 className="text-5xl text-white font-bold">Your Place to Talk</h1>
                        <h2 className="text-white text-lg font-light tracking-wide lg:max-w-3xl w-full">
                            Whether you are a part of a school club, gaming group, worldwide art community, or just a handful of friends. We have got something for you. Here at discord. </h2>
                            <div className="flex flex-col sm:flex-row md:flex-col md:items-start lg:flex-row sm:items-center gap-6">
                                <button className="bg-white w-60 font-medium flex items-center p-4 justify-center rounded-full text-lg hover:shadow-2xl hover:text-discord_blurple focus:outline-none transition duration-200 ease-in-out ">
                                    <BiDownload className="w-6 mr-2"/>
                                    Download for PC</button>
                                <button className="bg-gray-900 text-white w-72 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl hover:bg-gray-800 focus:outline-none transition duration-200 ease-in-out">Open Discord in your Browser</button>
                            </div>
                    </div>
                    <div className="flex-grow">
                        <img src="https://discord.com/assets/575a0322f3b36ca2fecb23ad2c6dd5ad.svg" alt="" className="absolute -left-36 mt-16 sm:-left-44 md:hidden" />
                        <img src="https://discord.com/assets/e93667acdd3212c58dabd580cf175504.svg" alt="" className="hidden md:inline absolute"/>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Hero
