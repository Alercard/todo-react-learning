(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(5),r=n.n(a),s=(n(13),n(7)),l=n(2);var i=n(0),u=c.a.createContext();function d(e){var t=function(e,t){var n=c.a.useState(!0),o=Object(l.a)(n,2),a=o[0],r=o[1],s=c.a.useState(!1),i=Object(l.a)(s,2),u=i[0],d=i[1],j=c.a.useState(t),O=Object(l.a)(j,2),b=O[0],m=O[1];return c.a.useEffect((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),m(n),r(!1)}catch(c){d(c)}}),2e3)})),{item:b,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),m(t)}catch(o){d(o)}},loading:a,error:u}}("TODOS_V1",[]),n=t.item,o=t.saveItem,a=t.loading,r=t.error,d=c.a.useState(""),j=Object(l.a)(d,2),O=j[0],b=j[1],m=c.a.useState(!1),x=Object(l.a)(m,2),p=x[0],f=x[1],h=n.filter((function(e){return!!e.completed})).length,v=n.length,T=[];T=O.length>0?n.filter((function(e){var t=e.text.toLowerCase(),n=O.toLowerCase();return t.includes(n)})):n;return Object(i.jsx)(u.Provider,{value:{loading:a,error:r,completedTodos:h,totalTodos:v,searchValue:O,setSearchValue:b,searchedTodos:T,addTODO:function(e){var t=Object(s.a)(n);t.push({completed:!1,text:e,key:e}),o(t)},completeTODO:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c[t].completed=!c[t].completed,o(c)},deleteTODO:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c.splice(t,1),o(c)},openModal:p,setOpenModal:f},children:e.children})}n(15);function j(){var e=c.a.useContext(u),t=e.totalTodos,n=e.completedTodos;return Object(i.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",n," de ",t," TODOs"]})}n(16);function O(){var e=c.a.useContext(u),t=e.searchValue,n=e.setSearchValue;return Object(i.jsx)("input",{placeholder:"Cebolla",className:"TodoSearch",value:t,onChange:function(e){console.log(e.target.value),n(e.target.value)}})}n(17);function b(e){return Object(i.jsx)("section",{children:Object(i.jsx)("ul",{children:e.children})})}n(18);var m=n(3);function x(e){return Object(i.jsxs)("li",{className:"TodoItem",children:[Object(i.jsx)("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onComplete,children:Object(i.jsx)(m.a,{})}),Object(i.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(i.jsx)("span",{className:"Icon Icon-delete",onClick:e.onDelete,children:Object(i.jsx)(m.d,{color:"red"})})]})}n(19);function p(){var e=c.a.useState(""),t=Object(l.a)(e,2),n=t[0],o=t[1],a=c.a.useContext(u),r=a.addTODO,s=a.setOpenModal;return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(n),s(!1)},children:[Object(i.jsx)("label",{children:"..."}),Object(i.jsx)("textarea",{value:n,onChange:function(e){o(e.target.value)},placeholder:"Cortar la cebolla para el almuerzo"}),Object(i.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(i.jsx)("button",{className:"TodoForm-button TodoForm-button-cancel",type:"button",onClick:function(){s(!1)},children:Object(i.jsx)(m.c,{color:"white"})}),Object(i.jsx)("button",{className:"TodoForm-button TodoForm-button-add",type:"submit",children:Object(i.jsx)(m.b,{color:"white"})})]})]})}n(20);function f(e){var t=e.setOpenModal;return Object(i.jsx)("button",{className:"CreateTodoButton",onClick:function(){t((function(e){return!e}))},children:"+"})}n(21);function h(e){var t=e.children;return r.a.createPortal(Object(i.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}function v(e){e.error;return Object(i.jsx)("p",{children:"Desesperate, hubo un error...."})}n(22);function T(){return Object(i.jsxs)("div",{className:"LoadingTodo-container",children:[Object(i.jsx)("span",{className:"LoadingTodo-completeIcon"}),Object(i.jsx)("p",{className:"LoadingTodo-text",children:"Cargando TODOs..."}),Object(i.jsx)("span",{className:"LoadingTodo-deleteIcon"})]})}function g(){return Object(i.jsx)("p",{children:"!Crea tu primer TODO!"})}function C(){var e=c.a.useContext(u),t=e.error,n=e.loading,o=e.searchedTodos,a=e.completeTODO,r=e.deleteTODO,s=e.openModal,l=e.setOpenModal;return Object(i.jsxs)(c.a.Fragment,{children:[Object(i.jsx)(j,{}),Object(i.jsx)(O,{}),Object(i.jsxs)(b,{children:[t&&Object(i.jsx)(v,{error:t}),n&&Object(i.jsx)(T,{}),!n&&!o.length&&Object(i.jsx)(g,{}),o.map((function(e){return Object(i.jsx)(x,{text:e.text,completed:e.completed,onComplete:function(){a(e.text)},onDelete:function(){r(e.text)}},e.text)}))]}),!!s&&Object(i.jsx)(h,{children:Object(i.jsx)(p,{})}),Object(i.jsx)(f,{setOpenModal:l})]})}var I=function(){return Object(i.jsx)(d,{children:Object(i.jsx)(C,{})})};r.a.render(Object(i.jsx)(I,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.79fd4471.chunk.js.map