(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{172:function(e,t,n){e.exports=n(402)},177:function(e,t,n){},178:function(e,t,n){},198:function(e,t,n){},402:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(73),s=n.n(r),i=(n(177),n(30)),l=n(74),c=n(11),u=n(13),m=n(15),g=n(14),h=n(16),p=(n(178),n(32)),d=n(17),f=n.n(d),v=function e(){var t=this;Object(c.a)(this,e),this.signup=function(e,n){return t.service.post("/signup",{username:e,password:n}).then(function(e){return e.data})},this.login=function(e,n){return t.service.post("/login",{username:e,password:n}).then(function(e){return e.data})},this.currentUser=function(){return t.service.get("/getcurrentuser").then(function(e){return e.data})},this.logout=function(){return t.service.post("/logout",{}).then(function(e){return e.data})};var n=f.a.create({baseURL:"https://jiu-jitsu-locator.herokuapp.com/api/auth",withCredentials:!0});this.service=n},y=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(g.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(i.a)({},e.target.name,e.target.value))},n.tryToSignUp=function(e){e.preventDefault();var t=n.state.usernameInput,a=n.state.passwordInput;n.service.signup(t,a).then(function(){n.props.toggleForm("signup"),n.props.getUser()})},n.state={usernameInput:"",passwordInput:""},n.service=new v,n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.tryToSignUp},o.a.createElement("h3",null,"Signup For An Account"),o.a.createElement("legend",null,"Username"),o.a.createElement("input",{value:this.state.usernameInput,name:"usernameInput",onChange:this.handleChange}),o.a.createElement("legend",null,"Password"),o.a.createElement("input",{value:this.state.passwordInput,name:"passwordInput",onChange:this.handleChange}),o.a.createElement("button",null,"Submit"))}}]),t}(a.Component),E=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(g.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(i.a)({},e.target.name,e.target.value))},n.tryToLogin=function(e){e.preventDefault();var t=n.state.usernameInput,a=n.state.passwordInput;n.service.login(t,a).then(function(){n.props.toggleForm("login"),n.props.getUser()})},n.state={usernameInput:"",passwordInput:""},n.service=new v,n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.tryToLogin},o.a.createElement("h3",null,"Already a member"),o.a.createElement("legend",null,"Username"),o.a.createElement("input",{value:this.state.usernameInput,name:"usernameInput",onChange:this.handleChange}),o.a.createElement("legend",null,"Password"),o.a.createElement("input",{value:this.state.passwordInput,name:"passwordInput",onChange:this.handleChange}),o.a.createElement("button",null,"Submit"))}}]),t}(a.Component);n(198);var b,C=function(e){return o.a.createElement("nav",null,!e.theUser&&o.a.createElement("span",null,o.a.createElement("button",{onClick:function(){return e.toggleForm("login")}}," Login "),o.a.createElement("button",{onClick:function(){return e.toggleForm("signup")}},"Sign Up")),e.theUser&&o.a.createElement("span",null,"Hey, ",e.theUser.username,"!",o.a.createElement("button",{onClick:function(){e.pleaseLogOut().then(function(){e.getUser()})},style:{textDecoration:"100%"}},"Log out ")))},O=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(g.a)(t).call(this,e))).showComments=function(){var e=[];if(n.props.gymComments.forEach(function(t){console.log("the for each in the details >>>>>>>>>>>>>> )))))))))))))) ",t.gym.toString(),n.props.theGymId.toString()),String(t.gym)===String(n.props.theGymId)&&e.push(t)}),console.log("the state info in the details _______________ ",n.state),e.length>0)return e.map(function(e,t){return console.log("the gym comments >>>>><<<<<<<<>>>>>>>><<<<<<<<<>>>>>> ",e),o.a.createElement("div",{key:t},o.a.createElement("div",null,o.a.createElement("h3",null,e.owner.username),o.a.createElement("h4",null,e.rating)),o.a.createElement("div",null,o.a.createElement("h3",null,e.title),o.a.createElement("p",null,e.content)))})},n.commentCreate=function(e){e.preventDefault(),console.log("calling the create route <<<<<<< ",n.state),f.a.post("https://https://jiu-jitsu-locator.herokuapp.com/reviews/create",{title:n.state.commentTitle,content:n.state.commentReview,rating:n.state.commentRating,gymid:n.props.theGymId},{withCredentials:!0}).then(function(e){console.log("the review that was created >>>>>>> ",e.data),n.setState({commentReview:"",commentTitle:"",commentRating:"",theGymsComments:Object(l.a)(n.props.gymComments).push(e.data)}),n.props.getComments()}).catch(function(e){return console.log("error creating review ",e)})},n.state={commentReview:"",commentTitle:"",commentRating:"",theGymsComments:[]},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(i.a)({},n,a))}},{key:"render",value:function(){var e=this;return console.log("the props in the details ",this.props),o.a.createElement("div",{style:{height:"300px",borderRadius:"4px",width:"30%",float:"left",margin:"10px",padding:"10px"}},this.props.info.name&&o.a.createElement("h2",null,this.props.info.name),this.props.info.formatted_phone_number&&o.a.createElement("h4",null,this.props.info.formatted_phone_number),this.props.info.website&&o.a.createElement("h4",null,"Website         ",this.props.info.website),this.props.info.photos&&o.a.createElement("img",{src:this.props.photo,alt:""}),this.props.info.rating&&o.a.createElement("div",{style:{fontSize:"30px"}},o.a.createElement("img",{style:{height:"120px"},src:"https://icon-library.net/images/star-rating-icon/star-rating-icon-20.jpg"}),this.props.info.rating),this.props.info.name&&o.a.createElement("form",{action:"/create",method:"post",onSubmit:this.commentCreate},o.a.createElement("div",null,o.a.createElement("label",null,"Title"),o.a.createElement("input",{name:"commentTitle",value:this.state.title,onChange:function(t){return e.handleChange(t)}}),o.a.createElement("br",null),o.a.createElement("label",null,"Rating"),o.a.createElement("input",{name:"commentRating",value:this.state.rating,onChange:function(t){return e.handleChange(t)}}),o.a.createElement("br",null),o.a.createElement("label",null,"Comment"),o.a.createElement("input",{name:"commentReview",value:this.state.review,onChange:function(t){return e.handleChange(t)}})),o.a.createElement("input",{style:{border:"1px solid black"},type:"submit",value:"Submit"})),this.showComments())}}]),t}(o.a.Component),w=n(53),j=n.n(w),I=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(g.a)(t).call(this,e))).showGyms=function(){return n.props.allTheGyms.map(function(e,t){return o.a.createElement("div",{key:t,gym:e._id},o.a.createElement("h3",null,e.name),o.a.createElement("p",{style:{maxWidth:"400px"}},e.address," "))})},n.state={editing:!1},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return j.a.fromAddress("{this.props.gym.address}").then(function(e){var t=e.results[0].geometry.location,n=t.lat,a=t.lng;console.log(n,a)},function(e){console.error(e)}),o.a.createElement("div",null,o.a.createElement("h2",null,"I am a GymsIndex component!!"),this.showGyms)}}]),t}(a.Component),S=n(75),k=n.n(S),L=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(g.a)(t).call(this,e))).handleChange=function(e){n.setState({address:e})},n.handleSelect=function(e){Object(S.geocodeByAddress)(e).then(function(e){return Object(S.getLatLng)(e[0])}).then(function(e){return console.log("Success",e)}).catch(function(e){return console.error("Error",e)})},n.state={address:""},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(k.a,{value:this.state.address,onChange:this.handleChange,onSelect:this.handleSelect},function(e){var t=e.getInputProps,n=e.suggestions,a=e.getSuggestionItemProps,r=e.loading;return o.a.createElement("div",null,o.a.createElement("input",t({placeholder:"...",className:"location-search-input"})),o.a.createElement("div",{className:"autocomplete-dropdown-container"},r&&o.a.createElement("div",null,"Loading..."),n.filter(function(e){return e.types.includes("health")}).map(function(e){console.log(e.types.includes("health"));var t=e.active?"suggestion-item--active":"suggestion-item",n=e.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return o.a.createElement("div",a(e,{className:t,style:n}),o.a.createElement("span",null,e.description))})))})}}]),t}(o.a.Component),G=(n(111),n(103)),_=n(38);console.log("what is navigator >>>>>>>>>>>> ",void 0);navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){b={lat:e.coords.latitude,lng:e.coords.longitude}}):b={lat:20,lng:-80};var U=Object(G.a)(Object(G.b)({googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAU9nQ_E20F7o9usfZFFEv8lLeDkLjlCxk",loadingElement:o.a.createElement("div",{style:{height:"100%"}}),containerElement:o.a.createElement("div",{style:{height:"600px",width:"1000px",marginLeft:"30px"}}),mapElement:o.a.createElement("div",{style:{height:"100%"}})}),_.withGoogleMap)(function(e){return o.a.createElement(_.GoogleMap,{defaultZoom:8,defaultCenter:b},e.geoLocations.map(function(t,n){return o.a.createElement(_.Marker,{key:n,position:{lat:t.lat,lng:t.lng},onClick:function(){return e.onToggleOpenInfoWindow(n,t)}},e.isOpen===n&&o.a.createElement(_.InfoWindow,{onCloseClick:e.onToggleOpenInfoWindow},o.a.createElement("div",null,o.a.createElement("h1",null,t.info.name),o.a.createElement("h2",null,t.info.address),o.a.createElement("div",null))))}),e.isMarkerShown&&o.a.createElement(_.Marker,{position:b,onClick:e.onToggleOpenInfoWindow},e.isOpen&&o.a.createElement(_.InfoWindow,{onCloseClick:e.onToggleOpenInfoWindow},o.a.createElement("h1",null,"test"))))}),T=(a.Component,function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(g.a)(t).call(this,e))).getAllGyms=function(){f.a.get("http://https://jiu-jitsu-locator.herokuapp.com/gyms").then(function(e){var t=e.data;n.setState({listOfGyms:t,ready:!0}),setTimeout(function(){n.setState({mapReady:!0})},1500),n.setGeoLocations()})},n.setGeoLocations=function(){console.log("GEO LOCATIONs"),n.state.listOfGyms.map(function(e){return j.a.fromAddress(e.address).then(function(t){var a=t.results[0].geometry.location,o=a.lat,r=a.lng;n.setState({geoLocations:[].concat(Object(l.a)(n.state.geoLocations),[{lat:o,lng:r,info:e}])})},function(e){console.error(e)})})},n.getGymComments=function(e){f.a.get("http://https://jiu-jitsu-locator.herokuapp.com/reviews/gymComments/".concat(e)).then(function(e){console.log("DATA DETAILS"),n.setState({gymComments:e.data})}).catch(function(e){return console.log(e)})},n.onToggleOpenInfoWindow=function(e,t){t&&(f.a.get("http://https://jiu-jitsu-locator.herokuapp.com/gyms/getPlacesDetails/"+t.info.place_id).then(function(a){var o=a.data.result;f.a.get("http://https://jiu-jitsu-locator.herokuapp.com/reviews/gymComments/".concat(t.info._id)).then(function(a){console.log("DATA DETAILS"),console.log(o),console.log("the gym info -------- ",t),n.setState({isOpen:e,details:o,gymComments:a.data,theGymId:t.info._id})}).catch(function(e){return console.log(e)})}),console.log(t.info.place_id),f.a.get("http://https://jiu-jitsu-locator.herokuapp.com/gyms/getPlacesPhotos/"+t.info.place_id).then(function(e){console.log("API RESPONSE"),console.log(e.data),n.setState({photo:e.data.photos[0]}),console.log("PHOTO: "),console.log(n.state.photo)}))},n.getCurrentlyLoggedInUser=function(){n.service.currentUser().then(function(e){n.setState({currentlyLoggedIn:e})}).catch(function(){n.setState({currentlyLoggedIn:null})})},n.toggleForm=function(e){var t;t="signup"===e?"signupShowing":"loginShowing",n.setState(Object(i.a)({},t,!n.state[t]))},n.state={listOfGyms:[],geoLocations:[],currentlyLoggedIn:null,ready:!1,signupShowing:!1,loginShowing:!1,mapReady:!1,isOpen:!1,details:{},photo:"",gymComments:[],theGymId:""},n.service=new v,j.a.setApiKey("AIzaSyAU9nQ_E20F7o9usfZFFEv8lLeDkLjlCxk"),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getAllGyms(),this.getCurrentlyLoggedInUser()}},{key:"render",value:function(){var e=this;return this.state.mapReady?o.a.createElement("div",null,o.a.createElement("div",{class:"allIncludedNavbar"},o.a.createElement("div",{class:"top-navigation"},o.a.createElement("h1",null,"Jiu-Jitsu Locator",o.a.createElement("img",{src:"https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",style:{height:"30px"}})),o.a.createElement(C,{theUser:this.state.currentlyLoggedIn,pleaseLogOut:function(){return e.service.logout()},toggleForm:this.toggleForm,getUser:this.getCurrentlyLoggedInUser}),o.a.createElement("div",{className:"searchThing"},o.a.createElement("img",{src:"https://cdn.pixabay.com/photo/2017/01/13/01/22/magnifying-glass-1976105_960_720.png",style:{height:"30px"}}),o.a.createElement(L,null)),this.state.signupShowing&&o.a.createElement(y,{getUser:this.getCurrentlyLoggedInUser,toggleForm:this.toggleForm}),this.state.loginShowing&&o.a.createElement(E,{getUser:this.getCurrentlyLoggedInUser,toggleForm:this.toggleForm}))),o.a.createElement("div",{class:"mapDetailsComponent"},o.a.createElement(U,{geoLocations:this.state.geoLocations,onToggleOpenInfoWindow:this.onToggleOpenInfoWindow,isOpen:this.state.isOpen}),console.log("the state in app js =============== ",this.state),o.a.createElement(O,Object.assign({},this.props,{info:this.state.details,photo:this.state.photo,gymComments:this.state.gymComments,theGymId:this.state.theGymId,getComments:this.getGymComments}))),o.a.createElement(p.c,null,o.a.createElement(p.a,{exact:!0,path:"/gyms",component:I,render:function(t){return o.a.createElement(I,Object.assign({},t,{theUser:e.state.currentlyLoggedIn,allTheGyms:e.state.listOfGyms}))}}),o.a.createElement(p.a,{exact:!0,path:"/gyms/:theID",render:function(t){return o.a.createElement(O,Object.assign({},t,{allTheGyms:e.state.listOfGyms,ready:e.state.ready,getData:e.getAllGyms,theUser:e.state.currentlyLoggedIn}))}})),this.state.listOfGyms.map(function(e,t){return o.a.createElement("div",{key:t})})):o.a.createElement("div",null,o.a.createElement("div",{className:"overlay"}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=n(37);s.a.render(o.a.createElement(x.a,null,o.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[172,1,2]]]);
//# sourceMappingURL=main.19994166.chunk.js.map