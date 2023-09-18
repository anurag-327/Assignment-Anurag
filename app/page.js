"use client"
import Navbar from '@/components/Navbar'
import TodoHeader from '@/components/TodoHeader'
import TodoSection from '@/components/TodoSection'
import Slider from '@/components/Slider'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-end min-h-screen bg-dark">
      <Navbar />
      <Slider />
      <div className='flex w-full :w-full md:w-[80%] flex-col gap-5 py-4'>
        <TodoHeader />
        <TodoSection />
      </div>
      <footer className='w-full mt-5 text-center text-white'>
        <span>Made with 💖 by <a className='text-white underline' href="https://www.github.com/anurag-327">anurag-327</a></span>
      </footer>
    </main>
  )
}
