/*! For license information please see 06_rounded-mdx.f0ef686f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkpern=self.webpackChunkpern||[]).push([[280],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/06_rounded.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_lib_typography__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./lib/typography.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",a:"a"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{title:"スタイル/06. 角丸"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:`${_lib_typography__WEBPACK_IMPORTED_MODULE_2__.U.variable}`,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.E$,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"font-sans text-on-surface",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"角丸",children:"角丸"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"角丸は、ボタンやカードなど特定のコンポーネントに適用する事によって画面の中で視覚的な違いを生み出し、\nコンポーネントの理解や特定のコンテンツを認知させる事が出来ます。"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"コンポーネントの短辺に合せて角丸を調整します。"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"例",children:"例"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex gap-8 items-end",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-surface-container aspect-[5/7] flex items-center justify-center h-[56px] rounded-md",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"text-xs font-bold ",children:"md"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-surface-container aspect-[5/7] flex items-center justify-center h-[112px] rounded-xl",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"text-base font-bold ",children:"xl"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-surface-container aspect-[5/7] flex items-center justify-center h-[168px] rounded-2xl",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"text-lg font-bold ",children:"2xl"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-surface-container aspect-[5/7] flex items-center justify-center h-[220px] rounded-full",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"text-lg font-bold ",children:"full"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"仕様",children:"仕様"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"デザイントークン",children:"デザイントークン"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["以下の",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://tailwindcss.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Tailwind CSS"}),"標準ユーティリティクラスを、コンポーネントに応じて使い分けます。"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"grid gap-4 grid-cols-12 bg-surface text-on-surface my-8 items-center p-4 rounded-md border border-outline-variant",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"col-span-4 px-2 text-on-surface",children:"分類"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"col-span-4 px-2 text-on-surface",children:"トークン"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"col-span-4 px-2 text-on-surface",children:"サイズ"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("hr",{className:"col-span-12 border border-outline"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"col-span-4 py-2 px-2 text-on-surface",children:"borderRadius"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"col-span-4 py-2 px-2 text-on-surface-variant",children:["rounded-sm ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("sup",{children:"※"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"col-span-4 py-2 px-2 text-on-surface",children:"2px"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("hr",{className:"col-start-5 col-span-8 border border-outline"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"col-start-5 col-span-4 py-2 px-2 text-on-surface",children:["rounded ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("sup",{children:"※"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"col-span-4 py-2 px-2 text-on-surface",children:"4px"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("hr",{className:"col-start-5 col-span-8 border border-outline"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"col-start-5 col-span-4 py-2 px-2 text-on-surface-variant",children:["rounded-md ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("sup",{children:"※"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"col-span-4 py-2 px-2 text-on-surface",children:"6px"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("hr",{className:"col-start-5 col-span-8 border border-outline"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"col-start-5 col-span-4 py-2 px-2 text-on-surface-variant",children:["rounded-lg ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("sup",{children:"※"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"col-span-4 py-2 px-2 text-on-surface",children:"8px"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("hr",{className:"col-start-5 col-span-8 border border-outline"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"col-start-5 col-span-4 py-2 px-2 text-on-surface-variant",children:["rounded-xl ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("sup",{children:"※"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"col-span-4 py-2 px-2 text-on-surface",children:"12px"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("hr",{className:"col-start-5 col-span-8 border border-outline"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"col-start-5 col-span-4 py-2 px-2 text-on-surface-variant",children:["rounded-2xl ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("sup",{children:"※"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"col-span-4 py-2 px-2 text-on-surface",children:"16px"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("hr",{className:"col-start-5 col-span-8 border border-outline"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"col-start-5 col-span-4 py-2 px-2 text-on-surface-variant",children:["rounded-3xl ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("sup",{children:"※"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"col-span-4 py-2 px-2 text-on-surface",children:"24px"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("hr",{className:"col-start-5 col-span-8 border border-outline"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"col-start-5 col-span-4 py-2 px-2 text-on-surface-variant",children:["rounded-full ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("sup",{children:"※"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"col-span-4 py-2 px-2 text-on-surface",children:"9999px"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("hr",{className:"col-start-5 col-span-8 border border-outline"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul",{className:"comment",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:["※ ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://tailwindcss.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Tailwind CSS"}),"標準のユーティリティクラス"]})})]})})})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);