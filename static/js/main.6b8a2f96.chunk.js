(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"http://images6.fanpop.com/image/photos/38500000/Louise-Belcher-bobs-burgers-38510375-1106-1440.jpg"},{id:2,image:"https://vignette.wikia.nocookie.net/bobsburgerpedia/images/3/32/Jimmy_Pesto.png/revision/latest?cb=20130305162049"},{id:3,image:"https://pbs.twimg.com/profile_images/424545820701380608/yPzDOtaS_400x400.jpeg"},{id:4,image:"https://vignette.wikia.nocookie.net/bobsburgers/images/6/6b/Gene-4.jpg/revision/latest/scale-to-width-down/310?cb=20150725094631&path-prefix=de"},{id:5,image:"https://i.pinimg.com/originals/1d/62/93/1d6293f59de3e3956459e9dcbca783df.jpg"},{id:6,image:"https://vignette.wikia.nocookie.net/bobs-burgers-fanon/images/5/51/Bob_with_a_burger.png/revision/latest?cb=20170920181424"},{id:7,image:"https://vignette.wikia.nocookie.net/bobsburgerpedia/images/5/51/Peter_Pescadero.jpg/revision/latest/scale-to-width-down/2000?cb=20150711161802"},{id:8,image:"https://i.pinimg.com/originals/c7/c0/ac/c7c0acc327739f089269ea2cb699b698.png"},{id:9,image:"https://vignette.wikia.nocookie.net/bobsburgerpedia/images/e/ea/Courtney.png/revision/latest?cb=20130514022811"},{id:10,image:"https://vignette.wikia.nocookie.net/bobsburgerpedia/images/6/68/Gus.jpg/revision/latest?cb=20160623144410"},{id:11,image:"https://vignette.wikia.nocookie.net/bobsburgerpedia/images/e/e9/Tammy_Larsen.jpg/revision/latest?cb=20150721110758"},{id:12,image:"https://vignette.wikia.nocookie.net/bobsburgerpedia/images/f/fc/Tran.jpg/revision/latest?cb=20150725162101"}]},,,,,,function(e,a,t){e.exports=t.p+"static/media/bb-banner-1.5b9dc0d4.jpg"},,,function(e,a,t){e.exports=t(19)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),i=t.n(c),s=t(3),m=t.n(s),l=t(4),n=t(5),r=t(8),o=t(6),d=t(9),g=t(7),h=t.n(g);t(16);var v=function(e){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"jumbotron"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-3 col-xs-0"}),i.a.createElement("div",{className:"col-sm-6 col-xs-12"},i.a.createElement("img",{className:"logo",src:h.a,alt:"banner"})),i.a.createElement("div",{className:"col-sm-3 col-xs-0"})),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-3 col-xs-0"}),i.a.createElement("div",{className:"col-sm-6 col-xs-12"},i.a.createElement("div",{className:"chalkboard"},i.a.createElement("h1",{className:"text-center"},"CLICKY GAME"),i.a.createElement("p",{className:"text-center"},"HIGH SCORE: ",e.highScore),i.a.createElement("p",{className:"text-center"}," SCORE: ",e.score))),i.a.createElement("div",{className:"col-sm-3 col-xs-0"})))))};t(17);var b=function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.clickedImage(e.id)}},i.a.createElement("div",{className:"card-image"},i.a.createElement("img",{className:"game-image",alt:"",src:e.image})))},E=t(1);function p(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),c=[e[t],e[a]];e[a]=c[0],e[t]=c[1]}return e}var k=function(e){function a(){var e,t;Object(l.a)(this,a);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return(t=Object(r.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(i)))).state={score:0,highScore:0,cards:E,clickedCards:[]},t.clickedImage=function(e){var a=t.state.clickedCards,c=t.state.score,i=t.state.highScore;-1===a.indexOf(e)?(a.push(e),console.log(a),t.handleIncrement(),t.shuffleCards()):12===t.state.score?(alert("You Win!"),t.setState({score:0,clickedCards:[]})):(t.setState({score:0,clickedCards:[]}),alert("GAME OVER"),c>i&&t.setState({highScore:c}))},t.handleIncrement=function(){t.setState({score:t.state.score+1})},t.shuffleCards=function(){t.setState({cards:p(E)})},t}return Object(d.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"container game-container"},i.a.createElement(v,{score:this.state.score,highScore:this.state.highScore}),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-3 col-xs-3"},i.a.createElement(b,{id:E[0].id,image:E[0].image,clickedImage:this.clickedImage})),i.a.createElement("div",{className:"col-sm-3 col-xs-3"},i.a.createElement(b,{id:E[1].id,image:E[1].image,clickedImage:this.clickedImage})),i.a.createElement("div",{className:"col-sm-3 col-xs-3"},i.a.createElement(b,{id:E[2].id,image:E[2].image,clickedImage:this.clickedImage})),i.a.createElement("div",{className:"col-sm-3 col-xs-3"},i.a.createElement(b,{id:E[3].id,image:E[3].image,clickedImage:this.clickedImage}))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-3 col-xs-3"},i.a.createElement(b,{id:E[4].id,image:E[4].image,clickedImage:this.clickedImage})),i.a.createElement("div",{className:"col-sm-3 col-xs-3"},i.a.createElement(b,{id:E[5].id,image:E[5].image,clickedImage:this.clickedImage})),i.a.createElement("div",{className:"col-sm-3 col-xs-3"},i.a.createElement(b,{id:E[6].id,image:E[6].image,clickedImage:this.clickedImage})),i.a.createElement("div",{className:"col-sm-3 col-xs-3"},i.a.createElement(b,{id:E[7].id,image:E[7].image,clickedImage:this.clickedImage}))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-3 col-xs-3"},i.a.createElement(b,{id:E[8].id,image:E[8].image,clickedImage:this.clickedImage})),i.a.createElement("div",{className:"col-sm-3 col-xs-3"},i.a.createElement(b,{id:E[9].id,image:E[9].image,clickedImage:this.clickedImage})),i.a.createElement("div",{className:"col-sm-3 col-xs-3"},i.a.createElement(b,{id:E[10].id,image:E[10].image,clickedImage:this.clickedImage})),i.a.createElement("div",{className:"col-sm-3 col-xs-3"},i.a.createElement(b,{id:E[11].id,image:E[11].image,clickedImage:this.clickedImage})))))}}]),a}(c.Component);t(18);m.a.render(i.a.createElement(k,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.6b8a2f96.chunk.js.map