import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList 
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setComment] = useState('')

  const onChnageName = event => setName(event.target.value)
  const onChangeText = event => setComment(event.target.value)
  //const [comment, setCommentValues] = useState({name: '', commentText: ''})
  const [commentList, setCommentList] = useState([])

  const addComment = event => {
    event.preventDefault()

    const newComment = {
      id: uuidv4(),
      name,
      commentText,
    }
    setCommentList(previous => [...previous, newComment])
    //setCommentValues({name, commentText})
    setName('')
    setComment('')
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={addComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChnageName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          onChange={onChangeText}
          value={commentText}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList >
      {commentList.map(each => (
      <CommentItem commentDetails={each}  key={each.id}/>
      ))}
      </CommentsList >

      
    </CommentsContainer>
  )
}
export default Comments
