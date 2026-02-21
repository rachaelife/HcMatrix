import { Link } from "react-router-dom"
import DashboardLayout from "../components/dashboardlayout"
import { useState } from "react"


const EmployeeDetailPage = () => {

    const [tab, setTab] = useState<"personal" | "employment">("personal")


    // const switchTab = () => setTab("") 


    return (

        <DashboardLayout>

            <section className="">
                <Link to={""} className="flex items-center gap-3">
                    <img src="/assets/back-arrow.png" alt="" />
                    <h1 className="text-[#0a0a0a] text-[14px]">Back to Employees</h1>
                </Link>
            </section>


            <section className="mt-10 bg-white rounded-[14px] h-[167.54px] flex items-center pl-10">
                <div className="flex items-center gap-5">
                    <div className="w-24 h-24 rounded-full bg-[#C3CFF3] flex justify-center items-center overflow-hidden">
                        <img src="/assets/avatar.png" alt="" width={56.1} height={68.24} />
                    </div>
                    <div className="">
                        <h1 className="text-[30px] font-bold">Sarah Johnson</h1>
                        <p className="text-[#4A5565] text-[20px]">Senior Software Engineer</p>
                        <div className="flex items-center gap-3">
                            <button className="h-[21.76px] w-[51.32px] rounded-lg bg-[#b9f8cf] text-[12px] text-[#008236]">Active</button>
                            <span className="text-[#6a7282] text-[14px]">Full-time</span>
                        </div>
                    </div>
                </div>
            </section>


            {/* TAB */}

            <section className="mt-10">
                <div className="flex items-center gap-5 bg-[#ECECF0] h-9 pl-1 rounded-[14px] cursor-pointer">
                    <button
                        className={`w-[197.19px] h-7.25 rounded-[14px] cursor-pointer ${tab === 'personal' ? 'bg-white border-[0.89px] border-white' : ''}`}
                        onClick={() => setTab("personal")}
                    >
                        Personal Info
                    </button>
                    <button
                        className={`w-[197.19px] h-7.25 rounded-[14px]  cursor-pointer ${tab === 'employment' ? 'bg-white border-[0.89px] border-white' : ''}`}
                        onClick={() => setTab("employment")}
                    >
                        Employment
                    </button>
                </div>
                {
                    tab === "personal" ?

                        <div className="bg-white rounded-[14px] p-7 mt-2 h-74">
                            <h1 className="text-[16px] text-[#0A0A0A]">Personal Information</h1>
                            <div className="mt-5 flex justify-around items-center gap-5 flex-wrap">
                                <div className="flex flex-col">
                                    <h1 className="14px text-[#6A7282]">Email</h1>
                                    <p className="text-[16px]">sarah.johnson@company.com</p>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="14px text-[#6A7282]">Phone</h1>
                                    <p className="text-[16px]">(555) 123-4567</p>
                                </div>

                                <div className="flex flex-col">
                                    <h1 className="14px text-[#6A7282]">Date of Birth</h1>
                                    <p className="text-[16px]">May 20, 1990</p>
                                </div>

                                <div className="flex flex-col">
                                    <h1 className="14px text-[#6A7282]">Address</h1>
                                    <p className="text-[16px]">123 Broadway, Apt 4B, New York, NY 10001</p>
                                </div>

                                <div className="flex flex-col">
                                    <h1 className="14px text-[#6A7282]">Department</h1>
                                    <p className="text-[16px]">Engineering</p>
                                </div>

                            </div>

                            <h1 className="text-[#101828] text-[18px] mt-10 font-bold">Emergency Contact</h1>
                            <div className="flex items-center gap-50 mt-7">
                                <div className="flex flex-col">
                                    <h1 className="14px text-[#6A7282]">Name</h1>
                                    <p className="text-[16px]">Michael Johnson</p>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="14px text-[#6A7282]">Relationship</h1>
                                    <p className="text-[16px]">Spouse</p>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="14px text-[#6A7282]">Phone</h1>
                                    <p className="text-[16px]">(555) 123-4568</p>
                                </div>
                            </div>

                        </div>

                        :

                        <div className="bg-white rounded-[14px] p-7 mt-2">

                            <h1 className="text-[16px] text-[#0A0A0A]">Employment Details</h1>

                            <div className="flex items-center flex-wrap gap-50 mt-7">
                                <div className="flex flex-col md:w-100">
                                    <h1 className="14px text-[#6A7282]">Job Title</h1>
                                    <p className="text-[16px]">Senior Software Engineer</p>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="14px text-[#6A7282]">Department</h1>
                                    <p className="text-[16px]">Engineering</p>
                                </div>
                            </div>

                            <div className="flex items-center flex-wrap gap-50 mt-7">

                                <div className="flex flex-col md:w-100">
                                    <h1 className="14px text-[#6A7282]">Employment Type</h1>
                                    <p className="text-[16px]">Engineering</p>
                                </div>

                                <div className="flex flex-col">
                                    <h1 className="14px text-[#6A7282]">Start Date</h1>
                                    <p className="text-[16px]">March 15, 2021</p>
                                </div>

                            </div>

                            <div className="flex items-center flex-wrap gap-50 mt-7">

                                <div className="flex flex-col md:w-100">
                                    <h1 className="14px text-[#6A7282]">Manager</h1>
                                    <p className="text-[16px]">David Chen</p>
                                </div>

                                <div className="flex flex-col">
                                    <h1 className="14px text-[#6A7282]">Current Salary</h1>
                                    <p className="text-[16px]">$125,000</p>
                                </div>

                            </div>


                            <div className="mt-7 flex flex-col gap-2">
                                <h1 className="text-[#101828] text-[18px] mt-10 font-bold">Tenure at Company</h1>
                                <p className="text-[16px]">4 years, 11 months</p>
                            </div>

                        </div>
                }
            </section>

        </DashboardLayout>
    )
}

export default EmployeeDetailPage