import RegisterCard from "../../components/RegisterCard";
import css from './styles.module.css';

const RegisterPage = () => {
    return ( 
        <div className={`${css.gameBackground} flex h-screen w-screen justify-center items-center`}>
            <RegisterCard/>
        </div>
    );
}
 
export default RegisterPage;