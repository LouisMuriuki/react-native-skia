"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5634],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>N});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),i=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=i(a),k=n,N=c["".concat(o,".").concat(k)]||c[k]||d[k]||s;return a?r.createElement(N,l(l({ref:t},m),{},{components:a})):r.createElement(N,l({ref:t},m))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:n,l[1]=p;for(var i=2;i<s;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1564:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var r=a(7462),n=(a(7294),a(3905));const s={id:"mask-filters",title:"Mask Filters",sidebar_label:"Mask Filters",slug:"/mask-filters"},l=void 0,p={unversionedId:"mask-filters",id:"mask-filters",title:"Mask Filters",description:"Mask filters are effects that manipulate the geometry and alpha channel of graphical objects.",source:"@site/docs/mask-filters.md",sourceDirName:".",slug:"/mask-filters",permalink:"/react-native-skia/docs/mask-filters",draft:!1,editUrl:"https://github.com/shopify/react-native-skia/edit/main/docs/docs/mask-filters.md",tags:[],version:"current",frontMatter:{id:"mask-filters",title:"Mask Filters",sidebar_label:"Mask Filters",slug:"/mask-filters"},sidebar:"tutorialSidebar",previous:{title:"Backdrop Filters",permalink:"/react-native-skia/docs/backdrops-filters"},next:{title:"Color Filters",permalink:"/react-native-skia/docs/color-filters"}},o={},i=[{value:"BlurMask",id:"blurmask",level:2},{value:"Example",id:"example",level:3}],m={toc:i},c="wrapper";function d(e){let{components:t,...s}=e;return(0,n.kt)(c,(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Mask filters are effects that manipulate the geometry and alpha channel of graphical objects. "),(0,n.kt)("h2",{id:"blurmask"},"BlurMask"),(0,n.kt)("p",null,"Creates a blur mask filter."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"blur"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Standard deviation of the Gaussian blur. Must be > 0.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"style?"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"BlurStyle")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Can be ",(0,n.kt)("inlineCode",{parentName:"td"},"normal"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"solid"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"outer"),", or ",(0,n.kt)("inlineCode",{parentName:"td"},"inner")," (default is ",(0,n.kt)("inlineCode",{parentName:"td"},"normal"),").")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"respectCTM?"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:"left"},"if true the blur's sigma is modified by the CTM (default is ",(0,n.kt)("inlineCode",{parentName:"td"},"false"),").")))),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("div",{className:"shiki-twoslash-fragment"},(0,n.kt)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FunctionComponent<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,n.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Fill: (props: SkiaProps<DrawingNodeProps>) => React.JSX.Element\nimport Fill"},"Fill")),(0,n.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: (props: SkiaProps<CircleProps>) => React.JSX.Element\nimport Circle"},"Circle")),(0,n.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,n.kt)("data-lsp",{parentName:"span",lsp:'(alias) const BlurMask: ({ style, respectCTM, ...props }: SkiaDefaultProps<BlurMaskFilterProps, "style" | "respectCTM">) => React.JSX.Element\nimport BlurMask'},"BlurMask")),(0,n.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const vec: (x?: number, y?: number) => SkPoint\nimport vec"},"vec"),"} "),(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"@shopify/react-native-skia"'),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,n.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"const MaskFilterDemo: () => React.JSX.Element"},"MaskFilterDemo")),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <"),(0,n.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FunctionComponent<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) ViewProps.style?: StyleProp<ViewStyle>"},"style")),(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{{ ",(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"1"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}}>")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,n.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: (props: SkiaProps<CircleProps>) => React.JSX.Element\nimport Circle"},"Circle")),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) c?: AnimatedProp<SkPoint | undefined, any>"},"c")),(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,n.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) vec(x?: number, y?: number | undefined): SkPoint\nimport vec"},"vec")),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,n.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"128"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},")} "),(0,n.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) r: number"},"r")),(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,n.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"128"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"} "),(0,n.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) color: string"},"color")),(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"lightblue"'),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        <"),(0,n.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:'(alias) const BlurMask: ({ style, respectCTM, ...props }: SkiaDefaultProps<BlurMaskFilterProps, "style" | "respectCTM">) => React.JSX.Element\nimport BlurMask'},"BlurMask")),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) blur: AnimatedProp<number, any>"},"blur")),(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,n.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"20"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"} "),(0,n.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:'(property) style?: AnimatedProp<"normal" | "solid" | "outer" | "inner", any> | undefined'},"style")),(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"normal"'),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," />")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      </"),(0,n.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: (props: SkiaProps<CircleProps>) => React.JSX.Element\nimport Circle"},"Circle")),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </"),(0,n.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FunctionComponent<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  );")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"};"))))),(0,n.kt)("pre",{parentName:"div",className:"shiki nord twoslash lsp",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"import"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FunctionComponent<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Fill: (props: SkiaProps<DrawingNodeProps>) => React.JSX.Element\nimport Fill"},"Fill")),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: (props: SkiaProps<CircleProps>) => React.JSX.Element\nimport Circle"},"Circle")),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:'(alias) const BlurMask: ({ style, respectCTM, ...props }: SkiaDefaultProps<BlurMaskFilterProps, "style" | "respectCTM">) => React.JSX.Element\nimport BlurMask'},"BlurMask")),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const vec: (x?: number, y?: number) => SkPoint\nimport vec"},"vec")),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"from"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,n.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"@shopify/react-native-skia"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,n.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"const MaskFilterDemo: () => React.JSX.Element"},"MaskFilterDemo")),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"()"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"return"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," (")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,n.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FunctionComponent<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) ViewProps.style?: StyleProp<ViewStyle>"},"style")),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"1"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}>")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,n.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: (props: SkiaProps<CircleProps>) => React.JSX.Element\nimport Circle"},"Circle")),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) c?: AnimatedProp<SkPoint | undefined, any>"},"c")),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,n.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) vec(x?: number, y?: number | undefined): SkPoint\nimport vec"},"vec")),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,n.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"128"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) r: number"},"r")),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,n.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"128"),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) color: string"},"color")),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,n.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"lightblue"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,n.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:'(alias) const BlurMask: ({ style, respectCTM, ...props }: SkiaDefaultProps<BlurMaskFilterProps, "style" | "respectCTM">) => React.JSX.Element\nimport BlurMask'},"BlurMask")),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) blur: AnimatedProp<number, any>"},"blur")),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,n.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"20"),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:'(property) style?: AnimatedProp<"normal" | "solid" | "outer" | "inner", any> | undefined'},"style")),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,n.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"normal"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,n.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: (props: SkiaProps<CircleProps>) => React.JSX.Element\nimport Circle"},"Circle")),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,n.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FunctionComponent<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  )"),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Style"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Result"),(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"left"}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"normal"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{alt:"Normal",src:a(7076).Z,width:"256",height:"256"})),(0,n.kt)("td",{parentName:"tr",align:"left"},"inner"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{alt:"Inner",src:a(7977).Z,width:"256",height:"256"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"solid"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{alt:"Solid",src:a(1797).Z,width:"256",height:"256"})),(0,n.kt)("td",{parentName:"tr",align:"left"},"outer"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{alt:"Outer",src:a(9769).Z,width:"256",height:"256"}))))))}d.isMDXComponent=!0},7977:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/blur-inner-96bfacb177dce573357eec4e6151a86d.png"},7076:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/blur-normal-169a4bbc719b82dd190629e4b4dac03c.png"},9769:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/blur-outer-6312bdd7b389863d166b1144678c41a4.png"},1797:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/blur-solid-6fa81bdce359fe9ba3f410da3ef9b20f.png"}}]);