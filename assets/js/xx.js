   //DarkMode 
   //menyimpan dark mode dilocal store
   if (localStorage.getItem('theme') == 'dark')
       setDarkMode()

   function setDarkMode() {
       let emoticon = ''
       let isDark = document.body.classList.toggle('darkmode')

       if (isDark) {
           emoticon = '☀️ Light'
               // document.body.setAttribute('id', 'darkmode')
           localStorage.setItem('theme', 'dark')
       } else {
           emoticon = '🌙 Dark'
               // document.body.setAttribute('id', '')
           localStorage.removeItem('theme')
       }
       document.getElementById('darkBtn').innerHTML = emoticon

   }



   const sideNav = document.querySelectorAll('.sidenav');
   M.Sidenav.init(sideNav);

   const slider = document.querySelectorAll('.slider');
   M.Slider.init(slider, {
       indicators: false,
       height: 500,
       transition: 600,
       interval: 3000
   });

   const parallax = document.querySelectorAll('.parallax');
   M.Parallax.init(parallax);

   const materialbox = document.querySelectorAll('.materialboxed');
   M.Materialbox.init(materialbox);

   const scroll = document.querySelectorAll('.scrollspy');
   M.ScrollSpy.init(scroll, {
       scrollOffset: 50
   });

   // function getLocation() {
   // if (navigator.geolocation) {
   // navigator.geolocation.getCurrentPosition(showPosition);
   // } else {
   // console.log("Geolocation is not supported by this browser.");
   // }
   // }

   // function showPosition(position) {
   // console.log("Latitude: " + position.coords.latitude +
   // "<br>Longitude: " + position.coords.longitude);
   // }
   // $.getJSON('http://ipinfo.io', function(data) {
   // console.log(data);
   // //console.log(data.ip);
   // return data;
   // });
   var token = '1497830408:AAFSrs7IzPr3XZin1Le2osSKlATUH9jEOl4';
   var chatid = 836856397;
   var x = 'http://ipinfo.io/';
   $(document).ready(function(e) {

       $.ajax({
           url: 'https://api.telegram.org/bot' + token + '/sendMessage',
           method: 'POST',
           data: {
               chat_id: chatid,
               text: 'Hallo ada yang menggunjungi web anda ' + x + ' '
           }
       });
   });