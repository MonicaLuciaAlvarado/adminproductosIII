const ProductoController = require("../controllers/producto.controller");

module.exports = (app) =>{
    app.post('/api/losproductos/', ProductoController.crear_producto);

    app.get("/api/losproductos/", ProductoController.ver_todos);

    app.get("/api/elproducto/:id", ProductoController.ver_uno);

    app.put("/api/updateproducto/:id", ProductoController.update_producto);

    app.delete("/api/losproductos/:id", ProductoController.borrar_producto);

}