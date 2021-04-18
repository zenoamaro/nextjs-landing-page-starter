import Head from 'next/head'
import Benefits from '../blocks/Benefits';
import Break from '../blocks/Break';
import Epilogue from '../blocks/Epilogue';
import Features from '../blocks/Features';
import Footer from '../blocks/Footer';
import Header from '../blocks/Header';
import Hero from '../blocks/Hero';
import Highlights from '../blocks/Highlights';
import Notice from '../components/Notice';
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

      <Notice id="subscribed">Thank you for subscribing</Notice>
      <Header id="top" title={Global.product}/>

      <main>
        <Hero
          title="Clear headline that explains your product’s benefit"
          subtitle="Explain your unique solution, how it solves your customer's problem."
          illustration=""
          subscribePlaceholder="you@email.com"
          subscribeAction="When is it ready?"
        />

        <Benefits
          background="alternate"
          title="Headline that describes how your product solves the problem"
          subtitle="Start by defining the pain your customer has right now, for example: clients not paying their invoices. Then write how your solution solves this problem for your customers."
          benefits={[
            {illustration:'', title:'Main benefit of your product', text:'Brief explanation of why and how this benefit will help your customers'},
            {illustration:'', title:'Main benefit of your product', text:'Brief explanation of why and how this benefit will help your customers'},
            {illustration:'', title:'Main benefit of your product', text:'Brief explanation of why and how this benefit will help your customers'},
          ]}
        />

        <Break
          title="Risk Reduction: Try Product free for 14 days"
          subtitle="This is an in-betwen CTA for visitors that already got convinced."
          illustration=""
          action="When is it ready?"
          onActionClick={() => window.scrollTo({top:99999, behavior:'smooth'})}
        />

        <Highlights
          title="Highlights of your product"
          subtitle="Explain why your solution deserves attention"
          highlights={[
            {illustration:'', title:'Now go deeper into what your product offers. Word it as benefits, not as features', text:'“Save your favorite links” is a feature. “Never lose your favorite websites again” is a benefit. Users don’t care about your product, they only care about what’s in it for them.'},
            {illustration:'', title:'Now go deeper into what your product offers. Word it as benefits, not as features', text:'“Save your favorite links” is a feature. “Never lose your favorite websites again” is a benefit. Users don’t care about your product, they only care about what’s in it for them.'},
            {illustration:'', title:'Now go deeper into what your product offers. Word it as benefits, not as features', text:'“Save your favorite links” is a feature. “Never lose your favorite websites again” is a benefit. Users don’t care about your product, they only care about what’s in it for them.'},
          ]}
        />

        <Features
          background="alternate"
          title="But wait, there is more"
          subtitle="Describe the full extent of your product"
          features={[
            {illustration:'', title:'Product feature', text:'Brief explanation of why and how this feature will help your customers'},
            {illustration:'', title:'Product feature', text:'Brief explanation of why and how this feature will help your customers'},
            {illustration:'', title:'Product feature', text:'Brief explanation of why and how this feature will help your customers'},
            {illustration:'', title:'Product feature', text:'Brief explanation of why and how this feature will help your customers'},
            {illustration:'', title:'Product feature', text:'Brief explanation of why and how this feature will help your customers'},
            {illustration:'', title:'Product feature', text:'Brief explanation of why and how this feature will help your customers'},
          ]}
        />

        <Epilogue
          title="Ask if your visitor wants to solve problem X today"
          subtitle="Explain how your solution will solve this problem and ask them to start a free trial, or any other low-key CTA they could take"
          illustration=""
          subscribePlaceholder="you@email.com"
          subscribeAction="When is it ready?"
        />
      </main>

      <Footer
        title={Global.product}
      />
    </div>
  )
}
