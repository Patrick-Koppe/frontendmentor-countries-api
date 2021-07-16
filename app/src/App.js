import './App.css';

import axios from 'axios';
import { Component } from 'react';
import CountryBox from './components/countrybox.js'
const api = axios.create({
  baseURL: `https://restcountries.eu/rest/v2/all`
})


class App extends Component {

  state = {
    countries: [],
    isLoading: true,
    searchtext: '',
    invalid: false
  }

  componentDidMount () {
    this.getCountries();
    this.setState({ isLoading: false })
  }

  getCountries = async () => {
      let data = await api.get('/').then(({data}) => data).catch(err=> console.log(err));
      this.setState({ countries: data, isLoading: false })
    
  }

  searchCountries = async searchtext => {
    this.setState({ loading: true });
    try {
      const res = await axios(`https://restcountries.eu/rest/v2/name/${searchtext}`);
      const countries = await res.data;
      this.setState({ countries: countries, isLoading: false, invalid: false });

    } catch(err) {
      this.setState({invalid: true, isLoading: false})
    }
    
  };



  handleChange = (e) => {
    this.setState({ isLoading: true })
    if(this.state.searchtext === '') {
      console.log('all', this.state.searchtext); 
      this.getCountries()
    } else {
      this.searchCountries(this.state.searchtext)
    }
    this.setState({ searchtext: e.target.value });
    
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={ this.handleChange } className={this.state.invalid ? 'error' : ''}/>
        <CountryBox countries={this.state.countries}/>
     {this.state.isLoading ? <p>loading</p> : <p></p>}
      </div>
    );
  }
  
}

export default App;
