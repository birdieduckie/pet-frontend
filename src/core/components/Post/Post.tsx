import { FC } from 'react'

interface PostProps {
  text: string
}

export const Post: FC<PostProps> = ({ text }) => {
  return <div>{text}</div>
}
