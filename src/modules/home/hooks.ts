/*
 * This is useHome hook
 * Hook description here...
 */

import { v4 } from 'uuid'
import { useForm } from 'react-hook-form'

import { store } from '@/utils'

type TForm = {
  content: string
}

const useHome = () => {
  const { posts, addPost } = store()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TForm>()

  const onSubmitHandler = ({ content }: TForm) => {
    addPost({
      content,
      createdDate: new Date(),
      id: v4(),
    })
  }

  return {
    posts,
    errors,
    register,
    handleSubmit,
    onSubmitHandler,
  }
}

export default useHome
