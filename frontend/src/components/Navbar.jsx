import { Link, useNavigate } from "react-router-dom"

function Navbar() {

    const navigate = useNavigate()

    const token =
        localStorage.getItem("token")

    const handleLogout = () => {

        localStorage.removeItem("token")

        navigate("/login")
    }

    return (

        <nav className="bg-zinc-900 border-b border-zinc-800 px-8 py-4 flex items-center justify-between">

            <Link
                to="/"
                className="text-2xl font-bold text-blue-400"
            >

                AI Fraud Detection

            </Link>

            {

                token ?

                    (

                        <div className="flex gap-6 items-center">

                            <Link
                                to="/dashboard"
                                className="text-zinc-300 hover:text-blue-400 transition"
                            >

                                Dashboard

                            </Link>

                            <button
                                onClick={handleLogout}
                                className="bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-lg"
                            >

                                Logout

                            </button>

                        </div>

                    )

                    :

                    (

                        <div className="flex gap-6 text-zinc-300">

                            <Link
                                to="/login"
                                className="hover:text-blue-400 transition"
                            >

                                Login

                            </Link>

                            <Link
                                to="/register"
                                className="hover:text-blue-400 transition"
                            >

                                Register

                            </Link>

                        </div>

                    )
            }

        </nav>
    )
}

export default Navbar