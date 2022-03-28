import './_detailCountry.scss';

import history from '../history';


function DetailCountry(props) {

    function numberWithCommas(x) {

        console.log('props')
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function languages(obj) {

        console.log('Array', Object.values(obj));

            return `${Object.values(obj)}`
    }

    function currencies(obj) {

        let currency = "";
        console.log('Array', Object.values(obj));

        Object.values(obj).forEach(function(item) {
            console.log('item', item.name);
            currency += `${item.name} (${item.symbol})`
        });

        return currency
    }

    if(props.detailCountry.detailCountry.length >= 1) {
        return (
            <div className="lightbox fixed">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <button onClick={() => history.push('/')}>Click button back</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img className="card-img-top" src={props.detailCountry.detailCountry[0].flags.svg} alt={`flag of ${props.detailCountry.detailCountry[0].name.common}`}/>
                        </div>
                        <div className="col-12 col-md-6">
                            <dl>
                                <div>
                                    <dt>Native Name:</dt>
                                    <dd>{props.detailCountry.detailCountry[0].name.official}</dd>
                                </div>
                                <div>
                                    <dt>Population</dt>
                                    <dd>{numberWithCommas(props.detailCountry.detailCountry[0].population)}</dd>
                                </div>
                                <div>
                                    <dt>Region</dt>
                                    <dd>{props.detailCountry.detailCountry[0].region}</dd>
                                </div>
                                <div>
                                    <dt>Sub Region</dt>
                                    <dd>{props.detailCountry.detailCountry[0].subregion}</dd>
                                </div>
                                <div>
                                    <dt>Capital</dt>
                                    <dd>{props.detailCountry.detailCountry[0].capital}</dd>
                                </div>
                                <div>
                                    <dt>Top Level Domain</dt>
                                    <dd>{props.detailCountry.detailCountry[0].tld}</dd>
                                </div>

                                 <div>
                                 <dt>Currencies</dt>
                                 <dd>{currencies(props.detailCountry.detailCountry[0].currencies)}</dd>
                                 </div>
                                <div>
                                    <dt>Languages</dt>
                                    <dd>{languages(props.detailCountry.detailCountry[0].languages)}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    } else {
        return (
            <span hidden="hidde"></span>
        )
    }
}

export default DetailCountry;