import { ArrowCircleLeft ,ChatText,UserPlus, DotsThreeOutlineVertical} from "phosphor-react"
import AvatarGroupCounter from "./AvatarGroupCounter"
const TodoHeader = () => {
  return (
    <div className="flex flex-col gap-6 p-3 r rounded-xl bg-dark-02">
      <div className="flex justify-center md:justify-between r">
        <div className="flex items-center gap-3">
          <a href="#" className="hidden md:block">
             <ArrowCircleLeft className="" size={38} color="#A5A5A5" weight="fill" />
          </a>
          <div className="flex flex-col items-center justify-center text-center" >
            <h2 className="text-lg font-bold text-white">School November tasks</h2>
            <span className="text-sm text-grey-01">Created by Instructor Day on November 31,2022</span>
          </div>
        </div>
        <div className="items-center justify-center hidden gap-4 md:flex">
           <div>
               <h2 className="text-base font-bold text-white">Centered martial Arts</h2>
               <span className="text-sm text-grey-01">Sunnyvale, Ca</span>
           </div> 
           <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg">
             <div className="border-[6px] bg-white rounded-full w-9 h-9 border-t-green-400 border-b-yellow-300 border-l-red-500 border-r-blue-400">
             </div>
           </div>
            <button>
                <DotsThreeOutlineVertical size={23} color="#ffffff" weight="fill" />  
            </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-between ml-4 md:ml-16">
        <div className="flex flex-wrap gap-4">
          <AvatarGroupCounter />
          <button className="flex items-center justify-center gap-1 px-2 text-sm rounded-xl bg-secondary">
              <UserPlus className="inline-block" size={26} color="#ffffff" weight="fill" />
              <span className="font-bold text-white ">Invite People</span>
          </button>
          <button className="px-3 text-sm text-white border rounded-xl border-secondary">
               Private
          </button>
          <button className="px-5 text-sm text-white rounded-xl bg-secondary">
              Edit
          </button>
          <button className="flex items-center justify-center gap-2 px-2 py-1 text-sm text-white border rounded-xl border-secondary">
              <ChatText size={32} color="#ffffff" weight="fill" />
               45 Comments
          </button>
        </div>
        <div className="flex w-[50%] mt-3 md:mt-0 md:w-[25%]  items-center justify-center gap-3">
          <span className="inline-block text-sm text-white whitespace-nowrap">Total progress 60%</span>
          <progress className="w-full bg-dark progress progress-info" value={60} max="100"></progress>
        </div>
      </div>
    </div>
  )
}

export default TodoHeader