import history from '../history';

function DetailCountry (props) {
  return (
    <div className="card">
    {props.detailCountry.detailCountry.length >= 1 ? <p>Hello {props.detailCountry.detailCountry[0].name}</p> : <p></p>}
         <button onClick={() => history.push('/')}>Click button back</button>
    </div>

  )
}

export default DetailCountry;