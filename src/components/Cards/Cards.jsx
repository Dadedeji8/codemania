
import { HiUser } from "react-icons/hi2";
import { HiMiniPlay } from "react-icons/hi2";
import ImageCard from '../../assets/img/cardImgage.png'
import Trophy from "../../assets/img/Trophy - Icon.png";
import { IoCalendar } from "react-icons/io5";
import { IoGameController } from "react-icons/io5";


export const Cards = ({ className = 'style', title = 'title', content = 'content', button = 'button', img = '' }) => {
    return (
        <div className={`flex flex-1 flex-wrap gap-4 p-6 py-8 bg-[#1C1C1C] items-center justify-between ${className}`}>
            <div className="leading-1">
                <h1 className="text-white text-3xl tracking-wide font-bold mb-2 scale-y-75">{title}</h1>
                <p className="text-[#828282] text-[16px] font-swiss mb-2 max-w-[270px]">{content}</p>
                <button className=" font-swiss flex flex-wrap gap-3 items-center justify-center font-bold text-white text-md hover:text-white transition-all ease-in-out duration-300">
                    <HiMiniPlay className="text-3xl" /> <span className="scale-y-90"> {button}</span>
                </button>
            </div>
            <div>
                <img src={img} alt="" className="w-full
                " />
            </div>
        </div>
    )
}



export const GameCards = () => {
    return (
        <div className="group hover:border-2 p-2 hover:border-[#1C1C1C] group-hover:brightness-100">
            <div className="group w-[322.67px] bg-[#1C1C1C]    brightness-75 ease-in-out duration-300 hover:brightness-100">
                <div className="group h-[167px]">
                    <img src={ImageCard} alt="" className="w-full filter h-full transition-all " />
                </div>
                <div className="p-3">
                    <h1 className="text-white font-swiss text-xl font-medium leading-[2.5rem] mt-4">
                        Call of duty
                    </h1>
                    <div className="flex justify-between items-center mt-4">
                        <div>
                            <span className="flex  items-center gap-2 text-[#828282] text-sm font-swiss">
                                <IoCalendar /> 10 Feb 2023
                            </span>
                            <span className="flex  items-center gap-2 text-[#828282] text-sm font-swiss">
                                <IoCalendar />4v4
                            </span>
                        </div>
                        <div>
                            <span className="flex  items-center gap-2 text-[#828282] text-sm font-swiss">
                                <IoCalendar />
                            </span>
                            <span className="flex  items-center gap-2 text-[#828282] text-sm font-swiss">
                                <IoCalendar />10/48
                            </span>
                        </div>
                    </div>
                    <div className="rounded-3xl text-[#7E7F7F] bg-[#242424] w-[100px] h-[35px] flex items-center justify-center mt-4">
                        <span><img src={Trophy} alt="" /></span>  N10,000
                    </div>
                    <div className="bg-[#8BC72F] text-black font-semibold hover:border hover:bg-[#8ac72fb8] flex items-center gap-3 justify-center py-2 px-3 font-swiss mt-4">

                        <IoGameController />
                        <span>
                            Join Tournament
                        </span>
                    </div>
                    <div className="border border-white text-white font-semibold flex items-center gap-3 justify-center py-2 px-3 font-swiss mt-4">

                        <IoGameController />
                        <span>
                            View Details
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}





export const LargeCards = ({ className, img }) => {
    return (
        <div className={`flex flex-wrap gap-4 p-6 py-8 bg-[#1C1C1C] items-center justify-between ${className}`}>
            <div className="leading-[2.5rem]">
                <h1 className="text-white text-3xl tracking-wide font-bold mb-2 scale-y-75">Setup your profile</h1>
                <p className="text-[#828282] text-[16px] font-swiss mb-2">Complete your information to get access to tournaments and other premium features</p>
                <button className="w-[188px] font-swiss bg-[#8BC72F] flex flex-wrap gap-3 items-center justify-center font-semibold text-[#0A0A0A] hover:text-white hover:border hover:border-white  hover:bg-[#2f922d] transition-all ease-in-out duration-300">
                    <HiUser />  Complete profile
                </button>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default LargeCards
