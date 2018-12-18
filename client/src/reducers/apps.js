import axios from "axios"

const APPS = "APPS"
const ADD_APP = "ADD_APP"
const UPDATE_APP = "UPDATE_APP"
const DELETE_APP = "DELETE_APP"

export const getApps = (cb) => {
  return (dispatch) => {
    axios.get('/api/apps')
    .then( res => dispatch({ type: APPS, apps: res.data }))
    .then( cb() )
  }
}

export const addApp = (app) => {
  return (dispatch) => {
    axios.post("/api/apps", {app, })
    .then( res => dispatch({ type: ADD_APP, app: res.data }))
  }
}

export const updateApp = (app) => {
  return (dispatch) => {
    axios.put(`/api/apps/${app.id}`, { app, })
    .then( res => dispatch({type: UPDATE_APP, app: res.data }))
  }
}

export const deleteApp = (id) => {
  return (dispatch) => {
    axios.delete(`/api/apps/${id}`)
      .then( res => dispatch({ type: DELETE_APP, id, }))
  }
}

export default (store = [], action) => {
    switch(action.type) {
      case APPS:
        return action.apps;
      case ADD_APP:
        return [action.app, ...store]
      case UPDATE_APP:
        return store.map( app => {
          if (app.id === action.app.id)
            return action.app
          return app
        })
      case DELETE_APP:
        return store.filter( a => a.id !== action.id )
      default:
        return store 
  }
}