
import { ToastContainer } from 'react-toastify'
import './App.css'
import AddPost from './Components/AddPost'
import PostList from './Components/PostList'

function App() {
  

  return (
    <>
      <AddPost />
      <PostList />
      <ToastContainer position = 'top-right' />
    </>
  )
}

export default App
