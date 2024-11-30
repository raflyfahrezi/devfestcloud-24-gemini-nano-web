/*
 * This is PostModule component.
 * Component description here...
 */

'use client'

import { FC } from 'react'
import { Alert } from '@chakra-ui/react'

import { Card, Wrapper } from '@/components'

import usePost from './hooks'
import { Button, Input } from '@chakra-ui/react'

const PostModule: FC<{ id: string }> = ({ id }) => {
  const { dataPost, comments, register, handleSubmit, handleOnSubmit, errors } =
    usePost({
      id,
    })

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

      <div className='pt-4 pb-6 flex flex-col gap-6'>
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className='w-full flex flex-col gap-2'
        >
          <p className='text-lg font-bold'>Add comments</p>
          <div className='w-full flex gap-4'>
            <div className='w-full flex flex-col gap-2'>
              <Input
                placeContent='Type your content here'
                {...register('comment', { required: true })}
              />
              {errors.comment && (
                <p className='text-sm text-red-600'>This field is required</p>
              )}
            </div>
            <Button type='submit'>Add</Button>
          </div>
        </form>

        <Alert.Root>
          <Alert.Title>Summarize Comment</Alert.Title>
        </Alert.Root>

        <div className='flex flex-col gap-4 pb-4'>
          {comments.map((item) => {
            return (
              <div key={item.id}>
                <p key={item.id}>{item.content}</p>
                <p className='text-sm text-gray-600'>
                  Created at {item.createdDate.toDateString()}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

export default PostModule
