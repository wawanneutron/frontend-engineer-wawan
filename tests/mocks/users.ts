import { UserOperation } from '@/types/user-operation'

export const mockUsers: UserOperation[] = [
  {
    id: 1,
    name: 'Joko',
    username: 'Joko',
    email: 'joko@example.com',
    phone: '123456789',
    website: 'Joko.dev',
    address: {
      street: 'Main Street',
      suite: 'Apt. 101',
      city: 'New York',
      zipcode: '10001',
      geo: {
        lat: '0',
        lng: '0',
      },
    },
    company: {
      name: 'Acme Inc.',
      catchPhrase: 'Innovative solutions',
      bs: 'synergize scalable markets',
    },
    totalPosts: 10,
    completedTodos: 5,
    pendingTodos: 2,
  },
]
