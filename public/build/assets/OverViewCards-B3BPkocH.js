import{c as i,j as e}from"./app-J0J4XT7Q.js";import{C as t,a,c as l,b as c}from"./card-DJWe5r0D.js";import{u as d}from"./currencyFormatter-DOmpFJHz.js";import{c as r}from"./createLucideIcon-CMxlCnxM.js";import"./app-CxSMgHDY.js";import"./utils-NikRBbYi.js";import"./clsx-B-dksMZM.js";import"./numeral-3Q0ULTA-.js";/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]],x=r("chart-line",m);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]],h=r("package-check",p);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],j=r("package",u);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],f=r("user",y);function I(){const{data:s}=i().props,o=i().props.auth.user,n=d();return e.jsx(e.Fragment,{children:(o.user_role=="admin"||o.user_role=="super-admin")&&e.jsxs("div",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-4 uppercase",children:[e.jsxs(t,{className:"bg-blue-300 text-blue-950",children:[e.jsxs(a,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[e.jsx(l,{className:"text-sm font-medium",children:"Total Items"}),e.jsx(j,{})]}),e.jsxs(c,{children:[e.jsx("div",{className:"text-2xl font-bold",children:s.totalItems}),e.jsxs("p",{className:"text-muted-foreground text-xs",children:[s.totalQuantities," QTY"]})]})]}),e.jsxs(t,{className:"bg-yellow-200 text-yellow-900",children:[e.jsxs(a,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[e.jsx(l,{className:"text-sm font-medium",children:"Total valuation"}),e.jsx(x,{})]}),e.jsx(c,{children:e.jsx("div",{className:"text-2xl font-bold",children:n(s.totalValuation)})})]}),e.jsxs(t,{className:"bg-green-300 text-green-950 cursor-pointer",onClick:()=>window.location.href=route("sales.items.summary"),children:[e.jsxs(a,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[e.jsx(l,{className:"text-sm font-medium",children:"Sold Items"}),e.jsx(h,{})]}),e.jsx(c,{children:e.jsx("div",{className:"text-2xl font-bold",children:s.soldItems})})]}),e.jsxs(t,{className:"bg-red-300 text-red-950",children:[e.jsxs(a,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[e.jsx(l,{className:"text-sm font-medium",children:"Customer balance"}),e.jsx(f,{})]}),e.jsx(c,{children:e.jsx("div",{className:"text-2xl font-bold",children:n(s.customerBalance)})})]})]})})}export{I as OverViewCards};
