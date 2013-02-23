function elFinderBrowser (field_name, url, type, win) {
    var elfinder_url = $('.hidden').attr('elfinder');
    tinyMCE.activeEditor.windowManager.open({
        file: elfinder_url,
        title: 'elFinder 2.0',
        width: 900,
        height: 450,
        resizable: 'yes',
        inline: 'yes',    // This parameter only has an effect if you use the inlinepopups plugin!
        popup_css: false, // Disable TinyMCE's default popup CSS
        close_previous: 'no'
    }, {
        window: win,
        input: field_name
    });
    return false;
}
