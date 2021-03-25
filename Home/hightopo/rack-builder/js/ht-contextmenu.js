!function(e,h){"use strict";var O="ht",t=e[O],H="position",m="absolute",X="px",E="left",P="top",y="innerHTML",n="className",z="width",V="height",u="0",k="display",R="none",W="visibility",$="user-select",K="margin",o="padding",T=null,r=t.Color,J=t.Default,j=J.getInternal(),C=e.setTimeout,I=e.setInterval,U=e.clearTimeout,a=e.clearInterval,i=e.parseInt,N=J.isLeftButton,S=J.isDragging,d=J.startDragging,l=J.getDistance,c=J.isTouchable,b=J.isTouchEvent,G=J.getPagePoint,s=J.isRightButton,A=r.widgetIconHighlight,F=r.widgetIconBorder,L=r.widgetIconGradient,Z=function(){return document},x=function(t,u){return t.querySelectorAll(u)},g=function(A){var b=Z().createElement(A);return"ul"===A&&(Y(b,H,"relative"),Y(b,K,u),Y(b,o,u),Y(b,"list-style",R),Y(b,"box-sizing","border-box"),Y(b,"-moz-box-sizing","border-box"),Y(b,k,"inline-block"),Y(b,"vertical-align","text-bottom"),Y(b,"border","1px solid "+J.contextMenuBorderColor),Y(b,"box-shadow","0 0 16px 1px "+J.contextMenuShadowColor),Y(b,"overflow","hidden"),J.contextMenuBorderRadius&&Y(b,"border-radius",J.contextMenuBorderRadius+X)),b},w=function(Y){var o=Y.touches[0];return o?o:Y.changedTouches[0]},B=function(){return g("div")},Q=function(){return g("canvas")},Y=function(t,B,v){t.style.setProperty(B,v,T)},M=function(x,Z,F){J.def(t.widget[x],Z,F)},f=function(H,k){H.appendChild(k)},_=function(x,B){x.removeChild(B)},D=j.addEventListener,p=j.removeEventListener;j.addMethod(J,{contextMenuCheckIcon:{width:16,height:16,comps:[{type:"border",rect:[1,1,14,14],width:1,color:F},{type:"shape",points:[13,3,7,12,4,8],borderWidth:2,borderColor:A}]},contextMenuRadioIcon:{width:16,height:16,comps:[{type:"circle",rect:[2,2,12,12],borderWidth:1,borderColor:F},{type:"circle",rect:[4,4,8,8],borderWidth:1,borderColor:A,gradient:J.imageGradient,gradientColor:L,background:A}]},contextMenuLabelFont:(c?"16":"13")+"px arial, sans-serif",contextMenuLabelColor:"#000",contextMenuBackground:"#fff",contextMenuDisabledLabelColor:"#888",contextMenuHoverBackground:"#648BFE",contextMenuHoverLabelColor:"#fff",contextMenuSeparatorWidth:1,contextMenuSeparatorColor:"#E5E5E5",contextMenuScrollerColor1:"#FDFDFD",contextMenuScrollerColor2:"#D3D3D3",contextMenuScrollerBorderColor:"#C3C3C3",contextMenuBorderColor:"#C3C3C3",contextMenuShadowColor:"rgba(128, 128, 128, 0.5)",contextMenuBorderRadius:5,contextMenuSubmenuMark:"▶"},!0);var q=function(U){var d=this,e=U._view;d.$11b=U,d.addListeners(),D(e,"contextmenu",function($){$.preventDefault()});var H=d.$37b=d.$36b.bind(d);D(e,"mouseover",H),D(e,"mouseout",H)};J.def(q,h,{ms_listener:1,getView:function(){return this.$11b._view},handle_touchstart:function(H){if(J.preventDefault(H),N(H)){for(var B=this,E=B.$11b,k=B.getView(),l=k.children,q=0;q<l.length;q++){var y=l[q],K=y.$24b,M=y.$25b;if(K&&K.contains(H.target))return E.scrollUp(y),B.$28b=C(function(){B.$29b=I(function(){E.scrollUp(y)},100)},500),d(B,H),void 0;if(M&&M.contains(H.target))return E.scrollDown(y),B.$28b=C(function(){B.$29b=I(function(){E.scrollDown(y)},100)},500),d(B,H),void 0}B.$30b=G(H)}},handle_mousedown:function(L){this.handle_touchstart(L)},handle_touchend:function(O){if(N(O)){var p=this,W=p.$30b,d=b(O)?{x:w(O).pageX,y:w(O).pageY}:{x:O.pageX,y:O.pageY};if(!W||l(W,d)>1)return delete p.$30b,void 0;for(var B=p.getView(),x=p.$11b,u=O.target,k=T,f=T,m=x._items,H=B.$26b,A=0;A<H.length;A++)if(f=H[A],f.contains(u)){k=f.getAttribute("data-id");break}if(k&&m){var t=x.$17b(m,function(V){return V._id===k});if(t){var j=!1;t.disabled instanceof Function?j=t.disabled.call(x,t):t.disabled===!0&&(j=!0),j||(t.items?b(O)&&p.$36b(f,!0):x.$1b(t,O))}}delete p.$30b}},$36b:function(t,o){if(!S()){var Q,p=this,$=p.$11b,F=p.getView(),d=$.$20b||F.children[0],V=$.$19b,Z=F.$26b,c=F.children,C=t.target,f=F.getBoundingClientRect(),m=J.getWindowInfo(),b=m.width,g=m.height,I=function(F){for(var x=0;x<c.length;x++){var w=c[x],W=new RegExp(F+"$"),a=w[n];if(a&&(W.test(a)||a.indexOf(F+" ")>=0))return w}},_=function(U){for(var f=0;f<Z.length;f++){var V=Z[f],_=new RegExp(U+"$"),I=V[n];if(I&&(_.test(I)||I.indexOf(U+" ")>=0))return V}},D=function(n){var x=_("menu-item"+n.$45b),O=x.getBoundingClientRect(),K=O.top-f.top,H=O.left-f.left;Y(n,P,K+X),Y(n,E,H+O.width+X);var Q=n.getBoundingClientRect(),y=Q.top,B=Q.left,v=Q.height,c=Q.width,$=y+v+2,W=B+c+2;$>g&&Y(n,P,K+g-$+X),W>b&&Y(n,E,H-c+X)};if(o)Q=t;else{if("mouseover"===t.type){for(var l=0;l<Z.length;l++){var h=Z[l];if(h.contains(C)){Q=h;break}}if(!Q&&V){var R=V.parentNode,j=I("submenu"+V.getAttribute("data-id"));(j&&j.contains(C)||R&&R.contains(C))&&(Q=V)}}else if("mouseout"===t.type){for(var L=!1,u=t.relatedTarget,l=0;l<c.length;l++){var N=c[l];if("hidden"!==N.style.visibility&&N.contains(u)){L=!0;break}}if(L)return}!Q&&d&&(Q=_("menu-item"+(d.$45b||"NaN")))}if(Q!=V){if(V)for(var q=V;q;){if(q[n]=q[n].replace(" menu-item-hover",""),q[n].indexOf("disabled")<0){var O=$.getItemByProperty("_id",q.getAttribute("data-id"));null!=O.background?O.background instanceof Function?Y(q,"background-color",O.background.call($,O)):Y(q,"background-color",O.background):Y(q,"background-color",J.contextMenuBackground),Y(q,"color",J.contextMenuLabelColor)}var s=I("submenu"+q.getAttribute("data-id"));s&&Y(s,W,"hidden");var K=q.parentNode;q=_("menu-item"+(K.$45b||"NaN"))}if(Q){for(var M=Q,w=[];M;){M[n]+=" menu-item-hover",M[n].indexOf("disabled")<0&&(Y(M,"background-color",J.contextMenuHoverBackground),Y(M,"color",J.contextMenuHoverLabelColor));var z=I("submenu"+M.getAttribute("data-id"));z&&(Y(z,W,"visible"),w.push(z));var K=M.parentNode;M=_("menu-item"+(K.$45b||"NaN"))}w.reverse(),w.forEach(function(b){D(b)})}}$.$19b=Q,$.$20b=Q?Q.parentNode:F.children[0]}},handle_mouseup:function(F){this.handle_touchend(F)},handleWindowTouchEnd:function(){var p=this;p.$28b!=T&&(U(p.$28b),delete p.$28b),p.$29b!=T&&(a(p.$29b),delete p.$29b),delete p.$34b,delete p.$30b,delete p.$35b},handleWindowMouseUp:function(l){this.handleWindowTouchEnd(l)},handle_mousemove:function(b){this.handle_touchmove(b)},handle_touchmove:function(p){if(!S()&&N(p)){for(var $=this,e=$.getView().children,Y=T,X=0;X<e.length;X++){var f=e[X];if(f.contains(p.target)){Y=f;break}}var i=$.$30b,M=b(p)?{x:w(p).pageX,y:w(p).pageY}:{x:p.pageX,y:p.pageY};Y&&i&&l(i,M)>2&&(d($,p),$.$34b=Y,$.$35b=Y.$18b)}},handleWindowTouchMove:function(X){X.preventDefault();var m=this,A=m.$11b,T=m.$34b,B=m.$35b,M=m.$30b;if(M&&T){var k=b(X)?{x:w(X).pageX,y:w(X).pageY}:{x:X.pageX,y:X.pageY},z=k.y-M.y;z>0?A.scrollUp(T,T.$18b-(B-z)):A.scrollDown(T,B-z-T.$18b)}},handleWindowMouseMove:function(F){this.handleWindowTouchMove(F)},$10b:function(O,E){O.preventDefault();for(var k=this,_=k.getView().children,z=T,N=0;N<_.length;N++){var K=_[N];if(K.contains(O.target)){z=K;break}}if(z){var l=this.$11b,P=l.getRowHeight();Math.abs(E)>.05&&(E>0?l.scrollUp(z,E*P):0>E&&l.scrollDown(z,-E*P))}},handle_mousewheel:function(M){this.$10b(M,M.wheelDelta/40)},handle_DOMMouseScroll:function(m){this.$10b(m,-m.detail)},$44b:function(k){this.getView().contains(k.target)||this.$11b.hide()},$41b:function(d){J.preventDefault(d)},$4b:function(w,G){var U=this.$11b;if(G=G||U._items,G&&G.length&&w.keyCode){var L=[w.keyCode];w.shiftKey&&L.push(16),w.ctrlKey&&L.push(17),w.altKey&&L.push(18),/mac/.test(e.navigator?e.navigator.userAgent.toLowerCase():"")?w.metaKey&&L.push(17):w.metaKey&&L.push(91),L.sort();var M=L.join(),F=U.$17b(G,function(C){if(C.key){var c=C.key.slice(0);return c.sort(),M===c.join()}});if(F){F.preventDefault!==!1&&w.preventDefault();var h=!1;F.disabled instanceof Function?h=F.disabled.call(U,F):F.disabled===!0&&(h=!0),h||U.$1b(F,w)}}},$39b:function(r){this.$32b=G(r)},$38b:function(i){if(J.preventDefault(i),!N(i)){var R=this;R._showContextMenu=s(i),R._showContextMenu||(R.$31b=G(i),R.$33b=C(function(){R._showContextMenu=!0,delete R.$33b},600))}},$40b:function(y){var X=this;X._showContextMenu&&(s(y)?X.$11b.show(y):X.$31b&&(X.$32b?l(X.$31b,X.$32b)<10&&X.$11b.show(y):X.$11b.show(y))),X.$33b!=T&&(U(X.$33b),delete X.$33b),delete X.$31b,delete X.$32b}}),t.widget.ContextMenu=function(X){var M=this,z=M._view=j.createView(null,M);z[n]="ht-widget-contextmenu",M.setItems(X),M.$13b=new q(M),Y(z,"font",J.contextMenuLabelFont),Y(z,H,m),Y(z,"cursor","default"),Y(z,"-webkit-"+$,R),Y(z,"-moz-"+$,R),Y(z,"-ms-"+$,R),Y(z,$,R),Y(z,"box-sizing","border-box"),Y(z,"-moz-box-sizing","border-box"),J.baseZIndex!=T&&Y(z,"z-index",i(J.baseZIndex)+2+""),M.$3b=function(O){M.$13b.$4b(O)}},M("ContextMenu",h,{$5b:0,_items:T,$21b:T,_enableGlobalKey:!1,ms_v:1,enableGlobalKey:function(){var s=this,X=s._enableGlobalKey;X===!1&&(D(Z(),"keydown",s.$3b),s._enableGlobalKey=!0)},disableGlobalKey:function(){this._enableGlobalKey=!1,p(Z(),"keydown",this.$3b)},setItems:function(K){this._items=K},getItems:function(){return this._items},setVisibleFunc:function(l){this.$16b=l},setLabelMaxWidth:function(L){this.$43b=L},$1b:function($,d){var l=this;if("check"===$.type)$.selected=!$.selected;else if("radio"===$.type){var B=$.groupId;l.$17b(l._items,function(_){_.groupId===B&&(_.selected=!1)}),$.selected=!0}if(l.hide(),$.action)$.action.apply($.scope||l,[$,d]);else if($.href){var A=$.linkTarget||"_self";e.open($.href,A)}},getItemById:function(m){return this.getItemByProperty("id",m)},setItemVisible:function(W,J){var H=this.getItemById(W);H&&(H.visible=J)},getItemByProperty:function(N,U,i){var F=this;if(i=i||F._items,!i||0===i.length)return T;var L=F.$17b(i,function(M){return M[N]===U});return L||T},scrollUp:function(x,M){var A=this;if(M=M==T?20:M,M=i(M),0!==M){var p=0;x.$18b>M&&(p=x.$18b-M),A.$42b(x,p),x.scrollTop=p,x.$18b=p}},scrollDown:function(k,c){var h=this;if(c=c==T?20:c,c=i(c),0!==c){var n=k.$22b,S=k.$23b,L=n-S;S+k.$18b+c<n&&(L=k.$18b+c),h.$42b(k,L),k.scrollTop=L,k.$18b=L}},$42b:function(A,f){f=f==T?A.$18b:f;var B=A.$24b,L=A.$25b;B&&(Y(B,"top",f+X),0==f?Y(B,k,R):Y(B,k,"block")),L&&(Y(L,"bottom",-f+X),f==A.$22b-A.$23b?Y(L,k,R):Y(L,k,"block"))},getRowHeight:function(){return this._view.querySelector(".menu-item").offsetHeight},$17b:function(Q,n){for(var p=0;p<Q.length;p++){var M=Q[p];if(n(M))return M;if(M.items){var X=this.$17b(M.items,n);if(X)return X}}},$2b:function(T,b){for(var x=this,O=0;O<T.length;O++){x.$5b++;var Z=T[O];if(Z.visible!==!1)if(J.isFunction(Z.visible)&&Z.visible()===!1)this._clearItemId(Z);else if(!x.$16b||x.$16b.call(x,Z)){var h=g("li"),D=x.$5b+"";if(Y(h,"white-space","nowrap"),Y(h,k,"block"),"separator"===Z||Z.separator===!0){var L=B();L[n]="separator",Y(L,V,J.contextMenuSeparatorWidth+X),Y(L,"background",J.contextMenuSeparatorColor),f(h,L)}else{Z._id=D,h.setAttribute("data-id",D);var U=g("span"),R=g("span"),N=Q(),I=B();if(Y(U,k,"inline-block"),Y(U,V,"1.2em"),Y(R,k,"inline-block"),Y(R,V,"1.2em"),Y(R,"line-height","1.2em"),N[n]="prefix",Y(N,k,"inline-block"),Y(N,z,"1em"),Y(N,V,"1em"),Y(N,"vertical-align","middle"),Y(N,K,"0 0.2em"),"check"===Z.type&&Z.selected?N[n]+=" check-prefix":"radio"===Z.type&&Z.selected&&(N[n]+=" radio-prefix"),f(h,N),Z.icon){var p=Q();p[n]="contextmenu-item-icon",Y(p,k,"inline-block"),Y(p,V,"1.2em"),Y(p,z,"1.2em"),Y(p,"margin-right","0.2em"),Y(p,"float","left"),p.$50b=Z.icon,p._item=Z,f(U,p)}if(R[y]=Z.label,f(U,R),f(h,U),I[n]="suffix",Y(I,k,"inline-block"),Y(I,"margin-left","1em"),Y(I,"margin-right","0.4em"),Y(I,"text-align","right"),Y(I,"font-size","75%"),Z.items&&(I[y]=J.contextMenuSubmenuMark),Z.suffix&&(I[y]=Z.suffix),f(h,I),h[n]="menu-item menu-item"+D,null!=Z.background?Z.background instanceof Function?Y(h,"background-color",Z.background.call(x,Z)):Y(h,"background-color",Z.background):Y(h,"background-color",J.contextMenuBackground),Y(h,"color",J.contextMenuLabelColor),Y(h,o,"3px 0"),Z.disabled instanceof Function){var i=Z.disabled.call(x,Z);i&&(h[n]+=" disabled",Y(h,"color",J.contextMenuDisabledLabelColor))}else Z.disabled&&(h[n]+=" disabled",Y(h,"color",J.contextMenuDisabledLabelColor));if(Z.items){x.$21b||(x.$21b=new t.List);var v=g("ul");v[n]="submenu"+D,v.$45b=D,Y(v,W,"hidden"),Y(v,H,m),f(x._view,v),x.$21b.add(v),x.$2b(Z.items,v)}}f(b,h)}else this._clearItemId(Z);else this._clearItemId(Z)}},rebuild:function(){var N=this,I=N._items,W=N._view;if(W&&(W[y]="",N.$21b=T,N.$5b=0,N.$19b=T,N.$20b=T,W.$26b=T,I&&0!==I.length)){var s=g("ul",N._r);f(W,s),N.$2b(I,s)}},addTo:function(F){if(F){var m=this,$=m.$13b;m.$12b=F,m.$9b=function(o){$.$44b(o)};var w=m.$6b=function(C){$.$38b(C)},g=m.$7b=function(x){$.$39b(x)},h=m.$8b=function(O){$.$40b(O)};J.mockTouch&&(D(F,"touchstart",w,!0),D(F,"touchmove",g),D(F,"touchend",h)),D(F,"mousedown",w,!0),D(F,"mousemove",g),D(F,"mouseup",h),m.$27b=function(F){$.$41b(F)},D(F,"contextmenu",m.$27b)}},showOnView:function(v,p,S){v=v.getView?v.getView():v;var g=J.getWindowInfo(),b=v.getBoundingClientRect();this.show(b.left+g.left+p,b.top+g.top+S)},show:function(W,N,Q){var e=this,Q=Q==T?!0:!1,r=e._view;if(r){if(e.invalidate(),1===arguments.length){var M=W;if(b(M)){var U=w(M);W=U.pageX,N=U.pageY}else W=M.pageX,N=M.pageY}var _=J.getWindowInfo(),v=_.width,A=_.height,i=_.left,a=_.top,K={pageX:W,pageY:N,clientX:W-i,clientY:N-a,target:1,originEvent:M},j=K.clientX,V=K.clientY,d=function(x){x.style.height=A-6+X;var s=B(),o=B(),D=function(b){Y(b,H,m),Y(b,"text-align","center"),Y(b,z,"100%"),Y(b,"font-size",10+X),Y(b,"padding","2px 0"),Y(b,"border","0px solid "+J.contextMenuScrollerBorderColor),Y(b,"background-color",J.contextMenuScrollerColor1),b.style.backgroundImage="-webkit-linear-gradient(top, "+J.contextMenuScrollerColor1+", "+J.contextMenuScrollerColor2+")",b.style.backgroundImage="linear-gradient(to bottom, "+J.contextMenuScrollerColor1+", "+J.contextMenuScrollerColor2+")"};s[n]="menu-arrow-item menu-arrow-item-top",o[n]="menu-arrow-item menu-arrow-item-bottom",D(s),Y(s,"top",u),Y(s,"left",u),Y(s,"border-bottom-width",1+X),s[y]="▲",D(o),Y(o,"bottom",u),Y(o,"left",u),Y(o,"border-top-width",1+X),o[y]="▼",x.$24b=s,x.$25b=o,x.$18b=x.scrollTop,x.$22b=x.scrollHeight,x.$23b=x.clientHeight,f(x,s),f(x,o),e.$42b(x)};e.beforeShow&&e.beforeShow(K);var $=e._items;if($&&(M&&M.preventDefault(),$.length)){e.rebuild(),J.appendToScreen(r),r.$26b=x(r,".menu-item");var L=r.children[0];L.offsetHeight>A&&d(L);var g=V+(Q?1:0),p=j+(Q?1:0),G=function(j){for(var S=0,i=0,h=0,A=e.$43b;h<j.children.length;h++){var R=j.children[h];if(R.getAttribute("data-id")){var b=R.children[1],w=R.children[2],W=b.children;if(A){var r=W[0];W.length>1&&(r=W[1]),r.offsetWidth>A&&(r[y]="<marquee scrollamount='3'>"+r[y]+"</marquee>",r.children[0].style.verticalAlign="text-bottom",Y(r,z,A+X),Y(r,k,"inline-block"))}var O=b.offsetWidth,t=w.offsetWidth;O>S&&(S=O),t>i&&(i=t)}}for(h=0;h<j.children.length;h++){var R=j.children[h];if(R.getAttribute("data-id")){var b=R.children[1],w=R.children[2],U=b.children[0],I=b.children[1];!I&&U.style.width&&Y(U,z,S+X),Y(b,z,S+X),Y(w,z,i+X)}}};G(L);var q=V+3+r.offsetHeight,F=j+3+r.offsetWidth;q>A?Y(r,P,g-(q-A)+a+X):Y(r,P,g+a+X),F>v?Y(r,E,p-(F-v)+i+X):Y(r,E,p+i+X);var R=e.$21b;R&&R.each(function(v){G(v),v.offsetHeight>A&&d(v)}),e.$9b&&(J.mockTouch&&D(Z(),"touchstart",e.$9b,!0),D(Z(),"mousedown",e.$9b,!0)),e.afterShow&&e.afterShow(K),e.$47b()}}},isShowing:function(){return this._view?this._view.parentNode!=T:!1},getRelatedView:function(){return this.$12b},hide:function(){var U=this,m=U._view;m&&m.parentNode&&(_(m.parentNode,m),J.mockTouch&&p(Z(),"touchstart",U.$9b,!0),p(Z(),"mousedown",U.$9b,!0),U.afterHide&&U.afterHide())},dispose:function(){var V=this,C=V.$12b,h=V._view;h&&(this.hide(),V.disableGlobalKey(),C&&(J.mockTouch&&(p(C,"touchstart",V.$6b,!0),p(C,"touchmove",V.$7b),p(C,"touchend",V.$8b)),p(C,"mousedown",V.$6b,!0),p(C,"mousemove",V.$7b),p(C,"mouseup",V.$8b),p(C,"contextmenu",V.$27b)),V._view=V._items=V.$21b=V.$19b=V.$12b=V.beforeShow=V.afterShow=V.afterHide=V.$9b=V.$3b=V.$6b=V.$7b=V.$8b=V.$27b=T)},$46b:function(I,o,g,n,c){var q=j.initContext(I);j.translateAndScale(q,0,0,1),q.clearRect(0,0,g,n),J.drawStretchImage(q,J.getImage(o),"fill",0,0,g,n,c,this),q.restore()},$47b:function(){var P,g,M,K=this,s=K._view;if(K.isShowing()){var t=x(s,".check-prefix");for(M=0;M<t.length;M++){var O=t[M];P=O.clientWidth,g=O.clientHeight,O.$48b=P,O.$49b=g,j.setCanvas(O,P,g)}var z=x(s,".radio-prefix");for(M=0;M<z.length;M++){var G=z[M];P=G.clientWidth,g=G.clientHeight,G.$48b=P,G.$49b=g,j.setCanvas(G,P,g)}var k=x(s,".contextmenu-item-icon");for(M=0;M<k.length;M++){var L=k[M];P=L.clientWidth,g=L.clientHeight,L.$48b=P,L.$49b=g,j.setCanvas(L,P,g)}}},validateImpl:function(){var M,w,Y,T=this,h=T._view;if(T.isShowing()){var t=x(h,".check-prefix");for(Y=0;Y<t.length;Y++){var k=t[Y];M=k.$48b,w=k.$49b,M&&w&&T.$46b(k,J.contextMenuCheckIcon,M,w)}var $=x(h,".radio-prefix");for(Y=0;Y<$.length;Y++){var S=$[Y];M=S.$48b,w=S.$49b,M&&w&&T.$46b(S,J.contextMenuRadioIcon,M,w)}var i=x(h,".contextmenu-item-icon");for(Y=0;Y<i.length;Y++){var N=i[Y];M=N.$48b,w=N.$49b,M&&w&&T.$46b(N,J.getImage(N.$50b),M,w,N._item)}}},_clearItemId:function(e){var w=this;delete e._id,e.items&&e.items.forEach(function(y){w._clearItemId(y)})}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);