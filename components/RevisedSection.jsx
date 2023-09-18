import TodoCard from "./TodoCard"
import { Plus } from "phosphor-react"
import ListHeading from "./ListHeading"
const RevisedSection = () => {
  return (
    <div className="flex flex-col gap-3">
      <ListHeading name={"Revised"} color="#2e45ef" count="0" />
      <div className="w-full p-4 rounded-lg bg-primary">
          <div className="p-3 text-center border-2 border-dashed rounded-lg cursor-pointer bg-dark border-primary">
               <span className="text-base text-blue-400">Move card here</span>
          </div>
      </div>
    </div>
  )
}

export default RevisedSection