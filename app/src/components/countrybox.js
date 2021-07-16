function CountryBox (props) {

  return (
    <div className="card">
      {props.countries.map(country => 
      <li key={country.alpha2Code}>{country.name}{/*<img src={country.flag} />*/}
      </li>)}
    </div>

  )
}

export default CountryBox;

