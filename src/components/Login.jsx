import { useNavigate } from "react-router-dom";
import { Auth, provider } from "../firebase.config";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const signIn = () => {
    if (Auth.currentUser) {
      document.getElementById("my_modal_1").showModal();
      return;
    }
    
    signInWithPopup(Auth, provider)
      .then((result) => console.log(result))
      .then(()=> navigate("/generate"))
      .catch((error) => console.log(error));
      
  };

  return (
    <div className="flex-1  flex flex-col ">
      <div className="max-w-3xl mx-auto px-3 p-5 grow min-h-[100px] mt-32">
        <button
          onClick={signIn}
          className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg bg-white  dark:text-gray-200 hover:bg-gray-50 max-w-2xl"
        >
          <img
            className="max-w-full w-20"
            src="https://www.vectorlogo.zone/logos/google/google-tile.svg"
            alt=""
          />
          <span className="mx-2">Sign in with Google</span>
        </button>
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Alert!</h3>
          <p className="py-4">User already Logged In</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
