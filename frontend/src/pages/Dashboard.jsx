import { useEffect, useState } from "react"

import { createClaim }
from "../services/claimService"

import { getFraudAnalysis }
from "../services/fraudService"

import {

    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer

} from "recharts"

function Dashboard() {

    const [claimAmount,
        setClaimAmount] = useState("")

    const [description,
        setDescription] = useState("")

    const [fraudData,
        setFraudData] = useState([])

    const chartData = [

        {
            name: "HIGH",

            value:
                fraudData.filter(
                    fraud =>
                        fraud.riskLevel === "HIGH"
                ).length
        },

        {
            name: "MEDIUM",

            value:
                fraudData.filter(
                    fraud =>
                        fraud.riskLevel === "MEDIUM"
                ).length
        },

        {
            name: "LOW",

            value:
                fraudData.filter(
                    fraud =>
                        fraud.riskLevel === "LOW"
                ).length
        }
    ]

    useEffect(() => {

        fetchFraudData()

    }, [])

    const fetchFraudData =
        async () => {

            try {

                const response =
                    await getFraudAnalysis()

                console.log(response)

                setFraudData(response)
            }

            catch (error) {

                console.log(error)
            }
        }

    const handleSubmitClaim =
        async () => {

            try {

                const response =
                    await createClaim({

                        claimAmount,
                        description

                    })

                console.log(response)

                alert(
                    "Claim Submitted Successfully"
                )

                fetchFraudData()

                setClaimAmount("")

                setDescription("")
            }

            catch (error) {

                console.log(error)

                alert(
                    "Failed To Submit Claim"
                )
            }
        }

    return (

        <div className="p-8">

            <h1 className="text-5xl font-bold mb-10">

                Dashboard

            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">

                    <h2 className="text-zinc-400 text-lg">

                        Total Claims

                    </h2>

                    <p className="text-4xl font-bold mt-4 text-blue-400">

                        {fraudData.length}

                    </p>

                </div>

                <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">

                    <h2 className="text-zinc-400 text-lg">

                        Fraud Cases

                    </h2>

                    <p className="text-4xl font-bold mt-4 text-red-400">

                        {
                            fraudData.filter(
                                fraud =>
                                    fraud.riskLevel === "HIGH"
                            ).length
                        }

                    </p>

                </div>

                <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">

                    <h2 className="text-zinc-400 text-lg">

                        High Risk Claims

                    </h2>

                    <p className="text-4xl font-bold mt-4 text-yellow-400">

                        {
                            fraudData.filter(
                                fraud =>
                                    fraud.riskLevel === "MEDIUM"
                            ).length
                        }

                    </p>

                </div>

                <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">

                    <h2 className="text-zinc-400 text-lg">

                        AI Accuracy

                    </h2>

                    <p className="text-4xl font-bold mt-4 text-green-400">

                        96%

                    </p>

                </div>

            </div>
            <div className="mt-10 bg-zinc-900 rounded-2xl border border-zinc-800 p-8">

    <h2 className="text-3xl font-bold mb-6">

        Fraud Risk Distribution

    </h2>

                <div className="h-[400px]">

                    <ResponsiveContainer>

                        <PieChart>

                            <Pie

                                data={chartData}

                                dataKey="value"

                                outerRadius={140}

                                label
                            >

                                <Cell fill="#ef4444" />

                                <Cell fill="#eab308" />

                                <Cell fill="#22c55e" />

                            </Pie>

                            <Tooltip />

                        </PieChart>

                    </ResponsiveContainer>

                </div>

            </div>
             

            <div className="mt-10 bg-zinc-900 rounded-2xl border border-zinc-800 p-8">

                <h2 className="text-3xl font-bold mb-6">

                    Submit Insurance Claim

                </h2>

                <div className="space-y-4">

                    <input
                        type="number"
                        placeholder="Claim Amount"
                        value={claimAmount}
                        onChange={(e) =>
                            setClaimAmount(e.target.value)
                        }
                        className="w-full p-4 rounded-xl bg-zinc-800 outline-none"
                    />

                    <textarea
                        placeholder="Claim Description"
                        value={description}
                        onChange={(e) =>
                            setDescription(e.target.value)
                        }
                        className="w-full p-4 rounded-xl bg-zinc-800 outline-none h-40"
                    />

                    <button
                        onClick={handleSubmitClaim}
                        className="bg-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-xl font-semibold"
                    >

                        Submit Claim

                    </button>

                </div>

            </div>

            <div className="mt-10 bg-zinc-900 rounded-2xl border border-zinc-800 p-8">

                <h2 className="text-3xl font-bold mb-6">

                    Recent Fraud Analysis

                </h2>

                <div className="space-y-4">

                    {

                        fraudData.map((fraud) => (

                            <div
                                key={fraud.id}
                                className="bg-zinc-800 p-5 rounded-xl"
                            >

                                <div className="flex justify-between">

                                    <h3 className="text-xl font-semibold">

                                        Claim #{fraud.claimId}

                                    </h3>

                                    <span
                                        className={`px-4 py-1 rounded-full text-sm

                                        ${
                                            fraud.riskLevel === "HIGH"
                                            ?
                                            "bg-red-500"

                                            :

                                            fraud.riskLevel === "MEDIUM"
                                            ?
                                            "bg-yellow-500"

                                            :

                                            "bg-green-500"
                                        }`}
                                    >

                                        {fraud.riskLevel}

                                    </span>

                                </div>

                                <p className="text-zinc-400 mt-3">

                                    Fraud Score:
                                    {fraud.fraudScore}

                                </p>

                                <p className="text-zinc-500 mt-2">

                                    {fraud.reason}

                                </p>

                            </div>
                        ))
                    }

                </div>

            </div>

        </div>
    )
}

export default Dashboard