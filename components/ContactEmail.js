import { useRef } from 'react';
import { TiClipboard } from "react-icons/ti";

export default () => {
  const inputRef = useRef(null);


  const copyToClipboard = () => {
    inputRef.current.select()
    document.execCommand("copy")
  }

  return (
    <div className="clipboard">
      <label className="clipboard__label">
        <input className="clipboard__input" readOnly value= "clarebee@protonmail.com" ref={inputRef}/>
        <button className="clipboard__button" onClick={() => copyToClipboard()}>
          <TiClipboard />
        </button>
      </label>
    </div>
  )
}