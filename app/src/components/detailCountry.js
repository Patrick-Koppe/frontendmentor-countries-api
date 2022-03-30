import './_detailCountry.scss';

import history from '../history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


function DetailCountry(props) {

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function languages(obj) {
            return `${Object.values(obj)}`
    }

    function currencies(obj) {
        let currency = "";

        Object.values(obj).forEach(function(item) {
            currency += `${item.name} (${item.symbol})`
        });

        return currency
    }

    if(props.detailCountry.detailCountry.length >= 1) {
        return (
            <div className="lightbox fixed">
                <div className="container">
                    <div className="row my-5 py-2">
                        <div className="col-12">
                            <button className="btn btn-secondary icon left" onClick={() => history.push('/')}>
                                <FontAwesomeIcon icon={faArrowLeft} />Back</button>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-12 col-md-5">
                            <img className="card-img-top mb-5 mb-lg-2" src={props.detailCountry.detailCountry[0].flags.svg} alt={`flag of ${props.detailCountry.detailCountry[0].name.common}`}/>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="row">

                                <div className="col-12">
                                    <dl>
                                        <dd className="m-0"><h1>{props.detailCountry.detailCountry[0].name.common}</h1></dd>
                                    </dl>
                                </div>

                                <div className="col-12 col-md-6">
                                    <dl>
                                        <dt>Native Name</dt>
                                        <dd>{props.detailCountry.detailCountry[0].name.official}</dd>
                                    </dl>
                                </div>
                                <div className="col-12 col-md-6">
                                    <dl>
                                        <dt>Top Level Domain</dt>
                                        <dd>{props.detailCountry.detailCountry[0].tld}</dd>
                                    </dl>
                                </div>

                                <div className="col-12 col-md-6">
                                    <dl>
                                        <dt>Population</dt>
                                        <dd>{numberWithCommas(props.detailCountry.detailCountry[0].population)}</dd>
                                    </dl>
                                </div>

                                <div className="col-12 col-md-6">
                                    <dl>
                                        <dt>Currencies</dt>
                                        <dd>{currencies(props.detailCountry.detailCountry[0].currencies)}</dd>
                                    </dl>
                                </div>

                                <div className="col-12 col-md-6">
                                    <dl>
                                        <dt>Region</dt>
                                        <dd>{props.detailCountry.detailCountry[0].region}</dd>
                                    </dl>
                                </div>

                                <div className="col-12 col-md-6">
                                    <dl>
                                        <dt>Languages</dt>
                                        <dd>{languages(props.detailCountry.detailCountry[0].languages)}</dd>
                                    </dl>
                                </div>

                                <div className="col-12">
                                    <dl>
                                        <dt>Sub Region</dt>
                                        <dd>{props.detailCountry.detailCountry[0].subregion}</dd>
                                    </dl>
                                </div>

                                <div className="col-12">
                                    <dl>
                                        <dt>Capital</dt>
                                        <dd>{props.detailCountry.detailCountry[0].capital}</dd>
                                    </dl>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <span hidden="hidden"></span>
        )
    }
}

export default DetailCountry;