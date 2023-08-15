let ListenButton=document.getElementById("ListenButton")
let textInput=document.getElementById("textInput")
let StopButton=document.getElementById("StopButton")

let  voiceSelect =document.getElementById("voiceSelect")
var audio = new Audio();

AWS.config.update({
    accessKeyId: 'enter your access key',
    secretAccessKey: 'enter your secretAccessKey',
    region: 'ap-south-1'  
  });
  
  var polly = new AWS.Polly();
  
  function getVoice(){
    audio.pause();

    var textInputValue = textInput.value;
  
    var params = {
      Text: textInputValue,
      OutputFormat: 'mp3',
      VoiceId: voiceSelect.value
      
    };
  
    polly.synthesizeSpeech(params, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        audio.src = 'data:audio/mp3;base64,' + data.AudioStream.toString('base64');
        audio.play();
      }
    });
  }

  stopVoice=()=>{
    audio.pause();

  }

  ListenButton.addEventListener('click',getVoice);
  StopButton.addEventListener('click',stopVoice);

  