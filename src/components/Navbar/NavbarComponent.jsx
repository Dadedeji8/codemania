import logo from '../../assets/Logo.png';
import { Search } from 'lucide-react';
import { IoIosNotifications } from "react-icons/io";
import { FaCoins } from "react-icons/fa6";
import { HiUser } from "react-icons/hi2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const NavbarComponent = () => {
    return (
        <div className='fixed w-full bg-[#121212] px-[32px] py-[14px] flex flex-col sm:flex-row justify-between items-center z-50 border border-y-1 border-[#242424]'>
            <img src={logo} alt="logo" />
            <div className='hidden sm:flex bg-[#1C1C1C] w-full sm:w-[569px] h-[48px] items-center p-3 font-swiss'>
                <span className='px-1'>
                    <Search className='text-[#7E7F7F]' />
                </span>
                <form action="">
                    <input
                        type="text"
                        className='bg-[#1C1C1C] text-white  sm:w-[500px]'
                        placeholder='Search tournament, player name or player tag'
                    />
                </form>
            </div>
            <div className='flex gap-4 items-center mt-4 sm:mt-0'>
                <div className='flex gap-4 items-center'>
                    <div className="rounded-full p-2 bg-[#1C1C1C] hover:bg-yellow-200">
                        <IoIosNotifications className='text-[#DBD9D9] text-2xl -rotate-45 hover:text-yellow-500 hover:bg-yellow-200' />
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FaCoins className='text-[#FFB800]' />
                        <h3 className='font-swiss text-[#DBD9D9] text-[12px]'>20,000</h3>
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <div className="rounded-full p-2 bg-[#1C1C1C] hover:bg-yellow-200">
                        <HiUser className='text-[#DBD9D9] text-2xl hover:text-yellow-500 hover:bg-yellow-200' />
                    </div>
                    <div>
                        <h3 className='font-swiss text-[#DBD9D9] text-[12px]'>Akinola Olalekan</h3>
                        <div className='w-[70px] h-[20px] bg-[#40610F] flex items-center gap-2 text-center justify-around'>
                            <p className='text-[10px] text-white'>Online</p>
                            <MdOutlineKeyboardArrowDown className='text-[#DBD9D9] text-3xl' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarComponent;
