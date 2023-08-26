import { useState, useEffect } from 'react';
import './App.css';
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'
function App() {
  const isLocale = localStorage.getItem("locale");
  const defaultLocal = isLocale ? isLocale : navigator.language;
  const [locale, setLocale] = useState(defaultLocal);


  useEffect(() => {
      localStorage.setItem("locale", locale);
  }, [locale])

  console.log(defaultLocal);


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
     <IntlProvider locale={locale} messages={messages[locale]}>

      <FormattedMessage  id='title' />
      <p>
        <FormattedMessage id='description' />

      </p>
      <br/>

      <br />
     <button  onClick={() => setLocale("tr-TR")}>TR</button>
     <button  onClick={() => setLocale("en-US")}>EN</button>
     </IntlProvider>
     </div>
  );
}

export default App;
