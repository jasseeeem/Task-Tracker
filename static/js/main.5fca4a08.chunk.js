(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{30:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(22),s=n.n(a),o=(n(30),n(25)),i=n(10),u=n(9),d=n.n(u),j=n(13),l=n(7),b=n(3),h=n(2),f=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(h.jsx)("button",{onClick:r,style:{backgroundColor:t},className:"btn",children:n})};f.defaultProps={color:"steelblue"};var p=f,x=function(e){var t=e.title,n=e.onAdd,r=e.showAdd,c=Object(b.e)();return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("h1",{children:t}),"/"===c.pathname&&Object(h.jsx)(p,{color:r?"red":"green",text:r?"Close":"Add",onClick:n})]})};x.defaultProps={title:"Task Tracker"};var O=x,m=n(17),k=n(24);var v=function(e){var t=e.task,n=e.onEdit,c=e.invertEdit,a=e.reminder,s=Object(r.useState)(t.text),o=Object(l.a)(s,2),i=o[0],u=o[1],d=Object(r.useState)(t.day),j=Object(l.a)(d,2),b=j[0],f=j[1],p=function(){c(),n(t.id,{text:i,day:b,reminder:a}),u(t.text),f(t.day)};return Object(h.jsx)("div",{className:"task ".concat(t.reminder?"reminder":""),children:Object(h.jsxs)("form",{className:"edit-form",onSubmit:p,children:[Object(h.jsx)(k.a,{type:"submit",value:"Edit Task",className:"tick-icon",onClick:function(){return p()},style:{color:"green",cursor:"pointer"}}),Object(h.jsx)("input",{className:"edit-text",type:"text",placeholder:t.text,value:i,onChange:function(e){return u(e.target.value)}}),Object(h.jsx)("input",{className:"edit-day",type:"text",placeholder:t.day,value:b,onChange:function(e){return f(e.target.value)}})]})})};var y=function(e){var t=e.task,n=e.onDelete,c=e.onToggle,a=e.onEdit,s=Object(r.useState)(!0),o=Object(l.a)(s,2),i=o[0],u=o[1],d=function(){u(!i)};return i?Object(h.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),children:[Object(h.jsxs)("h3",{children:[t.text,Object(h.jsxs)("div",{children:[Object(h.jsx)(m.a,{className:"pencil-icon",onClick:function(){return d(t.id)},style:{color:"green",cursor:"pointer"}}),Object(h.jsx)(m.b,{onClick:function(){return n(t.id)},style:{color:"red",cursor:"pointer"}})]})]}),Object(h.jsx)("p",{onClick:function(){return c(t.id)},children:t.day})]}):Object(h.jsx)(v,{task:t,onEdit:a,invertEdit:d,reminder:t.reminder})},g=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle,c=e.onEdit;return Object(h.jsx)(h.Fragment,{children:t.map((function(e){return Object(h.jsx)(y,{task:e,onDelete:n,onToggle:r,onEdit:c},e.id)}))})},T=n(11);var C=function(){return Object(h.jsxs)("footer",{children:[Object(h.jsx)("p",{children:"Copyright \xa9 2021 Jaseem"}),Object(h.jsx)(T.b,{to:"/about",children:"About"})]})};var N=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(l.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),i=Object(l.a)(o,2),u=i[0],d=i[1],j=Object(r.useState)(!1),b=Object(l.a)(j,2),f=b[0],p=b[1];return Object(h.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:u,reminder:f}),s(""),d(""),p(!1)):alert("Please add a task")},children:[Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Task"}),Object(h.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Day & Time"}),Object(h.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:u,onChange:function(e){return d(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control form-control-check",children:[Object(h.jsx)("label",{children:"Set Reminder"}),Object(h.jsx)("input",{value:f,onChange:function(e){return p(e.currentTarget.checked)},checked:f,type:"checkbox"})]}),Object(h.jsx)("input",{className:"btn btn-block",type:"submit",value:"Save Task"})]})};var S=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{children:"Version 0.0.1"}),Object(h.jsx)(T.b,{to:"/",children:"Go Back"})]})},w=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(l.a)(a,2),u=s[0],f=s[1];Object(r.useEffect)((function(){fetch("https://task-tracker-react-flask.herokuapp.com/api/tasks").then((function(e){return e.json()})).then((function(e){f(e.task)}))}),[]);var p=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/tasks/".concat(t),{method:"DELETE"});case 2:f(u.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,r,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:return n=e.sent,r=Object(i.a)(Object(i.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return c=e.sent,e.next=9,c.json();case 9:a=e.sent,f(u.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{reminder:a.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(j.a)(d.a.mark((function e(t,n){var r,c,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:return r=e.sent,c=Object(i.a)(Object(i.a)({},r),{},{text:n.text,day:n.day}),e.next=6,fetch("/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(c)});case 6:return a=e.sent,e.next=9,a.json();case 9:s=e.sent,f(u.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{text:s.text,day:s.day}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(j.a)(d.a.mark((function e(t){var r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://task-tracker-react-flask.herokuapp.com/api/tasks/add",{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return r=e.sent,e.next=5,r.json();case 5:a=e.sent,console.log(a),f([].concat(Object(o.a)(u),[a])),c(!n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(T.a,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(O,{onAdd:function(){return c(!n)},showAdd:n}),Object(h.jsx)(b.a,{path:"https://jasseeeem.github.io/Task-Tracker/",exact:!0,render:function(e){return Object(h.jsxs)(h.Fragment,{children:[n&&Object(h.jsx)(N,{onAdd:v}),u.length>0?Object(h.jsx)(g,{tasks:u,onDelete:x,onToggle:m,onEdit:k}):"No tasks to show"]})}}),Object(h.jsx)(b.a,{path:"https://jasseeeem.github.io/Task-Tracker/about",component:S}),Object(h.jsx)(C,{})]})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root")),E()}},[[41,1,2]]]);
//# sourceMappingURL=main.5fca4a08.chunk.js.map