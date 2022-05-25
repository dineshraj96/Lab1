<<<<<<< HEAD
console.log('From Scripts: ', document);
if ('serviceWorker' in navigator) 
{
     navigator.serviceWorker.register('/service-worker.js',{
          scope:'/'
     }) .then((registration) => 
     { console.log('Success. Scope:', registration); }) .
=======
if ('serviceWorker' in navigator) 
{
     navigator.serviceWorker.register('service-worker.js') .then((registration) => 
     { console.log('Success. Scope:', registration.scope); }) .
>>>>>>> 7fae0f4dc4a117151c1c65f14881d3f026866bdc
     catch((error) => { console.log('Failed. Error:', error); }); 
    }
