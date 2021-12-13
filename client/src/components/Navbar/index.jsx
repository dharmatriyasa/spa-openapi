import { Link } from "react-router-dom";

const Navbar = (props) => {
    const isLogin = props.isLogin;
    let navbar;
    if(!isLogin){
        navbar = <>
                <div className="px-2">
                    <Link to="/register">
                    <h2>REGISTER</h2>
                    </Link>
                </div>
                <div className="px-2">
                    <Link to="/login">
                        <h2>LOGIN</h2>
                    </Link>
                </div>
                </>
        // return;
    }else{
        navbar = <div className="px-2">
            <h2 className="font-bold">{props.name}</h2>
            </div>
    }
    
    return (
        <nav className="flex flex-row bg-gray-800 w-full h-10 text-white">
            <div className="w-1/2 flex justify-center items-center">
                <h1 className="font-bold">SUIT GAME</h1>
            </div>
            <div className="w-1/2 flex flex-row justify-center items-center">
                {navbar}
            </div>
        </nav>
    );
}
 
export default Navbar;