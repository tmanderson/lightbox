/* ===================================================
 * MAIN.JS
 * ================================================ */
 $(document).ready(function() {

    // Some Global variables
    var $imgCollection = $('.work'),
        $link          = $imgCollection.find('a'),
        $overlay       = $('.overlay'),
        $overlayClose  = $('.overlay-close-icon'),
        $overlayTitle  = $overlay.find('.overlay-title');

    $link.on('click', function() {
        var $childImg = $(this).find('img'),
            newSrc    = $childImg.attr('src'),
            title     = $childImg.attr('alt');

        // Set overlay's child image source to selected images's source
        // and then display the overlay
        $overlay.find('img').attr('src', newSrc)
            .closest($overlay).addClass('visible');

        // Set title
        $childImg.attr('alt', $overlayTitle.html(title));
    });

    // Dismiss overlay via Esc key
    $(window).on('keyup', function(e) {
        if( e.keyCode === 27 ) {
            $overlay.removeClass('visible');
        }
    });

    // Dismiss overlay via 'overlay-close-icon'
    $overlayClose.on('click', function() {
        $(this).closest($overlay).removeClass('visible');
    });

 });
