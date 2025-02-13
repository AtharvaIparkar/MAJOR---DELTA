    maptilersdk.config.apiKey = mapApiKey;
    
    const map = new maptilersdk.Map({
    container: 'map', // container's id or the HTML element in which the SDK will render the map
    style: maptilersdk.MapStyle.STREETS,
    center: [73.856255, 18.516726], // starting position [lng, lat]
    zoom: 10 // starting zoom
});
