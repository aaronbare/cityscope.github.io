(this.webpackJsonpcityscope=this.webpackJsonpcityscope||[]).push([[0],{108:function(e,t,n){},109:function(e,t,n){},207:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),i=n.n(o),c=n(19),l=n(28),s=n(21),u=n(20),m=(n(97),n(4)),d=n(32),p=n(80);n(108);function h(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"arrow arrow-first"}),r.a.createElement("div",{className:"arrow arrow-second"}))}var f={height:"100vh"},v=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e))._sceneSetup=function(){var e=a.mountingDiv.clientWidth,t=a.mountingDiv.clientHeight;a.scene=new m.s,a.scene.background=new m.c(1908513),a.camera=new m.o(30,window.innerWidth/window.innerHeight,1,1e3);var n=new m.a(13421772,.2);a.scene.add(n);var r=new m.p(16777215,.8,20);r.position.set(0,0,0),a.camera.add(r),a.scene.add(a.camera),a.renderer=new m.t({antialias:!0}),a.renderer.setSize(e,t),a.mountingDiv.appendChild(a.renderer.domElement)},a._loadOBJmodel=function(){var e=a.count,t=a._rnd,n=a.scene,r=new m.n({color:"white"}),o=new p.a;a.paths.forEach((function(a){o.load(a,(function(a){var o=new m.f,i=new m.l;a.traverse((function(e){e instanceof m.l&&(i=e)}));var c=(new m.f).fromBufferGeometry(i.geometry);c.scale(.1,.1,.1);for(var l=0;l<e;l++){var s=c.clone();s.translate(t(-10,10),t(-10,10),t(-10,10)),s.rotateX(t(-50,50)),s.rotateY(t(-50,50)),s.rotateZ(t(-50,50)),o.merge(s)}var u=new m.l(o,r);n.add(u)}))}))},a._rnd=function(e,t){return Math.random()*(t-e)+e},a.handleWindowResize=function(){var e=a.mountingDiv.clientWidth,t=a.mountingDiv.clientHeight;a.renderer.setSize(e,t),a.camera.aspect=e/t,a.camera.updateProjectionMatrix()},a.startAnimationLoop=function(){a.animate(),a.requestID=window.requestAnimationFrame(a.startAnimationLoop)},a.animate=function(){var e=5e-5*Date.now();a.camera.position.x=5*Math.sin(e),a.camera.position.z=5*Math.cos(e),a.camera.position.y=5*Math.cos(e),a.camera.lookAt(a.scene.position),a.renderer.render(a.scene,a.camera)},a.state={},a.count=200,a.paths=["./resources/mlcs.obj","./resources/lego.obj"],a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){d.Events.scrollEvent.register("begin",(function(){console.log("begin",arguments)})),d.Events.scrollEvent.register("end",(function(){console.log("end",arguments)})),this._sceneSetup(),this._loadOBJmodel(),this.startAnimationLoop(),window.addEventListener("resize",this.handleWindowResize)}},{key:"componentWillUnmount",value:function(){d.Events.scrollEvent.remove("begin"),d.Events.scrollEvent.remove("end"),window.cancelAnimationFrame(this.requestID),window.removeEventListener("resize",this.handleWindowResize)}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",{className:"legotitle"},r.a.createElement("h1",null,r.a.createElement("u",null,r.a.createElement("a",{href:"/#",onClick:function(){return d.animateScroll.scrollToBottom()}},"here we build CityScope")))),r.a.createElement("div",{style:f,ref:function(t){return e.mountingDiv=t}}))}}]),n}(a.Component),E=(n(109),n(81)),g=n(57),w=n.n(g),b=n(7),y=n(241),j=n(247),C=n(242),O=n(243),S=n(246),k=n(45),F=n(245),D=n(244),x=n(248),B=n(239),N=n(240),z=n(84),M=n.n(z),W=n(44),A=r.a.createContext(),I=function(e){var t=Object(a.useState)("README.md"),n=Object(W.a)(t,2),o=n[0],i=n[1];return r.a.createElement(A.Provider,{value:{contentUrl:o,setContentUrl:i}},e.children)},L=n(83),R=n.n(L);function _(){var e=Object(a.useContext)(A).setContentUrl,t=function(t){e(t)};return r.a.createElement("div",null,r.a.createElement(x.a,{button:!0,onClick:function(){t("README.md")}},r.a.createElement(B.a,null,r.a.createElement(R.a,null)),r.a.createElement(N.a,{primary:"CityScope"})),r.a.createElement(x.a,{button:!0,onClick:function(){t("./docs/md/Home.md")}},r.a.createElement(B.a,null,r.a.createElement(M.a,null)),r.a.createElement(N.a,{primary:"Docs"})))}var U=n(85),H=n.n(U),G=n(86),J=n.n(G),P=function(){var e=Object(a.useState)(),t=Object(W.a)(e,2),n=t[0],o=t[1],i=Object(a.useContext)(A).contentUrl,c="https://raw.githubusercontent.com/CityScope/cityscope.github.io/dev/",l=c+i;return Object(a.useEffect)((function(){J.a.get(l,{mode:"no-cors"}).then((function(e){o(e.data)}))}),[l]),r.a.createElement("div",{className:"result-pane"},r.a.createElement(H.a,{className:"result",source:n,transformImageUri:function(e){return e.startsWith("http")?e:"".concat(c).concat(e)}}))},q=n(87),T=n.n(q),X=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={open:!0},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(y.a,null),r.a.createElement(C.a,{position:"fixed",className:w()(e.appBar,this.state.open&&e.appBarShift)},r.a.createElement(O.a,{disableGutters:!this.state.open,className:e.toolbar},r.a.createElement(k.a,{component:"h6",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"MIT CityScope"),r.a.createElement(D.a,{color:"inherit",onClick:function(e){return window.open("https://github.com/CityScope","_blank")}},r.a.createElement(T.a,null)),r.a.createElement(D.a,{className:e.CSlogo},r.a.createElement("a",{href:"https://www.media.mit.edu/projects/cityscope/overview/"},r.a.createElement("img",{src:"./resources/logo.png",alt:""}))))),r.a.createElement(j.a,{variant:"permanent",classes:{paper:w()(e.drawerPaper)},open:this.state.open},r.a.createElement(F.a,null),r.a.createElement(S.a,null,r.a.createElement(_,null)),r.a.createElement(F.a,null)),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement("div",{className:e.tableContainer},r.a.createElement(P,null))))}}]),n}(r.a.Component),Y=Object(b.a)((function(e){return{root:{display:"flex",background:"#1D1F21",color:"#FFF"},toolbar:{paddingRight:24},CSlogo:Object(E.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",width:"2em",borderRadius:"none",height:"auto"},e.mixins.toolbar),appBar:{background:"#1D1F21",zIndex:e.zIndex.drawer+1,color:"#FFF"},appBarShift:{background:"#1D1F21",marginLeft:200},menuButton:{marginLeft:12,marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1,fontSize:25,fontWeight:"lighter"},drawerPaper:{paddingTop:"5em",color:"#FFF",background:"#1D1F21",position:"relative",whiteSpace:"nowrap",width:200,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,padding:3*e.spacing(),height:"100vh",overflow:"auto"},chartContainer:{marginLeft:-22},tableContainer:{height:320},h5:{marginBottom:2*e.spacing()}}}))(X);var Z=function(){return r.a.createElement(I,null,r.a.createElement(Y,null))},K=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement(Z,null))}}]),n}(a.Component);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root"))},92:function(e,t,n){e.exports=n(207)},97:function(e,t,n){}},[[92,1,2]]]);
//# sourceMappingURL=main.5e5f618a.chunk.js.map