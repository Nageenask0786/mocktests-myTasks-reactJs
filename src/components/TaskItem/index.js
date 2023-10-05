import {Task, Para, TaskButton} from './styledComponents'

const TaskItem = props => {
  const {taskDetails} = props
  const {name, type} = taskDetails
  return (
    <Task>
      <Para>{name}</Para>
      <TaskButton>{type}</TaskButton>
    </Task>
  )
}

export default TaskItem
