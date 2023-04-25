import React from "react";
import LineChartOne from "../../assets/svg/line-chart1.svg";
import LineChartTwo from "../../assets/svg/line-chart2.svg";
import LineChartThree from "../../assets/svg/line-chart3.svg";
import Button from "../../components/button/Button";
import LineChart from "../../components/line-chart/LineChart";
import { ReactComponent as DownCaret } from "../../assets/svg/downcaret.svg";
import { ReactComponent as DownArrow } from "../../assets/svg/downArrow.svg";
import Klasha from "../../assets/svg/klashawire.svg";

const Dashboard = () => {
  return (
    <div className="pb-16">
      <p className="text-grey-800 font-medium text-xl mb-6">Sales Overview</p>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="p-6 h-60 rounded-lg border border-black">
          <p className="font-[inter] text-black mb-[5px]">Today's sales</p>
          <p className="text-xl font-medium text-black">₦1,652.50</p>
        </div>
        <div className="p-6 md:h-60 rounded-lg border border-black bg-black overflow-hidden">
          <p className="font-[inter] text-white mb-[25px]">
            24 Aug - 01 Sep 21
          </p>
          <img
            src={LineChartOne}
            alt="line graph for this week"
            className="mb-[19px] w-full"
          />
          <p className="font-[inter] text-white mb-[5px]">This week</p>
          <p className="text-xl font-medium text-white">₦1,652.50</p>
        </div>
        <div className="p-6 md:h-60 rounded-lg border border-black">
          <p className="font-[inter] text-black mb-[25px]">
            24 Aug - 01 Sep 21
          </p>
          <img
            src={LineChartTwo}
            alt="Line Graph for this month"
            className="mb-[19px] w-full"
          />
          <p className="font-[inter] text-black mb-[5px]">This month</p>
          <p className="text-xl font-medium text-black">₦1,652.50</p>
        </div>
        <div className="p-6 md:h-60 rounded-lg border border-black">
          <p className="font-[inter] text-black mb-[25px]">
            24 Aug - 01 Sep 21
          </p>
          <img
            src={LineChartThree}
            alt="Line graph for last month"
            className="mb-[19px] w-full"
          />
          <p className="font-[inter] text-black mb-[5px]">Last month</p>
          <p className="text-xl font-medium text-black">₦1,652.50</p>
        </div>
      </div>
      <div className="flex items-center mt-[46px] mb-1 flex-col md:flex-row">
        <div className="flex items-center max-[768px]:w-full mb-3 md:mb-0">
          <h2 className="font-medium text-xl mr-[22px]">Sales</h2>
          <p className="font-semibold text-red-200 mr-6">7 days</p>
          <p className="text-grey-900 font-semibold font-[inter] mr-[45px]">
            30 days
          </p>
          <Button className="flex border border-grey-900 justify-center items-center w-[91px] px-[13px] py-3  rounded-md mr-2">
            <p className="mr-[6px] font-medium font-[inter]">USD</p>
            <DownCaret />
          </Button>
        </div>

        <Button className="flex mr-2 justify-between border border-grey-300 items-center w-[283px] py-[10px] px-[14px] rounded-md max-[768px]:w-full mb-3 md:mb-0">
          <p className="mr-[6px] font-medium font-[inter]">Email</p>
          <DownCaret />
        </Button>
        <Button className="flex px-[13px] py-3 border border-grey-900 justify-center items-center rounded-md mb-3 md:mb-0">
          <DownArrow className="mr-[10px]" />
          <p className="mr-[6px] font-medium font-[inter]">Download report</p>
        </Button>
      </div>
      <div className="flex gap-6 w-full max-[768px]:flex-col">
        <div className="p-6 border rounded-lg flex items-center w-[70%] max-[768px]:w-full">
          <LineChart />
        </div>
        <img src={Klasha} alt="klasha" className="md:w-[30%]" />
      </div>
    </div>
  );
};

export default Dashboard;
