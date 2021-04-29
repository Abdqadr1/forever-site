import React, {Component} from 'react';
import '../styles/orders.css';
import Order from './order';


class Orders extends Component {
    state = { views: 0, entries: 0, filter: 1,
        orders: [],
          all: [],
          trash: []
    }

    componentDidMount() {
      console.log("calling api")
      this.callApi()
      .then(data => {
          console.log(data);
            this.setState({
                entries: data.orders.length,
                orders: data.orders,
                all: data.orders,
                trash: data.trash,
            })
        })
      .catch(err => console.log(err))
    }

    callApi = async () => {
        const response = await fetch('/api/orders');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        
        return body;
    }

    delete = (Id) => {
        const id = Number(Id);
        console.log("deleted ", id)
        var all = this.state.all;
        var trash;
        const index = all.findIndex(each => each.id === id);
        this.state.trash.unshift(all[index])
        all = this.state.all.filter(order => order.id !== id);
        this.setState({
            entries: all.length,
            all,
            orders: all,
            trash
        })

    }

    filter = (event) => {
        let val = event.target.outerText.toLowerCase();
        if(val === "all"){
            this.setState({filter: 1, orders: this.state.all});
        }

        if(val === "unread"){
            this.setState({filter: 2, orders: this.state.orders.filter(order =>  order.read !== false)});

        }
        if(val === "trash"){
            this.setState({filter: 3, orders: this.state.trash});
            
        }
    }

    render() { 
        const orders = !this.state.orders.length ? (<p className="no-orders red-text">NO ORDERS YET</p>) : (
            this.state.orders.map((order) => {
                return (
                   <Order order={order} delete={this.delete} key={order.id}/>
                )
            })
        )
        return ( 
        <div className="admins">
            <div className="header"><span>Views: {this.state.views}</span><span>Entries: {this.state.entries}</span></div>
            <div className="filter"><span onClick={this.filter} className ={this.state.filter === 1 ? "active" : "inactive"} >All</span>
                <span onClick={this.filter} className ={this.state.filter === 2 ? "active" : "inactive"}>Unread</span>

                <span onClick={this.filter} className ={this.state.filter === 3 ? "active" : "inactive"}>Trash</span></div>
            <div className="orders">
                {orders}
            </div>
        </div> 
        );
    }
}
 
export default Orders;