import axios from "axios"

export const GETPOSTS = 'GETPOSTS'
export const REMOVEPOST = 'REMOVEPOST'


export const gatallposts=() => async(david) =>{
    try {
        const response = await axios("http://localhost:3000/posts")
        console.log(response)
        david({type: GETPOSTS, payload:response.data})
    } catch (error) {
        console.log(error)
        
    }
    
}

export const deletepost = (id) => async (dispatch) => {
    try {
        const response = await axios.delete(`http://localhost:3000/posts/${id}`)
        console.log(response)
        //dispatch({ type: REMOVEPOST, payload: id })
        dispatch(getallposts())
    } catch (error) {
        console.log("Error when deleting post:", error)
    }
}

export const editPost = (id, data) => async (dispatch) => {
    try {
        const response = await axios.put (`http://localhost:3000/posts/${id}`, data)
        console.log(response)
        dispatch(getallposts())
    } catch (error) {
        console.log("Error when editing post:", error)
    }
}