var userFeed = new Instafeed({
    get: 'user',
    target: "instafeed-container",
    resolution: 'low_resolution',
    accessToken: 'IGQVJWSV9iSXVLV2c4bkhRZAFgtRkhFamFlY2xBbThaU2NEODNacWFlbVVGaEJRNGJBcDdjcXJUWXZA4ZA3UyUmJQSDVJVDltWjEzWnlwYTU1aHB4T0JuN3k0NVA4cWxOWTNobUhFcWtkaXE3TUNkX2EwWAZDZD'
});
userFeed.run();



new CubeGallery('instafeed-container')
