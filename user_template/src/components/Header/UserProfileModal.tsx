import React from 'react'
import { Dropdown } from '@nextui-org/react';
import { FaRedditSquare } from 'react-icons/fa'

type Props = {}

const UserProfileModal = (props: Props) => {
  return (
    <Dropdown>
      <Dropdown.Button shadow color="error">
        <span>
          <FaRedditSquare className='w-100 h-100' />
          
        </span>
      </Dropdown.Button>
      <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Item key="profile" className='fw-bold'>Your Profile</Dropdown.Item>
        <Dropdown.Item key="login" className='fw-bolder'>Sign In</Dropdown.Item>
        <Dropdown.Item key="edit" className='fw-bolder'>Sign Up</Dropdown.Item>
        <Dropdown.Item key="delete" color="error" className='fw-bolder'>
          Sign Out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default UserProfileModal
