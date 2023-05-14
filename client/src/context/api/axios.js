import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL


export const apiGet = (path)=>{
  const config = {
    headers:{
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  }

  return axios.get(`${baseUrl}${path}`, config)
}


export const apiPost = (path, data)=>{
    const config = {
      headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }
  
    return axios.post(`${baseUrl}${path}`, data, config)
  }


  export const apiPut = (path, data)=>{
    const config = {
      headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }
  
    return axios.put(`${baseUrl}${path}`, data, config)
  }

  export const apiPatch = (path, data)=>{
    const config = {
      headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }
  
    return axios.patch(`${baseUrl}${path}`, data, config)
  }

  export const apiDelete = (path, data)=>{
    const config = {
      headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }
  
    return axios.delete(`${baseUrl}${path}`, data, config)
  }

