import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getProductById, editProducts, getAllRecives,cleanDetailsProducts } from '../../redux/action';
import {validate} from './validate'
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import './editproduct.css'
import { Link } from 'react-router-dom';

export default function EditProducts() {
	const [error, setError]: any = useState({});
	
	

	 const [products, setProducts]: any = useState([])
	 
	 const dispatch: any = useDispatch();
	 const params = useParams();
	
	

	 
	 const product = useSelector((store: any) => store.rootReducer.allProducts);
	 console.log(product);
	 const idDefault = product.filter((item: any) => item.id === Number(params.id))[0]

	 
	 
	 const [inputs, setInputs] = useState({
		name: idDefault.name,
		description: idDefault.description,
		image: idDefault.image,
		price: idDefault.price,
		brand: idDefault.brand,
	 });

	 function handleChecked(e: any) {
		if (e.target.checked) {
			setProducts([...products, e.target.value]);
		} else {
		  let pos = products.indexOf(e.target.id);
		  products.splice(pos, 1);
		}
	  }

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
		function handleSubmit(e: any) {
			e.preventDefault();
			console.log(error)
			if(Object.keys(error).length) {
				alert('Product edited!');
				dispatch(editProducts(params.id, inputs));
				setInputs({
					name: "",
					description: "",
					image:"",
					price: "",
					brand: ""
				});
				setProducts([]);
				e.target.reset();
			} else {
				alert('Please, complete the fields');
			}
	
		}

		
		

		return (
			<div>
				<Link  to="/">
                <Button className="link-f">Home</Button>
              </Link>
				<div className="formcontainer">
					<Form onSubmit={(e) => handleSubmit(e)}> 
						<div>
							<Label>Name: </Label>
							<Input 
							 name="name"
							 type="text"
							 value={inputs.name}
							 placeholder="name"
							 onChange={handleInputChange}
							/>
							{error.name && <span>{error.name}</span>}
						</div>
						<div>
							<Label>Description: </Label>
							<Input
							name="description"
							type="text"
							value={inputs.description}
							placeholder="description..."
							onChange={handleInputChange}
							/>
							{error.description && <span>{error.description}</span>}
						</div>
						<div>
							<Label>Image</Label>
							<Input 
							name="image"
							type="text"
							value={inputs.image}
							placeholder="img link..."
							onChange={handleInputChange}
							/>
							{error.img && <span>{error.img}</span>}
						</div>
						<div>
							<Label>Price</Label>
							<Input 
							name="price"
							type="text"
							value={inputs.price}
							placeholder="price"
							onChange={handleInputChange}
							/>
							{error.price && <span>{error.price}</span>}
						</div>
						<div>
							<Label>Brand</Label>
							<Input 
							name="brand"
							type="text"
							value={inputs.brand}
							placeholder="brand"
							onChange={handleInputChange}
							/>
							{error.brand && <span>{error.brand}</span>}
						</div>
						<Input style={{marginTop: "30px"}} type="submit" value="Edit" />
					</Form>
				</div>
			</div>
		)
	}


