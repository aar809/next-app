import React from 'react'
import Link from 'next/link'
import { sort } from 'fast-sort'

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    searchParams: Promise<{ sortOrder: string }>
}

const UsersPage = async ({ searchParams }: Props) => {
    const { sortOrder } = await searchParams;

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await res.json();

    const sortedUsers =
        sort(users).asc(sortOrder === 'email' ? user => user.email : user => user.name)

    return (
        <> {sortOrder}
            <h1>Users</h1>
            <Link href='/users/new' className='btn'>New User</Link>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th><Link href="/users?sortOrder=name">Name</Link></th>
                        <th><Link href="/users?sortOrder=email">Email</Link></th>
                    </tr>
                </thead>
                <tbody>
                    {sortedUsers.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default UsersPage