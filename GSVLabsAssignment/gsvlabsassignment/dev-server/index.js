import express from 'express';
const app = express();
var cors = require('cors')

import { registerRoutes } from './routes';
import { setEnvironment } from './config/env';
import { connectToDB } from './config/db';

setEnvironment(app);
connectToDB();
registerRoutes(app);

app.use(cors())

app.get('/', (req, res) => {
    if (process.env.NODE_ENV !== 'production') {
        return res.send(
            'Running server in development mode.'
        );
    } else {
        // Returns the main index file in production environment
        return res.sendFile('index.html', { root: __dirname + '/../dist/' });
    }
})

app.listen(3000, () => {
    console.log('Poem app listening on port 3000 in ' + process.env.NODE_ENV + ' mode!');
});
