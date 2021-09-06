(this["webpackJsonpatelierpaper-client-react"]=this["webpackJsonpatelierpaper-client-react"]||[]).push([[0],{61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a(26),s=a.n(c),n=a(8),i=a(7),o=(a(51),a(71)),j=a(69),l=a(1);function d(){return Object(l.jsxs)(o.a,{bg:"dark",variant:"dark",sticky:"top",expand:"sm",collapseOnSelect:!0,children:[Object(l.jsx)(o.a.Brand,{as:n.b,to:"/",children:"Atelier Paper"}),Object(l.jsx)(o.a.Toggle,{}),Object(l.jsxs)(o.a.Collapse,{children:[Object(l.jsx)(j.a,{className:"me-auto",children:Object(l.jsx)(j.a.Link,{as:n.b,to:"/users",children:"Our Team"})}),Object(l.jsxs)(j.a,{children:[Object(l.jsx)(j.a.Link,{as:n.b,to:"/register",children:"Register"}),Object(l.jsx)(j.a.Link,{as:n.b,to:"/login",children:"Log In"})]})]})]})}var u=a(15),b=a.n(u),p=a(24),m=a(11),x=a(72),h=a(68),O=a(67),f=(a(60),a(45));function v(){var e=Object(i.e)(),t=Object(r.useState)(""),a=Object(m.a)(t,2),c=a[0],s=a[1],n=Object(r.useState)(""),o=Object(m.a)(n,2),j=o[0],d=o[1],u=Object(r.useState)(""),v=Object(m.a)(u,2),g=v[0],N=v[1],w=Object(r.useState)(""),y=Object(m.a)(w,2),L=y[0],P=y[1],C=Object(r.useState)(""),_=Object(m.a)(C,2),S=_[0],B=_[1],k=Object(r.useState)(),I=Object(m.a)(k,2),E=I[0],T=I[1],R=Object(r.useState)(""),q=Object(m.a)(R,2),G=q[0],U=q[1];function F(){return(F=Object(p.a)(b.a.mark((function t(a){var r,n,i,o;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),j===g){t.next=5;break}return alert("Passwords don't match."),N(""),t.abrupt("return");case 5:return(r=new FormData).append("email",c),r.append("password",j),r.append("last_name",L),r.append("first_name",S),r.append("phone_number",E),r.append("specialPermission",G),t.next=14,fetch("".concat("https://atelierpaper.com","/api/users/"),{method:"POST",body:r});case 14:return n=t.sent,t.next=17,n.json();case 17:if(i=t.sent,void 0!==(o=i.error_message)){t.next=22;break}return e.push("/login"),t.abrupt("return");case 22:if("You don't have the permission to create an account."!==o){t.next=26;break}return alert("Invalid Employee Id"),U(""),t.abrupt("return");case 26:"There exists a user with the same email and/or password."===o&&(alert("There exists a user with the same email and/or password."),s(""),d(""),N(""));case 27:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(l.jsx)(x.a,{children:Object(l.jsxs)(x.a.Body,{children:[Object(l.jsx)(x.a.Title,{className:"text-center",children:"Are you an employee?"}),Object(l.jsxs)("form",{onSubmit:function(e){return F.apply(this,arguments)},children:[Object(l.jsxs)(h.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(l.jsx)(h.a.Label,{children:"Email address"}),Object(l.jsx)(h.a.Control,{type:"email",placeholder:"Enter email",value:c,onChange:function(e){return s(e.target.value)},required:!0})]}),Object(l.jsxs)(h.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(l.jsx)(h.a.Label,{children:"Password"}),Object(l.jsx)(h.a.Control,{type:"password",placeholder:"Enter password",value:j,onChange:function(e){return d(e.target.value)},required:!0})]}),Object(l.jsxs)(h.a.Group,{className:"mb-3",controlId:"formBasicConfirmPassword",children:[Object(l.jsx)(h.a.Label,{children:"Confirm Password"}),Object(l.jsx)(h.a.Control,{type:"password",placeholder:"Reenter password",value:g,onChange:function(e){return N(e.target.value)},required:!0})]}),Object(l.jsxs)(h.a.Group,{className:"mb-3",controlId:"formBasicLastName",children:[Object(l.jsx)(h.a.Label,{children:"Last Name"}),Object(l.jsx)(h.a.Control,{type:"text",placeholder:"Enter last name",value:L,onChange:function(e){return P(e.target.value)},required:!0})]}),Object(l.jsxs)(h.a.Group,{className:"mb-3",controlId:"formBasicFirstName",children:[Object(l.jsx)(h.a.Label,{children:"First Name"}),Object(l.jsx)(h.a.Control,{type:"text",placeholder:"Enter first name",value:S,onChange:function(e){return B(e.target.value)},required:!0})]}),Object(l.jsx)(h.a.Group,{className:"mb-3",controlId:"formBasicPhoneNumber",children:Object(l.jsx)(f.a,{placeholder:"Enter phone number",value:E,onChange:T,required:!0})}),Object(l.jsxs)(h.a.Group,{className:"mb-3",controlId:"formBasicSpecialPermission",children:[Object(l.jsx)(h.a.Label,{children:"Employee Id"}),Object(l.jsx)(h.a.Control,{type:"text",placeholder:"Enter employee Id",value:G,onChange:function(e){return U(e.target.value)},required:!0})]}),Object(l.jsx)(O.a,{variant:"primary",type:"submit",children:"Register"})]})]})})}function g(){var e=Object(i.e)(),t=Object(r.useState)(""),a=Object(m.a)(t,2),c=a[0],s=a[1],n=Object(r.useState)(""),o=Object(m.a)(n,2),j=o[0],d=o[1];function u(){return(u=Object(p.a)(b.a.mark((function t(a){var r,n,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),(r=new FormData).append("email",c),r.append("password",j),t.next=6,fetch("".concat("https://atelierpaper.com","/api/sessions/"),{method:"POST",body:r});case 6:return n=t.sent,t.next=9,n.json();case 9:if(void 0!==(i=t.sent).error_message){t.next=13;break}return e.push("/"),t.abrupt("return");case 13:"Wrong email and/or password."===i.error_message&&(alert("Wrong email and/or password."),s(""),d(""));case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(l.jsx)(x.a,{children:Object(l.jsxs)(x.a.Body,{children:[Object(l.jsx)(x.a.Title,{className:"text-center",children:"Are you an employee?"}),Object(l.jsxs)("form",{onSubmit:function(e){return u.apply(this,arguments)},children:[Object(l.jsxs)(h.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(l.jsx)(h.a.Label,{children:"Email address"}),Object(l.jsx)(h.a.Control,{type:"email",placeholder:"Enter email",value:c,onChange:function(e){return s(e.target.value)},required:!0})]}),Object(l.jsxs)(h.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(l.jsx)(h.a.Label,{children:"Password"}),Object(l.jsx)(h.a.Control,{type:"password",placeholder:"Enter password",value:j,onChange:function(e){return d(e.target.value)},required:!0})]}),Object(l.jsx)(O.a,{variant:"primary",type:"submit",children:"Log In"})]})]})})}function N(e){var t=Object(r.useState)(null),a=Object(m.a)(t,2),c=a[0],s=a[1],n=Object(r.useState)(!0),i=Object(m.a)(n,2),o=i[0],j=i[1],l=Object(r.useState)(null),d=Object(m.a)(l,2),u=d[0],x=d[1];return Object(r.useEffect)(Object(p.a)(b.a.mark((function t(){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:return a=t.sent,t.t0=s,t.next=7,a.json();case 7:t.t1=t.sent,(0,t.t0)(t.t1),j(!1),t.next=15;break;case 12:t.prev=12,t.t2=t.catch(0),x(t.t2.message);case 15:case"end":return t.stop()}}),t,null,[[0,12]])}))),[e]),{error:u,isPending:o,data:c}}function w(e){var t=e.user,a=t.user_id,r=t.last_name,c=t.first_name;return Object(l.jsx)(n.b,{className:"ReducedUserComponent",to:"/users/".concat(a),children:Object(l.jsx)(x.a,{children:Object(l.jsx)(x.a.Body,{children:Object(l.jsxs)(x.a.Title,{className:"text-center",children:[r," ",c]})})})})}function y(e){var t=e.users;return Object(l.jsx)("div",{className:"ReducedUserComponentList",children:t.map((function(e){return Object(l.jsx)(w,{user:e},e.user_id)}))})}function L(){var e=N("".concat("https://atelierpaper.com","/api/users/")),t=e.error,a=e.isPending,r=e.data;return Object(l.jsxs)("div",{className:"TeamView",children:[t&&Object(l.jsx)("div",{children:t}),a&&Object(l.jsx)("div",{children:"Loading..."}),r&&Object(l.jsx)(y,{users:r})]})}function P(e){var t=e.user,a=t.email,r=t.last_name,c=t.first_name,s=t.phone_number;return Object(l.jsx)(x.a,{className:"FullUserComponent",children:Object(l.jsxs)(x.a.Body,{children:[Object(l.jsxs)(x.a.Title,{className:"text-center",children:[r," ",c]}),Object(l.jsx)(x.a.Subtitle,{className:"mb-2 text-muted text-center",children:a}),Object(l.jsx)(x.a.Subtitle,{className:"mb-2 text-muted text-center",children:s})]})})}function C(){var e=Object(i.f)().user_id,t=N("".concat("https://atelierpaper.com","/api/users/").concat(e)),a=t.error,r=t.isPending,c=t.data;return Object(l.jsxs)("div",{className:"ProjectView",children:[a&&Object(l.jsx)("div",{children:a}),r&&Object(l.jsx)("div",{children:"Loading..."}),c&&Object(l.jsx)(P,{user:c})]})}var _=a(70);function S(e){var t=e.imageURLs;return Object(l.jsx)(_.a,{fade:!0,children:t.map((function(e){return Object(l.jsx)(_.a.Item,{children:Object(l.jsx)("img",{className:"d-block w-100",src:e,alt:""})},e)}))})}function B(e){var t=e.project,a=t.project_id,r=t.user_id,c=t.title,s=N("".concat("https://atelierpaper.com","/api/images/").concat(a,"/")),i=s.error,o=s.isPending,j=s.data,d=N("".concat("https://atelierpaper.com","/api/users/").concat(r)),u=d.error,b=d.isPending,p=d.data;return Object(l.jsx)(x.a,{className:"ReducedProjectComponent",children:Object(l.jsxs)(x.a.Body,{children:[Object(l.jsx)(x.a.Title,{className:"text-center",children:Object(l.jsx)(n.b,{to:"/projects/".concat(a),children:c})}),Object(l.jsxs)(x.a.Subtitle,{className:"mb-2 text-muted text-center",children:[u&&{error2:u},b&&"Loading...","By ",p&&Object(l.jsxs)(n.b,{to:"/users/".concat(r),children:[p.last_name," ",p.first_name]})]}),i&&Object(l.jsx)("div",{children:i}),o&&Object(l.jsx)("div",{children:"Loading..."}),j&&Object(l.jsx)(S,{imageURLs:j})]})})}function k(e){var t=e.projects;return Object(l.jsx)("div",{className:"ReducedProjectComponentList",children:t.map((function(e){return Object(l.jsx)(B,{project:e},e.project_id)}))})}function I(){var e=N("".concat("https://atelierpaper.com","/api/projects/")),t=e.error,a=e.isPending,r=e.data;return Object(l.jsxs)("div",{className:"HomeView",children:[t&&Object(l.jsx)("div",{children:t}),a&&Object(l.jsx)("div",{children:"Loading..."}),r&&Object(l.jsx)(k,{projects:r})]})}function E(e){var t=e.project,a=t.project_id,r=t.user_id,c=t.title,s=t.body,i=N("".concat("https://atelierpaper.com","/api/images/").concat(a,"/")),o=i.error,j=i.isPending,d=i.data,u=N("".concat("https://atelierpaper.com","/api/users/").concat(r)),b=u.error,p=u.isPending,m=u.data;return Object(l.jsx)(x.a,{className:"ReducedProjectComponent",children:Object(l.jsxs)(x.a.Body,{children:[Object(l.jsx)(x.a.Title,{className:"text-center",children:c}),Object(l.jsxs)(x.a.Subtitle,{className:"mb-2 text-muted text-center",children:[b&&{error2:b},p&&"Loading...","By ",m&&Object(l.jsxs)(n.b,{to:"/users/".concat(r),children:[m.last_name," ",m.first_name]})]}),o&&Object(l.jsx)("div",{children:o}),j&&Object(l.jsx)("div",{children:"Loading..."}),d&&Object(l.jsx)(S,{imageURLs:d}),Object(l.jsx)(x.a.Text,{children:s})]})})}function T(){var e=Object(i.f)().project_id,t=N("".concat("https://atelierpaper.com","/api/projects/").concat(e)),a=t.error,r=t.isPending,c=t.data;return Object(l.jsxs)("div",{className:"ProjectView",children:[a&&Object(l.jsx)("div",{children:a}),r&&Object(l.jsx)("div",{children:"Loading..."}),c&&Object(l.jsx)(E,{project:c})]})}function R(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(n.a,{children:[Object(l.jsx)(d,{}),Object(l.jsxs)("div",{className:"view",children:[Object(l.jsx)(i.a,{exact:!0,path:"/",component:I}),Object(l.jsx)(i.a,{exact:!0,path:"/projects/",component:I}),Object(l.jsx)(i.a,{exact:!0,path:"/projects/:project_id",component:T}),Object(l.jsx)(i.a,{exact:!0,path:"/users/",component:L}),Object(l.jsx)(i.a,{exact:!0,path:"/users/:user_id",component:C}),Object(l.jsx)(i.a,{exact:!0,path:"/register/",component:v}),Object(l.jsx)(i.a,{exact:!0,path:"/login/",component:g})]})]})})}a(61);s.a.render(Object(l.jsx)(R,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.6d1a43d8.chunk.js.map