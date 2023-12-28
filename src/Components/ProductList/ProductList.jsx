import React from 'react'
import { Data } from '../../Data'
import "./ProductList.css"
export default function ProductList() {
    
  return (
    <div className='list'>
        {Data.map( el =>(
            <div key={el.id} className='product' >
                <h5>{el.title}</h5>
                <img src={el.image} className='img' /> 
                <span>{el.price} dt</span>
                <p>{el.description.slice(0, 100)} ... <a style={{textDecoration:"underline" , color:"blue"}}>read more</a></p>

                {/* <div>
                  {el.stock ? (<p style={{color:"green"}}>en stock</p>)  : ( <p style={{color:"red"}}>hors stock</p> )}
                </div> */} 
                <p style={{color: el.stock? "green" : "red"  }}>
                  {el.stock ? "en stock" : "hors stock"}
                </p>

            </div>    

        )  )}
    </div>
  )
}
