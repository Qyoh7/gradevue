function a(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function m(e){return typeof e=="number"?e>100?"blue":e>=90?"green":e>=80?"yellow":"red":e.match(/^A\+?-?$/)?"green":e.match(/^B\+?-?$/)?"yellow":e.match(/^[CDEF]\+?-?$/)?"red":"gray"}const i=e=>e.replace(/ \([A-Z]+\)( \([0-9]+\))?$/,"");function c(e){if(e.endsWith(" Points Possible"))return[NaN,parseFloat(e.replace(/ Points Possible$/,""))];const[f,n]=e.split(" / ").map(parseFloat);return[f,n??0]}const t=new Intl.RelativeTimeFormat("en-US",{numeric:"auto"});function h(e){const n=Math.floor((new Date().getTime()-e.getTime())/1e3),s=Math.floor(n/60),r=Math.floor(s/60),o=Math.floor(r/24),l=Math.floor(o/30),u=Math.floor(o/365);return n<60?t.format(-n,"second"):s<60?t.format(-s,"minute"):r<24?t.format(-r,"hour"):o<30?t.format(-o,"day"):l<12?t.format(-l,"month"):t.format(-u,"year")}const F=new Intl.DateTimeFormat("en-US",{dateStyle:"short"}),p=new Intl.DateTimeFormat("en-US",{dateStyle:"full"});export{h as a,c as b,a as e,p as f,m as g,i as r,F as s};