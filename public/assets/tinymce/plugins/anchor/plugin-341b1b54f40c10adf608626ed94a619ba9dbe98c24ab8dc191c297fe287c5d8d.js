tinymce.PluginManager.add("anchor",function(e){var t=function(e){return!e.attr("href")&&(e.attr("id")||e.attr("name"))&&!e.firstChild},n=function(e){return function(n){for(var a=0;a<n.length;a++)t(n[a])&&n[a].attr("contenteditable",e)}},a=function(){var t=e.selection.getNode(),n="A"==t.tagName&&""===e.dom.getAttrib(t,"href"),a="";n&&(a=t.id||t.name||""),e.windowManager.open({title:"Anchor",body:{type:"textbox",name:"id",size:40,label:"Id",value:a},onsubmit:function(a){var o=a.data.id;n?(t.removeAttribute("name"),t.id=o):(e.selection.collapse(!0),e.execCommand("mceInsertContent",!1,e.dom.createHTML("a",{id:o})))}})};tinymce.Env.ceFalse&&e.on("PreInit",function(){e.parser.addNodeFilter("a",n("false")),e.serializer.addNodeFilter("a",n(null))}),e.addCommand("mceAnchor",a),e.addButton("anchor",{icon:"anchor",tooltip:"Anchor",onclick:a,stateSelector:"a:not([href])"}),e.addMenuItem("anchor",{icon:"anchor",text:"Anchor",context:"insert",onclick:a})});