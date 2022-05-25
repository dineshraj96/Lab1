console.log('From Scripts: ', document);
if ('serviceWorker' in navigator) 
{
     navigator.serviceWorker.register('/Lab1//service-worker.js',{
          scope:'/Lab1/'
     }) .then((registration) => 
     { console.log('Success. Scope:', registration.scope); }) .
     catch((error) => { console.log('Failed. Error:', error); }); 
    }

