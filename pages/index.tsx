import Head from 'next/head'
import Benefits from '../blocks/Benefits';
import Break from '../blocks/Break';
import Epilogue from '../blocks/Epilogue';
import Features from '../blocks/Features';
import Footer from '../blocks/Footer';
import Header from '../blocks/Header';
import Hero from '../blocks/Hero';
import Highlights from '../blocks/Highlights';
import * as Global from '../global/global.json';

const LOREM = `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type
  specimen book.
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>{Global.product}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        id="top"
        title={Global.product}
      />

      <main>
        <Hero
          title="Clear headline that explains your product’s benefit"
          subtitle="Explain your unique solution, how it solves your customer's problem."
          illustration=""
          subscribePlaceholder="you@email.com"
          subscribeAction="Join early access"
          subscribeUrl={Global.subscribeUrl}
        />

        <Benefits
          background="alternate"
          title="Benefits"
          subtitle="Explain your unique solution in short"
          benefits={[
            {illustration:'', title:'Some interesting title', text:LOREM},
            {illustration:'', title:'Some interesting title', text:LOREM},
            {illustration:'', title:'Some interesting title', text:LOREM},
          ]}
        />

        <Break
          title="Clear headline that explains your product’s benefit"
          subtitle="Explain your unique solution, how it solves your customer's problem."
          illustration=""
          action="Join early access"
          onActionClick={() => window.scrollTo({top:99999, behavior:'smooth'})}
        />

        <Highlights
          title="Highlights"
          subtitle="Explain your unique solution in short"
          highlights={[
            {illustration:'', title:'Some interesting title', text:LOREM},
            {illustration:'', title:'Some interesting title', text:LOREM},
            {illustration:'', title:'Some interesting title', text:LOREM},
          ]}
        />

        <Features
          background="alternate"
          title="Features"
          subtitle="Explain your unique solution in short"
          features={[
            {illustration:'', title:'Some interesting title', text:LOREM},
            {illustration:'', title:'Some interesting title', text:LOREM},
            {illustration:'', title:'Some interesting title', text:LOREM},
            {illustration:'', title:'Some interesting title', text:LOREM},
            {illustration:'', title:'Some interesting title', text:LOREM},
            {illustration:'', title:'Some interesting title', text:LOREM},
          ]}
        />

        <Epilogue
          title="Clear headline that explains your product’s benefit"
          subtitle="Explain your unique solution, how it solves your customer's problem."
          illustration=""
          subscribePlaceholder="you@email.com"
          subscribeAction="Join early access"
          subscribeUrl={Global.subscribeUrl}
        />
      </main>

      <Footer
        title={Global.product}
      />
    </div>
  )
}
