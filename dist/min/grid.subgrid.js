(function(b){b.jgrid.extend({setSubGrid:function(){return this.each(function(){var e;this.p.subGridOptions=b.extend({plusicon:"ui-icon-plus",minusicon:"ui-icon-minus",openicon:"ui-icon-carat-1-sw",expandOnLoad:!1,delayOnLoad:50,selectOnExpand:!1,reloadOnExpand:!0},this.p.subGridOptions||{});this.p.colNames.unshift("");this.p.colModel.unshift({name:"subgrid",width:b.browser.safari||b.browser.webkit?this.p.subGridWidth+this.p.cellLayout:this.p.subGridWidth,sortable:!1,resizable:!1,hidedlg:!0,search:!1,
fixed:!0});e=this.p.subGridModel;if(e[0]){e[0].align=b.extend([],e[0].align||[]);for(var c=0;c<e[0].name.length;c++)e[0].align[c]=e[0].align[c]||"left"}})},addSubGridCell:function(b,c){var a="",m,l;this.each(function(){a=this.formatCol(b,c);l=this.p.id;m=this.p.subGridOptions.plusicon});return'<td role="gridcell" aria-describedby="'+l+'_subgrid" class="ui-sgcollapsed sgcollapsed" '+a+"><a href='javascript:void(0);'><span class='ui-icon "+m+"'></span></a></td>"},addSubGrid:function(e,c){return this.each(function(){var a=
this;if(a.grid){var m=function(c,e,h){e=b("<td align='"+a.p.subGridModel[0].align[h]+"'></td>").html(e);b(c).append(e)},l=function(c,e){var h,f,n,d=b("<table cellspacing='0' cellpadding='0' border='0'><tbody></tbody></table>"),i=b("<tr></tr>");for(f=0;f<a.p.subGridModel[0].name.length;f++)h=b("<th class='ui-state-default ui-th-subgrid ui-th-column ui-th-"+a.p.direction+"'></th>"),b(h).html(a.p.subGridModel[0].name[f]),b(h).width(a.p.subGridModel[0].width[f]),b(i).append(h);b(d).append(i);c&&(n=a.p.xmlReader.subgrid,
b(n.root+" "+n.row,c).each(function(){i=b("<tr class='ui-widget-content ui-subtblcell'></tr>");if(!0===n.repeatitems)b(n.cell,this).each(function(a){m(i,b(this).text()||"&#160;",a)});else{var c=a.p.subGridModel[0].mapping||a.p.subGridModel[0].name;if(c)for(f=0;f<c.length;f++)m(i,b(c[f],this).text()||"&#160;",f)}b(d).append(i)}));h=b("table:first",a.grid.bDiv).attr("id")+"_";b("#"+b.jgrid.jqID(h+e)).append(d);a.grid.hDiv.loading=!1;b("#load_"+b.jgrid.jqID(a.p.id)).hide();return!1},p=function(c,e){var h,
f,d,g,i,k=b("<table cellspacing='0' cellpadding='0' border='0'><tbody></tbody></table>"),j=b("<tr></tr>");for(f=0;f<a.p.subGridModel[0].name.length;f++)h=b("<th class='ui-state-default ui-th-subgrid ui-th-column ui-th-"+a.p.direction+"'></th>"),b(h).html(a.p.subGridModel[0].name[f]),b(h).width(a.p.subGridModel[0].width[f]),b(j).append(h);b(k).append(j);if(c&&(g=a.p.jsonReader.subgrid,h=b.jgrid.getAccessor(c,g.root),"undefined"!==typeof h))for(f=0;f<h.length;f++){d=h[f];j=b("<tr class='ui-widget-content ui-subtblcell'></tr>");
if(!0===g.repeatitems){g.cell&&(d=d[g.cell]);for(i=0;i<d.length;i++)m(j,d[i]||"&#160;",i)}else{var l=a.p.subGridModel[0].mapping||a.p.subGridModel[0].name;if(l.length)for(i=0;i<l.length;i++)m(j,d[l[i]]||"&#160;",i)}b(k).append(j)}f=b("table:first",a.grid.bDiv).attr("id")+"_";b("#"+b.jgrid.jqID(f+e)).append(k);a.grid.hDiv.loading=!1;b("#load_"+b.jgrid.jqID(a.p.id)).hide();return!1},t=function(c){var e,d,f,g;e=b(c).attr("id");d={nd_:(new Date).getTime()};d[a.p.prmNames.subgridid]=e;if(!a.p.subGridModel[0])return!1;
if(a.p.subGridModel[0].params)for(g=0;g<a.p.subGridModel[0].params.length;g++)for(f=0;f<a.p.colModel.length;f++)a.p.colModel[f].name===a.p.subGridModel[0].params[g]&&(d[a.p.colModel[f].name]=b("td:eq("+f+")",c).text().replace(/\&#160\;/ig,""));if(!a.grid.hDiv.loading)switch(a.grid.hDiv.loading=!0,b("#load_"+b.jgrid.jqID(a.p.id)).show(),a.p.subgridtype||(a.p.subgridtype=a.p.datatype),b.isFunction(a.p.subgridtype)?a.p.subgridtype.call(a,d):a.p.subgridtype=a.p.subgridtype.toLowerCase(),a.p.subgridtype){case "xml":case "json":b.ajax(b.extend({type:a.p.mtype,
url:a.p.subGridUrl,dataType:a.p.subgridtype,data:b.isFunction(a.p.serializeSubGridData)?a.p.serializeSubGridData.call(a,d):d,complete:function(c){a.p.subgridtype==="xml"?l(c.responseXML,e):p(b.jgrid.parse(c.responseText),e)}},b.jgrid.ajaxOptions,a.p.ajaxSubgridOptions||{}))}return!1},d,k,q,r=0,g,j;b.each(a.p.colModel,function(){(!0===this.hidden||"rn"===this.name||"cb"===this.name)&&r++});var s=a.rows.length,o=1;void 0!==c&&0<c&&(o=c,s=c+1);for(;o<s;)b(a.rows[o]).hasClass("jqgrow")&&b(a.rows[o].cells[e]).bind("click",
function(){var c=b(this).parent("tr")[0];j=c.nextSibling;if(b(this).hasClass("sgcollapsed")){k=a.p.id;d=c.id;if(a.p.subGridOptions.reloadOnExpand===true||a.p.subGridOptions.reloadOnExpand===false&&!b(j).hasClass("ui-subgrid")){q=e>=1?"<td colspan='"+e+"'>&#160;</td>":"";g=b(a).triggerHandler("jqGridSubGridBeforeExpand",[k+"_"+d,d]);(g=g===false||g==="stop"?false:true)&&b.isFunction(a.p.subGridBeforeExpand)&&(g=a.p.subGridBeforeExpand.call(a,k+"_"+d,d));if(g===false)return false;b(c).after("<tr role='row' class='ui-subgrid'>"+
q+"<td class='ui-widget-content subgrid-cell'><span class='ui-icon "+a.p.subGridOptions.openicon+"'></span></td><td colspan='"+parseInt(a.p.colNames.length-1-r,10)+"' class='ui-widget-content subgrid-data'><div id="+k+"_"+d+" class='tablediv'></div></td></tr>");b(a).triggerHandler("jqGridSubGridRowExpanded",[k+"_"+d,d]);b.isFunction(a.p.subGridRowExpanded)?a.p.subGridRowExpanded.call(a,k+"_"+d,d):t(c)}else b(j).show();b(this).html("<a href='javascript:void(0);'><span class='ui-icon "+a.p.subGridOptions.minusicon+
"'></span></a>").removeClass("sgcollapsed").addClass("sgexpanded");a.p.subGridOptions.selectOnExpand&&b(a).jqGrid("setSelection",d)}else if(b(this).hasClass("sgexpanded")){g=b(a).triggerHandler("jqGridSubGridRowColapsed",[k+"_"+d,d]);if((g=g===false||g==="stop"?false:true)&&b.isFunction(a.p.subGridRowColapsed)){d=c.id;g=a.p.subGridRowColapsed.call(a,k+"_"+d,d)}if(g===false)return false;a.p.subGridOptions.reloadOnExpand===true?b(j).remove(".ui-subgrid"):b(j).hasClass("ui-subgrid")&&b(j).hide();b(this).html("<a href='javascript:void(0);'><span class='ui-icon "+
a.p.subGridOptions.plusicon+"'></span></a>").removeClass("sgexpanded").addClass("sgcollapsed")}return false}),o++;!0===a.p.subGridOptions.expandOnLoad&&b(a.rows).filter(".jqgrow").each(function(a,c){b(c.cells[0]).click()});a.subGridXml=function(a,b){l(a,b)};a.subGridJson=function(a,b){p(a,b)}}})},expandSubGridRow:function(e){return this.each(function(){if((this.grid||e)&&!0===this.p.subGrid){var c=b(this).jqGrid("getInd",e,!0);c&&(c=b("td.sgcollapsed",c)[0])&&b(c).trigger("click")}})},collapseSubGridRow:function(e){return this.each(function(){if((this.grid||
e)&&!0===this.p.subGrid){var c=b(this).jqGrid("getInd",e,!0);c&&(c=b("td.sgexpanded",c)[0])&&b(c).trigger("click")}})},toggleSubGridRow:function(e){return this.each(function(){if((this.grid||e)&&!0===this.p.subGrid){var c=b(this).jqGrid("getInd",e,!0);if(c){var a=b("td.sgcollapsed",c)[0];a?b(a).trigger("click"):(a=b("td.sgexpanded",c)[0])&&b(a).trigger("click")}}})}})})(jQuery);