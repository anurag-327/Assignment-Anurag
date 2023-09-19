"use client"
import { Circle, DotsThreeOutline, Clock, X } from "phosphor-react"
import AvatarGroup from "./AvatarGroup"
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { useState } from "react";
const TodoCard = ({item}) => {
    const [open,setOpen]=useState(false);
    const color={
        Important:"text-[#FFAB2D]",
        InstructorMeeting:"text-[#E328AF]",
        Database:"text-[#38E25D]",
        Video:"text-[#5ECFFF]",
        BUGSFIXING:"text-[#FF4A55]"
    }
    const progressColor={
        Important:"bg-[#FFAB2D]",
        InstructorMeeting:"bg-[#E328AF]",
        Database:"bg-[#38E25D]",
        Video:"bg-[#5ECFFF]",
        BUGSFIXING:"bg-[#FF4A55]"
    }
    const dotColor={
        Important:"#FFAB2D",
        InstructorMeeting:"#E328AF",
        Database:"#38E25D",
        Video:"#5ECFFF",
        BUGSFIXING:"#FF4A55"
    }
    const defaultColor=item.color;
    const progress="w-["+item.progress+"%]";
  return (
    <div className="w-[280px] relative  box-border  bg-primary rounded-[14px]  p-3">
        {
            open&&<div className="absolute flex flex-col justify-center items-center rounded-[14px]  w-[280px] top-0 bottom-0 right-0 left-0 bg-black opacity-90 z-50">
                <button className="absolute right-2 top-2" onClick={()=> setOpen(false)}>
                    <X size={30} color="#ffffff" weight="fill" />
                </button>
                <div className="flex flex-col text-center">
                   <span className="font-bold text-white">{item.tag}</span>
                   <span className="text-sm text-grey-01">Due in {item.dueIn} day</span>
                </div>
            </div>
        }
        
        <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-start gap-1 text-yellow-01">
                <Circle className="w-[10px] h-[10px]" color={dotColor[defaultColor]} weight="fill" />
                <span className={`${color[defaultColor]}  text-sm font-semibold`}>{item.tag}</span>
            </div>
            <button onClick={()=> setOpen(true)}>
                <DotsThreeOutline size={28} color="#A5A5A5" weight="fill" />
            </button>
        </div>
        <div className="mt-2 text-base text-white ">
            <p>{item.description}</p>
        </div>
        <div className="w-[100%] p-0 mt-6 rounded-full bg-dark"> 
             <div className={` ${progress}  h-2 rounded-full bg-[${dotColor[defaultColor]}] `}></div>
            {/* <progress className={`w-full mt-4 bg-dark fill-[${color[defaultColor]}] progress progress-info  `} value={item.progress} max="100"></progress> */}
            {/* <ProgressBar 
               completed={item.progress}  
               className="bg-blue"
               barContainerClassName="bg-black" 
            /> */}
        </div>
        <div className="flex items-center justify-between w-full mt-1">
            <div className="-space-x-4 avatar-group">
                <AvatarGroup avatars={item.avatars} />
            </div>
            <div className="flex items-center gap-1">
                <Clock className="text-grey-01 h-[12px] w-[12px]" size={32} color="#A5A5A5" weight="fill" />
                <p className="text-sm text-grey-01">Due in {item.dueIn} days</p>
            </div>
        </div>

    </div>
  )
}

export default TodoCard