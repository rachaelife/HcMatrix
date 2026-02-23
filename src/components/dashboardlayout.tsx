import { useState, type ReactNode } from "react"
import Sidebar from "./sidebar"
import Navbar from "./navbar"

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <section className="bg-[whitesmoke] flex-1 flex overflow-hidden">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex w-[256px] bg-white h-full flex-col p-5 shadow flex-shrink-0">
          <Sidebar />
          <div className="bg-[#d7e9ff] h-[119.53px] flex flex-col p-2 rounded-[10px] gap-1 justify-center mt-auto border-[0.89px] border-[#BEDBFF]">
            <h1 className="text-[14px] font-bold">Need Help?</h1>
            <p className="text-[12px]">Contact HR support for assistance</p>
            <button className="bg-white rounded-lg text-[#1447E6] text-[12px] h-[33.76px] border-[0.89px] border-[#BEDBFF]">Contact Support</button>
          </div>
        </aside>

        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Mobile Sidebar */}
        <aside className={`fixed inset-y-0 left-0 w-[256px] bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden p-5 flex flex-col shadow-xl ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-between items-center mb-5">
            <img src="/assets/hcmatrix.png" alt="" className="h-8" />
            <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-gray-500">
              <span className="text-2xl">&times;</span>
            </button>
          </div>
          <Sidebar onLinkClick={() => setIsSidebarOpen(false)} />
          <div className="bg-[#EFF6FF] h-[119.53px] flex flex-col p-2 rounded-[10px] gap-1 justify-center mt-auto border-[0.89px] border-[#BEDBFF]">
            <h1 className="text-[14px] font-bold">Need Help?</h1>
            <p className="text-[12px]">Contact HR support for assistance</p>
            <button className="bg-white rounded-lg text-[#1447E6] text-[12px] h-[33.76px] border-[0.89px] border-[#BEDBFF]">Contact Support</button>
          </div>
        </aside>

        <div className="flex-1 p-4 md:p-8 h-full overflow-y-auto">
          {children}
        </div>
      </section>
    </div>
  )
}

export default DashboardLayout