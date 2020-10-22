# README

# Lets Chat! App
Live Demo: https://superchat-b1dee.web.app/


> A super chat app where users sign in with there google accounts and can chat real time with other users that are signed in! 

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Status](#status)
- [Contact](#contact)


## General info

The Lets Talk App allows you to chat with users from any location at real time. Also, 
utilizes Googles Authentication for sign in make it super simple to use! 

## Technologies

- React
- Firebase
- Firestore 
- HTML - version 5
- CSS - version 3 

## Setup

No set up reqired! Must have a Google acount to sign in to the app. Head to 
https://superchat-b1dee.web.app/ to try it out your self! 

## Code Examples

React.JS  

```
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const auth = firebase.auth()

function App() {
  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lets Chat!🗣 💬🔥</h1>
        <SignOut/>
      </header>
      <section>
        {user ? <ChatRoom/> : <SignIn/>}
      </section>
    </div>
  );
}
function SignIn(){
  const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider)
  }
  return(
    <button onClick={signInWithGoogle}>Sign In</button>
  )
}

```

## Features

- Creates user and adds to the database 
- Sign In and Sign Out
- User needs to have a correct password to long in
- Api for all of the messages 
- button animations (lift)


## Status

Project is: finished currently live at https://superchat-b1dee.web.app/. Code will need to be refactored to be scalable

## Contact

Created by [Terrell Cooper](https://www.linkedin.com/in/terrell-cooper-43252aaa/) Feel free to reach out if you have any questions or just want to chat! 

Slack: @Terrell Cooper

LinkedIn: https://www.linkedin.com/in/terrell-cooper-43252aaa/



with a Favicon from (https://www.flaticon.com/free-icon/chat_610413?term=chat&page=1&position=75)
