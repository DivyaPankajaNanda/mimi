import axios from "axios"
import * as CONSTANTS from "./constants"
import * as HTTP_STATUS from "./http_status"
import { browser } from "$app/environment"

export const axios_instance = axios.create({
  baseURL: `${CONSTANTS.API_V1}`,
})

export const json_header : object= {
  "Content-Type" : "application/json"
}

export const formdata_header : object= {
  "Content-Type" : "multipart/form-data"
}

axios_instance.interceptors.request.use((request) => {
  let token : string | null = getToken()
  if (token) {
    request.headers.Authorization = `Bearer ${token}`
  }
  return request
})

axios_instance.interceptors.response.use(response => {
    return response;
  },
  error => {
    if (error.response.status === HTTP_STATUS.NETWORK_AUTHENTICATION_REQUIRED) {
      logout()
    }
    return Promise.reject(error);
  }
);

export const logout : Function = () => {
  if(browser)
  sessionStorage.clear()
  window.location.reload()
}

export const getUser : Function = () : object | null => {
  let user = getSessionStorage("user")
  return user != null ? JSON.parse(user!) : null
}

export const getToken : Function = () : string | null => { 
  return getSessionStorage("token") != null ? getSessionStorage("token"):``
}

export const setUser : Function = (user:string) : void => {
  setSessionStorage("user",user)
}

export const setToken : Function = (token : string) : void => {
  setSessionStorage("token",token)
}

export const setSessionStorage : Function = (key : string, value : string) : void => {
  if(browser)
  sessionStorage.setItem(key,value)
}

export const getSessionStorage : Function = (key : string) : string | null => {
  return browser ? sessionStorage.getItem(key):null
}