import React from 'react';
import { Link } from 'react-router-dom';

const Field = ({ title, children }) => {
  return (
    <div className="Field">
      <hr />

      <div className="field d-flex">
        <p className="me-2">
          <b>{title}</b>
        </p>

        {children}
      </div>
    </div>
  )
}

const CountryDetails = ({ countries, match }) => {
  const { alpha3Code } = match.params
  const selectedCountry = countries && countries.find((country) => country.alpha3Code === alpha3Code)

  if (!selectedCountry) {
    return <p>Loading...</p>
  }

  return (
    <div className="CountryDetails">
      <h1 data-testid="country-name">
        {selectedCountry.name}
      </h1>

      <Field title="Capital:">
        <p>{selectedCountry.capital}</p>
      </Field>

      <Field title="Area:">
        <p>{selectedCountry.area} km2</p>
      </Field>

      {selectedCountry.borders && selectedCountry.borders.length > 0 && (
        <Field title="Borders:">
          <ul key="ul">
            {selectedCountry.borders.map(border => (
              <li key={border.key}>
                <Link to={`/countries/${border}`} className="text-decoration-none">
                  {border}
                </Link>
              </li>
            ))}
          </ul>
        </Field>
      )}
    </div>
  );
};

export default CountryDetails;