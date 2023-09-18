import ListHeading from "./ListHeading"
import TodoCard from "./TodoCard"
import { Plus } from "phosphor-react"
import { todoTask } from "@/data/data"
const TodoList = () => {
  
  return (
    <div className="flex flex-col gap-3 text-white">
      <ListHeading name={"To-Do List"} color="#ffffff" count="24" />
      {
        todoTask.map((item,index)=> <TodoCard  key={index} item={item} />)
      }
    </div>
  )
}

export default TodoList