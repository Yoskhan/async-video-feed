## How to start the app

Pretty simple as any react app, just enter root project folder and run **npm install**, after that run **npm start**.

## Technologies
- Javascript  
- React (redux, router)

## Styling
- CSS  
- Material UI

## Done
[x] Create layout for app with header and main area  
[x] Implemente main feed with material ui cards  
[x] Set up video player  
[x] Add button "Add to bookmark", and make it work (first update state in redux, then send patch request)  
[x] Add title, date, views, description and other data in card...[still in progress]  
[x] Implement Redux  
[x] Move http request to redux, to handle them in one place 
[x] Refactor and modularize redux with slice and actions for each part of app  
[x] Add react router and set it up for other parts (Userprofile)  
[x] Make user profile route, page and fetch data from redux  
[x] Add filter component with different sports  
[x] Fetch data for feed with sport query "?sport=football" (feed still stays the same, because mock api sends same data)  

## Todo
[ ] See if it's better to displace fetching feed data in app component because of performance  
[ ] Make feed load up more data with scrolling  
[ ] Add error handling of request, maybe with notification system  
[ ] Add fallback data to feed (videos not avaliable)  
[ ] Add loading spiner for fetching data  
[ ] Make component for posting data (Create Post)  
