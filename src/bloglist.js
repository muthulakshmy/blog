import React from 'react'

const Bloglist = ({data,className}) => {
  return (
    <div>
      {data.map(item=>{
        return(
            <div className={className}>
              {Object.entries(item).map(value=>{
              
                console.log(value)
               
                switch(value[0]){
                  case 'title':
                    return(
                     <h1>{value[1]}</h1>
                    )
                  case 'author':
                    return(
                     <p>{value[1]}</p>
                    )
                }
              })

              }
                
               
                </div>
        )
      })}
    </div>
  )
}

export default Bloglist
