# Oh Studio SPA and 24game Apps

This repository use turborepo as a build system including frontend projects using React TyptScript to imitate Oh studio project from https://www.frontendpractice.com/projects/oh-studio and simple 24 game created using Express.js

## Oh Studio Web App

![Demo](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWJ1dGRicm5hY2dja3g4M3o0bGt6ZWMwZWZuMmVieHI2bHo5djcwZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/senXApyYpQWRnvZyaD/giphy.gif)

## 24 game

<img src="https://i.ibb.co/6yqdXKc/24game-postman.png" width="50%">

### How to play

1. Send Get request to http://localhost:<API_PORT>/cheat24?number=<4 number>
2. You will get array of all possible solutions as Json

## Set up Project
1. Clone this project
2. Install dependencies using `pnpm install`
3. Create .env file for database package including your DATABASE_URL and API_PORT
4. Run projects `pnpm run dev`
