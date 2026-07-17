import {derivativeController} from "../../controllers/v1/derivative.controller.js";

export const matrizRoutes = [
    {
        method: "GET",
        path: "/api/v1/calculus/derivative",
        handler: derivativeController,
    }
]