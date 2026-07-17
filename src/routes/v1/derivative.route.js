import {derivativeController} from "../../controllers/v1/derivative.controller.js";

export const derivativeRoutes = [
    {
        method: "GET",
        path: "/api/v1/calculus/derivative",
        handler: derivativeController,
    }
]

