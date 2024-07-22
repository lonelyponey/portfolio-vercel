(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4251:function(e,t,s){Promise.resolve().then(s.bind(s,4148))},4148:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return v}});var n=s(7437),r=s(2265),i=s(703),a=s(7907),l=s(2498),o=s(3107),c=s(9908),d=s(1648),m=s(2869);function u(e,t){[...t].reverse().forEach(s=>{let n=e.getVariant(s);n&&(0,d.C)(e,n),e.variantChildren&&e.variantChildren.forEach(e=>{u(e,t)})})}function g(){let e=!1,t=new Set,s={subscribe:e=>(t.add(e),()=>void t.delete(e)),start(s,n){(0,c.k)(e,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");let r=[];return t.forEach(e=>{r.push((0,m.d)(e,s,{transitionOverride:n}))}),Promise.all(r)},set:s=>((0,c.k)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),t.forEach(e=>{Array.isArray(s)?u(e,s):"string"==typeof s?u(e,[s]):(0,d.C)(e,s)})),stop(){t.forEach(e=>{!function(e){e.values.forEach(e=>e.stop())}(e)})},mount:()=>(e=!0,()=>{e=!1,s.stop()})};return s}var h=s(2435),p=s(5526);let f=function(){let e=(0,h.h)(g);return(0,p.L)(e.mount,[]),e};var x=s(1615);function v(){let e=(0,a.useRouter)(),t=f(),s=f(),c=f(),d=f(),m=f(),u=f(),g=f(),h=f(),[p,v]=(0,r.useState)(!1),[j,b]=(0,r.useState)(0),[w,y]=(0,r.useState)(0),[N,k]=(0,r.useState)(""),[E,S]=(0,r.useState)(""),[C,L]=(0,r.useState)(""),[P,M]=(0,r.useState)(""),[I,A]=(0,r.useState)(null),[D,R]=(0,r.useState)([]),[B,J]=r.useState(l.RJ[0]),[z,W]=r.useState(!0),[q,F]=(0,r.useState)({firstNameError:"",lastNameError:"",emailError:"",messageError:""}),H=l.RJ.map(e=>(0,n.jsx)("button",{onClick:()=>J(e),className:"".concat(B.name===e.name?"bg-primary-500 text-neutral-100":"text-primary-500 bg-neutral-800"," mb-4 rounded-lg px-4 py-2"),children:e.name},e.name));r.useEffect(()=>{W(!1);let e=setTimeout(()=>W(!0),0);return()=>clearTimeout(e)},[B]),(0,r.useRef)(null);let T=(0,r.useRef)(),O=(0,r.useRef)(),V=(0,r.useRef)(),Z=(0,r.useRef)(),G=(0,r.useRef)(),_=(0,r.useRef)(),Q=(0,r.useRef)(),U=(0,r.useRef)(),Y=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e).toLowerCase()),$=e=>{let t={firstNameError:"",lastNameError:"",emailError:"",messageError:""};0==e.firstName.length&&(t={...t,firstNameError:"First name must be required!"}),0==e.lastName.length&&(t={...t,lastNameError:"Last name must be required!"}),e.message.length<5&&(t={...t,messageError:"Message lenght must be bigger than 5"}),Y(e.email)||(t={...t,emailError:"Email is incorrect!"}),F({...t})},K=()=>0==q.firstNameError.length&&0==q.lastNameError.length&&0==q.messageError.length&&0==q.emailError.length,X=e=>{let t={email:N,firstName:E,lastName:C,message:P};$(t);let s=K();e.preventDefault(),s&&o.Z.post("http://localhost:3001/mail",t).then(e=>{console.log(e)})};return(0,r.useEffect)(()=>{let e=[{ref:T,controls:t},{ref:O,controls:s},{ref:V,controls:c},{ref:Z,controls:d}],n=0,r=new IntersectionObserver(t=>{let[s]=t;if(s.isIntersecting&&(e[n].controls.start("visible"),r.unobserve(s.target),(n+=1)<e.length)){let t=e[n].ref.current;t&&r.observe(t)}},{threshold:.5}),i=e[n].ref.current;return i&&r.observe(i),()=>{if(n<e.length){let t=e[n].ref.current;t&&r.unobserve(t)}}},[t,s,c,d]),(0,r.useEffect)(()=>{let e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&m.start("visible")},{threshold:.5});return G.current&&e.observe(G.current),()=>{G.current&&e.unobserve(G.current)}},[m]),(0,r.useEffect)(()=>{let e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&u.start("visible")},{threshold:.5});return _.current&&e.observe(_.current),()=>{_.current&&e.unobserve(_.current)}},[u]),(0,r.useEffect)(()=>{let e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&g.start("visible")},{threshold:.5});return Q.current&&e.observe(Q.current),()=>{Q.current&&e.unobserve(Q.current)}},[g]),(0,r.useEffect)(()=>{let e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&h.start("visible")},{threshold:.5});return U.current&&e.observe(U.current),()=>{U.current&&e.unobserve(U.current)}},[h]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(x.E.main,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5},className:"mx-auto flex min-h-screen flex-col items-center justify-center p-8 lg:p-32",children:[(0,n.jsxs)("div",{className:"flex w-full flex-col items-center justify-center",children:[(0,n.jsxs)("div",{className:"mb-4 rounded-lg bg-neutral-800 p-2 font-medium shadow-lg 2xl:text-lg",children:[(0,n.jsx)("div",{className:"hi",children:"\uD83D\uDC4B"})," Hi There, I'm Daniel Suzuki"]}),(0,n.jsxs)("h1",{className:"text-center text-3xl font-bold lg:text-4xl 2xl:text-5xl",children:["I Build"," ",(0,n.jsx)("span",{className:"from-primary-400 to-primary-500 bg-gradient-to-r bg-clip-text text-transparent",children:"Websites"}),","," ",(0,n.jsx)("span",{className:"from-primary-400 to-primary-500 bg-gradient-to-r bg-clip-text text-transparent",children:"APIs"}),","," ",(0,n.jsx)("span",{className:"from-primary-400 to-primary-500 bg-gradient-to-r bg-clip-text text-transparent",children:"NPM Packages"})," ","and"," ",(0,n.jsx)("span",{className:"from-primary-400 to-primary-500 bg-gradient-to-r bg-clip-text text-transparent",children:"More"})," ",(0,n.jsx)("span",{className:"rocket text-3xl",children:"\uD83D\uDE80"})]}),(0,n.jsx)("p",{className:"text-md mt-2 text-center lg:mt-4 lg:text-xl 2xl:text-2xl",children:"As a full-stack developer, I possess the versatility to handle both front-end and back-end development, enabling me to build and maintain comprehensive web applications from server infrastructure to user interface."})]}),(0,n.jsx)("div",{className:"mt-4 flex w-full flex-row items-center justify-center gap-2",children:(0,n.jsx)("button",{className:"bg-primary-500 hover:bg-primary-600 flex items-center justify-center rounded-lg px-10 py-2 font-bold text-white shadow-lg transition-colors",onClick:()=>e.push("/projects"),children:"Projects"})})]}),(0,n.jsx)(x.E.div,{ref:T,initial:"hidden",animate:t,variants:{hidden:{width:0},visible:{width:"100%",transition:{duration:.8,delay:0}}},className:"mx-auto px-8 lg:px-32",children:(0,n.jsx)("div",{className:"mb-4 mt-4 w-full border-t border-neutral-700"})}),(0,n.jsxs)(x.E.section,{ref:G,initial:"hidden",animate:m,variants:{hidden:{opacity:0,y:10},visible:{opacity:1,y:0,transition:{duration:.5,delay:0}}},id:"about",className:"mx-auto flex min-h-screen w-full flex-col items-center justify-center p-8 lg:flex-row lg:items-start lg:p-32",children:[(0,n.jsxs)("div",{className:"flex w-full flex-col items-start justify-center lg:w-2/3 ",children:[(0,n.jsxs)("div",{className:"mt-12 flex flex-row items-center justify-start gap-2",children:[(0,n.jsx)("div",{className:"bg-primary-500 rounded-lg p-2",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"h-6 w-6",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"})})}),(0,n.jsxs)("h2",{className:"text-center text-4xl font-bold",children:["About Me",(0,n.jsx)("span",{className:"text-primary-500",children:"."})]})]}),(0,n.jsx)("p",{className:"mt-2 text-left text-xl",children:"I am experienced and passionate Fullstack engineer with +5 years of experience. Designed and accomplished the development of a Manufacturing Execution System (MES) with my team members, demonstrating my versatility and expertise in diverse projects. And equipped with wide range of tech stack including frontend and backend frameworks. As well as web skills, very knowledgeable on cloud-based platforms (AWS, Azure), DB management systems, modern APIs and so on. Committed to staying updated with trending in the digital world and continuously enhancing skillset. Very flexible in work and communicative with teammates"})]}),(0,n.jsx)("div",{className:"mt-10 flex w-full flex-row items-center justify-center gap-2 lg:mt-10 lg:w-1/3 lg:justify-end",children:(0,n.jsx)(i.default,{src:"/img/Akiyama.png",width:256,height:256,alt:"DanielSuzuki",className:"border-primary-500 h-64 w-64 rounded-xl border-4 bg-neutral-800 shadow-lg transition-transform duration-150 ease-in-out hover:translate-y-[-4px] hover:transform",draggable:"false"})})]}),(0,n.jsx)(x.E.div,{ref:O,initial:"hidden",animate:s,variants:{hidden:{width:0},visible:{width:"100%",transition:{duration:.8,delay:0}}},className:"mx-auto px-8 lg:px-32",children:(0,n.jsx)("div",{className:"mb-4 mt-4 w-full border-t border-neutral-700"})}),(0,n.jsxs)(x.E.section,{ref:_,initial:"hidden",animate:u,variants:{hidden:{opacity:0,y:10},visible:{opacity:1,y:0,transition:{duration:.5,delay:0}}},id:"projects",className:"mx-auto flex min-h-screen w-full flex-col items-start justify-center bg-gradient-to-b from-transparent via-neutral-900/90 to-neutral-900 p-8 lg:p-32",children:[(0,n.jsxs)("div",{className:"flex w-full flex-col items-start justify-center",children:[(0,n.jsxs)("div",{className:"mb-8 flex w-full flex-col items-start justify-center",children:[(0,n.jsxs)("div",{className:"flex flex-row items-center justify-start gap-2",children:[(0,n.jsx)("div",{className:"bg-primary-500 rounded-lg p-2",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"h-6 w-6",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"})})}),(0,n.jsxs)("h2",{className:"text-4xl font-bold",children:["Projects",(0,n.jsx)("span",{className:"text-primary-500",children:"."})]})]}),(0,n.jsx)("p",{className:"mt-2 text-left text-xl",children:"Here are some of the projects I've done before."})]}),(0,n.jsx)("div",{className:"grid w-full grid-cols-1 items-start justify-center gap-4 lg:grid-cols-2",children:l.q.slice(0,2).map((e,t)=>(0,n.jsxs)("div",{className:"z-[-1] flex h-full w-full flex-col items-center justify-center gap-4 rounded-lg bg-neutral-800 p-4 shadow-lg",children:[(0,n.jsx)(i.default,{src:e.banner,alt:e.title,width:512,height:256,unoptimized:!0,className:"h-auto w-full rounded-lg bg-neutral-900 shadow-lg",draggable:"false"}),(0,n.jsx)("p",{className:"text-left text-xl",children:e.description}),(0,n.jsx)("div",{className:"mt-4 flex w-full flex-row items-center justify-start gap-2"})]},t))})]}),(0,n.jsx)("div",{className:"flex w-full flex-col items-center justify-end gap-2",children:(0,n.jsx)("button",{className:"bg-primary-500 hover:bg-primary-600 -mt-20 flex items-center justify-center rounded-lg px-6 py-2 font-bold text-white shadow-lg transition-colors",onClick:()=>e.push("/projects"),children:"View All Projects"})})]}),(0,n.jsx)(x.E.div,{ref:V,initial:"hidden",animate:c,variants:{hidden:{width:0},visible:{width:"100%",transition:{duration:.8,delay:0}}},className:"mx-auto px-8 lg:px-32",children:(0,n.jsx)("div",{className:"mb-4 mt-4 w-full border-t border-neutral-700"})}),(0,n.jsxs)(x.E.section,{ref:Q,initial:"hidden",animate:g,variants:{hidden:{opacity:0,y:10},visible:{opacity:1,y:0,transition:{duration:.5,delay:0}}},id:"projects",className:"mx-auto flex min-h-screen w-full flex-col items-start justify-center bg-gradient-to-b from-transparent via-neutral-900/90 to-neutral-900 p-8 lg:p-32",children:[(0,n.jsxs)("div",{className:"mt-[15rem] flex w-full flex-col items-start justify-center",children:[(0,n.jsxs)("div",{className:"flex flex-row items-center justify-start gap-2",children:[(0,n.jsx)("div",{className:"bg-primary-500 rounded-lg p-2",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"h-6 w-6",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"})})}),(0,n.jsxs)("h2",{className:"text-center text-4xl font-bold",children:["Technologies I Use",(0,n.jsx)("span",{className:"text-primary-500",children:"."})]})]}),(0,n.jsx)("p",{className:"mt-2 text-left text-xl",children:"I have experience with a wide range of technologies, from front-end frameworks like React and Vue to back-end frameworks like Express and Golang. I also have experience with cloud platforms like AWS and Google Cloud, and have worked with databases like MongoDB and PostgreSQL. I'm always looking to learn new technologies and expand my skillset."})]}),(0,n.jsx)("div",{className:"mt-8 w-full",children:(0,n.jsx)("div",{className:"flex flex-row items-center justify-start gap-2 overflow-x-auto",children:H})}),(0,n.jsxs)("div",{className:"mt-16 flex w-full flex-col items-start justify-center",children:[(0,n.jsx)("h3",{className:"text-center text-xl font-bold",children:B.name}),(0,n.jsx)(x.E.div,{className:"mt-2 grid  w-full grid-cols-2 items-center justify-start gap-2 md:grid-cols-3 lg:grid-cols-4",transition:{duration:.2,staggerChildren:.15},children:B.technologies.map((e,t)=>(0,n.jsxs)(x.E.div,{className:"flex w-full transform flex-row items-center justify-start gap-2 rounded-lg bg-neutral-800 p-2 text-center transition-transform duration-150 ease-in-out hover:translate-y-[-4px]",initial:z?{opacity:0,y:10}:{},animate:z?{opacity:1,y:0}:{},exit:z?{opacity:0,y:10}:{},transition:z?{duration:.2,delay:.1*t}:{},children:[(0,n.jsx)("div",{className:"rounded-md bg-neutral-700 p-2",children:(0,n.jsx)(i.default,{src:e.icon,alt:e.name,className:"h-6 w-6",width:24,height:24})}),e.name]},e.name))})]})]}),(0,n.jsx)(x.E.div,{ref:Z,initial:"hidden",animate:c,variants:{hidden:{width:0},visible:{width:"100%",transition:{duration:.8,delay:0}}},className:"mx-auto px-8 lg:px-32",children:(0,n.jsx)("div",{className:"mb-4 mt-4 w-full border-t border-neutral-700"})}),(0,n.jsxs)(x.E.section,{ref:U,initial:"hidden",animate:h,variants:{hidden:{opacity:0,y:10},visible:{opacity:1,y:0,transition:{duration:.5,delay:0}}},id:"contact",className:"mx-auto flex min-h-screen w-full flex-col items-start justify-center p-8 lg:p-32",children:[(0,n.jsxs)("div",{className:"mb-10 flex w-full flex-col items-start justify-center",children:[(0,n.jsxs)("div",{className:"flex flex-row items-center justify-start gap-2",children:[(0,n.jsx)("div",{className:"bg-primary-500 rounded-lg p-2",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"h-6 w-6",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})})}),(0,n.jsxs)("h2",{className:"text-4xl font-bold",children:["Contact Me",(0,n.jsx)("span",{className:"text-primary-500",children:"."})]})]}),(0,n.jsx)("p",{className:"mt-2 text-left text-xl",children:"Want to work together or just say hi? Feel free to reach out to me."})]}),(0,n.jsxs)("div",{className:"flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:items-start lg:justify-start",children:[(0,n.jsx)("div",{className:"flex w-full flex-col items-start justify-start gap-4 lg:w-1/2",children:(0,n.jsxs)("button",{className:"flex w-full items-center justify-start gap-2 rounded-lg bg-neutral-800 px-6 py-4 font-bold text-white shadow-lg transition-colors hover:bg-neutral-700",onClick:()=>e.push("mailto:me@binaryblazer.me"),children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-message-square",children:(0,n.jsx)("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),"Email Me"]})}),(0,n.jsxs)("form",{className:"flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-neutral-800 p-4 shadow-lg lg:w-1/2",children:[I&&(0,n.jsxs)("p",{className:"w-full items-center justify-center rounded-lg bg-red-500/10 p-2 text-center text-red-500",children:[I,D.length>0&&(0,n.jsx)("ul",{className:"mt-4 grid grid-cols-1 gap-2 rounded-lg bg-red-500/20 p-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:D.map((e,t)=>(0,n.jsx)("li",{className:"text-red-400",children:e},t))})]}),(0,n.jsxs)("div",{className:"grid  w-full gap-4 md:grid-cols-2",children:[(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("input",{type:"text",placeholder:"First Name",className:"w-full rounded-lg bg-neutral-700 p-3",value:E,onChange:e=>S(e.target.value)}),0!==q.firstNameError.length&&(0,n.jsx)("p",{className:"error pt-3 ",children:q.firstNameError})]}),(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("input",{type:"text",placeholder:"Last Name",className:"w-full rounded-lg bg-neutral-700 p-3",value:C,onChange:e=>L(e.target.value)}),0!==q.lastNameError.length&&(0,n.jsx)("p",{className:"error pt-3 ",children:q.lastNameError})]})]}),(0,n.jsx)("input",{type:"email",placeholder:"Email",className:"w-full rounded-lg bg-neutral-700 p-3",value:N,onChange:e=>k(e.target.value)}),0!==q.emailError.length&&(0,n.jsx)("p",{className:"error",children:q.emailError}),(0,n.jsx)("textarea",{placeholder:"Message",className:"max-h-[20rem] min-h-[10rem] w-full rounded-lg bg-neutral-700 p-3 ".concat(D&&"border-red-500"),value:P,onChange:e=>M(e.target.value)}),0!==q.messageError.length&&(0,n.jsx)("p",{className:"error",children:q.messageError}),(0,n.jsx)("button",{type:"submit",className:"bg-primary-500 hover:bg-primary-600 flex items-center justify-center rounded-lg px-6 py-2 font-bold text-white transition-colors",onClick:e=>X(e),children:"Send Message"})]})]})]})]})}},2498:function(e,t,s){"use strict";s.d(t,{O9:function(){return i},RJ:function(){return o},Rq:function(){return a},ev:function(){return r},q:function(){return l},vc:function(){return n}});let n={title:"DanielSuzuki",description:"This is a blog and portfolio website for a full-stack developer called DanielSuzuki.",author:"DanielSuzuki",keywords:"DanielSuzuki, blog, portfolio, full-stack, developer, germany",twitter:"@DanielSuzuki",favicon:"/img/favicon-rounded.jpg",image:"/img/og-image.png",underConstruction:!0,mobileAllowed:!1,github:{username:"binary-blazer"},npm:{username:"janjytapyt"}},r=[{name:"Home",href:"/"},{name:"About",href:"/about"},{name:"Projects",href:"/projects"}],i=[{name:"Blue",color:"#3B82F6"},{name:"Green",color:"#10B981"},{name:"Red",color:"#EF4444"},{name:"Yellow",color:"#F59E0B"},{name:"Purple",color:"#8B5CF6"},{name:"Pink",color:"#EC4899"}],a=[{name:"Inter",font:"Inter"},{name:"Roboto",font:"Roboto"},{name:"Poppins",font:"Poppins"},{name:"Lato",font:"Lato"},{name:"Nunito",font:"Nunito"},{name:"Raleway",font:"Raleway"}],l=[{title:"Web Concentrate",description:"Work building impactful marketing sites and complex eCommerce solutions for the clients.",link:"https://webconcentrate.com",status:{inProgress:!1,complete:!0,paused:!1,cancelled:!1},technologies:["NextJS","NodeJS","PostgreSQL","Golang"],banner:"/img/projects/webconcentrate/banner.png"},{title:"Akio",description:"Innovative software suite that analyses all types of interactions and assists the advisor in improving the Customer and Employee Experience, by relying on intelligent and collaborative technologies.",link:"https://akio.com",status:{inProgress:!1,complete:!0,paused:!1,cancelled:!1},technologies:["ReactJs","NodeJS","Python","MongoDB"],banner:"/img/projects/akio/banner.png"},{title:"SkyWolf",description:"Powerful intelligence, modern tracking, designed to monitor the future.",link:"https://skywolf.ai",status:{inProgress:!1,complete:!0,paused:!1,cancelled:!1},technologies:["NextJS","Golang","NodeJS","Python","Tensorflow","Pytorch"],banner:"/img/projects/skywolf/banner.png"},{title:"Hiopos",description:"Manufacture global solutions for companies and establishments in the hospitality and retail sectors.",link:"https://Hiopos.com",status:{inProgress:!1,complete:!0,paused:!1,cancelled:!1},technologies:["NextJS","Nest","MongoDB","TypeScript"],banner:"/img/projects/hiopos/banner.png"}],o=[{name:"Languages",technologies:[{name:"JavaScript",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},{name:"TypeScript",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},{name:"Python",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},{name:"Java",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"},{name:"C#",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"},{name:"C++",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"},{name:"C",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"},{name:"HTML",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},{name:"CSS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},{name:"SCSS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"},{name:"PHP",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"},{name:"Batch",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"}]},{name:"Frontend",technologies:[{name:"React",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},{name:"NextJS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"},{name:"Vue",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"},{name:"NuxtJS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg"},{name:"Angular",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"}]},{name:"Backend",technologies:[{name:"NodeJS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},{name:"Express",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"},{name:"GoLang",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"},{name:"Dijango",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original.svg"},{name:"FastAPI",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"}]},{name:"Databases",technologies:[{name:"MongoDB",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},{name:"MySQL",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},{name:"PostgreSQL",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"}]}]}},function(e){e.O(0,[615,703,531,971,69,744],function(){return e(e.s=4251)}),_N_E=e.O()}]);