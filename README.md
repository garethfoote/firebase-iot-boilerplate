### Firebase Boilerplate

To use Firebase's Realtime Database for a simple IoT project you need to use a [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup), which allows you to 'read and write Realtime Database data with full admin privileges'. To do this you need a service account.

[More documentation](https://firebase.google.com/docs/database/admin/start)

#### Create a Service Account
Got to [Service Account tab](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk) in the Firebase console and create a project if you haven't already done so.

Click on 'Generate A New Private Key' and you will be able to download a JSON file containing the key. DO NOT SHARE THIS OR UPLOAD IT ANYWHERE PUBLIC - it's a 'private' key.

#### Add private key to project
Put the JSON file into the root of this project - next to `publish.js` and `subscribe.js`.

Then change the following line in `publish.js` and `subscribe.js` to reflect the filename of your JSON file:
```
var keyFile = './node-test-001-8b95b-firebase-adminsdk-6xvf1-9651b361e3.json'
```

#### Add project ID
You can find your Project ID in the General Tab of the Project Settings. (Access this via the cog icon next to the 'Overview' link or [click here](https://console.firebase.google.com/project/_/settings/general) and select your project).

Add the Project ID to the following line of `publish.js` and `subscribe.js`:
```
var appID = 'node-test-001-8b95b'
```

#### Install firebase-admin library
```
npm install firebase-admin
```
