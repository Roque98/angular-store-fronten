(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{WLUK:function(t,c,r){"use strict";r.r(c),r.d(c,"ProductsModule",function(){return T});var e=r("ofXK"),o=r("tyNb"),i=r("eIep"),a=r("fXoL"),d=r("aiL1"),s=r("bTqV");function n(t,c){if(1&t&&(a.Tb(0,"div",1),a.Ob(1,"img",2),a.Tb(2,"div",3),a.Tb(3,"h5",4),a.Cc(4),a.Sb(),a.Tb(5,"p",5),a.Cc(6),a.Sb(),a.Tb(7,"h5",4),a.Cc(8),a.fc(9,"currency"),a.Sb(),a.Sb(),a.Tb(10,"button",6),a.Cc(11,"crear"),a.Sb(),a.Sb()),2&t){const t=c.ngIf;a.Bb(1),a.kc("src",t.image,a.sc),a.Bb(3),a.Dc(t.title),a.Bb(2),a.Dc(t.description),a.Bb(2),a.Dc(a.hc(9,4,t.price,"$"))}}let p=(()=>{class t{constructor(t,c){this.ActivatedRoute=t,this.productService=c}ngOnInit(){this.product$=this.ActivatedRoute.params.pipe(Object(i.a)(t=>this.productService.getProduct(t.id)))}}return t.\u0275fac=function(c){return new(c||t)(a.Nb(o.a),a.Nb(d.a))},t.\u0275cmp=a.Hb({type:t,selectors:[["app-product-detail"]],decls:2,vars:3,consts:[["class","card mb-3","style","max-width: 400px;","class","crop-image",4,"ngIf"],[1,"crop-image",2,"max-width","400px"],["alt","...",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["mat-raised-button","","color","primary"]],template:function(t,c){1&t&&(a.Ac(0,n,12,7,"div",0),a.fc(1,"async")),2&t&&a.kc("ngIf",a.gc(1,1,c.product$))},directives:[e.l,s.b],pipes:[e.b,e.d],styles:[""]}),t})();var u=r("7pSQ"),b=r("Wp6s");const l=function(t){return["/products",t]};let f=(()=>{class t{constructor(t){this.cardService=t,this.productClicked=new a.o}ngOnInit(){}addCart(){this.cardService.addCart(this.product)}}return t.\u0275fac=function(c){return new(c||t)(a.Nb(u.a))},t.\u0275cmp=a.Hb({type:t,selectors:[["app-product"]],inputs:{product:"product"},outputs:{productClicked:"productClicked"},decls:17,vars:9,consts:[[1,"crop-image"],["mat-card-image","","alt","Photo of product",3,"src"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","",3,"routerLink"]],template:function(t,c){1&t&&(a.Tb(0,"mat-card"),a.Tb(1,"mat-card-header"),a.Tb(2,"mat-card-title"),a.Cc(3),a.Sb(),a.Tb(4,"mat-card-subtitle"),a.Cc(5),a.fc(6,"currency"),a.Sb(),a.Sb(),a.Tb(7,"div",0),a.Ob(8,"img",1),a.Sb(),a.Tb(9,"mat-card-content"),a.Tb(10,"p"),a.Cc(11),a.Sb(),a.Sb(),a.Tb(12,"mat-card-actions"),a.Tb(13,"button",2),a.ac("click",function(){return c.addCart()}),a.Cc(14,"Agregar al carrito"),a.Sb(),a.Tb(15,"a",3),a.Cc(16,"Ver detalle"),a.Sb(),a.Sb(),a.Sb()),2&t&&(a.Bb(3),a.Dc(c.product.title),a.Bb(2),a.Dc(a.gc(6,5,c.product.price)),a.Bb(3),a.kc("src",c.product.image,a.sc),a.Bb(3),a.Dc(c.product.description),a.Bb(4),a.kc("routerLink",a.mc(7,l,c.product.id)))},directives:[b.a,b.d,b.h,b.g,b.e,b.c,b.b,s.b,s.a,o.f],pipes:[e.d],styles:[""]}),t})();function m(t,c){1&t&&a.Ob(0,"app-product",3),2&t&&a.kc("product",c.$implicit)}function g(t,c){if(1&t&&(a.Tb(0,"div",1),a.Ac(1,m,1,1,"app-product",2),a.Sb()),2&t){const t=a.ec();a.Bb(1),a.kc("ngForOf",t.products)}}const h=[{path:"",component:(()=>{class t{constructor(t){this.productService=t}ngOnInit(){this.fetchProducts()}fetchProducts(){this.productService.getAllProducts().subscribe(t=>{this.products=t})}addCart(){console.log("Agregar al carrito")}clickProduct(t){console.log(t)}}return t.\u0275fac=function(c){return new(c||t)(a.Nb(d.a))},t.\u0275cmp=a.Hb({type:t,selectors:[["app-products"]],decls:3,vars:1,consts:[["class","product-grid",4,"ngIf"],[1,"product-grid"],[3,"product",4,"ngFor","ngForOf"],[3,"product"]],template:function(t,c){1&t&&(a.Tb(0,"h1"),a.Cc(1,"Lista de productos"),a.Sb(),a.Ac(2,g,2,1,"div",0)),2&t&&(a.Bb(2),a.kc("ngIf",c.products))},directives:[e.l,e.k,f],styles:[""]}),t})()},{path:":id",component:p}];let S=(()=>{class t{}return t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({factory:function(c){return new(c||t)},imports:[[o.g.forChild(h)],o.g]}),t})();var v=r("hctd");let T=(()=>{class t{}return t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({factory:function(c){return new(c||t)},imports:[[e.c,S,v.a]]}),t})()}}]);