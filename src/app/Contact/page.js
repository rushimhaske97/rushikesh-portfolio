'use client';

export default function Contact() {
  const inputStyle =
    'w-full bg-transparent border-b-2 border-white placeholder-gray-300 text-white py-2 focus:outline-none focus:border-blue-400';

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        action="https://formsubmit.co/rushikeshmhaske0197@gmail.com"
        method="POST"
        className="space-y-8 w-full max-w-xl text-white"
      >
        <h1 className="text-4xl font-bold text-center">Contact Me</h1>

        <input type="text" name="name" placeholder="Your Name" required className={inputStyle} />
        <input type="email" name="email" placeholder="Your Email" required className={inputStyle} />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className={`${inputStyle} h-32 resize-none`}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-lg font-semibold shadow-lg transition"
        >
          Send Message 🚀
        </button>
      </form>
    </div>
  );
}
