const Footer = () => {
    return (
        <footer className={`flex flex-col text-white`}>
            <div className={`flex flex-col md:flex-row justify-center items-center pt-44 pb-8 text-center`}>
                <div className={`px-3 py-2 md:py-0`}>
                    <h1 className={`font-bold`}>MAIN</h1>
                </div>
                <div className={`px-3 py-2 md:py-0`}>
                    <h1 className={`font-bold`}>ABOUT</h1>
                </div>
                <div className={`px-3 py-2 md:py-0`}>
                    <h1 className={`font-bold`}>GAME FEATURES</h1>
                </div>
                <div className={`px-3 py-2 md:py-0`}>
                    <h1 className={` font-bold`}>SYSTEM REQUIREMENTS</h1>
                </div>
                <div className={`px-3 py-2 md:py-0`}>
                    <h1 className={`font-bold`}>QUOTES</h1>
                </div>
            </div>
            <div className="border-t border-opacity-60 border-white"></div>
            <div className={`flex flex-col-reverse md:flex-row pt-4`}>
                <div className="pt-4 md:pt-0 md:w-1/2 flex md:justify-start">
                    <p className="text-gray-400 text-center md:text-left"> © 2018 Your Games, Inc. All Rights Reserved</p>
                </div>
                <div className="pt-4 md:pt-0 md:w-1/2 flex justify-end">
                    <h1 className="font-bold text-center md:text-left">PRIVACY POLICY | TERMS OF SERVICES | CODE OF CONDUCT </h1>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;