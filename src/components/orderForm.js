import {useState} from 'react';

const OrderForm = () => {
    const [formFields, setFormFields] = useState({
        name: "",
        address: "",
        pack: "",
        number: "",
        date: ""
    })

    const handleChange = (event) => {
        setFormFields({
            ...formFields,
            [event.target.id]: event.target.value,
        })
    }

    return ( 
            <div className="form">
                <form>
                    <label for="name">NAME</label>
                    <input type="text" id="name"  value={formFields.name} onChange={handleChange}/>
                    <label for="address">ADDRESS</label>
                    <input type="text" id="address" value={formFields.address} required onChange={handleChange}/>
                    <label for="number">PHONE NUMBER</label>
                    <input type="phone" id="number"  value={formFields.number} required onChange={handleChange}/>
                    <label for="date">DELIVERY DATE</label>
                    <input type="text" id="date" value={formFields.date} onChange={handleChange}/>
                </form>
            </div> );
}
 
export default OrderForm;