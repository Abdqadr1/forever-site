
import {useState} from 'react';


const OrderForm = (props) => {
    const [formFields, setFormFields] = useState({
        name: "",
        address: "",
        pack: "",
        phone: "",
        date: "",
        read: false,
    })

    const handleChange = (event) => {
        setFormFields({
            ...formFields,
            [event.target.name]: event.target.value,
        })
    }

    const callApi = async () => {
        const data = JSON.stringify(formFields);
        fetch('/api/order', {
            method: "post", 
            headers: {'Content-Type': 'application/json'},
            body: data,
         }).then(response => {
             response.json()
         }).then(res => {
             props.gotoThanks();
         }).catch(err => console.log(err))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // add to the json file..rest api
        callApi()
    }

    return ( 
            <div className="form">
                <form>
                <fieldset onSubmit={handleSubmit}>
                    <legend>ORDER YOUR DESIRED PRODUCT</legend>
                    <p htmlFor="name">NAME</p>
                    <input type="text" id="name"  name="name" value={formFields.name} onChange={handleChange}/>
                    <p htmlFor="address">ADDRESS <span className="red-text">*</span></p>
                    <textarea rows="7" id="address" name="address" value={formFields.address} required onChange={handleChange}/>
                    <p>SELECT PRODUCT TYPE</p>
                    <section><input type="radio" name="pack" value="2 IN 1" id="2in1" onChange={handleChange}/><label htmlFor="2in1">2 IN 1 PACK</label></section>
                    <section><input type="radio" name="pack" value="3 IN 1" id="3in1" onChange={handleChange}/><label htmlFor="3in1">3 IN 1 PACK</label></section>
                    <p htmlFor="phone">PHONE NUMBER <span className="red-text">*</span></p>
                    <input type="text" id="phone"  name="phone" value={formFields.phone} required onChange={handleChange}/>
                    <p htmlFor="date">DELIVERY DATE</p>
                    <input type="text" id="date" name="date" value={formFields.date} onChange={handleChange}/>
                    <i>PLEASE DO NOT PLACE ORDER LATER THAN <span className="red-text">{props.date}</span>. ANY DELIVERY DATE LATER THAN THAT WILL BE IGNORED. THANK YOU FOR YOUR CO-OPERATION</i>
                    <input type="submit" value="SUBMIT" onClick={handleSubmit}/>
                </fieldset>
                   
                </form>
            </div> );
}
 
export default OrderForm;