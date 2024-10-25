
function SpeakerSuggestionForm() {
  return (
    <div className="flex flex-col items-center p-8  bg-gray-900 min-h-screen text-white">
    <h1 className="text-4xl font-bold mb-8 text-center">
      Speaker <span className="text-yellow-300">Suggestion</span>
    </h1>

    <form action="#" className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg space-y-6 text-gray-800">
      
      {/* Name Field */}
      <div className="flex flex-col">
        <label htmlFor="name" className="text-lg font-semibold">Enter your name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Email Field */}
      <div className="flex flex-col">
        <label htmlFor="email" className="text-lg font-semibold">Enter your email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Phone Field */}
      <div className="flex flex-col">
        <label htmlFor="phone" className="text-lg font-semibold">Enter your phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter your phone"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Speaker Name Field */}
      <div className="flex flex-col">
        <label htmlFor="sname" className="text-lg font-semibold">Enter speaker name</label>
        <input
          type="text"
          id="sname"
          name="sname"
          placeholder="Enter speaker name"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Speaker Detail Field */}
      <div className="flex flex-col">
        <label htmlFor="sdetail" className="text-lg font-semibold">Enter speaker detail</label>
        <textarea
          id="sdetail"
          name="sdetail"
          placeholder="Enter speaker detail"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          rows="4"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-md transition duration-300 transform hover:scale-105"
      >
        Submit
      </button>
    </form>
  </div>
  )
}

export default SpeakerSuggestionForm