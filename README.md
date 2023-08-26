# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Dependincies

---
```
   npm install react-intl
```


# Important Code block
---
# 

```
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
      description: "{count} yeni mesajiniz var"
    },

    "en-US": {
      title: "Hello World",
      description: "You have {count} new messages"
    }
    

  }
  return (
    <div className="App">
     <IntlProvider locale={locale} messages={messages[locale]}>

      <FormattedMessage  id='title' />
      <p>
        <FormattedMessage id='description' values={{count: 6} }/>

      </p>
      <br/>

      <br />
     <button  onClick={() => setLocale("tr-TR")}>TR</button>
     <button  onClick={() => setLocale("en-US")}>EN</button>
     </IntlProvider>
     </div>
  );
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

