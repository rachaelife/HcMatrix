import { useNavigate } from "react-router-dom"
import type { Employee } from "../types"

const EmployeeTable = ({user}: {user: Employee[]}) => {

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
                    {user && user.map((user:Employee)=>(

                    <tr onClick={gotoProfilePage}>
                        <td className="w-58 h-16 text-[14px] flex flex-col pl-3 justify-center">
                            <span className="text-[#1453E6]">{user.name}</span>
                            <span>{user.email}</span>
                        </td>
                        <td className="text-center text-[14px] text-[#4A5565]">{user.jobTitle}</td>
                        <td className="text-center text-[14px] text-[#4A5565]">{user.department}</td>
                        <td className="text-center text-[14px] text-[#4A5565]">{user.location}</td>
                        <td className="text-center text-[14px] text-[#4A5565]">{user.type}</td>
                        <td className="text-center text-[14px] text-[#4A5565]">{user.startDate}</td>
                        <td className="text-center text-[14px] w-36.75 flex justify-center items-center">
                            <button className="bg-[#DCFCE7] w-32.75 h-5 rounded-lg text-center text-[#008236]">
                                {user.status}
                            </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
  )
}

export default EmployeeTable