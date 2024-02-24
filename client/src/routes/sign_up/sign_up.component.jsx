import "./sign_up.styles.scss"
import { useNavigate } from "react-router-dom";
import { setToken, getToken } from "../../utils/auth.util";
import { useDispatch } from 'react-redux';
import { setCurrentUser } from "../../store/user/user.action";

export const SignUp = () => {
    
    const dispatch = useDispatch();


    const navigate = useNavigate();
    const signupClickHandler = async (event) => {
        event.preventDefault();

        const [email, password] = event.target;
        const obj = {
            email: email.value,
            password: password.value
        }
        console.log('event ',obj);
         
         
            console.log('sending');
            const res = await fetch("/api/user/signup",
            { method: "POST", 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(obj),
            }
            );
            const data = await res.json();
            console.log('got the dataaa ', data)
            if(data.status == 0) {
                const currentUser = {
                    email: email.value,
                    token: data.token,
                }
                dispatch(setCurrentUser(currentUser));

                alert('Registration succesfull, redirecting...')
                navigate("/home", { replace: true});
            }
            else if (data.status ==1) {
                alert('Error - ' + data.message);
                return;
            }
            console.log('answer ', data);

         
    }
    return (
            <div className="sign-up-group">
            <form onSubmit={(event) => signupClickHandler(event)}>
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