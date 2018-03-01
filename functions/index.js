const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


const defaultKeyBoard = '{ "type" : "buttons", "buttons" : ["학사일정", "다른기능"]}';

const march = '3월 학사일정';

function msg(name){
  return '{ "message" : {"text" :"' +march + '을 선택하셨습니다' + '"}, "keyboard" :'+ defaultKeyBoard +'}'
}

//Cloud Functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.keyboard = functions.https.onRequest((request, response) => {
  response.send(defaultKeyBoard);
});

exports.message = functions.https.onRequest((request, response) => {
  response.send(msg(request.body.content));
});
