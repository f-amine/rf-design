import React from "react";

import { Group } from "./assets/Group";
import { SignOutSqure1 } from "./assets/SignOutSqure1";
import { Filter1 } from "./assets/Filter1";

export const SideBar = (): JSX.Element => {
    return (
        <div className="fixed left-0 top-1/2 transform -translate-y-1/2 w-[102px] h-[658px] overflow-hidden">
            <div className="w-[102px] h-[658px]">
                <div className="relative w-[95px] h-[658px] left-[7px]">
                    <div className="absolute w-[87px] h-[658px] top-0 left-px bg-[#318fb5] rounded-[23px]" />
                    <img
                        className="top-[329px] absolute w-[95px] h-[2px] left-0"
                        alt="Line"
                        src="https://c.animaapp.com/iV4dCTfD/img/line-8.svg"
                    />
                    <img
                        className="top-[551px] absolute w-[95px] h-[2px] left-0"
                        alt="Line"
                        src="https://c.animaapp.com/iV4dCTfD/img/line-9.svg"
                    />
                    <img
                        className="absolute w-[47px] h-[47px] top-[570px] left-[21px] object-cover"
                        alt="Ellipse"
                        src="https://c.animaapp.com/iV4dCTfD/img/ellipse-45@2x.png"
                    />
                    <SignOutSqure1 className="!absolute !w-[22px] !h-[22px] !top-[452px] !left-[34px]" />
                    <img
                        className="absolute w-[22px] h-[22px] top-[397px] left-[34px]"
                        alt="Setting alt line"
                        src="https://c.animaapp.com/iV4dCTfD/img/setting-alt-line.svg"
                    />
                    <div className="absolute w-[40px] h-[19px] top-[510px] left-[25px]">
                        <div className="h-[19px] bg-[#ffffff6b] rounded-[9.69px]">
                            <div className="relative w-[16px] h-[16px] top-[2px] left-[22px] bg-white rounded-[8.14px]" />
                        </div>
                    </div>
                    <img
                        className="absolute w-[22px] h-[22px] top-[46px] left-[33px]"
                        alt="Darhboard"
                        src="https://c.animaapp.com/iV4dCTfD/img/darhboard.svg"
                    />
                    <img
                        className="absolute w-[18px] h-[18px] top-[136px] left-[35px]"
                        alt="Icon clinical record"
                        src="https://c.animaapp.com/iV4dCTfD/img/---icon--clinical-record-@2x.png"
                    />
                    <img
                        className="absolute w-[21px] h-[22px] top-[177px] left-[35px]"
                        alt="Icon calendar"
                        src="https://c.animaapp.com/iV4dCTfD/img/---icon--calendar-schedule-@2x.png"
                    />
                    <Group
                        className="!absolute !left-[32px] !top-[90px]"
                        img="https://c.animaapp.com/iV4dCTfD/img/subtract-3.svg"
                        subtract="https://c.animaapp.com/iV4dCTfD/img/subtract-2.svg"
                    />
                    <Filter1 className="!absolute !w-[24px] !h-[24px] !top-[218px] !left-[32px]" />
                </div>
            </div>
        </div>
    );
};
