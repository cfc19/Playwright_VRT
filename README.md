# Playwright_VRT
Visual regression testing framework set up using playwright and a dummy react app.

# Quick start installation

Clone the project and run the below

`npm install`

You may have to run `npx install playwright` too.

# How to run the visual tests


First we need to launch the react application to do this run the below within the terminal

`cd my-app`

`npm run start`

This should launch the app on 

`http://localhost:3000/`

Once this is open another terminal and ensure you are at the root of the project and run the below

`npx playwright test`

If there is no snapshots to check against the tests will fail and capture a screenshot.
If you need to update the screenshots you can run the following

`npx playwright test --update-snapshots`
