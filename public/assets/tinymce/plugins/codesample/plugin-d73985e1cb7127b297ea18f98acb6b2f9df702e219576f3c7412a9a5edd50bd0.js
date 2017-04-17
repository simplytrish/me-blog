!function(e,t){"use strict";function n(e,t){for(var n,a=[],r=0;r<e.length;++r){if(n=s[e[r]]||i(e[r]),!n)throw"module definition dependecy not found: "+e[r];a.push(n)}t.apply(null,a)}function a(e,a,i){if("string"!=typeof e)throw"invalid module definition, module id must be defined and be a string";if(a===t)throw"invalid module definition, dependencies must be specified";if(i===t)throw"invalid module definition, definition function must be specified";n(a,function(){s[e]=i.apply(null,arguments)})}function i(t){for(var n=e,a=t.split(/[.\/]/),i=0;i<a.length;++i){if(!n[a[i]])return;n=n[a[i]]}return n}function r(n){var a,i,r,o,l;for(a=0;a<n.length;a++){i=e,r=n[a],o=r.split(/[.\/]/);for(var c=0;c<o.length-1;++c)i[o[c]]===t&&(i[o[c]]={}),i=i[o[c]];i[o[o.length-1]]=s[r]}if(e.AMDLC_TESTS){l=e.privateModules||{};for(r in s)l[r]=s[r];for(a=0;a<n.length;a++)delete l[n[a]];e.privateModules=l}}var s={};a("tinymce/codesampleplugin/Prism",[],function(){var e={},t="undefined"!=typeof e?e:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},n=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,n=t.Prism={util:{encode:function(e){return e instanceof a?new a(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var t=n.util.type(e);switch(t){case"Object":var a={};for(var i in e)e.hasOwnProperty(i)&&(a[i]=n.util.clone(e[i]));return a;case"Array":return e.map&&e.map(function(e){return n.util.clone(e)})}return e}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var i in t)a[i]=t[i];return a},insertBefore:function(e,t,a,i){i=i||n.languages;var r=i[e];if(2==arguments.length){a=arguments[1];for(var s in a)a.hasOwnProperty(s)&&(r[s]=a[s]);return r}var o={};for(var l in r)if(r.hasOwnProperty(l)){if(l==t)for(var s in a)a.hasOwnProperty(s)&&(o[s]=a[s]);o[l]=r[l]}return n.languages.DFS(n.languages,function(t,n){n===i[e]&&t!=e&&(this[t]=o)}),i[e]=o},DFS:function(e,t,a){for(var i in e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],a||i),"Object"===n.util.type(e[i])?n.languages.DFS(e[i],t):"Array"===n.util.type(e[i])&&n.languages.DFS(e[i],t,i))}},plugins:{},highlightAll:function(e,t){for(var a,i=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),r=0;a=i[r++];)n.highlightElement(a,e===!0,t)},highlightElement:function(a,i,r){for(var s,o,l=a;l&&!e.test(l.className);)l=l.parentNode;l&&(s=(l.className.match(e)||[,""])[1],o=n.languages[s]),a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+s,l=a.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+s);var c=a.textContent,u={element:a,language:s,grammar:o,code:c};if(!c||!o)return void n.hooks.run("complete",u);if(n.hooks.run("before-highlight",u),i&&t.Worker){var d=new Worker(n.filename);d.onmessage=function(e){u.highlightedCode=e.data,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(u.element),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},d.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=n.highlight(u.code,u.grammar,u.language),n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(a),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},highlight:function(e,t,i){var r=n.tokenize(e,t);return a.stringify(n.util.encode(r),i)},tokenize:function(e,t){var a=n.Token,i=[e],r=t.rest;if(r){for(var s in r)t[s]=r[s];delete t.rest}e:for(var s in t)if(t.hasOwnProperty(s)&&t[s]){var o=t[s];o="Array"===n.util.type(o)?o:[o];for(var l=0;l<o.length;++l){var c=o[l],u=c.inside,d=!!c.lookbehind,g=0,p=c.alias;c=c.pattern||c;for(var f=0;f<i.length;f++){var m=i[f];if(i.length>e.length)break e;if(!(m instanceof a)){c.lastIndex=0;var h=c.exec(m);if(h){d&&(g=h[1].length);var b=h.index-1+g,h=h[0].slice(g),y=h.length,v=b+y,k=m.slice(0,b+1),w=m.slice(v+1),x=[f,1];k&&x.push(k);var S=new a(s,u?n.tokenize(h,u):h,p);x.push(S),w&&x.push(w),Array.prototype.splice.apply(i,x)}}}}}return i},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var i,r=0;i=a[r++];)i(t)}}},a=n.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};return a.stringify=function(e,t,i){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(n){return a.stringify(n,t,e)}).join("");var r={type:e.type,content:a.stringify(e.content,t,i),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:i};if("comment"==r.type&&(r.attributes.spellcheck="true"),e.alias){var s="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(r.classes,s)}n.hooks.run("wrap",r);var o="";for(var l in r.attributes)o+=(o?" ":"")+l+'="'+(r.attributes[l]||"")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'" '+o+">"+r.content+"</"+r.tag+">"},t.document?void 0:t.addEventListener?(t.addEventListener("message",function(e){var a=JSON.parse(e.data),i=a.language,r=a.code,s=a.immediateClose;t.postMessage(n.highlight(r,n.languages[i],i)),s&&t.close()},!1),t.Prism):t.Prism}();return"undefined"!=typeof module&&module.exports&&(module.exports=n),"undefined"!=typeof global&&(global.Prism=n),n.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[^\s>\/=.]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),n.languages.xml=n.languages.markup,n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},n.languages.css.atrule.inside.rest=n.util.clone(n.languages.css),n.languages.markup&&(n.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/i,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/i,inside:n.languages.markup.tag.inside},rest:n.languages.css},alias:"language-css"}}),n.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:n.languages.css}},alias:"language-css"}},n.languages.markup.tag)),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),n.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),n.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\`|\\?[^`])*`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/i,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/i,inside:n.languages.markup.tag.inside},rest:n.languages.javascript},alias:"language-javascript"}}),n.languages.js=n.languages.javascript,n.languages.c=n.languages.extend("clike",{keyword:/\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,operator:/\-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|?\||[~^%?*\/]/,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)[ful]*\b/i}),n.languages.insertBefore("c","string",{macro:{pattern:/(^\s*)#\s*[a-z]+([^\r\n\\]|\\.|\\(?:\r\n?|\n))*/im,lookbehind:!0,alias:"property",inside:{string:{pattern:/(#\s*include\s*)(<.+?>|("|')(\\?.)+?\3)/,lookbehind:!0}}}}),delete n.languages.c["class-name"],delete n.languages.c["boolean"],n.languages.csharp=n.languages.extend("clike",{keyword:/\b(abstract|as|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|virtual|void|volatile|while|add|alias|ascending|async|await|descending|dynamic|from|get|global|group|into|join|let|orderby|partial|remove|select|set|value|var|where|yield)\b/,string:[/@("|')(\1\1|\\\1|\\?(?!\1)[\s\S])*\1/,/("|')(\\?.)*?\1/],number:/\b-?(0x[\da-f]+|\d*\.?\d+)\b/i}),n.languages.insertBefore("csharp","keyword",{preprocessor:{pattern:/(^\s*)#.*/m,lookbehind:!0}}),n.languages.cpp=n.languages.extend("c",{keyword:/\b(alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,"boolean":/\b(true|false)\b/,operator:/[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|:{1,2}|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\/|\b(and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/}),n.languages.insertBefore("cpp","keyword",{"class-name":{pattern:/(class\s+)[a-z0-9_]+/i,lookbehind:!0}}),n.languages.java=n.languages.extend("clike",{keyword:/\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,number:/\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+(?:e[+-]?\d+)?[df]?\b/i,operator:{pattern:/(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,lookbehind:!0}}),n.languages.php=n.languages.extend("clike",{keyword:/\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,constant:/\b[A-Z0-9_]{2,}\b/,comment:{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,lookbehind:!0}}),n.languages.insertBefore("php","class-name",{"shell-comment":{pattern:/(^|[^\\])#.*/,lookbehind:!0,alias:"comment"}}),n.languages.insertBefore("php","keyword",{delimiter:/\?>|<\?(?:php)?/i,variable:/\$\w+\b/i,"package":{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),n.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}}),n.languages.markup&&(n.hooks.add("before-highlight",function(e){"php"===e.language&&(e.tokenStack=[],e.backupCode=e.code,e.code=e.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi,function(t){return e.tokenStack.push(t),"{{{PHP"+e.tokenStack.length+"}}}"}))}),n.hooks.add("before-insert",function(e){"php"===e.language&&(e.code=e.backupCode,delete e.backupCode)}),n.hooks.add("after-highlight",function(e){if("php"===e.language){for(var t,a=0;t=e.tokenStack[a];a++)e.highlightedCode=e.highlightedCode.replace("{{{PHP"+(a+1)+"}}}",n.highlight(t,e.grammar,"php").replace(/\$/g,"$$$$"));e.element.innerHTML=e.highlightedCode}}),n.hooks.add("wrap",function(e){"php"===e.language&&"markup"===e.type&&(e.content=e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g,'<span class="token php">$1</span>'))}),n.languages.insertBefore("php","comment",{markup:{pattern:/<[^?]\/?(.*?)>/,inside:n.languages.markup},php:/\{\{\{PHP[0-9]+\}\}\}/})),n.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},string:/"""[\s\S]+?"""|'''[\s\S]+?'''|("|')(?:\\?.)*?\1/,"function":{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)[a-z0-9_]+/i,lookbehind:!0},keyword:/\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,"boolean":/\b(?:True|False)\b/,number:/\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,punctuation:/[{}[\];(),.:]/},function(e){e.languages.ruby=e.languages.extend("clike",{comment:/#(?!\{[^\r\n]*?\}).*/,keyword:/\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/});var t={pattern:/#\{[^}]+\}/,inside:{delimiter:{pattern:/^#\{|\}$/,alias:"tag"},rest:e.util.clone(e.languages.ruby)}};e.languages.insertBefore("ruby","keyword",{regex:[{pattern:/%r([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1[gim]{0,3}/,inside:{interpolation:t}},{pattern:/%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,inside:{interpolation:t}},{pattern:/%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,inside:{interpolation:t}},{pattern:/%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,inside:{interpolation:t}},{pattern:/%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,inside:{interpolation:t}},{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}],variable:/[@$]+[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/,symbol:/:[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/}),e.languages.insertBefore("ruby","number",{builtin:/\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Fload|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,constant:/\b[A-Z][a-zA-Z_0-9]*(?:[?!]|\b)/}),e.languages.ruby.string=[{pattern:/%[qQiIwWxs]?([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1/,inside:{interpolation:t}},{pattern:/%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,inside:{interpolation:t}},{pattern:/%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,inside:{interpolation:t}},{pattern:/%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,inside:{interpolation:t}},{pattern:/%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,inside:{interpolation:t}},{pattern:/("|')(#\{[^}]+\}|\\(?:\r?\n|\r)|\\?.)*?\1/,inside:{interpolation:t}}]}(n),n}),a("tinymce/codesampleplugin/Utils",[],function(){function e(e){return e&&"PRE"==e.nodeName&&-1!==e.className.indexOf("language-")}function t(e){return function(t,n){return e(n)}}return{isCodeSample:e,trimArg:t}}),a("tinymce/codesampleplugin/Dialog",["tinymce/dom/DOMUtils","tinymce/codesampleplugin/Utils","tinymce/codesampleplugin/Prism"],function(e,t,n){function a(e){var t=[{text:"HTML/XML",value:"markup"},{text:"JavaScript",value:"javascript"},{text:"CSS",value:"css"},{text:"PHP",value:"php"},{text:"Ruby",value:"ruby"},{text:"Python",value:"python"},{text:"Java",value:"java"},{text:"C",value:"c"},{text:"C#",value:"csharp"},{text:"C++",value:"cpp"}],n=e.settings.codesample_languages;return n?n:t}function i(e,t,a){e.undoManager.transact(function(){var i=r(e);a=l.encode(a),i?(e.dom.setAttrib(i,"class","language-"+t),i.innerHTML=a,n.highlightElement(i),e.selection.select(i)):(e.insertContent('<pre id="__new" class="language-'+t+'">'+a+"</pre>"),e.selection.select(e.$("#__new").removeAttr("id")[0]))})}function r(e){var n=e.selection.getNode();return t.isCodeSample(n)?n:null}function s(e){var t=r(e);return t?t.textContent:""}function o(e){var t,n=r(e);return n?(t=n.className.match(/language-(\w+)/),t?t[1]:""):""}var l=e.DOM;return{open:function(e){e.windowManager.open({title:"Insert/Edit code sample",minWidth:Math.min(l.getViewPort().w,e.getParam("codesample_dialog_width",800)),minHeight:Math.min(l.getViewPort().h,e.getParam("codesample_dialog_height",650)),layout:"flex",direction:"column",align:"stretch",body:[{type:"listbox",name:"language",label:"Language",maxWidth:200,value:o(e),values:a(e)},{type:"textbox",name:"code",multiline:!0,spellcheck:!1,ariaLabel:"Code view",flex:1,style:"direction: ltr; text-align: left",classes:"monospace",value:s(e),autofocus:!0}],onSubmit:function(t){i(e,t.data.language,t.data.code)}})}}}),a("tinymce/codesampleplugin/Plugin",["tinymce/Env","tinymce/PluginManager","tinymce/codesampleplugin/Prism","tinymce/codesampleplugin/Dialog","tinymce/codesampleplugin/Utils"],function(e,t,n,a,i){var r,s=i.trimArg;t.add("codesample",function(t,o){function l(){var e,n=t.settings.codesample_content_css;t.inline&&r||!t.inline&&c||(t.inline?r=!0:c=!0,n!==!1&&(e=t.dom.create("link",{rel:"stylesheet",href:n?n:o+"/css/prism.css"}),t.getDoc().getElementsByTagName("head")[0].appendChild(e)))}var c,u=t.$;e.ceFalse&&(t.on("PreProcess",function(e){u("pre[contenteditable=false]",e.node).filter(s(i.isCodeSample)).each(function(e,t){var n=u(t),a=t.textContent;n.attr("class",u.trim(n.attr("class"))),n.removeAttr("contentEditable"),n.empty().append(u("<code></code>").each(function(){this.textContent=a}))})}),t.on("SetContent",function(){var e=u("pre").filter(s(i.isCodeSample)).filter(function(e,t){return"false"!==t.contentEditable});e.length&&t.undoManager.transact(function(){e.each(function(e,a){u(a).find("br").each(function(e,n){n.parentNode.replaceChild(t.getDoc().createTextNode("\n"),n)}),a.contentEditable=!1,a.innerHTML=t.dom.encode(a.textContent),n.highlightElement(a),a.className=u.trim(a.className)})})}),t.addCommand("codesample",function(){var e=t.selection.getNode();t.selection.isCollapsed()||i.isCodeSample(e)?a.open(t):t.formatter.toggle("code")}),t.addButton("codesample",{cmd:"codesample",title:"Insert/Edit code sample"}),t.on("init",l))})}),r(["tinymce/codesampleplugin/Prism","tinymce/codesampleplugin/Utils","tinymce/codesampleplugin/Dialog","tinymce/codesampleplugin/Plugin"])}(window);