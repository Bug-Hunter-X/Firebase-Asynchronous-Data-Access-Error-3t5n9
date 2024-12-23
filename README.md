# Firebase Asynchronous Data Access Error

This repository demonstrates a common error in Firebase applications where you try to access properties of a document snapshot before the data has fully loaded.  The issue often arises from asynchronous operations where data access happens before the promise resolves.  The solution involves properly handling promises and using optional chaining.

## Bug Description

The code attempts to access a field from a Firestore document snapshot immediately after calling `get()`. However, since `get()` is asynchronous, the data might not be available yet. This leads to an error because `doc.data()` returns undefined before the promise resolves.

## Solution

The solution involves ensuring the data is loaded before trying to access it using `.then()` to handle the promise or async/await. Also using optional chaining (?.) to avoid errors if the property is not available. 