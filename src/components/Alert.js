import React from "react";

function Alert(props) { 
  const capitalize = (word) =>{
    // ye ek -word- lega me us -word- ko capitalize karna chahunga, js ke andar koi -capitalize- name ka function nhi hota hai, to aap ye ja ka methos use kar sakte ho -toLowerCase()-
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };



  
  return (
    // <div style={{height: '50px'}}>
    //   props.alert &&{" "}
    //   <div>
    //     <div
    //       className={`alert alert-${props.alert.typ} alert-dismissible fade show`}
    //       role="alert"
    //     >
    //       <strong>{capitalize(props.alert.typ)}</strong> : {props.alert.msg}
    //       {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    //     </div>
    //   </div>
    // </div>









    <div style={{ height: "50px" }}>
     {props.alert &&
      <div>
        <div
          className={`alert alert-${props.alert.typ} alert-dismissible fade show`}
          role="alert">
          <strong>{capitalize(props.alert.typ)}</strong> : {props.alert.msg}
         </div>
      </div>}
    </div>
  );
}

export default Alert;

// hum isko as it is nhi rakhanan chahenge, alert hame supply kiya jaye as a prop

// type:- sucess hai to alert me sucess likh ke aayega, our message me message likh ke aayega 



// Ab muze -showAlert- function ko pass karke -TextForm- ko dena hai, -textForm- ko me bolunga ki tumhe jab bhi -alert- dikhana ho to tum iss function ko call kar dena alrt show ho jayega 


// props.alert && :- iska matlab hai ki agar ye chis false ho jati hai to kuch karo hi mat,  warna aageka karo 