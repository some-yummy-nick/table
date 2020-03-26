import React, { PureComponent } from "react";
import axios from "axios";
import { WithLoading } from "../WithLoading";
import { Table } from "../Table";
import { Choose } from "../Choose";
import { LENGHT } from "../../constants";

export class App extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			isLoading: false,
			error: false,
		}
	}

	getData = (capacity) => {
		this.setState({ isLoading: true });
		const length = LENGHT[capacity];
		axios(`http://www.filltext.com/?rows=${length}&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
			.then(response => this._isMounted && this.setState({ data: response.data, isLoading: false }))
			.catch(error => this._isMounted && this.setState({ error }));
	};

	componentDidMount() {
		this._isMounted = true;
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	render() {
		const { data, isLoading } = this.state;
		return (
			<React.Fragment>
				<Choose onClick={this.getData}/>
				{data ?
					<Table data={data}/>
					: ""
				}
			</React.Fragment>
		)
	}
}
