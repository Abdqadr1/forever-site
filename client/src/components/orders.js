import React, {Component} from 'react';
import '../styles/orders.css';
import Order from './order';


class Orders extends Component {
    state = { views: 0, entries: 0, filter: 1,
        orders: [],
          all: [],
          trash: [],
          active: [],
          search: "",
          isFiltered: false,
          unread: 0,
          page: 1,
    }
    entriesByPage = 5

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        const text = this.state.search.toLowerCase().trim();
        if(text && text !== ""){
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
                active: result,
                filter: 0,
            })
        }
       
    }

    componentDidMount() {
      this.callApi()
      .then(data => {
          var num = data.orders.orders.filter(order => order.read === false).length;
          var orders = [...data.orders.orders];
            this.setState({
                entries: data.orders.orders.length,
                orders: orders.splice(0, this.entriesByPage),
                all: data.orders.orders,
                trash: data.trash.orders,
                views: data.trash.views,
                unread: num,
                active: data.orders.orders,
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

    trash = (Id) => {
        const id = Number(Id);
        console.log("deleted ", id)
        var all = this.state.all;
        var trash = this.state.trash;
        const index = all.findIndex(each => each.id === id);
        trash.unshift(all[index])
        all = all.filter(order => order.id !== id);
        this.setState({
            entries: all.length,
            all,
            orders: all,
            trash,
            active: all
        })
    }

    delete = (id) => {
        console.log("deleted ", id)
        var trash = this.state.trash;
        trash = trash.filter(order => order.id !== id);
        this.setState({
            trash,
            orders: trash,
            active: trash,
        })
    }

    toggleRead = (id) => {
        var all = this.state.all;
        const filter = this.state.filter;
        var number = this.state.page;
        var unread = this.state.unread;
        all = all.filter(order => {
            if(order.id === id){
                order.read = !order.read;
            }
            return true;
        })
        var orders;
        if(filter === 1){
            orders =  all;
            unread = all.filter(order =>  order.read === false).length;
        }
        if(filter === 2) {
            orders =  all.filter(order =>  order.read === false);
            unread = orders.length;
        }
        const pageNo = Math.ceil(orders.length / this.entriesByPage);
        number = number > pageNo ? number - 1: number;
        if(number === 1){
            this.setState({
                orders: orders.slice(0, this.entriesByPage),
                page: 1,
                all,
                active: orders,
                unread
            })
            return;
        }else{
            const start = this.entriesByPage * (number - 1);
            const entries = [...orders];
            const order = (start + this.entriesByPage) > entries.length ? entries.splice(start) : entries.splice(start, this.entriesByPage);
            this.setState({
                orders: order,
                page: number,
                all,
                active: orders,
                unread
            })
        }
    }
    

    restore = (id) => {
        var all = this.state.all;
        var trash = this.state.trash;
        var index = trash.findIndex(order => order.id === id);
        all.unshift(trash[index])
        trash = trash.filter(order => order.id !== id);
        this.setState({
            entries: all.length,
            all,
            orders: trash,
            trash,
            active:trash,
        })
    }

    filter = (event) => {
        let val = event.target.outerText.toLowerCase();
        if(val.includes("all") && this.state.filter !== 1){
            const orders = [...this.state.all]
            this.setState({
                filter: 1, 
                orders: orders.splice(0, this.entriesByPage),
                 active: this.state.all,
                 page: 1,
            });
        }

        if(val.includes("unread") && this.state.filter !== 2){
            const all =  this.state.all.filter(order =>  order.read === false);
            const orders = [...all]
            this.setState({
                filter: 2, 
                orders: orders.splice(0, this.entriesByPage),
                active: all,
                page: 1,
            });

        }
        if(val.includes("trash") && this.state.filter !== 3){
            const orders = [...this.state.trash];
            this.setState({
                filter: 3, 
                orders:orders.splice(0, this.entriesByPage),
                active: this.state.trash,
                page: 1,
            });
            
        }
    }

    reset = (e) => {
        var c = window.confirm("This action cannot be undone, Are you sure?");
        if(c){
            let val = e.target.outerText.toLowerCase();
            if(val.includes("views")) {
                fetch('/orders/reset/views', {
                    method: "put", 
                    headers: {'Content-Type': 'application/json'}
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    this.setState({
                        views: 0,
                    })
                    })
                .catch(err => console.log(err))
            }
            if(val.includes("entries")){
                fetch('/orders/reset/entries', {
                    method: "put", 
                    headers: {'Content-Type': 'application/json'}
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    this.setState({
                        entries: 0,
                        orders: [],
                        all: [],
                        trash: [],
                        active: []
                    })
                })
                .catch(err => console.log(err))
            }
        }
        
    }

    handlePaging = (e) => {
        const number = Number(e.target.innerText)
        if(number !== this.state.page){
            const  orders = [...this.state.active];
            if(number === 1){
                this.setState({
                    orders: orders.slice(0, this.entriesByPage),
                    page: 1
                })
                return;
            }else{
                const start = this.entriesByPage * (number - 1);
                const order = (start+this.entriesByPage) > orders.length ? orders.splice(start) : orders.splice(start, this.entriesByPage) 
                
                this.setState({
                    orders: order,
                    page: number
                })
            }
        }
    }


    render() { 
        const orders = !this.state.orders.length ? (<p className="no-orders red-text">{this.state.isFiltered? "No Order Found" : "No Orders Yet"}</p>) : (
            this.state.orders.map((order, index) => {
                    let className = index % 2 === 0 ? "classone" : "classtwo";
                return (
                   <Order order={order} delete={this.delete} trash={this.trash} key={order.id} class={className} filter={this.state.filter} toggleRead={this.toggleRead} restore={this.restore}/>
                )
            })
        )
        const pageNo = Math.ceil(this.state.active.length / this.entriesByPage);
        const pages = []
        for(var x = 1; x <= pageNo; x++){
            let active = x === this.state.page ? " active" : " inactive";
            let html = (<span className={"page" + active} key={x} onClick={this.handlePaging}>{x.toString()}</span>)
            pages.push(html);
        }
        return ( 
        <div className="admins">
            <div className="header">
            <span>Views: {this.state.views}<i onClick={this.reset}>reset views</i></span>
            <span>Entries: {this.state.entries}<i onClick={this.reset} >reset entries</i></span>
            </div>
            <div className="search-form" ><form><input type="text" name="search" placeholder="search text" onChange={this.handleChange} /><input type="submit" value="Search" onClick={this.handleSubmit}/></form></div>
            <div className="filter"><span onClick={this.filter} className ={this.state.filter === 1 ? "active" : "inactive"} >All<i>{this.state.all.length}</i></span>
                <span onClick={this.filter} className ={this.state.filter === 2 ? "active" : "inactive"}>Unread<i>{this.state.unread}</i></span>

                <span onClick={this.filter} className ={this.state.filter === 3 ? "active" : "inactive"}>Trash<i>{this.state.trash.length}</i></span></div>
            <div className="orders">
                {orders}
            </div>
            { this.state.active.length > this.entriesByPage 
            ?  (<div className="paging"><div className="pages">{pages}</div></div>)
            : "" }
        </div> 
        );
    }
}
 
export default Orders;