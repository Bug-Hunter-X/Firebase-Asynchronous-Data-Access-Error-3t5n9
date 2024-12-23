To fix this, ensure the data is loaded before accessing it. Use `.then()` to handle the promise, like so:

```javascript
db.collection('myCollection').doc('myDoc').get().then((doc) => {
  if (doc.exists) {
    console.log(doc.data()?.myField); // Use optional chaining
  } else {
    console.log('No such document!');
  }
});
```

Alternatively, use async/await:

```javascript
async function getData() {
  const docRef = db.collection('myCollection').doc('myDoc');
  const doc = await docRef.get();
  if (doc.exists) {
    console.log(doc.data()?.myField); //Use optional chaining
  } else {
    console.log('No such document!');
  }
}

getData();
```

Optional chaining (`?.`) safely handles cases where `doc.data()` might be null or undefined, preventing errors.  Always check `doc.exists` to confirm a document exists before accessing its data.