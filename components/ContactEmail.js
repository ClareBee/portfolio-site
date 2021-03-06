import { useRef } from 'react';
import { TiClipboard } from 'react-icons/ti';

function ContactEmail() {
  const inputRef = useRef(null);

  const copyToClipboard = () => {
    inputRef.current.select();
    document.execCommand('copy');
  };

  return (
    <div className="clipboard-section">
      <div className="clipboard">
        <label className="clipboard__label">
          <input
            className="clipboard__input"
            readOnly
            value="clarebee@protonmail.com"
            ref={inputRef}
          />
          <button
            aria-label="copy to clipboard"
            className="clipboard__button"
            onClick={() => copyToClipboard()}
          >
            <TiClipboard />
          </button>
        </label>
      </div>
    </div>
  );
}

export default ContactEmail;
