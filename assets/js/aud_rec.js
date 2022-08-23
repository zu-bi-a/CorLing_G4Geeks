  const audlink = document.getElementById("downloadaud");
  
  navigator.mediaDevices.getUserMedia({audio:true})
  .then(stream => {handlerFunction(stream)})

  function handlerFunction(stream) {
    rec = new MediaRecorder(stream);
    rec.ondataavailable = e => {
      audioChunks.push(e.data);
      if (rec.state == "inactive"){
        let blob = new Blob(audioChunks,{type:'audio/wav'});
        recordedAudio.src = URL.createObjectURL(blob);
        recordedAudio.controls=true;
        recordedAudio.autoplay=true;
        sendData(blob)
        }
      }
    }
  
  function sendData(data) {}
    record.onclick = e => {
      record.disabled = true;
      record.style.backgroundColor = "blue"
      stopRecord.disabled=false;
      audioChunks = [];
      rec.start();a
      }
    stopRecord.onclick = e => {
      record.disabled = false;
      stop.disabled=true;
      record.style.backgroundColor = "red"
      rec.stop();
      }

    audlink.setAttribute("href", recordedAudio.src)

