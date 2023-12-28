import { Fragment } from "react"
import { signInGoogle } from "../../utils/firebase.util"

export const SignIn = () => {

    const signInGoogleWrap = async() => {
        const {user} = await signInGoogle();
        
    }
    return (
        <Fragment>
        <button onClick={signInGoogleWrap}>Log in with Google</button>
        </Fragment>
    )
}