import React from 'react'
import { Link } from 'react-router-dom'

const CountriesList = ({ countries }) => {
  return (
    <div className="CountriesList">
      <ul className="list-group">

        {countries.map(country => (
          <li className="list-group-item" key={country.alpha3Code}>
            <Link to={`/countries/${country.alpha3Code}`} className="text-decoration-none">
              <img src={country.flag} alt={country.name} className="me-2" style={{ height: 20 }} />
              {country.name}
            </Link>
          </li>
        ))}

      </ul>
    </div>
  )
}

export default CountriesList