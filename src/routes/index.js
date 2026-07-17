import {derivativeRoutes} from "./v1/derivative.route.js";
import {matrizRoutes} from "./v1/matriz.route.js";

export const routes = [
    ...derivativeRoutes,
    ...matrizRoutes
]