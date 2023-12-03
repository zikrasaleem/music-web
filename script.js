let progress=document.getElementById('progress');
let song=document.getElementById('song');
let ctricon=document.getElementById('ctricon');
let image=document.getElementById('image');
let controlicon=document.getElementById('play');
let title=document.getElementById('title');
let list = document.getElementById('next')
let songList = document.getElementsByTagName('source');

progress.max=song.duration;


song.onloadedmetadata=function(){
    progress.max=song.duration
    progress.value=song.currentTime
}


function play(){
    var clse=controlicon.alt;
    if(clse=="2"){
        song.pause();
        controlicon.src="images/play.png"
        controlicon.alt="1"  
        image.setAttribute("id","images") 
    }
    else{
        if(clse=="1"){
        song.play();
        controlicon.src="images/pause.jpg"
        controlicon.alt="2"
        image.setAttribute("id","motion")
        if(song.play()){
            setInterval(() => {
                progress.value=song.currentTime;
                
            }, 500);
        }
        }
    }
}

if(progress.max==song.currentTime){
    var clse=controlicon.alt
    if(clse=="2"){
        song.pause();
        controlicon.src="images/play.png"
        controlicon.alt="1"
    }
}


progress.onchange=function(){
    clse=controlicon.alt;
    song.currentTime=progress.value
    if(clse=="2"){
        song.play()
    }
    else{
        song.pause()
    }
}

index = 0;

function play_next(){
    if (index === songList.length - 1) index = -    1;
    index++;

    var clse = controlicon.alt
    song.src = songList[index].src;
    // image.src = img[index];
    // title.innerText= 'song_title[index]';
    if(clse=="2"){
        song.play();

    }
    else{
        song.pause();
    }
    if(index==list.length){
        if(clse=='2'){
        image.src=img[0];
        // title.innerText='song_title[0]';
        song.src=list[0]
        song.play();
        }
        else{
        image.src=img[index];
        // title.innerText='song_title[index]';
        song.src=list[index]
        song.pause()
        }
        
    }
    
    
}

function play_previous(){
    if (index === 0) index = songList.length;
    index--;
    var clse=controlicon.alt
    
    song.src= songList[index].src;
    // image.src=img[index];
    // title.innerText= song_title[index];
    if(clse=="2"){
        song.play();
    }
    else{
        song.pause();
    }
    if(index==-1){
        if(clse=='2'){
        image.src=img[index];
        // title.innerText=song_title[index];
        song.src=list[index]
        song.play();
        }
        else{
        image.src=img[index];
        // title.innerText=song_title[index];
        song.src=list[index]
        song.pause()
        }
        
    }
}

function playsong(){
    if(playlist_button.innerText=='Play'){
        song.play();
        playlist_button.innerText='Pause'
        controlicon.src="images/pause.jpg"
        controlicon.alt="2"


        if(song.play()){
            setInterval(() => {
                progress.value=song.currentTime;
                if(progress.max==song.currentTime){
                    playlist_button.innerText='Play'
                    song.pause();
                    controlicon.src="images/play.png"
                    controlicon.alt="1"

                }
                
            }, 500);
        }
    }
    else{
        if(playlist_button.innerText=='Pause'){
            song.pause();
            playlist_button.innerText='Play'
            controlicon.src="images/play.png"
            controlicon.alt="1"

        }
    }
    
}

