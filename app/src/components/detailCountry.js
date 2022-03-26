import history from '../history';

function DetailCountry (props) {
  return (
    <div className="card-lightbox">
    {props.detailCountry.detailCountry.length >= 1 ? <p>Hello {props.detailCountry.detailCountry[0].name.common}</p> : <p>Oder von der URL</p>}
         <button onClick={() => history.push('/')}>Click button back</button>
    </div>

  )
}

export default DetailCountry;