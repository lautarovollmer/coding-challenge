import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getProductById, addProducts } from '../../redux/action';
import { validate } from './validate';

export default function EditProducts() {
	const [error, setError]: any = useState({});

	const [inputs, setInputs] = useState({
		name: "",
		description: "",
		image: "",
		price: "",
		brand: "",
	 });

	 const [products, setProducts]: any = useState([])
	 const productsDB = useSelector((store: any) => store.products);
	 const dispatch: any = useDispatch();

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
			if(!Object.keys(error).length && products.lenght) {
				alert('Product created!');
				dispatch(addProducts({...inputs, products: products}));
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
				<div>
					<form>
						<div>
							<label>Name: </label>
							<input 
							 name="name"
							 type="text"
							 value={inputs.name}
							 placeholder="name"
							 onChange={handleInputChange}
							/>
							{error.name && <span>{error.name}</span>}
						</div>
						<div>
							<label>Description: </label>
							<input
							name="description"
							type="text"
							value={inputs.description}
							placeholder="description..."
							onChange={handleInputChange}
							/>
							{error.description && <span>{error.description}</span>}
						</div>
						<div>
							<label>Image</label>
							<input 
							name="image"
							type="text"
							value={inputs.image}
							placeholder="img link..."
							onChange={handleInputChange}
							/>
							{error.img && <span>{error.img}</span>}
						</div>
						<div>
							<label>Price</label>
							<input 
							name="price"
							type="text"
							value={inputs.price}
							placeholder="price"
							onChange={handleInputChange}
							/>
							{error.price && <span>{error.price}</span>}
						</div>
						<div>
							<label>Brand</label>
							<input 
							name="brand"
							type="text"
							value={inputs.brand}
							placeholder="brand"
							onChange={handleInputChange}
							/>
							{error.brand && <span>{error.brand}</span>}
						</div>
					</form>
				</div>
			</div>
		)
	}


