import { authUserSession } from '@/libs/auth-libs'
import Link from 'next/link'
import React from 'react'

const UserActionButton = async () => {
    const user = await authUserSession()

    const DashboardComp = () => {
        const actionLabel = user ? "Dashboard" : "Sign In"
        const actionURL = user ? "/users/dashboard" : "/api/auth/signin"
        return <Link href={actionURL} className='p-2 bg-primary text-dark rounded min-w-fit'>{actionLabel}</Link>
    }

    return (
        <div className='flex gap-2 items-center'>
            <DashboardComp />
        </div>
    )
}

export default UserActionButton
