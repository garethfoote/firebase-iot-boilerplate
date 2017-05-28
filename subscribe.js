// Using a Firebase service account:
// https://firebase.google.com/docs/database/admin/start
var admin = require("firebase-admin")

var appID = 'node-test-001-8b95b'
var keyFile = './node-test-001-8b95b-firebase-adminsdk-6xvf1-9651b361e3.json'

var serviceAccount = require(keyFile);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:  `https://${appID}.firebaseio.com`
});

var db = admin.database()

// REST URL: https://${appID}.firebaseio.com/sensor/test.json
var ref = db.ref('sensor/test')
ref.on('value', function(snapshot) {
  console.log(snapshot.val());
});
