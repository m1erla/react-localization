import { useState } from 'react';
import './App.css';
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'
function App() {
  const [lang, setLang] = useState('tr-TR');

  const messages = {
    "tr-TR" : {
      title: "Merhaba Dunya",
      description: "3 yeni mesajiniz var"
    },

    "en-US": {
      title: "Hello World",
      description: "You have 3 new messages"
    }
    

  }
  return (
    <div className="App">
     <IntlProvider messages={messages[lang]}>
      <FormattedMessage  id='title' />

      <p>
        <FormattedMessage id='description' />

      </p>
      <br/>

      <br />
     <button  onClick={() => setLang("tr-TR")}>TR</button>
     <button  onClick={() => setLang("en-US")}>EN</button>
     </IntlProvider>
     </div>
  );
}

export default App;
