import { fireEvent, render, screen } from '@testing-library/react'

import SearchBar from '@/components/users/search-bar'

describe('SearchBar', () => {
  it('calls onChange when typing', () => {
    const onChange = jest.fn()

    render(<SearchBar value="" onChange={onChange} />)

    const input = screen.getByPlaceholderText(/search users/i)

    fireEvent.change(input, {
      target: {
        value: 'joko',
      },
    })

    expect(onChange).toHaveBeenCalled()
  })
})
