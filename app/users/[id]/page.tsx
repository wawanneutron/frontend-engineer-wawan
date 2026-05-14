import { Metadata } from 'next'
import { generateUserMetadata } from '@/lib/metadata/user-metadata'
import UserDetailClient from './user-detail-client'

type Props = {
  params: Promise<{ id: number }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  return generateUserMetadata({ id: resolvedParams.id })
}

export default async function UserDetailPage() {
  return <UserDetailClient />
}
