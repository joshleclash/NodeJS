import { Router } from 'express';
import {getProductos,createProductos,modificarProductos,deleteProductos} from '../model/Productos';

const productosRoute = new Router();


productosRoute.get('',getProductos);
productosRoute.post('/createProductos',createProductos);
productosRoute.post('/modificarProductos',modificarProductos);
productosRoute.post('/deleteProductos',deleteProductos);

module.exports = productosRoute;


