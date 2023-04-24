import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  className = "border border-grey-900 w-[120px] flex justify-center items-center py-3 rounded-lg",
  onClick = () => {},
}: Props) => {
  return (
    <>
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
