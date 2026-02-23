import { Link, useParams } from "react-router-dom"
import DashboardLayout from "../components/dashboardlayout"
import { useState } from "react"
import { ApiServices } from "../api/services"
import { useQuery } from "@tanstack/react-query"

const EmployeeDetailPage = () => {
    const { id } = useParams<{ id: string }>()
    const [tab, setTab] = useState<"personal" | "employment">("personal")

    const { data: response, isLoading: loading } = useQuery({
        queryKey: ['employee', id],
        queryFn: () => ApiServices.getEmployee(id!),
        enabled: !!id
    })

    const employee = response?.data

    if (loading) {
        return (
            <DashboardLayout>
                <div className="p-10 text-center">Loading employee details...</div>
            </DashboardLayout>
        )
    }

    if (!employee) {
        return (
            <DashboardLayout>
                <div className="p-10 text-center text-red-500">Employee not found.</div>
            </DashboardLayout>
        )
    }

    return (
        <DashboardLayout>
            <section className="">
                <Link to="/employee" className="flex items-center gap-3">
                    <img src="/assets/back-arrow.png" alt="" />
                    <h1 className="text-[#0a0a0a] text-[14px]">Back to Employees</h1>
                </Link>
            </section>

            <section className="mt-10 bg-white rounded-[14px] h-[167.54px] flex items-center pl-10">
                <div className="flex items-center gap-5">
                    <div className="w-24 h-24 rounded-full bg-[#C3CFF3] flex justify-center items-center overflow-hidden">
                        <img src={employee.image_url || "/assets/avatar.png"} alt="" width={56.1} height={68.24} />
                    </div>
                    <div className="">
                        <h1 className="text-[30px] font-bold">{employee.full_name}</h1>
                        <p className="text-[#4A5565] text-[20px]">{employee.job_title}</p>
                        <div className="flex items-center gap-3">
                            <button className={`h-[21.76px] px-3 rounded-lg text-[12px] ${employee.status?.toLowerCase() === 'active'
                                ? 'bg-[#b9f8cf] text-[#008236]'
                                : 'bg-[#FEEBF0] text-[#E61447]'
                                }`}>
                                {employee.status || 'Active'}
                            </button>
                            <span className="text-[#6a7282] text-[14px]">{employee.emp_type}</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-10">
                <div className="flex items-center gap-5 bg-[#ECECF0] h-9 pl-1 rounded-[14px] cursor-pointer  pr-1">
                    <button
                        className={`px-10 h-7.25 rounded-[14px] cursor-pointer transition-all ${tab === 'personal' ? 'bg-white shadow-sm border-[0.89px] border-white' : ''}`}
                        onClick={() => setTab("personal")}
                    >
                        Personal Info
                    </button>
                    <button
                        className={`px-10 h-7.25 rounded-[14px] cursor-pointer transition-all ${tab === 'employment' ? 'bg-white shadow-sm border-[0.89px] border-white' : ''}`}
                        onClick={() => setTab("employment")}
                    >
                        Employment
                    </button>
                </div>
                {
                    tab === "personal" ?
                        <div className="bg-white rounded-[14px] p-7 mt-2 min-h-74 border border-[#F4F4F4]">
                            <h1 className="text-[16px] text-[#0A0A0A] font-medium border-b border-[#F4F4F4] pb-3">Personal Information</h1>
                            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="flex flex-col">
                                    <h1 className="text-[14px] text-[#6A7282]">Email Address</h1>
                                    <p className="text-[16px] text-[#0A0A0A]">{employee.email}</p>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-[14px] text-[#6A7282]">Phone Number</h1>
                                    <p className="text-[16px] text-[#0A0A0A]">{employee.phone || "N/A"}</p>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-[14px] text-[#6A7282]">Date of Birth</h1>
                                    <p className="text-[16px] text-[#0A0A0A]">{employee.dob || "N/A"}</p>
                                </div>
                                <div className="flex flex-col md:col-span-2">
                                    <h1 className="text-[14px] text-[#6A7282]">Address</h1>
                                    <p className="text-[16px] text-[#0A0A0A] whitespace-pre-line">{employee.address || "N/A"}</p>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-[14px] text-[#6A7282]">Department</h1>
                                    <p className="text-[16px] text-[#0A0A0A]">{employee.department}</p>
                                </div>
                            </div>

                            <h1 className="text-[#0A0A0A] text-[16px] mt-10 font-medium border-b border-[#F4F4F4] pb-3">Emergency Contact</h1>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
                                <div className="flex flex-col">
                                    <h1 className="text-[14px] text-[#6A7282]">Next of Kin</h1>
                                    <p className="text-[16px] text-[#0A0A0A]">{employee.next_of_kin || "N/A"}</p>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-[14px] text-[#6A7282]">Relationship</h1>
                                    <p className="text-[16px] text-[#0A0A0A]">{employee.spouse ? 'Spouse' : 'N/A'}</p>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-[14px] text-[#6A7282]">Phone Number</h1>
                                    <p className="text-[16px] text-[#0A0A0A]">{employee.phone_no_nok || "N/A"}</p>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="bg-white rounded-[14px] p-7 mt-2 min-h-74 border border-[#F4F4F4]">
                            <h1 className="text-[16px] text-[#0A0A0A] font-medium border-b border-[#F4F4F4] pb-3">Employment Information</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
                                <div className="flex flex-col">
                                    <h1 className="text-[14px] text-[#6A7282]">Job Title</h1>
                                    <p className="text-[16px] text-[#0A0A0A]">{employee.job_title}</p>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-[14px] text-[#6A7282]">Department</h1>
                                    <p className="text-[16px] text-[#0A0A0A]">{employee.department}</p>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-[14px] text-[#6A7282]">Employment Type</h1>
                                    <p className="text-[16px] text-[#0A0A0A]">{employee.emp_type}</p>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-[14px] text-[#6A7282]">Hire Date</h1>
                                    <p className="text-[16px] text-[#0A0A0A]">{employee.start_date || "N/A"}</p>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-[14px] text-[#6A7282]">Manager</h1>
                                    <p className="text-[16px] text-[#0A0A0A]">{employee.manager || "N/A"}</p>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-[14px] text-[#6A7282]">Current Salary</h1>
                                    <p className="text-[16px] text-[#0A0A0A]">{employee.current_salary || "N/A"}</p>
                                </div>
                            </div>

                            <div className="mt-10 pt-5 border-t border-[#F4F4F4]">
                                <h1 className="text-[#0A0A0A] text-[16px] font-medium">Tenure at Company</h1>
                                <p className="text-[16px] text-[#0A0A0A] mt-2">{employee.tenure || "N/A"}</p>
                            </div>
                        </div>
                }
            </section>
        </DashboardLayout>
    )
}

export default EmployeeDetailPage