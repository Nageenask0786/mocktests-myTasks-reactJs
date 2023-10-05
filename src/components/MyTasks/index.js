import {Component} from 'react'
import {v4} from 'uuid'

import {
  AppContainer,
  Container1,
  Container2,
  Heading,
  TextContainer,
  Input,
  Label,
  Select,
  Option,
  Form,
  AddButton,
  TagsList,
  Heading2,
  NoTasksView,
  TasksList,
  Para,
} from './styledComponents'
import TagItem from '../TagItem'
import TaskItem from '../TaskItem'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    tasksList: [],
    nameInput: '',
    typeInput: tagsList[0].optionId,
    activeTagId: '',
  }

  addNewTask = event => {
    event.preventDefault()
    const {nameInput, typeInput} = this.state
    const newTask = {
      id: v4(),
      name: nameInput,
      type: typeInput,
    }
    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, newTask],
      nameInput: '',
      typeInput: tagsList[0].id,
    }))
  }

  getActiveTagId = id => {
    this.setState({activeTagId: id})
  }

  onChangeName = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeType = event => {
    this.setState({typeInput: event.target.value})
  }

  render() {
    const {tasksList, nameInput, typeInput, activeTagId} = this.state
    const filterTaskList =
      activeTagId === ''
        ? tasksList
        : tasksList.filter(each => each.type === activeTagId)
    console.log(typeInput)
    return (
      <AppContainer>
        <Container1>
          <Heading>Create a task!</Heading>
          <Form onSubmit={this.addNewTask}>
            <TextContainer>
              <Label htmlFor="tasks">Tasks</Label>
              <Input
                type="text"
                id="tasks"
                value={nameInput}
                onChange={this.onChangeName}
                placeholder="Enter the task here"
              />
            </TextContainer>
            <TextContainer>
              <Label htmlFor="tags">Tags</Label>
              <Select
                id="tags"
                onChange={this.onChangeType}
                value={activeTagId}
              >
                {tagsList.map(each => (
                  <Option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </Option>
                ))}
              </Select>
            </TextContainer>
            <AddButton type="submit">Add Task</AddButton>
          </Form>
        </Container1>
        <Container2>
          <Heading2 padding="60px">Tags</Heading2>
          <TagsList>
            {tagsList.map(each => (
              <TagItem
                tagDetails={each}
                key={each.optionId}
                activeTagId={activeTagId}
                getActiveTagId={this.getActiveTagId}
              />
            ))}
          </TagsList>
          <Heading2 padding="0px">Tasks</Heading2>
          {tasksList.length === 0 ? (
            <NoTasksView>
              <Para>No Tasks Added Yet</Para>
            </NoTasksView>
          ) : (
            <TasksList>
              {filterTaskList.map(each => (
                <TaskItem taskDetails={each} key={each.id} />
              ))}
            </TasksList>
          )}
        </Container2>
      </AppContainer>
    )
  }
}

export default MyTasks
