
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
## Download mongo DB
```
brew tap mongodb/brew

brew install mongodb-community@4.2

sudo mkdir -p /data/db
```

## start Mongo DB server
```
sudo mongod
```

if using mac, with catalina update try this for mondo db server: https://stackoverflow.com/questions/58283257/mongodb-cant-find-data-directory-after-upgrading-to-mac-os-10-15-catalina

run on http://localhost:8080/. if 8080 is in use, open the window where the server is running, it will show you the port of the localhost to connect to.

if it fails at startup, or doesnt register, just "ctrl + c" and re run the 'npm run dev' command again, and mongo instance, once again
