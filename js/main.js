(function() {
  ddsmoothmenu.init({
    mainmenuid: 'mainmenu',
    orientation: 'h',
    contentsource: 'markup',
    classname: 'menu'
  });

  jQuery("nav.menu > ul").tinyNav({
    active: 'current-menu-item'
  });
}).call(this);