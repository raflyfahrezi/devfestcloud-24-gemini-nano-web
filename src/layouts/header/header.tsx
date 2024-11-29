/*
 * This is Header component.
 * Component description here...
 */

import { FC } from 'react'

import { Wrapper } from '@/components'

const Header: FC = () => {
  return (
    <div className='w-full py-6'>
      <Wrapper>
        <div className='w-full'>
          <p className='text-4xl font-bold'>Social Media</p>
        </div>
      </Wrapper>
    </div>
  )
}

export default Header
