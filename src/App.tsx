import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostCard from './components/PostCard';
import { postPropTypes } from './types/types';

function App() {
  //strings
  let variable = 'hi';
  let fname:string = 'joshua';
  let lname:string; 

  //numbers
  let age = 29;
  //esplicityl define a type
  let ageWithType:number;
  ageWithType = 10

  let yearWithType:number  = 2020;


  //bolleans
  let gender:boolean;
  gender = false;

  //muilti union types
  let money: string | number;
  money = 10;
  money = '100';

  //array 
  let names = ['joshua'];
  let fruits: string[];
  let years: number[];
  years = [20,11]

  //union array
  let aninamls: (string | number)[]
  aninamls = ['joshua',11]

  //objects
  let user = {
    name:'john',
    age:22,
    isAdmin:false
  }

  user.name = 'jj'

  //efining an object
  let userObject: {
    username:string,
    age:number,
    isAdmin:boolean,
    phone?: 'string'
  }

  userObject = {
    username:'josh',
    age:10,
    isAdmin:true
  }

  //defineAny
  let any;

  let sayHi = () =>{
    console.log("hi")
  }


  //functions
  let returnString = ():string =>{
    console.log(1)
    return "12"
  }

  //function with arguments
  let multiple = (num:number) =>{
    return num + num

  } 

  console.log(multiple(2))

  //types
type sum = {
  num1: number;
  num2:number

}  

let findsum = (sum:sum) =>{
  return sum.num1 + sum.num2
}
console.log(findsum({num1:2,num2:3}))

//interfaces
interface users {
  name:string,
  age:number
}

interface user1 extends users {
  job:'string'

}

const data = [
  {id:1,tittle:'hello',body:'thi is body'},
  {id:2,tittle:'hello',body:'thi is body'},
  {id:3,tittle:'hello',body:'thi is body'},
  {id:4,tittle:'hello',body:'thi is body'},

]

const handleClick = (e: React.MouseEvent<HTMLButtonElement>)=>{
  e.preventDefault()
  console.log(77)

}

const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id:number)=>{
 // e.preventDefault()
  console.log(id)

}

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
  console.log(e.target.value)
  

}

  return (
    <div className="App">
     <input onChange={handleChange} type='text' placeholder='enter something' />
     <button onClick={handleClick}> Click</button>
     <button onClick={(e) =>handleDelete(e,2)}> Click</button>



      {data.map((post:postPropTypes)=>(
      <PostCard  tittle={post.tittle} body={post.body} />


      ))}
    </div>
  );
}

export default App;
