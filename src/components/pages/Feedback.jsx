

const Feedback = () => {

   
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-4">Feedback for Dr. Awesh</h1>
        <form>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 text-lg">
              Your Name:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your name"
             
              
            />
          </div>
          <div className="mb-6">
            <label htmlFor="feedback" className="block text-gray-700 text-lg">
              Your Feedback:
            </label>
            <textarea
              id="feedback"
              name="feedback"
              rows="4"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Write your feedback here"
              
             
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-block px-6 py-3 text-lg font-semibold leading-6 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    );
};

export default Feedback;