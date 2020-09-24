import React from "react";

const SignIn = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSignIn,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
  <section className="signIn">
      <div className='signInContainer'>
          <label>Username</label>
          <input type="text" autoFocus required value={email} onChange= {(e) =>
              setEmail(e.target.value)
          }></input>
          <p className="errorMsg">{emailError}</p>
          <label>Password</label>
          <input type="password"  required value={password} onChange= {(e) =>
              setPassword(e.target.value)
          }></input>
          <p className="errorMsg">{passwordError}</p>

          <div className="btnContainer">
              {hasAccount ? (
                  <>
                  <button onClick={handleSignIn}>Sign In</button>
                  <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p> 
                  </>
              ) : (
                <>
                  <button onClick={handleSignUp}>Sign Up</button>
                  <p>Already have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p> 
                  </>
              ) }
          </div>
      </div>

  </section>
  );
};

export default SignIn;
