## FrontEnd

## Library used in Frontend

I used material UI for front-end, axios for data fetching.

## State Management

For state management I used context api, there is available alternatives to Context api such as redux, Mobx, recoil. But for small project it is better to use context api that's why i used context api. there was mentioned in the doc that you can browser local storage for cart. But I used context api, then I thought , there wouldn't be any need to use local storage.

## Data Fetching in UseEffect
It is recommended to fetch data in React Query or RTK Query or any other, it isn't considered a good practice to fetch data in useEffect, because sometime it becomes headache, because it can cause performance isssue. But here the project isn't that much large, it is small project and predictable so i preffered to use UseEffect for data fetching.




## Available Scripts

To start the front-end 

### `yarn start`

Runs the app in the development mode.\

## Issue that i encounterd

There was Cors policy issue while connecting to back-end, then install cors package on the back-end to resolve the issue.

and I add the following statement after importing cors 

app.use(cors());
