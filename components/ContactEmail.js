import { useRef } from 'react';
import { TiClipboard } from 'react-icons/ti';

const ContactEmail = () => {
  const inputRef = useRef(null);

  const copyToClipboard = () => {
    inputRef.current.select();
    document.execCommand('copy');
  };

  return (
    <div className="clipboard-section">
      <div className="clipboard">
        <h3 className="clipboard__header heading-3">
          Send me an email:
        </h3>

        <label className="clipboard__label">
          <input
            className="clipboard__input"
            readOnly
            value="clarebee@protonmail.com"
            ref={inputRef}
          />
          <button
            className="clipboard__button"
            onClick={() => copyToClipboard()}
          >
            <TiClipboard />
          </button>
        </label>
      </div>
    </div>
  );
};

export default ContactEmail;
