var posts=["2024/08/25/Newbing国内无需魔法，无需验证的部署方法/","2024/08/31/黑毛毛虫不能吃豇豆/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };