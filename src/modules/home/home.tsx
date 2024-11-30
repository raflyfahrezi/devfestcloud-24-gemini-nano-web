/* eslint-disable @typescript-eslint/no-explicit-any */

/*
 * This is HomeModule component.
 * Component description here...
 */

'use client'

import { FC } from 'react'
import Link from 'next/link'
import { Textarea, Button } from '@chakra-ui/react'

import { Card, Wrapper } from '@/components'

import useHome from './hooks'

const HomeModule: FC = () => {
  const { posts, errors, handleSubmit, register, onSubmitHandler } = useHome()

  return (
    <Wrapper>
      <form
        className='flex flex-col gap-6 pb-10'
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div>
          <Textarea
            placeholder='Whats on your mind?'
            height={200}
            {...register('content', { required: true })}
          />
          {errors.content && (
            <p className='text-sm text-red-600'>This field is required</p>
          )}
        </div>
        <Button type='submit'>Create</Button>
      </form>

      <p className='font-bold text-lg'>Posts</p>

      {posts.length === 0 ? <Card content='No post' /> : undefined}

      {posts.length > 0 ? (
        <div className='flex flex-col gap-4 pt-4 pb-20'>
          {posts.map((item) => {
            return (
              <Link key={item.id} href={`/post/${item.id}`}>
                <Card content={item.content} createdDate={item.createdDate} />
              </Link>
            )
          })}
        </div>
      ) : undefined}
    </Wrapper>
  )
}

export default HomeModule
