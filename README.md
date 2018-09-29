# NavLayout (beta) #  
[![alt text][1.1]][1]
[![alt text][2.1]][2]
[![alt text][3.1]][3]
[![alt text][4.1]][4]
[![alt text][5.1]][5]

[1.1]: http://i.imgur.com/tXSoThF.png (twitter)
[2.1]: http://i.imgur.com/P3YfQoD.png (facebook)
[3.1]: http://i.imgur.com/YckIOms.png (tumblr)
[4.1]: http://i.imgur.com/1AGmwO3.png (dribbble)
[5.1]: http://i.imgur.com/0o48UoR.png (github)

[1]: http://www.twitter.com/NavLayout
[2]: http://www.facebook.com/NavLayout
[3]: http://navlayout.tumblr.com
[4]: http://dribbble.com/NavLayout
[5]: http://www.github.com/navrosh/NavLayout

### [NavLayout](https://navrosh.github.io/NavLayout/) is a pure javascript based powerful tabbed and dockable window framework which enables you to go beyond fixed layouts, designed for low footprint, no dependency, high performance & flexibility. ###

![Screenshot](images/img.png)
[Live Demo](https://navrosh.github.io/NavLayout/)
<br><br>

### Some Possible Use Cases ###

 type  | detail 
--- | --- 
<img src="images/web.png" width="50"> | ***Websites / eCommerce*** : Why not changing conventional design layouts like search boxes always on top, fixed main menus / header / footer ... in my views everything should be responsive, floatable, dockable as per user choice.. Don't you think so ?  
<img src="images/admin.png" width="50"> | ***Admin Dashboard*** : Admin dashboards are complex so why not giving user some gui flexibility to arrange his layout like menu, widgets... 
<img src="images/email.png" width="50"> | ***eMail Panels*** : Why not desktop like eMail applications for web ?
<img src="images/finance.png" width="50"> | ***Financial Applications*** : It could help you to design a flexible portfolio, orderbook & order management system.
<img src="images/random.png" width="50"> | ***Anywhere where you want user the flexibility to design their own layout..***

<br>

### Some Key Points : ###

* Extremely responsive design

* convert your web design to work like apps

* Easily create your own themes

* Easily save and restore your layout as per your choice like cookie , local storage or a remote server

* Dynamically add, delete tabs / change layout any time

* Compatible with all major browsers(including IE7) and touch devices 

* Various Events to control the layout

* If you want to roll your own framework use NavLayout without any dependency problem 

* No DOM manipulation on Tabs after its creation to till its existence, rather than navlayout uses its memory based parent & child linkage paradigm

* logic could be easily ported into other languages like c++ , c#, java , etc.. targeting different platform.

### Issues ###

NavLayout uses GitHub's issue tracker for enhancements and bugs. But please do check the [GoogleGroup](https://groups.google.com/forum/#!forum/navlayout) before posting an issue. Also if the support need is urgent you can mail me at nav.ros@gmail.com

### Requirements ###

No external dependencies.

### Current / Future Work ###
Kindly [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/navlayout) If this project help you reduce time to develop or you believe this could be helpful to others !

* stack : a netsing stacking of elements where in or out from any direction within navlayout would be possible [ #### current ####]

* list : a horizontal/Vertical list of drag & drop navlayout objects with scrolling. Options will include boxSize:'50px', scrollType:'button/bar', toolBox: true (for filtering the list & switching between vertical or horizontal mode)

* Custom extension development & hooking / extending NavLayout object types (e.g: like a table supporting drag & drop of it cells to/from navlayout.. ahh.. that would be real fun !)

* layout save and restore 

* api documentation & proper comments

* a dedicated website www.navlayout.com for version releases, bug reporting, issue tracking and support.

* navlayout_popout_ext.js : will enable tab pop out as a new window by using security protocol 

* navlayout_design_framework : a tool to generate navlayout without coding, features would include : predefined community themes and layouts for various domains (finance, trading, eCommerce ..), saving/editing themes and layout, exporting as various cms plugins like wordpress, joomla, drupal, etc..

* navlayout_theme_ext.js :  dynamic theme loading capability

* change various logic to make the plugin even much smaller and faster.. i wish i could get time to do so :-( 

* checking memory leaks / profiling

## Usage ##

### Adding Tabs Using Config ###

       nl = new NavLayout({
            Config:
                {
                    spliter: {
                        areaSize: '9px', // Gap between two tabs
                        barSize: '8px'   // size of splitter between gaps
                    },
                    tabs: {
                        dragLockTime: 150, // docking start lock time in millisecs
                        spacing: '1px'     // spacing between tabs when grouped together
                    }
              data: [
                  {
                      type: 'widget',     // tab, widget, listHorizontal, listVertical, stack
                      name: 'widget_1',
                      connect: null,
                      dock: 'float',      //top, bottom, left, right , headerLeft, headerRight, float 
                      title: 'Widget',
                      close: false,
                      popout: 'parent',   // parent / window (requires security extension pack)                      
                      dockable: false,
                      resizable: false,
                      top: "5%",         // px or %
                      left: "80%",
                      width: '150px',
                      height: '150px'
                  },            
                  {
                      type: 'tab',     
                      name: '0',
                      connect: null,
                      dock: 'bottom',    
                      title: '0',
                      maximize: 'parent',
                      popout: 'parent',
                      close: true
                  },
                  {
                      type: 'tab',
                      name: '1',
                      connect: null,
                      dock: 'bottom',
                      title: '1'
                  }
                ]
            }
            , ContainerObject: o._e.item
        });
          
### Dynamically Adding Tabs ###

      nl.addTab(
                [
                  {
                      name: '32',
                      connect: null,
                      dock: 'right',
                      title: '32'
                  },
                  {

                      name: '33',
                      connect: null,
                      dock: 'right',
                      title: '33'
                  }
              ]
       );
       

### Deleting Tabs ###

    nl.deleteTab(tab); // tab : name / object
    
### Events ###
    
    nl.on('tabCreated', function (o) {
        if (o.name == '1') {
            o._e.hd.tab.ctl.add('end', '<li class="_nl_close" title="close" ></li>', function (ev, nl, tab, obj) {
                nl.emit('close', ev, tab);
                if (ev.defaultPrevented == false) {
                    nl.deleteTab(tab);
                }
            });
        }
    });
    nl.on('tabDeleted', function (o) {
        console.log('tabDeleted Event : ' + o);
    });
    nl.on('hnlFocusIn', function (o) {
        console.log('hnlFocusIn Event : ' + o);
    });
    nl.on('hnlFocusOut', function (o) {
        console.log('hnlFocusOut Event : ' + o);
    });
    nl.on('vnlFocusIn', function (o) {
        console.log('vnlFocusIn Event : ' + o);
    });
    nl.on('vnlFocusOut', function (o) {
        console.log('vnlFocusOut Event : ' + o);
    });
    nl.on('tabFocusIn', function (o) {
        console.log('tabFocusIn Event : ' + o);
    });
    nl.on('tabFocusOut', function (o) {
        console.log('tabFocusOut Event : ' + o);
    });
    nl.on('hnlDragStart', function (e, o) {
        console.log('hnlDragStart Event : ' + e + ', object:' + o);
        e.preventDefault();
    });
    nl.on('vnlDragStart', function (e, o) {
        console.log('vnlDragStart Event : ' + e + ', object:' + o);
        e.preventDefault();
    });
    nl.on('hnlDragEnd', function (o) {
        console.log('hnlDragEnd Event : ' + ', object:' + o);
        e.preventDefault();
    });
    nl.on('vnlDragEnd', function (o) {
        console.log('vnlDragEnd Event : ' + ', object:' + o);
        e.preventDefault();
    });
    nl.on('dragStart', function (e, o) {
        console.log('dragStart Event : ' + e + ', name:' + n + ', object:' + o.item);
        e.preventDefault();
    });
    nl.on('dragEnd', function (o) {
        console.log('dragEnd Event : ' + n + ', object:' + o.item);
    });
    nl.on('resized', function (o) {
        console.log('Resized Event : ' + n + ', object:' + o.item);
        if (stack) stack.update();
    });
    nl.on('popout', function (e, o) {
        console.log('Popout Event : ' + e + ', name:' + n + ', object:' + o.item);
    });
    nl.on('minimize', function (e, o) {
        console.log('Minimize Event : ' + e + ', name:' + n + ', object:' + o.item);
    });
    nl.on('maximize', function (e, o) {
        console.log('Maximize Event : ' + e + ', name:' + n + ', object:' + o.item);
        e.preventDefault();
    });
    nl.on('layoutChanged', function (setting) {
        console.log('layoutChanged Event : ' + setting );        
    });
    nl.on('close', function (e, o) {
        console.log('Closed Event : ' + e + ', name:' + n + ', object:' + o.item);
        var r = confirm("Do You Really Want To Close ?");
        if (r == false) {
            e.preventDefault();
        }
    });
    
   
### Documentation ###

Documentation can be found in the doc folder of the project, or you can view it online here.


[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.me/navlayout)







