import LoginCard from "../../components/LoginCard";
import Authenticated from "../../hoc/Authenticated";
import css from './styles.module.css';

const LoginPage = () => {
    return ( 
        <Authenticated>
            <div className={`${css.gameBackground} flex h-screen w-screen justify-center items-center`}>
                <LoginCard/>
            </div>
        </Authenticated>
    );
}
 
export default LoginPage;