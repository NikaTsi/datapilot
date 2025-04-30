import React from 'react'

export default function Pricing() {
    return (
        <section className="py-16 px-6 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold mb-10">Pricing Plans</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white shadow-md p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Starter</h3>
                    <p className="text-3xl font-bold mb-4">$9<span className="text-base">/mo</span></p>
                    <ul className="mb-4">
                        <li>✔ Basic Features</li>
                        <li>✔ Email Support</li>
                        <li>✔ 1 User</li>
                    </ul>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 active:bg-blue-800">Choose</button>
                </div>
                <div className="bg-white shadow-md p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Pro</h3>
                    <p className="text-3xl font-bold mb-4">$29<span className="text-base">/mo</span></p>
                    <ul className="mb-4">
                        <li>✔ All Starter Features</li>
                        <li>✔ Advanced Analytics</li>
                        <li>✔ 5 Users</li>
                    </ul>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 active:bg-blue-800">Choose</button>
                </div>
                <div className="bg-white shadow-md p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
                    <p className="text-3xl font-bold mb-4">$99<span className="text-base">/mo</span></p>
                    <ul className="mb-4">
                        <li>✔ All Pro Features</li>
                        <li>✔ Dedicated Support</li>
                        <li>✔ Unlimited Users</li>
                    </ul>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 active:bg-blue-800">Choose</button>
                </div>
            </div>
        </section>
    )
}
