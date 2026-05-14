import { fireEvent, render, screen } from '@testing-library/react'

import AdvancedFilter from '@/components/users/advanced-filter'

describe('AdvancedFilter', () => {
  it('calls onChange when selecting filter', () => {
    const onChange = jest.fn()

    render(<AdvancedFilter value="all" onChange={onChange} />)

    const select = screen.getByRole('combobox')

    fireEvent.change(select, {
      target: {
        value: 'high-completed',
      },
    })

    expect(onChange).toHaveBeenCalled()
  })
})
