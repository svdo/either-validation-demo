(this["webpackJsonpeither-validation-demo"]=this["webpackJsonpeither-validation-demo"]||[]).push([[0],{175:function(e,t,n){e.exports=n(308)},180:function(e,t,n){},308:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(38),c=n.n(o),l=(n(180),n(50)),u=n(320),i=n(318),s=n(322),m=n(309),b=n(16),d=n(23),f=n(22);function p(e){return function(t){return Object(f.pipe)(e(t),Object(b.mapLeft)((function(e){return[e]})))}}var O,h=n(97),j=n(146),v=n(19),E=n(145),g=n.n(E),w=d.fromPredicate((function(e){return/[A-Z]/g.test(e)})),C=d.fromPredicate((function(e){return/[0-9]/g.test(e)})),P=function(e){return d.fromNullable(g.a.parseOneAddress(e))},y=function(e){return Object(v.flow)(P,d.map(Object(v.constant)(e)),Object(b.fromOption)(Object(v.constant)("Email address is invalid")))(e)},S=Object(v.flow)((O=8,d.fromPredicate((function(e){return new RegExp("^[0-9]{".concat(O,"}$")).test(e)}))),Object(b.fromOption)(Object(v.constant)("Phone number should have 8 digits"))),k=function(e){return e?Object(b.right)(!0):Object(b.left)("You must accept the terms and conditions")},x=function(e,t){return e===t?Object(b.right)(e):Object(b.left)("Passwords are different")},A=Object(v.flow)(function(e){return d.fromPredicate(function(e){return function(t){return t.length>=e}}(e))}(8),Object(b.fromOption)(Object(v.constant)("Password should have at least 8 characters"))),I=Object(v.flow)(w,Object(b.fromOption)(Object(v.constant)("Password should have at least one capital"))),L=Object(v.flow)(C,Object(b.fromOption)(Object(v.constant)("Password should have at least one number"))),F=function(){return Object(b.getValidation)(Object(j.getSemigroup)())};function J(e,t){return Object(f.pipe)(Object(h.sequenceT)(F())(p(A)(e),p(I)(e),p(L)(e),(n=x,function(e,t){return Object(f.pipe)(n(e,t),Object(b.mapLeft)((function(e){return[e]})))})(e,t)),Object(b.map)(Object(v.constant)(e)));var n}var N=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),d=Object(l.a)(c,2),f=d[0],O=d[1],j=Object(a.useState)(""),E=Object(l.a)(j,2),g=E[0],w=E[1],C=Object(a.useState)(""),P=Object(l.a)(C,2),x=P[0],A=P[1],I=Object(a.useState)(!1),L=Object(l.a)(I,2),N=L[0],R=L[1],T=function(e,t,n,a,r){return Object(h.sequenceS)(F())({email:p(y)(e),phone:p(S)(t),password:J(n,a),consented:p(k)(r)})}(n,f,g,x,N);return r.a.createElement("div",null,r.a.createElement("h2",null,"Register"),r.a.createElement(u.a,{error:b.isLeft(T)},r.a.createElement(u.a.Field,null,r.a.createElement("label",null,"Email:"),r.a.createElement(i.a,{label:"@",name:"email",autoComplete:"username",placeholder:"Email address",value:n,onChange:function(e,t){var n=t.value;return o(n)}})),r.a.createElement(u.a.Field,null,r.a.createElement("label",null,"Phone:"),r.a.createElement(i.a,{label:"+31 (0)6",name:"mobile",autoComplete:"tel",placeholder:"Mobile phone number (extension only)",value:f,onChange:function(e,t){var n=t.value;return O(n)}})),r.a.createElement(u.a.Input,{label:"Password",type:"password",autoComplete:"new-password",placeholder:"new password",value:g,onChange:function(e,t){var n=t.value;return w(n)}}),r.a.createElement(u.a.Input,{label:"Password again",type:"password",autoComplete:"new-password",placeholder:"same as above",value:x,onChange:function(e,t){var n=t.value;return A(n)}}),r.a.createElement(u.a.Checkbox,{label:"I accept the terms and conditions",checked:N,onChange:function(e,t){var n=t.checked;return R(n||!1)}}),r.a.createElement(s.a,{error:!0,header:"The form is not filled out correctly",list:b.getOrElse(Object(v.constant)([]))(b.swap(T))}),r.a.createElement(m.a,{primary:!0,content:"Register",disabled:b.isLeft(T),onClick:function(){b.map((function(e){return window.alert("All ok, dispatch the data now: "+JSON.stringify(e))}))(T)}})))};var R=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Demo of form validation using Either"),r.a.createElement("p",null,"This demo belongs to my blog post"," ",r.a.createElement("a",{href:"https://040code.github.io/2020/05/25/getting-help-from-your-compiler"},"Getting Help From Your Compiler"),"."),r.a.createElement(N,null))},T=(n(307),n(319));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T.a,null,r.a.createElement(R,null))),document.getElementById("root"))}},[[175,1,2]]]);
//# sourceMappingURL=main.b5ea3c27.chunk.js.map