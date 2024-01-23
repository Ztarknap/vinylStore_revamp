import { Fragment } from "react";

export const SignUp = () => {

    const signupClickHandler = (event) => {
        event.preventDefault();
        const [email, password] = event.target;
        console.log('event ',email.value);
    }
    return (
        <Fragment>
            <form onSubmit={(event) => signupClickHandler(event)}>
            <div>
            <label form="signupEmail">Email</label> 
            <input type="email" id="signupEmail" name="email"></input>
            </div>
            <div>
            <label from="signupPwd">Password</label>
            <input type="password" id="signupPwd" name="password"></input>
            </div>
            <button type="submit"> Sign Up</button>
            </form>
        </Fragment>
    )
}