/*
 * This is usePost hook
 * Hook description here...
 */

import { useMemo } from 'react'

import { store } from '@/utils'

const usePost = ({ id }: { id: string }) => {
  const { posts } = store()

  const dataPost = useMemo(() => {
    const selectedPost = posts.filter((post) => post.id === id)

    return selectedPost[0] ?? undefined
  }, [posts])

  return {
    dataPost,
  }
}

export default usePost
