'use client'
import { useRouter } from "next/navigation";

export default function LogoutButton() {

    const router = useRouter()

    function logout() {
        sessionStorage.removeItem('jwt')
        router.push('/')
        location.reload()
    }

    return (
        <>
        <button
        className="btn btn-success mr-4"
        onClick={() => {
          logout();
        }}
      >
        登出
      </button>
        </>
    )
}