import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

type Props = {}

const UserTemplate = (props: Props) => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default UserTemplate
