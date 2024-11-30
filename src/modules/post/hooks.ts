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
    if (comments.length === 0) {
      return
    }

    const statusCheckCanSummarize = await checkCanSummarize()

    console.log(statusCheckCanSummarize)

    if (statusCheckCanSummarize === 'no') {
      return
    }

    const commentsContent = comments.map((item) => item.content)
    const mergedCommentsContent = commentsContent.join('. ')

    const summarizer = await window.ai.summarizer.create({
      sharedContext: 'Comment of post',
      type: 'tl;dr',
      format: 'markdown',
      length: 'medium',
    })

    await summarizer.ready

    const summary = await summarizer.summarize(mergedCommentsContent, {
      context: 'Summarize this comment of a post',
    })

    console.log(summary)
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
