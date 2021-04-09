import React from 'react'
import { render } from '@testing-library/react'
import Navbar from '../../components/Navbar'

describe('Navbar component', () => {
  test('It renders a NAV tag', () => {
    const { container } = render(<Navbar />)

    expect(container.firstChild.nodeName).toBe('NAV')
    expect(container.firstChild.classList.contains('navbar')).toBeTruthy()
  })

  test('It renders the company name', () => {
    const { queryByText } = render(<Navbar />)

    const brandNode = queryByText('Ironhack')

    expect(brandNode.nodeName).toBe('SPAN')
    expect(brandNode.classList.contains('navbar-brand')).toBeTruthy()
  })
})
