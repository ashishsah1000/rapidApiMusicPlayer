# Snaps of the app
[Youtube private video for whole project](https://www.youtube.com/watch?v=g68H0WJOA2Q)
You can reffer to the whole walk through how the project look and feel like

- keycloak authentication
<img width="1350" alt="Screenshot 2022-11-22 at 1 54 25 AM" src="https://user-images.githubusercontent.com/24749090/203761832-94a43754-a92d-4404-9c92-b1c6ea0816a8.png">

- Home Screen
<img width="1352" alt="Screenshot 2022-11-24 at 1 47 01 PM-min" src="https://user-images.githubusercontent.com/24749090/203762035-f5b498a0-ebfb-4084-9872-15ef0ead3a71.png">

![Screenshot 2022-11-24 at 2 15 34 PM-min](https://user-images.githubusercontent.com/24749090/203762090-cbfa4692-497b-4ffc-b033-bd3434088560.png)

- search
<img width="1352" alt="Screenshot 2022-11-22 at 1 57 01 AM" src="https://user-images.githubusercontent.com/24749090/203762317-fa207597-feed-4e6a-a3b7-78a9b62caf2e.png">

- Like and not liked 
<img width="1352" alt="Screenshot 2022-11-24 at 1 49 22 PM-min" src="https://user-images.githubusercontent.com/24749090/203762419-2b31baef-3539-4643-b827-1618c6beb979.png">

<img width="1352" alt="Screenshot 2022-11-24 at 1 50 15 PM-min" src="https://user-images.githubusercontent.com/24749090/203762547-890d1726-5eba-45fb-9248-763480a947c1.png">

- Liked Songs at a place
<img width="1352" alt="Screenshot 2022-11-24 at 1 50 33 PM-min" src="https://user-images.githubusercontent.com/24749090/203762658-5e44238b-6fd1-48a5-b1ef-96197c32d7ce.png">

- Playlist : You cannot access playlist as you need to have premium membership
<img width="1352" alt="Screenshot 2022-11-24 at 1 50 46 PM-min" src="https://user-images.githubusercontent.com/24749090/203763365-fd2735ab-a8b2-4b6d-ba51-082a17991c74.png">

- Lets do Stripe payment to get that premium membership
<img width="1352" alt="Screenshot 2022-11-24 at 1 52 45 PM" src="https://user-images.githubusercontent.com/24749090/203763473-ae4349c0-64fe-40cf-95c2-9e4fd961e410.png">

- Got premium
<img width="1352" alt="Screenshot 2022-11-24 at 1 53 38 PM-min" src="https://user-images.githubusercontent.com/24749090/203763562-4bda6658-592a-4f1f-9bdb-1002fce51461.png">

- Now Playlist looks like this, lets add a new one 
<img width="1352" alt="Screenshot 2022-11-24 at 1 55 46 PM-min" src="https://user-images.githubusercontent.com/24749090/203763755-bd8aa2a9-49a8-4765-bc2d-2e75c9926bc9.png">

- Playlist added
<img width="1352" alt="Screenshot 2022-11-24 at 1 56 04 PM-min" src="https://user-images.githubusercontent.com/24749090/203764038-77566b6e-3695-4eb9-8dd4-ca7cff8ddee1.png">

- You can add specigfic song to specific playlist and add to playlist option is available 
<img width="1350" alt="Screenshot 2022-11-24 at 1 57 42 PM-min" src="https://user-images.githubusercontent.com/24749090/203764284-025c655a-2032-47d1-ade5-ceabd45c20c3.png">

- Check your playlist 
<img width="1352" alt="Screenshot 2022-11-24 at 1 58 47 PM-min" src="https://user-images.githubusercontent.com/24749090/203764384-fa7e77ae-5047-409f-a223-bdc04ef8f762.png">

- data is there stored util you logout()
- Even after closing the browser data of songs is not lost 
- Subscribers data is stored even if they log out, after they log in they will still have Premium membership! 

Tech Stack
React, Redux, Keycloak, bootstrap

## Setup 
 setup.md file is present please look at that for the setting up the enviroment or feel free to reach me out


 # overview things it does
 - clean UI search add delete songs
 -  like songs and get recommendations
 -  Premium : create multiple dynamic playlist and option to share
 -  uses redux for state managment
  


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
