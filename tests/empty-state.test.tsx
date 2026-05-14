import { render, screen } from '@testing-library/react'

import EmptyState from '@/components/ui/empty-state'

describe('EmptyState', () => {
  it('renders title and description', () => {
    render(
      <EmptyState title="No users found" description="Try another filter" />
    )

    expect(screen.getByText('No users found')).toBeInTheDocument()

    expect(screen.getByText('Try another filter')).toBeInTheDocument()
  })
})
