import MyCalendar from '../../Components/Calendar/Calendar';
import '../../base.css';
import './yourCollection.css';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ListDisplay from '../../Components/ListDisplay/ListDisplay';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const YourCollection = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const selectDate = ({ target }) => {
		console.log(target);
	};
	const [items, setItems] = useState(['oranges', 'apples', 'candy']);
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
							onChange={(date) => (setSelectedDate = date)}
						/>
					</div>
					<Button>Add Recipe</Button>
				</div>

				<MyCalendar />
			</div>
			<div className="right-collection-container flex flex-col align-center">
				<h2>Your Shopping List</h2>
				<div className="list-container width-80 justify-between">
					<ListDisplay items={items} />
				</div>
			</div>
		</div>
	);
};

export default YourCollection;
