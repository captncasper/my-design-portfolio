"use client";

import { useState } from 'react';

// Mock data for availability. In a real app, this would come from a database.
const availability: { [key: string]: string } = {
  '10': 'Available',
  '11': 'Available',
  '12': 'Fully Booked',
  '17': 'Available',
  '18': 'Available',
  '19': 'Available',
  '25': 'Fully Booked',
  '26': 'Available',
};

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-12">Book Your Dive</h1>
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Select a Date</h2>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="text-center font-bold mb-4">October 2025</div>
            <div className="grid grid-cols-7 gap-2 text-center">
              {daysInMonth.map((day) => {
                const status = availability[day] || 'Unavailable';
                return (
                  <button
                    key={day}
                    onClick={() => setSelectedDate(day)}
                    disabled={status !== 'Available'}
                    className={`p-2 rounded-full transition-colors ${
                      selectedDate === day ? 'bg-blue-600 text-white' : ''
                    } ${
                      status === 'Available' ? 'bg-green-100 hover:bg-green-200' : ''
                    } ${
                      status === 'Fully Booked' ? 'bg-red-100 text-gray-400 cursor-not-allowed' : ''
                    } ${
                      status === 'Unavailable' ? 'text-gray-300 cursor-not-allowed' : ''
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Booking Details</h2>
          {selectedDate ? (
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Booking for: October {selectedDate}, 2025</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="divers" className="block text-sm font-medium text-gray-700">Number of Divers</label>
                  <select id="divers" name="divers" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600">
                  Request Booking
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-lg text-center text-gray-500">
              <p>Please select an available date from the calendar to begin your booking.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
