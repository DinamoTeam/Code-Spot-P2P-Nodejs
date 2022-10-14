# [Code-Spot](https://code-spot.net/)

## A real-time collaborative code editor with the power of Visual Studio Code. 

![](./images/HomeScreen.png)
![](./images/EditorScreen.png)
![](./images/ChangeName.png)

## **I. Check it out [here](https://code-spot.net/)!**
We also published an article on building a real-time collaborative code editor. Check it out [here](https://medium.com/@dinamoteam01/building-a-real-time-collaborative-code-editor-cb842975652f)!

## **II. Development setup**

1. Make sure you have Node.js and npm installed: https://nodejs.org/en/ (npm comes with Node.js)

2. Go to `.\code-spot-client\src\environments\environment.ts` and change `apiUrl` to `http://localhost:5000/api/`

3. Open a terminal to install server dependencies and start server
```shell
cd ./server
npm install
npm run start
```

4. Open another terminal to install client dependencies and start client
```shell
cd ./code-spot-client
npm install
ng serve --open
```

Navigate to http://localhost:4200/ (If it has not been done automatically). The app will automatically reload if you change any of the source files.