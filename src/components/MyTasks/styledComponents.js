import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 100vw;
`

export const Input = styled.input`
  height: 40px;
  background-color: #ffffff;
  outline: none;
  border-width: 1px;
  border-radius: 5px;
  font-family: 'Roboto';
  border-style: solid;
  border-color: #475569;
  color: #334155;
  cursor: pointer;
`

export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #131213;
  background-size: cover;
  min-height: 100vh;
  width: 40vw;
  align-items: center;
`
export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000000;
  background-size: cover;
  min-height: 100vh;
  width: 60vw;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #f3aa4e;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 30px;
  align-items: center;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 30px;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #ffffff;
`
export const Select = styled.select`
  height: 40px;
  background-color: #ffffff;
  outline: none;
  border-width: 1px;
  border-radius: 5px;
  font-family: 'Roboto';
  border-style: solid;
  border-color: #475569;
  color: #334155;
  cursor: pointer;
  font-weight: bold;
`
export const Option = styled.option`
  font-family: 'Roboto';
  color: #323f4b;
  font-weight: bold;
`
export const TagsList = styled.ul`
  display: flex;
  width: 80%;
  justify-content: space-between;
`
export const AddButton = styled.button`
  height: 40px;
  width: 100px;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  background-color: #f3aa4e;
  border: 0px;
  outline: none;
  border-radius: 6px;
`
export const Heading2 = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
  padding-left: 40px;
  padding-top: ${props => props.padding};
  margin-top: 4px;
`
export const TasksList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 90%;
`
export const NoTasksView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`
export const Para = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`
