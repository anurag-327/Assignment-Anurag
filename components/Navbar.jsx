import { Bell,Check,List,Briefcase,Presentation, CheckCircle } from "phosphor-react"
import { animate } from "framer-motion"
import { useEffect, useState } from "react"
const Navbar = () => {
    const [toggle,setToggle]=useState(true);
    useEffect(()=>
    {
        const { innerWidth: width, innerHeight: height } = window;
        if(innerWidth<600)
        {
            // alert(innerWidth)
            setToggle(false)
            toggleSlider();
        }
    },[])
    function toggleSlider()
    {
        // document.querySelector("#slider").classList.toggle("hidden")
        if(toggle==true)
        {
            animate("#slider", { width: 0, opacity:0 })
            setToggle(!toggle)
        }
        else
        {
            animate("#slider", { width: 281, opacity:1})
            setToggle(!toggle)
        }
    }
  return (
    <nav className="flex justify-between w-full px-6 py-3 bg-dark-02">
        <div className="flex items-center justify-between w-full gap-2 md:w-auto">
            <span className="text-[20px] md:mr-2 mr-5 font-semibold text-white">Weframetech</span>
            <List onClick={toggleSlider} className="cursor-pointer" size={32} color="#ffffff" weight="fill" />
        </div>
        <div className="flex gap-16">
            <div className="hidden rounded-full xl:block w-60">  
                <div className="relative rounded-full bg-primary ">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 "  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-white rounded-full outline-none bg-primary " placeholder="Search her..." required/>
                </div>
            </div>
            <button className="hidden text-sm font-semibold underline xl:block text-secondary">OTHER MENUS</button>
            <div className="items-center justify-center hidden md:flex md:gap-4">
                <button className="relative">
                   <Bell size={32} color="#6418C3" weight="fill" />
                   <div className="absolute top-[-6px] text-black font-semibold right-0 w-5 h-5 text-base  bg-blue-400 rounded-full">
                   12
                   </div>
                </button>
                <button className="relative">
                <Presentation size={32} color="#6418C3" weight="fill" />
                   <div className="absolute top-[-6px] right-0 w-5 h-5 text-base font-semibold text-black bg-blue-400 rounded-full">
                   1
                   </div>
                </button>
                <button className="relative">
                    <CheckCircle size={32} color="#6418C3" weight="fill" />
                   <div className="absolute top-[-6px] right-0 w-5 h-5 text-base font-semibold text-black bg-blue-400 rounded-full">
                   5
                   </div>
                </button>
                <button className="relative">
                   <Briefcase size={32} color="#6418C3" weight="fill" /> 
                   <div className="absolute top-[-6px] right-0 w-5 h-5 text-base font-semibold text-black bg-blue-400 rounded-full">
                   2
                   </div>
                </button> 
            </div>
            <div>
                <select id="language" defaultValue={'English'} className="hidden block w-full p-3 text-sm font-semibold text-white outline-none bg-primary md:block rounded-xl">
                    <option value="English">🌍ENGLISH</option>
                    <option value="Hindi">🌍HINDI</option>
                    <option value="German">🌍GERMAN</option>
                </select>
            </div>
                <div className="hidden gap-3 md:flex"> 
                    <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg">
                    <div className="w-10 h-10 bg-white rounded-lg">
            
                     </div> 
                    </div>
                    <div>
                       <h2 className="text-base font-bold text-white">Instructor day</h2>
                       <span className="text-sm text-grey-01">Super Admin</span>
                    </div> 
                </div>
        </div>    
    </nav>
  )
}

export default Navbar