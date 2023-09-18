import TodoCard from "./TodoCard"
import ListHeading from "./ListHeading"
import { Plus } from "phosphor-react"
import { progressTask } from "@/data/data"
const InProgresss = () => {
  return (
    <div className="flex flex-col gap-3">
      <ListHeading name={"In Progress"} color="#2e45ef" count="2" />
      {
        progressTask.map((item,index)=> <TodoCard key={index} item={item} />)
      }
    </div>
  )
}

export default InProgresss