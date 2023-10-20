
import '../app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

export default function About() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="relative before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 style={{ fontSize: "xxx-large" }}>Contact Us</h1>
        <p >
          For any query or to discuss about any project,&nbsp;
          <code className="font-mono font-bold">Let&aposs talk.</code>
        </p>
      </div>
      <div style={{display:'flex', flexDirection:'row', justifyContent: "space-between"}}>
        <div  id='content' style={{width:'50%'}}>
        <p style={{}}>
          <label htmlFor="name">Name</label>
          <input id='name' type='text' placeholder='Full Name' />
        </p>
        <p>
        <label htmlFor="email">Email</label>
          <input id="email" type='email' placeholder='Email' onClick={()=>{
            //router.push('/about', { scroll: false });
          }}/>
        </p>
        <p>
        <label htmlFor="phoneNumber">Mobile #</label>
        <input id="phoneNumber" type='number' placeholder='Contact Number'/>
        </p>
        <p>
        <label htmlFor="que">Question(s):</label>
        <textarea id='que' rows={4} cols={50}/>
        </p>
        </div>
        <section>
        <p>
            @ facebook
            @ linkden
        </p>
        </section>
      </div>
    </main>
  )
}