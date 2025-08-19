import React from "react";

interface MyButtonProps {
  title: string;
  onClick: () => void;
}

export const MyButton = ({ title, onClick }: MyButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-black text-white p-2 rounded-md text-md hover:cursor-pointer hover:opacity-80 hover:scale-105 transition-all duration-300"
    >
      {title}
    </button>
  );
};
