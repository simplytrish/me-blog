!function(){var e={},t=function(t){for(var i=e[t],a=i.deps,n=i.defn,o=a.length,c=new Array(o),s=0;o>s;++s)c[s]=r(a[s]);var u=n.apply(null,c);if(void 0===u)throw"module ["+t+"] returned undefined";i.instance=u},i=function(t,i,r){if("string"!=typeof t)throw"module id must be a string";if(void 0===i)throw"no dependencies for "+t;if(void 0===r)throw"no definition function for "+t;e[t]={deps:i,defn:r,instance:void 0}},r=function(i){var r=e[i];if(void 0===r)throw"module ["+i+"] was undefined";return void 0===r.instance&&t(i),r.instance},a=function(e,t){for(var i=e.length,a=new Array(i),n=0;i>n;++n)a.push(r(e[n]));t.apply(null,t)},n={};n.bolt={module:{api:{define:i,require:a,demand:r}}};var o=i,c=function(e,t){o(e,[],function(){return t})};c("1",tinymce.PluginManager),c("6",tinymce.util.Delay),c("e",tinymce.util.Tools),c("9",tinymce.html.SaxParser),c("a",tinymce.html.Schema),c("b",tinymce.dom.DOMUtils.DOM),o("g",[],function(){var e=function(e,t){if(e)for(var i=0;i<e.length;i++)if(-1!==t.indexOf(e[i].filter))return e[i]};return{getVideoScriptMatch:e}}),o("c",[],function(){var e=function(e){return e.replace(/px$/,"")},t=function(e){return/^[0-9.]+$/.test(e)?e+"px":e},i=function(t){return function(i){return i?e(i.style[t]):""}},r=function(e){return function(i,r){i&&(i.style[e]=t(r))}};return{getMaxWidth:i("maxWidth"),getMaxHeight:i("maxHeight"),setMaxWidth:r("maxWidth"),setMaxHeight:r("maxHeight")}}),o("7",["e","9","a","b","g","c"],function(e,t,i,r,a,n){var o=function(e){return r.getAttrib(e,"data-ephox-embed-iri")},c=function(e){var t=r.createFragment(e);return""!==o(t.firstChild)},s=function(i,r){var n={};return new t({validate:!1,allow_conditional_comments:!0,special:"script,noscript",start:function(t,r){if(n.source1||"param"!==t||(n.source1=r.map.movie),"iframe"!==t&&"object"!==t&&"embed"!==t&&"video"!==t&&"audio"!==t||(n.type||(n.type=t),n=e.extend(r.map,n)),"script"===t){var o=a.getVideoScriptMatch(i,r.map.src);if(!o)return;n={type:"script",source1:r.map.src,width:o.width,height:o.height}}"source"===t&&(n.source1?n.source2||(n.source2=r.map.src):n.source1=r.map.src),"img"!==t||n.poster||(n.poster=r.map.src)}}).parse(r),n.source1=n.source1||n.src||n.data,n.source2=n.source2||"",n.poster=n.poster||"",n},u=function(e){var t=r.createFragment(e),i=t.firstChild;return{type:"ephox-embed-iri",source1:o(i),source2:"",poster:"",width:n.getMaxWidth(i),height:n.getMaxHeight(i)}},l=function(e,t){return c(t)?u(t):s(e,t)};return{htmlToData:l}}),c("8",tinymce.html.Writer),o("4",["8","9","a","b","c"],function(e,t,i,r,a){var n=function(e,t){var i,r,a,n;for(i in t)if(a=""+t[i],e.map[i])for(r=e.length;r--;)n=e[r],n.name===i&&(a?(e.map[i]=a,n.value=a):(delete e.map[i],e.splice(r,1)));else a&&(e.push({name:i,value:a}),e.map[i]=a)},o=function(i){var r=new e,a=new t(r);return a.parse(i),r.getContent()},c=function(r,a,o){var c,s=new e,u=0;return new t({validate:!1,allow_conditional_comments:!0,special:"script,noscript",comment:function(e){s.comment(e)},cdata:function(e){s.cdata(e)},text:function(e,t){s.text(e,t)},start:function(e,t,i){switch(e){case"video":case"object":case"embed":case"img":case"iframe":n(t,{width:a.width,height:a.height})}if(o)switch(e){case"video":n(t,{poster:a.poster,src:""}),a.source2&&n(t,{src:""});break;case"iframe":n(t,{src:a.source1});break;case"source":if(u++,2>=u&&(n(t,{src:a["source"+u],type:a["source"+u+"mime"]}),!a["source"+u]))return;break;case"img":if(!a.poster)return;c=!0}s.start(e,t,i)},end:function(e){if("video"===e&&o)for(var t=1;2>=t;t++)if(a["source"+t]){var i=[];i.map={},t>u&&(n(i,{src:a["source"+t],type:a["source"+t+"mime"]}),s.start("source",i,!0))}if(a.poster&&"object"===e&&o&&!c){var r=[];r.map={},n(r,{src:a.poster,width:a.width,height:a.height}),s.start("img",r,!0)}s.end(e)}},new i({})).parse(r),s.getContent()},s=function(e){var t=r.createFragment(e);return""!==r.getAttrib(t.firstChild,"data-ephox-embed-iri")},u=function(e,t){var i=r.createFragment(e),n=i.firstChild;return a.setMaxWidth(n,t.width),a.setMaxHeight(n,t.height),o(n.outerHTML)},l=function(e,t,i){return s(e)?u(e,t):c(e,t,i)};return{updateHtml:l}}),o("k",[],function(){var e=function(e){var t={mp3:"audio/mpeg",wav:"audio/wav",mp4:"video/mp4",webm:"video/webm",ogg:"video/ogg",swf:"application/x-shockwave-flash"},i=e.toLowerCase().split(".").pop(),r=t[i];return r?r:""};return{guess:e}}),o("l",[],function(){var e=[{regex:/youtu\.be\/([\w\-.]+)/,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/youtube\.com(.+)v=([^&]+)/,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$2",allowFullscreen:!0},{regex:/youtube.com\/embed\/([a-z0-9\-_]+(?:\?.+)?)/i,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/vimeo\.com\/([0-9]+)/,type:"iframe",w:425,h:350,url:"//player.vimeo.com/video/$1?title=0&byline=0&portrait=0&color=8dc7dc",allowfullscreen:!0},{regex:/vimeo\.com\/(.*)\/([0-9]+)/,type:"iframe",w:425,h:350,url:"//player.vimeo.com/video/$2?title=0&amp;byline=0",allowfullscreen:!0},{regex:/maps\.google\.([a-z]{2,3})\/maps\/(.+)msid=(.+)/,type:"iframe",w:425,h:350,url:'//maps.google.com/maps/ms?msid=$2&output=embed"',allowFullscreen:!1},{regex:/dailymotion\.com\/video\/([^_]+)/,type:"iframe",w:480,h:270,url:"//www.dailymotion.com/embed/video/$1",allowFullscreen:!0}];return{urlPatterns:e}}),o("i",["k","7","l","g","4","e"],function(e,t,i,r,a,n){var o=function(o,c){var s="",u=n.extend({},c);if(!u.source1&&(n.extend(u,t.htmlToData(o.settings.media_scripts,u.embed)),!u.source1))return"";if(u.source2||(u.source2=""),u.poster||(u.poster=""),u.source1=o.convertURL(u.source1,"source"),u.source2=o.convertURL(u.source2,"source"),u.source1mime=e.guess(u.source1),u.source2mime=e.guess(u.source2),u.poster=o.convertURL(u.poster,"poster"),n.each(i.urlPatterns,function(e){var t,i,r=e.regex.exec(u.source1);if(r){for(i=e.url,t=0;r[t];t++)i=i.replace("$"+t,function(){return r[t]});u.source1=i,u.type=e.type,u.allowFullscreen=e.allowFullscreen,u.width=u.width||e.w,u.height=u.height||e.h}}),u.embed)s=a.updateHtml(u.embed,u,!0);else{var l=r.getVideoScriptMatch(o.settings.media_scripts,u.source1);if(l&&(u.type="script",u.width=l.width,u.height=l.height),u.width=u.width||300,u.height=u.height||150,n.each(u,function(e,t){u[t]=o.dom.encode(e)}),"iframe"===u.type){var d=u.allowFullscreen?' allowFullscreen="1"':"";s+='<iframe src="'+u.source1+'" width="'+u.width+'" height="'+u.height+'"'+d+"></iframe>"}else"application/x-shockwave-flash"===u.source1mime?(s+='<object data="'+u.source1+'" width="'+u.width+'" height="'+u.height+'" type="application/x-shockwave-flash">',u.poster&&(s+='<img src="'+u.poster+'" width="'+u.width+'" height="'+u.height+'" />'),s+="</object>"):-1!==u.source1mime.indexOf("audio")?o.settings.audio_template_callback?s=o.settings.audio_template_callback(u):s+='<audio controls="controls" src="'+u.source1+'">'+(u.source2?'\n<source src="'+u.source2+'"'+(u.source2mime?' type="'+u.source2mime+'"':"")+" />\n":"")+"</audio>":"script"===u.type?s+='<script src="'+u.source1+'"></script>':s=o.settings.video_template_callback?o.settings.video_template_callback(u):'<video width="'+u.width+'" height="'+u.height+'"'+(u.poster?' poster="'+u.poster+'"':"")+' controls="controls">\n<source src="'+u.source1+'"'+(u.source1mime?' type="'+u.source1mime+'"':"")+" />\n"+(u.source2?'<source src="'+u.source2+'"'+(u.source2mime?' type="'+u.source2mime+'"':"")+" />\n":"")+"</video>"}return s};return{dataToHtml:o}}),c("j",tinymce.util.Promise),o("d",["i","j"],function(e,t){var i=function(e,i,r){var a={};return new t(function(t,n){var o=function(r){return r.html&&(a[e.source1]=r),t({url:e.source1,html:r.html?r.html:i(e)})};a[e.source1]?o(a[e.source1]):r({url:e.source1},o,n)})},r=function(e,i){return new t(function(t){t({html:i(e),url:e.source1})})},a=function(t){return function(i){return e.dataToHtml(t,i)}},n=function(e,t){var n=e.settings.media_url_resolver;return n?i(t,a(e),n):r(t,a(e))};return{getEmbedHtml:n}}),c("f",tinymce.Env),o("2",["6","7","4","d","c","e","f"],function(e,t,i,r,a,n,o){var c=o.ie&&o.ie<=8?"onChange":"onInput",s=function(e){return function(t){var i=t&&t.msg?"Media embed handler error: "+t.msg:"Media embed handler threw unknown error.";e.notificationManager.open({type:"error",text:i})}},u=function(e){var i=e.selection.getNode(),r=i.getAttribute("data-ephox-embed-iri");return r?{source1:r,"data-ephox-embed-iri":r,width:a.getMaxWidth(i),height:a.getMaxHeight(i)}:i.getAttribute("data-mce-object")?t.htmlToData(e.settings.media_scripts,e.serializer.serialize(i,{selection:!0})):{}},l=function(e){var t=e.selection.getNode();return t.getAttribute("data-mce-object")||t.getAttribute("data-ephox-embed-iri")?e.selection.getContent():void 0},d=function(e,i){return function(r){var a=r.html,o=e.find("#embed")[0],c=n.extend(t.htmlToData(i.settings.media_scripts,a),{source1:r.url});e.fromJSON(c),o&&(o.value(a),v(e))}},m=function(e,t){var i,r,a=e.dom.select("img[data-mce-object]");for(i=0;i<t.length;i++)for(r=a.length-1;r>=0;r--)t[i]===a[r]&&a.splice(r,1);e.selection.select(a[0])},h=function(e,t){var i=e.dom.select("img[data-mce-object]");e.insertContent(t),m(e,i),e.nodeChanged()},p=function(e,t){var a=e.toJSON();a.embed=i.updateHtml(a.embed,a),a.embed?h(t,a.embed):r.getEmbedHtml(t,a).then(function(e){h(t,e.html)})["catch"](s(t))},f=function(e,t){n.each(t,function(t,i){e.find("#"+i).value(t)})},g=function(e){var t=e.find("#width")[0],i=e.find("#height")[0];t&&i&&(t.state.set("oldVal",t.value()),i.state.set("oldVal",i.value()))},v=function(e){var t=e.find("#width")[0],i=e.find("#height")[0],r=t.state.get("oldVal"),a=i.state.get("oldVal"),n=t.value(),o=i.value();e.find("#constrain")[0].checked()&&r&&a&&n&&o&&(n!==r?(o=Math.round(n/r*o),isNaN(o)||i.value(o)):(n=Math.round(o/a*n),isNaN(n)||t.value(n))),g(e)},w=function(e){var a,o,m=[{name:"source1",type:"filepicker",filetype:"media",size:40,autofocus:!0,label:"Source",onpaste:function(){setTimeout(function(){r.getEmbedHtml(e,a.toJSON()).then(d(a,e))["catch"](s(e))},1)},onchange:function(t){r.getEmbedHtml(e,a.toJSON()).then(d(a,e))["catch"](s(e)),f(a,t.meta)},onbeforecall:function(e){e.meta=a.toJSON()}}],h=[],w=function(){v(a),o=a.toJSON(),a.find("#embed").value(i.updateHtml(o.embed,o))};e.settings.media_alt_source!==!1&&h.push({name:"source2",type:"filepicker",filetype:"media",size:40,label:"Alternative source"}),e.settings.media_poster!==!1&&h.push({name:"poster",type:"filepicker",filetype:"image",size:40,label:"Poster"}),e.settings.media_dimensions!==!1&&m.push({type:"container",label:"Dimensions",layout:"flex",align:"center",spacing:5,items:[{name:"width",type:"textbox",maxLength:5,size:5,onchange:w,ariaLabel:"Width"},{type:"label",text:"x"},{name:"height",type:"textbox",maxLength:5,size:5,onchange:w,ariaLabel:"Height"},{name:"constrain",type:"checkbox",checked:!0,text:"Constrain proportions"}]}),o=u(e);var b={id:"mcemediasource",type:"textbox",flex:1,name:"embed",value:l(e),multiline:!0,rows:5,label:"Source"},y=function(){o=n.extend({},t.htmlToData(e.settings.media_scripts,this.value())),this.parent().parent().fromJSON(o)};b[c]=y,a=e.windowManager.open({title:"Insert/edit media",data:o,bodyType:"tabpanel",body:[{title:"General",type:"form",items:m},{title:"Embed",type:"container",layout:"flex",direction:"column",align:"stretch",padding:10,spacing:10,items:[{type:"label",text:"Paste your embed code below:",forId:"mcemediasource"},b]},{title:"Advanced",type:"form",items:h}],onSubmit:function(){v(a),p(a,e)}}),g(a)};return{showDialog:w}}),o("3",["e","8","9","a"],function(e,t,i,r){var a=function(e,a){if(e.settings.media_filter_html===!1)return a;var n,o=new t;return new i({validate:!1,allow_conditional_comments:!1,special:"script,noscript",comment:function(e){o.comment(e)},cdata:function(e){o.cdata(e)},text:function(e,t){o.text(e,t)},start:function(t,i,r){if(n=!0,"script"!==t&&"noscript"!==t){for(var a=0;a<i.length;a++){if(0===i[a].name.indexOf("on"))return;"style"===i[a].name&&(i[a].value=e.dom.serializeStyle(e.dom.parseStyle(i[a].value),t))}o.start(t,i,r),n=!1}},end:function(e){n||o.end(e)}},new r({})).parse(a),o.getContent()};return{sanitize:a}}),c("h",tinymce.html.Node),o("5",["3","g","h","f"],function(e,t,i,r){var a=function(e,t){var a,n=t.name;return a=new i("img",1),a.shortEnded=!0,o(e,t,a),a.attr({width:t.attr("width")||"300",height:t.attr("height")||("audio"===n?"30":"150"),style:t.attr("style"),src:r.transparentSrc,"data-mce-object":n,"class":"mce-object mce-object-"+n}),a},n=function(e,t){var r,a,n,c=t.name;return r=new i("span",1),r.attr({contentEditable:"false",style:t.attr("style"),"data-mce-object":c,"class":"mce-preview-object mce-object-"+c}),o(e,t,r),a=new i(c,1),a.attr({src:t.attr("src"),allowfullscreen:t.attr("allowfullscreen"),width:t.attr("width")||"300",height:t.attr("height")||("audio"===c?"30":"150"),frameborder:"0"}),n=new i("span",1),n.attr("class","mce-shim"),r.append(a),r.append(n),r},o=function(t,i,r){var a,n,o,c,s;for(o=i.attributes,c=o.length;c--;)a=o[c].name,n=o[c].value,"width"!==a&&"height"!==a&&"style"!==a&&("data"!==a&&"src"!==a||(n=t.convertURL(n,a)),r.attr("data-mce-p-"+a,n));s=i.firstChild&&i.firstChild.value,s&&(r.attr("data-mce-html",escape(e.sanitize(t,s))),r.firstChild=null)},c=function(e){for(;e=e.parent;)if(e.attr("data-ephox-embed-iri"))return!0;return!1},s=function(e){return function(i){for(var o,s,u=i.length;u--;)o=i[u],o.parent&&(o.parent.attr("data-mce-object")||("script"!==o.name||(s=t.getVideoScriptMatch(e.settings.media_scripts,o.attr("src"))))&&(s&&(s.width&&o.attr("width",s.width.toString()),s.height&&o.attr("height",s.height.toString())),"iframe"===o.name&&e.settings.media_live_embeds!==!1&&r.ceFalse?c(o)||o.replace(n(e,o)):c(o)||o.replace(a(e,o))))}};return{createPreviewIframeNode:n,createPlaceholderNode:a,placeHolderConverter:s}}),o("0",["1","2","3","4","5"],function(e,t,i,r,a){var n=function(e){e.on("ResolveName",function(e){var t;1===e.target.nodeType&&(t=e.target.getAttribute("data-mce-object"))&&(e.name=t)}),e.on("preInit",function(){var t=e.schema.getSpecialElements();tinymce.each("video audio iframe object".split(" "),function(e){t[e]=new RegExp("</"+e+"[^>]*>","gi")});var r=e.schema.getBoolAttrs();tinymce.each("webkitallowfullscreen mozallowfullscreen allowfullscreen".split(" "),function(e){r[e]={}}),e.parser.addNodeFilter("iframe,video,audio,object,embed,script",a.placeHolderConverter(e)),e.serializer.addAttributeFilter("data-mce-object",function(t,r){for(var a,n,o,c,s,u,l,d,m=t.length;m--;)if(a=t[m],a.parent){for(l=a.attr(r),n=new tinymce.html.Node(l,1),"audio"!==l&&"script"!==l&&(d=a.attr("class"),d&&-1!==d.indexOf("mce-preview-object")?n.attr({width:a.firstChild.attr("width"),height:a.firstChild.attr("height")}):n.attr({width:a.attr("width"),height:a.attr("height")})),n.attr({style:a.attr("style")}),c=a.attributes,o=c.length;o--;){var h=c[o].name;0===h.indexOf("data-mce-p-")&&n.attr(h.substr(11),c[o].value)}"script"===l&&n.attr("type","text/javascript"),s=a.attr("data-mce-html"),s&&(u=new tinymce.html.Node("#text",3),u.raw=!0,u.value=i.sanitize(e,unescape(s)),n.append(u)),a.replace(n)}})}),e.on("click keyup",function(){var t=e.selection.getNode();t&&e.dom.hasClass(t,"mce-preview-object")&&e.dom.getAttrib(t,"data-mce-selected")&&t.setAttribute("data-mce-selected","2")}),e.on("ObjectSelected",function(e){var t=e.target.getAttribute("data-mce-object");"audio"!==t&&"script"!==t||e.preventDefault()}),e.on("objectResized",function(e){var t,i=e.target;i.getAttribute("data-mce-object")&&(t=i.getAttribute("data-mce-html"),t&&(t=unescape(t),i.setAttribute("data-mce-html",escape(r.updateHtml(t,{width:e.width,height:e.height})))))}),this.showDialog=function(){t.showDialog(e)},e.addButton("media",{tooltip:"Insert/edit media",onclick:this.showDialog,stateSelector:["img[data-mce-object]","span[data-mce-object]","div[data-ephox-embed-iri]"]}),e.addMenuItem("media",{icon:"media",text:"Media",onclick:this.showDialog,context:"insert",prependToContext:!0}),e.on("setContent",function(){e.$("span.mce-preview-object").each(function(t,i){var r=e.$(i);0===r.find("span.mce-shim",i).length&&r.append('<span class="mce-shim"></span>')})}),e.addCommand("mceMedia",this.showDialog)};return e.add("media",n),function(){}}),r("0")()}();