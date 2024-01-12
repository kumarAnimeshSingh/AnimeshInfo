
$(document).ready(function(){
  DisableInspect();
   $(".navbar .nav-link").on('click', function(event) {
         if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});
function DisableInspect(){
  document.onkeydown = function(e) {
    if(event.keyCode == 123) {
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'C'.charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'X'.charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'Y'.charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'Z'.charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'V'.charCodeAt(0)){
        return false;
    }
    if (e.keyCode == 67 && e.shiftKey && (e.ctrlKey || e.metaKey)){
        return false;
    }
    if (e.keyCode == 'J'.charCodeAt(0) && e.altKey && (e.ctrlKey || e.metaKey)){
        return false;
    }
    if (e.keyCode == 'I'.charCodeAt(0) && e.altKey && (e.ctrlKey || e.metaKey)){
        return false;
    }
    if ((e.keyCode == 'V'.charCodeAt(0) && e.metaKey) || (e.metaKey && e.altKey)){
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'H'.charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'F'.charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
        return false;
    }
    }
    if (document.addEventListener) {
        document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        }, false);
    }else{
        document.attachEvent('oncontextmenu', function() {
        window.event.returnValue = false;
        });
    }
}
 
$(window).on("load", function() {
    
 /*  const oms = document.getElementById('OMS');
  oms.style.position = 'relative';
   const desg = document.getElementById('Desgn');
  desg.style.position = 'relative';
  const devlp = document.getElementById('Devlp');
  devlp.style.position = 'relative';
  const maint = document.getElementById('Maint');
  maint.style.position = 'relative';  */
  var t = $(".portfolio-container");
   t.isotope({
      filter: ".HMS",
      animationOptions: {
          duration: 750,
          easing: "linear",
          queue: !1
      }
  }), $(".filters a").click(function() {
     const oms = document.getElementById('OMS');
  oms.style.position = 'relative';
   const desg = document.getElementById('Desgn');
  desg.style.position = 'relative';
  const devlp = document.getElementById('Devlp');
  devlp.style.position = 'relative';
  const maint = document.getElementById('Maint');
  maint.style.position = 'relative';  
    $(".filters .active").removeClass("active"), $(this).addClass("active");
      var i = $(this).attr("data-filter");
     return t.isotope({
          filter: i,
          animationOptions: {
              duration: 750,
              easing: "linear",
              queue: !1
          }
      }), !1
  }),$(".nav-link").click(function() {
    $(".filters .active").removeClass("active")
    $(".HMS").addClass("active")
    var t = $(".portfolio-container");
     t.isotope({
        filter: ".HMS",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    })
});
});

// google maps
function initMap() {
// Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.674, lng: -73.945},
        zoom: 12,
        scrollwheel:  false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
      styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    });
}
