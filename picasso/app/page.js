import { auth, signIn, signOut } from "@/auth";


export default async function Home() {
  const session = await auth()
  console.log(session)
  return (
    <section className="flex pt-20">
      <div className="flex flex-col items-center justify-center mx-auto md:h-full px-4 lg:py-0 mt-0">
        <div className="w-[115%] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  border-custom-input-color">
          <div className="p-6 space-y-4  md:space-y-6 sm:p-8 ">
            <h1 className="text-xl font-bold  leading-tight text-center tracking-tight text-custom-white md:text-2xl dark:text-white">
              Избери с какво да влезеш
            </h1>
            <div className="space-y-4 md:space-y-6">
              {session?.user?.email ? <div>{session?.user?.email}</div> : <h1>no user yet</h1>}
              {session?.user?.email ? <form className='bg-green-600 w-full h-7' action={async () => {
                'use server'
                await signOut({ redirectTo: '/' })
              }}>
                <button type="submit">logout</button>
              </form> : null}

              <div>
                <label className="block mb-2 text-sm font-medium text-custom-white dark:text-white">GitHub</label>

                <form className='bg-green-600 w-full h-7' action={async () => {
                  'use server'
                  await signIn('github', { redirectTo: '/' })
                }}>
                  <button type="submit">on click</button>
                </form>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
