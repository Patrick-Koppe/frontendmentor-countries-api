import './App.css';

import axios from 'axios';
import { Component } from 'react';

const api = axios.create({
  baseURL: `https://restcountries.eu/rest/v2/all`
})

class App extends Component {

  state = {
    countries: [],
    isLoading: true
  }

  componentDidMount () {
    this.getCountries();
  }

  getCountries = async () => {
      let data = await api.get('/').then(({data}) => data).catch(err=> console.log(err));
      this.setState({ countries: data })
      this.setState({ isLoading: false })
    
  }

  render() {
    return (
      <div className="App">
      {this.state.isLoading ? <p>loading</p> : this.state.countries.map(country => <h2 key={country.alpha2Code}>{country.name}</h2>)}
      </div>
    );
  }
  
}

export default App;
