// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  Form,
  Heading,
  Card,
  Input,
  Button,
  Container,
  ButtonContainer,
  NoteContainer,
  InputTextArea,
  NoData,
  EmptyNotesImg,
  NoDataHeading,
  NoDataText,
} from './styledComponents'
import NoteItem from '../NoteItem'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [data, setData] = useState([])

  const changeTitle = event => {
    setTitle(event.target.value)
  }

  const changeNotes = event => {
    setNotes(event.target.value)
  }

  const submitForm = event => {
    event.preventDefault()

    const newData = {
      id: uuidv4(),
      title,
      notes,
    }
    if (title !== '' && notes !== '') {
      setData(prevState => [...prevState, newData])
      setTitle('')
      setNotes('')
    }
  }

  return (
    <Container>
      <Heading>Notes</Heading>
      <Card>
        <Form onSubmit={submitForm}>
          <Input
            type="text"
            placeholder="Title"
            value={title}
            onChange={changeTitle}
          />
          <InputTextArea
            type="text"
            placeholder="Take a Note..."
            value={notes}
            onChange={changeNotes}
          />
          <ButtonContainer>
            <Button type="submit">Add</Button>
          </ButtonContainer>
        </Form>
      </Card>
      {data.length !== 0 ? (
        <NoteContainer>
          {data.map(item => (
            <NoteItem key={item.id} item={item} />
          ))}
        </NoteContainer>
      ) : (
        <NoData>
          <EmptyNotesImg
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <NoDataHeading>No Notes Yet</NoDataHeading>
          <NoDataText>Notes you add will appear here</NoDataText>
        </NoData>
      )}
    </Container>
  )
}

export default Notes
