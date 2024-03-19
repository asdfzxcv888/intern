import React,{useState} from 'react'
import './payment.css'


const Payment = () => {
  const [pay,setpay]=useState(false)
  
  return (


    <>
{  pay &&  (<div className='pay-success'><img src='https://zeuxinnovation.com/wp-content/uploads/2023/04/maximising-user-satisfaction-1.jpg'></img><p>payment successful</p></div>
)}

    <div class="container">
    <h1 style={{textAlign:'center'}}>Payment Details</h1>
    <form id="payment-form">
      <div class="form-group">
        <label for="card-number">Card Number:</label>
        <input type="text" id="1" name="card-number" placeholder="Enter card number"/>
      </div>
      <div class="form-group">
        <label for="expiry">Expiry Date:</label>
        <input type="text" id="2" name="expiry" placeholder="MM/YY"/>
      </div>
      <div class="form-group">
        <label for="cvv">CVV:</label>
        <input type="text" id="3" name="cvv" placeholder="Enter CVV"/>
      </div>
      <div class="form-group">
        <label for="name">Cardholder Name:</label>
        <input type="text" id="4" name="name" placeholder="Enter cardholder name"/>
      </div>
      <div class="form-group">
        <button type="button" onClick={()=>setpay(true)}>Pay Now</button>
        <button type="button" class="paypal">Pay with PayPal</button>
        <button type="button" class="prepayment">Prepayment</button>
      </div>
    </form>
  </div>
    </>

  )
}

export default Payment