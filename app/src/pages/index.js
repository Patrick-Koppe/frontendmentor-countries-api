import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Card from "../components/card"


// markup
const IndexPage = ({data}) => {

  const [ searchValue, setSearchValue ] = React.useState("");


  const [country, setCountry ] = React.useState(null)

  const [loading, setLoading] = React.useState(true);


    React.useEffect(() => {
     fetchAllData();
    })

    /*
    async function fetchData() {
      try {
        const response = await fetch(`https://restcountries.eu/rest/v2/name/aruba?fullText=true`)
        const countries = await response.json()

        await setCountry(countries);
      } catch(e) {
        console.log("error", e)
      } finally {
        setLoading(false)
      }  
    }
    */

  
  async function fetchAllData() {
   fetch(`https://restcountries.eu/rest/v2/all`).then(
      function(response) {
        response.json().then(function(data) {
          setCountry(data);
        }).then(function() {
          setLoading(false)
        });
      })
  }



function handleInputChange(event) {
    setSearchValue(event.target.value);

    console.log(searchValue)
}

  function clickHandler() {
    //fetchData();
  }

  return loading ? "Loading..." : <Card mycountrydata={country}></Card>;
  {/*return (
    <main>
      <title>Home Page</title>
      <h1>
        Congratulations
        <br />
        <span> you just made a Gatsby site! </span>
      </h1>
        <input type="text" value={ searchValue } onChange={handleInputChange}></input>
        <button onClick={clickHandler}>ok</button>

        {loading ? "Loading..." : <Card mycountrydata={country}></Card>}
        
      <p>Output</p>
      <ul>
   {data.allCountries.edges.map(mycountry => (
      <li>{mycountry.node.name}</li>
))} 
      </ul>
    </main>
  )
   */}
}

export default IndexPage

export const query = graphql`
query MyQuery {
  allCountries {
    edges {
      node {
        name
      }
    }
  }
}`
