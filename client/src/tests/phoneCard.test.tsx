import PhoneCard from '../components/PhoneCard'
import { MemoryRouter } from 'react-router-dom'
import { PhoneType } from '../types/phones'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

describe('PhoneCard', () => {
  const mockPhone: PhoneType = {
    _id: '61e92a72556930f19d4e93fb',
    name: 'iPhone 10',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'black',
    price: 1000,
    imageFileName:
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631652956000',
    screen: '4,7 inch IPS',
    processor: 'A10 Fusion',
    ram: 2
  }

  it('should render the component onto the screen', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <PhoneCard phone={mockPhone} />
      </MemoryRouter>
    )
    expect(getByTestId('phoneCardTest')).toBeVisible()
  })
  it('Component should have the correct class', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <PhoneCard phone={mockPhone} />
      </MemoryRouter>
    )
    expect(getByTestId('phoneCardTest')).toHaveClass('phoneCard')
  })
  it('Phone details button has the href attribute & route', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <PhoneCard phone={mockPhone} />
      </MemoryRouter>
    )
    expect(getByTestId('phoneCardBtnTest')).toHaveAttribute(
      'href',
      '/phones/61e92a72556930f19d4e93fb'
    )
  })
})
