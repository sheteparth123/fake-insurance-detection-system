import axios from "axios"

const API_URL =
    "http://localhost:8082/api/claims"

export const createClaim =
    async (claimData) => {

        const token =
            localStorage.getItem("token")

        const response =
            await axios.post(

                API_URL,

                claimData,

                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            )

        return response.data
    }