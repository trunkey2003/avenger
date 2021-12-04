function Submit() {
  alert("Your comment has succesfully sent, we will contact you later :)");
}

const $ = document.getElementById.bind(document);
const $$ = document.getElementsByClassName.bind(document);

// const like = document.getElementById.bind("like-",document);

// const liked = document.getElementById.bind("liked-",document);

const avengers =
  "https://trunkey2003.github.io/avenger-nodejs-img/img/TEAM/Superhero Avatars/Avengers";

const ironman =
  "https://trunkey2003.github.io/avenger-nodejs-img/img/TEAM/Superhero Avatars/Iron Man";

const moreBtn = $("more-button");

const subNav = $("sub-nav");

const leftchangeBtn = $("leftchangeBtn");

const rightchangeBtn = $("rightchangeBtn");

const avatar = $("avatar");

var subNavOpen = false;

const source = [
  // ironman
  `${avengers}/Iron Man-01.png`,
  `${ironman}/iron-man-01.png`,
  `${ironman}/iron-man-02.png`,
  `${ironman}/iron-man-03.png`,
  `${ironman}/iron-man-04.png`,
  `${ironman}/iron-man-05.png`,
  // avengers
  `${avengers}/War Machine-01.png`,
  `${avengers}/Captain America-01.png`,
  `${avengers}/Black Widow-01.png`,
  `${avengers}/Nick Fury-01.png`,
  `${avengers}/Hulk-01.png`,
  `${avengers}/Thor-01.png`,
  `${avengers}/Giant Man-01.png`,
  `${avengers}/Loki-01.png`,
  `${avengers}/Hawkeye-01.png`,
  `${avengers}/Agent Coulson-01.png`,
];

var test = 0;

moreBtn.onclick = function () {
  if (subNavOpen === false) {
    open();
    subNavOpen = true;
    console.log("sub Nav opened");
  } else {
    close();
    subNavOpen = false;
    console.log("sub Nav closed");
  }
};

document.getElementById("date-button").onclick = function () {
  document.getElementById("date").innerHTML = Date();
};

document.getElementById("date").onclick = function () {
  document.getElementById("date").innerHTML = "";
};

const open = function () {
  subNav.classList.add("active");
  subNav.classList.remove("unactive");
};

const close = function () {
  subNav.classList.add("unactive");
  subNav.classList.remove("active");
};

var index = 0;

// leftchangeBtn.onclick=function(){
//     console.log('Hello left');
//     if (index === 0) {index = source.length-1} else {--index};
//     console.log(source[index]);
//     render(avatar,index);
// }

// rightchangeBtn.onclick=function(){
//     console.log('Hello right');
//     if (index === source.length-1) {index = 0} else {++index};
//     console.log(source[index]);
//     render(avatar,index);
// }

const render = function (e1, e2) {
  e1.src = source[e2];
};

var replyersAvtarIndex;

const handleAvatarReplyClick = function(id) {
  replyersAvtarIndex = Math.floor(Math.random() * 16);
  const query = "avatar-reply-" + id;
  const query2 = "replier-avatar-" + id;
  render($(query), replyersAvtarIndex);
  var update = $(query).src;
  update = update.replace("https://trunkey2003.github.io/avenger-nodejs-img","");
  $(query2).value = update;
};

const handleAvatarCommentClick = function(id){
  replyersAvtarIndex = Math.floor(Math.random() * 16);
  const query = id;
  render($(query), replyersAvtarIndex);
}

const handleLikeBtnClick = function (id) {
  actionLikeBtn(id);
};


const actionLikeBtn = function (query) {
  const query1 = "like-" + query; const like = $(query1);
  const query2 = "task-bar-left-" + query; const taskBarLeft = $(query2);
  const query3 = "liked-" + query; const liked = $(query3);
  
  if (like.classList.contains("like-active")) {
    like.classList.remove("like-active");
    liked.innerHTML = --liked.innerHTML;
    taskBarLeft.classList.remove("like-active");
    like.innerHTML = `Upvote <i class="ti-angle-double-up"></i>`;
  } else {
    like.classList.add("like-active");
    liked.innerHTML = ++liked.innerHTML;
    taskBarLeft.classList.add("like-active");
    like.innerHTML = `Upvoted <i class="ti-angle-double-up"></i>`;
  }
};

const handleReplyBtnClick = function(query) {
  const display = $(query).style.display;
  if (display == "none") {
    $(query).style.display = "block";
    $(query).classList.add("active");
    $(query).classList.remove("unactive");
  } else {
    $(query).classList.add("unactive");
    setTimeout(() => $(query).style.display = "none",500);
    $(query).classList.remove("active");
  }
};

const handleIMGValue = function (id) {
  return $(id).src;
};

const handleReplySubmitBtnClick = function(e){
  const img = $("avatar-reply-"+e).src;
  $("replier-avatar-"+e).value = img;
}

const handleThreeDotReplyBtn = function(id) {
  const query = "reply-more-bar-" + id;

  if ($(query).style.display == "none") {
    $(query).style.display = "block";
  } else{
    $(query).style.display = "none";
  };
}

const handleThreeDotCommentBtn = function(id) {
  const query = "comment-more-bar-" + id;

  if ($(query).style.display == "none") {
    $(query).style.display = "block";
  } else{
    $(query).style.display = "none";
  };
}

const handleHamburgerBtn = () =>{
  $('nav').style.display = ($('nav').style.display == "none" || $('nav').style.display == "")? "flex" : "none";
} 




