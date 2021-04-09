import { useEffect, useState } from 'react'
import CountriesList from './components/CountriesList'
import Navbar from './components/Navbar'
import { Route, Switch } from 'react-router'
import CountryDetails from './components/CountryDetails'
import { getCountries } from './services/BaseService'
import './App.css'

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    getCountries()
      .then(response => setCountries(response))
  }, [])

  return (
    <div className="App">
      <Navbar />

      <div className="container mt-2">
        <div className="row">
          <div className="col-5 h-100 overflow-scroll" style={{ maxHeight: 'calc(100vh - 50px)' }}>
            <CountriesList countries={countries} />
          </div>

          <div className="col-7">
            <Switch>
              <Route
                exact path="/countries/:alpha3Code"
                component={(routeProps) => <CountryDetails {...routeProps} countries={countries} />}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
