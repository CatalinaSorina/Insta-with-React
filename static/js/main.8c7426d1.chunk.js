(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(7),o=a.n(r),m=(a(14),a(1)),c=a(2),i=a(4),l=a(3),u=a(5),g=(a(15),a(16),a(17),function(e){var t="Hei "+e.user+"! Search here...";return n.a.createElement("div",{className:"searchBar"},n.a.createElement("img",{className:"userPic",src:"./pics/user.png",alt:"user"}),n.a.createElement("input",{placeholder:t,onChange:e.search}))}),p=[{id:"A",username:"scarface",text:"Focus on you...",userimg:"./pics/scarface.jpg",imageUrl:"./pics/scarfacePost1.jpg",likes:400,seen:1040,timestamp:"May 15th 2019, 16:02:40 pm",comments:[{id:"2",username:"dasigndasy",text:"So beautiful!"},{id:"3",username:"lukatist",text:"Beautiful like you!"}]},{id:"B",username:"kawaii",text:"Catch ya!",userimg:"./pics/kawaii.jpg",imageUrl:"./pics/kawaiiPost1.jpg",likes:4307,seen:4728,timestamp:"May 3th 2019, 13:00:06 pm",comments:[{id:"5",username:"frittas",text:"Walk with me!!!"},{id:"6",username:"timtom",text:"Vintage style, cute"},{id:"7",username:"morisaf",text:"Where is this place?"}]},{id:"C",username:"playhearthstone",text:"I will buy this car!",userimg:"./pics/playhearthstone.jpg",imageUrl:"./pics/playhearthstonePost1.jpg",likes:5306,seen:8280,timestamp:"April 1th 2019, 08:26:10 am",comments:[{id:"10",username:"vina",text:"When you do, take me to a ride."},{id:"11",username:"crista",text:"Uuu pretty cool!"},{id:"12",username:"carstravel",text:"visit us"},{id:"13",username:"martin",text:"You have a better one!"},{id:"8",username:"lemmy",text:"more pics!"}]}],d=function(e){return n.a.createElement("div",null,e.username,": ",e.comment)},h=(a(18),function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(i.a)(this,Object(l.a)(t).call(this))).state={comments:[]},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({comments:this.props.comments})}},{key:"render",value:function(){return n.a.createElement("div",{className:"commentsSection none",id:this.props.id},this.props.loggedUser,":"," ",n.a.createElement("input",{className:"newComment",id:this.props.newComment,placeholder:"add comment"}),n.a.createElement("details",{className:"allCommentsSection"},n.a.createElement("summary",null),this.state.comments.map(function(e){return n.a.createElement(d,{key:e.id,username:e.username,comment:e.text})})))}}]),t}(n.a.Component)),f=function(e){return n.a.createElement("div",{className:"post"},n.a.createElement("div",{className:"userPost"},n.a.createElement("span",null,n.a.createElement("img",{className:"userPic",src:e.userImg,alt:"user"}),n.a.createElement("sup",{className:"username"},e.username,":")),n.a.createElement("div",{className:"userCommentPost"},e.text)),n.a.createElement("img",{className:"postImg",src:e.img,alt:"no pic"}),n.a.createElement("div",{className:"postFrequency"},n.a.createElement("button",{onClick:e.giveLove},"\u2661 ",e.likes),n.a.createElement("button",{onClick:function(){return e.showComments("#comments"+e.commentsId)}},n.a.createElement("span",{role:"img","aria-label":"chats"},"\ud83d\udcac")," ",e.commentsNumber),n.a.createElement("span",{role:"img","aria-label":"seen"},"\ud83d\udc41")," ",e.seen),n.a.createElement(h,{id:"comments"+e.commentsId,newComment:"comment"+e.commentsId,loggedUser:e.loggedUser,key:"comments"+e.commentsId,comments:e.comments}))},v=(a(19),function(e){return n.a.createElement("div",{className:"postContainer"},e.posts.map(function(t){return n.a.createElement(f,{id:"post"+t.id,key:t.id,userImg:t.userimg,username:t.username,text:t.text,img:t.imageUrl,giveLove:e.giveLove,likes:t.likes,showComments:e.showComments,commentsNumber:t.comments.length,seen:t.seen,comments:t.comments,commentsId:t.id,loggedUser:e.loggedUser})}))}),E=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(i.a)(this,Object(l.a)(t).call(this))).search=function(t){var a=t.target.value.toLowerCase();if(console.log(a),""!==a){var s=e.state.posts.filter(function(e){return e.username.toLowerCase().includes(a)||e.text.toLowerCase().includes(a)?e:null});e.setState({filterPosts:s})}else e.setState({filterPosts:p})},e.giveLove=function(e){var t=e.target,a=t.textContent.split(" ");"\u2661"===a[0]?t.textContent="\u2764\ufe0f "+(Number(a[1])+1):t.textContent="\u2661 "+(Number(a[1])-1)},e.showComments=function(e){document.querySelector(e).classList.toggle("none")},e.state={posts:p,filterPosts:p},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"Insta"},n.a.createElement("button",{className:"logout",onClick:this.props.logout},"Log out"),n.a.createElement(g,{search:this.search,user:this.props.username}),n.a.createElement(v,{posts:this.state.filterPosts,giveLove:this.giveLove,showComments:this.showComments,loggedUser:this.props.username}))}}]),t}(n.a.Component),b=(a(20),function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(i.a)(this,Object(l.a)(t).call(this))).setUser=function(t){e.setState({username:t.target.value})},e.setPass=function(t){e.setState({password:t.target.value})},e.state={username:"",password:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"login"},n.a.createElement("div",{className:"credinals"},n.a.createElement("label",null,"User name:"),n.a.createElement("input",{onChange:this.setUser})),n.a.createElement("div",{className:"credinals"},n.a.createElement("label",null,"Password:"),n.a.createElement("input",{onChange:this.setPass})),n.a.createElement("div",null,n.a.createElement("button",{className:"logBt",onClick:function(){return e.props.log(e.state.username)}},"log in"),n.a.createElement("button",{className:"regNowBt",onClick:this.props.registerNow},"Register now.")))}}]),t}(n.a.Component)),C=(a(21),function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(i.a)(this,Object(l.a)(t).call(this))).setUser=function(t){e.setState({username:t.target.value})},e.setPass=function(t){e.setState({password:t.target.value})},e.state={username:"",password:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"register"},n.a.createElement("div",{className:"regCredinals"},n.a.createElement("label",null,"User name:"),n.a.createElement("input",{placeholder:"username",onChange:this.setUser})),n.a.createElement("div",{className:"regCredinals"},n.a.createElement("label",null,"Password:"),n.a.createElement("input",{placeholder:"password",onChange:this.setPass})),n.a.createElement("button",{className:"regBt",onClick:function(){return e.props.register(e.state.username,e.state.password)}},"save"))}}]),t}(n.a.Component)),w=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(i.a)(this,Object(l.a)(t).call(this))).returnComponent=function(t,a,s){return e.state.log?t:e.state.reg?a:s},e.register=function(t,a){e.setState({reg:!1,log:!0})},e.log=function(t){console.log(t),e.setState({reg:!1,log:!1,username:t}),localStorage.setItem("username",t)},e.registerNow=function(){e.setState({log:!1,reg:!0})},e.logout=function(){e.setState({log:!0,username:""}),localStorage.removeItem("username"),localStorage.clear()},e.state={log:!0,reg:!1,username:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},this.component=this.returnComponent(n.a.createElement(b,{log:this.log,registerNow:this.registerNow}),n.a.createElement(C,{register:this.register}),n.a.createElement(E,{username:this.state.username,logout:this.logout})))}}]),t}(n.a.Component);o.a.render(n.a.createElement(w,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.8c7426d1.chunk.js.map