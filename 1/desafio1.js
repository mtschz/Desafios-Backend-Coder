class ProductManager {
    constructor() {
        this.products = [];
    }

    generateNewID() {
        let id;
        do {
            id = Math.floor(Math.random() * 1000);
        } while (this.products.some(product => product.code === id));
        return id;
    }

    addProduct(title, description, price, thumbnail, stock) {
        let newId = this.generateNewID();
        const newProduct = {
            title,
            description,
            price,
            thumbnail,
            code: newId,
            stock
        };
        if (!title || !description || !price || !thumbnail || !stock) {
            console.log("Todos los campos son obligatorios");
        } else {
            this.products.push(newProduct);
        }
    }

    getProductById(id) {
        let foundProduct = this.products.find((product) => product.code === id);
        if (!foundProduct) {
            console.log("Not found");
        } else {
            console.log(`El producto que coincide con su búsqueda es: ${foundProduct}`);
        }
    }

    getProducts() {
        console.log(this.products);
    }
}

