import { Link, useNavigate } from "react-router-dom"
import { ApiServices } from "../api/services"
import { useMutation } from "@tanstack/react-query"

const Navbar = ({ onMenuClick }: { onMenuClick?: () => void }) => {
    const navigate = useNavigate()

    const { mutate: logoutMutation } = useMutation({
        mutationFn: () => ApiServices.logout(),
        onSettled: () => {
            localStorage.removeItem("auth_token")
            localStorage.removeItem("user_name")
            navigate('/login')
        }
    })

    const handleLogout = () => {
        logoutMutation()
    }

    return (
        <nav className='flex justify-between items-center px-4 md:px-10 py-5 bg-white shadow sticky top-0 z-50'>
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="lg:hidden p-1 cursor-pointer bg-gray-200 hover:bg-gray-100 rounded-lg"
                    aria-label="Toggle Menu"
                >
                    <img src="assets/menu.png" alt="" width={30} />
                </button>
                <Link to={'/'} className="flex-shrink-0">
                    <img src="/assets/hcmatrix.png" alt="" className="h-8 md:h-auto" />
                </Link>
            </div>

            <div className="flex items-center gap-3 md:gap-5">
                <Link to={""} title="Help" className="hidden sm:block">
                    <img src="/assets/info.png" alt="" width={36} height={36} />
                </Link>
                <Link to={""} title="Notifications">
                    <img src="/assets/notification.png" alt="" width={36} height={36} />
                </Link>
                <div className="relative group cursor-pointer">
                    <img src="/assets/avatar.png" alt="" width={36} height={36} />
                    <div className="absolute right-0 top-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block border border-gray-100">
                        <button
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar