const express = require('express')
const app = express();
const fs = require('fs')


let products = [
    { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
    { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
    { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
    { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
    { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
];

// error handling middleware

app.use(express.json())

// Middleware 1: Logging middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    fs.writeFile('./LoggindInfo.txt', `${new Date().toISOString()}] ${req.method} ${req.url}`, (err) => {
        if (err) {
            console.log('Error :', err);
        }
        else {
            console.log('File Created successfully');
        }
    })
    next();
});

app.get('/test', (req, res) => {
    res.send(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
})

app.get('/products', (req, res) => {
    res.send(products)
})

app.get('/products/:id', (req, res) => {
    let productFilter = products.filter((item) => {
        return item.id == req.params.id;
    })
    res.send(productFilter);
})

app.get('/products/search', (req, res) => {
    if (req.query.q) {
        let filterProducts = products.filter((item) => {
            return item.name == req.query.q;
        })
        res.send(filterProducts)
    }
    if (req.query.minPrice) {
        let filterProducts = products.filter((item) => {
            return item.name == req.query.minPrice;
        })
        res.send(filterProducts)
    }
    if (req.query.maxPrice) {
        let filterProducts = products.filter((item) => {
            return item.name == req.query.maxPrice;
        })
        res.send(filterProducts)
    }
    if (!req.query.q && !req.query.minPrice && !req.query.maxPrice) {
        res.send(products);
    }
})

app.post('/products', (req, res) => {
    if (req.body) {
        let obj = {
            id: products.length + 1,
            name: req.query.name,
            price: req.query.price
        }
        products.push(obj);
        res.send('product created');
        res.send(products)
    }
    else{
        res.send('No data sent !!!!')
    }

})

app.delete('/products/:id', (req, res) => {
    products.splice(req.params.id, 1);
    res.send(products)
})



app.listen(5050)