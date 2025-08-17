import { ChevronDown, LucideIcon, X } from "lucide-react"
import Link from "next/link";
import SingleNavItem from "./single-nav-item";

interface MobileNavProps {
    onClose: () => void;
    linksData: NavLink[]
}

interface DropdownItem {
    navigateLink: string;
    icon: LucideIcon;
    title: string;
}

interface NavLink {
    title: string;
    link?: string;
    dropdownData: DropdownItem[];
}

const MobileNav = ({ onClose, linksData }: MobileNavProps) => {
    return (
        <div className='top-0 fixed inset-0 h-full min-h-screen w-full bg-black/60 md:hidden flex justify-end'>
            <div className='h-full w-[65%] bg-white px-4 py-5'>
                <section className='flex justify-end'>
                    <X
                        color='#000000'
                        className='cursor-pointer text-4xl'
                        onClick={onClose}
                    />
                </section>
                <div className='flex flex-col items-start px-2 gap-4 md:gap-6 lg:gap-8'>
                    {
                        linksData.map((value, index) => {
                            return <SingleNavItem key={index} title={value.title} link={value.link} dropdownItems={value.dropdownData.length != 0 ? value.dropdownData : undefined} />

                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MobileNav;
