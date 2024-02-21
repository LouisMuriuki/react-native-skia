"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4057],{5788:(e,a,n)=>{n.d(a,{Iu:()=>i,yg:()=>g});var t=n(1504);function s(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){s(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=t.createContext({}),y=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},i=function(e){var a=y(e.components);return t.createElement(o.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=y(n),c=s,g=m["".concat(o,".").concat(c)]||m[c]||d[c]||r;return n?t.createElement(g,p(p({ref:a},i),{},{components:n})):t.createElement(g,p({ref:a},i))}));function g(e,a){var n=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=n.length,p=new Array(r);p[0]=c;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[m]="string"==typeof e?e:s,p[1]=l;for(var y=2;y<r;y++)p[y]=n[y];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8612:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>y});var t=n(5072),s=(n(1504),n(5788));const r={id:"glyphs",title:"Glyphs",sidebar_label:"Glyphs",slug:"/text/glyphs"},p=void 0,l={unversionedId:"text/glyphs",id:"text/glyphs",title:"Glyphs",description:"This component draws a run of glyphs, at corresponding positions, in a given font.",source:"@site/docs/text/glyphs.md",sourceDirName:"text",slug:"/text/glyphs",permalink:"/react-native-skia/docs/text/glyphs",draft:!1,editUrl:"https://github.com/shopify/react-native-skia/edit/main/docs/docs/text/glyphs.md",tags:[],version:"current",frontMatter:{id:"glyphs",title:"Glyphs",sidebar_label:"Glyphs",slug:"/text/glyphs"},sidebar:"tutorialSidebar",previous:{title:"Text",permalink:"/react-native-skia/docs/text/text"},next:{title:"Text Path",permalink:"/react-native-skia/docs/text/path"}},o={},y=[{value:"Draw text vertically",id:"draw-text-vertically",level:2}],i={toc:y},m="wrapper";function d(e){let{components:a,...r}=e;return(0,s.yg)(m,(0,t.c)({},i,r,{components:a,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"This component draws a run of glyphs, at corresponding positions, in a given font."),(0,s.yg)("table",null,(0,s.yg)("thead",{parentName:"table"},(0,s.yg)("tr",{parentName:"thead"},(0,s.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,s.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,s.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.yg)("tbody",{parentName:"table"},(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:"left"},"glyphs"),(0,s.yg)("td",{parentName:"tr",align:"left"},(0,s.yg)("inlineCode",{parentName:"td"},"Glyph[]")),(0,s.yg)("td",{parentName:"tr",align:"left"},"Glyphs to draw")),(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:"left"},"x?"),(0,s.yg)("td",{parentName:"tr",align:"left"},(0,s.yg)("inlineCode",{parentName:"td"},"number"),"."),(0,s.yg)("td",{parentName:"tr",align:"left"},"x coordinate of the origin of the entire run. Default is 0")),(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:"left"},"y?"),(0,s.yg)("td",{parentName:"tr",align:"left"},(0,s.yg)("inlineCode",{parentName:"td"},"number"),"."),(0,s.yg)("td",{parentName:"tr",align:"left"},"y coordinate of the origin of the entire run. Default is 0")),(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:"left"},"font"),(0,s.yg)("td",{parentName:"tr",align:"left"},(0,s.yg)("inlineCode",{parentName:"td"},"SkFont")),(0,s.yg)("td",{parentName:"tr",align:"left"},"Font to use")))),(0,s.yg)("h2",{id:"draw-text-vertically"},"Draw text vertically"),(0,s.yg)("div",{className:"shiki-twoslash-fragment"},(0,s.yg)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,s.yg)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,s.yg)("div",{parentName:"pre",className:"code-container"},(0,s.yg)("code",{parentName:"div"},(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FunctionComponent<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,s.yg)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.yg)("data-lsp",{parentName:"span",lsp:'(alias) const Glyphs: ({ x, y, ...props }: SkiaDefaultProps<GlyphsProps, "x" | "y">) => React.JSX.Element\nimport Glyphs'},"Glyphs")),(0,s.yg)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) const vec: (x?: number, y?: number) => SkPoint\nimport vec"},"vec")),(0,s.yg)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) const useFont: (font: DataSourceParam, size?: number, onError?: ((err: Error) => void) | undefined) => SkFont | null\nimport useFont"},"useFont"),"} "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#22863A"}},'"@shopify/react-native-skia"'),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,s.yg)("div",{parentName:"code",className:"line"},"\xa0"),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"export"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"const HelloWorld: () => React.JSX.Element | null"},"HelloWorld")),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"const fontSize: 32"},"fontSize")),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#1976D2"}},"32"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"const font: SkFont | null"},"font")),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) useFont(font: DataSourceParam, size?: number, onError?: ((err: Error) => void) | undefined): SkFont | null\nimport useFont"},"useFont")),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,s.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"var require: NodeRequire\n(id: string) => any"},"require")),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,s.yg)("span",{parentName:"div",style:{color:"#22863A"}},'"./my-font.otf"'),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},")"),(0,s.yg)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.yg)("data-lsp",{parentName:"span",lsp:"const fontSize: 32"},"fontSize"),");")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"if"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," (",(0,s.yg)("data-lsp",{parentName:"span",lsp:"const font: SkFont | null"},"font")," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"==="),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#1976D2"}},"null"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},") {")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#1976D2"}},"null"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"  }")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"const glyphs: {\n    id: number;\n    pos: SkPoint;\n}[]"},"glyphs")),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.yg)("data-lsp",{parentName:"span",lsp:"const font: SkFont"},"font"))),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,s.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},".",(0,s.yg)("data-lsp",{parentName:"span",lsp:"(method) SkFont.getGlyphIDs(str: string, numCodePoints?: number | undefined): number[]"},"getGlyphIDs")),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,s.yg)("span",{parentName:"div",style:{color:"#22863A"}},'"Hello World!"'),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},")")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,s.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},".",(0,s.yg)("data-lsp",{parentName:"span",lsp:"(method) Array<number>.map<{\n    id: number;\n    pos: SkPoint;\n}>(callbackfn: (value: number, index: number, array: number[]) => {\n    id: number;\n    pos: SkPoint;\n}, thisArg?: any): {\n    id: number;\n    pos: SkPoint;\n}[]"},"map")),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"((",(0,s.yg)("data-lsp",{parentName:"span",lsp:"(parameter) id: number"},"id")),(0,s.yg)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.yg)("data-lsp",{parentName:"span",lsp:"(parameter) i: number"},"i"),") "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," ({ ",(0,s.yg)("data-lsp",{parentName:"span",lsp:"(property) id: number"},"id")),(0,s.yg)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.yg)("data-lsp",{parentName:"span",lsp:"(property) pos: SkPoint"},"pos")),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) vec(x?: number, y?: number | undefined): SkPoint\nimport vec"},"vec")),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,s.yg)("span",{parentName:"div",style:{color:"#1976D2"}},"0"),(0,s.yg)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," (",(0,s.yg)("data-lsp",{parentName:"span",lsp:"(parameter) i: number"},"i")," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"+"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#1976D2"}},"1"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},") "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"*"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.yg)("data-lsp",{parentName:"span",lsp:"const fontSize: 32"},"fontSize"),") }));")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <"),(0,s.yg)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FunctionComponent<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(property) ViewProps.style?: StyleProp<ViewStyle>"},"style")),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"{{ ",(0,s.yg)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,s.yg)("span",{parentName:"div",style:{color:"#1976D2"}},"1"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," }}>")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,s.yg)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:'(alias) const Glyphs: ({ x, y, ...props }: SkiaDefaultProps<GlyphsProps, "x" | "y">) => React.JSX.Element\nimport Glyphs'},"Glyphs"))),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,s.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(property) font: AnimatedProp<SkFont | null>"},"font")),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,s.yg)("data-lsp",{parentName:"span",lsp:"const font: SkFont"},"font"),"}")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,s.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(property) glyphs: AnimatedProp<Glyph[]>"},"glyphs")),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,s.yg)("data-lsp",{parentName:"span",lsp:"const glyphs: {\n    id: number;\n    pos: SkPoint;\n}[]"},"glyphs"),"}")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"      />")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </"),(0,s.yg)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FunctionComponent<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"  );")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"}"))))),(0,s.yg)("pre",{parentName:"div",className:"shiki nord twoslash lsp",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,s.yg)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,s.yg)("div",{parentName:"pre",className:"code-container"},(0,s.yg)("code",{parentName:"div"},(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"import"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FunctionComponent<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:'(alias) const Glyphs: ({ x, y, ...props }: SkiaDefaultProps<GlyphsProps, "x" | "y">) => React.JSX.Element\nimport Glyphs'},"Glyphs")),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) const vec: (x?: number, y?: number) => SkPoint\nimport vec"},"vec")),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) const useFont: (font: DataSourceParam, size?: number, onError?: ((err: Error) => void) | undefined) => SkFont | null\nimport useFont"},"useFont")),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"from"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.yg)("span",{parentName:"div",style:{color:"#A3BE8C"}},"@shopify/react-native-skia"),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.yg)("div",{parentName:"code",className:"line"},"\xa0"),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"export"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"const HelloWorld: () => React.JSX.Element | null"},"HelloWorld")),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"()"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"const fontSize: 32"},"fontSize")),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#B48EAD"}},"32"),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"const font: SkFont | null"},"font")),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) useFont(font: DataSourceParam, size?: number, onError?: ((err: Error) => void) | undefined): SkFont | null\nimport useFont"},"useFont")),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,s.yg)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"var require: NodeRequire\n(id: string) => any"},"require")),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.yg)("span",{parentName:"div",style:{color:"#A3BE8C"}},"./my-font.otf"),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"const fontSize: 32"},"fontSize")),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"if"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ("),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"const font: SkFont | null"},"font")),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"==="),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"null"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},") "),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"return"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"null;")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"const glyphs: {\n    id: number;\n    pos: SkPoint;\n}[]"},"glyphs")),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"const font: SkFont"},"font"))),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,s.yg)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(method) SkFont.getGlyphIDs(str: string, numCodePoints?: number | undefined): number[]"},"getGlyphIDs")),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.yg)("span",{parentName:"div",style:{color:"#A3BE8C"}},"Hello World!"),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,s.yg)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(method) Array<number>.map<{\n    id: number;\n    pos: SkPoint;\n}>(callbackfn: (value: number, index: number, array: number[]) => {\n    id: number;\n    pos: SkPoint;\n}, thisArg?: any): {\n    id: number;\n    pos: SkPoint;\n}[]"},"map")),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"("),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(parameter) id: number"},"id")),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(parameter) i: number"},"i")),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},")"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ("),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(property) id: number"},"id")),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(property) pos: SkPoint"},"pos")),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) vec(x?: number, y?: number | undefined): SkPoint\nimport vec"},"vec")),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,s.yg)("span",{parentName:"div",style:{color:"#B48EAD"}},"0"),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ("),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(parameter) i: number"},"i")),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"+"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#B48EAD"}},"1"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},") "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"*"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"const fontSize: 32"},"fontSize")),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},") "),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"))"),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"return"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," (")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,s.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FunctionComponent<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(property) ViewProps.style?: StyleProp<ViewStyle>"},"style")),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.yg)("span",{parentName:"div",style:{color:"#B48EAD"}},"1"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"}>")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,s.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:'(alias) const Glyphs: ({ x, y, ...props }: SkiaDefaultProps<GlyphsProps, "x" | "y">) => React.JSX.Element\nimport Glyphs'},"Glyphs"))),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,s.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(property) font: AnimatedProp<SkFont | null>"},"font")),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"const font: SkFont"},"font")),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,s.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(property) glyphs: AnimatedProp<Glyph[]>"},"glyphs")),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"const glyphs: {\n    id: number;\n    pos: SkPoint;\n}[]"},"glyphs")),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,s.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FunctionComponent<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  )"),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")))))),(0,s.yg)("img",{src:n(3748).c,width:"256",height:"256"}))}d.isMDXComponent=!0},3748:(e,a,n)=>{n.d(a,{c:()=>t});const t=n.p+"assets/images/hello-world-vertical-7e5428aaf04726357f290b09e2a8c19c.png"}}]);