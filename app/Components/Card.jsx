import React from 'react'

export default function Card() {
    return (
        <div
            className="block rounded-lg bg-white text-center text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div className='bg-yellow-500'>
                <h2 className="border-b-2 text-md font-semibold uppercase font-mono text-black border-neutral-100 px-6 py-3 dark:border-white">
                    Task Priority Level: 10
                </h2>
            </div>

            <div className="p-6">
                <h5 className="mb-2 font-semibold text-black text-xl leading-tight ">
                    Clean Your Room
                </h5>
                <div className='bg-black w-full h-[0.5px]'></div>
                <p className="mb-4 mt-1 text-gray-700 text-base ">
                    Clean you room we will have guests tonight
                </p>
                <h2 className='text-green-900 font-serif'>Reward:<span className='font-semibold font-mono'> 10$</span></h2>

            </div>
            <div className='justify-around'>

                <button
                    type="button"
                    className="inline-block bg-green-600 m-2 text-white font-semibold rounded bg-primary px-2 pb-2 pt-2.5 text-xs uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    data-twe-ripple-init
                    data-twe-ripple-color="light">
                    Completed
                </button>

                <button
                    type="button"
                    className="inline-block bg-red-600 m-2 text-white font-semibold rounded bg-primary px-2 pb-2 pt-2.5 text-xs uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    data-twe-ripple-init
                    data-twe-ripple-color="light">
                    Incomplete
                </button>

            </div>
            <div
                className="border-t-2 text-black border-neutral-100 px-6 py-3 text-surface/75 dark:border-white/10 dark:text-neutral-500">
                2 days ago
            </div>
        </div>
    )
}
