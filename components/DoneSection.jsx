import TodoCard from "./TodoCard"
import { Plus } from "phosphor-react"
import ListHeading from "./ListHeading"
import { doneTask } from "@/data/data"
const DoneSection = () => {
  return (
    <div className="flex flex-col gap-3">
     <ListHeading name={"Done"} color="#2e45ef" count="3" />
     {
        doneTask.map((item,index)=> <TodoCard key={index} item={item} />)
     }
      
    </div>
  )
}

export default DoneSection