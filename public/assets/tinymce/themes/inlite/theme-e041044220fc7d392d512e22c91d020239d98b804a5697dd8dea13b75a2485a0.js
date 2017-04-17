!function(){var t={},n=function(n){for(var e=t[n],o=e.deps,i=e.defn,u=o.length,c=new Array(u),a=0;u>a;++a)c[a]=r(o[a]);var l=i.apply(null,c);if(void 0===l)throw"module ["+n+"] returned undefined";e.instance=l},e=function(n,e,r){if("string"!=typeof n)throw"module id must be a string";if(void 0===e)throw"no dependencies for "+n;if(void 0===r)throw"no definition function for "+n;t[n]={deps:e,defn:r,instance:void 0}},r=function(e){var r=t[e];if(void 0===r)throw"module ["+e+"] was undefined";return void 0===r.instance&&n(e),r.instance},o=function(t,n){for(var e=t.length,o=new Array(e),i=0;e>i;++i)o.push(r(t[i]));n.apply(null,n)},i={};i.bolt={module:{api:{define:e,require:o,demand:r}}};var u=e,c=function(t,n){u(t,[],function(){return n})};c("1",tinymce.ThemeManager),c("2",tinymce.util.Delay),c("c",tinymce.util.Tools),c("d",tinymce.ui.Factory),c("e",tinymce.DOM),u("j",[],function(){var t=function(t){return function(n){return typeof n===t}},n=function(t){return Array.isArray(t)},e=function(t){return null===t},r=function(t){return function(r){return!e(r)&&!n(r)&&t(r)}};return{isString:t("string"),isNumber:t("number"),isBoolean:t("boolean"),isFunction:t("function"),isObject:r(t("object")),isNull:e,isArray:n}}),u("f",["c","d","j"],function(t,n,e){var r=function(t,n){var e=function(t,n){return{selector:t,handler:n}},r=function(t){n.active(t)},o=function(t){n.disabled(t)};return n.settings.stateSelector?e(n.settings.stateSelector,r):n.settings.disabledStateSelector?e(n.settings.disabledStateSelector,o):null},o=function(t,n,e){return function(){var o=r(n,e);null!==o&&t.selection.selectorChanged(o.selector,o.handler)}},i=function(t){return e.isArray(t)?t:e.isString(t)?t.split(/[ ,]/):[]},u=function(e,r,u){var c,a=[];return u?(t.each(i(u),function(t){var r;"|"==t?c=null:n.has(t)?(t={type:t},a.push(t),c=null):e.buttons[t]&&(c||(c={type:"buttongroup",items:[]},a.push(c)),r=t,t=e.buttons[r],"function"==typeof t&&(t=t()),t.type=t.type||"button",t=n.create(t),t.on("postRender",o(e,r,t)),c.items.push(t))}),n.create({type:"toolbar",layout:"flow",name:r,items:a})):void 0};return{create:u}}),c("o",tinymce.util.Promise),u("p",[],function(){var t=0,n=function(){var t=function(){return Math.round(4294967295*Math.random()).toString(36)};return"s"+Date.now().toString(36)+t()+t()+t()},e=function(e){return e+t++ +n()};return{uuid:e}}),u("u",[],function(){var t=function(t,n){function e(e){var o,i,u;i=n[e?"startContainer":"endContainer"],u=n[e?"startOffset":"endOffset"],1==i.nodeType&&(o=t.create("span",{"data-mce-type":"bookmark"}),i.hasChildNodes()?(u=Math.min(u,i.childNodes.length-1),e?i.insertBefore(o,i.childNodes[u]):t.insertAfter(o,i.childNodes[u])):i.appendChild(o),i=o,u=0),r[e?"startContainer":"endContainer"]=i,r[e?"startOffset":"endOffset"]=u}var r={};return e(!0),n.collapsed||e(),r},n=function(t,n){function e(e){function r(t){for(var n=t.parentNode.firstChild,e=0;n;){if(n==t)return e;1==n.nodeType&&"bookmark"==n.getAttribute("data-mce-type")||e++,n=n.nextSibling}return-1}var o,i,u;o=u=n[e?"startContainer":"endContainer"],i=n[e?"startOffset":"endOffset"],o&&(1==o.nodeType&&(i=r(o),o=o.parentNode,t.remove(u)),n[e?"startContainer":"endContainer"]=o,n[e?"startOffset":"endOffset"]=i)}e(!0),e();var r=t.createRng();return r.setStart(n.startContainer,n.startOffset),n.endContainer&&r.setEnd(n.endContainer,n.endOffset),r};return{create:t,resolve:n}}),c("v",tinymce.dom.TreeWalker),c("w",tinymce.dom.RangeUtils),u("q",["u","c","v","w"],function(t,n,e,r){var o=function(t,n,r){var o,i,u=[];for(o=new e(n,t),i=n;i&&(1===i.nodeType&&u.push(i),i!==r);i=o.next());return u},i=function(e,r){var o,i,u;i=e.dom,u=e.selection,o=t.create(i,u.getRng()),n.each(r,function(t){e.dom.remove(t,!0)}),u.setRng(t.resolve(i,o))},u=function(t){return"A"===t.nodeName&&t.hasAttribute("href")},c=function(t,n){var e=t.getParent(n,u);return e?e:n},a=function(t){var e,i,a,l,f,s,d;return f=t.selection,s=t.dom,d=f.getRng(),e=c(s,r.getNode(d.startContainer,d.startOffset)),i=r.getNode(d.endContainer,d.endOffset),a=t.getBody(),l=n.grep(o(a,e,i),u)},l=function(t){i(t,a(t))};return{unlinkSelection:l}}),u("m",["p","q"],function(t,n){var e=function(t,n){var e,r,o;for(o='<table data-mce-id="mce" style="width: 100%">',o+="<tbody>",r=0;n>r;r++){for(o+="<tr>",e=0;t>e;e++)o+="<td><br></td>";o+="</tr>"}return o+="</tbody>",o+="</table>"},r=function(t){var n=t.dom.select("*[data-mce-id]");return n[0]},o=function(t,n,o){t.undoManager.transact(function(){var i,u;t.insertContent(e(n,o)),i=r(t),i.removeAttribute("data-mce-id"),u=t.dom.select("td,th",i),t.selection.setCursorLocation(u[0],0)})},i=function(t,n){t.execCommand("FormatBlock",!1,n)},u=function(n,e,r){var o,i;o=n.editorUpload.blobCache,i=o.create(t.uuid("mceu"),r,e),o.add(i),n.insertContent(n.dom.createHTML("img",{src:i.blobUri()}))},c=function(t){t.selection.collapse(!1)},a=function(t){t.focus(),n.unlinkSelection(t),c(t)},l=function(t,n,e){t.focus(),t.dom.setAttrib(n,"href",e),c(t)},f=function(t,n){t.execCommand("mceInsertLink",!1,{href:n}),c(t)},s=function(t,n){var e=t.dom.getParent(t.selection.getStart(),"a[href]");e?l(t,e,n):f(t,n)},d=function(t,n){0===n.trim().length?a(t):s(t,n)};return{insertTable:o,formatBlock:i,insertBlob:u,createLink:d,unlink:a}}),u("r",[],function(){var t=function(t){return/^www\.|\.(com|org|edu|gov|uk|net|ca|de|jp|fr|au|us|ru|ch|it|nl|se|no|es|mil)$/i.test(t.trim())},n=function(t){return/^https?:\/\//.test(t.trim())};return{isDomainLike:t,isAbsolute:n}}),u("g",["c","d","o","m","r"],function(t,n,e,r,o){var i=function(t){t.find("textbox").eq(0).each(function(t){t.focus()})},u=function(e,r){var o=n.create(t.extend({type:"form",layout:"flex",direction:"row",padding:5,name:e,spacing:3},r));return o.on("show",function(){i(o)}),o},c=function(t,n){return n?t.show():t.hide()},a=function(t,n){return new e(function(e){t.windowManager.confirm("The URL you entered seems to be an external link. Do you want to add the required http:// prefix?",function(t){var r=t===!0?"http://"+n:n;e(r)})})},l=function(t,n){return!o.isAbsolute(n)&&o.isDomainLike(n)?a(t,n):e.resolve(n)},f=function(t,n){var e={},o=function(){t.focus(),r.unlink(t),n()},i=function(t){var n=t.meta;n&&n.attach&&(e={href:this.value(),attach:n.attach})},a=function(n){if(n.control===this){var e,r="";e=t.dom.getParent(t.selection.getStart(),"a[href]"),e&&(r=t.dom.getAttrib(e,"href")),this.fromJSON({linkurl:r}),c(this.find("#unlink"),e),this.find("#linkurl")[0].focus()}};return u("quicklink",{items:[{type:"button",name:"unlink",icon:"unlink",onclick:o,tooltip:"Remove link"},{type:"filepicker",name:"linkurl",placeholder:"Paste or type a link",filetype:"file",onchange:i},{type:"button",icon:"checkmark",subtype:"primary",tooltip:"Ok",onclick:"submit"}],onshow:a,onsubmit:function(o){l(t,o.data.linkurl).then(function(o){t.undoManager.transact(function(){o===e.href&&(e.attach(),e={}),r.createLink(t,o)}),n()})}})};return{createQuickLinkForm:f}}),c("s",tinymce.geom.Rect),u("t",[],function(){var t=function(t){return{x:t.left,y:t.top,w:t.width,h:t.height}},n=function(t){return{left:t.x,top:t.y,width:t.w,height:t.h,right:t.x+t.w,bottom:t.y+t.h}};return{fromClientRect:t,toClientRect:n}}),u("h",["e","s","t"],function(t,n,e){var r=function(n){var e=t.getViewPort();return{x:n.x+e.x,y:n.y+e.y,w:n.w,h:n.h}},o=function(t){var n=t.getBoundingClientRect();return r({x:n.left,y:n.top,w:Math.max(t.clientWidth,t.offsetWidth),h:Math.max(t.clientHeight,t.offsetHeight)})},i=function(t,n){return o(n)},u=function(t){return o(t.getElement().ownerDocument.body)},c=function(t){return o(t.getContentAreaContainer()||t.getBody())},a=function(t){var n=t.selection.getBoundingClientRect();return n?r(e.fromClientRect(n)):null};return{getElementRect:i,getPageAreaRect:u,getContentAreaRect:c,getSelectionRect:a}}),u("i",["s","t"],function(t,n){var e=function(t,n){return{rect:t,position:n}},r=function(t,n){return{x:n.x,y:n.y,w:t.w,h:t.h}},o=function(n,o,i,u,c){var a,l,f;return a=t.findBestRelativePosition(c,i,u,n),i=t.clamp(i,u),a?(l=t.relativePosition(c,i,a),f=r(c,l),e(f,a)):(i=t.intersect(u,i),i?(a=t.findBestRelativePosition(c,i,u,o))?(l=t.relativePosition(c,i,a),f=r(c,l),e(f,a)):(f=r(c,i),e(f,a)):null)},i=function(t,n,e){return o(["cr-cl","cl-cr"],["bc-tc","bl-tl","br-tr"],t,n,e)},u=function(t,n,e){return o(["tc-bc","bc-tc","tl-bl","bl-tl","tr-br","br-tr"],["bc-tc","bl-tl","br-tr"],t,n,e)},c=function(t,e,r,o){var i;return"function"==typeof t?(i=t({elementRect:n.toClientRect(e),contentAreaRect:n.toClientRect(r),panelRect:n.toClientRect(o)}),n.fromClientRect(i)):o},a=function(t){return t.panelRect};return{calcInsert:i,calc:u,userConstrain:c,defaultHandler:a}}),u("a",["j"],function(t){var n=function(t,n){if(n(t))return!0;throw new Error("Default value doesn't match requested type.")},e=function(t){return function(e,r,o){var i=e.settings;return n(o,t),r in i&&t(i[r])?i[r]:o}},r=function(t,n){return t.split(n).filter(function(t){return t.length>0})},o=function(n,e){var o=function(t){return"string"==typeof t?r(t,/[ ,]/):t},i=function(t,n){return t===!1?[]:n};return t.isArray(n)?n:t.isString(n)?o(n):t.isBoolean(n)?i(n,e):e},i=function(t){return function(e,r,i){var u=r in e.settings?e.settings[r]:i;return n(i,t),o(u,i)}};return{getStringOr:e(t.isString),getBoolOr:e(t.isBoolean),getNumberOr:e(t.isNumber),getHandlerOr:e(t.isFunction),getToolbarItemsOr:i(t.isArray)}}),u("3",["c","d","e","f","g","h","i","a"],function(t,n,e,r,o,i,u,c){return function(){var a,l,f=["bold","italic","|","quicklink","h2","h3","blockquote"],s=["quickimage","quicktable"],d=function(n,e){return t.map(e,function(t){return r.create(n,t.id,t.items)})},m=function(t){return c.getToolbarItemsOr(t,"selection_toolbar",f)},h=function(t){return c.getToolbarItemsOr(t,"insert_toolbar",s)},g=function(t){return t.items().length>0},v=function(e,i){var u=d(e,i).concat([r.create(e,"text",m(e)),r.create(e,"insert",h(e)),o.createQuickLinkForm(e,S)]);return n.create({type:"floatpanel",role:"dialog",classes:"tinymce tinymce-inline arrow",ariaLabel:"Inline toolbar",layout:"flex",direction:"column",align:"stretch",autohide:!1,autofix:!0,fixed:!0,border:1,items:t.grep(u,g),oncancel:function(){e.focus()}})},p=function(t){t&&t.show()},b=function(t,n){t.moveTo(n.x,n.y)},y=function(n,e){e=e?e.substr(0,2):"",t.each({t:"down",b:"up",c:"center"},function(t,r){n.classes.toggle("arrow-"+t,r===e.substr(0,1))}),"cr"===e?(n.classes.toggle("arrow-left",!0),n.classes.toggle("arrow-right",!1)):"cl"===e?(n.classes.toggle("arrow-left",!0),n.classes.toggle("arrow-right",!0)):t.each({l:"left",r:"right"},function(t,r){n.classes.toggle("arrow-"+t,r===e.substr(1,1))})},k=function(t,n){var e=t.items().filter("#"+n);return e.length>0&&(e[0].show(),t.reflow(),!0)},w=function(t,n,r,o){var a,f,s,d;return p(t),t.items().hide(),k(t,n)?(d=c.getHandlerOr(r,"inline_toolbar_position_handler",u.defaultHandler),a=i.getContentAreaRect(r),f=e.getRect(t.getEl()),s="insert"===n?u.calcInsert(o,a,f):u.calc(o,a,f),void(s?(f=s.rect,l=o,b(t,u.userConstrain(d,o,a,f)),y(t,s.position)):S(t))):void S(t)},C=function(){return a.items().filter("form:visible").length>0},R=function(t,n){if(a){if(a.items().hide(),!k(a,n))return void S(a);var r,o,f,s;p(a),a.items().hide(),k(a,n),s=c.getHandlerOr(t,"inline_toolbar_position_handler",u.defaultHandler),r=i.getContentAreaRect(t),o=e.getRect(a.getEl()),f=u.calc(l,r,o),f&&(o=f.rect,b(a,u.userConstrain(s,l,r,o)),y(a,f.position))}},x=function(t,n,e,r){a||(a=v(t,r),a.renderTo(document.body).reflow().moveTo(e.x,e.y),t.nodeChanged()),w(a,n,t,e)},S=function(){a&&a.hide()},A=function(){a&&a.find("toolbar:visible").eq(0).each(function(t){t.focus(!0)})},T=function(){a&&(a.remove(),a=null)},B=function(){return a&&a.visible()&&C()};return{show:x,showForm:R,inForm:B,hide:S,focus:A,remove:T}}}),u("k",["o"],function(t){var n=function(n){return new t(function(t){var e=new FileReader;e.onloadend=function(){t(e.result.split(",")[1])},e.readAsDataURL(n)})};return{blobToBase64:n}}),u("l",["o"],function(t){var n=function(){return new t(function(t){var n;n=document.createElement("input"),n.type="file",n.style.position="fixed",n.style.left=0,n.style.top=0,n.style.opacity=.001,document.body.appendChild(n),n.onchange=function(n){t(Array.prototype.slice.call(n.target.files))},n.click(),n.parentNode.removeChild(n)})};return{pickFile:n}}),u("4",["3","k","l","m"],function(t,n,e,r){var o=function(t){for(var n=function(n){return function(){r.formatBlock(t,n)}},e=1;6>e;e++){var o="h"+e;t.addButton(o,{text:o.toUpperCase(),tooltip:"Heading "+e,stateSelector:o,onclick:n(o),onPostRender:function(){var t=this.getEl().firstChild.firstChild;t.style.fontWeight="bold"}})}},i=function(t,i){t.addButton("quicklink",{icon:"link",tooltip:"Insert/Edit link",stateSelector:"a[href]",onclick:function(){i.showForm(t,"quicklink")}}),t.addButton("quickimage",{icon:"image",tooltip:"Insert image",onclick:function(){e.pickFile().then(function(e){var o=e[0];n.blobToBase64(o).then(function(n){r.insertBlob(t,n,o)})})}}),t.addButton("quicktable",{icon:"table",tooltip:"Insert table",onclick:function(){i.hide(),r.insertTable(t,2,2)}}),o(t)};return{addToEditor:i}}),c("n",tinymce.EditorManager),u("5",["n","e"],function(t,n){var e=function(t,n){var e=function(){t._skinLoaded=!0,t.fire("SkinLoaded"),n()};t.initialized?e():t.on("init",e)},r=function(n){var e=t.baseURL+"/skins/";return n?e+n:e+"lightgray"},o=function(t,n){return t.documentBaseURI.toAbsolute(n)},i=function(t,i){var u=t.settings,c=u.skin_url?o(t,u.skin_url):r(u.skin),a=function(){e(t,i)};n.styleSheetLoader.load(c+"/skin.min.css",a),t.contentCSS.push(c+"/content.inline.min.css")};return{load:i}}),u("8",[],function(){var t=function(t,n){return{id:t,rect:n}},n=function(t,n){for(var e=0;e<n.length;e++){var r=n[e],o=r(t);if(o)return o}return null};return{match:n,result:t}}),u("6",["8","h"],function(t,n){var e=function(e){return function(r){return r.selection.isCollapsed()?null:t.result(e,n.getSelectionRect(r))}},r=function(e,r){return function(o){var i,u=o.schema.getTextBlockElements();for(i=0;i<e.length;i++)if("TABLE"===e[i].nodeName)return null;for(i=0;i<e.length;i++)if(e[i].nodeName in u)return o.dom.isEmpty(e[i])?t.result(r,n.getSelectionRect(o)):null;return null}};return{textSelection:e,emptyTextBlock:r}}),u("7",["8","h"],function(t,n){var e=function(e,r){return function(o){for(var i=0;i<r.length;i++)if(r[i].predicate(e))return t.result(r[i].id,n.getElementRect(o,e));return null}},r=function(e,r){return function(o){for(var i=0;i<e.length;i++)for(var u=0;u<r.length;u++)if(r[u].predicate(e[i]))return t.result(r[u].id,n.getElementRect(o,e[i]));return null}};return{element:e,parent:r}}),u("9",[],function(){var t=function(n){return n.reduce(function(n,e){return Array.isArray(e)?n.concat(t(e)):n.concat(e)},[])};return{flatten:t}}),u("b",["c"],function(t){var n=function(t,n){return{id:t,predicate:n}},e=function(e){return t.map(e,function(t){return n(t.id,t.predicate)})};return{create:n,fromContextToolbars:e}}),u("0",["1","2","3","4","5","6","7","8","9","a","b"],function(t,n,e,r,o,i,u,c,a,l,f){var s=function(t){var n=t.selection.getNode(),e=t.dom.getParents(n);return e},d=function(t,n,e,r){var o=function(e){return t.dom.is(e,n)};return{predicate:o,id:e,items:r}},m=function(t){var n=t.contextToolbars;return a.flatten([n?n:[],d(t,"img","image","alignleft aligncenter alignright")])},h=function(t,n){var e,r,o;return r=s(t),o=f.fromContextToolbars(n),e=c.match(t,[u.element(r[0],o),i.textSelection("text"),i.emptyTextBlock(r,"insert"),u.parent(r,o)]),e&&e.rect?e:null},g=function(t,n){var e=function(){var e=m(t),r=h(t,e);r?n.show(t,r.id,r.rect,e):n.hide()};return function(){t.removed||e()}},v=function(t,n){return function(){t.inForm()||n()}},p=function(t,e){var r=n.throttle(g(t,e),0),o=n.throttle(v(e,g(t,e)),0);t.on("blur hide ObjectResizeStart",e.hide),t.on("click",r),t.on("nodeChange mouseup",o),t.on("ResizeEditor ResizeWindow keyup",r),t.on("remove",e.remove),t.shortcuts.add("Alt+F10","",e.focus)},b=function(t,n){t.shortcuts.remove("meta+k"),t.shortcuts.add("meta+k","",function(){var e=m(t),r=r=c.match(t,[i.textSelection("quicklink")]);r&&n.show(t,r.id,r.rect,e)})},y=function(t,n){return o.load(t,function(){p(t,n),b(t,n)}),{}},k=function(t){throw new Error(t)};return t.add("inlite",function(t){var n=new e;r.addToEditor(t,n);var o=function(){return t.inline?y(t,n):k("inlite theme only supports inline mode.")};return{renderUI:o}}),function(){}}),r("0")()}();