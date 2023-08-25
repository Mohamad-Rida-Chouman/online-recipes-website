import './listDisplay.css';
import '../../base.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ListDisplay = (props) => {
	useEffect(() => {
		////
	}, []);

	const [propsItems, setPropsItems] = useState(props.items);
	const [propsIds, setPropsIds] = useState(props.itemsIds);
	const SHOPPINGLST_URL = 'http://127.0.0.1:8000/api/getSL';
	const REMOVEFROMSL_URL = 'http://127.0.0.1:8000/api/ingFromSL/';

	const result = propsItems.map((name, index) => ({
		name: name,
		id: propsIds[index],
	}));

	const handleRemoveIngredient = async (id) => {
		// const removeButton = document.getElementById('button' + id);

		try {
			const token = localStorage.getItem('access_token');
			const config = {
				headers: { Authorization: `Bearer ${token}` },
			};

			const response = await axios.get(REMOVEFROMSL_URL + id, config);

			if (response) {
				console.log(response);
				// reloadIngedients();
			}
		} catch {
			console.log('failed to remove ing from shopping list');
		}
	};

	async function reloadIngedients() {
		try {
			const token = localStorage.getItem('access_token');
			const config = {
				headers: { Authorization: `Bearer ${token}` },
			};
			const response = await axios.get(SHOPPINGLST_URL, config);

			if (response) {
				setPropsItems(response.data.map((item) => item.name));
				setPropsIds(response.data.map((item) => item.id));
			}
		} catch {
			console.log('failed');
		}
	}

	const ListItem = (props) => (
		<li className="flex justify-between">
			<span>{props.name}</span>
			<span>
				<button
					className="add-button"
					type="submit"
					name="ingredient"
					value={props.id}
					id={'button' + props.id}
					onClick={() => handleRemoveIngredient(props.id)}
				>
					Remove
				</button>
			</span>
		</li>
	);

	const items = result.map((item, i) => (
		<ListItem key={i} name={item.name} id={item.id} />
	));
	return <ul>{items}</ul>;
};

export default ListDisplay;
