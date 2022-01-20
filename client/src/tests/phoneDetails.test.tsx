import PhoneDetails from '../components/PhoneDetails'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'

jest.mock('react-router-dom', () => ({
  __esModule: true,
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '61e92a72556930f19d4e93fb' })
}))

jest.mock('../api/phones', () => ({
  __esModule: true,
  getPhoneDetails: () => {
    return new Promise((resolve) => {
      resolve({
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
      })
    })
  },
  deletePhone: jest.fn()
}))

describe('PhoneDetails', () => {
  it('should render the component onto the screen', async () => {
    const { findByTestId } = render(
      <MemoryRouter>
        <PhoneDetails />
      </MemoryRouter>
    )
    const phoneDetails = await findByTestId('phoneDetailsTest')
    expect(phoneDetails).toBeVisible()
  })

  it('should render the component onto the screen', async () => {
    const { findByTestId } = render(
      <MemoryRouter>
        <PhoneDetails />
      </MemoryRouter>
    )
    const phoneDetailsDeleteBtn = await findByTestId('DeleteBtnTest')
    fireEvent.click(phoneDetailsDeleteBtn)
    const deleteSuccess = await findByTestId('deleteBtnSuccess')
    expect(deleteSuccess).toBeVisible()
  })
})
