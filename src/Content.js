import React, { useState } from 'react';
import Bloglist from './bloglist';

const Content = (props) => {
    // const body=['title1', 'title2']
    // const author='Arthur'
    const  {data,age} = props;
//     const data2=[
//     {
//         title:'blog 1',
//         author:'Arthur'
//     },{
//         title:'blog 2',
//         author:'Arjun'

//     },
//     {
//         title:'blog 3',
//         author:'Adhav'

//     }
// ]
const [name,setname]=useState('Arav')
// const [age,setage]=useState(20)

const handleClick = () => {
    
    console.log('clicked')
    setname('Msdy')
    // setage(21)
}
const data2=data.filter(data=>data.author==="Adhav");
// const data3={
//     title:"mhy",
//     author:"muv"


// }
    return (
        <>
         <div className='content'>
             <Bloglist data={data} />
            <Bloglist data={data2} />
            
            {/* <Bloglist data={data} /> */}
               {/* {data.map(item => {
                    return (
                        <div className='data'>
                        <h1>{item.title}</h1>
                        <p>{item.author}</p>
                        </div>
                    )
                })} */}
                <h2>HomePage</h2>
                <p>{name } is {props.age} years old</p>
                <button onClick={handleClick}>Click</button>
          
        </div>
       
        </>
       
                
    )
}



export default Content