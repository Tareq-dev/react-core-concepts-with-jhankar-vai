import React, {useState, useEffect} from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const products =  [{name:'Mobile', price:'$69.33'},
                    {name:'tv', price:'$679.33'}, ]               
const friends = ['Jidan','Morshed','Rana','Arfan','tonoy']

    return (
      <div className="App">
        <header className="App-header">
        <Users />
        <Counter />
        {
          friends.map(friends => <li>{friends}</li>)
        }
        {
          products.map(products =><li>{products.name}</li>)
        }
        {
          products.map( products=><products products={products}></products>)
        }
          <Products products={products[0]} />
          <Products products={products[1]} />
          <Person name="Messi" teamName="PSG"/>
          <Person name="Neymar" teamName="PSG"/>
          <Person name="Tareq" teamName="Barca"/>  
        </header>
      </div>
    );
  }
    function Counter(){
    const [count, setCount] = useState(0);
    const handleIncrease = () =>{setCount(count + 1); };
    
    return (
    <div>
    <h1>Count : {count} </h1>
    <button onClick={() => setCount(count+1)}>+</button>
    <button onClick={() => setCount(count-1)}>-</button>
    </div>
  )
}

  function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  }, [])
  return(
    <div>
    <h2>Dynam Users:{users.length}</h2>
    <ul>
    {
      users.map(user => <li>{user.website}</li>)
    }
    </ul>
    </div>
  )
}
            
function Products(props){
  const productsStyle={
    border:'2px solid red',
    borderRadius: '5px',
    backgroundColor: 'lightBlue',
    height: '200px',
    width :'200px',
    float : 'left'
  }
const {name, price} = props.products;
return (
<div style={productsStyle}>
<h2> {name}</h2>
<h3>{price}</h3>
<button> Buy Now</button>
</div>
)
}
  function Person(props) {
  const personStyle ={
    border:'5px solid yellow',
    margin:'15px', 
    padding:'10px'
  }
  return (
    <div style={personStyle} >
    <h2>Player :{props.name}</h2>
    <p>Team :{props.teamName}</p>
    </div>
  )
}

export default App;
