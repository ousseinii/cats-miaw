import './App.css';
import { Component } from 'react';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      title: '🐾 Cat Miaw 🐾',
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        // recuperre les objets et les insere dans cats []
        this.setState(() => {
          return { cats: users };
        })
      );
  }

  onSearchChange = (e) => {
    // tranforme les entrée en minuscules
    const searchField = e.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { cats, title, searchField } = this.state;
    const { onSearchChange } = this;
    // filtrage des données en retournant un nouvel arrays
    const filteredCats = cats.filter((cat) => {
      return cat.name.toLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <SearchBox
          onChangeHandler={onSearchChange}
          placeHolder="Recherche"
          className="monsters-search-box"
        />
        <h1 className="app-title"> {title} </h1>
        <CardList cats={filteredCats} />
      </div>
    );
  }
}

export default App;
