# NoCFO product documentation

This documentation is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```console
npm install
```

## Local Development

```console
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
# Log into AWS using NoCFO credentials
aws sso login --profile nocfo

# Trigger manual deployment
npm run deploy
```
