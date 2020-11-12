import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = e => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={e => setKeyword(e.target.value)}
        placeholder='Pretražite...'
        className='mr-1 ml-sm-3'
        style={{ maxWidth: '180px' }}
      ></Form.Control>
      <Button type='submit' variant='outline-success' className='p-2'>
        <i className='fas fa-search'></i>
      </Button>
    </Form>
  )
}

export default SearchBox
