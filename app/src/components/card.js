import * as React from 'react'



const Card = ({ mycountrydata }) => {


  if(mycountrydata !== null) {
    mycountrydata.map(mycountry => {
      return <li>{mycountry.name}</li>
    })
  } else {
    return <li>empty</li>
  }
 


  
}

export default Card