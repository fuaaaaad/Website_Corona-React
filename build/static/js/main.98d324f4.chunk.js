(this.webpackJsonphackathon=this.webpackJsonphackathon||[]).push([[0],{197:function(e,t,a){},200:function(e,t,a){},201:function(e,t,a){e.exports=a.p+"static/media/Hospital.e93ed6ec.jpg"},202:function(e,t,a){e.exports=a.p+"static/media/Med.b3daae2a.jpg"},203:function(e,t,a){e.exports=a.p+"static/media/Helpline.43e395f3.jpg"},204:function(e,t,a){e.exports=a.p+"static/media/notification.76bec615.png"},206:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(73),c=a.n(r),o=(a(80),a(13)),s=a(14),i=a(17),m=a(16),u=a(21),d=a(20),p=a.n(d),E=a(23),h=a(209),b=(a(54),a(97),function(e){var t=Object(n.useState)({click:!1}),a=Object(E.a)(t,2),r=a[0],c=a[1],o=null,s=function(){c({click:!r.click})};return o=r.click?l.a.createElement(h.a.Body,{className:"box",style:{width:"18rem"},onClick:s},l.a.createElement(h.a.Title,null,e.state),l.a.createElement(h.a.Text,null,"Total Rural Hospitals: ",e.ruralHospitals),l.a.createElement(h.a.Text,null,"Total Rural Beds:  ",e.ruralBeds),l.a.createElement(h.a.Text,null,"Total Urban Hospital: ",e.urbanHospitals),l.a.createElement(h.a.Text,null,"Total Urban Beds: ",e.urbanBeds),l.a.createElement(h.a.Text,null,"Total Hospitals: ",e.totalHospitals),l.a.createElement(h.a.Text,null,"Total Beds: ",e.totalBeds)):l.a.createElement(h.a.Body,{className:"box",style:{width:"18rem"},onClick:s},l.a.createElement(h.a.Title,null,e.state),l.a.createElement(h.a.Text,null,"Click to know about the informations in ",e.state,l.a.createElement("br",null))),l.a.createElement("div",null,o)}),y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={posts:[],summary:[],selectedPostId:null,error:!1},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://api.rootnet.in/covid19-in/hospitals/beds").then((function(t){console.log(t);var a=t.data.data.regional.map((function(e){return Object(u.a)({},e)}));e.setState({posts:a}),console.log(t)}))}},{key:"render",value:function(){var e=l.a.createElement("p",{style:{textAign:"center"}},"Something went wrong!");return this.state.error||(e=this.state.posts.map((function(e){return l.a.createElement(b,{state:e.state,ruralHospitals:e.ruralHospitals,ruralBeds:e.ruralBeds,urbanHospitals:e.urbanHospitals,urbanBeds:e.urbanBeds,totalHospitals:e.totalHospitals,totalBeds:e.totalBeds,asOn:e.asOn})}))),l.a.createElement("div",{className:"Data"},l.a.createElement(h.a.Header,{style:{color:"white",alignSelf:"center"}},"Hospitals and Beds"),l.a.createElement(h.a.Body,null,l.a.createElement(h.a.Title,{style:{color:"white"}},"Summary"),l.a.createElement(h.a.Text,{style:{color:"white"}},"Total Rural Hospitals: 39620",l.a.createElement("br",null),"Total Rural Beds: 559176",l.a.createElement("br",null),"Total Urban Hospital: 7544",l.a.createElement("br",null),"Total Urban Beds: 862346",l.a.createElement("br",null),"Total Hospitals: 47164",l.a.createElement("br",null),"Total Beds:  1421522")),l.a.createElement(h.a.Footer,{className:"text-muted"},"Last updated April 26 2020"),l.a.createElement("br",null),l.a.createElement("div",{className:"grid"},e))}}]),a}(n.Component),v=(a(71),function(e){var t=Object(n.useState)({click:!1}),a=Object(E.a)(t,2),r=a[0],c=a[1],o=null,s=function(){c({click:!r.click})};return o=r.click?l.a.createElement(h.a.Body,{className:"box",style:{width:"18rem"},onClick:s},l.a.createElement(h.a.Title,null,e.state),l.a.createElement(h.a.Text,null,"State : ",e.state,l.a.createElement("br",null),"Name : ",e.name,l.a.createElement("br",null),"City : ",e.city,l.a.createElement("br",null),"Ownership : ",e.ownership,l.a.createElement("br",null),"Admission capacity : ",e.admissionCapacity,l.a.createElement("br",null),"Hospital beds : ",e.hospitalBeds)):l.a.createElement(h.a.Body,{className:"box",style:{width:"18rem"},onClick:s},l.a.createElement(h.a.Title,null,e.state),l.a.createElement(h.a.Text,null,"State : ",e.state,l.a.createElement("br",null))),l.a.createElement("div",{className:"App"},l.a.createElement("div",{key:e.index},o))}),f=a(207),g=a(210),k=a(211),w=a(208),T=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={posts:[],selectedPostId:null,error:!1,click:!1,search:""},e.renderTable=function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",{style:{color:"white"}},e.state),l.a.createElement("td",{style:{color:"white"}},e.name),l.a.createElement("td",{style:{color:"white"}},e.city),l.a.createElement("td",{style:{color:"white"}},e.ownership),l.a.createElement("td",{style:{color:"white"}},e.admissionCapacity),l.a.createElement("td",{style:{color:"white"}},e.hospitalBeds))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://api.rootnet.in/covid19-in/hospitals/medical-colleges").then((function(t){console.log(t);var a=t.data.data.medicalColleges.map((function(e){return Object(u.a)({},e)}));e.setState({posts:a}),console.log(t)}))}},{key:"render",value:function(){var e=this;return this.state.error||this.state.posts.map((function(t,a){return l.a.createElement("div",null,l.a.createElement(v,{click:e.state.click,index:a,state:t.state,name:t.name,city:t.city,ownership:t.ownership,admissionCapacity:t.admissionCapacity,hospitalBeds:t.hospitalBeds}))})),l.a.createElement("div",{className:"App",styles:{marginDown:"10 px"}},l.a.createElement(h.a.Header,{style:{color:"white"}},"Medical colleges and Beds"),l.a.createElement(h.a.Body,null,l.a.createElement(h.a.Text,null)),l.a.createElement(h.a.Footer,{className:"text-muted"},"Last updated April 26 2020"),l.a.createElement("div",null,l.a.createElement(f.a,{className:"mb-3",styles:{padding:"10px 10px"}},l.a.createElement(g.a,{placeholder:"Search","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),l.a.createElement(f.a.Append,null,l.a.createElement(k.a,{variant:"outline-secondary"},"Search")))),l.a.createElement(w.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{style:{color:"white"}},"State"),l.a.createElement("th",{style:{color:"white"}},"Name"),l.a.createElement("th",{style:{color:"white"}},"city"),l.a.createElement("th",{style:{color:"white"}},"ownership"),l.a.createElement("th",{style:{color:"white"}},"Admission Capacity"),l.a.createElement("th",{style:{color:"white"}},"Hospital Beds"))),l.a.createElement("tbody",null,this.state.posts.map(this.renderTable))))}}]),a}(n.Component),C=(a(197),a(5)),N=["btn--primary","btn--outline","btn--test"],x=["btn--medium","btn--large"],O=function(e){var t=e.children,a=e.type,n=e.onClick,r=e.buttonStyle,c=e.buttonSize,o=N.includes(r)?r:N[0],s=x.includes(c)?c:x[0];return l.a.createElement(C.b,{to:"/sign-up",className:"btn-mobile"},l.a.createElement("button",{className:"btn ".concat(o," ").concat(s),onClick:n,type:a},t))};a(200);var B=function(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!0),o=Object(E.a)(c,2),s=o[0],i=o[1],m=function(){return r(!1)},u=function(){window.innerWidth<=960?i(!1):i(!0)};return Object(n.useEffect)((function(){u()}),[]),window.addEventListener("resize",u),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-container"},l.a.createElement(C.b,{to:"/",className:"navbar-logo",onClick:m},"Covid 19",l.a.createElement("i",{class:"fab fa-typo3"})),l.a.createElement("div",{className:"menu-icon",onClick:function(){return r(!a)}},l.a.createElement("i",{className:a?"fas fa-times":"fas fa-bars"})),l.a.createElement("ul",{className:a?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(C.b,{to:"/",className:"nav-links",onClick:m},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(C.b,{to:"/ContactLink",className:"nav-links",onClick:m},"Notifications & advisories:")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(C.b,{to:"/Hospitals and Beds",className:"nav-links",onClick:m},"Hospital Dashboards")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(C.b,{to:"/ContactNumber",className:"nav-links",onClick:m},"Helpline Numbers"))),s&&l.a.createElement(O,{buttonStyle:"btn--outline"},"SIGN UP"))))},j=a(3),H=function(){return l.a.createElement("div",{style:{justifyContent:"centre"}},l.a.createElement(C.b,{to:"/Hospitals and Beds"},l.a.createElement(h.a,{className:"bg-dark text-white"},l.a.createElement(h.a.Img,{src:a(201),alt:"Card image"}),l.a.createElement(h.a.ImgOverlay,null,l.a.createElement(h.a.Title,null,"Hospitals and Beds"),l.a.createElement(h.a.Text,null,"Get live update on the hospitals around you. Click to redirect to this page"),l.a.createElement(h.a.Text,null,"Last updated 5 months ago")))),l.a.createElement(C.b,{to:"/Medical Colleges and Beds"},l.a.createElement(h.a,{className:"bg-dark text-white"},l.a.createElement(h.a.Img,{src:a(202),alt:"Card image"}),l.a.createElement(h.a.ImgOverlay,null,l.a.createElement(h.a.Title,null,"Medical Colleges and Beds"),l.a.createElement(h.a.Text,null,"Get live update on the medical colleges around you. Click to redirect to this page"),l.a.createElement(h.a.Text,null,"Last updated 5 months ago")))),l.a.createElement(C.b,{to:"/ContactNumber"},l.a.createElement(h.a,{className:"bg-dark text-white"},l.a.createElement(h.a.Img,{src:a(203),alt:"Card image"}),l.a.createElement(h.a.ImgOverlay,null,l.a.createElement(h.a.Title,{style:{color:"black"}},"Helpline and Contact number"),l.a.createElement(h.a.Text,{style:{color:"black"}},"Here is a list of Helpline numbers which you can contact in times of emergency. Click to redirect to this page"),l.a.createElement(h.a.Text,{style:{color:"black"}},"Last updated 5 months ago")))),l.a.createElement(C.b,{to:"/ContactInfo"},l.a.createElement(h.a,{className:"bg-dark text-white"},l.a.createElement(h.a.Img,{src:a(204),alt:"Card image"}),l.a.createElement(h.a.ImgOverlay,null,l.a.createElement(h.a.Title,{style:{font:"black"}},"Notifications and Advisories"),l.a.createElement(h.a.Text,{style:{font:"black"}},"Here are a few Website Links which will give you enough informations about the covid-19. Click to redirect to this page"),l.a.createElement(h.a.Text,null,"Last updated 5 months ago")))))},S=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={posts:[],selectedPostId:null,error:!1,click:!1},e.renderTable=function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",{style:{color:"white"}},e.loc),l.a.createElement("td",{style:{color:"white"}},e.number))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://api.rootnet.in/covid19-in/contacts").then((function(t){console.log(t);var a=t.data.data.contacts.regional.map((function(e){return Object(u.a)({},e)}));e.setState({posts:a}),console.log(t)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h.a.Header,{style:{color:"white"}},"Helpline Numbers"),l.a.createElement(h.a.Body,null,l.a.createElement(h.a.Text,null)),l.a.createElement(h.a.Footer,{className:"text-muted"},"Last updated April 26 2020"),l.a.createElement(w.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{style:{color:"white"}},"Location"),l.a.createElement("th",{style:{color:"white"}},"Contact Number"))),l.a.createElement("tbody",null,this.state.posts.map(this.renderTable))))}}]),a}(n.Component),A=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={posts:[],selectedPostId:null,error:!1,click:!1},e.renderTable=function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",{style:{color:"white"}},e.title.slice(0,10)),l.a.createElement("td",{style:{color:"white"}},e.title),l.a.createElement("td",{style:{color:"white"}},l.a.createElement("a",{href:e.link,style:{color:"black"}}," Link")))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://api.rootnet.in/covid19-in/notifications").then((function(t){console.log(t);var a=t.data.data.notifications.map((function(e){return Object(u.a)({},e)}));e.setState({posts:a}),console.log(t)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h.a.Header,{style:{color:"white",justifyContent:"center"}},"Notifications and Advisories"),l.a.createElement(h.a.Body,null,l.a.createElement(h.a.Text,{style:{color:"white"}},"Click on Link to redirect to Guideline webpages")),l.a.createElement(h.a.Footer,{className:"text-muted"},"Last updated April 26 2020"),l.a.createElement(w.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{style:{color:"white"}},"Date"),l.a.createElement("th",{style:{color:"white"}},"Title"),l.a.createElement("th",{style:{color:"white"}},"Link"))),l.a.createElement("tbody",null,this.state.posts.map(this.renderTable))))}}]),a}(n.Component),L=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={hospital:!1},e.toggleHander=function(){e.setState({hospital:!e.state.hospital})},e}return Object(s.a)(a,[{key:"render",value:function(){return this.state.hospital?l.a.createElement(y,null):l.a.createElement(T,null),l.a.createElement("div",{className:"App"},l.a.createElement(C.a,null,l.a.createElement(B,null),l.a.createElement(j.c,null,l.a.createElement(j.a,{path:"/",exact:!0,component:H}),l.a.createElement(j.a,{path:"/Hospitals and Beds",component:y}),l.a.createElement(j.a,{path:"/Medical Colleges and Beds",component:T}),l.a.createElement(j.a,{path:"/ContactLink",exact:!0,component:A}),l.a.createElement(j.a,{path:"/ContactNumber",exact:!0,component:S}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(205);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,t,a){},71:function(e,t,a){},75:function(e,t,a){e.exports=a(206)},80:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.98d324f4.chunk.js.map