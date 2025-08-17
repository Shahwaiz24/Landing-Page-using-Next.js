import { X } from "lucide-react"

const MobileNav = ({ onClose }: any) => {
    return (
        <div className='top-0 fixed inset-0 h-full min-h-screen w-full bg-black/60 md:hidden flex justify-end'>
            <div className='h-full w-[65%] bg-white px-4 py-4'>
                <section className='flex justify-end'>
                    <X
                        color='#000000'
                        className='cursor-pointer text-4xl'
                        onClick={onClose}
                    />
                </section>
            </div>
        </div>
    )
}

export default MobileNav;
