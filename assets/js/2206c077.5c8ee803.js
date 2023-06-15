"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[819],{153:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=t(7896),a=t(1461),o=(t(2784),t(876)),i=["components"],s={sidebar_position:2},l=void 0,c={unversionedId:"common/Utilitaires RxJS",id:"common/Utilitaires RxJS",title:"Utilitaires RxJS",description:"Des op\xe9rateurs RxJS personnalis\xe9s, qui rajoutent ou combinent des op\xe9rateurs existants.",source:"@site/docs/common/Utilitaires RxJS.md",sourceDirName:"common",slug:"/common/Utilitaires RxJS",permalink:"/docs/common/Utilitaires RxJS",draft:!1,editUrl:"https://github.com/curedas-c/docs/common/Utilitaires RxJS.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/common/Introduction"},next:{title:"Fonctions",permalink:"/docs/category/fonctions"}},p={},u=[{value:"ofDelay",id:"ofdelay",level:3},{value:"retryWhenOnline",id:"retrywhenonline",level:3}],m={toc:u},d="wrapper";function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)(d,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Des op\xe9rateurs RxJS personnalis\xe9s, qui rajoutent ou combinent des op\xe9rateurs existants."),(0,o.kt)("h3",{id:"ofdelay"},"ofDelay"),(0,o.kt)("p",null,"Une combinaison des op\xe9rateurs rxjs ",(0,o.kt)("inlineCode",{parentName:"p"},"delay")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"of"),".\nL'op\xe9rateur retourne la valeur pass\xe9e en param\xeatre apr\xe8s un temps d\xe9finit (millisecondes)."),(0,o.kt)("p",null,"Cela peux s'av\xe9rer utile lors de l'utilisation de mocks o\xfb l'on souhaite simuler un delai de chargement."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./user.service.mock.ts"',title:'"./user.service.mock.ts"'},"import { ofDelay } from 'c-cdk';\nimport { faker } from '@faker-js/faker';\nimport { User } from '@shared/models/auth.models';\n\nexport const USER_MOCK: User = {\n  id: faker.random.alphaNumeric(),\n  username: faker.internet.email(),\n  firstName: faker.name.firstName(),\n  lastName: faker.name.lastName()\n};\n\n@Injectable()\nexport class UserMockService extends UserService {\n  override logUser(...args: unknown) {\n    return ofDelay(USER_MOCK, 3000);\n  }\n}\n")),(0,o.kt)("h3",{id:"retrywhenonline"},"retryWhenOnline"),(0,o.kt)("p",null,"Une version modifi\xe9e de l'op\xe9rateur ",(0,o.kt)("inlineCode",{parentName:"p"},"retry"),",\nqui prend en compte le status actuel du r\xe9seau via ",(0,o.kt)("inlineCode",{parentName:"p"},"navigator.onLine"),"."),(0,o.kt)("p",null,"Dans l'exemple ci-dessous, la requ\xeate sera r\xe9\xe9ssay\xe9e 2 fois toutes les 3 secondes."),(0,o.kt)("p",null,"L'op\xe9rateur attandra le retour de la connexion, dans le cas o\xfb ",(0,o.kt)("inlineCode",{parentName:"p"},"navigator.onLine === false")," au moment de la souscription. "),(0,o.kt)("p",null,"Le param\xeatre ",(0,o.kt)("inlineCode",{parentName:"p"},"delayObservable$")," permet d'attendre l'\xe9mission de l'observable fournit, avant la resouscription."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./banana.component.ts"',title:'"./banana.component.ts"'},"import { retryWhenOnline } from 'c-cdk';\n \n@Component({\n  selector: 'banana',\n  templateUrl: './banana.component.html',\n  styleUrls: ['./banana.component.scss'],\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class BananaComponent {\n  constructor(private http: HttpClient) {}\n\n  getLatestBananas() {\n    return this.http\n    .get('example.com')\n    .pipe(\n      retryWhenOnline({\n        count: 2,\n        delay: 3000,\n      }),\n      tap({\n        next: res => console.log(res)\n      })\n    )\n    .subscribe();\n  }\n}\n")))}f.isMDXComponent=!0},876:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);