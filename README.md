# Friend Finder

Friend Finder is an app to help you find a friend match based on a survey.

## About the Application

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

Install the following programs if they aren't on your local machine.

Node (LTS) - http://nodejs.org

GIT - https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

### Installing


Clone [this](http://github.com/crystalodi/FriendFinder) repository to a folder on your computer

```
git clone
```

Navigate to the directory `/FriendFinder`

```
cd FriendFinder
```

Install node packages needed to run the app.

```
npm install
```

Start the server and the app. 

```
npm start
```

Open a web browser and go to the url http://localhost:3000. Your screen should look like this:


### Folder Structure

After following the steps in the Installation section, your folder should look like this:

```
│   .gitignore
│   package-lock.json
│   package.json
│   README.md
│   server.js
│
├───app
│   ├───data
│   │       friends.js
│   │
│   ├───public
│   │       home.html
│   │       survey.html
│   │
│   └───routing
│           apiRoutes.js
│           htmlRoutes.js
│
└───node_modules
```

* `server.js` imports routes for serving static html files in `app/public` and `routing/apiRoutes.js` and `routing/htmlRoutes.js`. Also creates express server to listen on port 3000.

* `data/friends.js` contains array that will be used to store Friend Data used to display matches. Contains the following information: Friend Name, url to Photo of friend, and answers to how each survey question was answered.

* `public/home.html` Displays home page of application. Contains link to take the survey (`/survey`)

* `public/survey.html` Displays survey form used to submit responses to survey to the endpoint `/api/friends` as a `POST` request and show friend match in a modal pop up.

* `routing/apiRoutes.js` contains route for getting all friends in `data/friends.js`. The endpoint is `/api/friends` and the method is `GET`. Also contains route to find best matched based on how each question was answered and add Friend Name, url to photo of friend, and survey responses to array in `data/friends.js`. The endpoint is `/api/friends` and the method is `POST`.

* `routing/htmlRoutes.js` contains logic to send `public/home.html` and `public/survey.html` to display in browser as HTML files.

## How to Use

### Take Survey and Find your match

To take the survey, press the "Take Survey" Button on the home page

Fill out all of the fields on the survey page and press the "Submit Survey" button

A modal will appear showing the name and a picture of a friend that is the best match based on how each question was answered.


## Built With

* NodeJS - The web framework used
* Express - Dependency Management
* Bootstrap - CSS Framework for layout

## Authors

* **Crystal Odi** - *Initial work* - [crystalodi](https://github.com/crystalodi)


## Acknowledgments

* Express Documentation
