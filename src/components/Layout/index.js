import { Fragment } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const index = ({ children }) => {
  return (
    <Fragment>
      <Navbar/>
      {children}
      <Footer/>
    </Fragment>
  )
}

export default index
