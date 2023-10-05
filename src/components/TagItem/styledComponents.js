import styled from 'styled-components'

export const Tag = styled.li`
  list-style-type: none;
  margin-right: 10px;
`
export const TagButton = styled.button`
  height: 30px;
  min-width: 100px;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  background-color: ${props => props.bgColor};
  border-width: 1px;
  border-style : solid 
  outline: none;
  border-radius: 16px;
  border-color : #f3aa4e;
`
