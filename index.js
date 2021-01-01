
const start = document.querySelector('.start');
const modal = document.querySelector('.modal');
const box = document.querySelector('.box');
const main = document.querySelector('main');
const item = document.querySelector('.item1');
const lucky = document.querySelector('.lucky');
const label2 = document.querySelector('.label2');
const label1 = document.querySelector('.label1');

let count = 0;
let speed = 10;
let timer = 20;
let game = false;
const time = setInterval(() => {

  if(timer>0){timer--;
  label1.innerHTML=timer;
  }
  timer===0 && stop();
}, 1000);

const play = () =>{
  game = true;
  count = 0;
  timer=30;
  speed = 10;
    modal.style.display = 'none';
    box.style.animation = "doldol 10s linear infinite";
    box.style.width = "35vw";
    box.style.height = "35vh";
    main.style.perspective = "900px";
    label1.style.display = "block";
    label2.style.display = "block";
    label1.innerHTML=timer;
    lucky.innerHTML=count;

}

const stop = () =>{
    modal.style.display = 'block';
    box.style.animation = null;
    box.style.width = "0px";
    box.style.height = "0px";
    main.style.perspective = null;
    label1.style.display = "none";
    label2.style.display = "none";
    game = false;
  }



start.addEventListener('click', play);
label2.addEventListener('click',stop);

item.addEventListener('mousedown',() => {
  if(game===true){
  count++;
  speed>1&&speed--;
  lucky.innerHTML=count;
  box.style.animation = `doldol ${speed}s linear infinite`;
  }
})