# Playwright_VRT
Visual regression testing framework set up using playwright and a dummy react app. Also will snapshot text

# Prerequisites

- Node (LTS)

# Quick start installation

Clone the project and run the below

`npm install`

`cd my-app`

`npm install`

You may have to run `npx install playwright` too.

# How to run the visual tests

First we need to launch the react application to do this run the below within the terminal

`cd my-app`

`npm run start`

This should then launch the app on 

`http://localhost:3000/`

Once this is open another terminal and ensure you are at the root of the project and run the below

`npx playwright test`

If there is no snapshots to check against the tests will fail and capture a screenshot.
If you need to update the screenshots you can run the following, this is recommended the first time the repo is cloned

`npx playwright test --update-snapshots`
