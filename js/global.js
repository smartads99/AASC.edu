//-----------------------------------------------------------------------------------------
//
//
// Helper Functions
//
//
//-----------------------------------------------------------------------------------------
//
//-----------------------------------------------------------
//
// Debounce
//
//-----------------------------------------------------------
//
function _debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
//-----------------------------------------------------------
//
// Sidebar Mobile
//
//-----------------------------------------------------------
//
function handleSidebarMobile() {

    $('.js-sidebar').each(function() {

        //--------------------------------
        // Selectors
        //--------------------------------
        //
        var $el = $(this);
        var $body = $('body');
        var $openBtn = $('.sidebarOpen', $el);
        var $closeBtn = $('.sidebarClose', $el);
        var $sidebarInner = $('.sidebarSide .sidebarInner', $el);

        //--------------------------------
        // Open Sidebar
        //--------------------------------
        //
        $openBtn.on('click', function(e) {
            e.preventDefault();

            $el.addClass('active');
            $sidebarInner.fadeIn(400);
            $body.addClass('_overflow-hidden');

            // Accessibility
            //
            $openBtn.attr('aria-disabled', true);
            $closeBtn.attr('aria-disabled', false);
        });

        //--------------------------------
        // Close Sidebar
        //--------------------------------
        //
        $closeBtn.on('click', function(e) {
            e.preventDefault();
            $body.removeClass('_overflow-hidden');
            $sidebarInner.fadeOut(400, function() {
                $el.removeClass('active');
            });

            // Accessibility
            //
            $openBtn.attr('aria-disabled', false);
            $closeBtn.attr('aria-disabled', true);
        });

        //--------------------------------
        // Resize
        //--------------------------------
        //
        $(window).on('resize', _debounce(function() {
            if (_isMinBrowserWidth(992)) {
                $el.removeClass('active');
                $sidebarInner.css({
                    'display': ''
                });
                $body.removeClass('_overflow-hidden');
            }
        }, 250));
    });
}
$(document).ready(function() {
    handleSidebarMobile();
})
//-----------------------------------------------------------
//
// SVG
//
//-----------------------------------------------------------
//
var SVG = {
    'arrow-left-chevron': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 37.414"><path class="svgColorize" fill="none" stroke="#000" stroke-width="2" d="m27.5 36.707-18-18 18-18"/></svg>',
    'arrow-right-chevron': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 37.414"><path class="svgColorize" fill="none" stroke="#000" stroke-width="2" d="m9.5 36.707 18-18-18-18"/></svg>',
    'arrow-left-chevron-square': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><path class="svgColorize" fill="none" stroke="#000" stroke-width="2" d="M37 37H1V1h36Z"/><path class="svgColorize" fill="none" stroke="#000" stroke-width="2" d="m24.539 28.693-11.077-9.734 11.077-9.651"/></svg>\n',
    'arrow-right-chevron-square': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><path class="svgColorize" fill="none" stroke="#000" stroke-width="2" d="M37 37H1V1h36Z"/><path class="svgColorize" fill="none" stroke="#000" stroke-width="2" d="m13.462 28.693 11.077-9.734-11.077-9.651"/></svg>',
    'arrow-left-arrow-square': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><path class="svgColorize" fill="none" stroke="#000" stroke-width="2" d="M1 1h36v36H1zm36 18H10.551"/><path class="svgColorize" fill="none" stroke="#000" stroke-width="2" d="m16.408 24.896-5.857-5.939L16.408 13"/></svg>',
    'arrow-right-arrow-square': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><path class="svgColorize" fill="none" stroke="#000" stroke-width="2" d="M1 1h36v36H1zm0 18h26.45"/><path class="svgColorize" fill="none" stroke="#000" stroke-width="2" d="m21.594 13 5.86 5.943-5.86 5.96"/></svg>',
    'arrow-left-chevron-curve': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 38.828"><path class="svgColorize" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" d="m26.408 37.414-14.22-14.22a5.762 5.762 0 0 1 0-8.149l6.174-6.174 7.456-7.457"/></svg>',
    'arrow-right-chevron-curve': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 38.828"><path class="svgColorize" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" d="m10.5 1.414 14.22 14.22a5.762 5.762 0 0 1 0 8.149l-6.174 6.174-7.46 7.457"/></svg>',
    'arrow-left-arrow': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 36"><path class="svgColorize" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" d="M37 18.407H1"/><path class="svgColorize" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" stroke-linejoin="round" d="M13.217 30.814 1 18.426 13.217 6"/></svg>',
    'arrow-right-arrow': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 36"><path class="svgColorize" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" d="M1 18.407h36"/><path class="svgColorize" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" stroke-linejoin="round" d="M24.787 6 37 18.386 24.787 30.814"/></svg>',
    'arrow-left-chevron-circle': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><g class="svgColorize" fill="none" stroke="#000" stroke-width="2" transform="translate(-753 -326)"><circle cx="18" cy="18" r="18" transform="translate(754 327)"/><path d="m774.302 339.488-5.6 5.6 5.6 5.6"/></g></svg>',
    'arrow-right-chevron-circle': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><g class="svgColorize" fill="none" stroke="#000" stroke-width="2" transform="translate(-816 -328)"><circle cx="18" cy="18" r="18" transform="translate(817 329)"/><path d="m832.698 352.512 5.6-5.6-5.6-5.6"/></g></svg>'
};