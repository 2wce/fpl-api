import * as admin from 'firebase-admin';
const serviceAccount = require('./service.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://kuda-site.firebaseio.com',
});

const data = require('./matches.json');

// /**
//  * Data is a collection if
//  *  - it has a odd depth
//  *  - contains only objects or contains no objects.
//  */
// function isCollection(payload: any, path: any, depth?: any) {
//   if (
//     typeof data !== 'object' || data === null || data.length === 0 || isEmpty(data)
//   ) {
//     return false;
//   }

//   for (const key in data) {
//     if (typeof data[key] !== 'object' || data[key] === null) {
//       // If there is at least one non-object item then it data then it cannot be collection.
//       return false;
//     }
//   }

//   return true;
// }

// // Checks if object is empty.
// function isEmpty(obj: any) {
//   for(const key in obj) {
//     if(obj.hasOwnProperty(key)) {
//       return false;
//     }
//   }
//   return true;
// }

// async function upload(payload: any, path: any) {
//     return await admin
//     .firestore()
//     .collection('matches')
//     .add(data)
//     .then(() => console.log(`Document ${path.join('/')} uploaded.`))
//     .catch(() => console.error(`Could not write document ${path.join('/')}.`));
// }

// /**
//  *
//  */
// // @ts-ignore
// async function resolve(object: any, path = []) {
//   if (path.length > 0 && path.length % 2 === 0) {
//     // Document's length of path is always even, however, one of keys can actually be a collection.

//     // Copy an object.
//     const documentData = Object.assign({}, object);

//     for (const key in object) {
//       // @ts-ignore Resolve each collection and remove it from document data.
//       if (isCollection(object[key], [...path, key])) {
//         // Remove a collection from the document data.
//         delete documentData[key];
//         // @ts-ignore Resolve a colleciton.
//         resolve(data[key], [...path, key]);
//       }
//     }

//     // If document is empty then it means it only consisted of collections.
//     if (!isEmpty(documentData)) {
//       // Upload a document free of collections.
//       await upload(documentData, path);
//     }
//   } else {
//     // Collection's length of is always odd.
//     for (const key in data) {
//       // @ts-ignore Resolve each collection.
//       await resolve(data[key], [...path, key]);
//     }
//   }
// }

// resolve(data);

/**
 * Data is a collection if
 *  - it has a odd depth
 *  - contains only objects or contains no objects.
 */
// tslint:disable-next-line:no-shadowed-variable
function isCollection(data: any, path: []) {
  if (typeof data !== 'object' || data === null || data.length === 0 || isEmpty(data)) {
    return false;
  }

  for (const key in data) {
    if (typeof data[key] !== 'object' || data[key] === null) {
      // If there is at least one non-object item then it data then it cannot be collection.
      return false;
    }
  }

  return true;
}

// Checks if object is empty.
function isEmpty(obj: Object) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

// tslint:disable-next-line:no-shadowed-variable
async function upload(data: any, path: []) {
  try {
    return await admin
    .firestore()
    .collection('matches')
    .add(data)
    .then(() => console.log(`Document ${path.join('/')} uploaded.`))
    .catch(() => console.error(`Could not write document ${path.join('/')}.`));
  } catch (error) {
     throw new Error(error)
  }
}

/**
 *
 */
// tslint:disable-next-line:no-shadowed-variable
async function resolve(data: any, path = []) {
  if (path.length > 0 && path.length % 2 === 0) {
    // Document's length of path is always even, however, one of keys can actually be a collection.

    // Copy an object.
    const documentData = Object.assign({}, data);

    for (const key in data) {
      // @ts-ignore Resolve each collection and remove it from document data.
      if (isCollection(data[key], [...path, key])) {
        // Remove a collection from the document data.
        delete documentData[key];
        // @ts-ignore Resolve a colleciton.
        resolve(data[key], [...path, key]);
      }
    }

    // If document is empty then it means it only consisted of collections.
    if (!isEmpty(documentData)) {
      // @ts-ignore Upload a document free of collections.
      await upload(documentData, path);
    }
  } else {
    // Collection's length of is always odd.
    for (const key in data) {
      // @ts-ignore Resolve each collection.
      await resolve(data[key], [...path, key]);
    }
  }
}

resolve(data);
