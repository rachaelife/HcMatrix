import { useNavigate } from "react-router-dom"

const EmployeeTable = () => {

    const navigate = useNavigate()

    const gotoProfilePage = ()=> navigate('/profile')
  return (
     <table className="w-full">
                <thead>
                    <tr>
                        <th className="w-58 text-[14px] font-normal h-9 text-left pl-3">Employee</th>
                        <th className="text-[14px] text-[#0A0A0A] h-9 font-normal">Job Title</th>
                        <th className="text-[14px] h-9 font-normal">Department</th>
                        <th className="text-[14px] h-9 font-normal">Location</th>
                        <th className="text-[14px] h-9 font-normal">Type</th>
                        <th className="text-[14px] h-9 font-normal">Start Date</th>
                        <th className="text-[14px] h-9 font-normal  w-36.75">Status</th>
                    </tr>
                </thead>

                <tbody>
                    <tr onClick={gotoProfilePage}>
                        <td className="w-58 h-16 text-[14px] flex flex-col pl-3 justify-center">
                            <span className="text-[#1453E6]">Sarah Johnson</span>
                            <span>sarah.johnson@company.com</span>
                        </td>
                        <td className="text-center text-[14px] text-[#4A5565]">Senior Software Engineer</td>
                        <td className="text-center text-[14px] text-[#4A5565]">Engineering</td>
                        <td className="text-center text-[14px] text-[#4A5565]">New York, NY</td>
                        <td className="text-center text-[14px] text-[#4A5565]">Full-time</td>
                        <td className="text-center text-[14px] text-[#4A5565]">Mar 15, 2021</td>
                        <td className="text-center text-[14px] w-36.75 flex justify-center items-center">
                            <button className="bg-[#DCFCE7] w-32.75 h-5 rounded-lg text-center text-[#008236]">
                                Active
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
  )
}

export default EmployeeTable