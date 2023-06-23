import React from 'react'
import { useLocation } from 'react-router-dom';
export default function CategoryProducts({ filteredItems}) {
  
  
    return (
    <div>
    <div>CategoryProducts</div>
    <div>
        {filteredItems.map((item)=>(
            <div>{item.name}</div>

        

        ))}
    </div>
    </div>
  )
  
}
