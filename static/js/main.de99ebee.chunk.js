(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{30:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(22),s=n.n(c),o=(n(30),n(25)),i=n(10),u=n(9),d=n.n(u),l=n(13),j=n(7),p=n(3),b=n(2),f=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(b.jsx)("button",{onClick:r,style:{backgroundColor:t},className:"btn",children:n})};f.defaultProps={color:"steelblue"};var h=f,k=function(e){var t=e.title,n=e.onAdd,r=e.showAdd,a=Object(p.d)();return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("h1",{children:t}),"/"===a.pathname&&Object(b.jsx)(h,{color:r?"red":"green",text:r?"Close":"Add",onClick:n})]})};k.defaultProps={title:"Task Tracker"};var O=n(17),x=n(24);var m=function(e){var t=e.task,n=e.onEdit,a=e.invertEdit,c=e.reminder,s=Object(r.useState)(t.text),o=Object(j.a)(s,2),i=o[0],u=o[1],d=Object(r.useState)(t.day),l=Object(j.a)(d,2),p=l[0],f=l[1],h=function(){a(),n(t.id,{text:i,day:p,reminder:c}),u(t.text),f(t.day)};return Object(b.jsx)("div",{className:"task ".concat(t.reminder?"reminder":""),children:Object(b.jsxs)("form",{className:"edit-form",onSubmit:h,children:[Object(b.jsx)(x.a,{type:"submit",value:"Edit Task",className:"tick-icon",onClick:function(){return h()},style:{color:"green",cursor:"pointer"}}),Object(b.jsx)("input",{className:"edit-text",type:"text",placeholder:t.text,value:i,onChange:function(e){return u(e.target.value)}}),Object(b.jsx)("input",{className:"edit-day",type:"text",placeholder:t.day,value:p,onChange:function(e){return f(e.target.value)}})]})})};var v=function(e){var t=e.task,n=e.onDelete,a=e.onToggle,c=e.onEdit,s=Object(r.useState)(!0),o=Object(j.a)(s,2),i=o[0],u=o[1],d=function(){u(!i)};return i?Object(b.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),children:[Object(b.jsxs)("h3",{children:[t.text,Object(b.jsxs)("div",{children:[Object(b.jsx)(O.a,{className:"pencil-icon",onClick:function(){return d(t.id)},style:{color:"green",cursor:"pointer"}}),Object(b.jsx)(O.b,{onClick:function(){return n(t.id)},style:{color:"red",cursor:"pointer"}})]})]}),Object(b.jsx)("p",{onClick:function(){return a(t.id)},children:t.day})]}):Object(b.jsx)(m,{task:t,onEdit:c,invertEdit:d,reminder:t.reminder})},y=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle,a=e.onEdit;return Object(b.jsx)(b.Fragment,{children:t.map((function(e){return Object(b.jsx)(v,{task:e,onDelete:n,onToggle:r,onEdit:a},e.id)}))})};n(12);var g=function(e){var t=e.onAdd,n=Object(r.useState)(""),a=Object(j.a)(n,2),c=a[0],s=a[1],o=Object(r.useState)(""),i=Object(j.a)(o,2),u=i[0],d=i[1],l=Object(r.useState)(!1),p=Object(j.a)(l,2),f=p[0],h=p[1];return Object(b.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),c?(t({text:c,day:u,reminder:f}),s(""),d(""),h(!1)):alert("Please add a task")},children:[Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Task"}),Object(b.jsx)("input",{type:"text",placeholder:"Add Task",value:c,onChange:function(e){return s(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Day & Time"}),Object(b.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:u,onChange:function(e){return d(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-control form-control-check",children:[Object(b.jsx)("label",{children:"Set Reminder"}),Object(b.jsx)("input",{value:f,onChange:function(e){return h(e.currentTarget.checked)},checked:f,type:"checkbox"})]}),Object(b.jsx)("input",{className:"btn btn-block",type:"submit",value:"Save Task"})]})};var C=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),s=Object(j.a)(c,2),u=s[0],p=s[1];Object(r.useEffect)((function(){fetch("https://task-tracker-react-flask.herokuapp.com/api/tasks").then((function(e){return e.json()})).then((function(e){p(e.task)})),console.log("fetched")}),[]);var f=function(){var e=Object(l.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://task-tracker-react-flask.herokuapp.com/api/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://task-tracker-react-flask.herokuapp.com/api/tasks/".concat(t),{method:"DELETE"});case 2:p(u.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(d.a.mark((function e(t){var n,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(u.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{reminder:!e.reminder}):e}))),e.next=3,f(t);case 3:return n=e.sent,r=Object(i.a)(Object(i.a)({},n),{},{reminder:!n.reminder}),e.next=7,fetch("https://task-tracker-react-flask.herokuapp.com/api/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 7:return a=e.sent,e.next=10,a.json();case 10:e.sent;case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(d.a.mark((function e(t,n){var r,a,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:return r=e.sent,a=Object(i.a)(Object(i.a)({},r),{},{text:n.text,day:n.day}),e.next=6,fetch("https://task-tracker-react-flask.herokuapp.com/api/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(a)});case 6:return c=e.sent,e.next=9,c.json();case 9:s=e.sent,p(u.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{text:s.text,day:s.day}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(l.a)(d.a.mark((function e(t){var r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://task-tracker-react-flask.herokuapp.com/api/tasks/add",{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return r=e.sent,e.next=5,r.json();case 5:c=e.sent,console.log(c),p([].concat(Object(o.a)(u),[c])),a(!n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[n&&Object(b.jsx)(g,{onAdd:x}),u.length>0?Object(b.jsx)(y,{tasks:u,onDelete:h,onToggle:k,onEdit:O}):"No tasks to show"]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),T()}},[[41,1,2]]]);
//# sourceMappingURL=main.de99ebee.chunk.js.map