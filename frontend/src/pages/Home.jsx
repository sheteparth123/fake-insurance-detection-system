import { Link } from "react-router-dom"

function Home() {

    return (

        <div className="min-h-screen bg-black text-white overflow-hidden">

            <div className="max-w-7xl mx-auto px-8 py-24">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div>

                        <div className="inline-block px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500 text-blue-400 mb-6">

                            AI Powered Fraud Detection System

                        </div>

                        <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight">

                            Detect Insurance Fraud
                            <span className="text-blue-400">

                                {" "}Intelligently

                            </span>

                        </h1>

                        <p className="text-zinc-400 text-xl mt-8 leading-relaxed">

                            Real-time AI powered insurance fraud detection
                            platform using Kafka, Spring Boot microservices,
                            JWT authentication, and machine learning analysis.

                        </p>

                        <div className="flex gap-6 mt-10">

                            <Link
                                to="/login"
                                className="bg-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg shadow-blue-500/20"
                            >

                                Get Started

                            </Link>

                            <Link
                                to="/dashboard"
                                className="border border-zinc-700 hover:border-blue-400 hover:text-blue-400 transition px-8 py-4 rounded-2xl text-lg font-semibold"
                            >

                                View Dashboard

                            </Link>

                        </div>

                        <div className="grid grid-cols-3 gap-6 mt-16">

                            <div>

                                <h2 className="text-4xl font-bold text-blue-400">

                                    96%

                                </h2>

                                <p className="text-zinc-500 mt-2">

                                    AI Accuracy

                                </p>

                            </div>

                            <div>

                                <h2 className="text-4xl font-bold text-red-400">

                                    24/7

                                </h2>

                                <p className="text-zinc-500 mt-2">

                                    Fraud Monitoring

                                </p>

                            </div>

                            <div>

                                <h2 className="text-4xl font-bold text-green-400">

                                    Kafka

                                </h2>

                                <p className="text-zinc-500 mt-2">

                                    Event Streaming

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="relative">

                        <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full">

                        </div>

                        <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">

                            <div className="flex justify-between items-center mb-8">

                                <h2 className="text-2xl font-bold">

                                    Live Fraud Analysis

                                </h2>

                                <span className="bg-red-500 px-4 py-1 rounded-full text-sm">

                                    HIGH RISK

                                </span>

                            </div>

                            <div className="space-y-6">

                                <div className="bg-zinc-800 p-5 rounded-2xl">

                                    <div className="flex justify-between mb-3">

                                        <span className="text-zinc-400">

                                            Claim Amount

                                        </span>

                                        <span className="font-semibold">

                                            ₹9,50,000

                                        </span>

                                    </div>

                                    <div className="flex justify-between mb-3">

                                        <span className="text-zinc-400">

                                            Fraud Score

                                        </span>

                                        <span className="text-red-400 font-bold">

                                            87%

                                        </span>

                                    </div>

                                    <div className="w-full bg-zinc-700 rounded-full h-3 mt-4">

                                        <div className="bg-red-500 h-3 rounded-full w-[87%]">

                                        </div>

                                    </div>

                                </div>

                                <div className="bg-zinc-800 p-5 rounded-2xl">

                                    <h3 className="text-lg font-semibold mb-3">

                                        AI Analysis

                                    </h3>

                                    <p className="text-zinc-400 leading-relaxed">

                                        Suspicious wording patterns detected.
                                        Delayed reporting and inconsistent
                                        incident details raise fraud probability.

                                    </p>

                                </div>

                                <div className="grid grid-cols-2 gap-4">

                                    <div className="bg-zinc-800 p-4 rounded-2xl">

                                        <h3 className="text-zinc-400 text-sm">

                                            Kafka Events

                                        </h3>

                                        <p className="text-2xl font-bold mt-2 text-blue-400">

                                            1.2K

                                        </p>

                                    </div>

                                    <div className="bg-zinc-800 p-4 rounded-2xl">

                                        <h3 className="text-zinc-400 text-sm">

                                            Claims Processed

                                        </h3>

                                        <p className="text-2xl font-bold mt-2 text-green-400">

                                            342

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home