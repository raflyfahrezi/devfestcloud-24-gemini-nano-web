/*
 * This is Card component.
 * Component description here...
 */

'use client'

import { FC } from 'react'
import { Card as BaseCard, Alert } from '@chakra-ui/react'

import { TPost } from '@/models'

import useCard from './hooks'

type TCard = {
  //
} & Partial<TPost>

const Card: FC<TCard> = ({ id, content, createdDate }) => {
  const { alertStatus, translationText, translatePostHandler } = useCard()

  return (
    <BaseCard.Root>
      <BaseCard.Body className='flex flex-col gap-4'>
        <p className='whitespace-pre-wrap'>{content}</p>

        {createdDate && (
          <p className='text-sm text-gray-600'>
            Created at {createdDate?.toDateString()}
            {id && (
              <>
                {' '}
                &middot;{' '}
                <span
                  className='underline cursor-pointer'
                  onClick={() => translatePostHandler(content)}
                >
                  Translate post
                </span>
              </>
            )}
          </p>
        )}

        {alertStatus && (
          <Alert.Root size='sm'>
            <Alert.Indicator />
            <Alert.Title>{alertStatus}</Alert.Title>
          </Alert.Root>
        )}

        {translationText && <p className='text-sm '>{translationText}</p>}
      </BaseCard.Body>
    </BaseCard.Root>
  )
}

export default Card
