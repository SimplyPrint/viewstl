function e(e,r,n){var o=null;switch(e.split(".").pop().split("?")[0].toLowerCase()){case"stl":default:o=t(r);break;case"obj":o=function(e){var t=a(e);function r(e,a,t){return new Array(parseFloat(e),parseFloat(a),parseFloat(t))}function n(e,a){return new Array(parseFloat(e),parseFloat(a))}function o(e){return(e=parseInt(e))>=0?e-1:e+i.length}function l(e,a,t,r){u.push(new Array(o(e),o(a),o(t)))}function s(e,a,t){}function d(e,a,t){void 0===e[3]?(l(e[0],e[1],e[2],t),void 0!==a&&a.length>0&&s(a[0],a[1],a[2])):(void 0!==t&&t.length>0?(l(e[0],e[1],e[3],[t[0],t[1],t[3]]),l(e[1],e[2],e[3],[t[1],t[2],t[3]])):(l(e[0],e[1],e[3]),l(e[1],e[2],e[3])),void 0!==a&&a.length>0&&(s(a[0],a[1],a[3]),s(a[1],a[2],a[3])))}for(var i=[],c=[],f=[],u=[],g=/v( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/,p=/vn( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/,h=/vt( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/,y=/f( +-?\d+)( +-?\d+)( +-?\d+)( +-?\d+)?/,v=/f( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))?/,b=/f( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))?/,w=/f( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))?/,_=t.split("\n"),m=0;m<_.length;m++){var R,A=_[m];0!==(A=A.trim()).length&&"#"!==A.charAt(0)&&(null!==(R=g.exec(A))?i.push(r(R[1],R[2],R[3])):null!==(R=p.exec(A))?c.push(r(R[1],R[2],R[3])):null!==(R=h.exec(A))?f.push(n(R[1],R[2])):null!==(R=y.exec(A))?d([R[1],R[2],R[3],R[4]]):null!==(R=v.exec(A))?d([R[2],R[5],R[8],R[11]],[R[3],R[6],R[9],R[12]]):null!==(R=b.exec(A))?d([R[2],R[6],R[10],R[14]],[R[3],R[7],R[11],R[15]],[R[4],R[8],R[12],R[16]]):null!==(R=w.exec(A))&&d([R[2],R[5],R[8],R[11]],[],[R[3],R[6],R[9],R[12]]))}return{vertices:i,faces:u,colors:!1}}(r);break;case"vf":o=function(e){var a=JSON.parse(e),t=[],r=[];try{var n=a.vertices.length;for(i=0;i<n;i++)t.push(new Array(a.vertices[i][0],a.vertices[i][1],a.vertices[i][2]));n=a.faces.length;for(i=0;i<n;i++)r.push(new Array(a.faces[i][0],a.faces[i][1],a.faces[i][2]));return{vertices:t,faces:r,colors:!1}}catch(e){return"ERROR4: "+e.message}}(a(r))}n&&n(o)}function a(e,a,t){if("undefined"!=typeof TextDecoder)return new TextDecoder("utf-8").decode(e);for(var r=new Uint8Array(e),n=r.length,o="",l=0;l<n;l+=16383){var s=16383;l+16383>n&&(s=n-l),o+=String.fromCharCode.apply(null,r.subarray(l,l+s))}return o}function t(e){var t,r,n,o,l,s,d,i=[],c=[],f={},u=!1;if(!e)return null;var g=a(e.slice(0,80)).toLowerCase().indexOf("color"),p=new DataView(e,0),h=!1,y=-1,v=-1,b=-1;g>-1&&(u=!0,y=p.getUint8(g+6,!0)/31,v=p.getUint8(g+7,!0)/31,b=p.getUint8(g+8,!0)/31);var w=80;try{var _=p.getUint32(w,!0)}catch(e){return"ERROR2: "+e.message}var m=84+50*_;if(e.byteLength!=m)return function(e){try{var t=a(e),r=[],n=[],o={};t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace(/\r/,"\n")).replace(/^solid[^\n]*/,"")).replace(/\n/g," ")).replace(/facet normal /g,"")).replace(/outer loop/g,"")).replace(/vertex /g,"")).replace(/endloop/g,"")).replace(/endfacet/g,"")).replace(/endsolid[^\n]*/,"")).replace(/facet/g,"")).replace(/\s+/g," ")).replace(/^\s+/,"");for(var l,s=0,d=t.split(" "),i=[],c=d.length/12-1,f=0;f<c;f++){i=[];for(var u=0;u<3;u++)f1=parseFloat(d[s+3*u+3]),f2=parseFloat(d[s+3*u+4]),f3=parseFloat(d[s+3*u+5]),null==(l=o[[f1,f2,f3]])&&(l=r.length,r.push(new Array(f1,f2,f3)),o[[f1,f2,f3]]=l),i.push(l);n.push(new Array(i[0],i[1],i[2])),s+=12}return{vertices:r,faces:n,colors:!1}}catch(e){return"ERROR1: "+e.message}}(e);try{for(w+=4;_--;){w+=12,null==(t=f[[r=p.getFloat32(w,!0),n=p.getFloat32(w+4,!0),o=p.getFloat32(w+8,!0)]])&&(t=i.length,i.push(new Array(r,n,o)),f[[r,n,o]]=t),l=t,w+=12,null==(t=f[[r=p.getFloat32(w,!0),n=p.getFloat32(w+4,!0),o=p.getFloat32(w+8,!0)]])&&(t=i.length,i.push(new Array(r,n,o)),f[[r,n,o]]=t),s=t,w+=12,null==(t=f[[r=p.getFloat32(w,!0),n=p.getFloat32(w+4,!0),o=p.getFloat32(w+8,!0)]])&&(t=i.length,i.push(new Array(r,n,o)),f[[r,n,o]]=t),d=t,w+=12;var R,A,F,x=p.getUint16(w,!0);if(u?1:(32768&x)>>15)u?32768==x||65535==x?(R=y,A=v,F=b):(h=!0,R=(31&x)/31,A=((992&x)>>5)/31,F=((31744&x)>>10)/31):(h=!0,F=(31&x)/31,A=((992&x)>>5)/31,R=((31744&x)>>10)/31),c.push(new Array(l,s,d,R,A,F));else c.push(new Array(l,s,d));w+=2}return f=null,{vertices:i,faces:c,colors:h}}catch(e){return"ERROR3: "+e.message}}ArrayBuffer.prototype.slice||(ArrayBuffer.prototype.slice=function(e,a){if(void 0===e&&(e=0),void 0===a&&(a=this.byteLength),e=Math.floor(e),a=Math.floor(a),e<0&&(e+=this.byteLength),a<0&&(a+=this.byteLength),e=Math.min(Math.max(0,e),this.byteLength),(a=Math.min(Math.max(0,a),this.byteLength))-e<=0)return new ArrayBuffer(0);var t=new ArrayBuffer(a-e),r=new Uint8Array(t),n=new Uint8Array(this,e,a-e);return r.set(n),t});let r=null,n=null,o=null,l=0,s=0,d=0,c=-1,f=!1;function u(e){return!isNaN(parseFloat(e))&&isFinite(e)}function g(e){postMessage({msg_type:2,data:e})}function p(a){let t;if(a)try{t=e(r,a,h)}catch(e){return console.log(e),void g("Error parsing the file")}else g("no data")}function h(e){"string"!=typeof e?postMessage({msg_type:3,vertices:e.vertices,faces:e.faces,colors:e.colors}):g(e)}function y(e){let a=new FileReader;a.onerror=function(e){let a="";switch(e.target.error.code){case e.target.error.NOT_FOUND_ERR:a="File not found";break;case e.target.error.NOT_READABLE_ERR:a="Can't read file - too large?";break;case e.target.error.ABORT_ERR:a="Read operation aborted";break;case e.target.error.SECURITY_ERR:a="File is locked";break;case e.target.error.ENCODING_ERR:a="File too large";break;default:a="Error reading file"}g(a)},a.onprogress=function(e){postMessage({msg_type:4,id:c,loaded:e.loaded,total:e.total})},a.onload=function(e){p(e.target.result)},a.readAsArrayBuffer(e)}onmessage=function(e){switch(e.data.msg_type){case 0:if(!e.data.data){g("no data");break}if(!e.data.data.filename&&!e.data.data.local_file){g("no file");break}e.data.data.local_file?(r=e.data.data.local_file.name?e.data.data.local_file.name:e.data.data.filename,n=e.data.data.local_file?e.data.data.local_file:null):e.data.data.filename&&(r=e.data.data.filename),e.data.data.x&&u(e.data.data.x)&&(l=e.data.data.x),e.data.data.y&&u(e.data.data.y)&&(s=e.data.data.y),e.data.data.y&&u(e.data.data.z)&&(d=e.data.data.z),o=null,e.data.load_from_blob_or_ab&&(o=e.data.load_from_blob_or_ab),c=e.data.data.id?e.data.data.id:-1,f=!!e.data.get_progress&&e.data.get_progress;break;case 1:o?o instanceof ArrayBuffer?p(o):y(o):n?y(n):r&&(a=r,fetch?async function(e){const a=await fetch(e),t=a.body.getReader(),r=Number(a.headers.get("content-length")),n=new Uint8Array(r);let o=0;for(;;){const{done:e,value:a}=await t.read();if(e)break;a&&(n.set(a,o),o+=a.length,f&&postMessage({msg_type:4,id:c,loaded:o,total:r}))}p(n.buffer)}(a):function(e){let a=new XMLHttpRequest;f&&(a.onprogress=function(e){postMessage({msg_type:4,id:c,loaded:e.loaded,total:e.total})}),a.onreadystatechange=function(e){4==a.readyState&&200==a.status&&p(a.response)},a.open("GET",e,!0),a.responseType="arraybuffer",a.send(null)}(a));break;default:console.log("invalid msg: "+e.data.msg_type)}var a};
//# sourceMappingURL=worker.de3e1d2e.js.map
