import { useState, useRef,useContext } from "react";
import classes from "./AuthForm.module.css";
import CartContext from "../../Store/CartContext";
import { useHistory } from "react-router-dom";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authCtx=useContext(CartContext)
  const history=useHistory()

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const token=localStorage.getItem('ecomAuthToken')
    setIsLoading(true);
    let url;
    if (isLogin) {
      // url =
      //   "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDYPP5lWxLw7WQ5nQ8RhTmxH7JiBv7HDKk";
      url='http://localhost:5000/user/login'
    } else {
      // url =
      //   "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDYPP5lWxLw7WQ5nQ8RhTmxH7JiBv7HDKk";
      url='http://localhost:5000/user/signup'
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
        "Authorization":token
      },
    }).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        console.log("res",res)
        return res.json();
      } 
      else
       {
        return res.json().then((data) => {
          let errorMessage = "Authentication Failed!";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          alert(errorMessage);
          throw new Error(errorMessage); 
        });
      }
    }).then(data=>{
      console.log("data",data,"data.token",data.token)
      authCtx.login(data.token);
      history.replace('/Store')
    })
    .catch((err)=>{
      alert(err.message)
    })
  };

  return (
    <section className={`${classes.auth} bg-primary`}>
      <h1 style={{ fontFamily: "'Playfair Display', serif" }}>
        {isLogin ? "Login" : "Sign Up"}
      </h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
