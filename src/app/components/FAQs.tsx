import React from 'react'

const FAQs = () => {
  return (
    <div className="text-white flex flex-col">
        <div className="flex-grow flex flex-col md:flex-row p-6">
        {/* Left Panel */}
            <div className="bg-transparent p-6 rounded-lg w-full md:w-1/3 mb-6 md:mb-0 md:mr-6">
                <div className="text-5xl font-semibold mb-4">Frequently Asked Questions</div>
                <p>
                You can add any text you want here. This could be an introduction or
                any other content you&apos;d like to display in this section.
                </p>
            </div>
            {/* Right Panel */}
            <div className="bg-slate-900 p-6 rounded-xl w-full md:w-2/3">
                <div className="space-y-4">
                    <div className="text-lg font-semibold">FAQs</div>
                    <details className="bg-transparent border-b-1 border-b-gray-600 p-4 rounded-lg">
                        <summary className="cursor-pointer">How to generate a QR code using ORE Management?</summary>
                        <p className="mt-2">
                        You can log in to your account and change it from your Profile &gt; Edit Profile. Then go to the general tab to change
                        your email. You can apply a coupon on the cart page before order placement. The complete list of your unused and
                        valid coupons will be available under &quot;My Coupons&quot; tab of App/Website/M-site.
                        </p>
                    </details>
                    <details className="bg-transparent border-b-1 border-b-gray-600 p-4 rounded-lg">
                        <summary className="cursor-pointer">How do I change my account email?</summary>
                        <p className="mt-2">Details on how to change your account email.</p>
                    </details>
                    <details className="bg-transparent border-b-1 border-b-gray-600 p-4 rounded-lg">
                        <summary className="cursor-pointer">What is ORE Instant Refunds?</summary>
                        <p className="mt-2">Details on ORE Instant Refunds.</p>
                    </details>
                    <details className="bg-transparent border-b-1 border-b-gray-600 p-4 rounded-lg">
                        <summary className="cursor-pointer">How do I apply a coupon on my order?</summary>
                        <p className="mt-2">Details on how to apply a coupon on your order.</p>
                    </details>
                    <details className="bg-transparent border-b-1 border-b-gray-600 p-4 rounded-lg">
                        <summary className="cursor-pointer">How to generate a transfer code on ORE Explorer?</summary>
                        <p className="mt-2">Details on how to generate a transfer code on ORE Explorer.</p>
                    </details>
                </div>
            </div>
        </div>
        <div className="bg-slate-900 text-center rounded-xl mb-10 mx-20 flex justify-between py-4">
            <div className='text-left space-y-3 mx-10'>
                <p className='text-white text-2xl'>Still Have Questions?</p>
                <p className='text-gray-400 text-base'>Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.</p>
            </div>
            <button className="bg-purple-600 mx-10 hover:bg-purple-700 text-white py-2 px-4 rounded mt-4">
                Get In Touch
            </button>
        </div>
    </div>
  )
}

export default FAQs