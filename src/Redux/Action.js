import axios from "axios"

export const GETPOSTS = 'GETPOSTS'


export const gatallposts=() => async(david) =>{
    try {
        const response = await axios("http://localhost:3000/posts")
        console.log(response)
        david({type: GETPOSTS, payload:response.data})
    } catch (error) {
        console.log(error)
        
    }
    
}