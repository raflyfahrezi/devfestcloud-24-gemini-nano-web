/* eslint-disable @typescript-eslint/no-explicit-any */

/*
 * This is HomeModule component.
 * Component description here...
 */

'use client'

import Link from 'next/link'
import { FC, useEffect } from 'react'
import { Textarea, Button, Card } from '@chakra-ui/react'

import { Wrapper } from '@/components'

import useHome from './hooks'

const HomeModule: FC = () => {
  const { posts, errors, handleSubmit, register, onSubmitHandler } = useHome()

  const check = async () => {
    console.log(
      await window.translation.canTranslate({
        sourceLanguage: 'en',
        targetLanguage: 'es',
      })
    )

    // Create a translator that translates from English to French.
    const translator = await window.translation.createTranslator({
      sourceLanguage: 'en',
      targetLanguage: 'es',
    })

    translator.ondownloadprogress = (progressEvent: any) => {
      console.log(progressEvent.loaded, progressEvent.total)
    }

    const result = await translator.translate(
      'Where is the next bus stop, please?'
    )

    console.log('Where is the next bus stop, please?')
    console.log(result)
  }

  useEffect(() => {
    if (
      'translation' in self &&
      (('createTranslator' in self.translation) as unknown)
    ) {
      check()
    }
  }, [])

  return (
    <Wrapper>
      <form
        className='flex flex-col gap-6 pb-10'
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div>
          <Textarea
            placeholder='Whats on your mind?'
            {...register('content', { required: true })}
          />
          {errors.content && (
            <p className='text-sm text-red-600'>This field is required</p>
          )}
        </div>
        <Button type='submit'>Create</Button>
      </form>

      <p className='font-bold text-lg pb-4'>Posts</p>

      {posts.length === 0 ? (
        <Card.Root>
          <Card.Body>
            <p>No post</p>
          </Card.Body>
        </Card.Root>
      ) : undefined}

      {posts.length > 0 ? (
        <div className='flex flex-col gap-4'>
          {posts.map((item) => {
            return (
              <Link key={item.id} href={`/post/${item.id}`}>
                <Card.Root>
                  <Card.Body className='flex flex-col gap-2'>
                    <p>{item.content}</p>
                    <p className='text-sm text-gray-600'>
                      Created at {item.createdDate.toDateString()}
                    </p>
                  </Card.Body>
                </Card.Root>
              </Link>
            )
          })}
        </div>
      ) : undefined}
    </Wrapper>
  )
}

export default HomeModule
