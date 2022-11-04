# Contacts
<img width="1440" alt="Screenshot 2022-11-04 at 16 17 46" src="https://user-images.githubusercontent.com/19963177/200024867-fd6fa5d8-8657-47a4-aaa0-cb8320b3908a.png">

## How to run
+ Clone the repo
+ Install locally using 'yarn'
+ Begin dev server using 'yarn server'
+ Begin frontend using 'yarn dev'

## About the project
+ This project was scaffolded using Vite https://vitejs.dev/

### Code Quality
To protect code quality, this project uses the following packages:
+ Husky 
+ ESLint 
+ Prettier
+ Lint-staged

These packages are used to add a pre-commit hook which checks code quality before it is committed to the codebase. E.g:

<img width="309" alt="Screenshot 2022-11-04 at 16 14 32" src="https://user-images.githubusercontent.com/19963177/200024248-8de4e460-4543-4b24-ac15-88c6d4f9d480.png">


### Local Dev Server
I have setup a local dev server using http-server to server the contacts.json to the frontend. **This means you need to run the 'server' script from the package.json file in order for the data to be served to the frontend**. The reason i've done this is that I wanted to show how I would handle fetching data from an api rather than just importing the json.

### Form Handling
I've used react-hook-form https://react-hook-form.com/ for the new contact form handling. This package is a nice hook-based alternative to other packages such as formik. Below is an example of the validation:
<img width="616" alt="Screenshot 2022-11-04 at 16 30 06" src="https://user-images.githubusercontent.com/19963177/200027232-de124571-d656-4a10-b23e-957e4a5ffec8.png">


### Animation
This project uses framer-motion for animation https://github.com/framer/motion

### State
I've used Zustand https://github.com/pmndrs/zustand in this project instead of Redux. I've heard good things about Zustand so thought I would give it a try as an alternative to Redux (which I have used exstensively in the past)

### Table
react-table https://www.npmjs.com/package/react-table is the package i used for handling the table component. I've implemented header sorting, e.g.:

<img width="1383" alt="Screenshot 2022-11-04 at 16 34 48" src="https://user-images.githubusercontent.com/19963177/200028277-602e2805-1444-4e27-bbc3-0b99e62a51df.png">


### Notes
+ I've wrote the components to be clean and reusable. E.g. the table component takes data and column properties, thus making it reusable elsewhere
+ The UI isn't super polished as the brief said to only spend 90 minutes. For an example of a more polished look, checkout this other tech test I did recently https://github.com/akeamwoods/Launches2022
