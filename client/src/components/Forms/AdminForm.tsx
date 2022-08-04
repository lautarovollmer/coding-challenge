import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { validate } from './validate';

export default function AdminForm() {
    
    const [error, setError] = useState();
    
    const [inputs, setInputs] = useState({
        id: "",
        name: "",
        description: "",
        image: "",
        price: "",
        brand: ""
    })

    const dispatch =useDispatch();

    function handleInputChange(e: any) {
        setInputs({
          ...inputs,
          [e.target.name]: e.target.value,
        });
    
        setError(
          validate({
            ...inputs,
            [e.target.name]: e.target.value,
          })
        );
      }
  
    
    return (
        <div>
           <h1>Admin dashboard</h1>
           <h3>Choose your product</h3>
           <form>
            <div>
                <h2>Product Information</h2>
                <input 
                    type="text"
                    placeholder='Name of your product'
                    onChange={handleInputChange}
                    value={inputs.name}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Description"
                    id="p_description"
                    onChange={handleInputChange}
                    value={inputs.description}
                />
            </div>
           </form>
        </div>
    )
    
}


