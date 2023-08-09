"use strict";(self.webpackChunkpern=self.webpackChunkpern||[]).push([[627,739,338,225],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./stories/33_TextField.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Error:()=>Error,Filled:()=>Filled,Focused:()=>Focused,default:()=>_33_TextField_stories});var _Default$parameters,_Default$parameters2,_Focused$parameters,_Focused$parameters2,_Filled$parameters,_Filled$parameters2,_Error$parameters,_Error$parameters2,_Disabled$parameters,_Disabled$parameters2,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),__jsx=react.createElement;function TextField(_ref){var label=_ref.label,isRequired=_ref.isRequired,description=_ref.description,value=_ref.value,onTextChanged=_ref.onTextChanged,errorMessage=_ref.errorMessage,fieldSize=_ref.fieldSize,_ref$fieldType=_ref.fieldType,fieldType=void 0===_ref$fieldType?"text":_ref$fieldType,className=_ref.className,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,styles={};(fieldSize||0!==fieldSize)&&(styles.width="".concat(fieldSize+2,"rem"));var border_classes=[];return border_classes=errorMessage?["border-2","border-error"]:["border","border-outline"],__jsx("div",{className:"flex flex-col text-on-surface"},label?__jsx("div",{className:"mb-3 flex"},__jsx("label",{className:"txt-label-l mr-2 ".concat(disabled?"text-disabled/60":"")},label),isRequired&&!disabled?__jsx("div",{className:"txt-label-l text-error"},"必須"):null):null,description&&!disabled?__jsx("div",{className:"txt-body-m mb-3 text-on-surface-variant"},description):null,__jsx("input",{className:"inline-block rounded-md p-3 focus:outline-none focus:border-2 focus:border-focused disabled:cursor-not-allowed disabled:border-disabled/50 disabled:bg-disabled/20 ".concat(className," ").concat(border_classes.join(" ")),type:fieldType,maxLength:fieldSize,style:styles,value:disabled?"":value,onChange:onTextChanged,disabled}),errorMessage&&!disabled?__jsx("div",{className:"txt-label-m mt-1 text-error"},errorMessage):null)}TextField.displayName="TextField",TextField.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{fieldType:{defaultValue:{value:'"text"',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};var _33_TextField_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const _33_TextField_stories={title:"コンポーネント/03. テキスト入力",component:TextField,argTypes:{label:{control:"text",description:"テキスト入力項目のラベル"},isRequired:{control:"boolean",description:"必須入力項目であるかの当否"},description:{control:"text",description:"テキスト入力項目の説明"},fieldSize:{control:"number",description:"テキスト入力項目の入力可能文字数"},errorMessage:{control:"text",description:"入力誤りがあった場合のエラーメッセージ"},disabled:{control:"boolean",description:"テキスト入力項目が無効化されているかの当否",table:{type:"boolean"}},fieldType:{control:"radio",description:"テキスト入力項目の入力内容の種類",options:["date","datetime-local","email","month","number","password","search","tel","text","time","url","week"],table:{type:"text"}},value:{control:"text",description:"テキスト入力項目の入力値"},onTextChanged:{action:"changed",description:"入力項目のテキストが変更された時のイベントハンドラー"}}};var useStateWrapper=function useStateWrapper(args){var _useState=(0,react.useState)(args.value||""),value=_useState[0],setValue=_useState[1];return _33_TextField_stories_jsx(TextField,(0,esm_extends.Z)({},args,{value,onTextChanged:function onTextChanged(e){return setValue(e.target.value)}}))};useStateWrapper.displayName="useStateWrapper";var Default={args:{label:"ユーザー名",isRequired:!0,description:"ログイン後に画面に表示されるユーザー名です。",fieldSize:10,errorMessage:""},render:useStateWrapper},Focused={args:{label:"ユーザー名",isRequired:!0,description:"ログイン後に画面に表示されるユーザー名です。",fieldSize:10,errorMessage:""},parameters:{pseudo:{focus:["div.Focused input"]}},render:useStateWrapper},Filled={args:{label:"ユーザー名",isRequired:!0,description:"ログイン後に画面に表示されるユーザー名です。",fieldSize:10,errorMessage:"",value:"テストユーザー"},render:useStateWrapper},Error={args:{label:"ユーザー名",isRequired:!0,description:"ログイン後に画面に表示されるユーザー名です。",fieldSize:10,errorMessage:"登録済みのユーザー名です。別のユーザー名を入力して下さい。",value:"バッドユーザー"},render:useStateWrapper},Disabled={args:{label:"ユーザー名",isRequired:!0,description:"ログイン後に画面に表示されるユーザー名です。",fieldSize:10,errorMessage:"",value:"テストユーザー",disabled:!0},render:useStateWrapper};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    label: "ユーザー名",\n    isRequired: true,\n    description: "ログイン後に画面に表示されるユーザー名です。",\n    fieldSize: 10,\n    errorMessage: ""\n  },\n  render: useStateWrapper\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Focused.parameters=_objectSpread(_objectSpread({},Focused.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Focused$parameters=Focused.parameters)||void 0===_Focused$parameters?void 0:_Focused$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    label: "ユーザー名",\n    isRequired: true,\n    description: "ログイン後に画面に表示されるユーザー名です。",\n    fieldSize: 10,\n    errorMessage: ""\n  },\n  parameters: {\n    pseudo: {\n      focus: ["div.Focused input"]\n    }\n  },\n  render: useStateWrapper\n}'},null===(_Focused$parameters2=Focused.parameters)||void 0===_Focused$parameters2||null===(_Focused$parameters2=_Focused$parameters2.docs)||void 0===_Focused$parameters2?void 0:_Focused$parameters2.source)})}),Filled.parameters=_objectSpread(_objectSpread({},Filled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Filled$parameters=Filled.parameters)||void 0===_Filled$parameters?void 0:_Filled$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    label: "ユーザー名",\n    isRequired: true,\n    description: "ログイン後に画面に表示されるユーザー名です。",\n    fieldSize: 10,\n    errorMessage: "",\n    value: "テストユーザー"\n  },\n  render: useStateWrapper\n}'},null===(_Filled$parameters2=Filled.parameters)||void 0===_Filled$parameters2||null===(_Filled$parameters2=_Filled$parameters2.docs)||void 0===_Filled$parameters2?void 0:_Filled$parameters2.source)})}),Error.parameters=_objectSpread(_objectSpread({},Error.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Error$parameters=Error.parameters)||void 0===_Error$parameters?void 0:_Error$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    label: "ユーザー名",\n    isRequired: true,\n    description: "ログイン後に画面に表示されるユーザー名です。",\n    fieldSize: 10,\n    errorMessage: "登録済みのユーザー名です。別のユーザー名を入力して下さい。",\n    value: "バッドユーザー"\n  },\n  render: useStateWrapper\n}'},null===(_Error$parameters2=Error.parameters)||void 0===_Error$parameters2||null===(_Error$parameters2=_Error$parameters2.docs)||void 0===_Error$parameters2?void 0:_Error$parameters2.source)})}),Disabled.parameters=_objectSpread(_objectSpread({},Disabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Disabled$parameters=Disabled.parameters)||void 0===_Disabled$parameters?void 0:_Disabled$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    label: "ユーザー名",\n    isRequired: true,\n    description: "ログイン後に画面に表示されるユーザー名です。",\n    fieldSize: 10,\n    errorMessage: "",\n    value: "テストユーザー",\n    disabled: true\n  },\n  render: useStateWrapper\n}'},null===(_Disabled$parameters2=Disabled.parameters)||void 0===_Disabled$parameters2||null===(_Disabled$parameters2=_Disabled$parameters2.docs)||void 0===_Disabled$parameters2?void 0:_Disabled$parameters2.source)})})}}]);