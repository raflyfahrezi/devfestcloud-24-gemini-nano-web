/*
 * This is PostPage component.
 * Component description here...
 */

import { FC } from 'react'

import { PostModule } from '@/modules'

const PostPage: FC<{ params: Promise<{ id: string }> }> = async ({
  params,
}) => {
  const id = (await params).id

  return <PostModule id={id} />
}

export default PostPage
