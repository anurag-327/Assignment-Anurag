import { List,Gauge, Envelope, Calendar, AddressBook, SquaresFour, ChatsCircle, Presentation, Storefront, Gear, PresentationChart, DotsNine, ArrowLeft, ArrowRight, Money } from "phosphor-react"
import { motion } from "framer-motion"
const Slider = () => {
  return (
    <motion.div id="slider"  className="fixed overflow-hidden py-3 rounded-rb-2xl flex flex-col w-[300px] min-h-[calc(100%-56px)] md:min-h-[calc(100%apx)]  bg-dark-02 md:w-[18%] top-[56px] md:top-[71.6px] px-2 left-0 z-50 ">
        
        <div className="flex flex-col gap-4 mt-7">
            <span className="mx-5 text-sm font-bold text-white">MAIN MENU</span>
            <div className="block w-full rounded-full xl:hidden">  
                <div className="relative rounded-full bg-primary ">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 "  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-white rounded-full outline-none bg-primary " placeholder="Search here..." required/>
                </div>
            </div>
            <a href="#" className="flex items-center gap-3 px-5 mt-4">
               <Gauge size={26} color="#464366" weight="fill" />
               <span className="text-[#464366]">Dashboard</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-5">
               <Envelope size={26} color="#464366" weight="fill" />
               <span className="text-[#464366]">Email</span>
               <span className="flex items-center justify-center w-5 h-5 ml-5 text-sm text-white rounded-full bg-secondary">17</span>
            </a>
            <a href="#" className="flex gap-3 px-5">
               <ChatsCircle size={26} color="#7879F1" weight="fill" />
               <span className="text-[#7879F1]">Chat</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-5">
               <SquaresFour size={26} color="#6418C3" weight="fill" />
               <span className="text-[#6418C3]">Kanban</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-5">
               <AddressBook size={26} color="#7879F1" weight="fill" />
               <span className="text-[#7879F1]">Contact</span>
               <span className="flex items-center justify-center p-1 ml-5 text-sm text-white rounded-lg bg-grey-01">NEW</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-5">
               <Calendar size={26} color="#7879F1" weight="fill" />
               <span className="text-[#7879F1]">Calendar</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-5">
               <PresentationChart size={26} color="#464366" weight="fill" />
               <span className="text-[#7879F1]">Courses</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-5">
               <Storefront size={26} color="#464366" weight="fill"/>
               <span className="text-[#7879F1]">Shop</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-5">
               <Money size={26} color="#7879F1" weight="fill" />
               <span className="text-[#7879F1]">Invoices</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-5">
               <Gear size={26} color="#7879F1" weight="fill" />
               <span className="text-[#7879F1]">Settings</span>
            </a>
            <div>
                <select id="language" defaultValue={'English'} className="block w-full p-3 text-sm font-semibold text-white outline-none bg-primary md:hidden rounded-xl">
                    <option  value="English">🌍ENGLISH</option>
                    <option value="Hindi">🌍HINDI</option>
                    <option value="German">🌍GERMAN</option>
                </select>
            </div>
        </div>
        <div className="p-4 mt-10 overflow-hidden bg-blue-400 rounded-xl">
            <DotsNine size={45} color="#ffffff" weight="fill" />
            <span  className="text-lg font-semibold text-white">Increase your work with kanban</span>
            <ArrowRight size={20} color="#ffffff" weight="fill" />
            {/* <div className="bg-blue-50 absolute h-20 w-20 bottom-0 right-[-20px] rounded-full"></div> */}
        </div>
    </motion.div>
  )
}

export default Slider