import LoginForm from "../../components/LoginForm/LoginForm";
import Navbar from "../../components/Navbar/Navbar";

function Login() {
  const handleLoginSuccess = (userData) => {
    console.log('Logged in user data:', userData);
  };
    return (
        <>
            <Navbar />
            <LoginForm onLoginSuccess={handleLoginSuccess}/>
        </>
    )
}

export default Login