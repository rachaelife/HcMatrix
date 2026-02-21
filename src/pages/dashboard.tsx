import DashboardLayout from "../components/dashboardlayout"


const DashboardPage = () => {

  const cardSummaryItems = [
    {
      title: "Total Employees",
      icon: "/assets/user2.png",
      total: 247,
      subtitle: "+12% from last month",
      subtitleIcon: "/assets/chart-arrow.png"
    }
  ]




  return (
    <DashboardLayout>
        <section className="">

          <div className="">
              <h1 className="text-[30px] font-bold">Dashboard</h1>
              <p className="text-[#4A5565] text-[16px]">Welcome back! Here's what's happening with your organization.</p>
          </div>


        </section>

        <section className="mt-10 flex md:justify-start justify-around items-center gap-5 flex-wrap">
          {
            cardSummaryItems.map((item)=>(
              <div className="w-65.5 rounded-[14px] border-[0.89px] h-[161.78px] bg-white border-gray-200 p-5 flex flex-col justify-between" key={item.title}>
                <div className="flex justify-between">
                    <h1 className="text-[14px] text-[#4A5565]">{item.title}</h1>
                    <img src={item.icon} alt="" width={20} height={20} />
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-[30px] font-bold">{item.total}</h1>
                    <p className="flex items-center gap-px text-[14px]">
                    {item.subtitleIcon&&<img src={item.subtitleIcon} alt="" />}
                      <span className="text-[#00A63E]"> {item.subtitle}</span>
                    </p>
                </div>
              </div>
            ))
          }
        </section>
    </DashboardLayout>
  )
}

export default DashboardPage