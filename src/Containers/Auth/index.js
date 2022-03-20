import Login from "./containers/Login";
import WelcomeSideBar from "./containers/WelcomeSideBar";
import style from "./Auth.module.scss";

function SignIn() {
  return (
    <main className={style["sign-wrapper"]}>
      <WelcomeSideBar />
      <Login />
    </main>
  );
}

export default SignIn;
