(function(){var e={8070:function(e,t,a){"use strict";var s=a(9242),n=a(7065),i=a(3396);const o={class:"main-content"},l={class:"login-content"};function r(e,t,a,n,r,c){const d=(0,i.up)("Header"),u=(0,i.up)("router-view"),p=(0,i.up)("Login"),m=(0,i.up)("Signup"),v=(0,i.up)("XyzTransition"),h=(0,i.up)("Footer");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(d),(0,i._)("div",o,[(0,i.Wm)(u,null,{default:(0,i.w5)((({Component:e})=>[(0,i.Wm)(s.uT,{name:"slide-fade",mode:"out-in"},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.j4)((0,i.LL)(e)))])),_:2},1024)])),_:1})]),(0,i._)("div",l,[(0,i.Wm)(v,{appear:"",xyz:"fade up-50% ease-on"},{default:(0,i.w5)((()=>[1==e.login_on?((0,i.wg)(),(0,i.j4)(p,{key:0})):(0,i.kq)("",!0),1==e.login_on?((0,i.wg)(),(0,i.j4)(m,{key:1})):(0,i.kq)("",!0)])),_:1})]),(0,i.Wm)(h)],64)}var c=a(65);const d={class:"fixed-top"},u=(0,i.uE)('<svg xmlns="http://www.w3.org/2000/svg" class="d-none"><symbol id="bootstrap" viewBox="0 0 118 94"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"></path></symbol><symbol id="home" viewBox="0 0 16 16"><path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"></path></symbol><symbol id="speedometer2" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"></path><path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"></path></symbol><symbol id="table" viewBox="0 0 16 16"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"></path></symbol><symbol id="people-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"></path></symbol><symbol id="grid" viewBox="0 0 16 16"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"></path></symbol></svg>',1),p={class:"px-3 text-bg-dark"},m={class:"container"},v={class:"d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"},h=(0,i._)("img",{src:"/logow.png",lass:"bi me-2",width:"88",height:"80",role:"img","aria-label":"Bootstrap"},null,-1),g={class:"nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small"},b=(0,i._)("svg",{class:"bi d-block mx-auto mb-1",width:"24",height:"24"},[(0,i._)("use",{"xlink:href":"#home"})],-1),f=(0,i._)("svg",{class:"bi d-block mx-auto mb-1",width:"24",height:"24"},[(0,i._)("use",{"xlink:href":"#speedometer2"})],-1),w=(0,i._)("svg",{class:"bi d-block mx-auto mb-1",width:"24",height:"24"},[(0,i._)("use",{"xlink:href":"#table"})],-1),y=(0,i.uE)('<li><a href="#" class="nav-link text-white"><svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#grid"></use></svg> Products </a></li><li><a href="#" class="nav-link text-white"><svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#people-circle"></use></svg> Customers </a></li>',2);function x(e,t,a,s,n,o){const l=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",d,[u,(0,i._)("div",p,[(0,i._)("div",m,[(0,i._)("div",v,[(0,i.Wm)(l,{to:"/",class:"d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"},{default:(0,i.w5)((()=>[h])),_:1}),(0,i._)("ul",g,[(0,i._)("li",null,[(0,i.Wm)(l,{to:"/",class:"nav-link text-white"},{default:(0,i.w5)((()=>[b,(0,i.Uk)(" Home ")])),_:1})]),(0,i._)("li",null,[(0,i.Wm)(l,{to:"/voice",class:"nav-link text-white"},{default:(0,i.w5)((()=>[f,(0,i.Uk)(" Convert ")])),_:1})]),(0,i._)("li",null,[(0,i.Wm)(l,{to:"/community",class:"nav-link text-white"},{default:(0,i.w5)((()=>[w,(0,i.Uk)(" Community ")])),_:1})]),y])])])])])}var k={name:"Header",components:{}},_=a(89);const z=(0,_.Z)(k,[["render",x]]);var D=z;const j={class:"footer-custom py-4 bg-dark text-white"},A=(0,i.uE)('<ul class="nav justify-content-center border-bottom pb-3 mb-3"><li class="nav-item"><a href="#" class="nav-link px-2 text-white">Home</a></li><li class="nav-item"><a href="#" class="nav-link px-2 text-white">Features</a></li><li class="nav-item"><a href="#" class="nav-link px-2 text-white">Pricing</a></li><li class="nav-item"><a href="#" class="nav-link px-2 text-white">FAQs</a></li><li class="nav-item"><a href="#" class="nav-link px-2 text-white">About</a></li></ul><p class="text-center text-white">© 2023 Department of Multimedia Engineering, Andong University</p>',2),C=[A];function H(e,t,a,s,n,o){return(0,i.wg)(),(0,i.iD)("footer",j,C)}var S={name:"Footer",components:{}};const W=(0,_.Z)(S,[["render",H]]);var M=W;const Z={key:0,class:"square"},O=(0,i.uE)('<div class="login-page"><div class="form"><h3 style="color:black;margin-bottom:30px;">로그인</h3><form class="login-form"><input type="text" placeholder="Username"><input type="password" placeholder="Password"><button>login</button><p class="message fw-normal" style="margin-top:30px;">처음 방문하셨나요?　<a class="fw-bold" href="#">회원가입</a></p></form></div></div>',1),P=[O];function T(e,t,a,s,n,o){return(0,i.wg)(),(0,i.iD)("div",Z,P)}var q={name:"Login",components:{}};const V=(0,_.Z)(q,[["render",T]]);var E=V;const U={key:0,class:"square"},F=(0,i.uE)('<div class="signup-page"><div class="form"><h3 style="color:black;margin-bottom:30px;">회원가입</h3><form class="login-form"><input type="text" placeholder="Username"><input type="password" placeholder="Password"><input type="password" placeholder="Password 재확인"><input type="text" placeholder="Email@address"><button>create</button><p class="message fw-normal">이미 등록된 회원이신가요?　<a class="fw-bold" href="#">Sign In</a></p></form></div></div>',1),B=[F];function L(e,t,a,s,n,o){return(0,i.wg)(),(0,i.iD)("div",U,B)}var X={name:"Signup",components:{}};const I=(0,_.Z)(X,[["render",L]]);var N=I,Y={data(){return{}},components:{Header:D,Footer:M,Login:E,Signup:N},computed:{...(0,c.rn)(["login_on"])}};const R=(0,_.Z)(Y,[["render",r]]);var K=R,$=a(2483),Q=a.p+"img/homeview_back.1befd25a.png",G=a.p+"img/carousel1.04f49be5.jpg",J=a.p+"img/carousel2.a6e7e19e.jpg",ee=a.p+"img/carousel3.1dd130a1.jpg",te=a.p+"img/학생.aeb9c963.png",ae=a.p+"img/아티스트.115f068b.png",se=a.p+"img/발표.29d40d67.png",ne=a.p+"img/homeview_2.d6ff0439.png";const ie={class:"bg-dark v"},oe={class:"image-overlay-container"},le=(0,i._)("img",{src:Q,class:"img-fluid full-width",alt:"Responsive image"},null,-1),re=(0,i._)("div",{class:"image-dark-overlay"},null,-1),ce={class:"wave-overlay"},de={class:"text-overlay"},ue=(0,i.uE)('<div id="myCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2500"><div class="carousel-indicators"><button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button><button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button><button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button></div><div class="carousel-inner"><div class="carousel-item active"><img src="'+G+'" class="d-block w-100" alt="..."><div class="container"><div class="carousel-caption text-start"><h1 class="fw-bold">당신의 상상력을 펼쳐보세요!</h1><p>MyVoice에서는 당신의 맞춤형 콘텐츠 제공을 위해 최선을 다하겠습니다.</p><p><a class="btn btn-lg btn-primary my-custom-button" href="#">Let&#39;s MV!</a></p></div></div></div><div class="carousel-item"><img src="'+J+'" class="d-block w-100" alt="..."><div class="container"><div class="carousel-caption"><h1 class="fw-bold">색다른 경험을 시작해보세요!</h1><p>AI XXX 모델을 통한 Deep-Learning 기술을 활용하였습니다.</p><p><a class="btn btn-lg btn-primary my-custom-button" href="#">자세히 보기</a></p></div></div></div><div class="carousel-item"><img src="'+ee+'" class="d-block w-100" alt="..."><div class="container"><div class="carousel-caption text-end"><h1 class="fw-bold">어제 보다 더 나은 오늘을 위해.</h1><p>MyVoice는 새로운 디지털 시대의 탄생에 앞장서기 위해 꾸준히 도약하겠습니다</p><p><a class="btn btn-lg btn-primary my-custom-button" href="#">Contact</a></p></div></div></div></div><button class="carousel-control-prev z-3" type="button" data-bs-target="#myCarousel" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next z-3" type="button" data-bs-target="#myCarousel" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div><div class="container marketing mt-5"><div class="container px-5 pt-5" id="featured-3"><h2 class="pb-2 border-bottom fw-bold h1 text-white">이런 분들께 추천드려요!</h2><div class="row g-5 py-5 row-cols-1 row-cols-lg-3"><div class="feature col"><img style="width:90px;height:90px;" class="img-fluid rounded-circle" src="'+te+'"><h3 class="fs-2 fw-bold text-white pt-3">학생 및 강의 수강생</h3><p class="text-white">본인이 좋아하는 목소리로 강의나<br>교재를 듣고자 하는 사람들</p></div><div class="feature col"><img style="width:90px;height:90px;" src="'+ae+'"><h3 class="fs-2 fw-bold text-white pt-3">노래, 음악 애호가</h3><p class="text-white">자신의 목소리나 원하는 아티스트의 목소리로<br>노래나 오디오 콘텐츠를 재생성하고자 하는 크리에이터</p></div><div class="feature col"><img style="width:90px;height:90px;" src="'+se+'"><h3 class="fs-2 fw-bold text-white pt-3">예행 연습</h3><p class="text-white">본인의 목소리를 직접 활용 및 비교하여<br>발표나 녹음의 예행 연습을 준비하려는 사람들</p></div></div></div><hr class="featurette-divider"><div class="px-4 pt-5 mt-5 text-center border-bottom"><h1 class="display-4 fw-bold text-white"><p class="gradient-text">상상했던 것들이 현실로!</p></h1><div class="col-lg-6 mx-auto"><p class="lead mb-4 text-white">음성은 단순한 소리가 아니라, 감정과 생각의 반영입니다.<br>단 한 번의 클릭으로 나만의 독특한 음원을 창조하세요!<br>혁신적인 인공지능 기술이 만들어내는 놀라운 음성 변환의 세계로 초대합니다.<br>여러분의 이야기가 예술로 승화되는 순간을 함께하겠습니다!</p><div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5"><button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Sign up</button><button type="button" class="btn btn-outline-secondary btn-lg px-4">문의하기</button></div></div><div class="overflow-hidden" style="max-height:40vh;"><div class="container px-5"><img src="'+ne+'" class="img-fluid border rounded-3 shadow-lg mt-5" alt="Example image" width="700" height="500" loading="lazy"></div></div></div></div>',2);function pe(e,t,a,s,n,o){const l=(0,i.up)("wave"),r=(0,i.up)("Animation");return(0,i.wg)(),(0,i.iD)("div",ie,[(0,i._)("div",oe,[le,re,(0,i._)("div",ce,[(0,i.Wm)(l)]),(0,i._)("div",de,[(0,i.Wm)(r)])]),ue])}const me={key:0,class:"square"},ve={key:1,class:"square"},he={key:2,class:"square"},ge={key:3,class:"square"},be={key:4,class:"square"},fe=(0,i._)("p",{class:"gradient-text",style:{"font-size":"2.5em"}},"MyVoice",-1),we=[fe];function ye(e,t,a,s,n,o){const l=(0,i.up)("XyzTransition");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(l,{class:"item-group",xyz:"fade down-100% back-5",mode:"out-in"},{default:(0,i.w5)((()=>[0==n.message?((0,i.wg)(),(0,i.iD)("div",me," 내 목소리로 된 아이유 노래를 듣고 싶다면 ? ")):(0,i.kq)("",!0),1==n.message?((0,i.wg)(),(0,i.iD)("div",ve," 남사친 사운드로 라디오를 듣고 싶다면 ? ")):(0,i.kq)("",!0),3==n.message?((0,i.wg)(),(0,i.iD)("div",he," 최애 아이돌이 가르쳐주는 인강을 듣고 싶다면 ? ")):(0,i.kq)("",!0),4==n.message?((0,i.wg)(),(0,i.iD)("div",ge," 중요한 발표나 녹음을 연습하고 싶다면 ? ")):(0,i.kq)("",!0),2==n.message?((0,i.wg)(),(0,i.iD)("div",be,we)):(0,i.kq)("",!0)])),_:1})])}var xe={data(){return{message:0}},mounted(){this.interval=setInterval((()=>{this.message>=4?this.message=0:this.message+=1}),2e3)},beforeDestroy(){clearInterval(this.interval)}};const ke=(0,_.Z)(xe,[["render",ye]]);var _e=ke,ze=a(7139);const De={id:"bars",class:"bars"};function je(e,t,a,s,n,o){return(0,i.wg)(),(0,i.iD)("div",De,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.bars,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.id,class:"bar",style:(0,ze.j5)(o.barStyle(e.height))},null,4)))),128))])}a(560);var Ae={data(){return{numBars:35,bars:[]}},methods:{barStyle(e){return{width:"10px",height:`${e}px`,backgroundImage:"linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,1))",marginRight:"2px"}},randomizeBarHeights(){this.bars=this.bars.map((e=>({id:e.id,height:150*Math.random()})))}},mounted(){for(let e=0;e<this.numBars;e++)this.bars.push({id:e,height:150*Math.random()});setInterval(this.randomizeBarHeights,150)}};const Ce=(0,_.Z)(Ae,[["render",je]]);var He=Ce,Se=a(1957),We=a.n(Se),Me={name:"HomeView",components:{Animation:_e,wave:He},mounted(){var e=document.querySelector("#myCarousel");new(We())(e,{interval:2500,wrap:!0})}};const Ze=(0,_.Z)(Me,[["render",pe]]);var Oe=Ze;const Pe={class:"container pt-5"};function Te(e,t,a,s,n,o){const l=(0,i.up)("Dataset_select"),r=(0,i.up)("TabContent"),c=(0,i.up)("Voice_upload"),d=(0,i.up)("Result_download"),u=(0,i.up)("FormWizard");return(0,i.wg)(),(0,i.iD)("div",Pe,[(0,i.Wm)(u,{onOnComplete:o.onComplete,color:"#3a98cb"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{title:"STEP 1. 목소리 데이터셋 선택",icon:"fa fa-microphone"},{default:(0,i.w5)((()=>[1===e.convert_status?((0,i.wg)(),(0,i.j4)(l,{key:0})):(0,i.kq)("",!0)])),_:1}),(0,i.Wm)(r,{title:"STEP 2. 음원 파일 업로드",icon:"fa fa-upload"},{default:(0,i.w5)((()=>[1===e.convert_status?((0,i.wg)(),(0,i.j4)(c,{key:0})):(0,i.kq)("",!0)])),_:1}),(0,i.Wm)(r,{title:"STEP 3. 결과 다운로드!",icon:"fa fa-music"},{default:(0,i.w5)((()=>[1===e.convert_status?((0,i.wg)(),(0,i.j4)(d,{key:0})):(0,i.kq)("",!0)])),_:1})])),_:1},8,["onOnComplete"])])}var qe=a(9659);const Ve={class:"content mb-5"},Ee={key:0,class:"text-dark mb-5"},Ue=(0,i._)("h1",{class:"fw-bold"},"환영합니다 !",-1),Fe=(0,i._)("h3",null,"일단 원하는 목소리를 선택해볼까요 ?",-1);function Be(e,t,a,s,n,o){const l=(0,i.up)("nft"),r=(0,i.up)("XyzTransition");return(0,i.wg)(),(0,i.iD)("div",Ve,[(0,i.Wm)(r,{xyz:"fade-100% duration-5"},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.iD)("div",Ee,[Ue,Fe,(0,i.Wm)(l)]))])),_:1})])}const Le={class:"centered-carousel"},Xe={class:"carousel__item"},Ie=["src"];function Ne(e,t,s,n,o,l){const r=(0,i.up)("Slide"),c=(0,i.up)("Pagination"),d=(0,i.up)("Navigation"),u=(0,i.up)("Carousel");return(0,i.wg)(),(0,i.iD)("div",Le,[(0,i.Wm)(u,{itemsToShow:3,wrapAround:!0,autoplay:2e3,transition:500},{addons:(0,i.w5)((()=>[(0,i.Wm)(c),(0,i.Wm)(d)])),default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(3,(e=>(0,i.Wm)(r,{key:e},{default:(0,i.w5)((()=>[(0,i._)("div",Xe,[(0,i._)("img",{src:a(7749)(`./nft${e}.jpg`)},null,8,Ie)])])),_:2},1024))),64))])),_:1})])}var Ye=a(1658),Re=(0,i.aZ)({name:"Autoplay",data(){return{settings:{itemsToShow:1,snapAlign:"center"}}},components:{Pagination:Ye.tl,Carousel:Ye.lr,Slide:Ye.Mi,Navigation:Ye.W_}});const Ke=(0,_.Z)(Re,[["render",Ne]]);var $e=Ke,Qe=a(4491),Ge={components:{nft:$e,FileUpload:Qe.Z}};const Je=(0,_.Z)(Ge,[["render",Be]]);var et=Je;const tt={class:"content mb-5"},at={key:0,class:"text-dark"},st=(0,i._)("div",{class:"mb-5"},[(0,i._)("h2",{class:"fw-bold"},[(0,i.Uk)("방금 선택해주신 목소리로 음원을 변환해볼까요 ?"),(0,i._)("br")]),(0,i._)("h3",null," 노래, 녹음, 강의 등등 사람의 목소리가 담겨진 목소리 파일을 올려주세요 ! ")],-1),nt={class:"mb-5"},it=(0,i._)("p",null,"Drag and drop files to here to upload.",-1);function ot(e,t,a,s,n,o){const l=(0,i.up)("FileUpload"),r=(0,i.up)("XyzTransition");return(0,i.wg)(),(0,i.iD)("div",tt,[(0,i.Wm)(r,{xyz:"fade up-50% duration-15","appear-visible":!0},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.iD)("div",at,[st,(0,i._)("div",nt,[(0,i.Wm)(l,{name:"demo[]",url:"./upload.php",onUpload:t[0]||(t[0]=t=>e.onAdvancedUpload(t)),multiple:!0,accept:"image/*",maxFileSize:1e8,pt:{content:{class:"surface-ground"}}},{empty:(0,i.w5)((()=>[it])),_:1})])]))])),_:1})])}var lt={components:{FileUpload:Qe.Z}};const rt=(0,_.Z)(lt,[["render",ot]]);var ct=rt,dt=a.p+"img/castle_gay.d03212ec.jpg";const ut={class:"content mb-5"},pt={key:0,class:"text-dark mb-5 pb-5"},mt=(0,i._)("h2",{class:"fw-bold"},"기다려주셔서 감사해요 !",-1),vt=(0,i._)("h2",null,"결과가 나왔어요 !",-1),ht=(0,i._)("br",null,null,-1),gt=(0,i._)("h3",null,"짜잔 ~ ! 멋있지 않나요 ?",-1),bt=(0,i._)("img",{src:dt,class:"img-fluid border rounded-3 shadow-lg mt-5",alt:"Example image",width:"700",height:"500",loading:"lazy"},null,-1),ft=[mt,vt,ht,gt,bt];function wt(e,t,a,s,n,o){const l=(0,i.up)("XyzTransition");return(0,i.wg)(),(0,i.iD)("div",ut,[(0,i.Wm)(l,{xyz:"fade up-50% duration-10","appear-visible":!0},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.iD)("div",pt,ft))])),_:1})])}var yt={components:{}};const xt=(0,_.Z)(yt,[["render",wt]]);var kt=xt,_t={components:{FormWizard:qe.qU,TabContent:qe.I5,Dataset_select:et,Voice_upload:ct,Result_download:kt},methods:{onComplete(){alert("Yay. Done!")},nextTab(){this.convert_status<4&&(this.convert_status+=1)}},computed:{...(0,c.rn)(["convert_status"])}};const zt=(0,_.Z)(_t,[["render",Te]]);var Dt=zt;const jt={class:"container-fluid sidebar"},At={class:"row"},Ct={class:"col-md-3",style:{position:"fixed",top:"0",left:"0",height:"100vh","overflow-y":"auto"}},Ht={class:"col-md-5 offset-md-4"};function St(e,t,a,s,n,o){const l=(0,i.up)("Sidebar"),r=(0,i.up)("board");return(0,i.wg)(),(0,i.iD)("div",jt,[(0,i._)("div",At,[(0,i._)("div",Ct,[(0,i.Wm)(l)]),(0,i._)("div",Ht,[(0,i.Wm)(r)])])])}const Wt={class:"d-flex flex-nowrap"},Mt=(0,i.uE)('<div class="b-example-divider b-example-vr"></div><div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary z-1" style="width:280px;"><a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"><svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg><span class="fs-4">Sidebar</span></a><hr><ul class="nav nav-pills flex-column mb-auto"><li class="nav-item"><a href="#" class="nav-link active" aria-current="page"><svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg> Home </a></li><li><a href="#" class="nav-link link-body-emphasis"><svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> Dashboard </a></li><li><a href="#" class="nav-link link-body-emphasis"><svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#table"></use></svg> Orders </a></li><li><a href="#" class="nav-link link-body-emphasis"><svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"></use></svg> Products </a></li><li><a href="#" class="nav-link link-body-emphasis"><svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg> Customers </a></li></ul><hr><div class="dropdown"><a href="#" class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"><strong>mdo</strong></a><ul class="dropdown-menu text-small shadow"><li><a class="dropdown-item" href="#">New project...</a></li><li><a class="dropdown-item" href="#">Settings</a></li><li><a class="dropdown-item" href="#">Profile</a></li><li><hr class="dropdown-divider"></li><li><a class="dropdown-item" href="#">Sign out</a></li></ul></div></div><div class="b-example-divider b-example-vr"></div>',3),Zt=[Mt];function Ot(e,t,a,s,n,o){return(0,i.wg)(),(0,i.iD)("main",Wt,Zt)}var Pt={name:"YourComponentName",setup(){(0,i.bv)((()=>{const e=Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));e.forEach((e=>{new bootstrap.Tooltip(e)}))}))}};const Tt=(0,_.Z)(Pt,[["render",Ot]]);var qt=Tt;const Vt=(0,i.uE)('<section class="notice content mt-5"><div class="page-title"><div class="container"><h3>공지사항</h3></div></div><div id="board-search"><div class="container"><div class="search-window"><form action=""><div class="search-wrap"><label for="search" class="blind">공지사항 내용 검색</label><input id="search" type="search" name="" placeholder="검색어를 입력해주세요." value=""><button type="submit" class="btn btn-dark">검색</button></div></form></div></div></div><div id="board-list"><div class="container"><table class="board-table"><thead><tr><th scope="col" class="th-num">번호</th><th scope="col" class="th-title">제목</th><th scope="col" class="th-date">등록일</th></tr></thead><tbody><tr><td>3</td><th><a href="#!">[공지사항] 개인정보 처리방침 변경안내처리방침</a><p>테스트</p></th><td>2017.07.13</td></tr><tr><td>2</td><th><a href="#!">공지사항 안내입니다. 이용해주셔서 감사합니다</a></th><td>2017.06.15</td></tr><tr><td>1</td><th><a href="#!">공지사항 안내입니다. 이용해주셔서 감사합니다</a></th><td>2017.06.15</td></tr></tbody></table></div></div></section>',1),Et=[Vt];function Ut(e,t,a,s,n,o){return(0,i.wg)(),(0,i.iD)("div",null,Et)}var Ft={components:{}};const Bt=(0,_.Z)(Ft,[["render",Ut]]);var Lt=Bt,Xt={components:{Sidebar:qt,board:Lt}};const It=(0,_.Z)(Xt,[["render",St]]);var Nt=It;const Yt=[{path:"/",name:"home",component:Oe},{path:"/voice",name:"voice",component:Dt},{path:"/community",name:"community",component:Nt}],Rt=(0,$.p7)({history:(0,$.PO)("/"),routes:Yt});var Kt=Rt,$t=(0,c.MT)({state(){return{login_on:0,convert_status:1}},getters:{},mutations:{},actions:{},modules:{}}),Qt=(a(1237),a(6744),a(3852));(0,s.ri)(K).use($t).use(Kt).use(n.ZP).use(qe.ZP).use(Qt.ZP).mount("#app")},7749:function(e,t,a){var s={"./nft1.jpg":325,"./nft2.jpg":3771,"./nft3.jpg":5244};function n(e){var t=i(e);return a(t)}function i(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=i,e.exports=n,n.id=7749},325:function(e,t,a){"use strict";e.exports=a.p+"img/nft1.79a495ab.jpg"},3771:function(e,t,a){"use strict";e.exports=a.p+"img/nft2.5db34555.jpg"},5244:function(e,t,a){"use strict";e.exports=a.p+"img/nft3.d12e325f.jpg"}},t={};function a(s){var n=t[s];if(void 0!==n)return n.exports;var i=t[s]={exports:{}};return e[s].call(i.exports,i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,s,n,i){if(!s){var o=1/0;for(d=0;d<e.length;d++){s=e[d][0],n=e[d][1],i=e[d][2];for(var l=!0,r=0;r<s.length;r++)(!1&i||o>=i)&&Object.keys(a.O).every((function(e){return a.O[e](s[r])}))?s.splice(r--,1):(l=!1,i<o&&(o=i));if(l){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[s,n,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,i,o=s[0],l=s[1],r=s[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(r)var d=r(a)}for(t&&t(s);c<o.length;c++)i=o[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(d)},s=self["webpackChunkmyvoice"]=self["webpackChunkmyvoice"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(8070)}));s=a.O(s)})();
//# sourceMappingURL=app.d25cef5a.js.map