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