import HeaderOptions from './HeaderOptions'
import { signOut } from '@/auth'

export default function Navbar({ user }) {
    async function logout() {
        'use server'
        await signOut({ redirectTo: '/' })
    }
    return (
        <HeaderOptions user={user} logout={logout}/>
    )
}
