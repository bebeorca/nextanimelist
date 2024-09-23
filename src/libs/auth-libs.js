import { getServerSession } from 'next-auth'
import { Options } from '@/app/api/auth/[...nextauth]/route'

export const authUserSession = async () => {
    const session = await getServerSession(Options)
    return session?.user
}