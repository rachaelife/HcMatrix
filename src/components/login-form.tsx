
import { Link } from 'react-router-dom'

const LoginFormComponent = () => {
    return (
        <div>
            <form action="" className="md:w-md w-full h-159.75 flex flex-col gap-10">
                <div className="text-center flex flex-col items-center">
                    <img src="/assets/hcmatrix.png" alt="" width={162} height={38} />
                    <p className="text-[#4A5565] text-[16px] text-center">Sign in to manage your organization</p>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="w-full">
                        <label htmlFor="">Email Address</label>
                        <div className="md:w-md w-full flex items-center gap-2 border-[0.89px] border-[#F4F4F4] px-5 rounded-lg">
                            <img src="/assets/envelope.png" alt="" />
                            <input type="email" placeholder="you@company.com" className="flex-1 h-9  pl-2" />
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center">
                            <label htmlFor="">Password</label>
                            <Link to={""} className="text-[#155DFC]">Forgot Password</Link>
                        </div>
                        <div className="md:w-md flex items-center gap-2 border-[0.89px] border-[#F4F4F4] px-5 rounded-lg">
                            <img src="/assets/password.png" alt="" />
                            <input type="password" value="123456" className="flex-1 h-9 rounded-lg  pl-2" />
                        </div>
                    </div>
                    <button className="w-md bg-[#155DFC] text-white h-9 rounded-lg ">Sign In</button>
                </div>
                <div className="flex items-center">
                    <div className="h-px flex-1 border-[#F4F4F4] border"></div>
                    <p className="text-[14px]">Or continue with</p>
                    <div className="h-px flex-1 border-[#F4F4F4] border"></div>
                </div>
                <button className="w-md bg-white text-[#0A0A0A] h-9 rounded-lg border-[0.89px] border-[#F4F4F4] flex justify-center items-center gap-10 text-[14px]">
                    <img src="/assets/google.png" alt="" />
                    <span>Login with Google</span>
                </button>
                <p className="text-center">Don't have an account? <Link to={""} className="text-[#155DFC]">Contact your administrator</Link> </p>
            </form>
        </div>
    )
}

export default LoginFormComponent