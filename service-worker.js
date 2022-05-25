<<<<<<< HEAD
self.addEventListener('install', function(event){
    console.log('SW-installed!!! !',event);
    self.skipWaiting();
})

self.addEventListener('activate', function(event){
    console.log('Activated !',event);
    event.waitUntil( clients.claim());   
})

self.addEventListener('fetch', function(event){
    return;
})

=======
self.addEventListener('fetch', function(){
    return;
})
>>>>>>> 7fae0f4dc4a117151c1c65f14881d3f026866bdc
