import React, {Component} from 'react';
import CardList from '../components/CardList';
// import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component{

	constructor()
	{
		super();
		this.state = {
			robots: [],
			searchField: ''
		}
	}


	onSearchChange = (event) => 
	{
		this.setState({searchField: event.target.value});

		
	}

	componentDidMount() 
	{
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				return response.json();
			})
			.then(users => {
				this.setState({robots: users});
			});

	}


	render(){

		const filteredRobots = this.state.robots.filter( (robot) => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});


			return (

				<div 
				className='tc'
				>

					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchField={this.searchField} searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>

			);
		}

}
	

export default App;