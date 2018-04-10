const [http, connect, serveStatic] = [require('http'), require('connect'), require('serve-static')]

const app = connect().use(serveStatic('public/'))
        http.createServer(app).listen(9000, () => {
            console.log('Listening...')
        })