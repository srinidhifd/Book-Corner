import{r as l,b as n,j as e,S as d}from"./index-CkbSKsks.js";import{a as o}from"./index-0qfXiD_Z.js";import{e as p,f,g,h,b as i}from"./index-B0c994Ag.js";import{B as j}from"./BackButton-Ba15svby.js";const v=()=>{const[s,c]=l.useState({}),[m,a]=l.useState(!1),{id:x}=n();l.useEffect(()=>{a(!0),o.get(`http://localhost:5555/books/${x}`).then(t=>{c(t.data),a(!1)}).catch(t=>{console.log(t),a(!1)})},[x]);const r=t=>new Date(t).toLocaleString();return e.jsxs("div",{className:"relative flex flex-col items-center p-6 bg-gray-100 min-h-screen",children:[m&&e.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50",children:e.jsx(d,{})}),e.jsx("div",{className:"absolute top-4 left-4",children:e.jsx(j,{})}),e.jsx("h1",{className:"text-3xl font-bold text-gray-800 my-6",children:"Book Details"}),e.jsx("div",{className:"w-full max-w-md bg-white shadow-lg rounded-lg p-6 border border-gray-200 md:max-w-lg lg:max-w-xl",children:e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(p,{className:"text-xl text-blue-600"}),e.jsx("span",{className:"text-md font-medium text-gray-600",children:"ID:"}),e.jsx("span",{className:"text-sm text-gray-800 break-all",children:s._id})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(f,{className:"text-xl text-blue-600"}),e.jsx("span",{className:"text-md font-medium text-gray-600",children:"Title:"}),e.jsx("span",{className:"text-sm text-gray-800",children:s.title})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(g,{className:"text-xl text-blue-600"}),e.jsx("span",{className:"text-md font-medium text-gray-600",children:"Author:"}),e.jsx("span",{className:"text-sm text-gray-800",children:s.author})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(h,{className:"text-xl text-blue-600"}),e.jsx("span",{className:"text-md font-medium text-gray-600",children:"Publish Year:"}),e.jsx("span",{className:"text-sm text-gray-800",children:s.publishYear})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(i,{className:"text-xl text-blue-600"}),e.jsx("span",{className:"text-md font-medium text-gray-600",children:"Created At:"}),e.jsx("span",{className:"text-sm text-gray-800",children:r(s.createdAt)})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(i,{className:"text-xl text-blue-600"}),e.jsx("span",{className:"text-md font-medium text-gray-600",children:"Last Updated:"}),e.jsx("span",{className:"text-sm text-gray-800",children:r(s.updatedAt)})]})]})})]})};export{v as default};