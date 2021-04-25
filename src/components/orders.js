import React, {Component} from 'react';
import '../styles/orders.css';
import Order from './order';


class Orders extends Component {
    state = {
        orders: [ ]
    }

    componentDidMount() {

    }

    render() { 
        // const orders = !this.state.orders.length ? (<p className="no-orders red-text">NO ORDERS YET</p>) : (
        //     this.state.orders.map((order) => {
        //         return (
        //            <Order order={order}/>
        //         )
        //     })
        // )
        const ex = {
            id: 1,
            name: "Abolarinwa Qadr",
            address: "Inalende Ibadan Oyo state",
            pack: "2 IN 1",
            number: "090132423523",
            date: "12/09/2021"
        }
        return ( 
        <div className="admins">
            <div className="header"></div>
            <div className="orders">
                <Order order={ex}/>
            </div>
        </div> 
        );
    }
}
 
export default Orders;