var userFeed = new Instafeed({
    get: 'user',
    target: "instafeed-container",
    resolution: 'low_resolution',
    accessToken: 'IGQVJYMlRaWURNQWxMSGlOZAzBpUXRxaVJmRGs5aGQ4TzZAUS19YNGk1dDNHcjlEa29qaVB2Y0NFMlZAlRTkxM1lTWmdqVm5fUUg2S3ZArRnJ4S0pwUU1nX0VtYVRtMnduVmlrOGFJNFNERUJtTk9xZAG9IYgZDZD'
});
userFeed.run();

//new CubeGallery('instafeed-container')

const parallax_home = document.getElementById("quemsomos");

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    parallax_home.style.backgroundPositionY= offset * 0.0 + "px"
})

const parallax_about = document.getElementById("sobrenos");

window.addEventListener("scroll", function()
{
    let offset_about = window.pageYOffset;
    parallax_about.style.backgroundPositionY= offset_about * 0.5 + "px";
})
