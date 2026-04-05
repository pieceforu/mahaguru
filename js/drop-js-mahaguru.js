<script>
(function(){
  const wrap = document.getElementById('snow');
  const COUNT = 200;
  for(let i=0;i<COUNT;i++){
    const f = document.createElement('span');
    f.className = 'snowflake ' + (Math.random()<.2?'-lg':(Math.random()<.6?'-sm':''));

    const left = Math.random()*100;
    const delay = (Math.random()*-12).toFixed(2)+'s';
    const dur = (8 + Math.random()*10).toFixed(2)+'s';
    const sway = (4 + Math.random()*6).toFixed(2)+'s';
    const drift = (Math.random()*120 - 60).toFixed(1)+'px';
    const rot = (Math.random()*360).toFixed(0)+'deg';

    f.style.left = left+'vw';
    f.style.setProperty('--delay', delay);
    f.style.setProperty('--dur', dur);
    f.style.setProperty('--sway', sway);
    f.style.setProperty('--drift', drift);
    f.style.setProperty('--rot', rot);

    wrap.appendChild(f);
  }
})();
</script>
