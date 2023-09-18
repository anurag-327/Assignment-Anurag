import { Plus } from "phosphor-react"
const ListHeading = ({name,count,color}) => {
  return (
    <div className="flex w-[290px]  items-center justify-between">
        <h2 className="text-base font-bold text-white">{name} ({count})</h2>
        <div className="flex items-center justify-center w-8 h-8 text-white rounded-lg cursor-pointer bg-primary">
          <Plus size={20} color={color} weight="bold" />
        </div>
    </div>
  )
}

export default ListHeading