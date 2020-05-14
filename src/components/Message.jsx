import React from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
const Message = ({type, message}) => {
   const func = () => {
       if(type === "success"){
        toast.success(message, {
            position: toast.POSITION.TOP_RIGHT
          })
       } else if(type === "error"){
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT
          })
       }
   }
   return(
       <>
       {func()}
       </>
   )
  

}
export default Message;