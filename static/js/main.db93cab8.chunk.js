(this.webpackJsonptmdb=this.webpackJsonptmdb||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(17),i=c.n(s),o=(c(24),c(3)),r=c.p+"static/media/tmdblogo.e73804e8.jpg",l=(c(25),c(5)),j=c.n(l),b=c(0),d=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){j.a.get("https://api.themoviedb.org/3/movie/popular?api_key=e0eb34f3bddc89aabdffd507b370db1e&language=en-US&page=1").then((function(e){a(e.data.results),console.log(e.data)})).catch((function(e){console.log(e)}))}),[]),console.log(function(e){for(var t="",c="",n="",a={"01":"January","02":"Februery","03":"March","04":"April","05":"May","06":"June","07":"July","08":"August","09":"September",10:"October",11:"Novemebr",12:"December"},s=0;s<=e.length-7;s++)t+=e[s];for(var i=5;i<=e.length-4;i++)n+=e[i];for(var o=8;o<=e.length-1;o++)c+=e[o];return a.hasOwnProperty(n),a[n]+" "+c+", "+t}("2021-12-10")),Object(b.jsxs)("div",{className:"popular-movies-container",children:[Object(b.jsx)("div",{className:"popular-movies-h2",children:Object(b.jsx)("h2",{children:"What's Popular"})}),Object(b.jsx)("div",{className:"movies-container",children:c.map((function(e,t){return Object(b.jsxs)("div",{className:"movie-container",children:[Object(b.jsx)("div",{className:"movie-image",children:Object(b.jsx)("a",{href:"/TMDB-Project/movies/".concat(e.id),children:Object(b.jsx)("img",{src:"https://image.tmdb.org/t/p/w1280"+e.poster_path,alt:e.title})})}),Object(b.jsxs)("div",{className:"movie-info",children:[Object(b.jsx)("a",{href:"/TMDB-Project/movies/".concat(e.id),children:Object(b.jsx)("h4",{children:e.title})}),Object(b.jsx)("p",{children:e.release_date})]})]},t)}))})]})},h=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=(t[0],t[1]),a=Object(n.useState)(""),s=Object(o.a)(a,2),i=s[0],r=s[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"top-container",children:[Object(b.jsxs)("div",{className:"welcome-header-container",children:[Object(b.jsx)("h1",{className:"welcome-h1",children:"Welcome."}),Object(b.jsx)("h2",{className:"welcome-h2",children:"Millions of movies, TV shows and people to discover. Explore Now. "})]}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i&&(fetch("https://api.themoviedb.org/3/search/multi?api_key=e0eb34f3bddc89aabdffd507b370db1e&query="+i).then((function(e){return e.json()})).then((function(e){console.log(e),console.log(i),c(e.results)})),r(""))},children:[Object(b.jsx)("input",{className:"search",type:"search",placeholder:"Search...",value:i,onChange:function(e){console.log(i),r(e.target.value)}}),Object(b.jsx)("button",{className:"submit-button",type:"submit",children:"Search"})]})]}),Object(b.jsx)(d,{})]})},u=c(19),m=function(e,t){var c=Object(n.useState)(""),a=Object(o.a)(c,2),s=(a[0],a[1]);return Object(n.useEffect)((function(){j.a.get("https://api.themoviedb.org/3/movie/".concat(e.id,"?api_key=e0eb34f3bddc89aabdffd507b370db1e&language=en-US")).then((function(e){s(e.data),console.log(e.data)})).catch((function(e){console.log(e)})),console.log("Hello!")}),[]),Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Hello!!"})})};var O=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],a=t[1],s=function(){return a(!1)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{children:Object(b.jsxs)("nav",{className:"navbar",children:[Object(b.jsx)("div",{className:"navbar-leftside",children:Object(b.jsx)("img",{src:r,alt:"TMDB LOGO"})}),Object(b.jsx)("div",{className:c?"menu-btn open":"menu-btn",onClick:function(){return a(!c)},children:Object(b.jsx)("div",{className:"menu-btn_burger"})}),Object(b.jsx)("div",{className:"navbar-rightside",children:Object(b.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-links",onClick:s,children:"MOVIES"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-links",onClick:s,children:"TV SHOWS"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-links",onClick:s,children:"ACTORS"})})]})})]})}),Object(b.jsxs)(u.a,{children:[Object(b.jsx)(h,{path:"/TMDB-Project"}),Object(b.jsx)(m,{path:"/TMDB-Project/movie/:id"})]}),Object(b.jsx)("footer",{children:Object(b.jsx)("p",{children:"TMDB @2021"})})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),v()}},[[52,1,2]]]);
//# sourceMappingURL=main.db93cab8.chunk.js.map