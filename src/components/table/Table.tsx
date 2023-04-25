import React, { useState } from "react";

export interface DataProps {
  id: string;
  transactionId: string;
  source: string;
  customerName: string;
  customerEmail: string;
  amount: string;
  requestDate: string;
  status: string;
}

export interface ColumnProps {
  title: string;
  key: string;
}

interface Props {
  columns: ColumnProps[];
  data: DataProps[];
}

const Table = ({ columns, data }: Props) => {
  const [selectedRow, setSelectedRow] = useState("");
  return (
    <>
      <table className="w-full overflow-auto">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="text-left py-[23px] px-[32px] whitespace-nowrap text-grey-400 text-base font-semibold"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {data.map((item: DataProps) => (
            <tr
              key={item.id}
              className={`font-[inter] text-grey-700 cursor-pointer ${
                selectedRow === item.id ? "bg-grey-500" : "bg-white"
              } border-b border-b-grey-150`}
              onClick={() => setSelectedRow(item.id)}
            >
              {columns.map((column: ColumnProps) => (
                <td
                  key={column.key}
                  className="text-left py-[23px] px-[32px] whitespace-nowrap"
                >
                  {item[column.key as keyof DataProps]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
