const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// const express = require('express');

// admin.initializeApp(functions.config().firebase)
// const cors = require('cors')
// const router = express();

// router.use(cors({ origin: true }))