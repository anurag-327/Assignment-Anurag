import DoneSection from "./DoneSection"
import InProgresss from "./InProgresss"
import RevisedSection from "./RevisedSection"
import TodoList from "./TodoList"

const TodoSection = () => {
  return (
    <div className="flex flex-wrap justify-center w-full gap-4 mx-auto">
      <TodoList />
      <InProgresss />
      <DoneSection />
      <RevisedSection />
    </div>
  )
}

export default TodoSection