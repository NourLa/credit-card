import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class App extends Component{  
render(){
return( 

<div className="card" >  

    <h1 className="card-name">CREDIT CARD</h1>
    <div className="details">
      <img className="img_puce" alt="img_puce" src={require("./puce.png")} /> 
      <div className="section">
      <div className="section1">
        <div className="card_id">  7253 3256 7895 1245</div>
        <div className="number_date">
        <div className="number">5422</div>
        <div className="date_details">
        <div className="top_label"> MONTH/YEAR</div>
      


        <div className="M_Ylabel">
        <div className="left_label">VALID THRU  </div>
      
        <div className="icon_label">> </div>
   
        <div className="date">11/50</div>
        </div></div></div> 
        <div className="CARDHOLDER"> CARDHOLDER</div>
        </div>
        <div className="section2">
         <img className="img_mastercard" alt="img_mastercard" src={require("./mastercard.jpg")} /> 
         </div>
        </div>
</div>

</div>

);
}



}
ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
