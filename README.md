First, install all dependencies, try to use node version 18 or newer:

npm i

Before running application you must run a local server!!!
Server automatically will start on 3001 port. Please run server only 3001 port!

npm run server 

Check root file backendimmitation.json and paste into a file that:

```
{
     "userInfo": {
       "firstName": "",
       "lastName": "",
       "email": "",
       "password": "",
       "accountType": "",
       "username": ""
     },
     "questionNumber": {
       "number": 1
     },
     "questions": {
       "answers": {}
     }
   }
```

After that you can start the project

npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

After registration, you'll be redirect on a main page. If you need to return on sign up page, just log out ( click on the icon next to login info in the left right corner)
After question box if you need reset form click on "Reset" button. This was made for you comfort. 