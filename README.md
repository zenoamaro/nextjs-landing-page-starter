Next.js Landing Page Starter Kit
===
[Live demo](https://nextjs-landing-page-starter.vercel.app)


## Usage

Clone the project and install dependencies:

```sh
npm install
yarn
```

Start the local development server:

```sh
npm run dev
yarn dev
```

Build for deployment to [Vercel](https://vercel.com):

```sh
npm run build
yarn build
```

Export a static HTML version:

```sh
npm run export
yarn export
```

Deploy by pushing to [Github](https://github.com), and importing the project into [Vercel](https://vercel.com).


## Configuration

The project is based on [Next.js](https://nextjs.org) so it's helpful to have the [documentation](https://nextjs.org/docs/getting-started) around.

Define your pages in the [`pages` directory](/blob/main/pages).

Configure the app and theme by editing [`global.css`](/blob/main/global/global.css)
and [`global.json`](/blob/main/global/global.json).

Configure Mailchimp by creating a `.env.local` file:

```env
MAILCHIMP_DC=us1
MAILCHIMP_LIST_ID=xxxxxx
MAILCHIMP_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxx-us1
```
