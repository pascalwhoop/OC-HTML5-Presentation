var onFailSoHard = function (e) {
    console.log('Reeeejected!', e);
};


navigator.webkitGetUserMedia({video: true, audio: true}, function (localMediaStream) {
    var video = document.getElementById('webcamvideo');
    video.src = window.URL.createObjectURL(localMediaStream);

    console.log("im alive!!!!")
}, onFailSoHard);


