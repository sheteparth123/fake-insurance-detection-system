import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../services/authService"

function Login() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const handleLogin = async () => {

        try {

            const response = await loginUser({

                email,
                password

            })

            console.log(response)

            localStorage.setItem(

                "token",
                response.token
            )

            navigate("/dashboard")

        }

        catch (error) {

            console.log(error)

            alert("Login Failed")
        }
    }

    return (

        <div className="flex items-center justify-center mt-24">

            <div className="bg-zinc-900 p-10 rounded-2xl w-[400px]">

                <h1 className="text-3xl font-bold mb-8 text-center">

                    Login

                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                    className="w-full p-3 rounded-lg bg-zinc-800 mb-4 outline-none"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    className="w-full p-3 rounded-lg bg-zinc-800 mb-6 outline-none"
                />

                <button
                    onClick={handleLogin}
                    className="w-full bg-blue-500 hover:bg-blue-600 transition py-3 rounded-lg font-semibold"
                >

                    Login

                </button>

            </div>

        </div>
    )
}

export default Login