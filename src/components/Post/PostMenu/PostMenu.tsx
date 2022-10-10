import { FC } from 'react'

import { Button } from 'components/shared/Button/Button'

import { Container } from './styled'
import { useNavigate } from 'react-router-dom'
import { deletePostRequest } from 'store/posts/postSlice'
import { useAppDispatch } from 'store/store'

interface PostMenuProps {
  id: string
}

export const PostMenu: FC<PostMenuProps> = ({ id }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleDelete = () => {
    dispatch(deletePostRequest(id))
  }
  const handleEdit = () => {
    navigate(`/${id}/edit`, { replace: true })
  }

  return (
    <Container>
      <Button onClick={handleEdit} variant='inline'>
        Редактировать пост
      </Button>
      <Button onClick={handleDelete} variant='danger'>
        Удалить пост
      </Button>
    </Container>
  )
}
