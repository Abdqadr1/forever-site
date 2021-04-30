import React, {Component} from 'react';
import '../styles/orders.css';
import Order from './order';


class Orders extends Component {
    state = { views: 0, entries: 0, filter: 1,
        orders: [],
          all: [],
          trash: [],
          search: "",
          isFiltered: false,
          unread: 0,
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (ev)=> {
        ev.preventDefault();
        const text = this.state.search.toLowerCase().trim();
        if(text && text !== ""){
            console.log(text)
            const result = this.state.orders.filter(order => {
                if(order.name.toLowerCase().includes(text)) return true;
                if(order.address.toLowerCase().includes(text)) return true;
                if(order.phone.toLowerCase().includes(text)) return true;
                if(order.date.toLowerCase().includes(text)) return true;
                return false;
            }).concat(
                this.state.trash.filter(order => {
                    if(order.name.toLowerCase().includes(text)) return true;
                    if(order.address.toLowerCase().includes(text)) return true;
                    if(order.phone.toLowerCase().includes(text)) return true;
                    if(order.date.toLowerCase().includes(text)) return true;
                    return false;
                })
            )
            this.setState({
                isFiltered: true,
                orders: result, 
                filter: 0,
            })
        }
       
    }

    componentDidMount() {
      console.log("calling api")
      this.callApi()
      .then(data => {
          console.log(data);
          var num = data.orders.filter(order => order.read === true).length
            this.setState({
                entries: data.orders.length,
                orders: data.orders,
                all: data.orders,
                trash: data.trash,
                unread: num,
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
        if(val.includes("all") && this.state.filter !== 1){
            this.setState({filter: 1, orders: this.state.all});
        }

        if(val.includes("unread") && this.state.filter !== 2){
            this.setState({filter: 2, orders: this.state.all.filter(order =>  order.read !== false)});

        }
        if(val.includes("trash") && this.state.filter !== 3){
            this.setState({filter: 3, orders: this.state.trash});
            
        }
    }

    render() { 
        const orders = !this.state.orders.length ? (<p className="no-orders red-text">{this.state.isFiltered? "No Order Found" : "No Orders Yet"}</p>) : (
            this.state.orders.map((order, index) => {
                    let className = index % 2 === 0 ? "classone" : "classtwo";
                return (
                   <Order order={order} delete={this.delete} key={order.id} class={className}/>
                )
            })
        )
        return ( 
        <div className="admins">
            <div className="header"><span>Views: {this.state.views}</span><span>Entries: {this.state.entries}</span></div>
            <div className="search-form" ><form><input type="text" name="search" placeholder="search text" onChange={this.handleChange} /><input type="submit" value="Search" onClick={this.handleSubmit}/></form></div>
            <div className="filter"><span onClick={this.filter} className ={this.state.filter === 1 ? "active" : "inactive"} >All<i>{this.state.all.length}</i></span>
                <span onClick={this.filter} className ={this.state.filter === 2 ? "active" : "inactive"}>Unread<i>{this.state.unread}</i></span>

                <span onClick={this.filter} className ={this.state.filter === 3 ? "active" : "inactive"}>Trash<i>{this.state.trash.length}</i></span></div>
            <div className="orders">
                {orders}
            </div>
        </div> 
        );
    }
}
 
export default Orders;