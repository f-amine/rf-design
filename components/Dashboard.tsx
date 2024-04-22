import React from "react";
import { SideBar } from "./SideBar";
export const Dashboard = (): JSX.Element => {
    return (
        <>
        <SideBar />
        <div className="relative w-full h-auto">
            <div className="flex flex-wrap justify-between">
                <div className="w-full sm:w-1/2 md:w-1/4 p-4">
                    <div className="relative h-auto rounded-3xl shadow-md bg-gradient-to-b from-green-400 to-cyan-600">
                        <div className="flex justify-between items-center p-4">
                            <div>
                                <span className="font-medium text-white text-lg leading-tight">
                                    Consultation
                                </span>
                                <div className="mt-2 flex items-end">
                                    <span className="font-semibold text-white text-5xl">
                                        010
                                    </span>
                                    <div className="flex flex-col ml-6">
                                        <img
                                            className="w-5 h-3"
                                            alt="Graph"
                                            src="https://c.animaapp.com/rodEQhoD/img/graph@2x.png"
                                        />
                                        <span className="font-normal text-white text-opacity-70 text-xl">
                                            -4%
                                        </span>
                                    </div>
                                </div>


                            </div>
                            <div className="w-24 h-24 rounded-full border border-white border-opacity-20 flex items-center justify-center">
                                <img
                                    className="w-12 h-12"
                                    alt="Stethoscope"
                                    src="https://c.animaapp.com/rodEQhoD/img/stethoscope-1.svg"
                                />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-full sm:w-1/2 md:w-1/4 p-4">
                    <div className="relative h-auto rounded-3xl shadow-md bg-gradient-to-b from-red-300 to-red-600">
                        <div className="flex justify-between items-center p-4">
                            <div>
                                <span className="font-medium text-white text-lg leading-tight">
                                    Total Patient
                                </span>
                                <div className="mt-2 flex items-end">
                                    <span className="font-semibold text-white text-5xl">
                                        034
                                    </span>
                                    <div className="flex flex-col ml-6">
                                        <img
                                            className="w-5 h-3"
                                            alt="Graph"
                                            src="https://c.animaapp.com/rodEQhoD/img/graph-1@2x.png"
                                        />
                                        <span className="font-normal text-white text-opacity-70 text-xl">
                                            +4%
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-24 h-24 rounded-full border border-white border-opacity-20 flex items-center justify-center">
                                <img
                                    className="w-12 h-12"
                                    alt="Heart rate"
                                    src="https://c.animaapp.com/rodEQhoD/img/heart-rate-1.svg"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/4 p-4">
                    <div className="relative h-auto rounded-3xl shadow-md bg-gradient-to-b from-blue-300 to-blue-600">
                        <div className="flex justify-between items-center p-4">
                            <div>
                                <span className="font-medium text-white text-lg leading-tight">
                                    Rendez vous
                                </span>
                                <div className="mt-2 flex items-end">
                                    <span className="font-semibold text-white text-5xl">
                                        010
                                    </span>
                                    <div className="flex flex-col ml-6">
                                        <img
                                            className="w-5 h-3"
                                            alt="Graph"
                                            src="https://c.animaapp.com/rodEQhoD/img/graph-2@2x.png"
                                        />
                                        <span className="font-normal text-white text-opacity-70 text-xl">
                                            -4%
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-24 h-24 rounded-full border border-white border-opacity-20 flex items-center justify-center">
                                <img
                                    className="w-12 h-12"
                                    alt="Ic calendar"
                                    src="https://c.animaapp.com/rodEQhoD/img/ic-calendar.svg"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/4 p-4">
                    <div className="relative h-auto rounded-3xl shadow-md bg-gradient-to-b from-[rgb(233.35,170.76,9.82)] to-[rgb(247,214,191)]">
                        <div className="flex justify-between items-center p-4">
                            <div>
                                <span className="font-medium text-white text-lg leading-tight">
                                    Examens
                                </span>
                                <div className="mt-2 flex items-end">
                                    <span className="font-semibold text-white text-5xl">
                                        56
                                    </span>
                                    <div className="flex flex-col ml-6">
                                        <img
                                            className="w-5 h-3"
                                            alt="Graph"
                                            src="https://c.animaapp.com/rodEQhoD/img/graph-3@2x.png"
                                        />
                                        <span className="font-normal text-white text-opacity-70 text-xl">
                                            +8%
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-24 h-24 rounded-full border border-white border-opacity-20 flex items-center justify-center">
                                <img
                                    className="w-12 h-12"
                                    alt="Ic dollar"
                                    src="https://c.animaapp.com/rodEQhoD/img/ic-dollar.svg"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
};
