import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rushikesh Mhaske | Full Stack Developer</title>
      </Head>
      <main className="p-10">
        <h1 className="text-4xl font-bold">Hi, I'm Rushikesh 👋</h1>
        <p className="mt-4 text-lg">
          Full Stack Developer | React.js, REST APIs, SQL, Node.js
        </p>
        <p className="mt-2 text-md max-w-xl">
          I specialize in building scalable, responsive web applications using modern JavaScript frameworks.
        </p>

        <div className="mt-6 flex gap-4">
          <a href="/resume/rushi_resume.pdf" download className="btn-primary">Download Resume</a>
          <Link href="/projects" className="btn-secondary">View Projects</Link>
        </div>
      </main>
    </>
  );
}
