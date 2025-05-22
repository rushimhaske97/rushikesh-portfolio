// pages/contact.js
export default function Contact() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <form action="https://formsubmit.co/your-email@gmail.com" method="POST" className="space-y-4 max-w-md">
        <input type="text" name="name" placeholder="Your Name" required className="input" />
        <input type="email" name="email" placeholder="Your Email" required className="input" />
        <textarea name="message" placeholder="Message" required className="input h-32" />
        <button type="submit" className="btn-primary">Send</button>
      </form>
    </div>
  );
}
