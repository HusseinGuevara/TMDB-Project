(this.webpackJsonptmdb=this.webpackJsonptmdb||[]).push([[0],{20:function(e,t){e.exports=function(e){for(var t="",c="",n="",a={"01":"January","02":"Februery","03":"March","04":"April","05":"May","06":"June","07":"July","08":"August","09":"September",10:"October",11:"Novemebr",12:"December"},s=0;s<=e.length-7;s++)t+=e[s];for(var i=5;i<=e.length-4;i++)n+=e[i];for(var r=8;r<=e.length-1;r++)c+=e[r];return a.hasOwnProperty(n),a[n]+" "+c+", "+t}},30:function(e,t,c){},31:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(23),i=c.n(s),r=(c(30),c(3)),o=c.p+"static/media/tmdblogo.e73804e8.jpg",l=(c(31),c(6)),j=c.n(l),d=c(0),b=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],s=t[1];Object(n.useEffect)((function(){j.a.get("https://api.themoviedb.org/3/movie/popular?api_key=e0eb34f3bddc89aabdffd507b370db1e&language=en-US&page=1").then((function(e){s(e.data.results),console.log(e.data)})).catch((function(e){console.log(e)}))}),[]);var i=c(20);return Object(d.jsxs)("div",{className:"popular-movies-container",children:[Object(d.jsx)("div",{className:"popular-movies-h2",children:Object(d.jsx)("h2",{children:"What's Popular"})}),Object(d.jsx)("div",{className:"movies-container",children:a.map((function(e,t){return Object(d.jsxs)("div",{className:"movie-container",children:[Object(d.jsx)("div",{className:"movie-image",children:Object(d.jsx)("a",{href:"/TMDB-Project/movies/".concat(e.id),children:Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w1280"+e.poster_path,alt:e.title})})}),Object(d.jsxs)("div",{className:"movie-info",children:[Object(d.jsx)("a",{href:"/TMDB-Project/movies/".concat(e.id),children:Object(d.jsx)("h4",{children:e.title})}),Object(d.jsx)("p",{children:i(e.release_date)})]})]},t)}))})]})},h=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=(t[0],t[1]),a=Object(n.useState)(""),s=Object(r.a)(a,2),i=s[0],o=s[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"top-container",children:[Object(d.jsxs)("div",{className:"welcome-header-container",children:[Object(d.jsx)("h1",{className:"welcome-h1",children:"Welcome."}),Object(d.jsx)("h2",{className:"welcome-h2",children:"Millions of movies, TV shows and people to discover. Explore Now. "})]}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i&&(fetch("https://api.themoviedb.org/3/search/multi?api_key=e0eb34f3bddc89aabdffd507b370db1e&query="+i).then((function(e){return e.json()})).then((function(e){console.log(e),console.log(i),c(e.results)})),o(""))},children:[Object(d.jsx)("input",{className:"search",type:"search",placeholder:"Search...",value:i,onChange:function(e){console.log(i),o(e.target.value)}}),Object(d.jsx)("button",{className:"submit-button",type:"submit",children:"Search"})]})]}),Object(d.jsx)(b,{})]})},m=c(25),v="https://image.tmdb.org/t/p/w1280",u=function(e,t){var a=Object(n.useState)(""),s=Object(r.a)(a,2),i=s[0],o=s[1];Object(n.useEffect)((function(){j.a.get("https://api.themoviedb.org/3/movie/".concat(e.id,"?api_key=e0eb34f3bddc89aabdffd507b370db1e&language=en-US")).then((function(e){o(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[]);var l,b={backgroundImage:"url(".concat(v+i.backdrop_path,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",color:"white",position:"relative"};c(20);return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"individual-movie-container",style:b,children:[Object(d.jsx)("div",{className:"color-overlay"}),Object(d.jsx)("div",{className:"solo-movie-container",children:Object(d.jsx)("img",{src:v+i.poster_path})}),Object(d.jsxs)("div",{className:"individual-movie-info",children:[Object(d.jsx)("h1",{className:"movie-h1",children:i.title}),Object(d.jsxs)("div",{className:"genres",children:[Object(d.jsxs)("p",{children:[i.release_date," \u2022 "]}),Object(d.jsxs)("p",{children:[i.runtime," mins"]})]}),Object(d.jsxs)("div",{className:"trailer-button",children:[Object(d.jsx)("span",{className:"tag ".concat((l=i.vote_average,l>=8?"green":l>=6?"orange":"red")),children:i.vote_average}),Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAB1SURBVEhL7dGxDoAgDATQwoD//8VKw5E0hgKtuPUt0sGehxQC3YDRLOM5JBfjnNq0b/qCDJBShePStIEGwaVNc64G0qrN54BOC3Jd0Yj2MccCNMcCtCv6/Se7G9S912o5czXYWdyZGtS92bJ8C7dgGEN4I3oAvDo0Fno3b/gAAAAASUVORK5CYII="}),Object(d.jsx)("a",{href:"/TMDB-Project/movies/videos/".concat(i.id),children:"Videos"})]}),Object(d.jsx)("h4",{children:Object(d.jsx)("i",{children:i.tagline})}),Object(d.jsx)("h3",{children:"Overview"}),Object(d.jsx)("p",{children:i.overview})]})]})})},O=(c(58),function(e,t){return Object(d.jsx)("h1",{children:"IndividualMovie"})});var x=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1],s=function(){return a(!1)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{children:Object(d.jsxs)("nav",{className:"navbar",children:[Object(d.jsx)("div",{className:"navbar-leftside",children:Object(d.jsx)("a",{href:"/TMDB-Project/",children:Object(d.jsx)("img",{src:o,alt:"TMDB LOGO"})})}),Object(d.jsx)("div",{className:c?"menu-btn open":"menu-btn",onClick:function(){return a(!c)},children:Object(d.jsx)("div",{className:"menu-btn_burger"})}),Object(d.jsx)("div",{className:"navbar-rightside",children:Object(d.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-links",onClick:s,children:"MOVIES"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-links",onClick:s,children:"TV SHOWS"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-links",onClick:s,children:"ACTORS"})})]})})]})}),Object(d.jsxs)(m.a,{children:[Object(d.jsx)(h,{path:"/TMDB-Project/"}),Object(d.jsx)(u,{path:"/TMDB-Project/movies/:id"}),Object(d.jsx)(O,{path:"/TMDB-Project/movies/videos/:id"})]}),Object(d.jsx)("footer",{children:Object(d.jsx)("p",{children:"TMDB @2021"})})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,61)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),g()}},[[59,1,2]]]);
//# sourceMappingURL=main.a9b74754.chunk.js.map