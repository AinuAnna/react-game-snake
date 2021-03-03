(this["webpackJsonpreact-game"]=this["webpackJsonpreact-game"]||[]).push([[0],{18:function(e,t,s){},19:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),c=s(12),i=s.n(c),r=s(9),o=s(5),d=s(6),h=s(2),l=s(8),u=s(7),j=s(0),b=function(e){return Object(j.jsx)("div",{children:e.snakeDots.map((function(e,t){var s={left:"".concat(e[0],"%"),top:"".concat(e[1],"%")};return Object(j.jsx)("div",{className:"snake",style:s},t)}))})},O=function(e){var t={left:"".concat(e.dot[0],"%"),top:"".concat(e.dot[1],"%")};return Object(j.jsx)("div",{className:"food",style:t})},k=(s(18),s(10)),f=function(e){var t=function(e){var t=Object(a.useState)(new Audio(e)),s=Object(k.a)(t,1)[0],n=Object(a.useState)(!1),c=Object(k.a)(n,2),i=c[0],r=c[1];return Object(a.useEffect)((function(){i?s.play():s.pause()}),[i]),Object(a.useEffect)((function(){return s.addEventListener("ended",(function(){return r(!1)})),function(){s.removeEventListener("ended",(function(){return r(!1)}))}}),[]),[i,function(){return r(!i)}]}(e.url),s=Object(k.a)(t,2),n=s[0],c=s[1];return Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"music",onClick:c,children:n?"\ud83d\udd08Off":"\ud83d\udd0aOn"})})},m=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"instr",children:[Object(j.jsx)("h2",{children:"Hotkeys"}),Object(j.jsx)("div",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"\u2b06\ufe0f - keys UP and W"}),Object(j.jsx)("li",{children:"\u2b07\ufe0f - keys DOWN and S"}),Object(j.jsx)("li",{children:"\u2b05\ufe0f - keys LEFT and A"}),Object(j.jsx)("li",{children:"\u27a1\ufe0f - keys RIGHT and D"})]})})]})}}]),s}(a.Component),v=function(){return[2*Math.floor((98*Math.random()+1)/2),2*Math.floor((98*Math.random()+1)/2)]},S={food:v(),status:0,speed:150,direction:"RIGHT",snakeDots:[[0,0],[2,0]],highScore:Number(localStorage.getItem("snakeHighScore"))||0,newHighScore:!1,isStarted:!1,isEnded:!1},x=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state=S,a.onKeyDown=function(e){switch((e=e||window.event).keyCode){case 38:a.setState({direction:"UP"});break;case 40:a.setState({direction:"DOWN"});break;case 37:a.setState({direction:"LEFT"});break;case 39:a.setState({direction:"RIGHT"});break;case 68:a.setState({direction:"D"});break;case 65:a.setState({direction:"A"});break;case 83:a.setState({direction:"S"});break;case 87:a.setState({direction:"W"})}},a.moveSnake=function(){var e=Object(r.a)(a.state.snakeDots),t=e[e.length-1],s=a.state,n=s.speed,c=s.isStarted;switch(a.state.direction){case"RIGHT":t=[t[0]+2,t[1]];break;case"LEFT":t=[t[0]-2,t[1]];break;case"DOWN":t=[t[0],t[1]+2];break;case"UP":t=[t[0],t[1]-2];break;case"D":t=[t[0]+2,t[1]];break;case"A":t=[t[0]-2,t[1]];break;case"S":t=[t[0],t[1]+2];break;case"W":t=[t[0],t[1]-2]}e.push(t),e.shift(),!0===c&&0!=n&&a.setState({snakeDots:e})},a.isGameOver=a.isGameOver.bind(Object(h.a)(a)),a.isStartGame=a.isStartGame.bind(Object(h.a)(a)),a.restartGame=a.restartGame.bind(Object(h.a)(a)),a}return Object(d.a)(s,[{key:"componentDidMount",value:function(){setInterval(this.moveSnake,this.state.speed),document.onkeydown=this.onKeyDown}},{key:"componentDidUpdate",value:function(e){2!=e.status&&!0!==this.state.isEnded&&(this.checkIfOutOfBorders(),this.checkIfCollapsed(),this.checkIfEat())}},{key:"checkIfOutOfBorders",value:function(){var e=this.state.snakeDots[this.state.snakeDots.length-1];(e[0]>=100||e[1]>=100||e[0]<0||e[1]<0)&&this.isGameOver()}},{key:"checkIfCollapsed",value:function(){var e=this,t=Object(r.a)(this.state.snakeDots),s=t[t.length-1];t.pop(),t.forEach((function(t){s[0]==t[0]&&s[1]==t[1]&&e.isGameOver()}))}},{key:"checkIfEat",value:function(){var e=this.state.snakeDots[this.state.snakeDots.length-1],t=this.state.food;e[0]==t[0]&&e[1]==t[1]&&(this.setState({food:v()}),this.enlargeSnake(),this.increaseSpeed()),this.state.snakeDots.length>=S.highScore&&(S.highScore++,localStorage.setItem("snakeHighScore",S.highScore-1),S.newHighScore=!0)}},{key:"enlargeSnake",value:function(){var e=Object(r.a)(this.state.snakeDots);e.unshift([]),this.setState({snakeDots:e})}},{key:"increaseSpeed",value:function(){this.state.speed>10&&this.setState({speed:this.state.speed-10})}},{key:"isStartGame",value:function(){this.setState({status:1,isStarted:!0})}},{key:"isGameOver",value:function(){this.setState({isEnded:!0,speed:0,status:2})}},{key:"restartGame",value:function(){this.setState(S)}},{key:"render",value:function(){return console.log(this.state.status),0===this.state.status&&!0!==this.state.isEnded?Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"startgame",children:[Object(j.jsx)("div",{children:"SNAKE"}),Object(j.jsx)("button",{className:"button",onClick:this.isStartGame,children:"Start Game"})]}),Object(j.jsx)(m,{})]}):2===this.state.status?Object(j.jsxs)("div",{className:"gameover",children:[Object(j.jsx)("div",{id:"GameOverText",children:"GAME OVER"}),Object(j.jsxs)("div",{children:["Your score: ",this.state.snakeDots.length]}),Object(j.jsxs)("div",{children:[this.state.newHighScore?"New local ":"Local ","high score:"," ",this.state.highScore]}),Object(j.jsx)("div",{className:"restart",onClick:this.restartGame,children:"Press to restart"})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"name-game",children:"SNAKE"}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("button",{className:"music",id:"mainRestart",onClick:this.restartGame,children:"New Game"}),Object(j.jsx)(f,{url:"https://d7.hotplayer.ru/download/83cd30bc87ac1216b7890e617fb1b8b1/156905203_456240033/11c61541d908c-1af6714942e4-566d8e6e6ff/Hotline%20Miami%202%3A%20Wrong%20Number%20%28Confirmed%20Soundtrack%29%20-%20M.O.O.N.%20-%20Dust.mp3"})]}),Object(j.jsxs)("div",{className:"area",children:[Object(j.jsx)(b,{snakeDots:this.state.snakeDots}),Object(j.jsx)(O,{dot:this.state.food})]}),Object(j.jsxs)("div",{className:"score",children:["HIGH-SCORE: ",this.state.highScore,"\u2002\u2002\u2002\u2002SCORE:"," ",this.state.snakeDots.length]})]})}}]),s}(a.Component);i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.50c0be43.chunk.js.map