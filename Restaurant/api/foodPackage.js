import axios from 'axios'

const baseUrl = "http://localhost:4000"

export const foodProduct = async () => {
    try{
        return await axios.get(`${baseUrl}/foods`,{})
    }catch(err){
        throw err
    }
}

export const foodDetail = async (foodId) =>{
    try{
        return await axios.get(`${baseUrl}/food/${foodId}`)
    }catch(err){
        throw err
    }
}