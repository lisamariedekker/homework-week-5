const { Router } = require('express')
const Song = require('./model')

const router = new Router()

router.post('/playlists/:id/songs', (req, res, next) => {
  const id = req.params.id
  const song = req.body;
  song.playlistId = id

  Song
    .create(song)
    .then(song => {
      if (!song) {
        return res.status(404).send({
          message: `Song does not exist`
        })
      }
      return res.status(201).send(song)
    })
    .catch(error => next(error))
})

router.put('/playlists/:id/songs/:songId', (req, res, next) => {
  Song
    .findById(req.params.songId)
    .then(song => {
      if (!song) {
        return res.status(404).send({
          message: `Song does not exist`
        })
      }
      return song.update(req.body).then(song => res.send(song))
    })
    .catch(error => next(error))
})

router.delete('/playlists/:id/songs/:songId', (req, res, next) => {
  Song
    .findById(req.params.songId)
    .then(song => {
      if (!song) {
        return res.status(404).send({
          message: `Song does not exist`
        })
      }
      return song.destroy()
        .then(() => res.send({
          message: `Song was deleted`
        }))
    })
    .catch(error => next(error))
})

module.exports = router