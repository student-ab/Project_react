import { useState } from 'react';
import User_email from '../Assets/email1.png';
import User_password from '../Assets/Lock1.png';
import user_icon from '../Assets/User1.png';
import './LoginSignup.css';


const LoginSignup = () => {
    const [action , setactions] = useState("Sign-up");
  return (
    <>
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>

        <div className="inputs">

            <div className="input">
                <img src={user_icon} alt=""   width={36} height={36} />
                <input type="text" placeholder='Name' />
            </div>

            <div className="input">
                <img src={User_email } alt=""  width={36} height={36}  />
                <input type="email" placeholder='Email-id' />
            </div>


            <div className="input">
                <img src={User_password} alt=""  width={46} height={56} />
                <input type="password" placeholder='password'  />
            </div>

        </div>
        <div className="forgot-password">Lost Password? <span>click her</span></div>
        <div className="submit-container">
            <div  onClick={()=>{setactions("Sign-up")}} className={action==="Login"?"submit grey":"submit"   }>Sign-up</div>
            <div  onClick={()=>{setactions("Login")}} className={action==="Sign-up"?"submit grey":"submit"}>Login</div>
        </div>
    </div>

    </>
  )
}

export default LoginSignup