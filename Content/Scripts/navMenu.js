var isCvOpen = false;

function grabContent() {
     $topDiv = $('.top-div');
     $bottomDiv = $('.bottom-div');
     $aboutButton = $('#about');
     $backButton = $('#back');
     $cvBody = $('.cv-body');
     $cvDid = $('.cv-div');
     $separator = $('.separator');
     $navbar = $('.navBar');
}

$(document).ready(function() {
    grabContent();
    $backButton.click(function() {
        _closeDiv();
        $backButton.css('display','none');
        $navbar.css('display','block');
    });
    
    
    $aboutButton.click(function() {
        isCvOpen = true;
        _showCvOnMobile();
        $topDiv.animate({ height: '0' }, 'linear', function() {
            if ($topDiv.css('height') === '0px') {
                $bottomDiv.css('height', '80%');
                $cvBody.offset({ top: $separator.offset().top, left: $cvBody.offset().left });
                $cvDid.css('visibility', 'visible').hide().fadeIn(2500);
            }
        });

    });

    $cvBody.offset({ top: $separator.offset().top, left: $cvBody.offset().left });
});

_closeDiv = function() {
     isCvOpen = false;
    $cvDid.css('visibility', 'visible').hide().fadeOut(2500, function() {
        $bottomDiv.css('height', '30%');
        $topDiv.animate({ height: '30%' }, 'linear');
    });
}

$(window).resize(function() {
    $cvBody.offset({ top: $separator.offset().top, left: $cvBody.offset().left });
    _autoResize();
});

_autoResize = function(){
    if(isCvOpen)
    _showCvOnMobile();
}

_showCvOnMobile = function(){
    if (window.matchMedia('(min-width : 0px) and (max-width : 949px)').matches){
            $navbar.css('display','none');
            $backButton.css('display','block');
        };
};