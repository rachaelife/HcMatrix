
import LoginFormComponent from "../components/login-form"


const LoginPage = () => {
    return (
        <div className="md:grid flex justify-center items-center grid-cols-2 min-h-screen">

            <div className="flex md:col-span-1 justify-center items-center p-3">
                 <LoginFormComponent />
            </div>


            <div className="md:col-span-1 bg-[url(/assets/login-image.png)] bg-center bg-cover h-screen md:flex flex-col justify-center items-center text-center text-white gap-5 hidden">
                <h1 className="outfit font-bold text-[36px] leading-10">Welcome to the Future of HR <br /> Management</h1>
                <p className="text-[20px]">Streamline your workforce operations with powerful tools <br /> designed for modern HR professionals.</p>
                <img src="/assets/login-dash.png" alt="" />
            </div>
        </div>
    )
}

export default LoginPage