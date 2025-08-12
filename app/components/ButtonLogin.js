import Link from "next/link";
const ButtonLogin = ({ isLoggedIn, name }) => {
  //console.log("ButtonLogin props", props);
  if (isLoggedIn) {
    return (
      <Link href="/dashboard" className="btn btn-primary">
        Welcome back {name}
      </Link>
    );
  } else {
    return <button>Login</button>;
  }
};
export default ButtonLogin;
