console.log('From Scripts: ', document);
if ('serviceWorker' in navigator) 
{
     navigator.serviceWorker.register('/service-worker.js',{
          scope:'/'
     }) .then((registration) => 
     { console.log('Success. Scope:', registration); }) .
     catch((error) => { console.log('Failed. Error:', error); }); 
    }
