export function matrizController(req, res) {
    res.writeHead(200, { "Content-Type": "application/json" })
    return res.end(JSON.stringify({ result: "matriz function" }))
}