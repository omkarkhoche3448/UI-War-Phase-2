
const UpcomingEvents = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-r from-purple-600 to-teal-400 text-whit e">
      <h2 className="text-3xl font-bold mb-6 animate-fadeInDown">Upcoming Events</h2>
      
      <div className="w-full max-w-xl flex flex-row justify-center items-center p-8 rounded-lg shadow-lg overflow-hidden bg-white text-gray-900 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        
        <img 
          src="https://iste-pccoe.netlify.app/static/media/ui-wars.847e0b5027a990c702c8.jpeg" 
          alt="UI Wars" 
          className="w-full h-52 object-cover transition-transform duration-300 transform hover:scale-110 rounded-lg p-3"
        />
        
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-semibold">UI Wars</h3>
          <p className="text-gray-600">
            Unleash Your Design Skills in UI Wars – Where Creativity Meets Code in the Ultimate Frontend Showdown!
          </p>
          
          <div className="flex justify-between mt-4">
            <a href="events/Debate" className="w-full mr-2">
              <button className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded transition-colors duration-300">
                About Event
              </button>
            </a>
            
            <a 
              href="https://forms.gle/JfsuewjtXq8S5qau7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full ml-2"
            >
              <button className="w-full py-2 px-4 bg-teal-500 hover:bg-teal-600 text-white rounded transition-colors duration-300">
                Register
              </button>
            </a>
          </div>
        </div>


      </div>
    </div>
  );
};

export default UpcomingEvents;
