'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PlanCounter from '../buttons/PlanCounter';
import SavedCounter from '../buttons/SavedCounter';


const Navbar = () => {

    const pathname = usePathname();

    const navLinks = <>
        <li><Link
            className={`rounded-2xl text-lg font-medium px-3.5 py-2 transition-all duration-300  ${pathname === "/"
                ? "bg-[#1A1D23] text-[#ccff00]"
                : "text-white hover:bg-[#1A1D23] hover:text-[#ccff00]"
                }`}
            href='/'>
            Workouts
        </Link></li>
        <li><Link
            className={`rounded-2xl text-lg font-medium px-3.5 py-2 transition-all duration-300 ${pathname === "/my-plan"
                ? "bg-[#1A1D23] text-[#ccff00]"
                : "text-white hover:bg-[#1A1D23] hover:text-[#ccff00]"
                }`}
            href='/my-plan'>
            My Plan
        </Link></li>
    </>

    return (
        // <div className="fixed left-0 right-0 top-0 z-50 bg-[#101115] shadow-lg border border-b-gray-800 p-2">
        //     <div className="navbar container mx-auto text-white">

        //         {/* Logo + Mobile Menu */}
        //         <div className="navbar-start">

        //             {/* Mobile Dropdown */}
        //             <div className="dropdown">
        //                 <div
        //                     tabIndex={0}
        //                     role="button"
        //                     className="btn btn-ghost text-white hover:bg-[#1A1D23] hover:text-[#B1DA00] lg:hidden"
        //                 >
        //                     <svg
        //                         aria-label="Menu"
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         className="h-5 w-5"
        //                         fill="none"
        //                         viewBox="0 0 24 24"
        //                         stroke="currentColor"
        //                     >
        //                         <path
        //                             strokeLinecap="round"
        //                             strokeLinejoin="round"
        //                             strokeWidth="2"
        //                             d="M4 6h16M4 12h8m-8 6h16"
        //                         />
        //                     </svg>
        //                 </div>

        //                 <ul
        //                     tabIndex={-1}
        //                     className="menu menu-sm dropdown-content z-50 mt-3 w-52 rounded-box bg-[#101115] p-2 text-white shadow-xl"
        //                 >
        //                     {navLinks}
        //                 </ul>
        //             </div>

        //             {/* Logo */}
        //             <div className='flex gap-2'>
        //                 <Image
        //                     src='/asset/logo.png'
        //                     height={28} width={28} alt='Logo'
        //                 />
        //                 <span className='text-2xl font-semibold'>FITLOG</span>
        //             </div>
        //         </div>

        //         {/* Desktop Menu */}
        //         <div className="navbar-center hidden lg:flex">
        //             <ul className="menu menu-horizontal gap-1 px-1">

        //                 {/* Active Menu */}
        //                 {navLinks}
        //             </ul>
        //         </div>

        //         {/* Right Button */}
        //         <div className="navbar-end flex gap-2">
        //             <div>
        //                 <button className="btn btn-ghost text-white hover:bg-gray-800 border-0">Plan <span className='border border-gray-200 text-gray-200 p-2 rounded-2xl leading-0'>0</span></button>
        //             </div>
        //             <div>
        //                 <button className="btn btn-ghost text-white">Saved <span className='border border-gray-200 text-gray-200 p-2 rounded-2xl leading-0'>0</span></button>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="fixed left-0 right-0 top-0 z-50 border-b border-gray-800 bg-[#101115] p-2 shadow-lg">
            <div className="navbar container mx-auto text-white">

                {/* Logo + Mobile Menu */}
                <div className="navbar-start">

                    {/* Mobile Dropdown */}
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost text-base text-white transition-all duration-300 hover:bg-[#ccff00] hover:text-[#B1DA00] lg:hidden"
                        >
                            <svg
                                aria-label="Menu"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content z-50 mt-3 w-56 rounded-xl border border-gray-800 bg-[#101115] p-2 text-base text-white shadow-xl"
                        >
                            {navLinks}
                        </ul>
                    </div>

                    {/* Logo */}
                    <Link href='/'>
                        <div className="flex items-center gap-2">
                            <Image
                                src="/asset/logo.png"
                                height={32}
                                width={32}
                                alt="Logo"
                            />
                            <span className="text-2xl font-bold tracking-wide">
                                FITLOG
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-1 px-1 text-base font-medium">
                        {/* Active Menu */}
                        {navLinks}
                    </ul>
                </div>

                {/* Right Buttons */}
                <div className="navbar-end flex gap-2">
                    <PlanCounter />
                    <SavedCounter />
                </div>
            </div>
        </div>

    );
};

export default Navbar;