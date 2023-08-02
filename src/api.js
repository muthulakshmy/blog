import React from 'react';
function Apifetch(){
    let API=()=>{fetch("https://pokeapi.co/api/v2/pokemon")
    .then(res=>res.json())
        .then(json => console.log(json))
        .catch(error=>console.log("hello world"))
        
}
    return (
        <>
        <API />
        </>
    )
    
}



export default Apifetch