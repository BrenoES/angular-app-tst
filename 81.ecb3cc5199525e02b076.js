(self.webpackChunkangular_app_tst=self.webpackChunkangular_app_tst||[]).push([[81],{8081:(t,e,o)=>{"use strict";o.r(e),o.d(e,{TodosModule:()=>A});var n=o(8583),s=o(7716),r=o(1841);let i=(()=>{class t{constructor(t){this.httpClient=t}getTodosUser(t){return this.httpClient.get("todos",{params:{userId:t}})}getAll(){return this.httpClient.get("todos")}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(r.eN))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var c=o(4655),a=o(7746),u=o(1769),d=o(6627);function p(t,e){1&t&&(s.TgZ(0,"mat-icon",5),s._uU(1,"close"),s.qZA())}function l(t,e){1&t&&(s.TgZ(0,"mat-icon",5),s._uU(1,"done"),s.qZA())}function m(t,e){if(1&t&&(s.TgZ(0,"mat-list-item",1),s.TgZ(1,"div",2),s.YNc(2,p,2,0,"mat-icon",3),s.YNc(3,l,2,0,"mat-icon",3),s.TgZ(4,"h1",4),s._uU(5),s.qZA(),s.qZA(),s._UZ(6,"mat-divider"),s.qZA()),2&t){const t=e.$implicit;s.xp6(2),s.Q6J("ngIf",!t.completed),s.xp6(1),s.Q6J("ngIf",t.completed),s.xp6(2),s.Oqu(t.title)}}const g=[{path:"",component:(()=>{class t{constructor(t,e){this.todosService=t,this.activatedRoute=e}ngOnInit(){const{userId:t}=this.activatedRoute.snapshot.params;this.gettodosUser(t)}gettodosUser(t){this.todos$=this.todosService.getTodosUser(t)}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(i),s.Y36(c.gz))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-todos"]],decls:3,vars:3,consts:[["class","m-2 flex px-4 py-4 justify-between bg-white hover:bg-gray-300 dark:bg-gray-600 shadow rounded cursor-pointer",4,"ngFor","ngForOf"],[1,"m-2","flex","px-4","py-4","justify-between","bg-white","hover:bg-gray-300","dark:bg-gray-600","shadow","rounded","cursor-pointer"],[1,"flex","items-center"],["class","m-4","matListIcon","","fontSet","material-icons-outlined",4,"ngIf"],[1,"font-medium"],["matListIcon","","fontSet","material-icons-outlined",1,"m-4"]],template:function(t,e){1&t&&(s.TgZ(0,"mat-list"),s.YNc(1,m,7,3,"mat-list-item",0),s.ALo(2,"async"),s.qZA()),2&t&&(s.xp6(1),s.Q6J("ngForOf",s.lcZ(2,1,e.todos$)))},directives:[a.i$,n.sg,a.Tg,n.O5,u.d,d.Hw,a.Nh],pipes:[n.Ov],styles:[".mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{width:auto}"]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[c.Bz.forChild(g)],c.Bz]}),t})();o(9490);var h=o(3679),v=o(2458),w=(o(6237),o(8553));o(4765);let y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[v.si,v.BQ,w.Q8,y],v.BQ,y]}),t})(),A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[n.ez,r.JF,h.u5,f,a.ie,d.Ps,Z]]}),t})()}}]);