import "./sign_up.styles.scss"
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {ToastContainer,toast} from 'react-toastify'
import { setCurrentUser } from "../../store/user/user.action";
import { signUpAPI } from "../../api/post-data.api";

export const SignUp = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signUpClickHandler = async (event) => {
        event.preventDefault();

        const [email, password] = event.target;
        const objUser = {
            email: email.value,
            password: password.value
        }
         
        const data = await signUpAPI(objUser);
        if(data.status == 0) {
            const currentUser = {
                email: email.value,
                token: data.token,
                id: data.id
                }
            dispatch(setCurrentUser(currentUser));
            toast("Registration succesfull, redirecting", {
                theme: "dark",
                onClose: () => { navigate("/home", { replace: true})}
            });
            }
        else if (data.status ==1) {
                toast(data.message, {
                    theme: "dark" 
                });
                return;
            }

         
    }
    return (
            <div className="sign-up-group">
                <div>
                    <ToastContainer/>
                </div>
                <form onSubmit={(event) => signUpClickHandler(event)}>
                <div>
                    <label htmlFor="signupEmail">Email</label> 
                    <input type="email" id="signupEmail" name="email" className="input-field-primary form-control"></input>
                </div>
                <div>
                    <label htmlFor="signupPwd">Password</label>
                    <input type="password" id="signupPwd" name="password" className="input-field-primary form-control"></input>
                </div>
                <button type="submit" className="btn-common-primary sign-up-btn"> Sign Up</button>
                </form>
            </div>
    )
}