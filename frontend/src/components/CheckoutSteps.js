import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/login'>
            <Nav.Link>Prijavite se</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Prijavite se</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <Nav.Link>Poručite</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Poručite</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/payment'>
            <Nav.Link>Način plaćanja</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Način plaćanja</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link>Dovršite kupovinu</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Dovršite kupovinu</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps
