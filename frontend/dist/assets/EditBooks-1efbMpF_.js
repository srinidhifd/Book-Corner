import{r as l,u as x,b as p,a as y,j as e,S as v}from"./index-DJRrCVeB.js";import{B as j}from"./BackButton-w1buQQn4.js";import{a as b}from"./index-7PIVO1JM.js";const E=()=>{const[o,u]=l.useState(""),[r,c]=l.useState(""),[n,d]=l.useState(""),[h,a]=l.useState(!1),m=x(),{id:i}=p(),{enqueueSnackbar:s}=y();l.useEffect(()=>{a(!0),b.get(`http://localhost:5555/books/${i}`).then(t=>{u(t.data.title),c(t.data.author),d(t.data.publishYear),a(!1)}).catch(t=>{a(!1),s("Failed to load book data. Please check the console.",{variant:"error"}),console.log(t)})},[i,s]);const g=()=>{if(!o||!r||!n){s("Please fill in all fields",{variant:"warning"});return}const t={title:o,author:r,publishYear:n};a(!0),b.put(`http://localhost:5555/books/${i}`,t).then(()=>{a(!1),s("Book edited successfully",{variant:"success"}),m("/")}).catch(f=>{a(!1),s("An error occurred. Please try again.",{variant:"error"}),console.log(f)})};return e.jsxs("div",{className:"relative flex flex-col items-center p-6 bg-gray-100 min-h-screen",children:[h&&e.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50",children:e.jsx(v,{})}),e.jsx("div",{className:"absolute top-4 left-4",children:e.jsx(j,{})}),e.jsx("h1",{className:"text-3xl font-bold text-gray-800 my-6",children:"Edit Book"}),e.jsxs("div",{className:"w-full max-w-md bg-white shadow-lg rounded-lg p-6 border border-gray-200",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-600 text-lg font-medium mb-2",htmlFor:"title",children:"Title"}),e.jsx("input",{id:"title",type:"text",value:o,onChange:t=>u(t.target.value),className:"w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Enter book title"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-600 text-lg font-medium mb-2",htmlFor:"author",children:"Author"}),e.jsx("input",{id:"author",type:"text",value:r,onChange:t=>c(t.target.value),className:"w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Enter author's name"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{className:"block text-gray-600 text-lg font-medium mb-2",htmlFor:"publishYear",children:"Publish Year"}),e.jsx("input",{id:"publishYear",type:"number",value:n,onChange:t=>d(t.target.value),className:"w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Enter publish year"})]}),e.jsx("button",{onClick:g,className:"w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300",disabled:h,children:"Save Changes"})]})]})};export{E as default};
