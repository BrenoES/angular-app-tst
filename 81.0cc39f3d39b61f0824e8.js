(self.webpackChunkangular_app_tst=self.webpackChunkangular_app_tst||[]).push([[81],{8081:(t,e,o)=>{"use strict";o.r(e),o.d(e,{TodosModule:()=>v});var s=o(8583),n=o(7716),r=o(1841);let c=(()=>{class t{constructor(t){this.httpClient=t}getTodosUser(t){return this.httpClient.get("todos",{params:{userId:t}})}getAll(){return this.httpClient.get("todos")}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(r.eN))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var i=o(4655),a=o(7746);function p(t,e){if(1&t&&(n.TgZ(0,"mat-list-option",1),n.TgZ(1,"div"),n.TgZ(2,"p",2),n._uU(3),n.qZA(),n.qZA(),n.qZA()),2&t){const t=e.$implicit;n.Q6J("selected",t.completed),n.xp6(3),n.Oqu(t.title)}}const u=[{path:"",component:(()=>{class t{constructor(t,e){this.todosService=t,this.activatedRoute=e}ngOnInit(){const{userId:t}=this.activatedRoute.snapshot.params;this.gettodosUser(t)}gettodosUser(t){this.todos$=this.todosService.getTodosUser(t)}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(c),n.Y36(i.gz))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-todos"]],decls:3,vars:3,consts:[["checkboxPosition","before",3,"selected",4,"ngFor","ngForOf"],["checkboxPosition","before",3,"selected"],[1,"font-medium"]],template:function(t,e){1&t&&(n.TgZ(0,"mat-selection-list"),n.YNc(1,p,4,2,"mat-list-option",0),n.ALo(2,"async"),n.qZA()),2&t&&(n.xp6(1),n.Q6J("ngForOf",n.lcZ(2,1,e.todos$)))},directives:[a.Ub,s.sg,a.vS],pipes:[s.Ov],styles:[""]}),t})()}];let l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[i.Bz.forChild(u)],i.Bz]}),t})();o(9490);var d=o(3679),f=o(2458),h=(o(6237),o(8553));o(4765);let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({}),t})(),g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[f.si,f.BQ,h.Q8,m],f.BQ,m]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[s.ez,r.JF,d.u5,l,a.ie,g]]}),t})()}}]);