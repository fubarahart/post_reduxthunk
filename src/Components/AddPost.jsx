import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';

const AddPost = () => {
  const [image, setImage] =  useState([])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')  
 
  const handleShare = async(e)=>{
    e.preventDefault();
    try {
      console.log(image)
      // Uploading image to Cloudinary
      // Make sure to install axios using `npm install axios`
      if(image) {
        const obj =  new FormData();
        obj.append ("file", image);
        obj.append("upload_preset", "Fubara");
        //obj={file:image, upload_preset:"Fubara"}; (Another way to create FormData object)
        const response = await axios.post("https://api.cloudinary.com/v1_1/dcnuxywya/image/upload", obj)
        console.log(response);
      }
    } catch (error) {
      console.log(error)
      
    }
    
  }



  return (
    <div style= {{display: 'flex', flexDirection: 'column', justifyContent: 'center', 
    alignItems: 'center', marginTop: '20px', textAlign: 'center', background: 'blue', padding: '20px', 
    borderRadius: '10px', color: 'white'}}>
        <h1>Share a Post</h1>
        <form action="">
            <input type="file" accept= 'image/*' onChange={(e) => setImage(e.target.files[0])} />
            <TextField onChange={(e) => setTitle(e.target.value)} id="outlined-basic" label="Title" variant="outlined" />
            <TextField onChange={(e) => setBody(e.target.value)} id="outlined-basic" label="Body" variant="outlined" />
            <Button onClick={handleShare} variant="contained">Share</Button>

        </form>
    </div>
  )
}

export default AddPost;