(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{284:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(29),r=n.n(c),o=n(62),s=n(33),d=n(68),u=n(67),p=n(10),l=n(25),j=Object(l.a)(),m=n(12),b=n(44),x=n(311),f=n(313),O=n(1),h=Object(x.a)((function(e){return{homeHeader:{background:"#C4C4C4",textAlign:"center",boxShadow:"0px 2px 2px #A9A9A9",fontFamily:"PT Sans Caption",fontSize:"36px",marginBottom:"20px",paddingTop:"20px",paddingBottom:"10px",textTransform:"uppercase",position:"fixed",top:0,left:0,width:"100%"},header:{background:"#C4C4C4",textAlign:"center",boxShadow:"0px 2px 2px #A9A9A9",fontFamily:"PT Sans Caption",fontSize:"36px",marginBottom:"20px",paddingTop:"20px",paddingBottom:"10px",textTransform:"uppercase",position:"fixed",top:0,left:0,width:"100%",display:"flex",justifyContent:"space-between",zIndex:9999},homeButton:{boxShadow:"0px 2px 2px #A9A9A9",fontFamily:"PT Sans Caption",fontSize:"20px",marginLeft:"10px",marginBottom:"10px",marginTop:"5px",borderRadius:"10px"},fakeText:{visibility:"hidden"}}})),v=function(e){var t=h(),n=Object(a.useState)(e.title),i=Object(b.a)(n,1)[0];return""===Object(p.d)().pathname.split("/")[1]?Object(O.jsx)("div",{className:t.homeHeader,children:i}):Object(O.jsxs)("div",{className:t.header,children:[Object(O.jsx)(f.a,{variant:"contained",className:t.homeButton,onClick:function(){return j.push("/")},children:"Home"}),i,Object(O.jsx)("div",{className:t.fakeText,children:"-------"})]})},g=n(9),y=n(26),C=n.n(y),M=n(52),N="UPDATE_MOVEMENT",S="DELETE_MOVEMENT",T="CREATE_MOVEMENT",w="FETCH_MOVEMENTS",R=n(123),k=n.n(R).a.create({baseURL:"http://localhost:8000"}),P=n(316),A=n(315),E=Object(x.a)((function(){return{addPage:{display:"flex",justifyContent:"center",marginTop:"100px"},addMovementDiv:{background:"#C4C4C4",fontFamily:"PT Sans Caption",fontSize:"18px",borderRadius:"10px",padding:"20px",marginTop:"50px",display:"flex",flexDirection:"column",textAlign:"right"},movementName:{padding:"10px",margin:"10px"},textBoxColor:{background:"white",borderRadius:"10px"},movementWeight:{margin:"10px",padding:"10px"},addButton:{width:"50px",borderRadius:"10px",marginLeft:"95px"}}})),D=function(e){var t=e.input,n=e.label,a=e.meta;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{children:[n,":   "]}),Object(O.jsx)("input",Object(m.a)(Object(m.a)({},t),{},{type:"text"})),Object(O.jsx)("div",{style:{fontSize:"15px",color:"red"},children:B(a)})]})},F=function(e){var t=e.input,n=e.label,a=e.meta;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{children:[n,":   "]}),Object(O.jsx)("input",Object(m.a)(Object(m.a)({},t),{},{type:"number"})),Object(O.jsx)("div",{style:{fontSize:"15px",color:"red"},children:B(a)})]})},B=function(e){var t=e.error;if(e.touched&&t)return Object(O.jsx)("div",{children:t})},W=Object(A.a)({form:"addMovementForm",validate:function(e){var t={};return e.movementName||(t.movementName="Please enter a Name"),e.movementWeight||(t.movementWeight="Please enter a Weight"),t}})((function(e){var t=E();return Object(O.jsxs)("div",{children:[Object(O.jsx)(v,{title:"Add Movement"}),Object(O.jsx)("div",{className:t.addPage,children:Object(O.jsx)("div",{className:t.addMovementDiv,children:Object(O.jsxs)("form",{onSubmit:e.handleSubmit((function(t){e.createMovement(t)})),children:[Object(O.jsx)(P.a,{name:"movementName",component:D,label:"Movement Name"}),Object(O.jsx)(P.a,{name:"movementWeight",component:F,label:"One Rep Max"}),Object(O.jsx)("button",{children:"Submit"})]})})})]})})),z=Object(g.b)((function(e){return{move:e.move}}),(function(e){return{createMovement:function(t){return e(function(e){return function(){var t=Object(M.a)(C.a.mark((function t(n){var a;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return j.push("/"),t.next=3,k.post("/movements",e);case 3:a=t.sent,n({type:T,payload:a.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(W),_=n(314),H=n(126),L=n.n(H),U=Object(x.a)((function(e){return{fabDiv:{display:"flex",justifyContent:"flex-end",position:"absolute",bottom:e.spacing(2),right:e.spacing(2)},fab:{background:"#C4C4C4"}}})),I=function(){var e=U();return Object(O.jsx)("div",{className:e.fabDiv,children:Object(O.jsx)(_.a,{className:e.fab,onClick:function(){return j.push("/add")},children:Object(O.jsx)(L.a,{})})})},V=Object(x.a)((function(e){return{movementButtons:{fontFamily:"PT Sans Caption",marginTop:"30px",borderRadius:"10px",background:"#C4C4C4",boxShadow:"0px 2px 2px #A9A9A9",width:"400px",display:"flex",flexDirection:"column"},noMovementsMessage:{marginTop:"130px",fontFamily:"PT Sans Caption",fontSize:"20px",textTransform:"uppercase"}}})),J=Object(g.b)((function(e){return{move:Object.values(e.move)}}))((function(e){var t=V(),n=e.move.map((function(e){return Object(O.jsxs)(f.a,{className:t.movementButtons,onClick:function(){return j.push("/movement/".concat(e.id,"/").concat(e.movementName,"/").concat(e.movementWeight))},children:[e.movementName," - ",e.movementWeight,"lbs"]},e.movementName)}));return Object(O.jsx)("div",{children:0===n.length?Object(O.jsx)("div",{className:t.noMovementsMessage,children:"Click add button to begin"}):Object(O.jsx)("div",{children:n})})})),X=n(286),q=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchMovements()}},{key:"render",value:function(){var e=this;return Object(O.jsx)("div",{children:0===e.props.move.length?Object(O.jsx)("div",{}):Object(O.jsx)("div",{className:e.props.classes.homePageTitle,children:"Listed Movements:"})})}}]),n}(i.a.Component),G=Object(g.b)((function(e){return{move:Object.values(e.move)}}),{fetchMovements:function(){return function(){var e=Object(M.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get("/movements");case 2:n=e.sent,t({type:w,payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Object(X.a)((function(e){return{homePageTitle:{fontSize:"20px",fontFamily:"PT Sans Caption",marginTop:"100px",display:"flex",justifyContent:"center"}}}))(q)),K=Object(x.a)((function(){return{homePageContent:{display:"flex",justifyContent:"center",alignItems:"center"}}})),Q=function(){var e=K();return Object(O.jsxs)("div",{className:e.homePageContent,children:[Object(O.jsx)(v,{title:"One Rep  Max"}),Object(O.jsxs)("div",{children:[Object(O.jsx)(G,{}),Object(O.jsx)(J,{})]}),Object(O.jsx)(I,{})]})},Y=Object(x.a)((function(e){return{updateButton:{boxShadow:"0px 2px 2px #A9A9A9",background:"#e0e0e0",borderRadius:"10px",width:"10%",textAlign:"center",marginLeft:"5px",marginRight:"5px"}}})),Z=function(e){var t=Y(),n=Object(p.d)().pathname.split("/"),a=n[2],i=n[3];return Object(O.jsx)(f.a,{className:t.updateButton,onClick:function(){return j.push("/update/".concat(a,"/").concat(i))},children:"Update"})},$=Object(x.a)((function(e){return{updateButton:{boxShadow:"0px 2px 2px #A9A9A9",background:"#e0e0e0",borderRadius:"10px",width:"10%",textAlign:"center",marginLeft:"5px",marginRight:"5px"}}})),ee=function(e){var t=$(),n=Object(p.d)().pathname.split("/"),a=n[2],i=n[3];return Object(O.jsx)(f.a,{className:t.updateButton,onClick:function(){return j.push("/delete/".concat(a,"/").concat(i))},children:"Delete"})},te=Object(x.a)((function(){return{oneRepMaxWeight:{display:"flex",alignItems:"center",justifyContent:"center",padding:"10px",fontFamily:"PT Sans Caption",fontSize:"18px",marginTop:"100px"},oneRepMaxWeightNumber:{padding:"5px"},oneRepMaxChart:{background:"#C4C4C4",borderRadius:"10px",borderCollapse:"separate",borderSpacing:"10px",display:"flex",flexDirection:"column"},chartHeader:{borderRadius:"10px",padding:"5px",fontSize:"24px",display:"flex",justifyContent:"space-around"},chartBox:{background:"#E7E7E7",border:"1px solid #C4C4C4",padding:"5px",fontSize:"24px",display:"flex",justifyContent:"space-around",fontFamily:"PT Sans Caption"},buttons:{display:"flex",justifyContent:"center",paddingBottom:"20px"}}})),ne=Object(g.b)((function(e){return{weight:Object.values(e.move)}}))((function(e){var t=te(),n=Object(p.d)().pathname.split("/")[3],i=Object(a.useState)([]),c=Object(b.a)(i,2),r=c[0],o=c[1],s=e.weight.find((function(e){return e.movementName===n}));Object(a.useEffect)((function(){for(var e=[],t=100;t>50;)e.push([t,s.movementWeight*t/100]),t-=5;o(e)}),[]);return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:t.oneRepMaxWeight,children:["One Rep Max:",Object(O.jsx)("div",{className:t.oneRepMaxWeightNumber,children:0===s.movementWeight.length?Object(O.jsx)("div",{children:"No 1RM recorded"}):Object(O.jsx)("div",{children:s.movementWeight})})]}),Object(O.jsxs)("div",{className:t.buttons,children:[Object(O.jsx)(Z,{}),Object(O.jsx)(ee,{})]}),Object(O.jsxs)("div",{className:t.oneRepMaxChart,children:[Object(O.jsxs)("h1",{className:t.chartHeader,children:["Percent",Object(O.jsx)("div",{children:"Weight"})]}),Object(O.jsx)("div",{children:r.map((function(e){return Object(O.jsxs)("div",{className:t.chartBox,children:[e[0],"% ",Object(O.jsx)("div",{children:e[1]})]},e[0])}))})]})]})})),ae=Object(x.a)((function(){return{notFound:{marginTop:"130px",fontSize:"24px",fontFamily:"PT Sans Caption",display:"flex",justifyContent:"center"}}})),ie=function(){var e=ae(),t=Object(p.d)().pathname.split("/")[3];return Object(O.jsxs)("div",{children:[Object(O.jsx)(v,{title:t}),void 0===t?Object(O.jsx)("div",{className:e.notFound,children:"Movement not found. Click Home button to return to Home Page."}):Object(O.jsx)(ne,{})]})},ce=Object(x.a)((function(){return{updatePage:{marginTop:"150px",display:"flex",justifyContent:"center",fontFamily:"PT Sans Caption"},updateMovementDiv:{background:"#C4C4C4",fontFamily:"PT Sans Caption",fontSize:"18px",borderRadius:"10px",padding:"20px",display:"flex",flexDirection:"column",textAlign:"right"}}})),re=function(e){var t=e.input,n=e.label;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{children:[n,": "]}),Object(O.jsx)("input",Object(m.a)(Object(m.a)({},t),{},{type:"text",value:Object(p.d)().pathname.split("/")[3]}))]})},oe=function(e){var t=e.input,n=e.label;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{children:[n,": "]}),Object(O.jsx)("input",Object(m.a)(Object(m.a)({},t),{},{type:"number"}))]})},se=Object(A.a)({form:"updateMovementForm"})((function(e){var t=ce(),n=Object(p.d)().pathname.split("/")[2],a=e.move.find((function(e){return e.id===Number(n)})).id;return Object(O.jsxs)("div",{children:[Object(O.jsx)(v,{title:"Update Movement"}),Object(O.jsx)("div",{className:t.updatePage,children:Object(O.jsx)("div",{className:t.updateMovementDiv,children:Object(O.jsxs)("form",{onSubmit:e.handleSubmit((function(t){e.updateMovement(a,t)})),children:[Object(O.jsx)(P.a,{name:"movementName",label:"Movement Selected",component:re}),Object(O.jsx)(P.a,{name:"movementWeight",label:"New One Rep Max",component:oe}),Object(O.jsx)("button",{children:"Update"})]})})})]})})),de=Object(g.b)((function(e){return{move:e.move}}),(function(e){return{updateMovement:function(t,n){return e(function(e,t){return function(){var n=Object(M.a)(C.a.mark((function n(a){var i;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j.push("/"),n.next=3,k.patch("/movements/".concat(e),t);case 3:i=n.sent,a({type:N,payload:i.data});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(t,n))}}}))(se),ue=Object(x.a)((function(){return{deletePage:{marginTop:"150px",display:"flex",justifyContent:"center",fontFamily:"PT Sans Caption"},deleteMovementDiv:{background:"#C4C4C4",fontFamily:"PT Sans Caption",fontSize:"18px",borderRadius:"10px",padding:"20px",display:"flex",flexDirection:"column",textAlign:"right"}}})),pe=function(e){var t=e.input,n=e.label;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{children:[n,":   "]}),Object(O.jsx)("input",Object(m.a)(Object(m.a)({},t),{},{readOnly:!0,autoFocus:!0,type:"text",value:Object(p.d)().pathname.split("/")[3]}))]})},le=Object(A.a)({form:"deleteMovementForm"})((function(e){var t=ue(),n=Object(p.d)().pathname.split("/")[2],a=e.move.find((function(e){return e.id===Number(n)})).id;return Object(O.jsxs)("div",{children:[Object(O.jsx)(v,{title:"Delete Movement"}),Object(O.jsx)("div",{className:t.deletePage,children:Object(O.jsx)("div",{className:t.deleteMovementDiv,children:Object(O.jsxs)("form",{onSubmit:e.handleSubmit((function(t){e.deleteMovement(a,t)})),children:[Object(O.jsx)(P.a,{name:"movementName",component:pe,label:"Movement to be Deleted"}),Object(O.jsx)("button",{children:"Delete"})]})})})]})})),je=Object(g.b)((function(e){return{move:e.move}}),(function(e){return{deleteMovement:function(t,n){return e((a=t,function(){var e=Object(M.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j.push("/"),e.next=3,k.delete("/movements/".concat(a));case 3:t({type:S,payload:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));var a}}}))(le),me=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)(p.b,{history:j,children:Object(O.jsxs)(p.c,{children:[Object(O.jsx)(p.a,{exact:!0,path:"/",render:function(){return Object(O.jsx)(Q,{title:"One Rep - Home"})}}),Object(O.jsx)(p.a,{exact:!0,path:"/movement/:id/:name/:weight",render:function(){return Object(O.jsx)(ie,{title:"One Rep - Movement"})}}),Object(O.jsx)(p.a,{exact:!0,path:"/add",render:function(){return Object(O.jsx)(z,{title:"One Rep - Add"})}}),Object(O.jsx)(p.a,{exact:!0,path:"/update/:id/:name",render:function(){return Object(O.jsx)(de,{title:"One Rep - Update"})}}),Object(O.jsx)(p.a,{exact:!0,path:"/delete/:id/:name",render:function(){return Object(O.jsx)(je,{title:"One Rep - Delete"})}})]})})})}}]),n}(i.a.Component),be=n(8),xe=n(32),fe=[],Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return[].concat(Object(xe.a)(e),[t.payload]);case N:return e.map((function(e){return e.id===t.payload.id?t.payload:e}));case S:return e.filter((function(e){return e.id!==t.payload}));case w:return t.payload;default:return e}},he=n(317),ve=n(66),ge=n(129),ye={key:"root",storage:n.n(ge).a,whitelist:["move","form"]},Ce=Object(be.c)({move:Oe,form:he.a}),Me=Object(ve.a)(ye,Ce),Ne=n(130),Se=n(131),Te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||be.d,we=Object(be.e)(Me,Te(Object(be.a)(Ne.a))),Re=Object(ve.b)(we);r.a.render(Object(O.jsx)(g.a,{store:we,children:Object(O.jsx)(Se.a,{persistor:Re,children:Object(O.jsx)(me,{})})}),document.getElementById("root"))}},[[284,1,2]]]);
//# sourceMappingURL=main.2183776d.chunk.js.map