var Jr={};(function(kr){var qr=function(dr){var Q="b",P="w",L=-1,N="p",ir="n",J="b",Er="r",yr="q",j="k",xr="pnbrqkPNBRQK",or="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",Qr=["1-0","0-1","1/2-1/2","*"],sr={b:[16,32,17,15],w:[-16,-32,-17,-15]},br={n:[-18,-33,-31,-14,18,33,31,14],b:[-17,-15,17,15],r:[-16,1,16,-1],q:[-17,-16,-15,1,17,16,15,-1],k:[-17,-16,-15,1,17,16,15,-1]},Dr=[20,0,0,0,0,0,0,24,0,0,0,0,0,0,20,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,24,24,24,24,24,24,56,0,56,24,24,24,24,24,24,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,20,0,0,0,0,0,0,24,0,0,0,0,0,0,20],Ur=[17,0,0,0,0,0,0,16,0,0,0,0,0,0,15,0,0,17,0,0,0,0,0,16,0,0,0,0,0,15,0,0,0,0,17,0,0,0,0,16,0,0,0,0,15,0,0,0,0,0,0,17,0,0,0,16,0,0,0,15,0,0,0,0,0,0,0,0,17,0,0,16,0,0,15,0,0,0,0,0,0,0,0,0,0,17,0,16,0,15,0,0,0,0,0,0,0,0,0,0,0,0,17,16,15,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,-15,-16,-17,0,0,0,0,0,0,0,0,0,0,0,0,-15,0,-16,0,-17,0,0,0,0,0,0,0,0,0,0,-15,0,0,-16,0,0,-17,0,0,0,0,0,0,0,0,-15,0,0,0,-16,0,0,0,-17,0,0,0,0,0,0,-15,0,0,0,0,-16,0,0,0,0,-17,0,0,0,0,-15,0,0,0,0,0,-16,0,0,0,0,0,-17,0,0,-15,0,0,0,0,0,0,-16,0,0,0,0,0,0,-17],Br={p:0,n:1,b:2,r:3,q:4,k:5},Ar={NORMAL:"n",CAPTURE:"c",BIG_PAWN:"b",EP_CAPTURE:"e",PROMOTION:"p",KSIDE_CASTLE:"k",QSIDE_CASTLE:"q"},i={NORMAL:1,CAPTURE:2,BIG_PAWN:4,EP_CAPTURE:8,PROMOTION:16,KSIDE_CASTLE:32,QSIDE_CASTLE:64},$r=7,Fr=6,Mr=1,Wr=0,p={a8:0,b8:1,c8:2,d8:3,e8:4,f8:5,g8:6,h8:7,a7:16,b7:17,c7:18,d7:19,e7:20,f7:21,g7:22,h7:23,a6:32,b6:33,c6:34,d6:35,e6:36,f6:37,g6:38,h6:39,a5:48,b5:49,c5:50,d5:51,e5:52,f5:53,g5:54,h5:55,a4:64,b4:65,c4:66,d4:67,e4:68,f4:69,g4:70,h4:71,a3:80,b3:81,c3:82,d3:83,e3:84,f3:85,g3:86,h3:87,a2:96,b2:97,c2:98,d2:99,e2:100,f2:101,g2:102,h2:103,a1:112,b1:113,c1:114,d1:115,e1:116,f1:117,g1:118,h1:119},$={w:[{square:p.a1,flag:i.QSIDE_CASTLE},{square:p.h1,flag:i.KSIDE_CASTLE}],b:[{square:p.a8,flag:i.QSIDE_CASTLE},{square:p.h8,flag:i.KSIDE_CASTLE}]},u=new Array(128),b={w:L,b:L},y=P,d={w:0,b:0},O=L,q=0,F=1,D=[],w={},m={};V(typeof dr=="undefined"?or:dr);function Sr(r){typeof r=="undefined"&&(r=!1),u=new Array(128),b={w:L,b:L},y=P,d={w:0,b:0},O=L,q=0,F=1,D=[],r||(w={}),m={},tr(C())}function mr(){for(var r=[],e={},n=function(t){t in m&&(e[t]=m[t])};D.length>0;)r.push(M());for(n(C());r.length>0;)U(r.pop()),n(C());m=e}function Cr(){V(or)}function V(r,e){typeof e=="undefined"&&(e=!1);var n=r.split(/\s+/),t=n[0],a=0;if(!Tr(r).valid)return!1;Sr(e);for(var f=0;f<t.length;f++){var l=t.charAt(f);if(l==="/")a+=8;else if(zr(l))a+=parseInt(l,10);else{var s=l<"a"?P:Q;Ir({type:l.toLowerCase(),color:s},I(a)),a++}}return y=n[1],n[2].indexOf("K")>-1&&(d.w|=i.KSIDE_CASTLE),n[2].indexOf("Q")>-1&&(d.w|=i.QSIDE_CASTLE),n[2].indexOf("k")>-1&&(d.b|=i.KSIDE_CASTLE),n[2].indexOf("q")>-1&&(d.b|=i.QSIDE_CASTLE),O=n[3]==="-"?L:p[n[3]],q=parseInt(n[4],10),F=parseInt(n[5],10),tr(C()),!0}function Tr(r){var e={0:"No errors.",1:"FEN string must contain six space-delimited fields.",2:"6th field (move number) must be a positive integer.",3:"5th field (half move counter) must be a non-negative integer.",4:"4th field (en-passant square) is invalid.",5:"3rd field (castling availability) is invalid.",6:"2nd field (side to move) is invalid.",7:"1st field (piece positions) does not contain 8 '/'-delimited rows.",8:"1st field (piece positions) is invalid [consecutive numbers].",9:"1st field (piece positions) is invalid [invalid piece].",10:"1st field (piece positions) is invalid [row too large].",11:"Illegal en-passant square"},n=r.split(/\s+/);if(n.length!==6)return{valid:!1,error_number:1,error:e[1]};if(isNaN(n[5])||parseInt(n[5],10)<=0)return{valid:!1,error_number:2,error:e[2]};if(isNaN(n[4])||parseInt(n[4],10)<0)return{valid:!1,error_number:3,error:e[3]};if(!/^(-|[abcdefgh][36])$/.test(n[3]))return{valid:!1,error_number:4,error:e[4]};if(!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(n[2]))return{valid:!1,error_number:5,error:e[5]};if(!/^(w|b)$/.test(n[1]))return{valid:!1,error_number:6,error:e[6]};var t=n[0].split("/");if(t.length!==8)return{valid:!1,error_number:7,error:e[7]};for(var a=0;a<t.length;a++){for(var f=0,l=!1,s=0;s<t[a].length;s++)if(isNaN(t[a][s])){if(!/^[prnbqkPRNBQK]$/.test(t[a][s]))return{valid:!1,error_number:9,error:e[9]};f+=1,l=!1}else{if(l)return{valid:!1,error_number:8,error:e[8]};f+=parseInt(t[a][s],10),l=!0}if(f!==8)return{valid:!1,error_number:10,error:e[10]}}return n[3][1]=="3"&&n[1]=="w"||n[3][1]=="6"&&n[1]=="b"?{valid:!1,error_number:11,error:e[11]}:{valid:!0,error_number:0,error:e[0]}}function C(){for(var r=0,e="",n=p.a8;n<=p.h1;n++){if(u[n]==null)r++;else{r>0&&(e+=r,r=0);var t=u[n].color,a=u[n].type;e+=t===P?a.toUpperCase():a.toLowerCase()}n+1&136&&(r>0&&(e+=r),n!==p.h1&&(e+="/"),r=0,n+=8)}var f="";d[P]&i.KSIDE_CASTLE&&(f+="K"),d[P]&i.QSIDE_CASTLE&&(f+="Q"),d[Q]&i.KSIDE_CASTLE&&(f+="k"),d[Q]&i.QSIDE_CASTLE&&(f+="q"),f=f||"-";var l=O===L?"-":I(O);return[e,y,f,l,q,F].join(" ")}function vr(r){for(var e=0;e<r.length;e+=2)typeof r[e]=="string"&&typeof r[e+1]=="string"&&(w[r[e]]=r[e+1]);return w}function tr(r){D.length>0||(r!==or?(w.SetUp="1",w.FEN=r):(delete w.SetUp,delete w.FEN))}function wr(r){var e=u[p[r]];return e?{type:e.type,color:e.color}:null}function Ir(r,e){if(!("type"in r&&"color"in r)||xr.indexOf(r.type.toLowerCase())===-1||!(e in p))return!1;var n=p[e];return r.type==j&&!(b[r.color]==L||b[r.color]==n)?!1:(u[n]={type:r.type,color:r.color},r.type===j&&(b[r.color]=n),tr(C()),!0)}function Gr(r){var e=wr(r);return u[p[r]]=null,e&&e.type===j&&(b[e.color]=L),tr(C()),e}function Rr(r,e,n,t,a){var f={color:y,from:e,to:n,flags:t,piece:r[e].type};return a&&(f.flags|=i.PROMOTION,f.promotion=a),r[n]?f.captured=r[n].type:t&i.EP_CAPTURE&&(f.captured=N),f}function x(r){function e(Z,_,T,G,nr){if(Z[T].type===N&&(W(G)===Wr||W(G)===$r))for(var z=[yr,Er,J,ir],Y=0,ur=z.length;Y<ur;Y++)_.push(Rr(Z,T,G,nr,z[Y]));else _.push(Rr(Z,T,G,nr))}var n=[],t=y,a=er(t),f={b:Mr,w:Fr},l=p.a8,s=p.h1,v=!1,E=typeof r!="undefined"&&"legal"in r?r.legal:!0,c=typeof r!="undefined"&&"piece"in r&&typeof r.piece=="string"?r.piece.toLowerCase():!0;if(typeof r!="undefined"&&"square"in r)if(r.square in p)l=s=p[r.square],v=!0;else return[];for(var o=l;o<=s;o++){if(o&136){o+=7;continue}var A=u[o];if(!(A==null||A.color!==t)){if(A.type===N&&(c===!0||c===N)){var h=o+sr[t][0];if(u[h]==null){e(u,n,o,h,i.NORMAL);var h=o+sr[t][1];f[t]===W(o)&&u[h]==null&&e(u,n,o,h,i.BIG_PAWN)}for(g=2;g<4;g++){var h=o+sr[t][g];h&136||(u[h]!=null&&u[h].color===a?e(u,n,o,h,i.CAPTURE):h===O&&e(u,n,o,O,i.EP_CAPTURE))}}else if(c===!0||c===A.type)for(var g=0,K=br[A.type].length;g<K;g++)for(var S=br[A.type][g],h=o;h+=S,!(h&136);){if(u[h]==null)e(u,n,o,h,i.NORMAL);else{if(u[h].color===t)break;e(u,n,o,h,i.CAPTURE);break}if(A.type==="n"||A.type==="k")break}}}if((c===!0||c===j)&&(!v||s===b[t])){if(d[t]&i.KSIDE_CASTLE){var R=b[t],k=R+2;u[R+1]==null&&u[k]==null&&!H(a,b[t])&&!H(a,R+1)&&!H(a,k)&&e(u,n,b[t],k,i.KSIDE_CASTLE)}if(d[t]&i.QSIDE_CASTLE){var R=b[t],k=R-2;u[R-1]==null&&u[R-2]==null&&u[R-3]==null&&!H(a,b[t])&&!H(a,R-1)&&!H(a,k)&&e(u,n,b[t],k,i.QSIDE_CASTLE)}}if(!E)return n;for(var B=[],o=0,K=n.length;o<K;o++)U(n[o]),cr(t)||B.push(n[o]),M();return B}function X(r,e){var n="";if(r.flags&i.KSIDE_CASTLE)n="O-O";else if(r.flags&i.QSIDE_CASTLE)n="O-O-O";else{if(r.piece!==N){var t=Hr(r,e);n+=r.piece.toUpperCase()+t}r.flags&(i.CAPTURE|i.EP_CAPTURE)&&(r.piece===N&&(n+=I(r.from)[0]),n+="x"),n+=I(r.to),r.flags&i.PROMOTION&&(n+="="+r.promotion.toUpperCase())}return U(r),ar()&&(pr()?n+="#":n+="+"),M(),n}function Pr(r){return r.replace(/=/,"").replace(/[+#]?[?!]*$/,"")}function H(r,e){for(var n=p.a8;n<=p.h1;n++){if(n&136){n+=7;continue}if(!(u[n]==null||u[n].color!==r)){var t=u[n],a=n-e,f=a+119;if(Dr[f]&1<<Br[t.type]){if(t.type===N){if(a>0){if(t.color===P)return!0}else if(t.color===Q)return!0;continue}if(t.type==="n"||t.type==="k")return!0;for(var l=Ur[f],s=n+l,v=!1;s!==e;){if(u[s]!=null){v=!0;break}s+=l}if(!v)return!0}}}return!1}function cr(r){return H(er(r),b[r])}function ar(){return cr(y)}function pr(){return ar()&&x().length===0}function hr(){return!ar()&&x().length===0}function gr(){for(var r={},e=[],n=0,t=0,a=p.a8;a<=p.h1;a++){if(t=(t+1)%2,a&136){a+=7;continue}var f=u[a];f&&(r[f.type]=f.type in r?r[f.type]+1:1,f.type===J&&e.push(t),n++)}if(n===2)return!0;if(n===3&&(r[J]===1||r[ir]===1))return!0;if(n===r[J]+2){for(var l=0,s=e.length,a=0;a<s;a++)l+=e[a];if(l===0||l===s)return!0}return!1}function _r(){for(var r=[],e={},n=!1;;){var t=M();if(!t)break;r.push(t)}for(;;){var a=C().split(" ").slice(0,4).join(" ");if(e[a]=a in e?e[a]+1:1,e[a]>=3&&(n=!0),!r.length)break;U(r.pop())}return n}function jr(r){D.push({move:r,kings:{b:b.b,w:b.w},turn:y,castling:{b:d.b,w:d.w},ep_square:O,half_moves:q,move_number:F})}function U(r){var e=y,n=er(e);if(jr(r),u[r.to]=u[r.from],u[r.from]=null,r.flags&i.EP_CAPTURE&&(y===Q?u[r.to-16]=null:u[r.to+16]=null),r.flags&i.PROMOTION&&(u[r.to]={type:r.promotion,color:e}),u[r.to].type===j){if(b[u[r.to].color]=r.to,r.flags&i.KSIDE_CASTLE){var t=r.to-1,a=r.to+1;u[t]=u[a],u[a]=null}else if(r.flags&i.QSIDE_CASTLE){var t=r.to+1,a=r.to-2;u[t]=u[a],u[a]=null}d[e]=""}if(d[e]){for(var f=0,l=$[e].length;f<l;f++)if(r.from===$[e][f].square&&d[e]&$[e][f].flag){d[e]^=$[e][f].flag;break}}if(d[n]){for(var f=0,l=$[n].length;f<l;f++)if(r.to===$[n][f].square&&d[n]&$[n][f].flag){d[n]^=$[n][f].flag;break}}r.flags&i.BIG_PAWN?y==="b"?O=r.to-16:O=r.to+16:O=L,r.piece===N||r.flags&(i.CAPTURE|i.EP_CAPTURE)?q=0:q++,y===Q&&F++,y=er(y)}function M(){var r=D.pop();if(r==null)return null;var e=r.move;b=r.kings,y=r.turn,d=r.castling,O=r.ep_square,q=r.half_moves,F=r.move_number;var n=y,t=er(y);if(u[e.from]=u[e.to],u[e.from].type=e.piece,u[e.to]=null,e.flags&i.CAPTURE)u[e.to]={type:e.captured,color:t};else if(e.flags&i.EP_CAPTURE){var a;n===Q?a=e.to-16:a=e.to+16,u[a]={type:N,color:t}}if(e.flags&(i.KSIDE_CASTLE|i.QSIDE_CASTLE)){var f,l;e.flags&i.KSIDE_CASTLE?(f=e.to+1,l=e.to-1):e.flags&i.QSIDE_CASTLE&&(f=e.to-2,l=e.to+1),u[f]=u[l],u[l]=null}return e}function Hr(r,e){for(var n=r.from,t=r.to,a=r.piece,f=0,l=0,s=0,v=0,E=e.length;v<E;v++){var c=e[v].from,o=e[v].to,A=e[v].piece;a===A&&n!==c&&t===o&&(f++,W(n)===W(c)&&l++,rr(n)===rr(c)&&s++)}return f>0?l>0&&s>0?I(n):s>0?I(n).charAt(1):I(n).charAt(0):""}function Yr(r){var e=r.charAt(0);if(e>="a"&&e<="h"){var n=r.match(/[a-h]\d.*[a-h]\d/);return n?void 0:N}return e=e.toLowerCase(),e==="o"?j:e}function Zr(){for(var r=`   +------------------------+
`,e=p.a8;e<=p.h1;e++){if(rr(e)===0&&(r+=" "+"87654321"[W(e)]+" |"),u[e]==null)r+=" . ";else{var n=u[e].type,t=u[e].color,a=t===P?n.toUpperCase():n.toLowerCase();r+=" "+a+" "}e+1&136&&(r+=`|
`,e+=8)}return r+=`   +------------------------+
`,r+=`     a  b  c  d  e  f  g  h
`,r}function Lr(r,e){var n=Pr(r),t=!1;if(e){var a=n.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/);if(a){var f=a[1],l=a[2],s=a[3],v=a[4];l.length==1&&(t=!0)}else{var a=n.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/);if(a){var f=a[1],l=a[2],s=a[3],v=a[4];if(l.length==1)var t=!0}}}for(var E=Yr(n),c=x({legal:!0,piece:f||E}),o=0,A=c.length;o<A;o++){if(n===Pr(X(c[o],c)))return c[o];if(e&&a){if((!f||f.toLowerCase()==c[o].piece)&&p[l]==c[o].from&&p[s]==c[o].to&&(!v||v.toLowerCase()==c[o].promotion))return c[o];if(t){var h=I(c[o].from);if((!f||f.toLowerCase()==c[o].piece)&&p[s]==c[o].to&&(l==h[0]||l==h[1])&&(!v||v.toLowerCase()==c[o].promotion))return c[o]}}}return null}function W(r){return r>>4}function rr(r){return r&15}function I(r){var e=rr(r),n=W(r);return"abcdefgh".substring(e,e+1)+"87654321".substring(n,n+1)}function er(r){return r===P?Q:P}function zr(r){return"0123456789".indexOf(r)!==-1}function fr(r){var e=Nr(r);e.san=X(e,x({legal:!0})),e.to=I(e.to),e.from=I(e.from);var n="";for(var t in i)i[t]&e.flags&&(n+=Ar[t]);return e.flags=n,e}function Nr(r){var e=r instanceof Array?[]:{};for(var n in r)typeof n=="object"?e[n]=Nr(r[n]):e[n]=r[n];return e}function Or(r){return r.replace(/^\s+|\s+$/g,"")}function Kr(r){for(var e=x({legal:!1}),n=0,t=y,a=0,f=e.length;a<f;a++){if(U(e[a]),!cr(t))if(r-1>0){var l=Kr(r-1);n+=l}else n++;M()}return n}return{WHITE:P,BLACK:Q,PAWN:N,KNIGHT:ir,BISHOP:J,ROOK:Er,QUEEN:yr,KING:j,SQUARES:function(){for(var r=[],e=p.a8;e<=p.h1;e++){if(e&136){e+=7;continue}r.push(I(e))}return r}(),FLAGS:Ar,load:function(r){return V(r)},reset:function(){return Cr()},moves:function(r){for(var e=x(r),n=[],t=0,a=e.length;t<a;t++)typeof r!="undefined"&&"verbose"in r&&r.verbose?n.push(fr(e[t])):n.push(X(e[t],x({legal:!0})));return n},in_check:function(){return ar()},in_checkmate:function(){return pr()},in_stalemate:function(){return hr()},in_draw:function(){return q>=100||hr()||gr()||_r()},insufficient_material:function(){return gr()},in_threefold_repetition:function(){return _r()},game_over:function(){return q>=100||pr()||hr()||gr()||_r()},validate_fen:function(r){return Tr(r)},fen:function(){return C()},board:function(){for(var r=[],e=[],n=p.a8;n<=p.h1;n++)u[n]==null?e.push(null):e.push({type:u[n].type,color:u[n].color}),n+1&136&&(r.push(e),e=[],n+=8);return r},pgn:function(r){var e=typeof r=="object"&&typeof r.newline_char=="string"?r.newline_char:`
`,n=typeof r=="object"&&typeof r.max_width=="number"?r.max_width:0,t=[],a=!1;for(var f in w)t.push("["+f+' "'+w[f]+'"]'+e),a=!0;a&&D.length&&t.push(e);for(var l=function(g){var K=m[C()];if(typeof K!="undefined"){var S=g.length>0?" ":"";g=`${g}${S}{${K}}`}return g},s=[];D.length>0;)s.push(M());var v=[],E="";for(s.length===0&&v.push(l(""));s.length>0;){E=l(E);var c=s.pop();!D.length&&c.color==="b"?E=F+". ...":c.color==="w"&&(E.length&&v.push(E),E=F+"."),E=E+" "+X(c,x({legal:!0})),U(c)}if(E.length&&v.push(l(E)),typeof w.Result!="undefined"&&v.push(w.Result),n===0)return t.join("")+v.join(" ");for(var o=function(){return t.length>0&&t[t.length-1]===" "?(t.pop(),!0):!1},A=function(g,K){for(var S of K.split(" "))if(!!S){if(g+S.length>n){for(;o();)g--;t.push(e),g=0}t.push(S),g+=S.length,t.push(" "),g++}return o()&&g--,g},h=0,f=0;f<v.length;f++){if(h+v[f].length>n&&v[f].includes("{")){h=A(h,v[f]);continue}h+v[f].length>n&&f!==0?(t[t.length-1]===" "&&t.pop(),t.push(e),h=0):f!==0&&(t.push(" "),h++),t.push(v[f]),h+=v[f].length}return t.join("")},load_pgn:function(r,e){var n=typeof e!="undefined"&&"sloppy"in e?e.sloppy:!1;function t(_){return _.replace(/\\/g,"\\")}function a(_,T){for(var G=typeof T=="object"&&typeof T.newline_char=="string"?T.newline_char:`\r?
`,nr={},z=_.split(new RegExp(t(G))),Y="",ur="",lr=0;lr<z.length;lr++)Y=z[lr].replace(/^\[([A-Z][A-Za-z]*)\s.*\]$/,"$1"),ur=z[lr].replace(/^\[[A-Za-z]+\s"(.*)"\ *\]$/,"$1"),Or(Y).length>0&&(nr[Y]=ur);return nr}var f=typeof e=="object"&&typeof e.newline_char=="string"?e.newline_char:`\r?
`,l=new RegExp("^(\\[((?:"+t(f)+")|.)*\\])(?:"+t(f)+"){2}"),s=l.test(r)?l.exec(r)[1]:"";Cr();var v=a(s,e);for(var E in v)vr([E,v[E]]);if(v.SetUp==="1"&&!("FEN"in v&&V(v.FEN,!0)))return!1;for(var c=function(_){return Array.from(_).map(function(T){return T.charCodeAt(0)<128?T.charCodeAt(0).toString(16):encodeURIComponent(T).replace(/\%/g,"").toLowerCase()}).join("")},o=function(_){return _.length==0?"":decodeURIComponent("%"+_.match(/.{1,2}/g).join("%"))},A=function(_){return _=_.replace(new RegExp(t(f),"g")," "),`{${c(_.slice(1,_.length-1))}}`},h=function(_){if(_.startsWith("{")&&_.endsWith("}"))return o(_.slice(1,_.length-1))},g=r.replace(s,"").replace(new RegExp(`({[^}]*})+?|;([^${t(f)}]*)`,"g"),function(_,T,G){return T!==void 0?A(T):" "+A(`{${G.slice(1)}}`)}).replace(new RegExp(t(f),"g")," "),K=/(\([^\(\)]+\))+?/g;K.test(g);)g=g.replace(K,"");g=g.replace(/\d+\.(\.\.)?/g,""),g=g.replace(/\.\.\./g,""),g=g.replace(/\$\d+/g,"");var S=Or(g).split(new RegExp(/\s+/));S=S.join(",").replace(/,,+/g,",").split(",");for(var R="",k="",B=0;B<S.length;B++){var Z=h(S[B]);if(Z!==void 0){m[C()]=Z;continue}if(R=Lr(S[B],n),R==null)if(Qr.indexOf(S[B])>-1)k=S[B];else return!1;else k="",U(R)}return k&&Object.keys(w).length&&!w.Result&&vr(["Result",k]),!0},header:function(){return vr(arguments)},ascii:function(){return Zr()},turn:function(){return y},move:function(r,e){var n=typeof e!="undefined"&&"sloppy"in e?e.sloppy:!1,t=null;if(typeof r=="string")t=Lr(r,n);else if(typeof r=="object"){for(var a=x(),f=0,l=a.length;f<l;f++)if(r.from===I(a[f].from)&&r.to===I(a[f].to)&&(!("promotion"in a[f])||r.promotion===a[f].promotion)){t=a[f];break}}if(!t)return null;var s=fr(t);return U(t),s},undo:function(){var r=M();return r?fr(r):null},clear:function(){return Sr()},put:function(r,e){return Ir(r,e)},get:function(r){return wr(r)},remove:function(r){return Gr(r)},perft:function(r){return Kr(r)},square_color:function(r){if(r in p){var e=p[r];return(W(e)+rr(e))%2===0?"light":"dark"}return null},history:function(r){for(var e=[],n=[],t=typeof r!="undefined"&&("verbose"in r)&&r.verbose;D.length>0;)e.push(M());for(;e.length>0;){var a=e.pop();t?n.push(fr(a)):n.push(X(a,x({legal:!0}))),U(a)}return n},get_comment:function(){return m[C()]},set_comment:function(r){m[C()]=r.replace("{","[").replace("}","]")},delete_comment:function(){var r=m[C()];return delete m[C()],r},get_comments:function(){return mr(),Object.keys(m).map(function(r){return{fen:r,comment:m[r]}})},delete_comments:function(){return mr(),Object.keys(m).map(function(r){var e=m[r];return delete m[r],{fen:r,comment:e}})}}};kr.Chess=qr})(Jr);export{Jr as c};