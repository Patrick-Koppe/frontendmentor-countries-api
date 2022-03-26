import './App.scss';

import axios from 'axios';
import history from './history';

import { Component } from 'react';
import CountryBox from './components/countrylist/countrybox.js';

import Routes from './routes';
import Header from "./components/header/header";




const api = axios.create({
  baseURL: `https://restcountries.com/v3.1/all`
})


class App extends Component {

  state = {
    countries: [],
    clickedCountry: [],
    isLoading: true,
    searchtext: '',
    regiontext: '',
    invalid: false,
    selectCountry: '',
  }

  clickedCountry = (countryName) => {
    this.setState({
      selectCountry: countryName
    },
     this.startsearch
    )

  }


  startsearch = () => {
    this.searchForClickedCountry(this.state.selectCountry)
    history.push(`detailPage?name=${this.state.selectCountry}`)
  }
  componentDidMount () {
    this.getCountries();
    this.setState({ isLoading: false })
  }

  getCountries = async () => {
      let data = await api.get('/').then(({data}) => data).catch(err=> console.log(err));
      this.setState({ countries: data, isLoading: false })
    
  }

  searchForClickedCountry = async searchtext => {
    this.setState({ loading: true });
    try {
      const res = await axios(`https://restcountries.com/v3.1/name/${searchtext}`);
      const countries = await res.data;
      this.setState({ clickedCountry: countries, isLoading: false});

    } catch(err) {
      this.setState({invalid: true, isLoading: false})
    }
  };

  searchCountries = async searchtext => {
    this.setState({ loading: true });
    try {
      const res = await axios(`https://restcountries.com/v3.1/name/${searchtext}`);
      const countries = await res.data;
      this.setState({ countries: countries, isLoading: false, invalid: false });

    } catch(err) {
      this.setState({invalid: true, isLoading: false})
    }
  };

  searchRegionCountries = async region => {
    this.setState({ loading: true });
    try {
      const res = await axios(`https://restcountries.com/v3.1/region/${region}`);
      const countries = await res.data;
      this.setState({ countries: countries, isLoading: false });

    } catch(err) {
      this.setState({isLoading: false})
    }
  };



  // show search reesults
  handleChange = (e) => {
    this.setState({ isLoading: true })
    this.setState({ searchtext: e.target.value });
    // show all countries is user has typed 0 or 1 letter in searchfield
    if(this.state.searchtext.length < 2) {
      this.getCountries()
    } else {
      this.searchCountries(this.state.searchtext)
    }
   
    
  }

  // show filtered countries by select options
  handleSelect = (e) => {
    if(e.target.value === 'default') {
      this.getCountries();
    } else {
      this.setState({ isLoading: true })
      this.setState({ regiontext: e.target.value })
      this.searchRegionCountries(e.target.value)
    }

  }


  render() {
    return (
      <div className="App">
        <Header />

           <Routes detailCountry={this.state.clickedCountry}/>
        
        <input type="text" onChange={ this.handleChange } className={this.state.invalid ? 'error' : ''}/>

        <select onChange={ this.handleSelect }>
          <option value="default">Filter by Resgion</option>
          <option>Africa</option>
          <option>Americas</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
        <div className="container">
          <CountryBox countries={this.state.countries} clickedCountry={this.clickedCountry} />
          {this.state.isLoading ? <p>loading</p> : <p></p>}
        </div>
      </div>
    );
  }
  
}

export default App;
