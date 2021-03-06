# Personal Blog

_Fully customizable blog template with a React.js front-end._

Deployed from [sanity.io/create](https://www.sanity.io/create/?template=sanity-io%2Fsanity-template-gatsby-blog).

## What you have

- A blazing fast blog with [Gatsby.js](https://gatsbyjs.org)
- Structured content using [Sanity.io](https://www.sanity.io)
- Global deployment on [Netlify](https://netlify.com)

## Quick start

1. Clone this repository
2. `npm install` in the project root folder on local
3. `npm run dev` to start the studio and frontend locally
   - Your studio should be running on [http://localhost:3333](http://localhost:3333)
   - Your frontend should be running on [http://localhost:8000](http://localhost:8000)
4. `npm run build` to build to production locally

## Enable real-time content preview on development

1. Go to your [project’s API settings on manage.sanity.io](https://manage.sanity.io/projects/0477rq5d/settings/api) and create a token with read rights.
2. Rename `.env.development.template` to `.env.development` and paste in the token: `SANITY_READ_TOKEN="yourTokenHere"`.
3. Restart the development server (`ctrl + C` and `npm run dev`).

If you want to turn off preview you can set `watchMode: false` in gatsby-config.js. If you just want to preview published changes you can set `overlayDrafts: false` in gatsby-config.js.

## Deploy changes

Netlify automatically deploys new changes commited to master on GitHub. If you want to change deployment branch, do so in [build & deploy settings on Netlify](https://www.netlify.com/docs/continuous-deployment/#branches-deploys).

## Stuck? Get help

[![Slack Community Button](https://slack.sanity.io/badge.svg)](https://slack.sanity.io/)

Join [Sanity’s developer community](https://slack.sanity.io) or ping us [on twitter](https://twitter.com/sanity_io).

### Local development

- You develop the templates in /template, and review your changes in /build.

- Install dependencies with `npm install` in the _root folder_. This will install the template development tool that watches changes in the /template folder and output the template to /build.

- Run `npm run dev` in _root folder_. This will build the template files to /build. This is how the code will look for those who install the project later.

- Run `npm install` in _./build/web_ and `sanity install` in _/build/studio_ This will install the necessary dependencies for the Gatsby frontend and the Studio.

- Run `npm run dev` in _./build/web_ and `sanity start` in _/build/studio_. This will start the development servers for the Gatsby frontend and Sanity Studio.

#### Notes

- When developing ProjectId and dataset name can be changed in template-values-development.json
- If you change anything in the _schema_, run `npm run graphql-deploy`
  - if you get an error about `dangerous something....` then run `sanity graphql deploy --force` inside the `studio` dir

#### TODOs

- Render rich text in front end
- Need to update site settings for SEO. See index page.
- Need to create small, reusable components such as image containers,
  - blog containters, buttons, etc
  - colors, design
