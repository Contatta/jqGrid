(function(b){b.extend(b.jgrid,{template:function(a){var c=b.makeArray(arguments).slice(1),e,f=c.length;void 0===a&&(a="");return a.replace(/\{([\w\-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}/g,function(a,h){if(isNaN(parseInt(h,10)))for(e=0;e<f;e++){if(b.isArray(c[e]))for(var g=c[e],j=g.length;j--;)if(h===g[j].nm)return g[j].v}else return c[parseInt(h,10)]})}});b.jgrid.extend({groupingSetup:function(){return this.each(function(){var a=this.p.groupingView;if(null!==a&&("object"===typeof a||b.isFunction(a)))if(a.groupField.length){"undefined"===
typeof a.visibiltyOnNextGrouping&&(a.visibiltyOnNextGrouping=[]);a.lastvalues=[];a.groups=[];a.counters=[];for(var c=0;c<a.groupField.length;c++)a.groupOrder[c]||(a.groupOrder[c]="asc"),a.groupText[c]||(a.groupText[c]="{0}"),"boolean"!==typeof a.groupColumnShow[c]&&(a.groupColumnShow[c]=!0),"boolean"!==typeof a.groupSummary[c]&&(a.groupSummary[c]=!1),!0===a.groupColumnShow[c]?(a.visibiltyOnNextGrouping[c]=!0,b(this).jqGrid("showCol",a.groupField[c])):(a.visibiltyOnNextGrouping[c]=b("#"+b.jgrid.jqID(this.p.id+
"_"+a.groupField[c])).is(":visible"),b(this).jqGrid("hideCol",a.groupField[c]));a.summary=[];for(var c=this.p.colModel,e=0,f=c.length;e<f;e++)c[e].summaryType&&a.summary.push({nm:c[e].name,st:c[e].summaryType,v:"",sr:c[e].summaryRound,srt:c[e].summaryRoundType||"round"})}else this.p.grouping=!1;else this.p.grouping=!1})},groupingPrepare:function(a,c,e,f){this.each(function(){for(var d=this.p.groupingView,h=this,g=d.groupField.length,j,k,p=0,i=0;i<g;i++)j=d.groupField[i],k=e[j],void 0!==k&&(0===f?
(d.groups.push({idx:i,dataIndex:j,value:k,startRow:f,cnt:1,summary:[]}),d.lastvalues[i]=k,d.counters[i]={cnt:1,pos:d.groups.length-1,summary:b.extend(!0,[],d.summary)}):"object"!==typeof k&&d.lastvalues[i]!==k?(d.groups.push({idx:i,dataIndex:j,value:k,startRow:f,cnt:1,summary:[]}),d.lastvalues[i]=k,p=1,d.counters[i]={cnt:1,pos:d.groups.length-1,summary:b.extend(!0,[],d.summary)}):1===p?(d.groups.push({idx:i,dataIndex:j,value:k,startRow:f,cnt:1,summary:[]}),d.lastvalues[i]=k,d.counters[i]={cnt:1,pos:d.groups.length-
1,summary:b.extend(!0,[],d.summary)}):(d.counters[i].cnt+=1,d.groups[d.counters[i].pos].cnt=d.counters[i].cnt),b.each(d.counters[i].summary,function(){this.v=b.isFunction(this.st)?this.st.call(h,this.v,this.nm,e):b(h).jqGrid("groupingCalculations.handler",this.st,this.v,this.nm,this.sr,this.srt,e)}),d.groups[d.counters[i].pos].summary=d.counters[i].summary);c.push(a)});return c},groupingToggle:function(a){this.each(function(){var c=this.p.groupingView,e=a.split("_"),f=parseInt(e[e.length-2],10);e.splice(e.length-
2,2);var e=e.join("_"),d=c.minusicon,h=c.plusicon,g=b("#"+b.jgrid.jqID(a)),g=g.length?g[0].nextSibling:null,j=b("#"+b.jgrid.jqID(a)+" span.tree-wrap-"+this.p.direction),k=!1;if(j.hasClass(d)){if(c.showSummaryOnHide){if(g)for(;g&&!(b(g).hasClass("jqfoot")&&parseInt(b(g).attr("jqfootlevel"),10)<=f);)b(g).hide(),g=g.nextSibling}else if(g)for(;g&&!b(g).hasClass(e+"_"+(""+f))&&!b(g).hasClass(e+"_"+(""+(f-1)));)b(g).hide(),g=g.nextSibling;j.removeClass(d).addClass(h);k=!0}else{if(g)for(;g&&!b(g).hasClass(e+
"_"+(""+f))&&!b(g).hasClass(e+"_"+(""+(f-1)));)b(g).show(),(c=b(g).find("span.tree-wrap-"+this.p.direction))&&b(c).hasClass(h)&&b(c).removeClass(h).addClass(d),g=g.nextSibling;j.removeClass(h).addClass(d)}b(this).triggerHandler("jqGridGroupingClickGroup",[a,k]);b.isFunction(this.p.onClickGroup)&&this.p.onClickGroup.call(this,a,k)});return!1},groupingRender:function(a,c){return this.each(function(){function e(a,c,b){var e=!1;if(0===c)e=b[a];else{var d=b[a].idx;if(0===d)e=b[a];else for(;0<=a;a--)if(b[a].idx===
d-c){e=b[a];break}}return e}var f=this,d=f.p.groupingView,h="",g="",j,k,p=d.groupCollapse?d.plusicon:d.minusicon,i,w=[],x=d.groupField.length,p=p+(" tree-wrap-"+f.p.direction);b.each(f.p.colModel,function(a,b){for(var c=0;c<x;c++)if(d.groupField[c]===b.name){w[c]=a;break}});var s=0,y=b.makeArray(d.groupSummary);y.reverse();b.each(d.groups,function(r,l){s++;k=f.p.id+"ghead_"+l.idx;j=k+"_"+r;g="<span style='cursor:pointer;' class='ui-icon "+p+"' onclick=\"jQuery('#"+b.jgrid.jqID(f.p.id)+"').jqGrid('groupingToggle','"+
j+"');return false;\"></span>";try{i=f.formatter(j,l.value,w[l.idx],l.value)}catch(C){i=l.value}h+='<tr id="'+j+'" role="row" class= "ui-widget-content jqgroup ui-row-'+f.p.direction+" "+k+'"><td style="padding-left:'+12*l.idx+'px;" colspan="'+c+'">'+g+b.jgrid.template(d.groupText[l.idx],i,l.cnt,l.summary)+"</td></tr>";if(x-1===l.idx){for(var m=d.groups[r+1],o=void 0!==m?d.groups[r+1].startRow:a.length,t=l.startRow;t<o;t++)h+=a[t].join("");var q;if(void 0!==m){for(q=0;q<d.groupField.length&&m.dataIndex!==
d.groupField[q];q++);s=d.groupField.length-q}for(m=0;m<s;m++)if(y[m]){o="";d.groupCollapse&&!d.showSummaryOnHide&&(o=' style="display:none;"');h+="<tr"+o+' jqfootlevel="'+(l.idx-m)+'" role="row" class="ui-widget-content jqfoot ui-row-'+f.p.direction+'">';for(var o=e(r,m,d.groups),u=f.p.colModel,v,z=o.cnt,n=0;n<c;n++){var A="<td "+f.formatCol(n,1,"")+">&#160;</td>",B="{0}";b.each(o.summary,function(){if(this.nm===u[n].name){u[n].summaryTpl&&(B=u[n].summaryTpl);"string"===typeof this.st&&"avg"===this.st.toLowerCase()&&
this.v&&0<z&&(this.v/=z);try{v=f.formatter("",this.v,n,this)}catch(a){v=this.v}A="<td "+f.formatCol(n,1,"")+">"+b.jgrid.format(B,v)+"</td>";return!1}});h+=A}h+="</tr>"}s=q}});b("#"+b.jgrid.jqID(f.p.id)+" tbody:first").append(h);h=null})},groupingGroupBy:function(a,c){return this.each(function(){"string"===typeof a&&(a=[a]);var e=this.p.groupingView;this.p.grouping=!0;"undefined"===typeof e.visibiltyOnNextGrouping&&(e.visibiltyOnNextGrouping=[]);var f;for(f=0;f<e.groupField.length;f++)!e.groupColumnShow[f]&&
e.visibiltyOnNextGrouping[f]&&b(this).jqGrid("showCol",e.groupField[f]);for(f=0;f<a.length;f++)e.visibiltyOnNextGrouping[f]=b("#"+b.jgrid.jqID(this.p.id)+"_"+b.jgrid.jqID(a[f])).is(":visible");this.p.groupingView=b.extend(this.p.groupingView,c||{});e.groupField=a;b(this).trigger("reloadGrid")})},groupingRemove:function(a){return this.each(function(){"undefined"===typeof a&&(a=!0);this.p.grouping=!1;if(!0===a){for(var c=this.p.groupingView,e=0;e<c.groupField.length;e++)!c.groupColumnShow[e]&&c.visibiltyOnNextGrouping[e]&&
b(this).jqGrid("showCol",c.groupField);b("tr.jqgroup, tr.jqfoot","#"+b.jgrid.jqID(this.p.id)+" tbody:first").remove();b("tr.jqgrow:hidden","#"+b.jgrid.jqID(this.p.id)+" tbody:first").show()}else b(this).trigger("reloadGrid")})},groupingCalculations:{handler:function(a,c,b,f,d,h){var g={sum:function(){return parseFloat(c||0)+parseFloat(h[b]||0)},min:function(){return""===c?parseFloat(h[b]||0):Math.min(parseFloat(c),parseFloat(h[b]||0))},max:function(){return""===c?parseFloat(h[b]||0):Math.max(parseFloat(c),
parseFloat(h[b]||0))},count:function(){""===c&&(c=0);return h.hasOwnProperty(b)?c+1:0},avg:function(){return g.sum()}};if(!g[a])throw"jqGrid Grouping No such method: "+a;a=g[a]();null!=f&&("fixed"==d?a=a.toFixed(f):(f=Math.pow(10,f),a=Math.round(a*f)/f));return a}}})})(jQuery);