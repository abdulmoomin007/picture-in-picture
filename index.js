const video = document.querySelector("#video");
const btn = document.querySelector(".btn");

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    video.srcObject = mediaStream;
    video.onloadedmetadata = () => {
      video.play();
    };
  } catch (err) {
    console.log("Something went wrong!", err);
  }
}

btn.addEventListener("click", async () => {
  btn.disabled = true;
  await video.requestPictureInPicture();
  btn.disabled = false;
});

// On Load
selectMediaStream();
