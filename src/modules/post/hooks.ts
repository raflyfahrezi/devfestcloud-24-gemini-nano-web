/*
 * This is usePost hook
 * Hook description here...
 */

import { v4 } from 'uuid'
import { useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'

import { store, checkCanSummarize } from '@/utils'

type TForm = {
  comment: string
}

const usePost = ({ id }: { id: string }) => {
  const { posts, comments, addComments } = store()
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TForm>()

  const handleOnSubmit = (values: TForm) => {
    addComments({
      content: values.comment,
      createdDate: new Date(),
      id: v4(),
      idPost: id,
    })

    reset()
  }

  const dataPost = useMemo(() => {
    const selectedPost = posts.filter((post) => post.id === id)

    return selectedPost[0] ?? undefined
  }, [posts])

  const summarizeHandler = async () => {
    //
  }

  useEffect(() => {
    summarizeHandler()
  }, [comments])

  return {
    errors,
    dataPost,
    comments,
    register,
    handleSubmit,
    handleOnSubmit,
  }
}

export default usePost
