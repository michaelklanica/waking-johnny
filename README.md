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
- A temporary original, generated hero background of defocused orange-magenta
  concert light. The supplied logo file remains intact; a reversible CSS
  treatment lets the background show through its dark areas.
- Selected public YouTube and Facebook live recordings, plus an archived
  SoundCloud track, loaded on demand.
- Placeholder upcoming-show content until real listings and an update process
  are available.
- A lineup section with names and roles, without individual biographies.
- A contact form with name, email, and message fields.
- The public contact address, `wakingjohnnymgt@gmail.com`.
- Facebook, Instagram, YouTube, and SoundCloud links.

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
- Do not introduce frameworks, package managers, build tools, or installed
  dependencies. Platform-hosted media players load only after a visitor chooses
  to open them.
- Keep the core content usable without JavaScript and use scripts only for
  focused enhancements.
- Build responsive layouts directly in CSS and serve all source files as static
  assets.

## Deferred decisions

- Replacing the temporary hero background with a high-resolution original of
  the preferred July 18 Instagram image, once available and cleared for use.
- Whether to feature additional public social posts or recordings.
- Whether to replace the current email-app handoff with a hosted contact form.
- The long-term method for maintaining upcoming-show information.

## Development workflow

Edit `index.html`, `assets/css/styles.css`, and `assets/js/main.js` directly.
Preview the site in a browser or with a simple local static-file server; no
installation or build step is required. Test changes across common viewport
sizes and verify content, accessibility, embeds, form fields, and external
links before publishing.
