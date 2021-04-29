import express from 'express';

const app = express();
const hostname = "127.0.0.1";
const port = 8000;

app.use(console.log("in use"))

app.get('/orders', (req, red) => {
    console.log("getting orders");
})

app.post('/orders', (req, red) => {
    console.log("adding order");
})

app.put('/orders', (req, red) => {
    console.log("updating orders");
})

app.delete('/orders', (req, red) => {
    console.log("deleting orders");
})

app.listen(port, hostname, () => {
    console.log("listening");
})