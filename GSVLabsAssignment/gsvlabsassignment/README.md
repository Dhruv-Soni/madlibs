# gsvlabsassignment
Open 2 terminal windows

in the first window:

## cd into this directory
```
./madlibs/GSVLabsAssignment/gsvlabassignment/
```

## Project setup
```
npm install
```

### Start server
```
npm run dev
```

after this is done we can start the mongo db server

in the second window:

## cd into this directory
```
./madlibs/GSVLabsAssignment/gsvlabassignment/
```

## start Mongo DB server
```
sudo mongod
```

run on localhost:8080. if 8080 is in use, open the window where the server is running, it will show you the port of the localhost to connect to.

if it fails at startup, just "ctrl + c" and re-run the server and and mongo instance, once again
