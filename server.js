
const { readJson, writeJson } = require('./jsonFunctions');
const express = require('express');

const app = express();
const port = process.env.PORT || 1888;
const ordersPath = './orders.json';
const trashPath  = './trash.json';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/api/orders', (req, res) => {
    console.log("getting orders");
    const result = {};
    readJson(ordersPath, (err, jsonString) => {
        if(err) throw Error(err);
        result.orders = JSON.parse(jsonString);
        readJson(trashPath, (err, string) => {
            if(err) throw Error(err);
            result.trash = JSON.parse(string);
            res.json(result);
        })
    })
})

app.post('/api/orders', (req, res)=> {

    readJson(ordersPath, (err, jsonString) => {
        const orders = JSON.parse(jsonString);
        if(err){
            console.log(err);
        } else {
            let id = orders.length + 1;
            let order = {id,
                ...req.body,
            }
            orders.push(order);
            writeJson(ordersPath, orders, (err) => {
                if(err){
                    throw Error(err);
                }else{
                    console.log("successfully wrote json")
                }
            })
        }
    });

    res.status(200).json({message:"okay"});
    
});


app.put('/orders/read/:id', (req, res) => {
    console.log("updating order");
    const id = NUmber(req.params.id);
    var order, index;
    readJson(ordersPath, (err, jsonString) => {
        if(err) throw Error(err);
        const orders = JSON.parse(jsonString);
        index = orders.findIndex((order) => order.id == id);
        order = orders[index];
        order.read = !order.read;
        orders[index] = order;
        writeJson(ordersPath, orders, (err)=>{
            if(err) throw Error(err)
            res.status(200).json(order);
        })

    })
})

app.delete('/orders/:id', (req, res) => {
    console.log("deleting orders");
    const id = Number(req.params.id);
    readJson(ordersPath, (err, jsonString) => {
        if(err) throw Error(err);
        var orders = JSON.parse(jsonString);
        var index = orders.findIndex(order => order.id === id);
        var order = orders[index];
        console.log(index)
        orders = orders.filter(order => order.id !== id);
        readJson(trashPath, (err, string) => {
            if(err)  throw Error(err);
            trashOrders = JSON.parse(string);
            trashOrders.unshift(order);
            writeJson(ordersPath, orders, (err)=> {
                if(err) throw Error(err);
                writeJson(trashPath, trashOrders, (err)=> {
                    if(err) throw Error(err);
                    res.status(200).json(order);
                })
            })
        })
    })
})


app.listen(port, () => console.log(`Listening on port ${port}`));