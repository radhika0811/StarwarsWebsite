import user from "../../assets/images/user13.png";

const Login = ({
  state,
  checkPasswordName,
  checkUserName,
  handleSignIn,
  errorMessage,
}) => {
  return (
    <div className="login">
      <h1 id="login">Login</h1>
      <img src={user}></img>
      <form onSubmit={handleSignIn}>
        <label>
          <b>Username</b>
        </label>
        <input
          required
          type="text"
          value={state.username}
          onChange={checkUserName}
          placeholder="Enter your username here"
        ></input>
        <label>
          <b>Password</b>
        </label>
        <input
          required
          type="password"
          value={state.password}
          onChange={checkPasswordName}
          placeholder="Enter password here"
        ></input>
        {errorMessage && <div>{errorMessage}</div>}
        <button type="submit" className="login-btn">
          Sign in
        </button>
      </form>
    </div>
  );
};
export default Login;
