import { ChevronDown, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'

interface SingleNavItemsProps {
    title: string;
    link?: string;
    dropdownItems?: {
        navigateLink: string;
        icon: LucideIcon;
        title: string;
    }[]
}

const SingleNavItem = ({ title, link, dropdownItems }: SingleNavItemsProps) => {
    const [itemOpen, setIsItemOpen] = useState(false);
    const setItem = () => {
        setIsItemOpen(!itemOpen);
    }



    return dropdownItems ? (
        <div key={title} className=''>
            <div className='cursor-pointer flex items-center gap-1 py-2'>
                <span className={`font-semibold text-[14px] text-gray-700 ${itemOpen ? "text-gray-800" : ""} `}>
                    {title}
                </span>
                <ChevronDown
                    size={16}
                    className={`text-gray-500 transition-all duration-200 ${itemOpen ? "rotate-180 text-gray-700 " : "rotate-0"} `}
                    onClick={setItem}

                />

            </div>
            {
                (dropdownItems != null && dropdownItems != undefined) && itemOpen ? (
                    <div className='w-auto flex-col gap-1 rounded-lg '>
                        <div className='bg-white rounded-lg  border border-gray-100 py-1 min-w-[200px]'>
                            {
                                dropdownItems.map((v, dropIndex) => {
                                    let Icon = v.icon;
                                    return (
                                        <Link
                                            href={v.navigateLink}
                                            key={dropIndex}
                                            className='flex items-center gap-2 px-2 py-3 text-gray-600 '
                                        >
                                            {Icon && <Icon size={16} className='text-gray-500' />}
                                            <span className='text-[12px] font-medium whitespace-nowrap'>
                                                {v.title}
                                            </span>
                                        </Link>
                                    );
                                })
                            }
                        </div>
                    </div>
                ) : null
            }



        </div>
    ) : (
        <Link key={title} href={link ?? "#"} className='py-1'>
            <span className='font-semibold text-[14px] text-gray-800 '>
                {title}
            </span>
        </Link>
    )
}

export default SingleNavItem