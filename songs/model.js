const Sequelize = require('sequelize')
const sequelize = require('../db')
const Playlist = require('../playlists/model')

const Song = sequelize.define('songs', {
  songTitle: {
    type: Sequelize.STRING,
    field: 'title',
    allowNull: false
  },
  songArtist: {
    type: Sequelize.STRING,
    field: 'artist',
    allowNull: false
  },
  songAlbum: {
    type: Sequelize.STRING,
    field: 'album'
  },
  playlistId: {
    type: Sequelize.INTEGER,
    field: 'playlist_id'
  }
}, {
  timestamps: false,
  tableName: 'songs'
})

Song.belongsTo(Playlist)

module.exports = Song