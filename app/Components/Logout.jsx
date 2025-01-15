'use client'
export default function Logout() {

    return (
        <button className=" block py-2 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="33" height="33" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 16l-5-4 4-4" />
                <path d="M14 12H6" />
                <rect x="16" y="4" width="4" height="16" rx="2" />
            </svg>
        </button>
    )
}
