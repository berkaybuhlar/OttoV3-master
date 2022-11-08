import React, { useRef, useState, lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from '../components/Layout'
import AdminLayout from '../components/AdminLayout'
import Tiles from '../data/Canvases.json'
import AdminTiles from '../pages/Admin/AdminTiles'

/* ---Routes--- */
const Editor =lazy(() => import('../pages/Editor'))
const Order =lazy(() => import('../pages/Order'))
const Ordered =lazy(() => import('../pages/Ordered'))
const AdminLogin =lazy(() => import('../pages/Admin/AdminLogin'))
const AdminOrders =lazy(() => import('../pages/Admin/AdminOrders'))
const AdminForgotPassword =lazy(() => import('../pages/Admin/ForgotPassword'))

const Router = () => {
  const [scale, setScale]=useState(0)
  const [mode, setMode]=useState('single')
  const [modal, setModal]=useState(false)
  const [preview, setPreview]=useState('null')
  const [currentColor, setCurrentColor]=useState('#FFFFFF')
  const [currentCategory, setCurrentCategory]=useState('Tile 20x20')
  const [currentPattern, setCurrentPattern]=useState(Tiles[0])
  const [layingTypes, setLayingTypes]=useState([])
  const svgRef=useRef()
  const element=useRoutes([
    {
      element:
      <Suspense fallback={<div/>}>
        <Layout>
          <Editor
            scale={scale}
            setScale={setScale}
            mode={mode}
            setMode={setMode}
            setModal={setModal}
            modal={modal}
            preview={preview}
            setPreview={setPreview}
            currentColor={currentColor}
            setCurrentColor={setCurrentColor}
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
            currentPattern={currentPattern}
            setCurrentPattern={setCurrentPattern}
            layingTypes={layingTypes}
            setLayingTypes={setLayingTypes}
            ref={svgRef}
          />
        </Layout>
      </Suspense>,
      path: '/'
    },
    {
      element:
      <Suspense fallback={<div/>}>
        <Layout>
          <Order/>
        </Layout>
      </Suspense>,
      path: '/order'
    },
    {
      element:
      <Suspense fallback={<div/>}>
        <Layout>
          <Ordered />
        </Layout>
      </Suspense>,
      path: '/ordered'
    },
    {
      element:
      <Suspense fallback={<div/>}>
        <AdminLogin />
      </Suspense>,
      path: '/admin/login'
    },
    {
      element:
      <Suspense fallback={<div/>}>
        <AdminLayout>
          <AdminOrders />
        </AdminLayout>
      </Suspense>,
      path: '/admin/orders'
    },
    {
      element:
      <Suspense fallback={<div/>}>
        <AdminForgotPassword />
      </Suspense>,
      path: '/admin/forgot-password'
    },
    {
      element:
      <Suspense fallback={<div/>}>
        <AdminLayout>
          <AdminTiles />
        </AdminLayout>
      </Suspense>,
      path: '/admin/tiles'
    }
  ])
  return element
}

export default Router
