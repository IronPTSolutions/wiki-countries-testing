import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CountryDetail from '../../components/CountryDetails'
import { BrowserRouter, useLocation } from 'react-router-dom'

const countries = [
  {
    "name": "Aland Islands",
    "alpha3Code": "ALA",
    "capital": "Mariehamn",
    "borders": [],
    "flag": "https://restcountries.eu/data/ala.svg",
  },
  {
    "name": "Colombia",
    "alpha3Code": "COL",
    "capital": "Bogotá",
    "area": 1141748.0,
    "borders": ["BRA", "ECU", "PAN", "PER", "VEN"],
    "flag": "https://restcountries.eu/data/col.svg",
  }
]

const LocationDisplay = () => {
  const location = useLocation()

  return <div data-testid="location-display">{location.pathname}</div>
}

const UI = ({data}) => {
  return (
    <BrowserRouter>
      <CountryDetail countries={data || countries} match={{ params: { alpha3Code: 'COL' } }} />

      <LocationDisplay />
    </BrowserRouter>
  )
}

describe('CountryDetail', () => {
  test('It renders the country details', () => {
    const { queryByText, queryByTestId } = render(<UI />)

    expect(queryByTestId('country-name').textContent).toBe('Colombia')
    expect(queryByText('Bogotá').nodeName).toBe('P')
  })

  test('Borders take me to that country', () => {
    const { queryByText, queryByTestId } = render(<UI />)

    expect(queryByTestId('location-display').textContent).toBe('/')

    fireEvent.click(queryByText('BRA'))

    expect(queryByTestId('location-display').textContent).toBe('/countries/BRA')
  })

  test('if no countries are passed it renders a loading state', () => {
    const { queryByText } = render(<UI data={[]} />)

    expect(queryByText('Loading...')).not.toBeNull()
  })
})
