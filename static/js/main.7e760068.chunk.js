(this["webpackJsonpeither-validation-demo"]=this["webpackJsonpeither-validation-demo"]||[]).push([[0],{175:function(e,t,n){e.exports=n(308)},180:function(e,t,n){},308:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(37),c=n.n(l),o=(n(180),n(49)),u=n(320),i=n(318),s=n(322),d=n(309),b=n(15),m=n(21);function p(e){return function(t){return Object(m.pipe)(e(t),Object(b.mapLeft)((function(e){return[e]})))}}var h=n(96),f=n(146),O=n(145),j=n.n(O),v=n(30),g=function(e){return null!==j.a.parseOneAddress(e)?Object(b.right)(e):Object(b.left)(I)},E=function(e){return/[0-9]{8}/.test(e)?Object(b.right)(e):Object(b.left)(L)},w=function(e){return e?Object(b.right)(!0):Object(b.left)(M)},C=function(e,t){return e===t?Object(b.right)(e):Object(b.left)(x)},S=function(e){return e.length>=8?Object(b.right)(e):Object(b.left)(J)},P=function(e){return/[A-Z]/g.test(e)?Object(b.right)(e):Object(b.left)(q)},k=function(e){return/[0-9]/g.test(e)?Object(b.right)(e):Object(b.left)(F)},y=function(){return Object(b.getValidation)(Object(f.getSemigroup)())};function A(e,t){return Object(m.pipe)(Object(h.sequenceT)(y())(p(S)(e),p(P)(e),p(k)(e),(n=C,function(e,t){return Object(m.pipe)(n(e,t),Object(b.mapLeft)((function(e){return[e]})))})(e,t)),Object(b.map)(Object(v.constant)(e)));var n}var I="Email address is invalid",L="Phone number should have 8 digits",x="Passwords are different",J="Password should have at least 8 characters",q="Password should have at least one capital",F="Password should have at least one number",M="You must accept the terms and conditions",N=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),m=Object(o.a)(c,2),f=m[0],O=m[1],j=Object(a.useState)(""),C=Object(o.a)(j,2),S=C[0],P=C[1],k=Object(a.useState)(""),I=Object(o.a)(k,2),L=I[0],x=I[1],J=Object(a.useState)(!1),q=Object(o.a)(J,2),F=q[0],M=q[1],N=function(e,t,n,a,r){return Object(h.sequenceS)(y())({email:p(g)(e),phone:p(E)(t),password:A(n,a),consented:p(w)(r)})}(n,f,S,L,F);return r.a.createElement("div",null,r.a.createElement("h1",null,"Register"),r.a.createElement(u.a,{error:b.isLeft(N)},r.a.createElement(u.a.Field,null,r.a.createElement("label",null,"Email:"),r.a.createElement(i.a,{label:"@",name:"email",autoComplete:"username",placeholder:"Email address",value:n,onChange:function(e,t){var n=t.value;return l(n)}})),r.a.createElement(u.a.Field,null,r.a.createElement("label",null,"Phone:"),r.a.createElement(i.a,{label:"+31 (0)6",name:"mobile",autoComplete:"tel",placeholder:"Mobile phone number (extension only)",value:f,onChange:function(e,t){var n=t.value;return O(n)}})),r.a.createElement(u.a.Input,{label:"Password",type:"password",autoComplete:"new-password",placeholder:"new password",value:S,onChange:function(e,t){var n=t.value;return P(n)}}),r.a.createElement(u.a.Input,{label:"Password again",type:"password",autoComplete:"new-password",placeholder:"same as above",value:L,onChange:function(e,t){var n=t.value;return x(n)}}),r.a.createElement(u.a.Checkbox,{label:"I accept the terms and conditions",checked:F,onChange:function(e,t){var n=t.checked;return M(n||!1)}}),r.a.createElement(s.a,{error:!0,header:"The form is not filled out correctly",list:b.getOrElse(Object(v.constant)([]))(b.swap(N))}),r.a.createElement(d.a,{primary:!0,content:"Register",disabled:b.isLeft(N),onClick:function(){b.map((function(e){return window.alert("All ok, dispatch the data now: "+JSON.stringify(e))}))(N)}})))};var R=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null))},T=(n(307),n(319));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T.a,null,r.a.createElement(R,null))),document.getElementById("root"))}},[[175,1,2]]]);
//# sourceMappingURL=main.7e760068.chunk.js.map