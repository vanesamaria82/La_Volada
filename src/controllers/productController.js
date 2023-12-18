//Creamos el objeto literal correspondiente al recurso Producto-Capa controlador 
const productos = [
    {
        id: 1,
        nombre: "Golden",
        img: "golden.png",
        descripcion: "Tiene un agradable color dorado, amargor liviano, carbonatación media-alta, un suave sabor a cereal hace el soporte dulce para la combinación de lúpulos alemanes y americanos que entregan frescas notas cítricas y florales, cuerpo medio y agradable espuma. Fácil de hacer y de beber.",
        precio: 1000
    },
    {
        id: 2,
        nombre: "Honey",
        img: "honey.png",
        descripcion: "De color dorado, cuerpo medio, con un intenso aroma y sabor a miel. Se caracteriza por ser muy fresca, agradable, de gusto dulce. Ideal para calmar la sed o acompañar ensaladas, platos de sabores neutros o afrutados.",
        precio: 2000
    },
    {
        id: 3,
        nombre: "IPA",
        img: "ipa.png",
        descripcion: "Es una cerveza elaborada a base de maltas pálidas y un toque de maltas caramelo, con fuerte sabor y aroma a lúpulos americanos, espuma blanca persistente, de cuerpo medio y con gran carácter. Ideal para maridar con quesos fuertes y picante.",
        precio: 3000
    },
    {
        id: 4,
        nombre: "Amber Ale",
        img: "amber.png",
        descripcion: "Conocidas simplemente como Red Ales en algunas regiones. Con cuerpo, rica en caramelos y un balance equilibrado entre la malta y los lúpulos. Ideal para acompañar carnes, quesos y hamburguesas.",
        precio: 4000
    },
    {
        id: 5,
        nombre: "Stout",
        img: "stout.png",
        descripcion: "Es una cerveza que se potencia en una guarda prolongada, tiene toques a ahumado, café, chocolate, cacao, frutos oscuros, alcohol y un final relativamente seco, cuerpo sedoso y espeso y un amargor muy bien integrado, el peso pesado de las cervezas negras.",
        precio: 5000
    }
]



const controller = {
    index: function(req, res) {
        res.render('products/productos', {productos}) //Pase el objeto productos para recibir la informacion en el ejs
    },

    // Cree el metodo para mostrar el detalle del producto
    detalleProducto: function(req, res) {
        // Recupere el ID que se pasa por URL
        let idProducto = parseInt(req.params.id);

        // Segun el ID de la URL busco el producto
        let productoIndex = productos.findIndex(producto => producto.id === idProducto);//retorna el indice del objeto que cumple con la condicion

        // Renderizo la vista y ademas paso la informacion del producto
        res.render('products/detalleProducto', {producto: productos[productoIndex]});
        
    },
    crear: function(req, res) {
        // Renderizo la vista crearProducto
        res.render('products/crearProducto');
    },
    editar: function(req, res) {
        // Renderizo la vista editarProducto
        res.render('products/editarProducto');
    },
    carritoCompras: function(req, res) {
        res.render('products/carrito-de-compras')
    }
}

//Exportamos controller para requerirlo en productRouter.js
module.exports = controller;