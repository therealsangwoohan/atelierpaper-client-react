(this["webpackJsonpatelierpaper-client-react"]=this["webpackJsonpatelierpaper-client-react"]||[]).push([[0],{61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a(26),n=a.n(c),s=a(8),i=a(7),o=(a(51),a(71)),j=a(69),l=a(67),d=a(1);function u(){return Object(d.jsxs)(o.a,{bg:"dark",variant:"dark",sticky:"top",expand:"sm",collapseOnSelect:!0,children:[Object(d.jsx)(o.a.Brand,{as:s.b,to:"/",children:"Atelier Paper"}),Object(d.jsx)(o.a.Toggle,{}),Object(d.jsxs)(o.a.Collapse,{children:[Object(d.jsx)(j.a,{className:"me-auto",children:Object(d.jsx)(j.a.Link,{as:s.b,to:"/users",children:"Our Team!!!"})}),Object(d.jsxs)(j.a,{children:[Object(d.jsx)(j.a.Link,{as:s.b,to:"/create_project",children:"Create Project"}),Object(d.jsx)(j.a.Link,{as:s.b,to:"/register",children:"Register"}),Object(d.jsx)(j.a.Link,{as:s.b,to:"/login",children:"Log In"}),Object(d.jsx)(l.a,{size:"sm",children:"Log Out"})]})]})]})}var b=a(15),p=a.n(b),m=a(24),x=a(11),h=a(72),O=a(68),f=(a(60),a(45));function v(){var e=Object(i.e)(),t=Object(r.useState)(""),a=Object(x.a)(t,2),c=a[0],n=a[1],s=Object(r.useState)(""),o=Object(x.a)(s,2),j=o[0],u=o[1],b=Object(r.useState)(""),v=Object(x.a)(b,2),g=v[0],N=v[1],w=Object(r.useState)(""),y=Object(x.a)(w,2),C=y[0],L=y[1],P=Object(r.useState)(""),_=Object(x.a)(P,2),S=_[0],B=_[1],k=Object(r.useState)(),E=Object(x.a)(k,2),I=E[0],T=E[1],R=Object(r.useState)(""),q=Object(x.a)(R,2),G=q[0],A=q[1];function U(){return(U=Object(m.a)(p.a.mark((function t(a){var r,s,i,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),j===g){t.next=5;break}return alert("Passwords don't match."),N(""),t.abrupt("return");case 5:return(r=new FormData).append("email",c),r.append("password",j),r.append("last_name",C),r.append("first_name",S),r.append("phone_number",I),r.append("specialPermission",G),t.next=14,fetch("".concat("http://52.79.239.194","/api/users/"),{method:"POST",body:r});case 14:return s=t.sent,t.next=17,s.json();case 17:if(i=t.sent,void 0!==(o=i.error_message)){t.next=22;break}return e.push("/login"),t.abrupt("return");case 22:if("You don't have the permission to create an account."!==o){t.next=26;break}return alert("You don't have the permission to create an account."),A(""),t.abrupt("return");case 26:"There exists a user with the same email and/or password."===o&&(alert("There exists a user with the same email and/or password."),n(""),u(""),N(""));case 27:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(d.jsx)(h.a,{children:Object(d.jsxs)(h.a.Body,{children:[Object(d.jsx)(h.a.Title,{className:"text-center",children:"Create New Account"}),Object(d.jsxs)("form",{onSubmit:function(e){return U.apply(this,arguments)},children:[Object(d.jsxs)(O.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(d.jsx)(O.a.Label,{children:"Email address"}),Object(d.jsx)(O.a.Control,{type:"email",placeholder:"Enter email",value:c,onChange:function(e){return n(e.target.value)},required:!0})]}),Object(d.jsxs)(O.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(d.jsx)(O.a.Label,{children:"Password"}),Object(d.jsx)(O.a.Control,{type:"password",placeholder:"Enter password",value:j,onChange:function(e){return u(e.target.value)},required:!0})]}),Object(d.jsxs)(O.a.Group,{className:"mb-3",controlId:"formBasicConfirmPassword",children:[Object(d.jsx)(O.a.Label,{children:"Confirm Password"}),Object(d.jsx)(O.a.Control,{type:"password",placeholder:"Reenter password",value:g,onChange:function(e){return N(e.target.value)},required:!0})]}),Object(d.jsxs)(O.a.Group,{className:"mb-3",controlId:"formBasicLastName",children:[Object(d.jsx)(O.a.Label,{children:"Last Name"}),Object(d.jsx)(O.a.Control,{type:"text",placeholder:"Enter last name",value:C,onChange:function(e){return L(e.target.value)},required:!0})]}),Object(d.jsxs)(O.a.Group,{className:"mb-3",controlId:"formBasicFirstName",children:[Object(d.jsx)(O.a.Label,{children:"First Name"}),Object(d.jsx)(O.a.Control,{type:"text",placeholder:"Enter first name",value:S,onChange:function(e){return B(e.target.value)},required:!0})]}),Object(d.jsx)(O.a.Group,{className:"mb-3",controlId:"formBasicPhoneNumber",children:Object(d.jsx)(f.a,{placeholder:"Enter phone number",value:I,onChange:T,required:!0})}),Object(d.jsxs)(O.a.Group,{className:"mb-3",controlId:"formBasicSpecialPermission",children:[Object(d.jsx)(O.a.Label,{children:"Special Permission Code"}),Object(d.jsx)(O.a.Control,{type:"text",placeholder:"Enter special permission code",value:G,onChange:function(e){return A(e.target.value)},required:!0})]}),Object(d.jsx)(l.a,{variant:"primary",type:"submit",children:"Register"})]})]})})}function g(){var e=Object(i.e)(),t=Object(r.useState)(""),a=Object(x.a)(t,2),c=a[0],n=a[1],s=Object(r.useState)(""),o=Object(x.a)(s,2),j=o[0],u=o[1];function b(){return(b=Object(m.a)(p.a.mark((function t(a){var r,s,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),(r=new FormData).append("email",c),r.append("password",j),t.next=6,fetch("".concat("http://52.79.239.194","/api/sessions/"),{method:"POST",body:r});case 6:return s=t.sent,t.next=9,s.json();case 9:if(void 0!==(i=t.sent).error_message){t.next=13;break}return e.push("/"),t.abrupt("return");case 13:"Wrong email and/or password."===i.error_message&&(alert("Wrong email and/or password."),n(""),u(""));case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(d.jsx)(h.a,{children:Object(d.jsxs)(h.a.Body,{children:[Object(d.jsx)(h.a.Title,{className:"text-center",children:"Are you an Employee?"}),Object(d.jsxs)("form",{onSubmit:function(e){return b.apply(this,arguments)},children:[Object(d.jsxs)(O.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(d.jsx)(O.a.Label,{children:"Email address"}),Object(d.jsx)(O.a.Control,{type:"email",placeholder:"Enter email",value:c,onChange:function(e){return n(e.target.value)},required:!0})]}),Object(d.jsxs)(O.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(d.jsx)(O.a.Label,{children:"Password"}),Object(d.jsx)(O.a.Control,{type:"password",placeholder:"Enter password",value:j,onChange:function(e){return u(e.target.value)},required:!0})]}),Object(d.jsx)(l.a,{variant:"primary",type:"submit",children:"Log In"})]})]})})}function N(e){var t=Object(r.useState)(null),a=Object(x.a)(t,2),c=a[0],n=a[1],s=Object(r.useState)(!0),i=Object(x.a)(s,2),o=i[0],j=i[1],l=Object(r.useState)(null),d=Object(x.a)(l,2),u=d[0],b=d[1];return Object(r.useEffect)(Object(m.a)(p.a.mark((function t(){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:return a=t.sent,t.t0=n,t.next=7,a.json();case 7:t.t1=t.sent,(0,t.t0)(t.t1),j(!1),t.next=15;break;case 12:t.prev=12,t.t2=t.catch(0),b(t.t2.message);case 15:case"end":return t.stop()}}),t,null,[[0,12]])}))),[e]),{error:u,isPending:o,data:c}}function w(e){var t=e.user,a=t.user_id,r=t.last_name,c=t.first_name;return Object(d.jsx)(s.b,{className:"ReducedUserComponent",to:"/users/".concat(a),children:Object(d.jsx)(h.a,{children:Object(d.jsx)(h.a.Body,{children:Object(d.jsxs)(h.a.Title,{className:"text-center",children:[r," ",c]})})})})}function y(e){var t=e.users;return Object(d.jsx)("div",{className:"ReducedUserComponentList",children:t.map((function(e){return Object(d.jsx)(w,{user:e},e.user_id)}))})}function C(){var e=N("".concat("http://52.79.239.194","/api/users/")),t=e.error,a=e.isPending,r=e.data;return Object(d.jsxs)("div",{className:"HomeView",children:[t&&Object(d.jsx)("div",{children:t}),a&&Object(d.jsx)("div",{children:"Loading..."}),r&&Object(d.jsx)(y,{users:r})]})}function L(e){var t=e.user,a=t.email,r=t.last_name,c=t.first_name,n=t.phone_number;return Object(d.jsx)(h.a,{className:"FullUserComponent",children:Object(d.jsxs)(h.a.Body,{children:[Object(d.jsxs)(h.a.Title,{className:"text-center",children:[r," ",c]}),Object(d.jsx)(h.a.Subtitle,{className:"mb-2 text-muted text-center",children:a}),Object(d.jsx)(h.a.Subtitle,{className:"mb-2 text-muted text-center",children:n})]})})}function P(){var e=Object(i.f)().user_id,t=N("".concat("http://52.79.239.194","/api/users/").concat(e)),a=t.error,r=t.isPending,c=t.data;return Object(d.jsxs)("div",{className:"ProjectView",children:[a&&Object(d.jsx)("div",{children:a}),r&&Object(d.jsx)("div",{children:"Loading..."}),c&&Object(d.jsx)(L,{user:c})]})}function _(){return Object(d.jsx)("h1",{children:"Create Project"})}var S=a(70);function B(e){var t=e.imageURLs;return Object(d.jsx)(S.a,{fade:!0,children:t.map((function(e){return Object(d.jsx)(S.a.Item,{children:Object(d.jsx)("img",{className:"d-block w-100",src:e,alt:""})},e)}))})}function k(e){var t=e.project,a=t.project_id,r=t.user_id,c=t.title,n=N("".concat("http://52.79.239.194","/api/images/").concat(a,"/")),i=n.error,o=n.imagesArePending,j=n.data,l=N("".concat("http://52.79.239.194","/api/users/").concat(r)),u=l.error2,b=l.isPending,p=l.data;return Object(d.jsx)(h.a,{className:"ReducedProjectComponent",children:Object(d.jsxs)(h.a.Body,{children:[Object(d.jsx)(h.a.Title,{className:"text-center",children:Object(d.jsx)(s.b,{to:"/projects/".concat(a),children:c})}),Object(d.jsxs)(h.a.Subtitle,{className:"mb-2 text-muted text-center",children:[u&&{error2:u},b&&"Loading...","By ",p&&Object(d.jsxs)(s.b,{to:"/users/".concat(r),children:[p.last_name," ",p.first_name]})]}),i&&Object(d.jsx)("div",{children:i}),o&&Object(d.jsx)("div",{children:"Loading..."}),j&&Object(d.jsx)(B,{imageURLs:j})]})})}function E(e){var t=e.projects;return Object(d.jsx)("div",{className:"ReducedProjectComponentList",children:t.map((function(e){return Object(d.jsx)(k,{project:e},e.project_id)}))})}function I(){var e=N("".concat("http://52.79.239.194","/api/projects/")),t=e.error,a=e.isPending,r=e.data;return Object(d.jsxs)("div",{className:"HomeView",children:[t&&Object(d.jsx)("div",{children:t}),a&&Object(d.jsx)("div",{children:"Loading..."}),r&&Object(d.jsx)(E,{projects:r})]})}function T(e){var t=e.project,a=t.project_id,r=t.user_id,c=t.title,n=t.body,i=N("".concat("http://52.79.239.194","/api/images/").concat(a,"/")),o=i.error,j=i.imagesArePending,l=i.data,u=N("".concat("http://52.79.239.194","/api/users/").concat(r)),b=u.error2,p=u.isPending,m=u.data;return Object(d.jsx)(h.a,{className:"ReducedProjectComponent",children:Object(d.jsxs)(h.a.Body,{children:[Object(d.jsx)(h.a.Title,{className:"text-center",children:c}),Object(d.jsxs)(h.a.Subtitle,{className:"mb-2 text-muted text-center",children:[b&&{error2:b},p&&"Loading...","By ",m&&Object(d.jsxs)(s.b,{to:"/users/".concat(r),children:[m.last_name," ",m.first_name]})]}),o&&Object(d.jsx)("div",{children:o}),j&&Object(d.jsx)("div",{children:"Loading..."}),l&&Object(d.jsx)(B,{imageURLs:l}),Object(d.jsx)(h.a.Text,{children:n})]})})}function R(){var e=Object(i.f)().project_id,t=N("".concat("http://52.79.239.194","/api/projects/").concat(e)),a=t.error,r=t.isPending,c=t.data;return Object(d.jsxs)("div",{className:"ProjectView",children:[a&&Object(d.jsx)("div",{children:a}),r&&Object(d.jsx)("div",{children:"Loading..."}),c&&Object(d.jsx)(T,{project:c})]})}function q(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(s.a,{children:[Object(d.jsx)(u,{}),Object(d.jsxs)("div",{className:"view",children:[Object(d.jsx)(i.a,{exact:!0,path:"/",component:I}),Object(d.jsx)(i.a,{exact:!0,path:"/projects/",component:I}),Object(d.jsx)(i.a,{exact:!0,path:"/projects/:project_id",component:R}),Object(d.jsx)(i.a,{exact:!0,path:"/create_project/",component:_}),Object(d.jsx)(i.a,{exact:!0,path:"/users/",component:C}),Object(d.jsx)(i.a,{exact:!0,path:"/users/:user_id",component:P}),Object(d.jsx)(i.a,{exact:!0,path:"/register/",component:v}),Object(d.jsx)(i.a,{exact:!0,path:"/login/",component:g})]})]})})}a(61);n.a.render(Object(d.jsx)(q,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.84226390.chunk.js.map