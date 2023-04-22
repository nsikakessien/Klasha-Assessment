import React from "react";
import { ReactComponent as KlashaLogo } from "../../assets/svg/klasha.svg";
import { ReactComponent as DashBoardIcon } from "../../assets/svg/dashboard.svg";
import { ReactComponent as DashBoardRedIcon } from "../../assets/svg/dashboard-red.svg";
import { ReactComponent as BalanceIcon } from "../../assets/svg/balances.svg";
import { ReactComponent as BalanceRedIcon } from "../../assets/svg/balances-red.svg";
import { ReactComponent as TransactionIcon } from "../../assets/svg/transactions.svg";
import { ReactComponent as TransactionRedIcon } from "../../assets/svg/transactions-red.svg";
import { ReactComponent as AnalyticsIcon } from "../../assets/svg/analytics.svg";
import { ReactComponent as AnalyticsRedIcon } from "../../assets/svg/analytics-red.svg";
import { ReactComponent as MarketingIcon } from "../../assets/svg/marketing.svg";
import { ReactComponent as MarketingRedIcon } from "../../assets/svg/marketing-red.svg";
import { ReactComponent as RatesIcon } from "../../assets/svg/rates.svg";
import { ReactComponent as RatesRedIcon } from "../../assets/svg/rates-red.svg";
import { ReactComponent as CheckoutIcon } from "../../assets/svg/checkout.svg";
import { ReactComponent as CheckoutRedIcon } from "../../assets/svg/checkout-red.svg";
import { ReactComponent as PaymentLinksIcon } from "../../assets/svg/payment.svg";
import { ReactComponent as PaymentLinksRedIcon } from "../../assets/svg/payment-red.svg";
import { ReactComponent as WireIcon } from "../../assets/svg/wire.svg";
import { ReactComponent as WireRedIcon } from "../../assets/svg/wire-red.svg";
import SidebarMenu from "../menu/SidebarMenu";

const menu = [
  {
    title: "Main pages",
    subMenu: [
      {
        title: "Dashboard",
        icon: <DashBoardIcon />,
        clickedIcon: <DashBoardRedIcon />,
      },
      {
        title: "Balances",
        icon: <BalanceIcon />,
        clickedIcon: <BalanceRedIcon />,
      },
      {
        title: "Transactions",
        icon: <TransactionIcon />,
        clickedIcon: <TransactionRedIcon />,
      },
      {
        title: "Analytics",
        icon: <AnalyticsIcon />,
        clickedIcon: <AnalyticsRedIcon />,
      },
      {
        title: "Marketing",
        icon: <MarketingIcon />,
        clickedIcon: <MarketingRedIcon />,
      },
      {
        title: "Exchange rates",
        icon: <RatesIcon />,
        clickedIcon: <RatesRedIcon />,
      },
    ],
  },
  {
    title: "Exchange rates",
    subMenu: [
      {
        title: "Checkout",
        icon: <CheckoutIcon />,
        clickedIcon: <CheckoutRedIcon />,
      },
      {
        title: "Payment Links",
        icon: <PaymentLinksIcon />,
        clickedIcon: <PaymentLinksRedIcon />,
      },
    ],
  },
  {
    title: "Send payments",
    subMenu: [
      { title: "Wire", icon: <WireIcon />, clickedIcon: <WireRedIcon /> },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="fixed bg-red-100 pt-[30px] pb-12 bottom-0 top-0 w-[280px] flex items-center flex-col overflow-auto">
      <div>
        <KlashaLogo className="mb-[52px]" />
        <SidebarMenu menu={menu} />
      </div>
    </div>
  );
};

export default Sidebar;
