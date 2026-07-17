import {determinant} from "../../services/v1/matrix.sevice.js";

export function matrixController(req, res) {
    let body = "";

    req.on("data", chunk => {
        body += chunk;
    })

    req.on("end", () => {
        const parsedBody = JSON.parse(body);
        const matrix = parsedBody.matrix;
        const result = determinant(matrix);

        res.writeHead(200, { "Content-Type": "application/json" })
        return res.end(JSON.stringify({ result }))
    })
}