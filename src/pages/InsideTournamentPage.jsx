import ContainerComponent from "@/components/ContainerComponent"
import heroimage from '../assets/img/cardImgage.png'
import Trophy from '../assets/img/Group 4.svg'
import { Link } from "react-router-dom"
import { IoCalendar, IoGameController } from "react-icons/io5"
import { useState } from "react"
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import line from '../assets/img/Lines.svg'
import longLine from '../assets/img/longLine.svg'
import Trohpy from '../assets/img/Trophy - Gold.png'
import vsLongLine from '../assets/img/vsLongLine.svg'
import vsLine from '../assets/img/vsLine.svg'
const InsideTournamentPage = () => {
    const [showTable, setShowTable] = useState(false)

    return (
        <ContainerComponent>
            <div className="p-5">
                <div className="mb-2">
                    <h1 className="text-white font-bold font-swiss mb-2"><Link to={"/"}>{`< Back`}</Link></h1>
                    <img src={heroimage} className="w-full" alt="" />
                </div>
                <h1 className="text-white font-swiss text-4xl scale-y-75 font-bold">Call of duty</h1>
                <div className="rounded-3xl text-[#7E7F7F] bg-[#242424] w-[100px] h-[35px] flex items-center justify-center mt-4">
                    <span><img src={Trophy} alt="" /></span>  N 10,000
                </div>
                <p className="font-swiss text-[#7E7F7F] leading-5 my-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
                <div className="flex gap-3">
                    <span className="flex  items-center gap-2 text-[#828282] text-sm font-swiss">
                        <IoCalendar /> 10 Feb 2023
                    </span>
                    <span className="flex  items-center gap-2 text-[#828282] text-sm font-swiss">
                        <IoCalendar />Free-to-play
                    </span>
                    <span className="flex  items-center gap-2 text-[#828282] text-sm font-swiss">
                        <IoCalendar /> 4v4
                    </span>
                    <span className="flex  items-center gap-2 text-[#828282] text-sm font-swiss">
                        <IoCalendar /> 10/48
                    </span>
                </div>
                <div className="bg-[#8BC72F] w-[187px] text-black font-semibold hover:border hover:bg-[#8ac72fb8] flex items-center gap-3 justify-center py-2 px-3 font-swiss mt-4">

                    <IoGameController />
                    <span>
                        Join Tournament
                    </span>
                </div>
                <h1 className="font-swiss  text-3xl scale-y-75 my-3 tracking-wider font-bold text-white">
                    Tournament Information
                </h1>
            </div>
            <div className="flex gap-2">
                <div className={`w-[131px] ${showTable ? 'bg-[#141414] ' : 'bg-[#3B3B3B]'} px-3 text-white py-2 flex items-center justify-center text-[12px] cursor-pointer `} onClick={() => setShowTable(false)}>
                    Leaderboard
                </div>
                <div className={`w-[131px] ${!showTable ? 'bg-[#141414]' : 'bg-[#3B3B3B]'} px-3 text-white py-2 flex items-center justify-center text-[12px] cursor-pointer`} onClick={() => setShowTable(true)}>
                    Fixtures
                </div>
            </div>
            {
                !showTable ?
                    (<div className="mt-5">
                        <table className="w-full">
                            <thead className="bg-[#242424] font-light text-center p-3 text-[#7E7F7F]">
                                <tr>
                                    <td className="h-[48px] text-[13px]">Placement</td>
                                    <td className="h-[48px] text-[13px]">Player</td>
                                    <td className="h-[48px] text-[13px]">Games Played</td>
                                    <td className="h-[48px] text-[13px]">Wins </td>
                                    <td className="h-[48px] text-[13px]">Losses </td>
                                    <td className="h-[48px] text-[13px]">W/L Ratio </td>
                                    <td className="h-[48px] text-[13px]">Points </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-[#1C1C1C] p-3 text-center text-white font-light border-y-[1px] border-[#2E2E2E]">
                                    <td className="h-[64px] text-[13px] flex items-center justify-center gap-2 flex-row">
                                        <FaChevronUp className="text-[#8BC72F]" />1
                                    </td>
                                    <td className="h-[64px] text-[13px]">Adebayo Oyeleye</td>
                                    <td className="h-[64px] text-[13px]">20</td>
                                    <td className="h-[64px] text-[13px]">20 </td>
                                    <td className="h-[64px] text-[13px]">0 </td>
                                    <td className="h-[64px] text-[13px]">100% </td>
                                    <td className="h-[64px] text-[13px]">49 </td>
                                </tr>
                                <tr className="bg-[#1C1C1C] p-3 text-center text-white font-light border-y-[1px] border-[#2E2E2E]">
                                    <td className="h-[64px] text-[13px] flex items-center justify-center gap-2 flex-row">
                                        <FaChevronDown className="text-[#C52D26]" />2
                                    </td>
                                    <td className="h-[64px] text-[13px]">Adebayo Oyeleye</td>
                                    <td className="h-[64px] text-[13px]">20</td>
                                    <td className="h-[64px] text-[13px]">19 </td>
                                    <td className="h-[64px] text-[13px]">1 </td>
                                    <td className="h-[64px] text-[13px]">98% </td>
                                    <td className="h-[64px] text-[13px]">47 </td>
                                </tr>
                                <tr className="bg-[#1C1C1C] p-3 text-center text-white font-light border-y-[1px] border-[#2E2E2E]">
                                    <td className="h-[64px] text-[13px] flex items-center justify-center gap-2 flex-row">
                                        <GoDash className="text-[#FFB800]" />3
                                    </td>
                                    <td className="h-[64px] text-[13px]">Adebayo Oyeleye</td>
                                    <td className="h-[64px] text-[13px]">20</td>
                                    <td className="h-[64px] text-[13px]">17 </td>
                                    <td className="h-[64px] text-[13px]">3 </td>
                                    <td className="h-[64px] text-[13px]">92% </td>
                                    <td className="h-[64px] text-[13px]">46 </td>
                                </tr>
                                <tr className="bg-[#1C1C1C] p-3 text-center text-white font-light border-y-[1px] border-[#2E2E2E]">
                                    <td className="h-[64px] text-[13px] flex items-center justify-center gap-2 flex-row">
                                        <GoDash className="text-[#FFB800]" />4
                                    </td>
                                    <td className="h-[64px] text-[13px]">Adebayo Oyeleye</td>
                                    <td className="h-[64px] text-[13px]">20</td>
                                    <td className="h-[64px] text-[13px]">17 </td>
                                    <td className="h-[64px] text-[13px]">3 </td>
                                    <td className="h-[64px] text-[13px]">92% </td>
                                    <td className="h-[64px] text-[13px]">46 </td>
                                </tr>
                                <tr className="bg-[#1C1C1C] p-3 text-center text-white font-light border-y-[1px] border-[#2E2E2E]">
                                    <td className="h-[64px] text-[13px] flex items-center justify-center gap-2 flex-row">
                                        <FaChevronUp className="text-[#00B946]" />5
                                    </td>
                                    <td className="h-[64px] text-[13px]">Adebayo Oyeleye</td>
                                    <td className="h-[64px] text-[13px]">20</td>
                                    <td className="h-[64px] text-[13px]">17 </td>
                                    <td className="h-[64px] text-[13px]">3 </td>
                                    <td className="h-[64px] text-[13px]">92% </td>
                                    <td className="h-[64px] text-[13px]">46 </td>
                                </tr>
                                <tr className="bg-[#1C1C1C] p-3 text-center text-white font-light border-y-[1px] border-[#2E2E2E]">
                                    <td className="h-[64px] text-[13px] flex items-center justify-center gap-2 flex-row">
                                        <GoDash className="text-[#FFB800]" />6
                                    </td>
                                    <td className="h-[64px] text-[13px]">Adebayo Oyeleye</td>
                                    <td className="h-[64px] text-[13px]">20</td>
                                    <td className="h-[64px] text-[13px]">17 </td>
                                    <td className="h-[64px] text-[13px]">3 </td>
                                    <td className="h-[64px] text-[13px]">92% </td>
                                    <td className="h-[64px] text-[13px]">46 </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>)
                    :
                    (
                        <div className=" flex mt-10 h-[300px] items-center m-auto max-w-[700px] ">
                            <div className="flex flex-col items-center justify-around h-full">
                                <div className="bg-[#3B3B3B] flex justify-center font-swiss text-white items-center sm-p-1 md:px-10 h-[32px]">
                                    <p className="text-[12px] md:text-[18px] font-light">TBH</p>
                                </div>
                                <div className="bg-[#3B3B3B] flex justify-center font-swiss text-white items-center sm-p-1 md:px-10 h-[32px]">
                                    <p className="text-[12px] md:text-[18px] font-light">TBH</p>
                                </div>
                                <div className="bg-[#3B3B3B] flex justify-center font-swiss text-white items-center sm-p-1 md:px-10 h-[32px]">
                                    <p className="text-[12px] md:text-[18px] font-light">TBH</p>
                                </div>
                                <div className="bg-[#3B3B3B] flex justify-center font-swiss text-white items-center sm-p-1 md:px-10 h-[32px]">
                                    <p className="text-[12px] md:text-[18px] font-light">TBH</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-around h-full">
                                <img src={line} alt="" />
                                <img src={line} alt="" />
                            </div>
                            <div className="flex flex-col items-center justify-around h-full">
                                <div className="bg-[#3B3B3B] flex justify-center font-swiss text-white items-center sm-p-1 md:px-10 h-[32px]">
                                    <p className="text-[12px] md:text-[18px] font-light">TBH</p>
                                </div>
                                <div className="bg-[#3B3B3B] flex justify-center font-swiss text-white items-center sm-p-1 md:px-10 h-[32px]">
                                    <p className="text-[12px] md:text-[18px] font-light">TBH</p>
                                </div>

                            </div>
                            <div className="flex flex-col items-center justify-around h-full">
                                <img src={longLine} alt="" />

                            </div>
                            {/* versus */}
                            <div className="flex flex-col items-center justify-center h-full">
                                <h1 className="font-bold text-2xl text-white">FINAL</h1>
                                <img src={Trohpy} alt="" />
                            </div>
                            {/* versus */}
                            <div className="flex flex-col items-center justify-around h-full">
                                <img src={vsLongLine} alt="" />

                            </div>
                            <div className="flex flex-col items-center justify-around h-full">
                                <div className="bg-[#3B3B3B] flex justify-center font-swiss text-white items-center sm-p-1 md:px-10 h-[32px]">
                                    <p className="text-[12px] md:text-[18px] font-light">TBH</p>
                                </div>
                                <div className="bg-[#3B3B3B] flex justify-center font-swiss text-white items-center sm-p-1 md:px-10 h-[32px]">
                                    <p className="text-[12px] md:text-[18px] font-light">TBH</p>
                                </div>

                            </div>
                            <div className="flex flex-col items-center justify-around h-full">
                                <img src={vsLine} alt="" />
                                <img src={vsLine} alt="" />
                            </div>
                            <div className="flex flex-col items-center justify-around h-full">
                                <div className="bg-[#3B3B3B] flex justify-center font-swiss text-white items-center sm-p-1 md:px-10 h-[32px]">
                                    <p className="text-[12px] md:text-[18px] font-light">TBH</p>
                                </div>
                                <div className="bg-[#3B3B3B] flex justify-center font-swiss text-white items-center sm-p-1 md:px-10 h-[32px]">
                                    <p className="text-[12px] md:text-[18px] font-light">TBH</p>
                                </div>
                                <div className="bg-[#3B3B3B] flex justify-center font-swiss text-white items-center sm-p-1 md:px-10 h-[32px]">
                                    <p className="text-[12px] md:text-[18px] font-light">TBH</p>
                                </div>
                                <div className="bg-[#3B3B3B] flex justify-center font-swiss text-white items-center sm-p-1 md:px-10 h-[32px]">
                                    <p className="text-[12px] md:text-[18px] font-light">TBH</p>
                                </div>
                            </div>
                        </div>
                    )
            }

        </ContainerComponent>
    )
}

export default InsideTournamentPage
