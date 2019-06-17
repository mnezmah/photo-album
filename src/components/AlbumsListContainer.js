import * as React from 'react'
import * as request from 'superagent'
import { connect } from 'react-redux'
import AlbumsList from './AlbumsList'
import { helloWorld, addAlbums, setAlbum } from '../actions/test'

class AlbumsListContainer extends React.Component {

  componentDidMount() {
    request('https://jsonplaceholder.typicode.com/albums')
    .then(res => this.props.setAlbum(res.body))

  }

  render() {
    if (!this.props.albums) return 'Loading...'
    return <AlbumsList albums={this.props.albums} />
  }
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  }
}
export default connect(
  mapStateToProps,
  { helloWorld, addAlbums, setAlbum } //equal to MapDispatchToProps
)(AlbumsListContainer)