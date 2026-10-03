(function(){const phone='919483852001';document.querySelectorAll('[data-wa]').forEach(function(el){el.href='https://wa.me/'+phone+'?text='+encodeURIComponent(el.getAttribute('data-wa'));el.target='_blank';el.rel='noopener';});})();


// Service-area map
(function initServiceMap(){
  const el = document.getElementById('service-map');
  if (!el || typeof L === 'undefined') return;
  const serviceCentre = [12.9559, 77.7216];
  const map = L.map(el, {
    center: serviceCentre,
    zoom: 15,
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    boxZoom: false,
    keyboard: false,
    zoomControl: false,
    attributionControl: true
  });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  const pin = L.divIcon({
    className: 'service-pin-wrap',
    html: '<div class="service-pin" aria-hidden="true"></div>',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -28]
  });
  L.marker(serviceCentre, { icon: pin, title: 'Shivaloka Service Center' })
    .addTo(map)
    .bindPopup('<strong>Shivaloka Service Center</strong><br>ICICI Bank, Bus Stop, Thubarahalli')
    .openPopup();
})();
