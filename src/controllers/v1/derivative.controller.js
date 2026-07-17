export function derivativeController(req, res) {
    res.writeHead(200, { "Content-Type": "application/json" })
    return res.end(JSON.stringify({ result: "derivative function" }))
}