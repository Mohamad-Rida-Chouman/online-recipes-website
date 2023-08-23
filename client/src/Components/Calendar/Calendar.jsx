import { useState } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';
import { Calendar, globalizeLocalizer } from 'react-big-calendar';
import globalize from 'globalize';
import '../../base.css';

const localizer = globalizeLocalizer(globalize);

function MyCalendar() {
	const [events, setEvents] = useState([
		{
			title: 'All Day Event very long title',
			allDay: true,
			start: new Date(2023, 7, 1),
			end: new Date(2023, 7, 2),
		},
		{
			title: 'Long Event 1',
			start: new Date(2023, 7, 7),
			end: new Date(2023, 7, 8),
		},
	]);

	return (
		<div className="calendar-container width-100">
			<Calendar
				className="calendar width-100"
				localizer={localizer}
				events={events}
				startAccessor="start"
				endAccessor="end"
			/>
		</div>
	);
}
export default MyCalendar;
