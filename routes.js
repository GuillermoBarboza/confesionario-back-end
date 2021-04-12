const controllers = require('./controllers/controllers')

const routes = (app) => {
    app.get('/', controllers.getAllConfession),
    app.get('/:id', controllers.getConfession),
    app.get('/comentarios', controllers.getConfessionComments),
    app.post('/confesar', controllers.postConfession),
    app.post('/comentar', controllers.postComment),
    app.post('/responder', controllers.postResponse),
    app.post('/', (req, res) => { res.json('ok')})
} 

module.exports = routes; 