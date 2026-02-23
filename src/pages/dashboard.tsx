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
        {cardSummaryItems.map((item) => (
          <div
            className="w-65.5 rounded-[14px] border-[0.89px] h-[161.78px] bg-white border-gray-200 p-5 flex flex-col justify-between"
            key={item.title}
          >
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
        ))}
      </section>

      <section className="w-full  mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-5 h-5 rounded-full border-2 border-blue-500 flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <h2 className="font-semibold text-gray-800">
                Today's Attendance
              </h2>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span>In Office / Remote</span>
                </div>
                <span className="font-semibold text-gray-900">189</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                  <span>Out / On Leave</span>
                </div>
                <span className="font-semibold text-gray-900">58</span>
              </div>
            </div>

            <div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full w-[77%]"></div>
              </div>

              <p className="text-sm text-gray-500 mt-2">
                77% workforce active today
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 lg:col-span-2">
            <h2 className="font-semibold text-gray-800 mb-6">Action Items</h2>

            <div className="space-y-5">
              {/* Item */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-[#030213] cursor-pointer"
                  />

                  <span className="text-gray-800">
                    Approve 3 leave requests
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs px-3 py-1 text-[#C10007]  bg-[#FFE2E2] rounded-full font-medium">
                    high
                  </span>

                  <img
                    src="/assets/checkbox.png"
                    alt="status"
                    className="w-5 h-5 opacity-60"
                  />
                </div>
              </div>

              {/* Completed Item */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 accent-[#030213] cursor-pointer"
                  />

                  <span className="text-gray-400 line-through">
                    Schedule interviews for Marketing position
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs px-3 py-1 bg-[#FFF085] text-[#A65F00] rounded-full font-medium">
                    medium
                  </span>

                  <img
                    src="/assets/check2.png"
                    alt="status"
                    className="w-5 h-5 opacity-60"
                  />
                </div>
              </div>

              {/* Item */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-[#030213] cursor-pointer"
                  />

                  <span className="text-gray-800">
                    Send benefits enrollment reminder
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs px-3 py-1 text-[#008236] bg-[#B9F8CF] rounded-full font-medium">
                    low
                  </span>

                  <img
                    src="/assets/checkbox.png"
                    alt="status"
                    className="w-5 h-5 opacity-60"
                  />
                </div>
              </div>
            </div>

            {/* Button */}
            <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-all duration-200">
              View All Tasks
            </button>
          </div>
        </div>
      </section>

      <section className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="w-full">
          <img
            src="public/assets/Container.png"
            alt="Headcount Growth"
            className="w-full rounded-xl object-contain"
          />
        </div>

        <div className="w-full">
          <img
            src="public/assets/Container (1).png"
            alt="Department Distribution"
            className="w-full rounded-xl object-contain"
          />
        </div>
      </section>

      <section className="mt-6 rounded-[14px] border border-[#FFFFFF] bg-[#FFFFFF] p-4 height-[181.65px]">
        <div className="mb-8 flex items-center gap-2">
          <div className="">
            <img src="/assets/calendar2.png" alt="" />
          </div>
          <h3 className="text-sm font-semibold text-gray-900">
            Upcoming Birthdays & Anniversaries
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center gap-3 rounded-[14px] bg-[#FAF5FF] p-3 border border-[#E9D4FF]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-200 ">
              <img src="/assets/cake.png" alt="" />
            </div>
            <div>
              <p className="font-bold">Sarah Johnson</p>
              <p className="text-xs text-gray-500">Feb 15</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-[14px] bg-[#FAF5FF] p-3 border border-[#E9D4FF]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-200">
              <img src="/assets/cake.png" alt="" />
            </div>
            <div>
              <p className="font-bold">Michael Rodriguez</p>
              <p className="text-xs text-gray-500">Feb 18</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-[14px] bg-[#FAF5FF] p-3 border border-[#E9D4FF]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-200">
              <img src="/assets/cake.png" alt="" />
            </div>
            <div>
              <p className=" font-bold">Emily Chen</p>
              <p className="text-xs text-gray-500">Feb 22</p>
            </div>
          </div>
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
  );
};

export default DashboardPage;
