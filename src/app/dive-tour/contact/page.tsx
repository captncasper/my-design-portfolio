export default function ContactPage() {
  return (
    <div className="grid md:grid-cols-2 gap-16">
      <div>
        <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="text-lg mb-8">
          Have questions about our tours, courses, or gear? We'd love to hear from you. Fill out the form, and we'll get back to you as soon as possible.
        </p>
        <div className="space-y-4">
          <p><strong>Address:</strong> 123 Ocean Drive, Shellharbour, NSW</p>
          <p><strong>Phone:</strong> (02) 1234 5678</p>
          <p><strong>Email:</strong> info@shellharbourdivetours.com</p>
        </div>
      </div>
      <div>
        <form className="bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" rows={5} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
