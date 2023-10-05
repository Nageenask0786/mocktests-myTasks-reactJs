import styled from 'styled-components'

export const Task = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  list-style-type: none;
  background-color: #1a171d;
  height: 50px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
`
export const Para = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  padding-left: 10px;
`
export const TaskButton = styled.p`
  height: 30px;
  min-width: 100px;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  background-color: #f3aa4e;
  border-width: 1px;
  border-style : solid 
  outline: none;
  border-radius: 16px;
  border-color : #f3aa4e;
  margin-right : 10px;
`
