import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { Auth } from "../firebase.config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user] = useAuthState(Auth);
  const navigate = useNavigate();

  const logOut = async () => {
    await signOut(Auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <nav className="flex justify-between p-5 items-center">
      <span className="text-xl font-bold text-indigo-500">NEXTGEN</span>
      <ul className="flex gap-5 items-center">
        <Link to="/">Home</Link>
        {user && <Link to="generate">Generate</Link>}
        {user ? (
          <div className="flex gap-5 items-center">
            <Link onClick={logOut}>Logout</Link>
            <img className="w-10 rounded-full" src={user.photoURL} />
          </div>
        ) : (
          <Link to="login">Login</Link>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
