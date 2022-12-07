// Write your code here
import {NoteCard, NoteHeading, NoteText} from './styledComponents'

const NoteItem = props => {
  const {item} = props
  const {title, notes} = item
  return (
    <NoteCard>
      <NoteHeading>{title}</NoteHeading>
      <NoteText>{notes}</NoteText>
    </NoteCard>
  )
}

export default NoteItem
