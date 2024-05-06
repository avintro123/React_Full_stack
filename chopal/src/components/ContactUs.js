import React from 'react';

export default function ContactUs() {

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the default form submission behavior

        // Constructing the Gmail compose email URL
        const subject = encodeURIComponent('Regarding Contact Us');
        const body = encodeURIComponent('Type your message here');
        const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=&su=${subject}&body=${body}`;

        // Redirecting the user to Gmail
        window.location.href = gmailUrl;
    }

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-white text-3xl font-bold mt-8 mb-4">Contact Us</h1>
            <div className="bg-gray-800 rounded-lg p-8">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-white mb-2">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your name" className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:bg-gray-600" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-white mb-2">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your email" className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:bg-gray-600" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-white mb-2">Message</label>
                        <textarea id="message" name="message" rows="4" placeholder="Your message" className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:bg-gray-600"></textarea>
                    </div>
                    <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Send</button>
                </form>
            </div>
        </div>
    );
}
