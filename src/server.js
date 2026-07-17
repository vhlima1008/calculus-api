import http from "node:http"
import { routes } from "./routes/index.js";


const server = http.createServer((req, res) => {
    const { pathname } = new URL(req.url, `http://${req.headers.host}`)

    const route = routes.find((route) => {
        return route.method === req.method && route.path === pathname
    })

    if (route) {
        return route.handler(req, res)
    }

    res.writeHead(404, { "Content-Type": "application/json" })
    return res.end(JSON.stringify({error: "Route Not Found"}))
})

server.listen(8080, () => {
    console.log("Server running at http://localhost:8080")
})
