import Link from "next/link";
const ButtonLogin = ({ isLoggedIn, name, extraStyle }) => {
  console.log("ButtonLogin props", isLoggedIn, name, extraStyle);
  //console.log("ButtonLogin props", props);
  if (isLoggedIn) {
    return (
      <Link
        href="/dashboard"
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      >
        Welcome back {name}
      </Link>
    );
  } else {
    return <button>Login</button>;
  }
};
export default ButtonLogin;
