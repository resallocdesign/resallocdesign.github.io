(this.webpackJsonprecallocdesign=this.webpackJsonprecallocdesign||[]).push([[6],{35:function(e,t,n){"use strict";var r=n(0);t.a=function(e){return Object(r.useEffect)((function(){var t=document.title;return document.title=e,function(){document.title=t}}),[e])}},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(39),s=n.n(r),c=n(41),a=n(13);function i(){return(i=Object(c.a)(s.a.mark((function e(t){var n,r,c,i,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.results,r=t.prolificInfo,c=t.condition,e.prev=1,i=JSON.stringify({results:n,prolificInfo:r,condition:c}),o=fetch("/api/v1/comp-fade-study",{method:"POST",headers:{"Content-Type":"application/json"},body:i}),a.b.promise(o,{loading:"Please wait before continuing...",success:"You may proceed now.",error:"Failed to configure data. Please email coordinator."}),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(1),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}var o={create:function(e){return i.apply(this,arguments)}}},42:function(e,t,n){"use strict";n.r(t);var r=n(33),s=n(0),c=n(1),a=n(3),i=[{name:"(text+vis, individual)",uri:"vp"},{name:"(text+vis, group)",uri:"vc"},{name:"(text, individual)",uri:"np"},{name:"(text, group)",uri:"nc"}],o=[{name:"(textNone, visGroup)",uri:"nc"},{name:"(textIndividual, visGroup)",uri:"pc"},{name:"(textGroup, visNone)",uri:"cn"},{name:"(textGroup, visGroup)",uri:"cc"},{name:"(textGroup, visIndividual)",uri:"cp"},{name:"(textIndividual, visNone)",uri:"pn"},{name:"(textIndividual, visGroup)",uri:"pc"},{name:"(textIndividual, visIndividual)",uri:"pp"}];var l=function(e){var t=e.exp,n=e.onClick,l=(e.isSelected,Object(c.g)()),d=Object(s.useState)(""),u=Object(r.a)(d,2);u[0],u[1];return Object(a.jsxs)("div",{onClick:n,className:"flex w-full py-1 mx-2 bg-gray-100 rounded-lg md:flex-col hover:bg-gray-200",children:[Object(a.jsxs)("h2",{className:"w-full py-1 ml-4 text-xl font-bold tracking-wider uppercase",children:[" ",t.title]}),Object(a.jsxs)("h3",{className:"w-full pb-4 ml-4 text-md",children:[" ",t.desc," "]}),Object(a.jsx)("div",{className:"w-full text-gray-800 bg-white rounded-lg hover:bg-gray-100 hover:text-orange-500",children:Object(a.jsx)("div",{className:"flex justify-center w-full h-64 "+("Experiment 3"===t.title?"bg-gray-800":"bg-gray-300"),onClick:function(){},children:Object(a.jsx)("img",{className:"absolute h-64 py-2",src:""+t.pic,alt:"props.studyImgAlt"})})}),Object(a.jsxs)("h4",{className:"w-full px-8 py-4 font-semibold rounded-lg ",children:["Measure: ",Object(a.jsx)("span",{children:t.measure})]}),Object(a.jsxs)("div",{className:"mx-4 my-2",children:[Object(a.jsx)("h3",{className:"text-lg font-bold",children:" Conditions:"}),Object(a.jsxs)("div",{className:"flex flex-wrap ml-6 space-x-4",children:["Experiment 3"===t.title&&o.map((function(e){return Object(a.jsxs)("button",{className:"px-2 py-1 mt-2 bg-gray-300 rounded-lg cursor-pointer hover:bg-yellow-400",onClick:function(){l.push("/exp3?cond="+e.uri)},children:[" ",e.name," "]})})),"Experiment 3"!==t.title&&i.map((function(e){return Object(a.jsx)("button",{className:"px-2 py-1 mt-2 bg-gray-300 rounded-lg cursor-pointer hover:bg-yellow-400",onClick:function(){"Experiment 1"===t.title&&l.push("/exp1?cond="+e.uri),"Experiment 2"===t.title&&l.push("/exp2?cond="+e.uri)},children:e.name})}))]})]})]})};t.default=function(e){e.nextState;var t=Object(s.useState)(1),n=Object(r.a)(t,2),c=n[0],i=n[1];return Object(a.jsx)("div",{className:"",children:Object(a.jsxs)("div",{className:"px-2 pt-4 mx-auto",children:[Object(a.jsx)("h2",{className:"mt-4 mb-2 text-2xl font-bold text-center text-gray-800",children:"Designing Resource Allocation Tools to Promote Fair Allocation"}),Object(a.jsx)("h3",{className:"mb-2 text-xl text-center text-gray-800",children:"Does Visualization and Information Framing Matter?"}),Object(a.jsxs)("h4",{className:"text-center",children:[Object(a.jsx)("a",{className:"text-blue-600 underline hover:text-blue-400",target:"_blank",rel:"noreferrer",href:"https://www.arnavverma.com/",children:"Arnav Verma"}),","," ",Object(a.jsx)("a",{className:"text-blue-600 underline hover:text-blue-400",target:"_blank",rel:"noreferrer",href:"https://luizaugustomm.github.io/",children:"Luiz Morais"}),", "," ",Object(a.jsx)("a",{className:"text-blue-600 underline hover:text-blue-400",target:"_blank",rel:"noreferrer",href:"http://dragice.fr/",children:"Pierre Dragicevic"}),", "," ",Object(a.jsx)("a",{className:"text-blue-600 underline hover:text-blue-400",target:"_blank",rel:"noreferrer",href:"http://fannychevalier.net/",children:"Fanny Chevalier"})]}),Object(a.jsxs)("h4",{className:"ml-4",children:["Paper Link:  ",Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://doi.org/10.1145/3544548.3580739",className:"text-blue-600 underline hover:text-blue-400",children:"https://doi.org/10.1145/3544548.3580739"})]}),Object(a.jsx)("div",{className:"mb-2 ml-4 ",children:"Click on one of the conditions below to start an experiment!"}),Object(a.jsx)("div",{className:"flex flex-col w-full lg:flex-row ",children:[{title:"Experiment 1",desc:"Initial Investigation of Resource Allocation",pic:"/exp1-display.png",measure:"Large Progam Allocation",url:"/exp1"},{title:"Experiment 2",desc:"A Closer Look at Fair vs. Unfair Allocations",pic:"/exp2-display.png",measure:"Proportion of Fair Allocations",url:"/exp2"},{title:"Experiment 3",desc:"A Rigorous Look at presentation format and framing",pic:"/exp3-display.png",measure:"Unfairness",url:"/exp3"}].map((function(e,t){return Object(a.jsx)(l,{onClick:function(){i(t+1)},isSelected:c===t+1,exp:e})}))})]})})}},43:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var r=n(34),s=n(33),c=n(35),a=n(0),i=n(42),o=n(3);var l=function(e){return Object(o.jsx)("div",{className:"md:px-4",children:Object(o.jsx)("h1",{children:"  "})})};var d=function(){return Object(o.jsx)("div",{className:"min-h-screen bg-blue-100 min-w-screen",children:Object(o.jsxs)("div",{className:"w-full text-4xl tracking-wide text-center align-middle ",children:[Object(o.jsx)("h1",{className:"pt-32",children:"Thank You For Participating! "}),Object(o.jsxs)("h2",{className:"w-3/4 pt-12 mx-auto text-2xl md:px-16",children:["If there is a loading message at the top of your screen, please wait for it to complete and then you may exit the window. ",Object(o.jsx)("br",{})," ",Object(o.jsx)("br",{})]})]})})};function u(e){var t=e.nextState;return Object(o.jsx)("div",{className:"mb-16 ",children:Object(o.jsx)("div",{className:"flex justify-around",children:Object(o.jsx)("button",{onClick:t,className:"w-full px-8 py-4 font-bold tracking-wider uppercase bg-indigo-100 rounded-lg shadow-lg hover:bg-indigo-200 ",children:"Next"})})})}var j=function(e){var t=e.nextState;return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"container px-8 pt-4 mx-auto",children:[Object(o.jsx)("h2",{className:"text-2xl font-bold text-center text-gray-800",children:"Instructions"}),Object(o.jsxs)("p",{className:"mt-16 mb-12 text-gray-800 text-md",children:["For three decades, a charitable organization known as Mercy Corps has helped support children in need around the globe. ",Object(o.jsx)("br",{})," ",Object(o.jsx)("br",{})," The organization runs programs in dozens of countries to help children get access to food, shelter, and education. In all of the work they do, cost effectiveness is highly important to the organization, as they want donors\u2019 money to go to the ones who need it the most--the children. ",Object(o.jsx)("br",{})," ",Object(o.jsx)("br",{})," Their financial report indicates that 87% of their money went directly to programs that support people in need. (The remaining 13% covers administrative costs.) ",Object(o.jsx)("br",{})," ",Object(o.jsx)("br",{}),"Please take this into consideration and read your task for this study on the next page. Afterwards, you will be prompted to use a slider and the context surrounding it to make an informed decision. ",Object(o.jsx)("br",{})," ",Object(o.jsx)("br",{}),"Whenever you are ready, you may click next to proceed."]}),Object(o.jsx)(u,{nextState:t})]})})};function x(e){var t=e.nextState;return Object(o.jsx)("div",{className:"mb-16",children:Object(o.jsx)("div",{className:"flex justify-around",children:Object(o.jsx)("button",{onClick:t,className:"w-full px-8 py-4 font-bold tracking-wider uppercase bg-indigo-100 rounded-lg shadow-lg hover:bg-indigo-200 ",children:"Next"})})})}var b=function(e){var t=e.nextState;return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"container px-8 pt-4 mx-auto",children:[Object(o.jsx)("h2",{className:"text-2xl font-bold text-center text-gray-800",children:"Instructions"}),Object(o.jsxs)("div",{className:"flex flex-col mt-16 mb-12 space-y-2 text-gray-800 text-md",children:[Object(o.jsx)("p",{children:"Mercy Corps is an organization which runs multiple aid programs to benefit the impoverished population of different areas in the world. Your task is to help the organization decide how to distribute money between two of their programs."}),Object(o.jsx)("h3",{className:"pt-4 text-lg font-bold",children:"About Mercy Corps"}),Object(o.jsx)("p",{children:"For three decades, the Mercy Corps charitable organization has helped support children in need around the globe. The organization runs programs in dozens of countries to help children get access to food, shelter, and educational materials. In all of the work they do, cost effectiveness is highly important to the organization, as they want donors\u2019 money to go to the ones who need it the most--the children."}),Object(o.jsx)("h3",{className:"pt-4 text-lg font-bold",children:"About the Programs"}),Object(o.jsx)("p",{children:"Today you will help Mercy Corps\u2019 distribute donators\u2019 money between the two following programs."}),Object(o.jsxs)("p",{className:"p-2 mx-6 bg-gray-100 rounded-lg",children:[Object(o.jsx)("i",{children:"Program Alpha"})," is a new program to help prevent the death of children who are unable to live out their lives due to unstable conditions. A report says that donating to this program will mean that the money will go toward food, clothes, and education to help 3 children who would greatly benefit from the aid."]}),Object(o.jsxs)("p",{className:"p-2 mx-6 bg-gray-100 rounded-lg",children:[Object(o.jsx)("i",{children:"Program Zefa"})," is another newly lauched program to help prevent the death of children who are unable to live out their lives due to unstable conditions in a different community from Program Alpha. Another report projects that donating to this program will mean that the money will go toward food, clothes, and education to help 120 children, who will greatly benefit from the aid."]}),Object(o.jsx)("h3",{className:"pt-4 text-lg font-bold",children:"Your Task"}),Object(o.jsx)("p",{children:"Please use the scale on the next page to select how you would allocate a given set of resources."}),Object(o.jsx)("h3",{className:"pt-4 text-lg font-bold",children:"Please note that:"}),Object(o.jsxs)("ul",{className:"px-12 list-disc",children:[Object(o.jsx)("li",{children:"All the money you donate to a program will be split evenly between the children in the program"}),Object(o.jsx)("li",{children:"Children from both programs are in a very similar situation and need money equally. They will not benefit from any other donation than yours."})]}),Object(o.jsx)("p",{className:"font-bold",children:"Whenever you are ready, you may click next to proceed."})]}),Object(o.jsx)(x,{nextState:t})]})})},h=n(13);var p=function(e){var t=e.nextState,n=e.setResults,c=Object(a.useState)(""),i=Object(s.a)(c,2),l=i[0],d=i[1],u=Object(a.useState)(""),j=Object(s.a)(u,2),x=j[0],b=j[1],p={question:"How confident are you that the amount you have allocated to the two programs is a suitable amount?",choices:["Not at all Confident","Slightly Confident","Somewhat Confident","Moderately Confident","Very Confident"]};return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"mt-6 text-2xl font-bold text-center text-gray-800",children:"Post-Study Questions"}),Object(o.jsxs)("div",{className:"w-3/4 mx-auto md:w-1/2 ",children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"mt-6",children:[Object(o.jsx)("label",{className:"flex mb-6 text-lg ",children:"1. Please briefly explain your choice."}),Object(o.jsx)("textarea",{placeholder:"Write your answer here...",className:"w-full px-4 py-2 text-sm bg-gray-100 rounded-lg hover:shadow-lg hover:bg-gray-200",rows:6,onChange:function(e){d(e.currentTarget.value)},value:l})]}),Object(o.jsx)("div",{className:"w-full h-1 mt-4 bg-blue-200 rounded-lg",children:" "})]}),Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"py-4 mt-4 text-gray-800 rounded-md text-md ",children:[Object(o.jsxs)("p",{className:"flex mb-6 text-lg ",children:[" ","2. ",p.question," "]}),Object(o.jsx)("div",{className:"flex flex-col justify-around space-y-2 text-sm rounded-lg",children:p.choices.map((function(e,t){return Object(o.jsx)("button",{onClick:function(){return b(e)},className:"bg-purple-100 hover:shadow-lg hover:bg-purple-200 rounded-lg  tracking-wider py-2 ".concat(x===e?"bg-purple-300 hover:bg-purple-300":""),children:e},t)}))})]})})]}),Object(o.jsx)("div",{onClick:function(){x?""!==l?(n((function(e){return Object(r.a)(Object(r.a)({},e),{},{q1:l,q2:x})})),t()):h.b.error("Please respond to question 1."):h.b.error("Please respond to question 2.")},className:"flex justify-around my-6",children:Object(o.jsx)("button",{className:"w-3/4 px-8 py-4 my-6 font-bold tracking-wider uppercase bg-indigo-100 rounded-lg shadow-lg hover:bg-indigo-200 ",children:"Next"})})]})},m=n(38);var f=function(e){var t=e.nextState,n=e.setResults,c=Object(a.useState)(""),i=Object(s.a)(c,2),l=i[0],d=i[1],u={question:"What was the purpose of the charity you read about?",choices:["Funding cancer research, advocacy and patient and family services","Helping address environmental damage","Helping children get access to shelter, food and education","Reducing the spread of malaria in Sub-Saharan Africa","Addressing modern day civil rights violations","Helping address potential risks from advanced artificial intelligence"]},j=Object(a.useState)(""),x=Object(s.a)(j,2),b=x[0];return x[1],Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"mt-6 text-2xl font-bold text-center text-gray-800",children:"Post-Study Questions"}),Object(o.jsx)("div",{className:"w-3/4 mx-auto md:w-1/2 ",children:Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"py-4 mt-4 text-gray-800 rounded-md text-md ",children:[Object(o.jsxs)("p",{className:"flex mb-6 text-lg",children:[" 3. ",u.question," "]}),Object(o.jsx)("div",{className:"flex flex-col justify-around space-y-2 text-sm rounded-lg",children:u.choices.map((function(e,t){return Object(o.jsx)("button",{onClick:function(){return d(e)},className:"bg-purple-100 hover:shadow-lg hover:bg-purple-200 rounded-lg  tracking-wider py-2 ".concat(l===e?"bg-purple-300 hover:bg-purple-300":""),children:e},t)}))})]})})}),Object(o.jsx)("div",{onClick:function(){l?(n((function(e){return Object(r.a)(Object(r.a)({},e),{},{q3:l,q4:b})})),t()):h.b.error("Please respond to question 3.")},className:"flex justify-around my-6",children:Object(o.jsx)("button",{className:"w-3/4 px-8 py-4 my-6 font-bold tracking-wider uppercase bg-indigo-100 rounded-lg shadow-lg hover:bg-indigo-200 ",children:"Finish Study"})})]})};var g=function(){return Object(o.jsx)("div",{className:"min-h-screen bg-gray-100 min-w-screen",children:Object(o.jsx)("div",{className:"px-4 mx-auto text-2xl tracking-wide text-center align-middle ",children:Object(o.jsx)("h1",{className:"pt-32",children:"Please adjust to a wider screen in order to participate in this study. "})})})};n(43);function O(e){var t=e.program,n=e.population,r=e.donation,s=e.textCond;return Object(o.jsxs)("h5",{className:"w-full pb-2 text-center text-white bg-gray-800 rounded-lg ",children:[" ",Object(o.jsx)("span",{className:"text-xl underline",children:t})," ",Object(o.jsx)("br",{})," ",Object(o.jsx)("div",{className:"flex justify-center text-md",children:Object(o.jsxs)("div",{className:"mt-2 space-y-2",children:["per-person"===s&&Object(o.jsxs)("span",{className:"text-lg font-bold text-indigo-300",children:[" ",Object(o.jsxs)("span",{className:"inline-block w-24 my-1 bg-gray-700 rounded-lg",children:["$",Math.round(r/n*10)/10]})," per person"]}),"per-cause"===s&&Object(o.jsxs)(o.Fragment,{children:["Number of Beneficiaries: ",Object(o.jsxs)("span",{className:"px-2 py-1 mb-2 font-bold bg-gray-700 rounded-lg",children:[" ",n," people"]}),Object(o.jsx)("br",{})," Current Donation: ",Object(o.jsxs)("span",{className:"inline-block w-20 py-1 font-bold bg-gray-700 rounded-lg",children:["$",r]})," "]})]})})]})}var v=n(54);function y(e){var t=e.slider,n=e.setSlider,s=e.programLabel,c=e.programStimuli,i=e.programAllocation,l=e.textCond,d=i,u=c.B,j=c.A;Object(a.useEffect)((function(){n(Math.floor(d/2))}),[d,n]);var x=function(e,t){var n=e>10?{}:{height:200,width:100,marginTop:-50},s=e>10?100:400,c=e>10?100:200,a="#eeb501",i=15,l=Math.floor(s/30),d=Math.floor(t/e),u=t/e-d,j=function(e){return s-e%l*30-i},x=function(e){return c-i-2*Math.floor(e/l)*i};return u<=25?"inset(40% 0% 0% 40%)":u<=50?"inset(40% 0% 0% 0%)":u<=75?"polygon(50.00% 3.00%,51% 45%,100% 44%,100% 100%,0% 100%,0% 3%)":u<=33?"polygon(55% 50%,100% 100%,0% 100%,0% 50%)":u<=66&&"polygon(100% 0%,40% 49%,100% 100%,0% 100%,0% 0%)",Array.from(Array(e).keys()).map((function(e,t){return Object(o.jsxs)(o.Fragment,{children:[t%20===0?Object(o.jsx)("br",{}):null,Object(o.jsx)("div",{className:"inline-block ",children:Object(o.jsxs)("div",{className:"flex flex-col",children:[Object(o.jsx)("div",{className:"mt-1",children:Object(o.jsx)(w,{})}),Object(o.jsx)("div",{style:Object(r.a)({transform:"rotate(270deg)"},n),className:"flex flex-wrap ",children:Object(o.jsx)("svg",{viewBox:"0 0 ".concat(s," ").concat(c),xmlns:"http://www.w3.org/2000/svg",children:Array.from(Array(d+1).keys()).map((function(e){return e<d?Object(o.jsx)("circle",{cx:j(e),cy:x(e),r:i,fill:a}):Object(o.jsx)("path",{transform:"translate(".concat(j(e),",").concat(x(e),")"),fill:a,d:null===(t=v.a()({innerRadius:0,outerRadius:i,startAngle:0,endAngle:2*Math.PI*u}))||void 0===t?void 0:t.toString()});var t}))})})]})})]})}))},b={transform:"rotate(180deg)"};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"flex justify-center space-x-4",children:[Object(o.jsxs)("div",{className:"",style:{width:500},children:[Object(o.jsx)(O,{program:s.A,population:j,donation:100*(d-t),textCond:l}),Object(o.jsx)("div",{style:b,className:"w-full bg-black rounded-lg h-96",children:Object(o.jsx)("div",{children:x(j,d-t)})})]}),Object(o.jsxs)("div",{className:"",style:{width:500},children:[Object(o.jsx)(O,{program:s.B,population:u,donation:100*t,textCond:l}),Object(o.jsx)("div",{style:b,className:"w-full bg-black rounded-lg h-96",children:Object(o.jsx)("div",{children:x(u,t)})})]})]}),Object(o.jsx)("div",{className:"w-full mr-32",children:Object(o.jsx)("input",{id:"slider",className:"w-1/2 rounded-md cursor-pointer ",type:"range",min:"0",max:d,value:t,onChange:function(e){n(parseInt(e.currentTarget.value))}})})]})}function w(){return Object(o.jsx)("svg",{style:{transform:"rotate(180deg)"},viewBox:"0 0 ".concat(100," ",100),xmlns:"http://www.w3.org/2000/svg",className:"inline-block h-6 ",children:Object(o.jsxs)("g",{fill:"white",children:[Object(o.jsx)("circle",{cx:45,cy:27,r:9}),Object(o.jsx)("ellipse",{clipPath:"polygon(50% 33%, 65% 0, 100% 0, 100% 99%, 0 100%, 0 0, 35% 0)",cx:45,cy:50,rx:17,ry:13}),Object(o.jsx)("rect",{width:23,height:35,x:33.5,y:60,clipPath:"polygon(0 0, 100% 0, 75% 100%, 25% 100%)"})]})})}var N=n(53);function k(){return Object(o.jsx)("svg",{fill:"white",viewBox:"0 0 ".concat(100," ",100),xmlns:"http://www.w3.org/2000/svg",className:"inline-block h-6 ",children:Object(o.jsxs)("g",{children:[Object(o.jsx)("circle",{cx:45,cy:27,r:9,className:"bg-blue-200"}),Object(o.jsx)("ellipse",{clipPath:"polygon(50% 33%, 65% 0, 100% 0, 100% 99%, 0 100%, 0 0, 35% 0)",cx:45,cy:50,rx:17,ry:13,className:"bg-blue-200"}),Object(o.jsx)("rect",{width:23,height:35,x:33.5,y:60,clipPath:"polygon(0 0, 100% 0, 75% 100%, 25% 100%)"})]})})}var S,C=function(e){var t=e.slider,n=e.setSlider,r=e.programLabel,s=e.programStimuli,c=e.programAllocation,i=e.textCond,l=Object(a.useRef)(null),d=Object(a.useRef)(null),u=c,j=s.B,x=s.A;Object(a.useEffect)((function(){n(Math.floor(u/2))}),[u,n]);var b=function(e){for(var t=[],n=0;n<e;n++)n%10===0&&t.push(Object(o.jsx)("br",{},Object(N.a)())),t.push(Object(o.jsx)(k,{},Object(N.a)()));return t},h=function(e){var t=Math.floor(25),n=e,r=function(e){return 100-e%t*4-2},s=function(e){return 98-2*Math.floor(e/t)*2},c="inset(0% 0% 0% 0%)";return c="inset(40% 0% 0% 40%)",Object(o.jsx)("div",{className:"flex flex-col justify-end w-full h-full px-4 pb-4",children:Object(o.jsx)("svg",{viewBox:"0 0 ".concat(100," ").concat(100),xmlns:"http://www.w3.org/2000/svg",children:Array.from(Array(n+1).keys()).map((function(e){return e<n?Object(o.jsx)("circle",{cx:r(e),cy:s(e),r:2,fill:"#eeb501"}):Object(o.jsx)("circle",{cx:r(e),cy:s(e),r:2,fill:"rgb(234 179 8)",className:"bg-blue-200 ".concat("hidden"),clipPath:c})}))})})};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"flex flex-col justify-center space-y-4 md:space-x-4 md:flex-row md:space-y-0",children:[Object(o.jsxs)("div",{className:"",style:{width:500},children:[Object(o.jsx)(O,{program:r.A,population:x,donation:100*(u-t),textCond:i}),Object(o.jsxs)("div",{className:"flex w-full bg-black rounded-lg h-96",children:[Object(o.jsx)("div",{ref:l,className:"w-1/2 h-full pt-6",children:h(u-t)}),Object(o.jsx)("div",{className:"flex flex-col justify-end w-1/2 pb-4",children:Object(o.jsx)("div",{className:"",children:b(x)})})]})]}),Object(o.jsxs)("div",{className:"",style:{width:500},children:[Object(o.jsx)(O,{program:r.B,population:j,donation:100*t,textCond:i}),Object(o.jsxs)("div",{className:"flex w-full bg-black rounded-lg h-96",children:[Object(o.jsx)("div",{ref:d,className:"w-1/2 h-full pt-6 ",children:h(t)}),Object(o.jsx)("div",{className:"flex flex-col justify-end w-1/2 h-full pb-4",children:Object(o.jsx)("div",{children:b(j)})})]})]})]}),Object(o.jsx)("div",{className:"w-full mr-32",children:Object(o.jsx)("div",{className:"w-full",children:Object(o.jsx)("input",{id:"slider",className:"w-1/2 rounded-md cursor-pointer ",type:"range",min:"0",max:u,value:t,onChange:function(e){n(parseInt(e.currentTarget.value))}})})})]})};function A(e){var t=e.slider,n=e.setSlider,r=e.textCond,s=e.programLabel,c=e.programAllocation,i=e.programStimuli,l=c,d=i.B,u=i.A;return Object(a.useEffect)((function(){n(Math.floor(l/2))}),[l,n]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"flex justify-center mb-8 space-x-4",children:[" ",Object(o.jsx)("div",{className:"h-16 mb-6 w-96",children:Object(o.jsx)(O,{program:s.A,population:u,donation:100*(l-t),textCond:r})}),Object(o.jsx)("div",{className:"h-30 w-96",children:Object(o.jsx)(O,{program:s.B,population:d,donation:100*t,textCond:r})})]}),Object(o.jsx)("div",{className:"w-full ",children:Object(o.jsx)("div",{className:"w-full",children:Object(o.jsx)("input",{id:"slider",className:"w-1/2 rounded-md cursor-pointer ",type:"range",min:"0",max:l,value:t,onChange:function(e){n(parseInt(e.currentTarget.value))}})})})]})}function P(e){var t=e.nextState,n=e.condition,r=e.slider,s=e.setSlider,i={A:"Program Alpha",B:"Program Zefa"},l={A:3,B:120};return Object(c.a)("Resource Allocation Design Study: Experiment 3"),Object(a.useEffect)((function(){return function(){window.scrollTo(0,0)}}),[]),Object(o.jsx)("div",{className:"min-h-screen bg-gray-600",children:Object(o.jsxs)("div",{className:"container py-6 mx-auto space-y-6 text-center ",children:[Object(o.jsx)("h2",{className:"text-4xl font-bold text-center text-gray-100",children:"Your Decision"}),Object(o.jsxs)("p",{className:"py-4 text-white bg-gray-800 rounded-lg",children:["You have a total of $24 600 (US Dollars) to allocate between the two programs, ",Object(o.jsx)("br",{})," please use the scale to select how you would allocate these resources."]}),Object(o.jsx)("div",{className:"w-full h-1 my-4 bg-indigo-300 rounded-full "}),"none"!==n.vis&&Object(o.jsx)(I,{}),"none"===n.vis&&Object(o.jsx)(A,{programLabel:i,programStimuli:l,programAllocation:246,textCond:n.text,slider:r,setSlider:s}),"per-cause"===n.vis&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(C,{programLabel:i,programStimuli:l,programAllocation:246,textCond:n.text,slider:r,setSlider:s}),Object(o.jsx)("div",{className:"w-full h-1 my-4 bg-indigo-300 rounded-full "})]}),"per-person"===n.vis&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(y,{programLabel:i,programStimuli:l,programAllocation:246,textCond:n.text,slider:r,setSlider:s}),Object(o.jsx)("div",{className:"w-full h-1 my-4 bg-indigo-300 rounded-full "})]}),Object(o.jsx)("div",{className:"flex justify-around my-6",children:Object(o.jsx)("button",{onClick:function(){return t()},className:"w-3/4 px-8 py-4 my-6 font-bold tracking-wider uppercase bg-indigo-300 rounded-lg shadow-lg hover:bg-indigo-200 ",children:"Submit Choice"})})]})})}function I(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"flex flex-col justify-between p-6 text-white bg-gray-800 rounded-lg",children:[Object(o.jsx)("h3",{className:"mb-4 text-xl text-center underline",children:"Legend"}),Object(o.jsxs)("div",{className:"mx-auto space-y-4 text-md",children:[Object(o.jsxs)("div",{className:"flex font-bold text-center",children:[Object(o.jsx)("svg",{className:"w-8 h-full",viewBox:"0 0 ".concat(100," ",100),xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("circle",{cx:40,cy:60,r:20,fill:"rgb(234 179 8)"})}),Object(o.jsx)("p",{className:"pt-2 ",children:"= $100 (US Dollars)"})]}),Object(o.jsxs)("div",{className:"flex font-bold text-center ",children:[Object(o.jsx)("div",{style:{transform:"rotate(180deg)"},children:Object(o.jsx)(w,{})}),Object(o.jsx)("p",{className:"pt-2 ml-2",children:"= 1 Person"})]})]})]})," ",Object(o.jsx)("div",{className:"w-full h-1 my-4 bg-indigo-300 rounded-full "})," "]})}!function(e){e[e.Start=0]="Start",e[e.AskConsent=1]="AskConsent",e[e.NoConsent=2]="NoConsent",e[e.Instructions=3]="Instructions",e[e.Task=4]="Task",e[e.Selection=5]="Selection",e[e.Questions=6]="Questions",e[e.AttentionCheck=7]="AttentionCheck",e[e.Complete=8]="Complete",e[e.BadWidth=9]="BadWidth"}(S||(S={}));t.default=function(){Object(c.a)("Resource Allocation Design Study: Experiment 3");var e=Object(a.useState)(S.Task),t=Object(s.a)(e,2),n=t[0],u=t[1],x=Object(a.useState)({programBAlloc:-1,q1:"",q2:"",q3:""}),h=Object(s.a)(x,2),O=h[0],v=h[1],y=Object(a.useState)(),w=Object(s.a)(y,2),N=w[0],k=w[1],C=Object(a.useState)(!0),A=Object(s.a)(C,2),I=A[0],T=A[1],E=Object(a.useState)(0),F=Object(s.a)(E,2),M=F[0],B=F[1],q=Object(a.useState)(0),R=Object(s.a)(q,2),L=R[0],D=R[1];return Object(a.useEffect)((function(){window.addEventListener("resize",(function(){window.innerWidth<1032?T(!1):T(!0)}))}),[]),Object(a.useEffect)((function(){v((function(e){return Object(r.a)(Object(r.a)({},e),{},{programBAlloc:100*M})}))}),[M]),Object(a.useEffect)((function(){window.scrollTo(0,0)}),[n]),Object(a.useEffect)((function(){switch(new URLSearchParams(window.location.search).get("cond")){case"cn":k({text:"per-cause",vis:"none"});break;case"pn":k({text:"per-person",vis:"none"});break;case"nc":k({text:"none",vis:"per-cause"});break;case"cc":k({text:"per-cause",vis:"per-cause"});break;case"pc":k({text:"per-person",vis:"per-cause"});break;case"np":k({text:"none",vis:"per-person"});break;case"cp":k({text:"per-cause",vis:"per-person"});break;case"pp":k({text:"per-person",vis:"per-person"});break;default:var e=[{text:"per-cause",vis:"none"},{text:"per-person",vis:"none"},{text:"none",vis:"per-cause"},{text:"per-cause",vis:"per-cause"},{text:"per-person",vis:"per-cause"},{text:"none",vis:"per-person"},{text:"per-cause",vis:"per-person"},{text:"per-person",vis:"per-person"}];k(e[Math.floor(Math.random()*e.length)])}}),[]),Object(a.useEffect)((function(){if(N&&O&&O.q1&&O.q2&&O.q3&&-1!==O.programBAlloc){var e=new URLSearchParams(window.location.search),t=e.get("PROLIFIC_PID")||"",n=e.get("SESSION_ID")||"",r=e.get("STUDY_ID")||"";m.a.create({prolificInfo:{pid:t,sessionId:n,studyId:r},results:O,condition:N})}}),[O,N]),Object(o.jsx)("div",{children:I?function(e){var t=null;switch(e){case S.Start:t=Object(o.jsx)(i.default,{nextState:function(){return u(S.AskConsent)}});break;case S.AskConsent:t=Object(o.jsx)(l,{consentFunc:function(){return u(S.Task)},noConsentFunc:function(){return u(S.NoConsent)}});break;case S.NoConsent:t=Object(o.jsx)(d,{});break;case S.Instructions:t=Object(o.jsx)(j,{nextState:function(){return u(S.Task)}});break;case S.Task:t=Object(o.jsx)(b,{nextState:function(){u(S.Selection),D((new Date).getTime())}});break;case S.Selection:t=void 0===N?Object(o.jsx)(o.Fragment,{}):Object(o.jsx)(P,{condition:N,nextState:function(){u(S.Questions),v((function(e){return Object(r.a)(Object(r.a)({},e),{},{timer:(new Date).getTime()-L})}))},slider:M,setSlider:B});break;case S.Questions:t=Object(o.jsx)(p,{setResults:v,nextState:function(){return u(S.AttentionCheck)}});break;case S.AttentionCheck:t=Object(o.jsx)(f,{setResults:v,nextState:function(){return u(S.Complete)}});break;case S.Complete:t=Object(o.jsx)(d,{});break;default:t=Object(o.jsx)(d,{})}return t}(n):Object(o.jsx)(g,{})})}}}]);
//# sourceMappingURL=6.443d8404.chunk.js.map