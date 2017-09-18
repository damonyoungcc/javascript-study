$(function(){
    var $imgCt = $('.img-ct'),
        $preBtn = $('.btn-pre'),
        $nextBtn = $('.btn-next'),
        $bullet = $('.bullet');

    var $firstImg = $imgCt.find('li').first();
    var $lastImg = $imgCt.find('li').last();
    var currentPage = 0;
    var imgLength = $imgCt.children().length;
    var isAnimate = false;

    $imgCt.prepend($lastImg.clone());
    $imgCt.append($firstImg.clone());
    $imgCt.width($firstImg.width() * $imgCt.children().length);
    $imgCt.css('left','-300px');

    $preBtn.on('click',function(e){
        e.preventDefault();
        playPre();
    })
    $nextBtn.on('click',function(e){
        e.preventDefault();
        playNext();
    })

    function playNext(){
        if(isAnimate) return;
        isAnimate = true;
        $imgCt.animate({left: '-=300'},function(){
            currentPage++;
            if(currentPage === imgLength){
                $imgCt.css({'left':'-300px'});
                currentPage = 0;
            }
            isAnimate = false;
            setBullet();
        })
    }
    
    function playPre(){
        if(isAnimate) return;
        isAnimate = true;
        $imgCt.animate({left:'+=300'},function(){
            currentPage--;
            if(currentPage<0){
                $imgCt.css({'left':'-1200px'});
                currentPage = imgLength - 1;    
            }
            isAnimate = false;
            setBullet();
        })
    }

    function setBullet(){
        $bullet.children()
            .removeClass('active')
            .eq(currentPage)
            .addClass('active')
    }


})