import { useNavigate } from "react-router-dom"

interface EmployeeTableProps {
    employees: any[]
}

const EmployeeTable = ({ employees }: EmployeeTableProps) => {
    const navigate = useNavigate()

    return (
        <table className="w-full">
            <thead className="bg-[#F9FAFB]">
                <tr className="border-b border-[#F4F4F4]">
                    <th className="w-58 text-[14px] font-normal h-9 text-left pl-3 text-[#4A5565]">Employee</th>
                    <th className="text-[14px] text-[#4A5565] h-9 font-normal">Job Title</th>
                    <th className="text-[14px] text-[#4A5565] h-9 font-normal">Department</th>
                    <th className="text-[14px] text-[#4A5565] h-9 font-normal">Location</th>
                    <th className="text-[14px] text-[#4A5565] h-9 font-normal">Type</th>
                    <th className="text-[14px] text-[#4A5565] h-9 font-normal">Hire Date</th>
                    <th className="text-[14px] text-[#4A5565] h-9 font-normal w-36.75">Status</th>
                </tr>
            </thead>

            <tbody>
                {employees.map((emp) => (
                    <tr
                        key={emp.id}
                        onClick={() => navigate(`/profile/${emp.id}`)}
                        className="cursor-pointer hover:bg-gray-50 border-b border-[#F4F4F4]"
                    >
                        <td className="w-58 h-16 text-[14px] flex flex-col pl-3 justify-center">
                            <h1 className="text-[#1453E6] font-medium">{emp.full_name}</h1>
                            <p className="text-[#4A5565] text-[12px]">{emp.email}</p>
                        </td>
                        <td className="text-center text-[14px] text-[#4A5565]">{emp.job_title}</td>
                        <td className="text-center text-[14px] text-[#4A5565]">{emp.department}</td>
                        <td className="text-center text-[14px] text-[#4A5565]">{emp.location}</td>
                        <td className="text-center text-[14px] text-[#4A5565]">{emp.employment_type}</td>
                        <td className="text-center text-[14px] text-[#4A5565]">{new Date(emp.start_date).toLocaleDateString()}</td>
                        <td className="text-center text-[14px] w-36.75">
                            <div className="flex justify-center items-center">
                                <button className={`w-32.75 h-5 rounded-lg text-center text-[12px] ${emp.status?.toLowerCase() === 'active'
                                    ? 'bg-[#DCFCE7] text-[#008236]'
                                    : 'bg-[#FEEBF0] text-[#E61447]'
                                    }`}>
                                    {emp.status}
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                {employees.length === 0 && (
                    <tr>
                        <td colSpan={7} className="text-center py-10 text-[#4A5565]">
                            No employees found.
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default EmployeeTable