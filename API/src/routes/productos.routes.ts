import {Router} from 'express'
import * as productoCtrl from './productos.controller'

const router = Router()

router.get('/productos', productoCtrl.getProductos)

router.get('/productos/:id',productoCtrl.getProducto)

router.post('/productos', productoCtrl.addProductos)

router.delete('/productos/:id',productoCtrl.deleteProductos)

router.put('/productos/:id', productoCtrl.updateProductos)

export default router