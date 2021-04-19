import {useState} from 'react';

const OrderForm = (props) => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // add to the json file..rest api
        props.gotoThanks();
    }

    return ( 
            <div className="form">
                <form>
                <fieldset onSubmit={handleSubmit}>
                    <legend>ORDER YOUR DESIRED PRODUCT</legend>
                    <p htmlFor="name">NAME</p>
                    <input type="text" id="name"  value={formFields.name} onChange={handleChange}/>
                    <p htmlFor="address">ADDRESS</p>
                    <textarea rows="7" cols="50" id="address" value={formFields.address} required onChange={handleChange}/>
                    <p>SELECT PRODUCT TYPE</p>
                    <input type="radio" name="pack" value="2 IN 1" id="2in1"/><label htmlFor="2in1">2 IN 1 PACK</label>
                    <input type="radio" name="pack" value="3 IN 1" id="3in1"/><label htmlFor="3in1">3 IN 1 PACK</label>
                    <p htmlFor="number">PHONE NUMBER</p>
                    <input type="tel" id="number"  value={formFields.number} required onChange={handleChange}/>
                    <p htmlFor="date">DELIVERY DATE</p>
                    <input type="text" id="date" value={formFields.date} onChange={handleChange}/>
                    <input type="submit" value="SUBMIT" onClick={handleSubmit}/>
                </fieldset>
                   
                </form>
            </div> );
}
 
export default OrderForm;