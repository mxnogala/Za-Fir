
function initMap() {
    const location = { lat: 51.419662960870504, lng: 17.919443182831017 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: location,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}