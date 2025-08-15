"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mrbldpjj", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setStatus("Thank you for your message!");
        form.reset();
      } else {
        const result = await response.json();
        if (result.errors) {
          setStatus(result.errors.map((error: any) => error.message).join(", "));
        } else {
          setStatus("Oops! There was an error.");
        }
      }
    } catch (error) {
      setStatus("Oops! There was a network error.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-amber-500 focus:ring-0 text-white"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-amber-500 focus:ring-0 text-white"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-amber-500 focus:ring-0 text-white"
        />
      </div>
      <div>
        <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-300">
          Tell me about your project
        </label>
        <textarea
          id="projectDetails"
          name="projectDetails"
          rows={4}
          required
          className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-amber-500 focus:ring-0 text-white"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 px-6 bg-amber-400 text-gray-900 rounded-md font-bold hover:bg-amber-500 transition-colors"
      >
        Send Request
      </button>
      {status && (
        <p className={`mt-4 text-center ${status.includes("error") ? "text-red-400" : "text-green-400"}`}>
          {status}
        </p>
      )}
    </form>
  );
}
