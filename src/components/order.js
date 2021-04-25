import React, {Component} from 'react';

class Order extends Component {
    state = {...this.props.order}
    render() { 
        return ( 
            <div className="order" key={this.state.id}>
                <p><span>NAME:</span>          {this.state.name}</p>
                <p><span>ADDRESS:</span>      {this.state.address}</p>
                <p><span>SELECT PACK:</span>  {this.state.pack}</p>
                <p><span>PHONE NUMBER:</span> {this.state.number}</p>
                <p><span>DELIVERY DATE:</span>         {this.state.date}</p>
            </div>
         );
    }
}
 
export default Order;