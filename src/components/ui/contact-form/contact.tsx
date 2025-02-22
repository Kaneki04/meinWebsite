'use client';

export default function ContactForm() {
  return (
    <form className="space-y-6">
      <h2 className=" text-2xl font-medium">Contact Me</h2>
      <div className="space-y-4">
        <input 
          placeholder="Your Email" 
          type="email" 
          className="bg-gray-800 border-2 border-gray-600  placeholder:text-gray-400 p-3 rounded-lg w-full"
        />
        <input 
          placeholder="Your Name" 
          type="text" 
          className="bg-gray-800 border-2 border-gray-600  placeholder:text-gray-400 p-3 rounded-lg w-full"
        />
        <textarea 
          placeholder="Your Message" 
          className="bg-gray-800 border-2 border-gray-600  placeholder:text-gray-400 p-3 rounded-lg w-full min-h-[120px]"
        />
        <button className="w-full bg-black  p-3 rounded-lg transition-transform transform hover:scale-105 hover:bg-gray-800">
        Send
        </button>

      </div>
    </form>
  );
}
