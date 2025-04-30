import React from 'react'

export default function Features() {
    return (
        <section className="py-16 px-6 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold mb-10">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div>
                    <div className="text-5xl mb-4">📊</div>
                    <h3 className="text-xl font-semibold mb-2">Real-Time Analytics</h3>
                    <p>Get insights as they happen with live data processing.</p>
                </div>
                <div>
                    <div className="text-5xl mb-4">🔒</div>
                    <h3 className="text-xl font-semibold mb-2">Secure Data</h3>
                    <p>Your data is protected with enterprise-grade security.</p>
                </div>
                <div>
                    <div className="text-5xl mb-4">⚙️</div>
                    <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
                    <p>Connect with your favorite tools in minutes.</p>
                </div>
            </div>
        </section>
    )
}
