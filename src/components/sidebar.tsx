import { Link, useLocation } from "react-router-dom"


const Sidebar = ({ onLinkClick }: { onLinkClick?: () => void }) => {
    const location = useLocation();

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
        <nav className='flex flex-col gap-2'>
            {
                links.map((link) => (
                    <Link
                        to={link.url}
                        key={link.title}
                        onClick={onLinkClick}
                        className={`flex items-center gap-5 py-3 px-3 text-[#364153] text-[14px] rounded-lg transition-all ${(link.url === '/' ? location.pathname === '/' : location.pathname.startsWith(link.url))
                            ? 'bg-[#EBF2FF] text-[#1453E6] font-medium'
                            : 'hover:bg-gray-50'
                            }`}
                    >
                        <img src={link.icon} alt="" className={(link.url === '/' ? location.pathname === '/' : location.pathname.startsWith(link.url)) ? 'brightness-75' : ''} />
                        <span>{link.title}</span>
                    </Link>
                ))
            }
        </nav>
    )
}

export default Sidebar