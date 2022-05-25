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

