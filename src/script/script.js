var userFeed = new Instafeed({
    get: 'user',
    target: "instafeed-container",
    resolution: 'low_resolution',
    accessToken: 'IGQVJWSV9iSXVLV2c4bkhRZAFgtRkhFamFlY2xBbThaU2NEODNacWFlbVVGaEJRNGJBcDdjcXJUWXZA4ZA3UyUmJQSDVJVDltWjEzWnlwYTU1aHB4T0JuN3k0NVA4cWxOWTNobUhFcWtkaXE3TUNkX2EwWAZDZD'
});
userFeed.run();

//new CubeGallery('instafeed-container')

const parallax_home = document.getElementById("quemsomos");

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    parallax_home.style.backgroundPositionY= offset * 0.5 + "px"
})

const parallax_about = document.getElementById("sobrenos");

window.addEventListener("scroll", function()
{
    let offset_about = window.pageYOffset;
    parallax_about.style.backgroundPositionY= offset_about * 0.5 + "px";
})
