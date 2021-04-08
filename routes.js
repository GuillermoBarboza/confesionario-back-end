const controllers = require('./controllers/controllers')

const routes = (app) => {
    app.get('/confesiones', controllers.getAllConfession),
    app.get('/confesion', controllers.getConfession),
    app.get('/comentarios', controllers.getConfessionComments),
    app.get('/confesar', controllers.postConfession),
    app.get('/comentar', controllers.postComment),
    app.get('/responder', controllers.postResponse)
} 

module.exports = routes; 