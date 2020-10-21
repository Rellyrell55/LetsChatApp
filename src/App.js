import React from 'react';
//import './App.css';

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyCrYS3at9AZI_4AT2kfP506z3rUHYfwpIk",
  authDomain: "superchat-b1dee.firebaseapp.com",
  databaseURL: "https://superchat-b1dee.firebaseio.com",
  projectId: "superchat-b1dee",
  storageBucket: "superchat-b1dee.appspot.com",
  messagingSenderId: "456725649320",
  appId: "1:456725649320:web:46f07020cb4f3562e32f9d",
  measurementId: "G-LMNSH605XN"
})

const auth = firebase.auth()
const firestore = firebase.firestore()

function App() {
  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <header className="App-header">
        <h1>HELLO</h1>
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

function SignOut(){
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
    )
}

function ChatRoom(){
  const messagesRef = firestore.collection('messages')
  
  const query = messagesRef.orderBy('createAt').limit(25)
  const [messages] = useCollectionData(query, {idField: 'id'})
  //ended here messages not being shown but there is a messages key no value 
  console.log([messages])
  
  return (
    <> 
    <div>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
    </div>
    <div>
      <SignOut/>
    </div>
    </>
  )
}

function ChatMessage({ message }){
  const {text, uid } = message
  console.log(message)
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received' 

  return (
    <div className={`message ${messageClass}`}>
      {/* <img src={photoURL}/> */}
      <p>{text}</p>
    </div>
  )
}


export default App;
