import React from "react";
import Table, { ColumnProps, DataProps } from "../../components/table/Table";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";
import { ReactComponent as FilterIcon } from "../../assets/svg/filter.svg";
import Button from "../../components/button/Button";
import Pagination from "../../components/table/Pagination";

const Transactions = () => {
  const columns: ColumnProps[] = [
    { title: "Transaction ID", key: "transactionId" },
    { title: "Source", key: "source" },
    { title: "Customer name", key: "customerName" },
    { title: "Customer email", key: "customerEmail" },
    { title: "Amount", key: "amount" },
    { title: "Request date", key: "requestDate" },
    { title: "Status", key: "status" },
  ];

  const data: DataProps[] = [
    {
      id: "1",
      transactionId: "GB124QWERTY12346",
      source: "GTB",
      customerName: "Mike Owen",
      customerEmail: "0223337281",
      amount: "$230.00",
      requestDate: "24.08.2021",
      status: "Pending",
    },
    {
      id: "2",
      transactionId: "CB328ABCEDF23416",
      source: "UBA",
      customerName: "Steve O'Shassy",
      customerEmail: "0982764829",
      amount: "$480.00",
      requestDate: "22.08.2021",
      status: "Successful",
    },
  ];

  return (
    <div className="border border-grey-150 pb-4 rounded-lg">
      <div className="pl-4 pt-4 pb-6 border-b border-b-grey-150">
        <h2 className="text-grey-900 font-medium text-[18px]">
          Transaction history
        </h2>
      </div>
      <div className="px-4 py-2 flex-col md:flex-row flex justify-between items-center border-b border-b-grey-150">
        <div className="relative max-[768px]:w-full mb-3 md:mb-0">
          <input
            type="search"
            placeholder="Search"
            className="w-full h-full py-[10px] px-[14px] border border-grey-300"
          />
          <SearchIcon className="absolute right-[14px] top-[10px]" />
        </div>
        <div className="flex items-center gap-2">
          <Button>
            <p className="mr-2 font-semibold text-xs">Filter</p>
            <FilterIcon />
          </Button>
          <Button>
            <p className="font-semibold text-xs">Export</p>
          </Button>
        </div>
      </div>
      <div className="overflow-auto">
        <Table columns={columns} data={data} />
      </div>
      <div className="flex pl-4 md:pl-0 md:justify-end mt-4 pr-4">
        <Pagination />
      </div>
    </div>
  );
};

export default Transactions;
