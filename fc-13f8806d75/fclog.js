// フラッシュカードの記録をお父さんのスプレッドシートへ送る（sync_flashcards_pages.py が生成）
(function(){
  var URL="", T="fc-13f8806d75";
  function send(d){try{d.t=T;d.ua=navigator.userAgent;
    fetch(URL,{method:'POST',mode:'no-cors',keepalive:true,body:JSON.stringify(d)})}catch(e){}}
  window.fcLog=function(d){if(URL)send(d)};
  var p=location.pathname, who=p.indexOf('/kanako/')>=0?'加奈子':p.indexOf('/tomohiro/')>=0?'友博':p.indexOf('/hikari/')>=0?'ひかり':'';
  if(URL&&who)send({who:who,ev:'ひらいた'});
})();
