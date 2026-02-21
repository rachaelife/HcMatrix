import type { ReactNode } from "react"
import Sidebar from "./sidebar"
import Navbar from "./navbar"

const DashboardLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
     <Navbar />
    <section className="bg-[whitesmoke] min-h-[95vh] flex">

        <aside className="w-[256px] bg-white h-[95vh] p-5 shadow">
            <Sidebar />

            <div className="bg-[#d7e9ff] h-[119.53px] flex flex-col p-2 rounded-[10px] gap-1 justify-center mt-20 border-[0.89px] border-[#BEDBFF]">
                <h1 className="text-[14px] font-bold">Need Help?</h1>
                <p className="text-[12px]">Contact HR support for assistance</p>
                <button className="bg-white rounded-lg text-[#1447E6] text-[12px] h-[33.76px] border-[0.89px] border-[#BEDBFF]">Contact Support</button>
            </div>
        </aside>

        <div className="flex-1 p-8 h-[90vh] overflow-y-scroll">
            {children}
        </div>
        
    </section>
    </>
  )
}

export default DashboardLayout