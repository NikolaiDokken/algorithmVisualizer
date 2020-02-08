(this.webpackJsonpalgovisualizer=this.webpackJsonpalgovisualizer||[]).push([[0],{61:function(e,t,n){e.exports=n(75)},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),o=n.n(i),s=(n(66),n(67),n(45)),l=n(26),c=n(17),u=n(33),d=n(34),h=n(14),f=n(38),m=(n(68),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={},n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.col,n=e.isFinish,a=e.isStart,i=e.isWall,o=e.onMouseDown,s=e.onMouseEnter,l=e.onMouseUp,c=e.row,u=n?"node-finish":a?"node-start":i?"node-wall":"";return r.a.createElement("div",{id:"node-".concat(c,"-").concat(t),className:"noselect node ".concat(u),onMouseDown:function(){return o(c,t)},onMouseEnter:function(){return s(c,t)},onMouseUp:function(){return l(c,t)}})}}]),t}(a.Component));function v(e,t,n){e.sort((function(e,a){return e.distance+(n?g(e,t):0)-(a.distance+(n?g(a,t):0))}))}function g(e,t){var n=e.row,a=e.col,r=t.row,i=t.col;return Math.sqrt(Math.pow(r-n,2)+Math.pow(i-a,2))}function p(e,t){var n=function(e,t){var n=[],a=e.row,r=e.col;a>0&&n.push(t[a-1][r]);r>0&&n.push(t[a][r-1]);a<t.length-1&&n.push(t[a+1][r]);r<t[a].length-1&&n.push(t[a][r+1]);return n.filter((function(e){return!e.isVisited}))}(e,t),a=!0,r=!1,i=void 0;try{for(var o,s=n[Symbol.iterator]();!(a=(o=s.next()).done);a=!0){var l=o.value;l.distance=e.distance+1,l.previousNode=e}}catch(c){r=!0,i=c}finally{try{a||null==s.return||s.return()}finally{if(r)throw i}}}var w=n(31),E=n(118),b=n(110),y=n(117),k=n(119),M=n(80),I=n(124),j=n(77),O=n(123),S=n(120),P=n(121),W=n(122),D=n(52),x=n.n(D),C=n(51),z=n.n(C),N=n(113),F=n(49),G=n.n(F),B=n(116),H=n(115),R=n(79),T=n(114),U=n(125),A=n(126),V=["Select an algorithm","A*","Dijkstra"];function q(e){var t=r.a.useState(!1),n=Object(w.a)(t,2),a=n[0],i=n[1],o=r.a.useRef(null),s=function(e){o.current&&o.current.contains(e.target)||i(!1)};return r.a.createElement("div",{style:{zIndex:"5000"}},r.a.createElement(b.a,{container:!0,direction:"column",alignItems:"center"},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(N.a,{variant:"contained",color:"primary",ref:o,"aria-label":"split button"},r.a.createElement(j.a,{style:{background:"#0328fc"}},V[e.currentIndex]),r.a.createElement(j.a,{style:{background:"#0328fc"},size:"small","aria-controls":a?"split-button-menu":void 0,"aria-expanded":a?"true":void 0,"aria-label":"select merge strategy","aria-haspopup":"menu",onClick:function(){i(!a)}},r.a.createElement(G.a,null))),r.a.createElement(T.a,{open:a,anchorEl:o.current,role:void 0,transition:!0,disablePortal:!0},(function(t){var n=t.TransitionProps,a=t.placement;return r.a.createElement(H.a,Object.assign({},n,{style:{transformOrigin:"bottom"===a?"center top":"center bottom"}}),r.a.createElement(R.a,{className:"dropdown"},r.a.createElement(B.a,{onClickAway:s},r.a.createElement(A.a,{id:"split-button-menu"},V.map((function(t,n){return r.a.createElement(U.a,{key:n,selected:n===e.currentIndex,onClick:function(t){e.setCurrentIndex(n),i(!1)}},t)}))))))})))))}var J=Object(y.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)}}}));function K(e){var t=J(),n=Object(a.useState)(!1),i=Object(w.a)(n,2),o=i[0],s=i[1],l=Object(a.useState)(0),c=Object(w.a)(l,2),u=c[0],d=c[1];function h(){s(!1)}return r.a.createElement("div",{className:t.root},r.a.createElement(E.a,{position:"static",style:{background:"#000"}},r.a.createElement(k.a,null,r.a.createElement(I.a,{smDown:!0},r.a.createElement(M.a,{color:"inherit",style:{width:"280px"}},"Shortest path Algorithm Visualizer")),r.a.createElement(b.a,{container:!0,justify:"center"},r.a.createElement(q,{currentIndex:u,setCurrentIndex:d}),r.a.createElement(j.a,{variant:"contained",endIcon:r.a.createElement(z.a,null),style:{background:"limegreen",margin:"0 10px 0 10px"},onClick:function(){if(0===u)return null;1===u?e.visualizeFunction(!0):2===u&&e.visualizeFunction(!1)}},"Run"),r.a.createElement(j.a,{variant:"contained",color:"secondary",endIcon:r.a.createElement(x.a,null),onClick:function(){return e.clearGrid()},disableElevation:!0,elevation:0},"Clear Board")),r.a.createElement("div",null,r.a.createElement(j.a,{variant:"outlined",color:"primary",onClick:function(){s(!0)}},"Instructions"),r.a.createElement(O.a,{onClose:h,"aria-labelledby":"customized-dialog-title",open:o},r.a.createElement(S.a,{id:"customized-dialog-title",onClose:h},"Instructions"),r.a.createElement(P.a,{dividers:!0},r.a.createElement(M.a,{gutterBottom:!0},"1. Pick an algorithm"," ",r.a.createElement("font",{color:"#0328fc"},"(Blue button)"),r.a.createElement("br",null)," 2. (Optional) Draw walls by dragging/clicking squares.",r.a.createElement("br",null)," 3. (Optional) Move start/end node by dragging them to another square.",r.a.createElement("br",null)," 4. Run the algorithm"," ",r.a.createElement("font",{color:"limegreen"},"(Green button)"),r.a.createElement("br",null)," 5. Clear the board to go again.",r.a.createElement("font",{color:"red"},"(Red button).")," Start/end node will remain at same place",r.a.createElement("br",null),r.a.createElement("br",null),"Mobile users: View the page in landscape mode to get a bigger grid.",r.a.createElement("br",null),"Drawing walls by dragging on mobile is currently not possible, I am working on fixing this!")),r.a.createElement(W.a,null,r.a.createElement(j.a,{autoFocus:!0,onClick:h,color:"primary"},"Ok")))))))}n(74);var L=10,Q=15,X=10,Y=35,Z=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={grid:[],mouseIsPressed:!1,startIsPressed:!1,finishIsPressed:!1},n.visualizeDijkstra=n.visualizeDijkstra.bind(Object(h.a)(n)),n.clearGrid=n.clearGrid.bind(Object(h.a)(n)),n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"clearGrid",value:function(){var e=$();this.setState({grid:e}),setTimeout((function(){e.map((function(e){return e.map((function(e){var t=e.isFinish?"node-finish":e.isStart?"node-start":e.isWall?"node-wall":"";return document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node ".concat(t),null}))}))}),0)}},{key:"componentDidMount",value:function(){this.clearGrid()}},{key:"handleMouseDown",value:function(e,t){if(e===L&&t===Q)this.setState({startIsPressed:!0});else if(e===X&&t===Y)this.setState({finishIsPressed:!0});else{var n=ee(this.state.grid,e,t);this.setState({grid:n,mouseIsPressed:!0})}}},{key:"handleMousEnter",value:function(e,t){if(this.state.startIsPressed){L=e,Q=t;var n=te(this.state.grid);this.setState({grid:n})}else if(this.state.finishIsPressed){X=e,Y=t;var a=te(this.state.grid);this.setState({grid:a})}else{if(!this.state.mouseIsPressed)return;var r=ee(this.state.grid,e,t);this.setState({grid:r})}}},{key:"handleMouseUp",value:function(){this.setState({mouseIsPressed:!1}),this.setState({startIsPressed:!1}),this.setState({finishIsPressed:!1})}},{key:"animateDijkstra",value:function(e,t){for(var n=this,a=function(a){if(a===e.length)return setTimeout((function(){n.animateShortestPath(t)}),10*a),{v:void 0};setTimeout((function(){var t=e[a];document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-visited"}),10*a)},r=0;r<=e.length;r++){var i=a(r);if("object"===typeof i)return i.v}}},{key:"animateShortestPath",value:function(e){for(var t=function(t){setTimeout((function(){var n=e[t];document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node node-shortest-path"}),50*t)},n=0;n<e.length;n++)t(n)}},{key:"visualizeDijkstra",value:function(e){var t=this.state.grid,n=t[L][Q],a=t[X][Y],r=function(e,t,n,a){var r=[];t.distance=0;for(var i=function(e){for(var t=[],n=0;n<e.length;n++)for(var a=0;a<e[n].length;a++)t.push(e[n][a]);return t}(e);i.length;){v(i,n,a);var o=i.shift();if(!o.isWall){if(o.distance===1/0)return r;if(o.isVisited=!0,r.push(o),o===n)return r;p(o,e)}}}(t,n,a,e),i=function(e){for(var t=[],n=e;null!==n;)t.unshift(n),n=n.previousNode;return t}(a);this.animateDijkstra(r,i)}},{key:"render",value:function(){var e=this,t=this.state,n=t.grid,a=t.mouseIsPressed;return r.a.createElement("div",null,r.a.createElement(K,{visualizeFunction:this.visualizeDijkstra,clearGrid:this.clearGrid}),r.a.createElement("div",{className:"grid"},n.map((function(t,n){return r.a.createElement("div",{key:n,className:"grid-row"},t.map((function(t,n){var i=t.row,o=t.col,s=t.isStart,l=t.isFinish,c=t.isWall;return r.a.createElement(m,{key:n,col:o,row:i,isFinish:l,isStart:s,isWall:c,mouseIsPressed:a,onMouseDown:function(t,n){return e.handleMouseDown(t,n)},onMouseEnter:function(t,n){return e.handleMousEnter(t,n)},onMouseUp:function(){return e.handleMouseUp()},style:{margin:"0"}})})))}))))}}]),t}(a.Component),$=function(){var e=[],t=0,n=0;if(window.innerWidth>=window.innerHeight){t=Math.floor(window.innerWidth/38);var a=Math.floor(window.innerWidth/t);n=Math.floor((window.innerHeight-80)/a)}else{n=Math.floor((window.innerHeight-80)/47);var r=Math.floor((window.innerHeight-80)/n);t=Math.floor(window.innerWidth/r)}Q=Math.floor(t/3)-1,L=Math.floor(n/2),Y=Math.floor(2*t/3)+1,X=Math.floor(n/2);for(var i=0;i<n;i++){for(var o=[],s=0;s<t;s++)o.push(_(i,s,!1));e.push(o)}return e},_=function(e,t,n){return{row:e,col:t,isStart:e===L&&t===Q,isFinish:e===X&&t===Y,distance:1/0,isWall:n,previousNode:null}},ee=function(e,t,n){var a=e.slice(),r=a[t][n],i=Object(s.a)({},r,{isWall:!r.isWall});return a[t][n]=i,a},te=function(e){var t=[],n=0,a=0;if(window.innerWidth>=window.innerHeight){n=Math.floor(window.innerWidth/38);var r=Math.floor(window.innerWidth/n);a=Math.floor((window.innerHeight-80)/r)}else{a=Math.floor((window.innerHeight-80)/47);var i=Math.floor((window.innerHeight-80)/a);n=Math.floor(window.innerWidth/i)}for(var o=0;o<a;o++){for(var s=[],l=0;l<n;l++)s.push(_(o,l,e[o][l].isWall));t.push(s)}return t};var ne=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Z,null))};o.a.render(r.a.createElement(ne,null),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.fbec5bde.chunk.js.map