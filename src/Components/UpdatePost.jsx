import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { editPost } from '../Redux/Action'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { toast } from 'react-toastify'

const UpdatePost = ({post}) => {
    const [image, setImage] =  useState([])
      const [title, setTitle] = useState('')
      const [body, setBody] = useState('') 
      const dispatch = useDispatch()

      const [show, setShow] = useState(false)
      const handleShow = () => setShow(!show)
const handleEdit = async(e) => {
  e.preventDefault()
  console.log(image.length)

  if (image.length===undefined){
    const obj = new FormData()
    obj.append("file", image)
    obj.append("upload_preset", "Fubara")
    const response = await axios.post("https://api.cloudinary.com/v1_1/dcnuxywya/image/upload", obj)
    dispatch(editPost(post.id, {
      ...post,
      title:title,
      body:body,
      image:response.data.secure_url
       }))
       if (response.status === 202) {
         toast.success("Post updated successfully!")
       }

  }
  else {
    dispatch(editPost(post.id, {
      ...post,
      title:title,
      body:body,
    }))
    toast.success("Post updated successfully!")
  }
  setShow(false)
}     

  return (
    <>
    <Button onClick={handleShow}>Update</Button>
      <div className='modal' style={{ display: show ? 'block' : 'none' }}>
        <form action="">
            <input type="file" accept= 'image/*' onChange={(e) => setImage(e.target.files[0])} />
            <TextField defaultValue = {post.title} onChange={(e) => setTitle(e.target.value)} id="outlined-basic" label="Title" variant="outlined" />
            <TextField defaultValue = {post.body} onChange={(e) => setBody(e.target.value)} id="outlined-basic" label="Body" variant="outlined" />
            <Button onClick={handleEdit} variant="contained">Update</Button>
        </form>
      </div>

    </>
  )
}

export default UpdatePost