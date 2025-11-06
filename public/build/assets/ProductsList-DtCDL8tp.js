import{j as e,L as o,a as c}from"./app-J0J4XT7Q.js";import{u as n}from"./currencyFormatter-DOmpFJHz.js";import{I as a}from"./IconButton-CxCxJBhO.js";import{c as i}from"./createLucideIcon-CMxlCnxM.js";/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M8 5v14",key:"1ybrkv"}],["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"M17 5v14",key:"ycjyhj"}],["path",{d:"M21 5v14",key:"nzette"}]],x=i("barcode",d);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],h=i("history",m);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],y=i("star",j),v=({products:r,handleProductEdit:t})=>{const l=n();return e.jsx("ul",{className:"faded-bottom no-scrollbar grid gap-2 overflow-auto pt-1 pb-1 w-full",children:r.map(s=>e.jsxs("li",{className:"p-3 w-full shadow-sm",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("div",{className:"uppercase tracking-wide text-sm text-blue-900 font-semibold",children:e.jsx(o,{href:"/products/"+s.id+"/edit",children:s.name})}),e.jsxs("div",{className:"flex ml-2",children:[e.jsx(a,{children:e.jsx(y,{size:20})}),e.jsx(a,{onClick:()=>c.visit(`/quantity/${s.stock_id}/log`),children:e.jsx(h,{size:20})}),e.jsx(a,{onClick:()=>c.visit(`/product/${s.batch_id}/barcode-v2`),children:e.jsx(x,{size:20})})]})]}),e.jsxs("div",{className:"mt-2 grid grid-cols-3 gap-4",children:[e.jsxs("div",{onClick:()=>t(s,"batch"),children:[e.jsx("div",{className:"text-gray-500 text-sm",children:"Sale Price"}),e.jsx("div",{className:"text-gray-700 text-sm font-bold",children:l(s.price,!1)})]}),e.jsxs("div",{onClick:()=>t(s,"batch"),children:[e.jsx("div",{className:"text-gray-500 text-sm",children:"Cost"}),e.jsx("div",{className:"text-gray-700 text-sm font-bold",children:l(s.cost,!1)})]}),e.jsxs("div",{onClick:()=>t(s,"qty"),children:[e.jsx("div",{className:"text-gray-500 text-sm",children:"In Stock"}),e.jsx("div",{className:"text-gray-700 text-sm font-bold",children:s.quantity})]})]})]}))})},u=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"}));export{x as B,v as P,u as a};
