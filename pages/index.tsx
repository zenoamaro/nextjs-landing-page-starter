import Head from 'next/head'
import Benefits from '../blocks/Benefits';
import Break from '../blocks/Break';
import Epilogue from '../blocks/Epilogue';
import Features from '../blocks/Features';
import Footer from '../blocks/Footer';
import Header from '../blocks/Header';
import Hero from '../blocks/Hero';
import Highlights from '../blocks/Highlights';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main>
        <Hero
          title="Clear headline that explains your product’s benefit"
          subtitle="Explain your unique solution, how it solves your customer's problem."
          illustration=""
        />

        <Benefits
          background="alternate"
          title="Benefits"
          subtitle="Explain your unique solution in short"
          benefits={[
            {illustration:'', title:'Title', text:'Text'},
            {illustration:'', title:'Title', text:'Text'},
            {illustration:'', title:'Title', text:'Text'},
          ]}
        />

        <Break
          title="Clear headline that explains your product’s benefit"
          subtitle="Explain your unique solution, how it solves your customer's problem."
          illustration=""
        />

        <Highlights
          title="Highlights"
          subtitle="Explain your unique solution in short"
          highlights={[
            {illustration:'', title:'Title', text:'Text'},
            {illustration:'', title:'Title', text:'Text'},
            {illustration:'', title:'Title', text:'Text'},
          ]}
        />

        <Features
          background="alternate"
          title="Features"
          subtitle="Explain your unique solution in short"
          features={[
            {illustration:'', title:'Title', text:'Text'},
            {illustration:'', title:'Title', text:'Text'},
            {illustration:'', title:'Title', text:'Text'},
            {illustration:'', title:'Title', text:'Text'},
            {illustration:'', title:'Title', text:'Text'},
            {illustration:'', title:'Title', text:'Text'},
          ]}
        />

        <Epilogue
          title="Clear headline that explains your product’s benefit"
          subtitle="Explain your unique solution, how it solves your customer's problem."
          illustration=""
        />
      </main>

      <Footer/>
    </div>
  )
}
