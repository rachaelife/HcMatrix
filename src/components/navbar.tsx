import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-10 py-5 bg-white shadow'>
        <Link to={''}>
            <img src="/assets/hcmatrix.png" alt="" />
        </Link>
        <div className="flex items-center gap-5">
            <Link to={""}>
                <img src="/assets/info.png" alt="" className="" width={36} height={36} />
            </Link>
            <Link to={""}>
                <img src="/assets/notification.png" alt="" className="" width={36} height={36}/>
            </Link>
            <Link to={""}>
                <img src="/assets/avatar.png" alt="" className="" width={36} height={36}/>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar