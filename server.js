
const { readJson, writeJson } = require('./jsonFunctions');
const express = require('express');

const app = express();
const port = process.env.PORT || 1888;
const ordersPath = './orders.json';
const trashPath  = './trash.json';
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// 
app.use(express.static(path.resolve(__dirname, 'client/build')));

app.get('/api/orders', (req, res) => {
    console.log("getting orders");
    const result = {};
    readJson(ordersPath, (err, jsonString) => {
        if(err) {
            throw Error(err);
        } else {
            result.orders = JSON.parse(jsonString);
            readJson(trashPath, (err, string) => {
                if(err) throw Error(err);
                result.trash = JSON.parse(string);
                res.status(200).json(result);
            })
        }        
    })
});

app.post('/api/order', (req, res)=> {

    readJson(ordersPath, (err, jsonString) => {
        const ord = JSON.parse(jsonString);
        const num = ord.number;
        const orders = ord.orders;
        if(err){
            throw Error(err);
        } else {
            let id = num + 1;
            let order = {id,
                ...req.body,
            }
            orders.push(order);
            ord.orders = orders;
            ord.number = num + 1;
            writeJson(ordersPath, ord, (err) => {
                if(err) {
                    throw Error(err);
                } else {
                    res.status(200).json({message: "order posted successfully"});
                    console.log(res.headersSent);  
                }
               
            })
        }
    });
});


app.put('/orders/read/:id', (req, res) => {
    console.log("updating order");
    const id = Number(req.params.id);
    var order, index;
    readJson(ordersPath, (err, jsonString) => {
        if(err) {
            throw Error(err);
        }else {
            const ord = JSON.parse(jsonString);
            const orders = ord.orders;
            index = orders.findIndex((order) => order.id == id);
            order = orders[index];
            order.read = !order.read;
            orders[index] = order;
            ord.orders = orders;
            writeJson(ordersPath, ord, (err)=>{
                if(err) {
                    throw Error(err)
                }   else {
                    res.status(200).json(order);
                }
            })
        }
        
    })
})

app.delete('/orders/:id', (req, res) => {
    console.log("deleting orders");
    const id = Number(req.params.id);
    readJson(ordersPath, (err, jsonString) => {
        if(err) {
            throw Error(err);
        }else {
            var ord = JSON.parse(jsonString);
            var num = ord.number;
            var orders = ord.orders;
            var index = orders.findIndex(order => order.id === id);
            var order = orders[index];
            console.log(index)
            orders = orders.filter(order => order.id !== id);
            ord.number = num + 1;
            ord.orders = orders;
            readJson(trashPath, (err, string) => {
                if(err)  {
                    throw Error(err);
                } else {
                    const trash = JSON.parse(string)
                    const trashOrders = trash.orders;
                    trashOrders.unshift(order);
                    trash.orders = trashOrders;
                    writeJson(ordersPath, ord, (err)=> {
                        if(err) {
                            throw Error(err);
                        } else {
                            writeJson(trashPath, trash, (err)=> {
                                if(err) {
                                    throw Error(err);
                                } else {
                                    res.status(200).json(order);
                                }
                            })
                        }
                        
                    })
                }
                
            })
        }
    })
})

app.put('/orders/views', (req, res) => {
    console.log("updating views");
    readJson(trashPath, (err, data) => {
        if(err) {
            throw Error(err);
        } else {
            const trash = JSON.parse(data);
            trash.views = trash.views + 1,
            writeJson(trashPath, trash, (err) => {
                if(err) {
                    res.sendStatus(500);
                    throw Error(err); 
                } else {
                    res.status(200).json({message: "views updated"});
                }
            })
        }
        
    })

})

app.delete('/orders/restore/:id', (req, res)=> {
    const id = Number(req.params.id);
    readJson(trashPath, (err, data) => {
        if(err) throw Error(err);
        const trash = JSON.parse(data);
        var trashOrders = trash.orders;
        const index = trashOrders.findIndex(order =>  order.id === id);
        const order = trashOrders[index];
        trashOrders= trashOrders.filter(order => order.id !== id);
        trash.orders = trashOrders;
        readJson(ordersPath, (err, data) => {
            if(err) throw Error(err);
            const ord = JSON.parse(data);
            var orders = ord.orders;
            var num = ord.number;
            orders.unshift(order);
            ord.number = num + 1;
            ord.orders = orders;
            writeJson(trashPath, trash, (err)=> {
                if(err) throw Error(err);
                writeJson(ordersPath, ord, (err) => {
                    if(err) throw Error(err);
                    res.status(200).json(order);
                })
            })
        })
    })
})

app.delete('/orders/delete/:id', (req, res) => {
    const id = Number(req.params.id);
    readJson(trashPath, (err, data)=> {
        if(err) throw Error(err);
        const trash = JSON.parse(data);
        var  orders = trash.orders;
        orders = orders.filter(order => order.id !== id);
        trash.orders = orders;
        writeJson(trashPath, trash, (err)=> {
            if(err) throw Error(err);
            res.status(200).json(id);
        })
    })
})

app.put('/orders/reset/entries', (_req, res) => {
    const orders = {
        number: 0,
        orders: []
    }
    writeJson(ordersPath, orders, (err)=> {
        if(err) throw Error(err);
        readJson(trashPath, (err, string)=> {
            if(err) throw Error(err);
            var trash = JSON.parse(string);
            trash.orders = [];
            writeJson(trashPath, trash, (err)=>{
                if(err) throw Error(err);
                res.status(200).json({message: "Entries has been reset"});
            })
        })
    })
})

app.put('/orders/reset/views', (_req, res) => {
    readJson(trashPath, (err, data) => {
        if(err) throw Error(err);
        const trash = JSON.parse(data);
        trash.views = 0;
        writeJson(trashPath, trash, (err)=> {
            if(err) throw Error(err);
            res.status(200).json({message: "Views has been reset"});
        })
    })
    
})

// all other requests not handled will return the react app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));