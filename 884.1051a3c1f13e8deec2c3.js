(self.webpackChunkangular_app_tst=self.webpackChunkangular_app_tst||[]).push([[884],{7884:(t,e,s)=>{"use strict";s.r(e),s.d(e,{PostsModule:()=>y});var o=s(8583),n=s(4655),i=s(8756),r=s(7716),a=s(1841);let c=(()=>{class t{constructor(t){this.httpClient=t}getPostsUser(t){return this.httpClient.get("posts",{params:{userId:t}})}getPostById(t){return this.httpClient.get(`posts/${t}`)}getCommentsPost(t){return this.httpClient.get(`posts/${t}/comments`)}getAll(){return this.httpClient.get("posts")}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(a.eN))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var g=s(6627),l=s(7746),p=s(2458);function u(t,e){if(1&t&&(r.TgZ(0,"li",8),r.TgZ(1,"mat-icon",9),r._uU(2,"comment"),r.qZA(),r.TgZ(3,"div",10),r.TgZ(4,"h1",11),r._uU(5),r.qZA(),r.TgZ(6,"p",12),r.TgZ(7,"span",13),r._uU(8),r.qZA(),r._uU(9),r.qZA(),r.qZA(),r.qZA()),2&t){const t=e.$implicit;r.xp6(5),r.Oqu(t.name),r.xp6(3),r.Oqu(t.email),r.xp6(1),r.hij(" - ",t.body," ")}}function m(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"div",1),r.TgZ(1,"div",2),r.TgZ(2,"h1",3),r._uU(3,"Coment\xe1rios"),r.qZA(),r.TgZ(4,"button",4),r.NdJ("click",function(){return r.CHM(t),r.oxw().close()}),r.TgZ(5,"mat-icon",5),r._uU(6,"close"),r.qZA(),r.TgZ(7,"span"),r._uU(8,"fechar"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(9,"div",6),r.TgZ(10,"ul"),r.YNc(11,u,10,3,"li",7),r.qZA(),r.qZA(),r.qZA()}if(2&t){const t=e.ngIf;r.xp6(11),r.Q6J("ngForOf",t)}}let d=(()=>{class t{constructor(t,e,s){this.postsService=t,this.dialogRef=e,this.data=s}ngOnInit(){const{postId:t}=this.data;this.getCommentsPost(t)}getCommentsPost(t){this.comments$=this.postsService.getCommentsPost(t)}close(){this.dialogRef.close()}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(c),r.Y36(i.so),r.Y36(i.WI))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-posts-comments"]],decls:2,vars:3,consts:[["class","h-96",4,"ngIf"],[1,"h-96"],[1,"flex","justify-between","p-4"],[1,"font-bold","text-lg"],["mat-button","",1,"flex","items-center",3,"click"],[1,"mat-18"],[1,"max-h-80","overflow-y-auto"],["class","m-2 flex px-4 py-4 justify-between bg-white hover:bg-gray-300 dark:bg-gray-600 shadow rounded",4,"ngFor","ngForOf"],[1,"m-2","flex","px-4","py-4","justify-between","bg-white","hover:bg-gray-300","dark:bg-gray-600","shadow","rounded"],["matListIcon","","fontSet","material-icons-outlined",1,"m-4"],[1,"w-full"],["matLine","",1,"font-bold","text-gray-600","text-md"],["matLine","",1,"text-gray-400","leading-relaxed"],[1,"font-medium"]],template:function(t,e){1&t&&(r.YNc(0,m,12,1,"div",0),r.ALo(1,"async")),2&t&&r.Q6J("ngIf",r.lcZ(1,1,e.comments$))},directives:[o.O5,g.Hw,o.sg,l.Nh,p.X2],pipes:[o.Ov],styles:[".mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{width:auto}"]}),t})();function f(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"li",1),r.TgZ(1,"mat-icon",2),r._uU(2,"library_books"),r.qZA(),r.TgZ(3,"div",3),r.TgZ(4,"h1",4),r._uU(5),r.qZA(),r.TgZ(6,"p",5),r._uU(7),r.qZA(),r.TgZ(8,"div",6),r.TgZ(9,"button",7),r.NdJ("click",function(){const e=r.CHM(t).$implicit;return r.oxw().openComments(e.id)}),r._uU(10," ver coment\xe1rios "),r.qZA(),r.qZA(),r.qZA(),r.qZA()}if(2&t){const t=e.$implicit;r.xp6(5),r.Oqu(t.title),r.xp6(2),r.Oqu(t.body)}}const h=[{path:"",component:(()=>{class t{constructor(t,e,s){this.postsService=t,this.activatedRoute=e,this.dialog=s}ngOnInit(){const{userId:t}=this.activatedRoute.snapshot.params;this.getPostsUser(t)}getPostsUser(t){this.posts$=this.postsService.getPostsUser(t)}openComments(t){this.dialog.open(d,{data:{postId:t}})}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(c),r.Y36(n.gz),r.Y36(i.uw))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-posts"]],decls:3,vars:3,consts:[["class","m-3 flex px-4 py-4 justify-between bg-white hover:bg-gray-300 dark:bg-gray-600 shadow rounded",4,"ngFor","ngForOf"],[1,"m-3","flex","px-4","py-4","justify-between","bg-white","hover:bg-gray-300","dark:bg-gray-600","shadow","rounded"],["matListIcon","","fontSet","material-icons-outlined",1,"m-4"],[1,"w-full"],["matLine","",1,"font-semibold","text-gray-600","text-md"],["matLine","",1,"text-gray-400","leading-relaxed"],[1,"flex"],[1,"font-medium","cursor-pointer","mt-2","mb-1","text-xs","hover:text-gray-300",3,"click"]],template:function(t,e){1&t&&(r.TgZ(0,"ul"),r.YNc(1,f,11,2,"li",0),r.ALo(2,"async"),r.qZA()),2&t&&(r.xp6(1),r.Q6J("ngForOf",r.lcZ(2,1,e.posts$)))},directives:[o.sg,g.Hw,l.Nh,p.X2],pipes:[o.Ov],styles:[".mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{width:auto}"]}),t})()}];let Z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[n.Bz.forChild(h)],n.Bz]}),t})(),y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[o.ez,a.JF,Z,l.ie,g.Ps,i.Is]]}),t})()}}]);