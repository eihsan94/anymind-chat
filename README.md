# Getting Started with Anymind Chat App 🗣

Hello, I am Ihsan and I am glad that you guys gave me the opportunities to develop the test app. I learned a lot especially regarding the folder structure of DDD because my background usually around small to medium web app and DDD take towards the project is really intriguing. Without further ado here are the Project Details

  

## Demo

you can check the Demo that was CI/CD configured with vercel here [Demo ![Demo in Vercel](https://avatars.githubusercontent.com/u/14985020?s=20&v=4) ](https://anymind-chat.vercel.app/)

  
  

## Introduction

This project was created with below specs

<pre>
	Bootstrapped with: Create React App
	State management library: react context & hooks & graphql cache
	api library: apollo client
    css library: emotion/styled components
    test library: cypress
    dir config library: craco 
</pre>

## SETUP

1. In root folder Change the env.local to .env and set the followings env variables

```

REACT_APP_GQL_ENDPOINT=<your-app-endpoint>

```

  

## Available Scripts

  

In the project directory, you can run:

  

### `yarn start`

  

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  

The page will reload if you make edits.\

You will also see any lint errors in the console.

  

### `yarn test`

  

Launches the cypress test runner in the interactive watch mode.\

In this anymind chat repo I am using Cypress for e2e testing and you can refer this [file]() if you want to see the test source code

  

### `yarn open-test`

If you want to see the test results in details run `yarn open-test` instead

  

### `yarn build`

  

Builds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

  

The build is minified and the filenames include the hashes.\

  
  

### `yarn eject`

  

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

  

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

  

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

  

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

  
  
  

## 🗄️ Project Structure

  

The root folder structures is as follows:

  

```sh

src

|

+-- assets # assets folder can contain all the static files such as images, fonts, etc.

|

+-- components # shared components used across the entire application

|

+-- config # all the global configuration, env variables etc. get exported from here and used in the app

|

+-- features # feature based modules

|

+-- hooks # shared hooks used across the entire application

|

+-- mock # mock data

|

+-- providers # all of the application providers

|

+-- styles # the global style

|

+-- utils # shared utility functions

```

  

Most of the code lives in the `src` folder and looks like this:

  

```sh

src

|

+-- assets # assets folder can contain all the static files such as images, fonts, etc.

|

+-- components # shared components used across the entire application

|

+-- config # all the global configuration, env variables etc. get exported from here and used in the app

|

+-- features # feature based modules

|

+-- hooks # shared hooks used across the entire application

|

+-- mock # mock data

|

+-- providers # all of the application providers

|

+-- styles # the global style

|

+-- utils # shared utility functions

```

  

In order to scale the application in the easiest and most maintainable way, keep most of the code inside the `features` folder, which should contain different feature-based things. Every `feature` folder should contain domain specific code for a given feature. This will allow you to keep functionalities scoped to a feature and not mix its declarations with shared things. This is much easier to maintain than a flat folder structure with many files.

  

A feature could have the following structure:

  

```sh

src/features/awesome-feature

|

+-- api # exported API request declarations and api hooks related to a specific feature

|

+-- assets # assets folder can contain all the static files for a specific feature

|

+-- components # components scoped to a specific feature

|

+-- hooks # hooks scoped to a specific feature

|

+-- routes # route components for a specific feature pages

|

+-- stores # state stores for a specific feature

|

+-- types # typescript types for TS specific feature domain

|

+-- utils # utility functions for a specific feature

|

+-- index.ts # entry point for the feature, it should serve as the public API of the given feature and exports everything that should be used outside the feature

```

  

A feature folder could also contain other features (if used only within the parent feature) or be kept separated, it's a matter of preference.

  

Everything from a feature should be exported from the `index.ts` file which behaves as the public API of the feature.

## 🛠 Things that can be improve

- The e2e tests that are being written does cover the core feature, and some of the advance test need to be done in the future. 

- Unit testing is also needed when working with big team so that the deployment flow will be less prone to breaking bugs and become more streamline

- For Ui design there is a lot of stuff that can be improved
- 
	+-- Responsive design: Currently the design that is being given to me does not covers fluid and responsive design.
	
	+-- The contrast could use some improvement. 
![](https://i.ibb.co/VWwvC6g/Screen-Shot-2022-05-14-at-10-47-49.png)

	+-- The whitespace could use some improvement. 
![](https://i.ibb.co/bHvSzXm/Screen-Shot-2022-05-14-at-10-20-47.png)

	+-- The app reset time should be timezone compliant so that the user will not be confused. 
	
	+-- The sidenav should have minimize and maximize button to minimize and maximize the sidenav
	
	+-- The read more	button should be removed user should get the previous and latest message by virtual scrolling or scroll to update

