import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ApiServices } from '../api/services'
import { useMutation } from '@tanstack/react-query'
import type { LoginType } from '../types/type'

const LoginFormComponent = () => {
    const [email, setEmail] = useState('hcmut@capital.com')
    const [password, setPassword] = useState('password')
    const navigate = useNavigate()

    const { mutate, isPending: loading, error: mutationError } = useMutation({
        mutationFn: (data: LoginType) => ApiServices.login(data),
        onSuccess: () => {
            navigate('/')
        }
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        mutate({ email, password })
    }

    const error = mutationError ? (mutationError as any).response?.data?.message || 'Login failed. Please check your credentials.' : ''

    return (
        <div>
            <form onSubmit={handleSubmit} className="md:w-md w-full h-159.75 flex flex-col gap-10">
                <div className="text-center flex flex-col items-center">
                    <img src="/assets/hcmatrix.png" alt="" width={162} height={38} />
                    <p className="text-[#4A5565] text-[16px] text-center">Sign in to manage your organization</p>
                </div>
                <div className="flex flex-col gap-10">
                    {error && (
                        <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm text-center">
                            {error}
                        </div>
                    )}
                    <div className="w-full">
                        <label htmlFor="email">Email Address</label>
                        <div className="md:w-md w-full flex items-center gap-2 border-[0.89px] border-[#F4F4F4] px-5 rounded-lg focus-within:border-[#155DFC]">
                            <img src="/assets/envelope.png" alt="" />
                            <input
                                id="email"
                                type="email"
                                placeholder="you@company.com"
                                className="flex-1 h-9 pl-2 outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center">
                            <label htmlFor="password">Password</label>
                            <Link to={""} className="text-[#155DFC]">Forgot Password</Link>
                        </div>
                        <div className="md:w-md flex items-center gap-2 border-[0.89px] border-[#F4F4F4] px-5 rounded-lg focus-within:border-[#155DFC]">
                            <img src="/assets/password.png" alt="" />
                            <input
                                id="password"
                                type="password"
                                className="flex-1 h-9 rounded-lg pl-2 outline-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <button
                        disabled={loading}
                        className={`w-full md:w-md bg-[#155DFC] text-white h-9 rounded-lg ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {loading ? 'Signing In...' : 'Sign In'}
                    </button>
                </div>
                <div className="flex items-center">
                    <div className="h-px flex-1 border-[#F4F4F4] border"></div>
                    <p className="text-[14px] px-2">Or continue with</p>
                    <div className="h-px flex-1 border-[#F4F4F4] border"></div>
                </div>
                <button type="button" className="w-full md:w-md bg-white text-[#0A0A0A] h-9 rounded-lg border-[0.89px] border-[#F4F4F4] flex justify-center items-center gap-10 text-[14px]">
                    <img src="/assets/google.png" alt="" />
                    <span>Login with Google</span>
                </button>
                <p className="text-center">Don't have an account? <Link to={""} className="text-[#155DFC]">Contact your administrator</Link> </p>
            </form>
        </div>
    )
}

export default LoginFormComponent