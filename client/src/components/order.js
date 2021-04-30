import React, {Component} from 'react';
import expand_more from '../images/expand_more.png';
import expand_less from '../images/expand_less.png';

class Order extends Component {
    state = {...this.props.order, isClosed : true}

    handleClick= () => {
        this.setState({
            isClosed: !this.state.isClosed,
        })
    }
    callApi = (id, action) => {
        if(action === "mark_read"){

            fetch("/orders/read/"+id, {
                method: 'PUT', 
                headers: {'Content-Type': 'application/json'},
                })
                .then(res=> res.json())
                .then(data=> console.log(data))
                .catch(err => console.log(err))
        }
        if(action === "delete") {
            fetch("/orders/"+id, {
            method: 'DELETE', 
            headers: {'Content-Type': 'application/json'},
            })
            .then(res=> res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
        }
    }
    toggleRead = (e) => {
        // update the json file
        this.callApi(this.state.id, "mark_read")

        this.setState({
            read: !this.state.read
        })

    }
    handleDelete = (e) => {
        this.callApi(this.state.id, "delete")
        this.props.delete(this.state.id);
    }


    render() {
        return ( 
            <div className={(this.state.read ? "order read ": "order unread ") + this.props.class}>
                <p className="info"><span className="key">NAME:</span><span className="value">{this.state.name}</span><img alt="" src={this.state.isClosed ? expand_more : expand_less} onClick={this.handleClick}/></p>
                <p className="action"><span className="action blue-text" onClick={this.toggleRead}>{this.state.read ? "Mark Unread" : "Mark read"}</span><span onClick={this.handleDelete} className="action red-text">Delete</span></p>
                <div className={this.state.isClosed ? "hidden" : "shown"}>
                    <p className="info"><span className="key">ADDRESS:</span><span className="value">{this.state.address}</span></p>
                    <p className="info"><span className="key">SELECT PACK:</span><span className="value">{this.state.pack}</span></p>
                    <p className="info"><span className="key">PHONE NUMBER:</span><span className="value">{this.state.phone}</span></p>
                    <p className="info"><span className="key">DELIVERY DATE:</span><span className="value">{this.state.date}</span></p>
                </div>
                
            </div>
         );
    }
}
 
export default Order;