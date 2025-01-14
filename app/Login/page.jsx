import { signIn } from '@/auth'
import React from 'react'

export default function page() {

    return (
        <div className="min-h-screen mt-10 mx-auto bg-customGray text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">

                    <div className="mt-[13dvh] flex flex-col items-center">
                        <div className="w-full flex-1 mt-8">
                            <div className="flex flex-col  items-center">
                                
                                {/* <button
                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center mb-7 transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                    <div className="bg-white p-2 rounded-full">
                                        <svg className="w-4" viewBox="0 0 533.5 544.3">
                                            <path
                                                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                fill="#4285f4" />
                                            <path
                                                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                fill="#34a853" />
                                            <path
                                                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                fill="#fbbc04" />
                                            <path
                                                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                fill="#ea4335" />
                                        </svg>
                                    </div>
                                    <span className="ml-4">
                                        Sign In with Google
                                    </span>
                                </button>

                                <button
                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center mb-7 transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                    <div className="bg-white p-2 rounded-full">
                                        <svg className="w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                                            <path
                                                d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.847v-3.622h2.973V8.413c0-2.939 1.796-4.549 4.419-4.549 1.256 0 2.337.093 2.65.135v3.075h-1.817c-1.425 0-1.7.677-1.7 1.67v2.187h3.394l-.442 3.622h-2.952V24h5.784C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z"
                                                fill="#1877F2"
                                            />
                                            <path
                                                d="M16.804 24v-9.294h3.394l.442-3.622h-3.836V8.897c0-.993.275-1.67 1.7-1.67h1.817V4.152c-.313-.042-1.394-.135-2.65-.135-2.622 0-4.419 1.61-4.419 4.549v2.478H9.847v3.622h2.973V24h4.984z"
                                                fill="#FFF"
                                            /> 
                                        </svg>
                                    </div>
                                    <span className="ml-4">
                                        Sign In with Facebook
                                    </span>
                                </button> */}

                                <form className='w-full  max-w-xs ' action={async () => {
                                    'use server'
                                    await signIn('github', { redirectTo: '/' })
                                }}>
                                    <button type='submit'
                                        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center mb-7 transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                        <div className="bg-white p-2 rounded-full">
                                            <svg className="w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                                                <path
                                                    d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.292 3.438 9.793 8.205 11.387.6.111.82-.261.82-.578 0-.287-.01-1.049-.015-2.058-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.755-1.333-1.755-1.09-.744.083-.729.083-.729 1.205.084 1.839 1.236 1.839 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.419-1.305.762-1.604-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.468-2.382 1.236-3.222-.123-.305-.536-1.528.117-3.183 0 0 1.008-.322 3.3 1.23.96-.267 1.99-.399 3.015-.404 1.024.005 2.054.137 3.015.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.655.242 2.878.12 3.183.77.84 1.235 1.912 1.235 3.222 0 4.607-2.807 5.62-5.478 5.917.43.372.814 1.102.814 2.222 0 1.604-.015 2.897-.015 3.293 0 .32.217.694.825.577C20.565 22.086 24 17.584 24 12.297 24 5.67 18.627.297 12 .297z"
                                                    fill="#181717"
                                                />
                                            </svg>
                                        </div>
                                        <span className="ml-4">
                                            Sign In with GitHub
                                        </span>
                                    </button>
                                </form>


                            </div>


                            <div className="mx-auto mt-10 max-w-xs">

                                <p className="mt-6 text-xs text-gray-600 text-center">
                                    I agree to abide by Cartesian Kinetics
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        Terms of Service
                                    </a>
                                    and its
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        Privacy Policy
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-yellow-300 text-center hidden lg:flex">

                </div>
            </div>
        </div>
    )
}
