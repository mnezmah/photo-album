export const NEW_HELLO_WORLD = 'NEW_HELLO_WORLD'
export const ADD_ALBUM = 'ADD_ALBUM'
export const SET_ALBUM = 'SET_ALBUM'

export function helloWorld(firstName, lastName) {
  return {
    type: NEW_HELLO_WORLD,
    payload: {
      firstName,
      lastName
    }
  }
}

export function addAlbums (id, title) {
  return {
    type: ADD_ALBUM,
    payload: {
      id,
      title 
    }
  }
}

export function setAlbum (albums) {
  return {
    type: SET_ALBUM,
    payload: albums
    }
  }
