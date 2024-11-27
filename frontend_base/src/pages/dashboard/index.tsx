import { useAuth } from '@/lib/useAuth';

export default function DashboardPage() {
  const { user } = useAuth()


  return (
    <>
      {user?.username}
    </>
  )
}
