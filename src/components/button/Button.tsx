import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Button = ({
  children,
  className = "border border-grey-900 w-[120px] flex justify-center items-center py-3 rounded-lg",
}: Props) => {
  return (
    <>
      <button className={className}>{children}</button>
    </>
  );
};

export default Button;
