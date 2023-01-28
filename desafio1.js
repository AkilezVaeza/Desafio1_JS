class ProductManager{
    static products;
    constructor(title, description, price, img, id, stock){
        this.title = title;
        this.description = description;
        this.price = price;
        this.img = img;
        this.id = id;
        this.stock = stock;
    }

    getTitulo(){
        return this.title;
    }
    getDescripcion(){
        return this.description;
    }
    getPrecio(){
        return this.price;
    }
    getimg(){
        return this.img;
    }
    getid(){
        return this.id;
    }
    getDisponible(){
        return this.stock;
    }

    getProducts = () =>{
        return this.title;
        return this.description;
        return this.price;
        
        
    }
    
}

const primerProducto = new ProductManager("juego1", "terror", 1500, "  ", 1234, 3);
console.log(
    `El videojuego ${primerProducto.getTitulo()} es de ${primerProducto.getDescripcion()}
    tiene un precio de $ ${primerProducto.getPrecio()}
    Code: ${primerProducto.getid()}
    Disponible: ${primerProducto.getDisponible()}`
);