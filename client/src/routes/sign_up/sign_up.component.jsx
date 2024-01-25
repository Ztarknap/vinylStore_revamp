import { Fragment, useEffect } from "react";
 

export const SignUp = () => {

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
            console.log('answer ', data);

         
    }
    return (
        <Fragment>
            <form onSubmit={(event) => signupClickHandler(event)}>
            <div>
            <label htmlFor="signupEmail">Email</label> 
            <input type="email" id="signupEmail" name="email"></input>
            </div>
            <div>
            <label htmlFor="signupPwd">Password</label>
            <input type="password" id="signupPwd" name="password"></input>
            </div>
            <button type="submit"> Sign Up</button>
            </form>
        </Fragment>
    )
}