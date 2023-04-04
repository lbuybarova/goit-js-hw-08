import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORTIME = "videoplayer-current-time";
const currentTime = localStorage.getItem(STORTIME);

if (currentTime){
    player.setCurrentTime(currentTime);
}

player.on('timeupdate', throttle((evt) => {
    localStorage.setItem(STORTIME, evt.seconds)    
}, 1000) );
