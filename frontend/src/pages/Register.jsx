function Register() {

    return (

        <div className="flex items-center justify-center mt-24">

            <div className="bg-zinc-900 p-10 rounded-2xl w-[400px]">

                <h1 className="text-3xl font-bold mb-8 text-center">

                    Register

                </h1>

                <input
                    type="text"
                    placeholder="Username"
                    className="w-full p-3 rounded-lg bg-zinc-800 mb-4 outline-none"
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-lg bg-zinc-800 mb-4 outline-none"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 rounded-lg bg-zinc-800 mb-6 outline-none"
                />

                <button className="w-full bg-blue-500 hover:bg-blue-600 transition py-3 rounded-lg font-semibold">

                    Register

                </button>

            </div>

        </div>
    )
}

export default Register