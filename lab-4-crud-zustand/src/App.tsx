import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import PostLayout from './pages/post/PostLayout'
import PostList from './pages/post/PostList'
import PostNew from './pages/post/PostNew'
import PostEdit from './pages/post/PostEdit'
import PostDetail from './pages/post/PostDetail'
import PostDelete from './pages/post/PostDelete'
import { Toaster } from 'react-hot-toast'

type Props = {}

const App = (props: Props) => {
  return (
    <BrowserRouter>
    <Toaster position='top-center'/>
    <Routes>
      <Route path="/" element={<Layout />} >
      <Route index element={<Home />} />
          <Route path="posts" element={<PostLayout />} >
            <Route index element={<PostList />} />
            <Route path="new" element={<PostNew />} />
            <Route path=":id/edit" element={<PostEdit />} />
            <Route path=":id" element={<PostDetail />} />
            <Route path="trash" element={<PostDelete />} />
          </Route>
        </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App