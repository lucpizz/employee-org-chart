(this["webpackJsonpemployee-org-chart"]=this["webpackJsonpemployee-org-chart"]||[]).push([[0],{127:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(14),c=n.n(r),o=(n(127),n(201)),s=n(204),l=n(205),m=n(105),u=n(9),d=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(o.a,{}),Object(u.jsx)(s.a,{position:"relative",style:{backgroundColor:"#000000"},children:Object(u.jsx)(l.a,{children:Object(u.jsx)(m.a,{variant:"h4",children:"Employee Directory"})})})]})},j=n(31),h=n(22),b=n(66),p=n(65),f=n(100),g=n.n(f),O=function(){return g.a.get("https://randomuser.me/api/?inc=picture,id,name,login,email,location&results=15&nat=us")},x=n(101),y=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={employee:[]},e.columns=[{field:"id",headerName:"ID",width:100},{field:"firstName",headerName:"First Name",width:170},{field:"lastName",headerName:"Last Name",width:180},{field:"username",headerName:"Username",width:150},{field:"email",headerName:"Email",width:260},{field:"location",headerName:"Location: State",width:150}],e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;O().then((function(t){e.setState({employee:t.data.results.map((function(e){return{id:e.login.uuid,firstName:e.name.first,lastName:e.name.last,username:e.login.username,email:e.email,location:e.location.state}}))}),console.log(e.state.employee)})).catch((function(e){e.message}))}},{key:"render",value:function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(x.a,{rows:this.state.employee,columns:this.columns})})}}]),n}(a.Component),v=n(26),N=n(209),w=n(208);function F(){return Object(u.jsxs)(m.a,{variant:"body2",align:"center",color:"textSecondary",children:["Copyright \xa9 ",Object(u.jsx)(w.a,{color:"inherit",href:"https://github.com/lucpizz/employee-org-chart",children:"GitHub: lucpizz"})," ",(new Date).getFullYear(),"."]})}var C=Object(v.a)((function(e){return{root:{flexDirection:"column"},main:{marginTop:e.spacing(0)},footer:{padding:e.spacing(2,2),marginTop:"auto",backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[800]}}}));function k(){var e=C();return Object(u.jsxs)("div",{className:e.root,children:[Object(u.jsx)(o.a,{}),Object(u.jsx)(N.a,{component:"main",className:e.main,maxWidth:"sm"}),Object(u.jsx)("footer",{className:e.footer,children:Object(u.jsxs)(N.a,{maxWidth:"sm",children:[Object(u.jsx)(m.a,{variant:"body2"}),Object(u.jsx)(F,{})]})})]})}var D=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(m.a,{variant:"h4",align:"center"}),Object(u.jsx)("div",{style:{width:"100%",height:800},children:Object(u.jsx)(y,{})}),Object(u.jsx)(k,{})]})};n(152);var S=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d,{}),Object(u.jsx)(D,{})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,211)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root")),z()}},[[153,1,2]]]);
//# sourceMappingURL=main.8c425056.chunk.js.map