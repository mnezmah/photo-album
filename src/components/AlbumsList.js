import * as React from 'react'

export default function AlbumsList(props) {
  return (<div>
    <h1>All Albums</h1>
   {props.albums.map(album => 
    <ul key = {album.id}><li >{album.title}
      </li></ul>
    )}
    There are { props.albums.length } albums available.
  </div>)
}
