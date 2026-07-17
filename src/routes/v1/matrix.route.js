import {matrixController} from "../../controllers/v1/matrix.controller.js";

export const matrixRoutes = [
    {
        method: "POST",
        path: "/api/v1/calculus/matrix/determinant",
        handler: matrixController,
    }
]