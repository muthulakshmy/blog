import React from 'react';


const Content = () => {
    // const body=['title1', 'title2']
    // const author='Arthur'
    const data=[
    {
        title:'blog 1',
        author:'Arthur'
    },{
        title:'blog 2',
        author:'Arjun'

    },
    {
        title:'blog 3',
        author:'Adhav'

    }
]

    return (
        <div className='content'>
               {data.map(item => {
                    return (
                        <div className='data'>
                        <h1>{item.title}</h1>
                        <p>{item.author}</p>
                        </div>
                    )
                })}
          
        </div>
                
    )
}



export default Content