/* ===== CARD TEXT DATA ===== */
const cardData = [
  `
  <div class="brand">H.T. ORNAMENTS</div>
  <div class="tagline">Luxury Jewellery</div>
  <div class="divider"></div>
  <div class="info">
    <span>📍 Mathura • Uttar Pradesh • India</span>
    <span>📞 +91 98977 06852</span>
    <span>✉️ HTORNAMENTS@gmail.com</span>
  </div>
  `,
  `
  <div class="brand">H.T. ORNAMENTS</div>
  <div class="tagline">Gold • Silver</div>
  <div class="divider"></div>
  <div class="info">
    <span>✔ BIS Hallmarked Gold</span>
    <span>✔ More Than 20 Items</span>
    <span>✔ Custom Jewellery</span>
  </div>
  `
];

let cardIndex = 0;
const cardContent = document.getElementById('cardContent');
cardContent.innerHTML = cardData[0];

function swapText(next){
  cardContent.classList.add('fade-out');
  setTimeout(()=>{
    cardIndex = next;
    cardContent.innerHTML = cardData[cardIndex];
    cardContent.classList.remove('fade-out');
  },300);
}

document.getElementById('next').onclick = () =>
  swapText((cardIndex + 1) % cardData.length);

document.getElementById('prev').onclick = () =>
  swapText((cardIndex - 1 + cardData.length) % cardData.length);

setInterval(()=>{
  swapText((cardIndex + 1) % cardData.length);
},6000);

/* ===== PRODUCT ===== */
const products = [
 {name:'Bombay Casting Latkan', img:'images/Bombay Casting Latkan.png'},
 {name:'Fancy Latkan', img:'images/Fancy Latkan.png'},
 {name:'Handmade Ring', img:'images/Handmade Ring.png'},
 {name:'Marathi Locket', img:'images/Marathi Locket.png'},
 {name:'Rajkot Bali', img:'images/Rajkot Bali.png'},
 {name:'Suii Dhaga', img:'images/Suii Dhaga.png'},
 {name:'U Bali', img:'images/U Bali.png'},
 {name:'V Bali', img:'images/V Bali.jpg'}
];

let pi = 0;
const main = document.querySelector('.product-main');
const img = main.querySelector('img');
const h3 = main.querySelector('h3');

function renderProduct(){
  main.classList.add('animate');
  setTimeout(()=>{
    img.src = products[pi].img;
    h3.textContent = products[pi].name;
    main.classList.remove('animate');
  },220);
}
renderProduct();

/* TOUCH SWIPE */
let sx = 0;
main.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});
main.addEventListener('touchend',e=>{
  const dx = e.changedTouches[0].clientX - sx;
  if(Math.abs(dx) > 50){
    pi = dx < 0
      ? (pi + 1) % products.length
      : (pi - 1 + products.length) % products.length;
    renderProduct();
  }
});

/* ===== DNA WAVES ===== */
const canvas = document.getElementById('waves');
const ctx = canvas.getContext('2d');
let w, h, t = 0;

function resize(){
  w = canvas.width = innerWidth;
  h = canvas.height = innerHeight;
}
addEventListener('resize', resize);
resize();

function draw(){
  ctx.clearRect(0,0,w,h);
  for(let i=0;i<4;i++){
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.strokeStyle = 'rgba(255,255,255,.15)';
    for(let x=0;x<=w;x+=20){
      ctx.lineTo(x, h*0.25 + Math.sin(x*0.008 + t + i)*60 + i*180);
    }
    ctx.stroke();
  }
  t += 0.006;
  requestAnimationFrame(draw);
}
draw();
