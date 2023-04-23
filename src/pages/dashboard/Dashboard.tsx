import React from "react";
import LineChartOne from "../../assets/svg/line-chart1.svg";
import LineChartTwo from "../../assets/svg/line-chart2.svg";
import LineChartThree from "../../assets/svg/line-chart3.svg";
import LineChart from "../../components/line-chart/LineChart";
import LineChartWithChart from "../../components/line-chart/LineChartWithChart";

const Dashboard = () => {
  return (
    <div className="pb-16">
      <p className="text-grey-800 font-medium text-xl mb-6">Sales Overview</p>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="p-6 h-60 rounded-lg border border-black">
          <p className="font-[inter] text-black mb-[5px]">Today's sales</p>
          <p className="text-xl font-medium text-black">₦1,652.50</p>
        </div>
        <div className="p-6 h-60 rounded-lg border border-black bg-black overflow-hidden">
          <p className="font-[inter] text-white mb-[25px]">
            24 Aug - 01 Sep 21
          </p>
          <img
            src={LineChartOne}
            alt="line graph for this week"
            className="mb-[19px]"
          />
          <p className="font-[inter] text-white mb-[5px]">This week</p>
          <p className="text-xl font-medium text-white">₦1,652.50</p>
        </div>
        <div className="p-6 h-60 rounded-lg border border-black">
          <p className="font-[inter] text-black mb-[25px]">
            24 Aug - 01 Sep 21
          </p>
          <img
            src={LineChartTwo}
            alt="Line Graph for this month"
            className="mb-[19px]"
          />
          <p className="font-[inter] text-black mb-[5px]">This month</p>
          <p className="text-xl font-medium text-black">₦1,652.50</p>
        </div>
        <div className="p-6 h-60 rounded-lg border border-black">
          <p className="font-[inter] text-black mb-[25px]">
            24 Aug - 01 Sep 21
          </p>
          <img
            src={LineChartThree}
            alt="Line graph for last month"
            className="mb-[19px]"
          />
          <p className="font-[inter] text-black mb-[5px]">Last month</p>
          <p className="text-xl font-medium text-black">₦1,652.50</p>
        </div>
      </div>
      <div>
        <LineChart />
        {/* <LineChartWithChart /> */}
      </div>
    </div>
  );
};

export default Dashboard;
