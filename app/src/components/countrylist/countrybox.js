import './_countrybox.scss';


function CountryBox (props) {

  const clickedCountry = props.clickedCountry;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="card-list row row-cols-1 row-cols-md-2 row-cols-lg-4 g-5">
      {props.countries.map(country =>
          <div className="col">
            <div className="card" onClick={() => clickedCountry(country.name.common)} key={country.cca2}>
                <img className="card-img-top" src={country.flags.svg} alt={`flag of ${country.name.common}`}/>
                <div className="card-body">
                  <h5 className="card-title">{country.name.common}</h5>
                  <div className="card-text">
                    <dl>
                      <div>
                        <dt>Population</dt>
                        <dd>{numberWithCommas(country.population)}</dd>
                      </div>
                      <div>
                        <dt>Region</dt>
                        <dd>{country.region}</dd>
                      </div>
                      <div>
                        <dt>Capital</dt>
                        <dd>{country.capital}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
            </div>
          </div>
      )}
    </div>

  )
}

export default CountryBox;

