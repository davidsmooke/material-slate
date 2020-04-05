(this["webpackJsonp@unicef/material-slate-example"]=this["webpackJsonp@unicef/material-slate-example"]||[]).push([[0],{16:function(e,t,n){"use strict";function r(e){return e&&"object"===typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var a=n(7),o=n(259),l=n(260),i=r(n(249)),c=n(0),u=r(c),d=r(n(61)),s=n(100),m=n(257),f=r(n(49)),p=r(n(94)),v=r(n(54)),h=r(n(14)),b=r(n(77)),E=r(n(95)),y=r(n(96)),g=r(n(97)),k=r(n(98)),w=r(n(99)),x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},S=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{!r&&i.return&&i.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},O=x({},a.Editor),M=function(e){return e.isSelectionExpanded=function(){return!!e.selection&&a.Range.isExpanded(e.selection)},e.isSelectionCollapsed=function(){return!e.isSelectionExpanded()},e.isFocused=function(){return null===e.selection},e.unwrapNode=function(t){a.Transforms.unwrapNodes(e,{match:function(e){return e.type===t}})},e.isNodeTypeActive=function(t){var n=O.nodes(e,{match:function(e){return e.type===t}});return!!S(n,1)[0]},e.rememberedSelection={},e.rememberCurrentSelection=function(){e.rememberedSelection=e.selection},e.isCollapsed=function(){var t=e.selection;return console.log("selection",t),t&&a.Range.isCollapsed(t)},e.wrapNode=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e.selection=n||e.selection,e.isNodeTypeActive(t.type)&&e.unwrapNode(t.type),console.log(e.selection),console.log("isLocation",a.Location.isLocation(e.selection)),e.isCollapsed()?(console.log("is collapsed insertNodes"),a.Transforms.insertNodes(e,t)):(a.Transforms.wrapNodes(e,t,{split:!0}),console.log("editor",e.children),a.Transforms.collapse(e,{edge:"end"}))},e.syncExternalNodes=function(t,n){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=n.map((function(e){return e.id}));r?e.unwrapNotInList(t,o):e.removeNotInList(t,o);var l={};n.forEach((function(e){return l[e.id]=e}));var i=e.findNodesByType(t);i.map((function(t){a.Transforms.setNodes(e,{data:l[t.id]},{match:function(e){return e.id==t.id},at:[]})}))},e.removeNotInList=function(t,n){a.Transforms.removeNodes(e,{match:function(e){return e.type===t&&!n.includes(e.id)},at:[]})},e.unwrapNotInList=function(t,n){a.Transforms.unwrapNodes(e,{match:function(e){return e.type===t&&!n.includes(e.id)},at:[]})},e.findNodesByType=function(t){var n=O.nodes(e,{match:function(e){return e.type===t},at:[]}),r=Array.from(n).map((function(e){return e[0]}));return console.log("fondNodesByType ",r),r},e},j=function(e){return e.isMarkActive=function(t){var n=O.marks(e);return!!n&&!0===n[t]},e.toggleMark=function(t){e.isMarkActive(t)?O.removeMark(e,t):O.addMark(e,t,!0)},e},N=function(e){return e.LIST_TYPES=["numbered-list","bulleted-list"],e.isBlockActive=function(t){var n=O.nodes(e,{match:function(e){return e.type===t}});return!!S(n,1)[0]},e.toggleBlock=function(t){var n=e.isBlockActive(t),r=e.LIST_TYPES.includes(t);if(a.Transforms.unwrapNodes(e,{match:function(t){return e.LIST_TYPES.includes(t.type)},split:!0}),a.Transforms.setNodes(e,{type:n?"paragraph":r?"list-item":t}),!n&&r){var o={type:t,children:[]};a.Transforms.wrapNodes(e,o)}},e},B=function(e){var t=e.isInline;return e.isInline=function(e){return"comment"===e.type||t(e)},e.addComment=function(t,n){var r={id:t,type:"comment",children:[],data:n};e.wrapNode(r,e.selection||e.rememberedSelection)},e.syncComments=function(t){e.syncExternalNodes("comment",t)},e},H=function(e){var t=e.isInline,n=e.isVoid;return e.isInline=function(e){return"endnote"===e.type||t(e)},e.isVoid=function(e){return"endnote"===e.type||n(e)},e.addEndnote=function(t,n){var r={id:t,type:"endnote",children:[{text:""}],data:n};return e.wrapNode(r,e.selection||e.rememberedSelection),r},e.previousEndnoteNode=function(t){var n=null,r=e.findNodesByType("endnote"),a=!0,o=!1,l=void 0;try{for(var i,c=r[Symbol.iterator]();!(a=(i=c.next()).done);a=!0){var u=i.value;if(u.id===t)break;n=u}}catch(d){o=!0,l=d}finally{try{!a&&c.return&&c.return()}finally{if(o)throw l}}return n},e.syncEndnotes=function(t){e.syncExternalNodes("endnote",t,!1)},e};var T=s.makeStyles((function(e){return{root:{border:"1px solid"}}}));function A(e){var t=e.value,n=e.editor,r=e.onChange,a=e.children,l=(e.className,T());return u.createElement(o.Slate,{value:t,editor:n,onChange:function(e){return r(e)}},u.createElement(d,{className:l.root,borderRadius:"borderRadius"},a))}function L(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function R(e,t){return e(t={exports:{}},t.exports),t.exports}A.propTypes={editor:i.object.isRequired,value:i.arrayOf(i.object).isRequired,onChange:i.func};var _=R((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});for(var n="undefined"!=typeof window&&/Mac|iPod|iPhone|iPad/.test(window.navigator.platform),r={alt:"altKey",control:"ctrlKey",meta:"metaKey",shift:"shiftKey"},a={add:"+",break:"pause",cmd:"meta",command:"meta",ctl:"control",ctrl:"control",del:"delete",down:"arrowdown",esc:"escape",ins:"insert",left:"arrowleft",mod:n?"meta":"control",opt:"alt",option:"alt",return:"enter",right:"arrowright",space:" ",spacebar:" ",up:"arrowup",win:"meta",windows:"meta"},o={backspace:8,tab:9,enter:13,shift:16,control:17,alt:18,pause:19,capslock:20,escape:27," ":32,pageup:33,pagedown:34,end:35,home:36,arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,insert:45,delete:46,meta:91,numlock:144,scrolllock:145,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},l=1;l<20;l++)o["f"+l]=111+l;function i(e,t,n){t&&!("byKey"in t)&&(n=t,t=null),Array.isArray(e)||(e=[e]);var r=e.map((function(e){return c(e,t)})),a=function(e){return r.some((function(t){return u(t,e)}))};return null==n?a:a(n)}function c(e,t){var n=t&&t.byKey,a={},o=(e=e.replace("++","+add")).split("+"),l=o.length;for(var i in r)a[r[i]]=!1;var c=!0,u=!1,m=void 0;try{for(var f,p=o[Symbol.iterator]();!(c=(f=p.next()).done);c=!0){var v=f.value,h=v.endsWith("?")&&v.length>1;h&&(v=v.slice(0,-1));var b=s(v),E=r[b];1!==l&&E||(n?a.key=b:a.which=d(v)),E&&(a[E]=!h||null)}}catch(y){u=!0,m=y}finally{try{!c&&p.return&&p.return()}finally{if(u)throw m}}return a}function u(e,t){for(var n in e){var r=e[n],a=void 0;if(null!=r&&((null!=(a="key"===n&&null!=t.key?t.key.toLowerCase():"which"===n?91===r&&93===t.which?91:t.which:t[n])||!1!==r)&&a!==r))return!1}return!0}function d(e){return e=s(e),o[e]||e.toUpperCase().charCodeAt(0)}function s(e){return e=e.toLowerCase(),e=a[e]||e}t.default=i,t.isHotkey=i,t.isCodeHotkey=function(e,t){return i(e,t)},t.isKeyHotkey=function(e,t){return i(e,{byKey:!0},t)},t.parseHotkey=c,t.compareHotkey=u,t.toKeyCode=d,t.toKeyName=s})),z=L(_),V=(_.isHotkey,_.isCodeHotkey,_.isKeyHotkey,_.parseHotkey,_.compareHotkey,_.toKeyCode,_.toKeyName,s.makeStyles((function(e){return{root:{paddingLeft:e.spacing(1),paddingRight:e.spacing(1),paddingBottom:e.spacing(1),fontFamily:e.typography.fontFamily}}})));function P(e){var t=e.renderElement,n=e.renderLeaf,r=e.placeholder,l=e.hotkeys,i=e.onHotkey,s=e.children,m=o.useSlate(),f=x({},{"mod+b":{type:"mark",value:"bold"},"mod+i":{type:"mark",value:"italic"},"mod+u":{type:"mark",value:"underlined"},"mod+`":{type:"mark",value:"code"},"shift+enter":{type:"newline",value:""}},l),p=V(),v=c.useCallback((function(e){var n=e.element,r=e.children,a=e.attributes,o=C(e,["element","children","attributes"]);switch(n.type){case"block-quote":return u.createElement("blockquote",a,r);case"bulleted-list":return u.createElement("ul",a,r);case"heading-one":return u.createElement("h1",a,r);case"heading-two":return u.createElement("h2",a,r);case"list-item":return u.createElement("li",a,r);case"numbered-list":return u.createElement("ol",a,r);default:return t({element:n,attributes:a,children:r,rest:o})}}),[]),h=c.useCallback((function(e){var t=e.leaf,r=e.attributes,a=e.children,o=C(e,["leaf","attributes","children"]);return t.bold&&(a=u.createElement("strong",null,a)),t.code&&(a=u.createElement("code",null,a)),t.italic&&(a=u.createElement("em",null,a)),t.strikethrough&&(a=u.createElement("del",null,a)),t.underlined&&(a=u.createElement("u",null,a)),n({leaf:t,attributes:r,children:a,rest:o})}),[]);return u.createElement(d,{className:p.root},u.createElement(o.Editable,{renderElement:v,renderLeaf:h,onKeyDown:function(e){return function(e){for(var t in f)if(z(t,e)){var n=f[t];return e.preventDefault(),"mark"===n.type&&m.toggleMark(n.value),"block"===n.type&&m.toggleBlock(n.value),"newline"===n.type&&(m.insertText("\n"),a.Transforms.move(m,{distance:0,unit:"offset"})),i&&i({event:e,editor:m,hotkey:n,pressedKeys:t,allHotkeys:f})}}(e)},placeholder:r},s))}P.defaultProps={renderElement:function(e){e.element;var t=e.attributes,n=e.children;C(e,["element","attributes","children"]);return u.createElement("p",t,n)},renderLeaf:function(e){e.leaf;var t=e.attributes,n=e.children;C(e,["leaf","attributes","children"]);return u.createElement("span",t,n)},placeholder:"Type some text..."},P.propTypes={renderElement:i.func,renderLeaf:i.func,placeholder:i.string,hotkeys:i.object,onHotKey:i.func};var I=R((function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}}}));L(I);var q=R((function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t.apply(this,arguments)}e.exports=t})),D=R((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var o=r.default.memo(r.default.forwardRef((function(t,o){return r.default.createElement(a.default,(0,n.default)({ref:o},t),e)})));0;return o.muiName=a.default.muiName,o};var n=I(q),r=I(u),a=I(v)}));L(D);var F=L(R((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=I(u),r=(0,I(D).default)(n.default.createElement("path",{d:"M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H6V6h12v12z"}),"CropSquareOutlined");t.default=r}))),K=u.forwardRef((function(e,t){var n=e.tooltip,r=e.placement,a=e.icon,l=e.type,i=e.disabled,c=e.disableOnSelection,d=e.disableOnCollapse,s=e.format,m=e.onMouseDown,v=e.isActive,h=C(e,["tooltip","placement","icon","type","disabled","disableOnSelection","disableOnCollapse","format","onMouseDown","isActive"]),b=o.useSlate(),E=function(){return(s.charAt(0).toUpperCase()+s.substring(1)).replace("-"," ")},y=function(e){switch(e.preventDefault(),l){case"mark":b.toggleMark(s);break;case"block":b.toggleBlock(s)}m&&m({editor:b,format:s,type:l,event:e})};return u.createElement(p,{title:n||E(),placement:r},u.createElement(f,x({"aria-label":n||E(),ref:t,color:function(){if(v)return v();switch(l){case"mark":return b.isMarkActive(s);case"block":return b.isBlockActive(s)}}()?"secondary":"default",onMouseDown:function(e){return y(e)},disabled:i||function(){var e=!1;return e=!!c&&b.isSelectionExpanded(),e=d?b.isSelectionCollapsed():e}()},h),a))}));K.defaultProps={placement:"top",icon:u.createElement(F,null),disableOnCollapse:!1,disableOnSelection:!1},K.propTypes={tooltip:i.string,placement:i.string,type:i.string,format:i.string.isRequired,isActive:i.func,disabled:i.bool,disableOnSelection:i.bool,disableOnCollapse:i.bool,icon:i.object,onMouseDown:i.func};var W=L(R((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=I(u),r=(0,I(D).default)(n.default.createElement("path",{d:"M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"}),"FormatBold");t.default=r}))),U=u.forwardRef((function(e,t){return u.createElement(K,x({icon:u.createElement(W,null),type:"mark",format:"bold",ref:t},e))})),Y=L(R((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=I(u),r=(0,I(D).default)(n.default.createElement("path",{d:"M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z"}),"FormatItalicOutlined");t.default=r}))),J=u.forwardRef((function(e,t){return u.createElement(K,x({icon:u.createElement(Y,null),type:"mark",format:"italic",ref:t},e))})),G=L(R((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=I(u),r=(0,I(D).default)(n.default.createElement("path",{d:"M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"}),"FormatUnderlined");t.default=r}))),X=u.forwardRef((function(e,t){return u.createElement(K,x({icon:u.createElement(G,null),type:"mark",format:"underlined",ref:t},e))})),$=L(R((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=I(u),r=(0,I(D).default)(n.default.createElement("path",{d:"M6.85 7.08C6.85 4.37 9.45 3 12.24 3c1.64 0 3 .49 3.9 1.28.77.65 1.46 1.73 1.46 3.24h-3.01c0-.31-.05-.59-.15-.85-.29-.86-1.2-1.28-2.25-1.28-1.86 0-2.34 1.02-2.34 1.7 0 .48.25.88.74 1.21.38.25.77.48 1.41.7H7.39c-.21-.34-.54-.89-.54-1.92zM21 12v-2H3v2h9.62c1.15.45 1.96.75 1.96 1.97 0 1-.81 1.67-2.28 1.67-1.54 0-2.93-.54-2.93-2.51H6.4c0 .55.08 1.13.24 1.58.81 2.29 3.29 3.3 5.67 3.3 2.27 0 5.3-.89 5.3-4.05 0-.3-.01-1.16-.48-1.94H21V12z"}),"StrikethroughS");t.default=r}))),Q=u.forwardRef((function(e,t){return u.createElement(K,x({icon:u.createElement($,null),type:"mark",format:"strikethrough",ref:t},e))})),Z=L(R((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=I(u),r=(0,I(D).default)(n.default.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}),"Code");t.default=r}))),ee=u.forwardRef((function(e,t){return u.createElement(K,x({icon:u.createElement(Z,null),type:"mark",format:"code",ref:t},e))})),te=L(R((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=I(u),r=(0,I(D).default)(n.default.createElement("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"}),"FormatListBulleted");t.default=r}))),ne=u.forwardRef((function(e,t){return u.createElement(K,x({icon:u.createElement(te,null),type:"block",format:"bulleted-list",ref:t},e))})),re=L(R((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=I(u),r=(0,I(D).default)(n.default.createElement("path",{d:"M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"}),"FormatListNumbered");t.default=r}))),ae=u.forwardRef((function(e,t){return u.createElement(K,x({icon:u.createElement(re,null),type:"block",format:"numbered-list",ref:t},e))})),oe=s.makeStyles((function(e){return{toolbar:{backgroundColor:e.palette.grey[200],padding:e.spacing(1/4)}}}));var le=function(e){var t=e.children;return h.createPortal(t,document.body)},ie=s.makeStyles((function(e){return{hoveringToolbar:{position:"absolute",padding:e.spacing(1/4),zIndex:1,top:"-10000px",left:"-10000px",opacity:0,backgroundColor:e.palette.grey[200],transition:"opacity 0.75s"}}}));function ce(e){var t=e.open,n=e.title,r=e.label,a=e.format,o=e.defaultValue,l=e.onCancel,i=e.onSave,d=C(e,["open","title","label","format","defaultValue","onCancel","onSave"]),s=c.useState(o),m=S(s,2),f=m[0],p=m[1],v=function(e){l(),p(o)};return u.createElement(y,{open:t,onClose:v,"aria-labelledby":"dialog-title","aria-describedby":"alert-dialog-description",fullWidth:!0,maxWidth:d.maxWidth?d.maxWidth:"xs"},u.createElement(g,{id:"dialog-title"},n),u.createElement(k,null,u.createElement(E,{fullWidth:!0,multiline:!0,autoFocus:!0,defaultValue:o,label:r,variant:"outlined",onChange:function(e){return p(e.target.value)},required:!0})),u.createElement(w,null,u.createElement(b,{onClick:function(){return v()},color:"primary",variant:"outlined"},"Cancel"),u.createElement(b,{onClick:function(e){return i({format:a,value:f}),void p(o)},color:"primary",variant:"contained"},"Save")))}ce.propTypes={open:i.bool.isRequired,onCancel:i.func.isRequired,onSave:i.func.isRequired,title:i.string,label:i.string,format:i.string,defaultValue:i.string};var ue=L(R((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=I(u),r=(0,I(D).default)(n.default.createElement("path",{d:"M22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4zm-2 13.17L18.83 16H4V4h16v13.17zM13 5h-2v4H7v2h4v4h2v-4h4V9h-4z"}),"AddCommentOutlined");t.default=r}))),de=u.forwardRef((function(e,t){return u.createElement(K,x({icon:u.createElement(ue,null),type:"other",disableOnCollapse:!0,tooltip:"Add comment",format:"comment",ref:t},e))})),se=L(R((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=I(u),r=(0,I(D).default)(n.default.createElement("path",{d:"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 15h14v3H5z"}),"CallToActionOutlined");t.default=r}))),me=u.forwardRef((function(e,t){return u.createElement(K,x({icon:u.createElement(se,null),type:"other",disableOnSelection:!0,tooltip:"Add endnote",format:"endnote",ref:t},e))})),fe=s.makeStyles((function(e){return{root:{backgroundColor:"#e1f5fe",cursor:"pointer"}}})),pe=s.makeStyles((function(e){return{root:{cursor:"pointer"}}}));console.log("MaterialEditor: production mode"),t.AddCommentButton=de,t.BoldButton=U,t.BulletedListButton=ne,t.ButtonSeparator=function(e){var t=e.borderColor,n=C(e,["borderColor"]);return s.useTheme(),u.createElement(d,x({display:"inline"},n),u.createElement(d,{borderLeft:1,borderColor:t||"grey.400",marginLeft:"2px",marginRight:"2px",display:"inline"}))},t.CodeButton=ee,t.CommentElement=function(e){var t=e.element,n=e.onClick,r=e.children,a=e.attributes,o=fe();return u.createElement(p,{title:"Comment: "+t.data.body},u.createElement("span",x({className:o.root},a,{onClick:function(e){return n&&n({event:e,element:t})}}),r))},t.EndnoteButton=me,t.EndnoteElement=function(e){var t=e.element,n=e.onClick,r=e.attributes,a=e.children,o=pe();return u.createElement(p,{placement:"top",title:""+t.data.body},u.createElement("sup",x({className:o.root},r,{onClick:function(e){return n&&n({event:e,element:t})}}),t.data.index||"x",a))},t.HoveringToolbar=function(e){var t=e.children,n=e.className,r=C(e,["children","className"]),l=ie(),i=c.useRef(),s=o.useSlate();return c.useEffect((function(){var e=i.current,t=s.selection;if(e)if(t&&o.ReactEditor.isFocused(s)&&!a.Range.isCollapsed(t)&&""!==a.Editor.string(s,t)){var n=window.getSelection().getRangeAt(0).getBoundingClientRect();e.style.opacity=1,e.style.top=n.top+window.pageYOffset-e.offsetHeight-4+"px",e.style.left=n.left+window.pageXOffset-e.offsetWidth/2+n.width/2+"px"}else e.removeAttribute("style")})),u.createElement(le,null,u.createElement(d,x({borderRadius:"borderRadius",ref:i,className:n||l.hoveringToolbar},r),!t&&u.createElement(u.Fragment,null,u.createElement(U,null),u.createElement(J,null),u.createElement(X,null),u.createElement(Q,null),u.createElement(ee,null)),t&&t))},t.ItalicButton=J,t.MaterialEditable=P,t.MaterialEditor=O,t.MaterialSlate=A,t.NumberedListButton=ae,t.SimpleDialog=ce,t.StrikethroughButton=Q,t.Toolbar=function(e){var t=e.children,n=(e.className,C(e,["children","className"])),r=oe();return u.createElement(m.Box,x({className:r.toolbar,borderRadius:"borderRadius"},n),!t&&u.createElement(u.Fragment,null,u.createElement(U,null),u.createElement(J,null),u.createElement(X,null),u.createElement(Q,null),u.createElement(ee,null),u.createElement(ne,null),u.createElement(ae,null)),t&&u.createElement(u.Fragment,null,t))},t.ToolbarButton=K,t.UnderlinedButton=X,t.createMaterialEditor=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=H(B(N(j(M(l.withHistory(o.withReact(a.createEditor())))))));return t.editorId=e,t}},239:function(e,t,n){e.exports=n(258)},258:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(14),l=n.n(o),i=n(209),c=n(83),u=n(141),d=n(6),s=n(16),m=[{type:"paragraph",children:[{text:"Basic example. This is editable "},{text:"rich",bold:!0},{text:" text, "},{text:"much",italic:!0},{text:" better than a "},{text:"<textarea>",code:!0},{text:"!"}]},{type:"paragraph",children:[{text:"Since it's rich text, you can do things like turn a selection of text "},{text:"bold",bold:!0},{text:", or add a semantically rendered block quote in the middle of the page, like this:"}]},{type:"block-quote",children:[{text:"A wise quote."}]}];function f(){var e=Object(r.useState)(m),t=Object(d.a)(e,2),n=t[0],o=t[1],l=Object(r.useMemo)((function(){return Object(s.createMaterialEditor)()}),[]);return a.a.createElement(s.MaterialSlate,{editor:l,value:n,onChange:function(e){return o(e)}},a.a.createElement(s.Toolbar,null),a.a.createElement(s.MaterialEditable,null))}var p=[{type:"paragraph",children:[{text:"Basic example. This is editable "},{text:"rich",bold:!0},{text:" text, "},{text:"much",italic:!0},{text:" better than a "},{text:"<textarea>",code:!0},{text:"!"}]},{type:"paragraph",children:[{text:"Since it's rich text, you can do things like turn a selection of text "},{text:"bold",bold:!0},{text:", or add a semantically rendered block quote in the middle of the page, like this:"}]},{type:"block-quote",children:[{text:"A wise quote."}]}];function v(){var e=Object(r.useState)(p),t=Object(d.a)(e,2),n=t[0],o=t[1],l=Object(r.useMemo)((function(){return Object(s.createMaterialEditor)()}),[]);return a.a.createElement(s.MaterialSlate,{editor:l,value:n,onChange:function(e){return o(e)}},a.a.createElement(s.HoveringToolbar,null),a.a.createElement(s.MaterialEditable,null))}var h=n(82),b=n(103),E=n(28),y=n(269),g=n(286),k=n(288),w=n(287),x=n(143),C=n.n(x),S=n(211),O=n(285),M=[{type:"paragraph",children:[{text:"This is editable "},{text:"rich",bold:!0},{text:" text, "},{text:"much",italic:!0},{text:" better than a "},{text:"<textarea>",code:!0},{text:"!"}]},{type:"paragraph",children:[{text:"Since it's rich text, you can do things like turn a selection of text "},{text:"bold",bold:!0},{text:", or add a semantically rendered block quote in the middle of the page, like this:"}]},{type:"block-quote",children:[{text:"A wise quote."}]}];function j(){var e=Object(r.useState)(M),t=Object(d.a)(e,2),n=t[0],o=t[1],l=Object(r.useMemo)((function(){return Object(s.createMaterialEditor)()}),[]),i=Object(r.useState)(!1),m=Object(d.a)(i,2),f=m[0],p=m[1],v=Object(r.useState)(!1),x=Object(d.a)(v,2),j=x[0],N=x[1],B=Object(r.useState)([]),H=Object(d.a)(B,2),T=H[0],A=H[1],L=Object(r.useState)([]),R=Object(d.a)(L,2),_=R[0],z=R[1],V=function(e){e.event,e.type;var t=e.format,n=e.editor;switch(t){case"comment":return n.rememberCurrentSelection(),void p(!0);case"endnote":return n.rememberCurrentSelection(),void N(!0);default:console.log("Add a case for format:",t)}},P=function(){console.log("Dialog cancelled"),p(!1),N(!1)},I=function(e,t){switch(e){case"comment":p(!1),console.log("save Comment:"+t);var n={id:(new Date).getTime(),body:t};return l.addComment(n.id,n),void A([].concat(Object(E.a)(T),[n]));case"endnote":N(!1),console.log("save Endnote:"+t);var r={id:(new Date).getTime(),body:t,index:-1};l.addEndnote(r.id,r);var a=l.previousEndnoteNode(r.id),o=a?_.map((function(e){return e.id})).indexOf(a.id)+1:0,i=Object(E.a)(_);i.splice(o,0,r);var c=i.map((function(e,t){return t+=1,Object(b.a)({},e,{index:t})}));return void z(c);default:console.log("Add a case for format:",e)}};Object(r.useEffect)((function(){console.log("updated comments",T),l.syncComments(T)}),[T,l]),Object(r.useEffect)((function(){console.log("updated endnotes",_),l.syncEndnotes(_)}),[_,l]);var q=Object(r.useCallback)((function(e){var t=e.element,n=e.children,r=e.attributes,o=Object(h.a)(e,["element","children","attributes"]);switch(t.type){case"comment":return a.a.createElement(s.CommentElement,{element:t,attributes:r},n);case"endnote":return a.a.createElement(s.EndnoteElement,{element:t,attributes:r},n);default:return a.a.createElement("p",Object.assign({},r,o),n)}}),[]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(O.a,{container:!0,spacing:3},a.a.createElement(O.a,{item:!0,sm:6},a.a.createElement(s.MaterialSlate,{editor:l,value:n,onChange:function(e){return o(e)},onBlur:function(){return console.log("blur")}},a.a.createElement(s.Toolbar,null,a.a.createElement(s.BoldButton,null),a.a.createElement(s.ItalicButton,null),a.a.createElement(s.UnderlinedButton,null),a.a.createElement(s.StrikethroughButton,null),a.a.createElement(s.CodeButton,null),a.a.createElement(s.ButtonSeparator,null),a.a.createElement(s.BulletedListButton,null),a.a.createElement(s.NumberedListButton,null),a.a.createElement(s.ToolbarButton,{type:"block",format:"blockquote",disabled:!0}),a.a.createElement(s.AddCommentButton,{onMouseDown:function(e){return V(e)}}),a.a.createElement(s.EndnoteButton,{onMouseDown:function(e){return V(e)}})),a.a.createElement(s.HoveringToolbar,null,a.a.createElement(s.BoldButton,null),a.a.createElement(s.ItalicButton,null),a.a.createElement(s.UnderlinedButton,null),a.a.createElement(s.StrikethroughButton,null),a.a.createElement(s.AddCommentButton,{onMouseDown:function(e){return V(e)}})),a.a.createElement(s.MaterialEditable,{renderElement:function(e){return q(e)}})),a.a.createElement(s.SimpleDialog,{open:f,title:"Add comment",label:"Comment",defaultValue:"",format:"comment",onCancel:function(){return P()},onSave:function(e){var t=e.format,n=e.value;return I(t,n)}}),a.a.createElement(s.SimpleDialog,{open:j,title:"Add endnote",label:"Endnote",defaultValue:"",format:"endnote",onCancel:function(){return P()},onSave:function(e){var t=e.format,n=e.value;return I(t,n)}})),a.a.createElement(O.a,null,a.a.createElement(c.a,{variant:"caption"},"External Comments List"),0===T.length?a.a.createElement(c.a,null,"No comments"):a.a.createElement(y.a,{dense:!0},T.map((function(e){return a.a.createElement(g.a,{key:e.id},a.a.createElement(k.a,null,e.body),a.a.createElement(w.a,null,a.a.createElement(S.a,{edge:"end","aria-label":"delete",onClick:function(){return function(e){var t=T.filter((function(t){return t.id!==e}));console.log("deleteComment",t),A(t)}(e.id)}},a.a.createElement(C.a,null))))}))),a.a.createElement(u.a,{marginTop:2},a.a.createElement(c.a,{variant:"caption"},"External Endnotes List"),0===_.length?a.a.createElement(c.a,null,"No endnotes"):a.a.createElement(y.a,{dense:!0},_.map((function(e){return a.a.createElement(g.a,{key:e.id},a.a.createElement(k.a,null,"[",e.index,"] ",e.body),a.a.createElement(w.a,null,a.a.createElement(S.a,{edge:"end","aria-label":"delete",onClick:function(){return function(e){var t=_.filter((function(t){return t.id!==e}));console.log("deleteEndnote",t),z(t)}(e.id)}},a.a.createElement(C.a,null))))})))))))}var N=Object(i.a)((function(e){return{intro:{marginLeft:e.spacing(2),paddingLeft:e.spacing(2)},air:{margin:e.spacing(2),padding:e.spacing(2)},readable:{maxWidth:800}}}));function B(){var e=N();return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,{className:e.intro},a.a.createElement(c.a,{variant:"h1"},"UNICEF Material Slate"),a.a.createElement(c.a,null,"A simple rich text editor for React that uses Material UI and Slate")),a.a.createElement(u.a,{className:e.air},a.a.createElement(c.a,{variant:"h4"},a.a.createElement("a",{href:"https://github.com/unicef/material-slate/"},"View README on Github"))),a.a.createElement(u.a,{className:"".concat(e.air," ").concat(e.readable," ")},a.a.createElement(c.a,{variant:"h2"},"Basic Editor Example"),a.a.createElement("a",{href:"https://github.com/unicef/material-slate/blob/master/example/src/Basic.js"},"View source code"),a.a.createElement(f,null)),a.a.createElement(u.a,{className:"".concat(e.air," ").concat(e.readable," ")},a.a.createElement(c.a,{variant:"h2"},"Hover toolbar"),a.a.createElement(c.a,null,"Toolbar appears on selecting a text"),a.a.createElement("a",{href:"https://github.com/unicef/material-slate/blob/master/example/src/Hovering.js"},"View source code"),a.a.createElement(v,null)),a.a.createElement(u.a,{className:e.air},a.a.createElement(c.a,{variant:"h2"},"Advanced usage "),a.a.createElement("a",{href:"https://github.com/unicef/material-slate/blob/master/example/src/Advanced.js"},"View source code"),a.a.createElement(j,null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[239,1,2]]]);
//# sourceMappingURL=main.3d8f3069.chunk.js.map