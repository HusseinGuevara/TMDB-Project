(this.webpackJsonptmdb=this.webpackJsonptmdb||[]).push([[0],{20:function(e,t){e.exports=function(e){for(var t="",c="",a="",n={"01":"January","02":"Februery","03":"March","04":"April","05":"May","06":"June","07":"July","08":"August","09":"September",10:"October",11:"Novemebr",12:"December"},s=0;s<=e.length-7;s++)t+=e[s];for(var i=5;i<=e.length-4;i++)a+=e[i];for(var o=8;o<=e.length-1;o++)c+=e[o];return n.hasOwnProperty(a),n[a]+" "+c+", "+t}},30:function(e,t,c){},31:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(23),i=c.n(s),o=(c(30),c(3)),r=c.p+"static/media/tmdblogo.e73804e8.jpg",l=(c(31),c(5)),d=c.n(l),j=c(0),b=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1];Object(a.useEffect)((function(){d.a.get("https://api.themoviedb.org/3/movie/popular?api_key=e0eb34f3bddc89aabdffd507b370db1e&language=en-US&page=1").then((function(e){s(e.data.results),console.log(e.data)})).catch((function(e){console.log(e)}))}),[]);var i=c(20);return Object(j.jsxs)("div",{className:"popular-movies-container",children:[Object(j.jsx)("div",{className:"popular-movies-h2",children:Object(j.jsx)("h2",{children:"What's Popular"})}),Object(j.jsx)("div",{className:"movies-container",children:n.map((function(e,t){return Object(j.jsxs)("div",{className:"movie-container",children:[Object(j.jsx)("div",{className:"movie-image",children:Object(j.jsx)("a",{href:"/TMDB-Project/movies/".concat(e.id),children:Object(j.jsx)("img",{src:"https://image.tmdb.org/t/p/w1280"+e.poster_path,alt:e.title})})}),Object(j.jsxs)("div",{className:"movie-info",children:[Object(j.jsx)("a",{href:"/TMDB-Project/movies/".concat(e.id),children:Object(j.jsx)("h4",{children:e.title})}),Object(j.jsx)("p",{children:i(e.release_date)})]})]},t)}))})]})},h=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=(t[0],t[1]),n=Object(a.useState)(""),s=Object(o.a)(n,2),i=s[0],r=s[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"top-container",children:[Object(j.jsxs)("div",{className:"welcome-header-container",children:[Object(j.jsx)("h1",{className:"welcome-h1",children:"Welcome."}),Object(j.jsx)("h2",{className:"welcome-h2",children:"Millions of movies, TV shows and people to discover. Explore Now. "})]}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i&&(fetch("https://api.themoviedb.org/3/search/multi?api_key=e0eb34f3bddc89aabdffd507b370db1e&query="+i).then((function(e){return e.json()})).then((function(e){console.log(e),console.log(i),c(e.results)})),r(""))},children:[Object(j.jsx)("input",{className:"search",type:"search",placeholder:"Search...",value:i,onChange:function(e){console.log(i),r(e.target.value)}}),Object(j.jsx)("button",{className:"submit-button",type:"submit",children:"Search"})]})]}),Object(j.jsx)(b,{})]})},m=c(25),u="https://image.tmdb.org/t/p/w1280",v=function(e,t){var n=Object(a.useState)(""),s=Object(o.a)(n,2),i=s[0],r=s[1];Object(a.useEffect)((function(){d.a.get("https://api.themoviedb.org/3/movie/".concat(e.id,"?api_key=e0eb34f3bddc89aabdffd507b370db1e&language=en-US")).then((function(e){r(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[]);var l,b={backgroundImage:"url(".concat(u+i.backdrop_path,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",color:"white",position:"relative"};c(20);return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"individual-movie-container",style:b,children:[Object(j.jsx)("div",{className:"color-overlay"}),Object(j.jsx)("div",{className:"solo-movie-container",children:Object(j.jsx)("img",{src:u+i.poster_path})}),Object(j.jsxs)("div",{className:"individual-movie-info",children:[Object(j.jsx)("h1",{className:"movie-h1",children:i.title}),Object(j.jsxs)("div",{className:"genres",children:[Object(j.jsxs)("p",{children:[i.release_date," \u2022 "]}),Object(j.jsxs)("p",{children:[i.runtime," mins"]})]}),Object(j.jsxs)("div",{className:"trailer-button",children:[Object(j.jsx)("span",{className:"tag ".concat((l=i.vote_average,l>=8?"green":l>=6?"orange":"red")),children:i.vote_average}),Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAB1SURBVEhL7dGxDoAgDATQwoD//8VKw5E0hgKtuPUt0sGehxQC3YDRLOM5JBfjnNq0b/qCDJBShePStIEGwaVNc64G0qrN54BOC3Jd0Yj2MccCNMcCtCv6/Se7G9S912o5czXYWdyZGtS92bJ8C7dgGEN4I3oAvDo0Fno3b/gAAAAASUVORK5CYII="}),Object(j.jsx)("a",{href:"/TMDB-Project/movies/videos/".concat(i.id),children:"Videos"})]}),Object(j.jsx)("h4",{children:Object(j.jsx)("i",{children:i.tagline})}),Object(j.jsx)("h3",{children:"Overview"}),Object(j.jsx)("p",{children:i.overview})]})]})})},O=(c(58),function(e,t){var c=Object(a.useState)(""),n=Object(o.a)(c,2),s=n[0],i=n[1],r=Object(a.useState)([]),l=Object(o.a)(r,2),b=l[0],h=l[1];Object(a.useEffect)((function(){d.a.get("https://api.themoviedb.org/3/movie/".concat(e.id,"?api_key=e0eb34f3bddc89aabdffd507b370db1e&language=en-US")).then((function(e){i(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){d.a.get("https://api.themoviedb.org/3/movie/".concat(e.id,"/videos?api_key=e0eb34f3bddc89aabdffd507b370db1e&language=en-US")).then((function(e){h(e.data.results),console.log(e.data.results)})).catch((function(e){console.log(e)}))}),[]);var m={backgroundImage:"url(".concat("https://image.tmdb.org/t/p/w1280"+s.backdrop_path,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",color:"white",position:"relative"};return Object(j.jsxs)("div",{className:"media-contaier",style:m,children:[Object(j.jsx)("div",{className:"color-overlay"}),Object(j.jsx)("div",{className:"media",children:b.map((function(e,t){return Object(j.jsxs)("div",{className:"video-container",children:[Object(j.jsx)("h1",{children:e.type}),Object(j.jsx)("h3",{children:e.name}),Object(j.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/".concat(e.key),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]},t)}))})]})});var g=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],n=t[1],s=function(){return n(!1)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{children:Object(j.jsxs)("nav",{className:"navbar",children:[Object(j.jsx)("div",{className:"navbar-leftside",children:Object(j.jsx)("a",{href:"/TMDB-Project/",children:Object(j.jsx)("img",{src:r,alt:"TMDB LOGO"})})}),Object(j.jsx)("div",{className:c?"menu-btn open":"menu-btn",onClick:function(){return n(!c)},children:Object(j.jsx)("div",{className:"menu-btn_burger"})}),Object(j.jsx)("div",{className:"navbar-rightside",children:Object(j.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-links",onClick:s,children:"MOVIES"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-links",onClick:s,children:"TV SHOWS"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-links",onClick:s,children:"ACTORS"})})]})})]})}),Object(j.jsxs)(m.a,{children:[Object(j.jsx)(h,{path:"/TMDB-Project/"}),Object(j.jsx)(v,{path:"/TMDB-Project/movies/:id"}),Object(j.jsx)(O,{path:"/TMDB-Project/movies/videos/:id"})]}),Object(j.jsx)("footer",{children:Object(j.jsx)("p",{children:"TMDB @2021"})})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,61)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),p()}},[[59,1,2]]]);
//# sourceMappingURL=main.5b4a7ad3.chunk.js.map