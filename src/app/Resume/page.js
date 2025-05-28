'use client';

export default function Resume() {
  return (
    <div className="min-h-screen  text-white p-6 pt-15 flex flex-col items-center space-y-6">
      <h1 className="text-4xl font-bold">My Resume</h1>

      <iframe
        src="/RushiMhaskeResume.pdf"
        title="Rushikesh Mhaske Resume"
        className="w-full max-w-4xl h-140 border-2 border-white rounded-md"
      />
    </div>
  );
}
