import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const AddPost = () => {
  return (
    <div style= {{display: 'flex', flexDirection: 'column', justifyContent: 'center', 
    alignItems: 'center', marginTop: '20px', textAlign: 'center', background: 'blue', padding: '20px', 
    borderRadius: '10px', color: 'white'}}>
        <h1>Share a Post</h1>
        <form action="">
            <input type="file" accept= 'image/*' />
            <TextField id="outlined-basic" label="Title" variant="outlined" />
            <TextField id="outlined-basic" label="Body" variant="outlined" />
            <Button variant="contained">Share</Button>

        </form>
    </div>
  )
}

export default AddPost