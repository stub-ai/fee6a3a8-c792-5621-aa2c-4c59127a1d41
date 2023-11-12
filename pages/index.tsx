import Image from 'next/image'
import Header from '../components/Header'
import Login from '../components/Login'

export default function Home() {
  return (
    <div className="bg-cover font-sans antialiased text-gray-900 leading-normal tracking-wider">
      <Header />
      <Login />
      <section id="about" className="max-w-4xl mx-auto pt-16 px-6 lg:px-0">
        <h2 className="mb-2 text-3xl font-bold">About Me</h2>
        <p className="mb-6">I&apos;m a DevOps Engineer with over 5 years of experience...</p>
      </section>
      <section id="portfolio" className="max-w-4xl mx-auto pt-16 px-6 lg:px-0">
        <h2 className="mb-2 text-3xl font-bold">Portfolio</h2>
        <p className="mb-6">Here are some of my projects...</p>
      </section>
      <section id="contact" className="max-w-4xl mx-auto py-16 px-6 lg:px-0">
        <h2 className="mb-2 text-3xl font-bold">Contact Me</h2>
        <p className="mb-6">You can reach me at...</p>
      </section>
    </div>
  )
}