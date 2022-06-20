import React, { useEffect } from "react";
import Login from "./components/Login";
import Layout from "./components/Layout";
import {useDispatch, useSelector} from 'react-redux'
import './app.css'
import Notification from "./components/Notification";
import {uiAction} from './store/ui-slice'

function App() {
  const dispatch=useDispatch()
  const notification=useSelector(state=>state.ui.notification)
  const cart = useSelector(state=>state.cart)
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)
  useEffect(()=>{

    const request=async()=>{

      dispatch(uiAction.showNotification({
        open:true,
        message: "Sending Request",
        type:'warning'
      }))
      const res= await fetch('https://redux-shopping-app-c479d-default-rtdb.firebaseio.com/cartItems.json',{
        method:"PUT",
        body:JSON.stringify(cart)
      })
      const data=await res.json()
      dispatch(uiAction.showNotification({
        open:true,
        message: "Sent request to database Successfully",
        type:'success'
      }))
    }
    request() .catch(err=>{
      dispatch(uiAction.showNotification({
        open:true,
        message: "Request failed",
        type:'error'
      }))
    })
  },[cart])
  return (
    <div className="App">
      {notification && <Notification type={notification.type} message={notification.message}/>}
      {isLoggedIn?<Layout />:<Login /> }
      
    </div>
  );
}

export default App;
