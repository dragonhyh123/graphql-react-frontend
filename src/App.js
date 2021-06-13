import logo from './logo.svg';
import './App.css';
import { useLazyQuery,gql } from '@apollo/client';
import {useState} from 'react';

function App() {
  const GET_USER = gql`
    query($Id:ID!){
      user(id:$Id){
        name
        age
        available
        money
        gender
        birthday
      }
  
      post(id:$Id){
        title
        content
        user{
          name
    	    age
    	    available
    	    money
    	    gender
    	    birthday
        }
      }
    }
  `;

  const [getData] = useLazyQuery(GET_USER,{onCompleted:(result)=>{
    console.log(result);
  }});

  let[number,setNumber] = useState(1);

  return (
    <div className="App">
      <button style={{marginTop:600}} onClick={(oEvent)=>{
        getData({variables:{Id:number}});
        setNumber(++number);
      }}>Click me</button>
    </div>
  );
}

export default App;
