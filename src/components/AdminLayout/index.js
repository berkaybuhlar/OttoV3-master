import React from 'react'
import AdminNavbar from '../AdminNavbar'
import Footer from '../Footer'
const index = ({ children }) => {
  return (
    <div>
      <AdminNavbar />
      {children}
      <Footer />
    </div>
  )
}

export default index
