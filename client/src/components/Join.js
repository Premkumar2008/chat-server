
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Join = () => {
    const [customername, setName] = useState('');
    const [mobilenumber, setMobile] = useState('');
    const [itemsordered, setOrders] = useState('');
   
    return(
   <div className="product-entryform">
   <div className="form-title">Please Fill the below Details</div>
   <div className="form-box">
   <div className="label"><label>Enter Name</label></div>
<div >
   <input placeholder="Customer Name" className="form-input" type="text" onChange={(e) => setName(e.target.value)} /></div>
   <div className="label"><label>Enter Mobile Number</label></div>
   <div >
   
    <input placeholder="Mobile Number" className="form-input" type="text" maxLength="10" onChange={(e) => setMobile(e.target.value)} /></div>
<div>
<div className="label"><label>Type Your Items to be Order</label></div>
<div ><textarea className="form-input" placeholder="List your Items here to be ordered" row="8" onChange={(e) => setOrders(e.target.value)}>
    
    </textarea></div>

</div>
<div>
<div className="label"><label>Expected Delivery Date</label></div>
<input placeholder="Date" className="form-input" type="date" />
</div>
   <Link onClick={event => (!customername || !mobilenumber) ? event.preventDefault() : null } to={`/room?customername=${customername}&mobilenumber=${mobilenumber}&itemsordered=${itemsordered}`}>
   <button className="submit-button" type="submit">Submit</button>
   </Link>
   </div>
   </div>
)
}
export default Join;