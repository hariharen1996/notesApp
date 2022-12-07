// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: Center;
  align-items: Center;
  min-height: 100vh;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 600;
  font-family: 'Bree Serif';
`

export const Card = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 10px 8px rgba(7, 7, 7, 0.03);
  padding: 25px;
  border-radius: 5px;
`

export const Input = styled.input`
  width: 300px;
  font-size: 12px;
  color: #475569;
  font-family: 'Roboto';
`

export const InputTextArea = styled.textarea`
  width: 300px;
  height: 200px;
  font-size: 12px;
  color: #475569;
  font-family: 'Roboto';
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const Button = styled.button`
  background-color: #4c63b6;
  color: #ffffff;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  padding: 5px 16px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
`

export const NoteContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
`

export const NoData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex-direction: column;
`

export const EmptyNotesImg = styled.img`
  width: 150px;
`

export const NoDataHeading = styled.h1`
  font-size: 20px;
  color: #1e293b;
  font-family: 'Roboto';
`

export const NoDataText = styled.p`
  font-size: 14px;
  color: #334155;
  font-family: 'Roboto';
`
