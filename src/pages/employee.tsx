import { useState } from "react"
import EmployeeTable from "../components/employee-table"
import DashboardLayout from "../components/dashboardlayout"
import { ApiServices } from "../api/services"
import { useQuery } from "@tanstack/react-query"

const EmployeePage = () => {
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')

    const { data: response, isLoading: loading } = useQuery({
        queryKey: ['employees', page, search],
        queryFn: () => ApiServices.getAllEmployee(page, search ? { name: search } : {}),
    })

    const employees = response?.data?.data || []
    const pagination = response?.data ? {
        current_page: response.data.current_page,
        last_page: response.data.last_page,
        total: response.data.total
    } : null

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        setPage(1)
    }

    return (
        <DashboardLayout>
            <section>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center pr-5 gap-4">
                    <div>
                        <h1 className="text-[24px] md:text-[30px] text-[#101828] font-bold">Employee</h1>
                        <p className="text-[#4a5565] text-[14px] md:text-[16px]">Manage and view your organization's workforce</p>
                    </div>

                    <button className="text-[14px] text-white h-11 w-full md:w-44.25 bg-[#155dfc] rounded-lg flex justify-between items-center p-3">
                        <img src="/assets/add-employee.png" alt="" />
                        <span>Add New Employee</span>
                    </button>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center mt-5 pr-5 gap-4">
                    <div className="flex-1 md:max-w-123.75 h-9 flex items-center bg-white px-3 gap-2 rounded-lg border border-[#F4F4F4] focus-within:border-[#155DFC]">
                        <img src="/assets/search.png" alt="" />
                        <input
                            type="search"
                            placeholder="Search by name..."
                            className="flex-1 outline-none text-[14px]"
                            value={search}
                            onChange={handleSearch}
                        />
                    </div>

                    <button className="h-9 bg-white flex items-center justify-center gap-3 rounded-lg border-[0.89px] border-[#F4F4F4] px-5">
                        <img src="/assets/download.png" alt="" />
                        <span>export CSV</span>
                    </button>
                </div>
            </section>

            <section className="mt-10 bg-white rounded-[14px] border border-[#F4F4F4]">
                {loading ? (
                    <div className="p-10 text-center">Loading employees...</div>
                ) : (
                    <div className="overflow-x-auto">
                        <div className="min-w-[1000px]">
                            <EmployeeTable employees={employees} />
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-center p-5 border-t border-[#F4F4F4] gap-4">
                            <p className="text-[14px] text-[#4A5565]">
                                Showing {(pagination?.current_page || 1) * 10 - 9} to {Math.min((pagination?.current_page || 1) * 10, pagination?.total || 0)} of {pagination?.total || 0} employees
                            </p>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setPage(p => Math.max(1, p - 1))}
                                    disabled={page === 1}
                                    className="px-4 py-2 border border-gray-200 rounded-lg text-[14px] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 bg-white"
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={() => setPage(p => p + 1)}
                                    disabled={page >= (pagination?.last_page || 1)}
                                    className="px-4 py-2 border border-gray-200 rounded-lg text-[14px] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 bg-white"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </DashboardLayout>
    )
}

export default EmployeePage