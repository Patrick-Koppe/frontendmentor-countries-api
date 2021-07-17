function CountryBox (props) {

  var clickedCountry = props.clickedCountry;

  return (
    <div className="card">

      {props.countries.map(country => 
      <li onClick={() => clickedCountry(country.name)} key={country.alpha2Code}>{country.name}{/*<img src={country.flag} />*/}
      </li>)}
    </div>

  )
}

export default CountryBox;

