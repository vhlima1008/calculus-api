import {derivativeRoutes} from "./v1/derivative.route.js";
import {matrixRoutes} from "./v1/matrix.route.js";

export const routes = [
    ...derivativeRoutes,
    ...matrixRoutes
]