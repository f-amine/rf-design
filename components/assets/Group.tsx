import React from "react";

interface Props {
  className: any;
  subtract: string;
  img: string;
}

export const Group = ({
  className,
  subtract = "https://c.animaapp.com/iV4dCTfD/img/subtract.svg",
  img = "https://c.animaapp.com/iV4dCTfD/img/subtract-1.svg",
}: Props): JSX.Element => {
  return (
    <div className={`relative w-[24px] h-[24px] ${className}`}>
      <div className="absolute w-[16px] h-[8px] top-[4px] left-[4px]">
        <div className="absolute w-[8px] h-[8px] top-0 left-[4px] rounded-[4px] border-2 border-solid border-white" />
        <img
          className="absolute w-[6px] h-[6px] top-[2px] left-[10px]"
          alt="Ellipse"
          src="https://c.animaapp.com/iV4dCTfD/img/ellipse-48-1.svg"
        />
        <img
          className="absolute w-[6px] h-[6px] top-[2px] left-0"
          alt="Ellipse"
          src="https://c.animaapp.com/iV4dCTfD/img/ellipse-48-1.svg"
        />
      </div>
      <div className="absolute w-[20px] h-[7px] top-[13px] left-[2px]">
        <img className="left-[11px] absolute w-[9px] h-[6px] top-0" alt="Subtract" src={subtract} />
        <img className="left-0 absolute w-[9px] h-[6px] top-0" alt="Subtract" src={img} />
        <img
          className="absolute w-[12px] h-[7px] top-0 left-[4px]"
          alt="Rectangle"
          src="https://c.animaapp.com/iV4dCTfD/img/rectangle-4160-1.svg"
        />
      </div>
    </div>
  );
};
