//load Youtube iFrame API
var vid_height = 180;
var vid_width = 370; 
var timerID;

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var playerInfoList = [{
    id: 'player1',
    videoId: 'N26G-niUSSA'
}, 
{
    id: 'player2',
    videoId: 'P8KnRbuKqNo'
}, 
{
    id: 'player3',
    videoId: 'QUysZgKXfOc'
}, 
{
    id: 'player4',
    videoId: 'pwJo6fZMylc'
}, 
{
    id: 'player5',
    videoId: 'SP5WhZxN8QQ'
}, 
{
    id: 'player6',
    videoId: 'WeJdCtyJt1A'
}, 
{
    id: 'player7',
    videoId: 'l7FRzwUbDjg'
}, 
{
    id: 'player8',
    videoId: 'HAtlg7Mcy0w'
}, 
{
    id: 'player9',
    videoId: 'GHpurV6CJT4'
}, 
{
    id: 'player10',
    videoId: 'COZlLWnCHRQ'
}, 
{
    id: 'player11',
    videoId: 'deWe5siWPzA'
}, 
{
    id: 'player12',
    videoId: 'mbpO8Z3C9lQ'
},
{
    id: 'player13',
    videoId: 'ln_mq5-m134'
}, 
{
    id: 'player14',
    videoId: 'NVnbOZQPV_c'
}, 
{
    id: 'player15',
    videoId: 'td_KVI5jTXw'
}, 
{
    id: 'player16',
    videoId: '9zCVCoWEfMA'
}, 
{
    id: 'player17',
    videoId: 'wSbh3srd18s'
}, 
{
    id: 'player18',
    videoId: 'mzdNEEU2P58'
}, 
{
    id: 'player19',
    videoId: 'cKvvdnKX_gg'
}, 
{
    id: 'player20',
    videoId: 'yPmmLNYcevo'
}, 
{
    id: 'player21',
    videoId: 'BtZJ0FsKOs8'
}, 
{
    id: 'player22',
    videoId: 'wli18Af3RpM'
}, 
{
    id: 'player23',
    videoId: 'CD2hmKEnn30'
}, 
{
    id: 'player24',
    videoId: 'asJ8yM0DNUQ'
}];

function onYouTubeIframeAPIReady() {
    if (typeof playerInfoList === 'undefined') return;

    for (var i = 0; i < playerInfoList.length; i++) {
        var curplayer = createPlayer(playerInfoList[i]);
            players[i] = curplayer;
        }
}

var players = new Array();

function createPlayer(playerInfo) {
    return new YT.Player(playerInfo.id, {
        videoId: playerInfo.videoId,
        height: vid_height,
        width: vid_width,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        },
        playerVars: {
            'autoplay': 1, 
            'controls': 0,
            'showinfo': 0
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.setVolume(5);
    //event.target.playVideo(); //autoplay video after page load
    //document.getElementById('player1').style.borderColor = '#FF6D00';
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.



var done = false;
function onPlayerStateChange(event) {
    //console.log("Bords Log -> " + event.data);
    //if (event.data == YT.PlayerState.PLAYING && !done) {
    //    setTimeout(stopVideo, 6000);
    //    done = true;
    //    console.log("Bords 2");
    //}

    //changeBorderColor(event.data);

    //check if User Stops the video
    if  (event.data === 2 || event.data === 5){
        stopTimer();
    }   
}

function changeBorderColor(playerStatus) {
    var color;
    if (playerStatus == -1) {
    color = "#37474F"; // unstarted = gray
    } else if (playerStatus == 0) {
    color = "#FFFF00"; // ended = yellow
    } else if (playerStatus == 1) {
    color = "#33691E"; // playing = green
    } else if (playerStatus == 2) {
    color = "#DD2C00"; // paused = red
    } else if (playerStatus == 3) {
    color = "#AA00FF"; // buffering = purple
    } else if (playerStatus == 5) {
    color = "#FF6DOO"; // video cued = orange
    }
    if (color) {
    document.getElementById('player1').style.borderColor = color;
    }
}

function BordsConstructor(){
    //alert("bords");
    
    //disable inspect element
    document.addEventListener('contextmenu', event=> event.preventDefault()); 
        document.onkeydown = function(e) { 
            if(event.keyCode == 123) { 
                return false; 
            } 
            if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){ 
                return false; 
            } 
            if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){ 
                return false; 
            } 
            if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){ 
                return false; 
            } 
        }
}

function playAll(){  
    msg();
    players.forEach(function (el) {
        el.playVideo();        
    });
}

function stopAll(){  
    players.forEach(function (el) {
        el.stopVideo();
    });

    stopTimer();
}

function muteAll(){  
    players.forEach(function (el) {
        el.mute();
    });
}

function msg(){  
    alert("View Duration Starting...");  
    startBordsTimer();
}

function startBordsTimer(){
    timerID = setInterval(countTimer, 1000);
    var totalSeconds = 0;
    let DateTimeNow = new Date();

    function countTimer() {
        ++totalSeconds;
        var hour = Math.floor(totalSeconds /3600);
        var minute = Math.floor((totalSeconds - hour*3600)/60);
        var seconds = totalSeconds - (hour*3600 + minute*60);
        if(hour < 10)
            hour = "0"+hour;
        if(minute < 10)
            minute = "0"+minute;
        if(seconds < 10)
            seconds = "0"+seconds;
            document.getElementById("timestamp").innerHTML = DateTimeNow;    
            document.getElementById("timer").innerHTML = " Duration: " + hour + ":" + minute + ":" + seconds;
        }     
}

function stopTimer() {
    clearInterval(timerID);
  } 