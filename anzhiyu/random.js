var posts=["2024/08/03/hello-world/","2024/08/19/Newbing/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };