const jsonServer = require('json-server')

const MPServer = jsonServer.create()
const middleware = jsonServer.defaults() // Use jsonServer.defaults() here
const PORT = 3000
const route = jsonServer.router('db.json')

MPServer.use(middleware) // Use the correct middleware
MPServer.use(route)

MPServer.listen(PORT, () => {
    console.log(`MPServer started at PORT : ${PORT} and waiting for client request!!!`);
})

