## FrontEnd

## Library used in Frontend

I used material UI for front-end, axios for data fetching.

## State Management

For state management I used context api, there is available alternatives to Context api such as redux, Mobx, recoil. But for small project it is better to use context api that's why i used context api. there was mentioned in the doc that you can browser local storage for cart. But I used context api, then I thought , there wouldn't be any need to use local storage.

## Available Scripts

To start the front-end 

### `yarn start`

Runs the app in the development mode.\

## Issue that i encounterd

There was Cors policy issue while connecting to back-end, then install cors package on the back-end to resolve the issue.

and I add the following statement after importing cors 

app.use(cors());