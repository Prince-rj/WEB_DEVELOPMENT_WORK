function updatemap() {
    fetch('data.json')
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude
                longitude = element.longitude
                cases = element.infected;
                new mapboxgl.Marker({
                    color:`rgb(${cases},${255-cases},0)`
                })
                    .setLngLat([longitude,latitude])
                    .addTo(map);

            });
        })
}
setInterval(() => {
    
    updatemap();
}, 1000);