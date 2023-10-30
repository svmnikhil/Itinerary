// import { createSlice } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';  
// import {createRealmContext} from '@realm/react';

// class Profile extends Realm.Object {
//   static schema = {
//     name: 'Profile',
//     primaryKey: 'id',
//     properties: {
//       id: 'objectId',
//       username: 'string',
//       email: 'string?',
//       password: 'string',
//       avatar: 'string?', // Store image URL or base64 encoded string
//       bio: 'string?',
//       dateJoined: 'date?',
//       lastLogin: 'date?'
//     }, 
//     this.primaryKey: '_id',
//   };  
// };

// // Create a configuration object
// const realmConfig = {
//   schema: [Profile],
// };


// // Create a realm context
// const {RealmProvider, useRealm, useObject, useQuery} =
//   createRealmContext(realmConfig);