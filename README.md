# Waking Johnny Website

## Project overview

The Waking Johnny website will be a streamlined, responsive, single-page
introduction to a loud, urgent, and stylistically varied rock band from San
Antonio.

The site should feel strange and theatrical while retaining serious, raw
elements. Its visual language should be gritty, analog, and slightly worn
without appearing amateurish or excessively chaotic.

## Audience and goals

The primary audiences are:

- People discovering the band after seeing Waking Johnny perform live.
- Venues and promoters considering the band for a show.

The site should quickly establish the band's identity, demonstrate its live
energy, surface upcoming performances, introduce the lineup, and make it easy
to contact or follow the band.

## Initial scope

- One responsive static page.
- Selected public Facebook live recordings or embeds.
- Placeholder upcoming-show content until real listings and an update process
  are available.
- A lineup section with names and roles, without individual biographies.
- A contact form with name, email, and message fields.
- The planned public email address, `contact@wakingjohnny.com`.
- Facebook and Instagram links.

## Content structure

The initial page order is:

1. Hero
2. Band introduction
3. Live media
4. Upcoming shows
5. Band lineup
6. Contact and social links

The lineup is:

- Garland — Vocals/Guitar
- Evan — Baritone Guitar
- Mike — Bass
- Chris — Drums

Sections should remain distinct and modular so they can become separate pages
later if the site grows.

## Technical approach

- Use semantic HTML, plain CSS, and minimal vanilla JavaScript.
- Do not introduce frameworks, package managers, build tools, or third-party
  dependencies.
- Keep the core content usable without JavaScript and use scripts only for
  focused enhancements.
- Build responsive layouts directly in CSS and serve all source files as static
  assets.

## Deferred decisions

- Final hero layout and the amount of photography, pending review of available
  images.
- How to obtain and prepare the existing logo, which is currently available
  only through social media.
- The final selection and presentation of public Facebook recordings.
- The long-term method for maintaining upcoming-show information.

## Development workflow

Edit `index.html`, `assets/css/styles.css`, and `assets/js/main.js` directly.
Preview the site in a browser or with a simple local static-file server; no
installation or build step is required. Test changes across common viewport
sizes and verify content, accessibility, embeds, form fields, and external
links before publishing.
