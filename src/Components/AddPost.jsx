import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const AddPost = () => {
  const [image, setImage] =  useState([])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')  
  return (
    <div style= {{display: 'flex', flexDirection: 'column', justifyContent: 'center', 
    alignItems: 'center', marginTop: '20px', textAlign: 'center', background: 'blue', padding: '20px', 
    borderRadius: '10px', color: 'white'}}>
        <h1>Share a Post</h1>
        <form action="">
            <input type="file" multiple accept= 'image/*' onChange={(e) => setImage(e.target.files[0])} />
            <TextField onChange={(e) => setTitle(e.target.value)} id="outlined-basic" label="Title" variant="outlined" />
            <TextField onChange={(e) => setBody(e.target.value)} id="outlined-basic" label="Body" variant="outlined" />
            <Button variant="contained">Share</Button>

        </form>
    </div>
  )
}

export default AddPost                               