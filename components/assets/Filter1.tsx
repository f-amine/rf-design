import React from "react";

interface Props {
  className: any;
}

export const Filter1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 12L5 4" stroke="white" strokeLinecap="round" strokeWidth="2" />
      <path d="M19 20L19 18" stroke="white" strokeLinecap="round" strokeWidth="2" />
      <path d="M5 20L5 16" stroke="white" strokeLinecap="round" strokeWidth="2" />
      <path d="M19 12L19 4" stroke="white" strokeLinecap="round" strokeWidth="2" />
      <path d="M12 7L12 4" stroke="white" strokeLinecap="round" strokeWidth="2" />
      <path d="M12 20L12 12" stroke="white" strokeLinecap="round" strokeWidth="2" />
      <circle cx="5" cy="14" r="2" stroke="white" strokeLinecap="round" strokeWidth="2" />
      <circle cx="12" cy="9" r="2" stroke="white" strokeLinecap="round" strokeWidth="2" />
      <circle cx="19" cy="15" r="2" stroke="white" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
};
