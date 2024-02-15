import { signInGoogle } from "../../utils/firebase.util"
import "./sign_in.styles.scss"

export const SignIn = () => {

    const signInGoogleWrap = async() => {
        const {user} = await signInGoogle();
        
    }
    const signIn = async(event) => {
        event.preventDefault();
        const [email, password] = event.target;
        const obj = {
            email: email.value,
            password: password.value
        }
        let res = await fetch("api/user/signin", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(obj),
            
        });
        const data = await res.json();
        console.log('ret data ', data);
    }

    return (
         
        <div className="sign-in-group">
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