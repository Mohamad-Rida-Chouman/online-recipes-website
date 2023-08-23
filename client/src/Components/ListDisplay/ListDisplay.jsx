import './listDisplay.css';
import '../../base.css';

const ListDisplay = (props) => {
	const ListItem = (props) => (
		<li className="flex justify-between">
			<span>{props.name}</span>
			<span>remove</span>
		</li>
	);
	const items = props.items.map((item, i) => <ListItem key={i} name={item} />);
	return <ul>{items}</ul>;
};

export default ListDisplay;
