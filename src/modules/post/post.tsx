/*
 * This is PostModule component.
 * Component description here...
 */

'use client'

import { FC } from 'react'

import { Card, Wrapper } from '@/components'

import usePost from './hooks'

const PostModule: FC<{ id: string }> = ({ id }) => {
  const { dataPost } = usePost({ id })

  if (!dataPost?.id) {
    return (
      <Wrapper>
        <Card content='No post found' />
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Card
        id={dataPost?.id}
        content={dataPost?.content}
        createdDate={dataPost?.createdDate}
      />
    </Wrapper>
  )
}

export default PostModule
