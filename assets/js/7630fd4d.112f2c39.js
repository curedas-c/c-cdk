"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[120],{810:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(7896),o=t(1461),c=(t(2784),t(876)),a=["components"],i={sidebar_position:2},s=void 0,l={unversionedId:"common/Fonctions/Objects",id:"common/Fonctions/Objects",title:"Objects",description:"Des fonctions pour g\xe9rer ou g\xe9nerer des Objects.",source:"@site/docs/common/Fonctions/Objects.md",sourceDirName:"common/Fonctions",slug:"/common/Fonctions/Objects",permalink:"/c-cdk/docs/common/Fonctions/Objects",draft:!1,editUrl:"https://github.com/curedas-c/docs/common/Fonctions/Objects.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Maths",permalink:"/c-cdk/docs/common/Fonctions/Maths"},next:{title:"NGX",permalink:"/c-cdk/docs/category/ngx"}},m={},u=[{value:"removeMatchingKeysFromObject",id:"removematchingkeysfromobject",level:3}],p={toc:u},d="wrapper";function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,c.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Des fonctions pour g\xe9rer ou g\xe9nerer des Objects."),(0,c.kt)("h3",{id:"removematchingkeysfromobject"},"removeMatchingKeysFromObject"),(0,c.kt)("p",null,"Supprime les cl\xe9s dont les valeurs sont contenus dans le tableau pass\xe9 en param\xeatres."),(0,c.kt)("p",null,"Par d\xe9faut les cl\xe9s \xe0 valeurs ",(0,c.kt)("inlineCode",{parentName:"p"},"null")," et ",(0,c.kt)("inlineCode",{parentName:"p"},"undefined")," sont supprim\xe9es."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./dummy.service.ts"',title:'"./dummy.service.ts"'},"import { removeMatchingKeysFromObject } from 'c-cdk';\n\n@Injectable()\nexport class DummyService {\n  example() {\n    const obj = const obj = {\n      name: '',\n      surname: null,\n      age: 10,\n      location: {\n        city: 'abidjan',\n        country: undefined,\n        ref: 0\n      }\n    };\n\n    removeMatchingKeysFromObject(obj);\n    /**\n     * Valeur retourn\xe9e: \n     * {\n     * name: '',\n     * age: 10,\n     * location: {\n     *    city: 'abidjan',\n     *    ref: 0\n     *  }\n     * };\n     * \n     * **/\n\n    removeMatchingKeysFromObject(obj, [10, '', undefined, null]);\n    /**\n     * Valeur retourn\xe9e: \n     * {\n     *   location: {\n     *     city: 'abidjan',\n     *     ref: 0\n     *   }\n     * };\n     * \n     * **/\n  }\n}\n")))}f.isMDXComponent=!0},876:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||c;return t?r.createElement(f,a(a({ref:n},m),{},{components:t})):r.createElement(f,a({ref:n},m))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);