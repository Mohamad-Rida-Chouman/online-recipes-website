import MyCalendar from '../../Components/Calendar/Calendar';
import '../../base.css';
import './yourCollection.css';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ListDisplay from '../../Components/ListDisplay/ListDisplay';
import axios from 'axios';

const YourCollection = () => {
	useEffect(() => {
		loadShoppingList();
	}, []);
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [items, setItems] = useState([]);
	const [itemsIds, setItemsIds] = useState([]);
	const SHOPPINGLST_URL = 'http://127.0.0.1:8000/api/getSL';
	async function loadShoppingList() {
		try {
			const token = localStorage.getItem('access_token');
			const config = {
				headers: { Authorization: `Bearer ${token}` },
			};
			const response = await axios.get(SHOPPINGLST_URL, config);

			if (response) {
				setItems(response.data.map((item) => item.name));
				setItemsIds(response.data.map((item) => item.id));
				// console.log(response.data.map((item) => item.name));
			}
		} catch {
			console.log('failed');
		}
	}
	const handleChangeDate = (selectedDate) => {
		console.log(selectedDate);
		setSelectedDate(selectedDate);
	};

	return (
		<div className="main-collection-container flex">
			<div className="left-collection-container flex flex-col align-center padding-s gap-m">
				<h2>Your Scheduler</h2>
				<div className="add-events flex justify-center align-center padding-s gap-m">
					<Input>Recipe Name</Input>
					<div className="date-picker-container flex justify-center align-center">
						<DatePicker
							className="date-picker"
							selected={selectedDate}
							onChange={handleChangeDate}
						/>
					</div>
					<Button>Add Recipe</Button>
				</div>

				<MyCalendar />
			</div>
			<div className="right-collection-container flex flex-col align-center">
				<h2>Your Shopping List</h2>
				<div className="list-container width-80 justify-between">
					<ListDisplay
						items={items}
						itemsIds={itemsIds}
						useEffect={useEffect}
					/>
				</div>
			</div>
		</div>
	);
};

export default YourCollection;
