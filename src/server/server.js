import './config/config';
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import socketIO from 'socket.io';
import http from 'http';
import cors from 'cors';
// routes
import variables from './routes/variables';
import sensores from './routes/sensores';

import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/component/App.jsx';
import Init from '../client/component/init.jsx';
import Html from '../client/component/html';
import { ServerStyleSheet } from 'styled-components';

const app = express();

// accept all request 
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static('dist'));

// rutas
app.use('/variables', variables);
app.use('/sensores', sensores);

app.get('/', (req, res) => {

    const body = renderToString( <Init/> );
    const sheet = new ServerStyleSheet();
    const styles = sheet.getStyleTags();
    const title = 'Server side Rendering with Styled Components';

    res.send(
        Html({
            body,
            styles,
            title
        })
    );
});

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, (err) => {

    if (err) {
        throw err;
    }

    console.log('Connected with database!');
});

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Serving at localhost:${process.env.PORT}`);
});