import React from 'react'
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css'

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}));
    
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }


  render(){
    // Destructuring
    const { monsters, searchField} = this.state;

    /*Similar to 
    const monsters = this.state.monsters;
    const searchField = this.state.searchField;
    */ 

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

  return (
    <div className='App'>
      <h1>Monster Rolodex </h1>
      <SearchBox 
       placeholder='search monsters' 
       handleChange={this.handleChange}
      />
      <CardList monsters={filteredMonsters} /> 
    </div>
  ); 
  }
}

export default App
