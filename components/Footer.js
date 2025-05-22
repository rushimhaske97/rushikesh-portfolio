export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-12">
      <div className="max-w-7xl mx-auto text-center text-sm">
        © {new Date().getFullYear()} Rushikesh Mhaske. Built with React & Next.js.
      </div>
    </footer>
  );
}
