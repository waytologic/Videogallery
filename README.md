# Videogallery

> Pure css and Javascript to play video from playlist

> Preview
![Alt text](https://cdn.path.to/some/image.jpg "This is some image...")
> 

```javascript HTML code
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>      
        <h3 class="heading"> Responsive Video Gallery </h3>   
        <div class="container shadow">
            <div class="main-video">
                <div class="video">
                    <video id="myvid" src="vid/ex1.mp4" controls preload="auto" autoplay></video>
                    <h3 class="title">1 video title </h3>
                </div>
            </div>
            <div class="video-list">
                <div class="vid active">
                    <video src="vid/ex1.mp4" class="list-video" ></video>
                    <h3 class="title">1 video title </h3>
                </div>
                <div class="vid">
                    <video src="vid/ex2.mp4" class="list-video"></video>
                    <h3 class="title">2 video title </h3>
                </div>
                <div class="vid">
                    <video src="vid/ex3.mp4" class="list-video"></video>
                    <h3 class="title">3 video title </h3>
                </div>               
                <div class="vid">
                    <video src="vid/ex4.mp4" class="list-video"></video>
                    <h3 class="title">4 video title </h3>
                </div>
                <div class="vid">
                    <video src="vid/ex5.mp4" ></video>
                    <h3 class="title">5 video title </h3>
                </div>
                <div class="vid">
                    <video src="vid/ex5.mp4" class="list-video"></video>
                    <h3 class="title">6 video title </h3>
                </div>
                <div class="vid">
                    <video src="vid/ex5.mp4" class="list-video" ></video>
                    <h3 class="title">7 video title </h3>
                </div>
            </div>
        </div>         
        <script src="video.js"></script>
    </body>
</html>
```


```javascript JS Code
var videolist = document.querySelectorAll('.video-list .vid');
var mainVideo = document.querySelector('.main-video .video');
var title = document.querySelector('.main-video .title');
videolist.forEach(remove => { remove.classList.remove('active')})

document.querySelectorAll('.video-list .vid').forEach(function(item) {
    videolist.forEach(remove => { remove.classList.remove('active')})
    item.addEventListener('click', function() {         
       
        if( item.classList.contains('active')){
            item.classList.add('active');
        }
        console.log(item.innerHTML)  
        let getsrc = item.querySelector('.list-video').getAttribute('src');        
        console.log(getsrc);  
        let title = item.querySelector('.vid .title').innerHTML;
        console.log(title);    
      
        document.querySelector('.main-video .video').src = getsrc;   
        var myviddata = document.getElementById('myvid');
        myviddata.src = getsrc;
        console.log(myviddata)
        document.querySelector('.main-video .title').innerHTML = title;        
       // document.querySelector('.main-video .video').play();
    });
    
});
```
