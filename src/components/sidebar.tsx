import { Link } from "react-router-dom"


const Sidebar = () => {

    const links = [
        {
            title: 'Dashboard',
            url: '/',
            icon: '/assets/dashboard.png'
        },
        {
            title: 'Employee',
            url: '/employee',
            icon: '/assets/user.png'
        },
        {
            title: 'Time & Attendance',
            url: '/time/attendance',
            icon: '/assets/time.png'
        },
        {
            title: 'Recruitment',
            url: '/recruitment',
            icon: '/assets/recruitment.png'
        },
        {
            title: 'Payroll',
            url: '/payroll',
            icon: '/assets/payroll.png'
        },
        {
            title: 'Calendar',
            url: '/calendar',
            icon: '/assets/calendar.png'
        },
        {
            title: 'Reports',
            url: '/reports',
            icon: '/assets/reports.png'
        },
        {
            title: 'Documents',
            url: '/documents',
            icon: '/assets/documents.png'
        },
        {
            title: 'Settings',
            url: '/settings',
            icon: '/assets/settings.png'
        },
    ]

  return (
    <nav className='flex flex-col gap-5'>
        {
            links.map((link)=>(
                <Link to={link.url} key={link.title} className="flex items-center gap-5 py-3 px-2 text-[#364153] text-[14px] rounded-lg">
                    <img src={link.icon} alt="" />
                    <span>{link.title}</span>
                </Link>
            ))
        }
    </nav>
  )
}

export default Sidebar