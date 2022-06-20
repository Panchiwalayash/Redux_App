import React from 'react'
import {Alert} from '@mui/material'
import { useSelector } from 'react-redux'

export default function Notification({type,message}) {
  const notification=useSelector(state=>state.ui.notification)
  return (
    <div>
        {notification.open && <Alert severity={type}>{message}</Alert>}
    </div>
  )
}
