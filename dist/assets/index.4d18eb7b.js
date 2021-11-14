import{s as e,R as t,C as n,a as l}from"./vendor.27477011.js";const a=e.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`,o=e.h1`
  font-family: 'Princess Sofia', cursive;
  font-weight: bold;
  color: white;
  padding-left: 50px;
  text-shadow: 3px 3px rgba(0, 0, 0, 0.5)
`,r=()=>t.createElement(a,null,t.createElement(o,null,"Megrees")),i=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
  padding-top: 50px;
`,d=e.label`
  font-size: 1.1rem;
`,c=e.input`
  margin-top: 10px;
  width: 500px;
  height: 40px;
  font-size: 1.2rem;
  border-radius: 50px;
  border: none;
  padding-left: 25px;
  padding-right: 25px;
  margin-bottom: 20px;

  &:focus {
    outline: none;

  }
`,s=e.button`
  margin-top: 30px;
  width: 530px;
  height: 40px;
  font-size: 1.2rem;
  border-radius: 50px;
  border: none;
  background: black;
  color: white;
  transition: all .2s ease-in-out;

  &:hover {
    color: #cbb3f2;
    transform: scale(1.1);
  }
`,m=({amount:e,handleSetAmount:n,handleSetResults:l})=>t.createElement(i,null,t.createElement(d,null,"Amount"),t.createElement(c,{placeholder:"How much you want to convert?",value:e,onChange:e=>n(e.target.value)}),t.createElement(s,{onClick:t=>{t.preventDefault();const n=(5*(e-32)/9).toFixed(2);l(n)}},"Convert now")),p=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 50px;
  padding-top: 50px;

  @media (max-width: 1100px) {
   background: black;
   width: 100%;
   margin-top: 50px;
   flex-direction: row;
   justify-content: space-around;
   flex: 1;
 }
`,u=e.h1`
  background-color: #b3bbf2;
  background-image: linear-gradient(180deg, #b3bbf2 0%, #cbb3f2 50%, #ebb3f2 100%);
  color: #fff;
  font-family: 'Princess Sofia', cursive;
  font-weight: bold;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 50%;
  font-size: 3rem;
  text-shadow: 3px 3px rgba(0, 0, 0, 0.5);
  margin-bottom: 50px;

  @media (max-width: 1100px) {
   display: none;
 }
`,f=e.p`
  font-family: 'Princess Sofia', cursive;
  color: ${e=>e.color||"#b3bbf2"};
  font-size: 3em;
  margin: 0;
  align-self: flex-end;
`,x=e.label`
  font-size: 1.1rem;
  color: #b3b3b3;
  align-self: flex-end;
  margin-bottom: 20px;

  @media (max-width: 1100px) {
   display: none;
 }
`,b=({amount:e,results:n})=>t.createElement(p,null,t.createElement(u,null,"M"),t.createElement(f,null,e," ° F"),t.createElement(x,null,"Fahrenhit"),t.createElement(f,{color:"#ebb3f2 "},n," °C"),t.createElement(x,null,"Celsius")),g=e.div`
 display: flex;
 justify-content: space-between;
 align-items: center;

 @media (max-width: 1100px) {
   flex-direction: column;
 }
`,h=()=>{const[e,l]=n.exports.useState(null),[a,o]=n.exports.useState(0);return t.createElement(g,null,t.createElement(m,{amount:e,handleSetAmount:l,handleSetResults:o}),t.createElement(b,{amount:e,results:a}))};const E=()=>t.createElement("div",{className:"App"},t.createElement(r,null),t.createElement(h,null));l.render(t.createElement(t.StrictMode,null,t.createElement(E,null)),document.getElementById("root"));
