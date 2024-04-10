"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6552],{6552:(S,a,o)=>{o.r(a),o.d(a,{SettingsPageModule:()=>b});var f=o(177),u=o(9417),c=o(9364),d=o(3799),e=o(4438),h=o(5609);const r=(t,i)=>({"background-color":t,color:i}),m=[{path:"",component:(()=>{var t;class i{constructor(n){this.settings=n}ngOnInit(){this.settings.tipoTemperatura$.subscribe(n=>{this.isCelsiusSelected=n}),this.settings.tipoVelocidad$.subscribe(n=>{this.isKmhSelected=n})}selectCelsius(){this.isCelsiusSelected=!0,this.settings.setTemperatura(this.isCelsiusSelected)}selectFahrenheit(){this.isCelsiusSelected=!1,this.settings.setTemperatura(this.isCelsiusSelected)}selectKmh(){this.isKmhSelected=!0,this.settings.setVelocidadEn(this.isKmhSelected)}selectMph(){this.isKmhSelected=!1,this.settings.setVelocidadEn(this.isKmhSelected)}}return(t=i).\u0275fac=function(n){return new(n||t)(e.rXU(h.h))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-settings"]],decls:24,vars:24,consts:[[2,"display","flex","justify-content","space-between"],["slot","start"],["color","primary","menu","main-menu"],["slot","end","href","https://www.dgac.gob.cl/"],["id","logo","src","../../assets/icon/DGAC-logo.jpg","alt","logo",2,"height","40px","width","30px","margin-right","1vh"],["slot","end","href","https://archivos.meteochile.gob.cl/portaldmc/movil/movil_inicio.php"],["id","logo","src","../../assets/icon/DMC-logo.png","alt","logo",2,"height","40px","width","40px","margin-right","1vh"],[1,"toggle-container"],[1,"toggle-button",3,"click","ngStyle"],[1,"divider"]],template:function(n,s){1&n&&(e.j41(0,"ion-toolbar",0)(1,"ion-buttons",1),e.nrm(2,"ion-menu-button",2),e.k0s(),e.j41(3,"a",3),e.nrm(4,"img",4),e.k0s(),e.j41(5,"a",5),e.nrm(6,"img",6),e.k0s()(),e.j41(7,"body"),e.nrm(8,"br")(9,"br")(10,"br")(11,"br"),e.j41(12,"div",7)(13,"button",8),e.bIt("click",function(){return s.selectCelsius()}),e.EFF(14,"Celsius"),e.k0s(),e.nrm(15,"div",9),e.j41(16,"button",8),e.bIt("click",function(){return s.selectFahrenheit()}),e.EFF(17,"Fahrenheit"),e.k0s()(),e.j41(18,"div",7)(19,"button",8),e.bIt("click",function(){return s.selectKmh()}),e.EFF(20,"Km/H"),e.k0s(),e.nrm(21,"div",9),e.j41(22,"button",8),e.bIt("click",function(){return s.selectMph()}),e.EFF(23,"Mph"),e.k0s()()()),2&n&&(e.R7$(13),e.AVh("selected",s.isCelsiusSelected),e.Y8G("ngStyle",e.l_i(12,r,s.isCelsiusSelected?"#007bff":"#ffffff",s.isCelsiusSelected?"#ffffff":"#000000")),e.R7$(3),e.AVh("selected",!s.isCelsiusSelected),e.Y8G("ngStyle",e.l_i(15,r,s.isCelsiusSelected?"#ffffff":"#007bff",s.isCelsiusSelected?"#000000":"#ffffff")),e.R7$(3),e.AVh("selected",s.isKmhSelected),e.Y8G("ngStyle",e.l_i(18,r,s.isKmhSelected?"#007bff":"#ffffff",s.isKmhSelected?"#ffffff":"#000000")),e.R7$(3),e.AVh("selected",!s.isKmhSelected),e.Y8G("ngStyle",e.l_i(21,r,s.isKmhSelected?"#ffffff":"#007bff",s.isKmhSelected?"#000000":"#ffffff")))},dependencies:[f.B3,c.QW,c.MC,c.ai],styles:['@charset "UTF-8";@font-face{font-family:Open Sans;src:url(OpenSans-Bold.c1fc02c2ea5dd4e9.ttf) format("truetype")}*[_ngcontent-%COMP%]{font-family:Open Sans}.toggle-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin:5%}.toggle-button[_ngcontent-%COMP%]{padding:10px 20px;font-size:16px;border:none;outline:none;cursor:pointer;background-color:#007bff;color:#fff;transition:background-color .3s,color .3s}.toggle-button[_ngcontent-%COMP%]:first-child{border-top-left-radius:20px;border-bottom-left-radius:20px}.toggle-button[_ngcontent-%COMP%]:last-child{border-top-right-radius:20px;border-bottom-right-radius:20px}.toggle-button.selected[_ngcontent-%COMP%]{background-color:#ccc;color:#000}.divider[_ngcontent-%COMP%]{height:40px;width:1px;background-color:#ccc}ion-toolbar[_ngcontent-%COMP%]{--background: rgba(255, 255, 255, .65)}body[_ngcontent-%COMP%]{background-image:url(settings.339dbf1e820115ea.jpeg);background-position:center;background-size:cover}']}),i})()}];let p=(()=>{var t;class i{}return(t=i).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[d.iI.forChild(m),d.iI]}),i})(),b=(()=>{var t;class i{}return(t=i).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[f.MD,u.YN,c.bv,p]}),i})()}}]);