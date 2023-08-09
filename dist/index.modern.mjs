import e from"classnames";import t,{useState as o,useRef as r,useEffect as n,useImperativeHandle as s}from"react";import l,{css as a}from"styled-components";function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},i.apply(this,arguments)}const c={background:"#eef1f4",border:"1px solid #d6d9dc",borderRadius:"3px",color:"#494a4c",fontSize:"14px",fontWeight:null,margin:"0",padding:"8px 12px",transition:null,width:null,hover:{background:"#eaedef",borderColor:"#c1c3c6",borderRadius:null,color:"#242526"},active:{background:null,borderColor:null,borderRadius:null,color:null}},d={background:"#fff",border:"1px solid #d6d9dc",borderRadius:"3px",bottom:null,boxShadow:"0 8px 16px rgba(88, 92, 95, 0.1)",display:"block",left:"0",margin:"5px 0 0",padding:"10px",position:"absolute",right:null,transform:null,transition:"all 0.15s ease",top:"100%",width:"250px",zIndex:99999,active:{bottom:null,display:null,left:null,right:null,top:null,transform:null}},u={width:"auto",position:"relative"};let p,y,b,f,v,m,g=e=>e;const $=a(p||(p=g`
   width: ${0};
`),e=>S(e.styles.width)),x=l.div(y||(y=g`
   position: ${0};
   ${0}
`),e=>S(e.styles.position)?e.styles.position:"static",e=>e.useStyles?$:null),w=a(b||(b=g`
   background: ${0};
   border: ${0};
   border-color: ${0};
   border-radius: ${0};
   color: ${0};
   cursor: pointer;
   font-size: ${0};
   font-weight: ${0};
   margin: ${0};
   padding: ${0};
   transition: ${0};
   width: ${0};
   &:after {
      content: '';
      display: inline-block;
      margin: 0 3px;
      position: relative;
      left: 4px;
      top: 3px;
      border-color: currentColor transparent transparent;
      border-width: 5px 4px;
      border-style: solid;
      opacity: 0.55;
   }
   :hover,
   :focus {
      color: ${0};
      background: ${0};
      border-color: ${0};
      border-radius: ${0};
      &:after {
         opacity: 0.75;
      }
   }
   &.active {
      color: ${0};
      background: ${0};
      border-color: ${0};
      border-radius: ${0};
   }
`),e=>S(e.styles.background),e=>S(e.styles.border),e=>S(e.styles.borderColor),e=>S(e.styles.borderRadius),e=>S(e.styles.color),e=>S(e.styles.fontSize),e=>S(e.styles.fontWeight),e=>S(e.styles.margin),e=>S(e.styles.padding),e=>S(e.styles.transition),e=>S(e.styles.width),e=>S(e.styles.hover.color),e=>S(e.styles.hover.background),e=>S(e.styles.hover.borderColor),e=>S(e.styles.hover.borderRadius),e=>S(e.styles.active.color),e=>S(e.styles.active.background),e=>S(e.styles.active.borderColor),e=>S(e.styles.active.borderRadius)),k=l.button(f||(f=g`
   ${0}
`),e=>e.useStyles?w:null),C=a(v||(v=g`
   background-color: ${0};
   border: ${0};
   border-color: ${0};
   border-radius: ${0};
   bottom: ${0};
   box-shadow: ${0};
   display: ${0};
   left: ${0};
   margin: ${0};
   padding: ${0};
   right: ${0};
   top: ${0};
   transform: ${0};
   transition: ${0};
   width: ${0};
   &.active {
      bottom: ${0};
      display: ${0};
      left: ${0};
      right: ${0};
      top: ${0};
      transform: ${0};
   }
`),e=>S(e.styles.background),e=>S(e.styles.border),e=>S(e.styles.borderColor),e=>S(e.styles.borderRadius),e=>S(e.styles.bottom),e=>S(e.styles.boxShadow),e=>S(e.styles.display),e=>S(e.styles.left),e=>S(e.styles.margin),e=>S(e.styles.padding),e=>S(e.styles.right),e=>S(e.styles.top),e=>S(e.styles.transform),e=>S(e.styles.transition),e=>S(e.styles.width),e=>S(e.styles.active.bottom),e=>S(e.styles.active.display),e=>S(e.styles.active.left),e=>S(e.styles.active.right),e=>S(e.styles.active.top),e=>S(e.styles.active.transform)),E=l.div(m||(m=g`
   display: ${0};
   opacity: ${0};
   position: ${0};
   visibility: ${0};
   z-index: ${0};
   pointer-events: ${0};
   ${0}
`),e=>S(e.styles.display),e=>e.expanded?"1":"0",e=>S(e.styles.position),e=>e.expanded?"visible":"hidden",e=>S(e.styles.zIndex),e=>e.expanded?"auto":"none",e=>e.useStyles?C:null);function S(e){return null!==e&&e}const L=t.forwardRef((t,l)=>{const{id:a,label:p,isMenu:y=!0,children:b,useStyles:f=!0,search:v=!1,className:m,activeClassName:g,buttonClassName:$,activeButtonClassName:w,dropdownClassName:C,activeDropdownClassName:S,config:L,onHover:A=!1,href:N}=t,[R,D]=o(!1),[O]=o(a||function(e){for(var t="",o=0;o<10;o++)t+="0123456789".charAt(Math.floor(10*Math.random()));return t}()),z=r(!1),M=r(),T=r(),q=r(),I='a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';let j=null;const{container:H,button:P,dropdown:U}=L||{},F=i({},c,P,{hover:i({},c.hover,null==P?void 0:P.hover),active:i({},c.active,null==P?void 0:P.active)}),W=i({},d,U,{active:i({},d.active,null==U?void 0:U.active)}),_=i({},u,H);function B(){const e=T.current.querySelectorAll(I);e&&e.forEach(e=>{e.tabIndex="-1"})}function K(e){const t=T.current.querySelectorAll(I);if(!t)return;B();const o=document.activeElement,r=e.target,{index:n,length:s}=function(e,t){const o=Array.prototype.slice.call(t);return{index:o.indexOf(e),length:o.length-1}}(o,t),{shiftKey:l,key:a}=e;if(null!=M&&M.current.contains(o)&&0!==t.length)if(l){if("Tab"===a)return void D(!1)}else switch(a){case" ":case"Enter":break;case"Esc":case"Escape":X(q.current),D(!1);break;case"ArrowDown":case"Down":if(o===q.current)X(t[0]),D(!0);else{const e=n===s?0:n+1;t[e]&&X(t[e])}e.preventDefault();break;case"Up":case"ArrowUp":const l=0===n?s:n-1;t[l]&&X(t[l]),e.preventDefault();break;case"Home":case"PageUp":X(t[0]),e.preventDefault();break;case"End":case"PageDown":X(t[t.length-1]),e.preventDefault();break;default:v&&function(e,t){const o=T.current.querySelectorAll(I);let r=0,n=0;if(t.length>1||!o)return;const s=Array.prototype.slice.call(o),l=s&&s.map(e=>null!=e&&e.textContent?e.textContent.trim()[0].toLowerCase():"");r=s.indexOf(e)+1,r>=s.length&&(r=0),n=l.indexOf(t.toLowerCase(),r),-1===n&&(n=l.indexOf(t.toLowerCase(),0)),n>-1&&X(s[n])}(r,a)}else switch(a){case"Esc":case"Escape":D(!1)}}function G(){document.addEventListener("mousemove",J),B(),D(!0)}function J(e){clearTimeout(j),j=setTimeout(function(){null!=M&&M.current.contains(e.target)||(D(!1),document.removeEventListener("mousemove",J))},25)}function Q(e){e&&null!=e&&e.target&&(null!=T&&T.current.contains(e.target)||null!=q&&q.current.contains(e.target)||D(!1))}function V(e){null!=M&&M.current.contains(e.target)||D(!1)}function X(e){e&&setTimeout(()=>{e.focus({preventScroll:!0})},20)}return n(()=>(B(),z.current||(document.addEventListener("click",Q),document.addEventListener("keyup",V),document.addEventListener("keydown",K),z.current=!0),()=>{document.removeEventListener("click",Q),document.removeEventListener("keyup",V),document.removeEventListener("keydown",K)}),[]),s(l,()=>({close(){D(!1)}})),h(Fragment,null,!!p&&h(x,{ref:M,id:`dropdown-${O}`,className:e("react-a11y-dropdown",m&&m,R?"expanded":null,R&&g?g:null),useStyles:f,styles:_},h(k,{as:N?"a":null,href:N||null,ref:q,id:`button-${O}`,className:e("react-a11y-dropdown--button",$&&$,R?"active":null,R&&w?w:null),useStyles:f,styles:F,onClick:()=>function(){const e=T.current.querySelectorAll(I);R||B(),e&&!R&&X(e[0]),D(e=>!e)}(),dangerouslySetInnerHTML:(Y=p,{__html:Y}),"aria-expanded":R?"true":"false","aria-haspopup":"true","aria-controls":y?`menu-${O}`:null,onFocus:()=>A&&G(),onMouseEnter:()=>A&&G()}),h(E,{ref:T,id:`menu-${O}`,className:e("react-a11y-dropdown--menu",C&&C,R?"active":null,R&&S?S:null),useStyles:f,styles:W,expanded:R,"aria-hidden":R?"false":"true","aria-labelledby":y?`button-${O}`:null,role:y?"menu":null},b)));var Y});export{L as default};
//# sourceMappingURL=index.modern.mjs.map
