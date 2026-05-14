import { render, screen } from '@testing-library/react'

import ErrorState from '@/components/ui/error-state'

describe('ErrorState', () => {
  it('renders error message', () => {
    render(
      <ErrorState
        title="Failed to load users"
        description="Unable to fetch data"
      />
    )

    expect(screen.getByText('Failed to load users')).toBeInTheDocument()

    expect(screen.getByText('Unable to fetch data')).toBeInTheDocument()
  })
})
