
import '../app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

export default function About() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="relative before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 style={{ fontSize: "xxx-large" }}>About Us</h1>
        <p >
          Minicode systems was established in 2012,&nbsp;
          <code className="font-mono font-bold">founded by Indian IT professionals.</code>
        </p>
      </div>
      <div style={{display:'flex', flexDirection:'row', justifyContent: "space-between"}}>
        <div id="cardsContainer"  style={{width: "100%",display: "inline-flex"}}>
          <p className='cards'>
              Our History
          </p>
          <p className='cards'>
              <span className='mission-heading'>
              Our Mission
              </span>
              <span className='mission'>
              Is to bring offline markets online,
              by building device, business, people
              friendly applications over the internet. 
              </span>
             
          </p>
          <p className='cards'>
              Our Vision
          </p>
        </div>
        
      </div>
    </main>
  )
}