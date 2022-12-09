# React Summery for HackerU Class 🧑‍🎓👩‍🎓
<img src="./public/favicon.ico" alt="react logo" style="width:80px;"/>

## The purpose 🎯
 The project's goal is to help others understand React's main concepts.
## How to navigate in the file system 🗃️
Inside `./src`, you can find the `"main-concepts"` directory. 
Inside the directory, you can find the files containing the code for the components that demonstrates the subject.

## How to edit the main page ✏️
After `npm start`, you will see the home page containing titles and components. You can modify the home page inside the `App .jsx` inside the `./src` directory.

## How to find the component name to render 🔎
1. Chose the file inside `main-concepts`
2. The default export is the function component. The name of the component is at the bottom
``` javascript
export default WelcomeFunction
```
The class component is not the default, so near the class declaration, you can find the `export` declaration, and the `class name` is the name of the component
``` javascript
export class ClockClass extends React.Component 
```


## Available Scripts ✅

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

