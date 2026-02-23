import { useQuery } from "@tanstack/react-query"
import DashboardLayout from "../components/dashboardlayout"
import { ApiServices } from "../api/services"

const DashboardPage = () => {
  const { data: response, isLoading: loading } = useQuery({
    queryKey: ['dashboard'],
    queryFn: () => ApiServices.getDashboard()
  })

  // The API might return the stats wrapped in multiple levels (e.g., response.data.data) or directly.
  const stats = response?.data?.data || response?.data || response

  const cardSummaryItems = [
    {
      title: "Total Employees",
      icon: "/assets/user2.png",
      total: stats?.total_employees || 0,
      subtitle: "+12% from last month",
      subtitleIcon: "/assets/chart-arrow.png"
    },
    {
      title: "New Hire Count",
      icon: "/assets/add-user.png",
      total: stats?.new_hire_count || 0,
      subtitle: "This month",
      subtitleIcon: null
    },
    {
      title: "Upcoming Events",
      icon: "/assets/calendar2.png",
      total: stats?.upcoming_event || 0,
      subtitle: "Next 7 days",
      subtitleIcon: null
    },
    {
      title: "Open Positions",
      icon: "/assets/position.png",
      total: stats?.open_positions || 0,
      subtitle: "Active listings",
      subtitleIcon: null
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
        {loading ? (
          <p>Loading stats...</p>
        ) : (
          cardSummaryItems.map((item) => (
            <div className="w-65.5 rounded-[14px] border-[0.89px] h-[161.78px] bg-white border-gray-200 p-5 flex flex-col justify-between" key={item.title}>
              <div className="flex justify-between">
                <h1 className="text-[14px] text-[#4A5565]">{item.title}</h1>
                <img src={item.icon} alt="" width={20} height={20} />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-[30px] font-bold">{item.total}</h1>
                <p className="flex items-center gap-px text-[14px]">
                  {item.subtitleIcon && <img src={item.subtitleIcon} alt="" />}
                  <span className="text-[#00A63E]"> {item.subtitle}</span>
                </p>
              </div>
            </div>
          ))
        )}
      </section>
    </DashboardLayout>
  )
}

export default DashboardPage