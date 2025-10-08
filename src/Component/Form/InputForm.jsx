import { forwardRef, useContext, useImperativeHandle, useRef, useState } from "react";
import { FormContext } from "../../context/FormContext";

function InputForm({ type, label,  id, placeholder, ref }) {

  const {formInput, setFormInput} = useContext(FormContext)
  const [isValid, setValid] = useState(true);
  const [shake, setShake] = useState(false);
  // Local state to manage input value
  const [text, setText] = useState("");

  // use loacl ref to access the input element directly
  const localRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      focus : () => {
        localRef.current.focus();
      },
      setInvalid: () => {
        setValid(false);
      },
    }
  } , [] )

  return (
    <>
      <input className={`${(!isValid) ? "error-input" : ""} ${(shake) ? 'shake' : ""} `}
        type={type} id={id} placeholder={placeholder}
        value={text} 
       
        ref={localRef}
        onChange={(e) => {
          setText(e.target.value);
          setFormInput({ ...formInput, [label]: e.target.value });
        }}
        
      />
    </>
  )
}

export default forwardRef(InputForm);

// [label] is used to dynamically set the key in the formInput object based on the label prop passed to the InputForm component.

// This allows the InputForm component to be reusable for different input fields (like email and password) while still updating the shared formInput state in the FormContext correctly.