import { IoLogoGameControllerB } from "react-icons/io";
import { IoIosMedal } from "react-icons/io";
import { FaCoins } from 'react-icons/fa';
import { FaVideo } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';
import Bet from '../../assets/Bet.svg';
import { BiLogOut } from "react-icons/bi";
import { FaHamburger } from "react-icons/fa";
import { useState } from 'react'; // To manage sidebar toggle

const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false); // Sidebar state for small screens

    const toggleSidebar = () => {
        setIsOpen(!isOpen); // Toggle sidebar visibility
    };

    const NavLinkItems = [
        {
            id: 1,
            name: 'Tournament',
            link: '/',
            icon: <IoLogoGameControllerB />
        },
        {
            id: 2,
            name: 'Leadership',
            link: '/fixtures',
            icon: <IoIosMedal />
        },
        {
            id: 3,
            name: 'Token Shop',
            link: '/token-shop',
            icon: <FaCoins />
        },
        {
            id: 4,
            name: 'Live Betting',
            link: '/live-betting',
            icon: <img src={Bet} alt="Bet Icon" className="w-6 h-6" />
        },
        {
            id: 5,
            name: 'Content Locker',
            link: '/content-locker',
            icon: <FaVideo />
        },
        {
            id: 6,
            name: 'Community',
            link: '/community',
            icon: <HiMiniUserGroup />
        }
    ];

    return (
        <>
            {/* Toggle Button for Small Screens */}
            <button
                className="md:hidden p-3 text-white bg-gray-700 fixed top-4 left-4 z-50"
                onClick={toggleSidebar}
            >
                {isOpen ? <FaHamburger /> : <FaHamburger />} {/* Show "Close" when sidebar is open */}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 w-[248px] sm:pt-[200px] flex flex-col h-screen z-40 bg-[#121212] text-[#7E7F7F] md:pt-[100px] 
                ${isOpen ? "flex " : "hidden"}   md:block transition-all ease-in-out duration-300 justify-between`} // Hidden on small screens, shown on large screens
            >
                <div className="flex flex-col items-center gap-1 mt-[150px] md:mt-[0] ml-[20px] justify-between">
                    {NavLinkItems.map((item) => (
                        <NavLink
                            key={item.id}
                            to={item.link}
                            className={({ isActive }) =>
                                `flex gap-3 items-center  p-3 py-2 w-[200px] text-[16px] hover:bg-[#3B3B3B] ${isActive ? 'bg-[#3B3B3B] text-white' : 'text-[#7E7F7F]'}`
                            }
                        >
                            {item.icon}
                            <h1 className='font-swiss'>{item.name}</h1>
                        </NavLink>
                    ))}
                </div>
                <div className={'flex gap-3 p-3 py-2 ml-[20px] absolute bottom-2 w-[200px] text-[16px] items-center bg-[#5F0A07] hover:bg-[#5f0a07ac] justify-around text-white'}>
                    <span className="flex gap-4 items-center">
                        <BiLogOut />
                        <NavLink to={'/'}>
                            LOG - OUT
                        </NavLink>
                    </span>
                </div>
            </div>
        </>
    );
};

export default SideNav;
