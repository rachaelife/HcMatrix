import DashboardLayout from "../components/dashboardlayout"
import EmployeeTable from "../components/employee-table"
import employee from "../mock/employee.json"


const EmployeePage = () => {
  return (
    <DashboardLayout>
        <section>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-[30px] text-[#101828] font-bold">Employee</h1>
                    <p className="text-[#4a5565] text-[16px]">Manage and view your organization's workforce</p>
                </div>

                <button className="text-[14px] text-white h-11 w-44.25 bg-[#155dfc] rounded-lg flex justify-between items-center p-3">
                    <img src="/assets/add-employee.png" alt="" />
                    <span>Add New Employee</span>
                </button>

            </div>


            <div className="flex justify-between items-center mt-5">

                <form action="" className="w-123.75 h-9 flex items-center bg-white px-3 gap-2 rounded-lg">
                    <img src="/assets/search.png" alt="" />
                    <input type="search" placeholder="Search by name, email, title or department..."/>
                </form>

                <button className="w-[145.8px] h-9 bg-white flex items-center justify-center gap-3 rounded-lg border-[0.89px] border-white/10">
                    <img src="/assets/download.png" alt="" />
                    <span>export CSV</span>
                </button>
            </div>

        </section>

        <section className="bg-white shadow mt-10">
          <EmployeeTable  user={employee}/>
        </section>

    </DashboardLayout>
  )
}

export default EmployeePage