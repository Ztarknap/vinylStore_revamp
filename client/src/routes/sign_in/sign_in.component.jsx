import { signInGoogle } from "../../utils/firebase.util"
import { setCurrentUser } from "../../store/user/user.action"
import { signInAPI } from "../../api/post-data.api"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import {ToastContainer,toast} from 'react-toastify'
import "./sign_in.styles.scss"

export const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signInGoogleWrap = async() => {
        const {user} = await signInGoogle();
        navigate("/home", { replace: true});
        
    }
    const signIn = async(event) => {
        event.preventDefault();
        const [email, password] = event.target;
        const objUser = {
            email: email.value,
            password: password.value
        }
        const data = await signInAPI(objUser);
        if (data.status == 0) {
          const currentUser = {
            email: email.value,
            token: data.token,
            accessToken: null,
            id: data.id

          } 
          dispatch(setCurrentUser(currentUser));
          navigate("/home", { replace: true});
        }
        else {
            toast("Wrong login or password", {
                theme: "dark"
            });
        }
         
    }

    return (
         
        <div className="sign-in-group">
                    <div>
        <ToastContainer />
        </div>
        <form onSubmit={(event) => signIn(event)} >
            <label htmlFor="signinEmail">Email</label> 
            <input type="email" id="signinEmail" name="email" className="input-field form-control input-field-primary"></input>
            
            <label htmlFor="signinPwd">Password</label>
            <input type="password" id="signinPwd" name="password" className="input-field form-control input-field-primary"></input>
            <div className="sign-in-btn">
            <button type="submit" className="btn-common-primary"> Sign in</button>
            <button onClick={signInGoogleWrap} className="btn-common-primary">Sign in with Google</button>
            </div>
        </form>
        </div>
 
    )
}