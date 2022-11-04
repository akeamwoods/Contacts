# Contacts

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
These packages are used to add a pre-commit hook which checks code quality before it is committed to the codebase.

### Animation
This project uses framer-motion for animation https://github.com/framer/motion

### State
I've used Zustand in this project instead of Redux. I've heard good things about Zustand so thought I would give it a try as an alternative to Redux (which I have used exstensively in the past)

### Notes
+ I've wrote the components to be clean and reusable. E.g. the table component takes data and column properties, thus making it reusable elsewhere.
