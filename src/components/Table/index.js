import React, { PureComponent } from "react";
import { SORTS } from "../../constants";
import { Sort } from "../Sort";
import "./index.css";

export class Table extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			sortKey: 'ID',
			isSortReverse: false,
		};
	}

	onSort = (sortKey) => {
		const isSortReverse = this.state.sortKey === sortKey && !this.state.isSortReverse;
		this.setState({ sortKey, isSortReverse });
	};

	render(){
		const { data } = this.props;
		const { sortKey, isSortReverse } = this.state;
		const sortedList = SORTS[sortKey](data);
		const reverseSortedList = isSortReverse
			? sortedList.reverse()
			: sortedList;
		return(
			<table className="table">
				<thead>
				<tr>
					<Sort
						sortKey={"ID"}
						onSort={this.onSort}
						isSortReverse={isSortReverse}
						activeSortKey={sortKey}
					>
						Id
					</Sort>
					<Sort
						sortKey={"FIRST_NAME"}
						onSort={this.onSort}
						isSortReverse={isSortReverse}
						activeSortKey={sortKey}
					>
						firstName
					</Sort>
					<Sort
						sortKey={"LAST_NAME"}
						onSort={this.onSort}
						isSortReverse={isSortReverse}
						activeSortKey={sortKey}
					>
						lastName
					</Sort>
					<Sort
						sortKey={"EMAIL"}
						onSort={this.onSort}
						isSortReverse={isSortReverse}
						activeSortKey={sortKey}
					>
						email
					</Sort>
					<Sort
						sortKey={"PHONE"}
						onSort={this.onSort}
						isSortReverse={isSortReverse}
						activeSortKey={sortKey}
					>
						phone
					</Sort>
				</tr>
				<tr>
					<td><input type="text"/></td>
					<td><input type="text"/></td>
					<td><input type="text"/></td>
					<td><input type="text"/></td>
					<td><input type="text"/></td>
				</tr>
				</thead>
				<tbody>
				{reverseSortedList.map(item =>
					<tr key={`table-row-${item.id}-${item.firstName}`}>
						<td>{item.id}</td>
						<td>{item.firstName}</td>
						<td>{item.lastName}</td>
						<td>{item.email}</td>
						<td>{item.phone}</td>
					</tr>
				)}
				</tbody>
			</table>
		)
	}
}





