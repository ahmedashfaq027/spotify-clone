(this["webpackJsonpspotify-clone-app"]=this["webpackJsonpspotify-clone-app"]||[]).push([[0],{47:function(e,t,a){e.exports=a(67)},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(16),r=a.n(c),o=(a(52),a(10)),s=(a(53),a(54),"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("571b8774484a4ea180e709a8ccf45a16","&redirect_uri=").concat("http://localhost:3000/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true")),i=function(){return l.a.createElement("div",{className:"login"},l.a.createElement("img",{src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),l.a.createElement("a",{href:s},"LOGIN WITH SPOTIFY"))},m=a(26),u=a.n(m),E=(a(55),a(56),a(57),function(e){var t=e.title,a=e.Icon;return l.a.createElement("div",{className:"sidebarOption"},a&&l.a.createElement(a,{className:"sidebarOption__icon"}),a?l.a.createElement("h4",null,t):l.a.createElement("p",null,t))}),d=a(27),p=a.n(d),f=a(19),_=a.n(f),v=a(32),y=a.n(v),h=Object(n.createContext)(),g=function(){return Object(n.useContext)(h)},b=function(e){var t=e.initialState,a=e.reducer,c=e.children;return l.a.createElement(h.Provider,{value:Object(n.useReducer)(a,t)},c)},N=function(){var e,t=g(),a=Object(o.a)(t,2),n=a[0].playlists;a[1];return l.a.createElement("div",{className:"sidebar"},l.a.createElement("img",{className:"sidebar__logo",src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),l.a.createElement(E,{title:"Home",Icon:p.a}),l.a.createElement(E,{title:"Search",Icon:_.a}),l.a.createElement(E,{title:"Your Library",Icon:y.a}),l.a.createElement("br",null),l.a.createElement("strong",{className:"sidebar__title"},"PLAYLISTS"),l.a.createElement("hr",null),null===n||void 0===n||null===(e=n.items)||void 0===e?void 0:e.map((function(e){return l.a.createElement(E,{title:e.name})})))},S=(a(63),a(64),a(81)),w=function(e){e.spotify;var t,a=g(),n=Object(o.a)(a,2),c=n[0].user;n[1];return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"header__left"},l.a.createElement(_.a,null),l.a.createElement("input",{placeholder:"Search for Artists, Songs, or Podcasts",type:"text"})),l.a.createElement("div",{className:"header__right"},l.a.createElement(S.a,{src:null===c||void 0===c||null===(t=c.images[0])||void 0===t?void 0:t.url,alt:null===c||void 0===c?void 0:c.display_name}),l.a.createElement("h4",null,null===c||void 0===c?void 0:c.display_name)))},O=a(33),k=a.n(O),j=a(34),T=a.n(j),I=a(35),L=a.n(I),P=(a(65),function(e){var t=e.track,a=void 0===t?"test":t;return l.a.createElement("div",{className:"songRow"},l.a.createElement("img",{className:"songRow__album",src:a.album.images[0].url,alt:""}),l.a.createElement("div",{className:"songRow__info"},l.a.createElement("h1",null,a.name),l.a.createElement("p",null,a.artists.map((function(e){return e.name})).join(", "),a.album.name)))}),R=function(e){var t=e.spotify,a=g(),n=Object(o.a)(a,2),c=n[0].discover_weekly;n[1];return l.a.createElement("div",{className:"body"},l.a.createElement(w,{spotify:t}),l.a.createElement("div",{className:"body__info"},l.a.createElement("img",{src:null===c||void 0===c?void 0:c.images[0].url,alt:""}),l.a.createElement("div",{className:"body__infoText"},l.a.createElement("strong",null,"PLAYLIST"),l.a.createElement("h2",null,"Discover Weekly"),l.a.createElement("p",null,null===c||void 0===c?void 0:c.description))),l.a.createElement("div",{className:"body__songs"},l.a.createElement("div",{className:"body__icons"},l.a.createElement(k.a,{className:"body__shuffle"}),l.a.createElement(T.a,{fontSize:"large"}),l.a.createElement(L.a,null)),null===c||void 0===c?void 0:c.tracks.items.map((function(e){return l.a.createElement(P,{track:e.track})}))))},Y=(a(66),a(38)),x=a.n(Y),W=a(37),A=a.n(W),C=a(39),U=a.n(C),K=a(36),z=a.n(K),D=a(40),H=a.n(D),B=a(79),F=a(80),J=a(41),M=a.n(J),V=a(42),G=a.n(V),Q=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"footer__left"},l.a.createElement("img",{className:"footer__albumLogo",src:"",alt:""}),l.a.createElement("div",{className:"footer__songInfo"},l.a.createElement("h4",null,"Yeah!"),l.a.createElement("p",null,"Usher"))),l.a.createElement("div",{className:"footer__center"},l.a.createElement(z.a,{className:"footer__green"}),l.a.createElement(A.a,{className:"footer__icon"}),l.a.createElement(x.a,{fontSize:"large",className:"footer__icon"}),l.a.createElement(U.a,{className:"footer__icon"}),l.a.createElement(H.a,{className:"footer__green"})),l.a.createElement("div",{className:"footer__right"},l.a.createElement(B.a,{container:!0,spacing:2},l.a.createElement(B.a,{item:!0},l.a.createElement(M.a,null)),l.a.createElement(B.a,{item:!0},l.a.createElement(G.a,null)),l.a.createElement(B.a,{item:!0,xs:!0},l.a.createElement(F.a,null)))))},X=function(e){var t=e.spotify;return l.a.createElement("div",{className:"player"},l.a.createElement("div",{className:"player__body"},l.a.createElement(N,null),l.a.createElement(R,{spotify:t})),l.a.createElement(Q,null))},Z=new u.a;var $=function(){var e=g(),t=Object(o.a)(e,2),a=t[0],c=(a.user,a.token),r=t[1];return Object(n.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var a=t.split("=");return e[a[0]]=decodeURIComponent(a[1]),e}),{});window.location.hash="";var t=e.access_token;console.log(t),t&&(r({type:"SET_TOKEN",token:t}),Z.setAccessToken(t),Z.getMe().then((function(e){r({type:"SET_USER",user:e})})),Z.getUserPlaylists().then((function(e){r({type:"SET_PLAYLISTS",playlists:e})})),Z.getPlaylist("37i9dQZF1E36tW5bkWLjXH").then((function(e){console.log("response:"+e),r({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})})))}),[]),l.a.createElement("div",{className:"App"},c?l.a.createElement(X,{spotify:Z}):l.a.createElement(i,null))},q=a(9),ee=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(q.a)(Object(q.a)({},e),{},{user:t.user});case"SET_TOKEN":return Object(q.a)(Object(q.a)({},e),{},{token:t.token});case"SET_PLAYLISTS":return Object(q.a)(Object(q.a)({},e),{},{playlists:t.playlists});case"SET_DISCOVER_WEEKLY":return Object(q.a)(Object(q.a)({},e),{},{discover_weekly:t.discover_weekly});default:return e}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,{initialState:{user:null,playlists:[],playing:!1,item:null},reducer:ee},l.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.56c6c2b9.chunk.js.map