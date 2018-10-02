## Happy Story Creator

This project is a social media kit for our Corporate Social Responsibility activities.

This is a React application built by parcel-bundler.

Currently, it has two main components:

• A `Blogging` component that keeps track of user-contributed posts. This component includes a thermometer visualization to track the overall hours.

• An `Instagram` (Photo Library) component that displays a gallery of volunteering pictures. It also has Proof-of-Concept code for fetching photos from instagram based on a public hashtag. Instagram needs to approve a development application for access to the `public` scope of the api.

### Blogging

The blogging component leverages the Zendesk Garden design system to keep the added UI accessible and on-brand.

It supports entries for a post-heading and post-content, and could potentially support user-uploaded images in the future.

These images could also appear on a modified version of the photo library.

### Partner spotlights

Pages could be created in the future to feature our various volunteering partners. These would display a small descriptive paragraph of the partner as well as a feed of images contributed by internal employees and Instagram posts with specific hashtags

### Running locally

To run this project locally you will need to have Node and npm installed. A version 8.11.1 or later is required.
This can be accomplished with `nvm` by running `nvm install 8.11.1; nvm use 8.11.1`

Once Node and npm are installed you need to install the app by running `npm install` in the root directory of this repo

To run this application you then need to run `PORT=1234; npm start` where `1234` can be any port you wish to run it on. Then you can visit `http://localhost:1234` or which ever port you picked to see the app

### Running on Heruko

To get this app running on heroku:
1. Install the heroku cli tools and setup your login: https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up
1. run `heroku create` in the root directory of this repo
1. run `git push heroku master`
1. run `heroku ps:scale web=1` to make sure at least one instance of the app is running
1. run `heroku open` to check that the app is running
