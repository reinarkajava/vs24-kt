import React, {useRef, useEffect} from "react";
import "../../index.css"
const Modal = (props) => {

    const dialogRef = useRef(null);
 
   useEffect(() => {
     const dialog = dialogRef.current;
     if (props.isOpen) {
       dialog.showModal();
     } else {
       dialog.close();
     }
 
     return () => {
       if (dialog.open) {
         dialog.close();
       }
     };
   }, [props.isOpen]);
 
   return (
     <dialog ref={dialogRef} className="modal">
       {props.children}
       <div className="modal-actions">
         <button className="text-button" onClick={props.onClose}>
           Close
         </button>
         <button className="button" onClick={props.onCheckout}>
           Checkout
         </button>
       </div>
     </dialog>
   );
 };
 
 export default Modal;
