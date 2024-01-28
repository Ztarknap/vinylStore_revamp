import { Fragment } from "react"
import { signInGoogle } from "../../utils/firebase.util"

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
        <Fragment>
        <div>
        <form onSubmit={(event) => signIn(event)}>
        <div>
            <label htmlFor="signinEmail">Email</label> 
            <input type="email" id="signinEmail" name="email"></input>
            </div>
            <div>
            <label htmlFor="signinPwd">Password</label>
            <input type="password" id="signinPwd" name="password"></input>
            </div>
        
        <button type="submit"> Sign in</button>
        </form>
        </div>
        <div>
        <button onClick={signInGoogleWrap}>Sign in with Google</button>
        </div>
        </Fragment>
    )
}