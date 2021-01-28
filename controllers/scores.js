const scoresRouter = require('express').Router()
const Score = require('../models/score')

scoresRouter.get('/', async (request, response) => {
    const scores = await Score.find({})

    if (!request.query.sort || request.query.sort === 'dsc') {
        return response.json(scores.sort(x => x.score).map(score => score.toJSON()))
    }
    else if (request.query.sort === 'asc') {
        return response.json(scores.sort(x => !x.score).map(score => score.toJSON()))
    }
    return response.status(400).json({ error: { message: 'invalid query value' } })
})

scoresRouter.get('/:id', async (request, response) => {
    const score = await Score.findById(request.params.id)
    if (score) {
        response.json(score.toJSON())
    } else {
        response.status(404).end()
    }
})

scoresRouter.post('/', async (request, response) => {
    const score = new Score(request.body)
    const result = await score.save()
    response.status(201).json(result.toJSON())
})

scoresRouter.delete('/:id', async (request, response) => {
    const score = await Score.findById(request.params.id)

    if (score) {
        await Score.remove(score)
        response.status(204).end()
    } else {
        response.status(404).end()
    }
})

module.exports = scoresRouter