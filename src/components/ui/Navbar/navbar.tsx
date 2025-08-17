"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Button from '../button'
import { Award, BellIcon, Code, Download, FileText, FolderOpen, TrendingUp, UserCheck, Users, ChevronDown, HamburgerIcon, MenuIcon } from "lucide-react";
import Link from 'next/link';
import MobileNav from './mobile-nav';

const Navbar = () => {
    const [isClient, setIsClient] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const linksData = [
        {
            title: "Service",
            dropdownData: [
                {
                    navigateLink: "/web-development",
                    icon: Code,
                    title: "Web Development"
                },
                {
                    navigateLink: "/digital-marketing",
                    icon: TrendingUp,
                    title: "Digital Marketing"
                }
            ]
        },
        {
            title: "Agency",
            dropdownData: [
                {
                    navigateLink: "/about-us",
                    icon: Users,
                    title: "About Us"
                },
                {
                    navigateLink: "/our-team",
                    icon: UserCheck,
                    title: "Our Team"
                }
            ]
        },
        {
            title: "Case study",
            dropdownData: [
                {
                    navigateLink: "/portfolio",
                    icon: FolderOpen,
                    title: "Portfolio"
                },
                {
                    navigateLink: "/success-stories",
                    icon: Award,
                    title: "Success Stories"
                }
            ]
        },
        {
            title: "Resources",
            dropdownData: [
                {
                    navigateLink: "/blog",
                    icon: FileText,
                    title: "Blog"
                },
                {
                    navigateLink: "/downloads",
                    icon: Download,
                    title: "Downloads"
                }
            ]
        },
        {
            title: "Contact",
            link: "",
            dropdownData: []
        },
    ];
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <div className='bg-white w-full  flex items-center justify-between lg:px-10 md:px-8 px-6 py-5'>


            <div className='flex lg:gap-18 md:gap-16 gap-14'>
                {isOpen && <MobileNav linksData={linksData} onClose={() => setIsOpen(false)} />}

                {/* Logo Section */}
                <div className='flex items-center gap-2'>
                    <Image src="/images/logo.svg" width={34} height={34} alt='Logo' />
                    <h1 className='font-manrope font-bold text-[18px] md:text-[20px] lg:text-[24px] text-gray-900'>MAC</h1>
                </div>


                {/* Navigation Links - Center */}
                <div className='hidden md:flex items-center gap-4 md:gap-6 lg:gap-8'>
                    {
                        linksData.map((value, index) => {
                            if (value.dropdownData.length !== 0) {
                                const dropdownData = value.dropdownData;
                                return (
                                    <div key={index} className='group relative'>
                                        <div className='cursor-pointer flex items-center gap-0.5 md:gap-1 lg:gap-1.5 py-2'>
                                            <span className='font-semibold text-[11px] md:text-[13px] lg:text-[15px] text-gray-700 group-hover:text-gray-900 transition-colors'>
                                                {value.title}
                                            </span>
                                            <ChevronDown
                                                size={16}
                                                className='text-gray-500 transition-all duration-200 group-hover:rotate-180 group-hover:text-gray-700'
                                            />
                                        </div>

                                        {/* Dropdown Menu */}
                                        <div className='absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50'>
                                            <div className='bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[200px]'>
                                                {
                                                    dropdownData.map((v, dropIndex) => {
                                                        let Icon = v.icon;
                                                        return (
                                                            <Link
                                                                href={v.navigateLink}
                                                                key={dropIndex}
                                                                className='flex items-center gap-1 md:gap-2 lg:gap-3 px-2 md:px-3  lg:px-4 py-1 md:py-2 lg:py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150'
                                                            >
                                                                {Icon && <Icon size={18} className='text-gray-500' />}
                                                                <span className='lg:text-[15px] md:text-[12px] text-[10px]  font-medium whitespace-nowrap'>
                                                                    {v.title}
                                                                </span>
                                                            </Link>
                                                        );
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            return (
                                <Link key={index} href={value.link ?? "#"} className=' py-1 md:py-2 lg:py-3'>
                                    <span className='font-semibold lg:text-[15px] md:text-[12px] text-[10px] text-gray-700 hover:text-gray-900 transition-colors'>
                                        {value.title}
                                    </span>
                                </Link>
                            );
                        })
                    }
                </div>
            </div>

            {/* Right Side Buttons */}
            <div className='hidden md:flex items-center lg:gap-3 md:gap-2 gap-1'>
                <Button
                    navigationLink='/'
                    className="transition-colors duration-300 hover:bg-black lg:px-4 md:px-3 px-2  hover:text-white cursor-pointer"
                >
                    <span className='font-manrope font-semibold lg:text-[14px] md:text-[12px] text-[10px]'>Get started</span>
                </Button>
                <Button
                    navigationLink='/'
                    className="bg-foreground lg:py-3 md:py-2 py-1 px-1 text-white transition-colors duration-300 hover:bg-white hover:text-black cursor-pointer"
                >
                    <BellIcon size={22} />
                </Button>
            </div>

            {!isOpen && (
                <MenuIcon
                    color='#000000'
                    className='text-4xl cursor-pointer md:hidden'
                    onClick={() => setIsOpen(true)}
                />
            )}


        </div>
    )
}

export default Navbar