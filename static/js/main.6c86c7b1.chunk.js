(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{30:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(22),s=n.n(a),o=(n(30),n(25)),i=n(10),u=n(9),l=n.n(u),d=n(13),j=n(7),b=n(3),f=n(2),h=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(f.jsx)("button",{onClick:r,style:{backgroundColor:t},className:"btn",children:n})};h.defaultProps={color:"steelblue"};var p=h,x=function(e){var t=e.title,n=e.onAdd,r=e.showAdd,c=Object(b.e)();return Object(f.jsxs)("header",{className:"header",children:[Object(f.jsx)("h1",{children:t}),"/"===c.pathname&&Object(f.jsx)(p,{color:r?"red":"green",text:r?"Close":"Add",onClick:n})]})};x.defaultProps={title:"Task Tracker"};var O=x,m=n(17),k=n(24);var v=function(e){var t=e.task,n=e.onEdit,c=e.invertEdit,a=e.reminder,s=Object(r.useState)(t.text),o=Object(j.a)(s,2),i=o[0],u=o[1],l=Object(r.useState)(t.day),d=Object(j.a)(l,2),b=d[0],h=d[1],p=function(){c(),n(t.id,{text:i,day:b,reminder:a}),u(t.text),h(t.day)};return Object(f.jsx)("div",{className:"task ".concat(t.reminder?"reminder":""),children:Object(f.jsxs)("form",{className:"edit-form",onSubmit:p,children:[Object(f.jsx)(k.a,{type:"submit",value:"Edit Task",className:"tick-icon",onClick:function(){return p()},style:{color:"green",cursor:"pointer"}}),Object(f.jsx)("input",{className:"edit-text",type:"text",placeholder:t.text,value:i,onChange:function(e){return u(e.target.value)}}),Object(f.jsx)("input",{className:"edit-day",type:"text",placeholder:t.day,value:b,onChange:function(e){return h(e.target.value)}})]})})};var g=function(e){var t=e.task,n=e.onDelete,c=e.onToggle,a=e.onEdit,s=Object(r.useState)(!0),o=Object(j.a)(s,2),i=o[0],u=o[1],l=function(){u(!i)};return i?Object(f.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),children:[Object(f.jsxs)("h3",{children:[t.text,Object(f.jsxs)("div",{children:[Object(f.jsx)(m.a,{className:"pencil-icon",onClick:function(){return l(t.id)},style:{color:"green",cursor:"pointer"}}),Object(f.jsx)(m.b,{onClick:function(){return n(t.id)},style:{color:"red",cursor:"pointer"}})]})]}),Object(f.jsx)("p",{onClick:function(){return c(t.id)},children:t.day})]}):Object(f.jsx)(v,{task:t,onEdit:a,invertEdit:l,reminder:t.reminder})},y=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle,c=e.onEdit;return Object(f.jsx)(f.Fragment,{children:t.map((function(e){return Object(f.jsx)(g,{task:e,onDelete:n,onToggle:r,onEdit:c},e.id)}))})},C=n(11);var N=function(){return Object(f.jsxs)("footer",{children:[Object(f.jsx)("p",{children:"Copyright \xa9 2021 Jaseem"}),Object(f.jsx)(C.b,{to:"/about",children:"About"})]})};var T=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(j.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),i=Object(j.a)(o,2),u=i[0],l=i[1],d=Object(r.useState)(!1),b=Object(j.a)(d,2),h=b[0],p=b[1];return Object(f.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:u,reminder:h}),s(""),l(""),p(!1)):alert("Please add a task")},children:[Object(f.jsxs)("div",{className:"form-control",children:[Object(f.jsx)("label",{children:"Task"}),Object(f.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(f.jsxs)("div",{className:"form-control",children:[Object(f.jsx)("label",{children:"Day & Time"}),Object(f.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:u,onChange:function(e){return l(e.target.value)}})]}),Object(f.jsxs)("div",{className:"form-control form-control-check",children:[Object(f.jsx)("label",{children:"Set Reminder"}),Object(f.jsx)("input",{value:h,onChange:function(e){return p(e.currentTarget.checked)},checked:h,type:"checkbox"})]}),Object(f.jsx)("input",{className:"btn btn-block",type:"submit",value:"Save Task"})]})};var S=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h4",{children:"Version 0.0.1"}),Object(f.jsx)(C.b,{to:"/",children:"Go Back"})]})},w=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(j.a)(a,2),u=s[0],h=s[1];Object(r.useEffect)((function(){fetch("https://task-tracker-react-flask.herokuapp.com/api/tasks").then((function(e){return e.json()})).then((function(e){h(e.task),console.log("before"),console.log(e.task),console.log("after")}))}),[]);var p=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/tasks/".concat(t),{method:"DELETE"});case 2:h(u.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:return n=e.sent,r=Object(i.a)(Object(i.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return c=e.sent,e.next=9,c.json();case 9:a=e.sent,h(u.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{reminder:a.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(l.a.mark((function e(t,n){var r,c,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:return r=e.sent,c=Object(i.a)(Object(i.a)({},r),{},{text:n.text,day:n.day}),e.next=6,fetch("/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(c)});case 6:return a=e.sent,e.next=9,a.json();case 9:s=e.sent,h(u.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{text:s.text,day:s.day}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(d.a)(l.a.mark((function e(t){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.id),e.next=3,fetch("https://task-tracker-react-flask.herokuapp.com/api/tasks/add",{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 3:return r=e.sent,console.log("a"),console.log(t),e.next=8,r.json();case 8:a=e.sent,console.log("b"),console.log(a),h([].concat(Object(o.a)(u),[a])),c(!n);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(C.a,{children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(O,{onAdd:function(){return c(!n)},showAdd:n}),Object(f.jsx)(b.a,{path:"/",exact:!0,render:function(e){return Object(f.jsxs)(f.Fragment,{children:[n&&Object(f.jsx)(T,{onAdd:v}),u.length>0?Object(f.jsx)(y,{tasks:u,onDelete:x,onToggle:m,onEdit:k}):"No tasks to show"]})}}),Object(f.jsx)(b.a,{path:"/about",component:S}),Object(f.jsx)(N,{})]})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root")),E()}},[[41,1,2]]]);
//# sourceMappingURL=main.6c86c7b1.chunk.js.map