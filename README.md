# NavLayout #  
  
### NavLayout is a pure javascript based powerful window/dock engine which enables you to go beyond fixed layouts, designed for small size (55 kb), speed & flexibility. ###

Why there was a need to write a plugin if there are already many similar plugins avaliable ? 

Yes this is true that there are multiple dockable plugins like GoldenLayout (my favourite & inspiration), PhosphorJS, wcDocker, dockspawn or more BUT all avaliable plugins are either jquery dependent , bulky or have got limitions. 

I was writing my very first commercial plugin and thought about extending the user experience by using dockable panels. I explored/implemented various plugins and got stuck !

My requirements were simple -> a micro/lightweight dockable plugin + it should support every browser + fast + flexible

So, i decided to write my OWN and being as an ordinary c++ developer there was a little learning curve to get used to javascript...

I am looking for developers, testers, users feedback to extend the functionalities and bug fixing of navlayout. So, everyone is invited to make your navlayout plugin more usable.


### Some Possible Use Cases ###

admin dashboard, email panels, financial application, anywhere where you want user the flexibility to design their own layout..


### Some Key Points : ###

* Extremely responsive design

* Easily create your own themes

* Easily save and restore your layout as per your choice like cookie , local storage or a remote server

* Dynamically add, delete tabs / change layout any time

* Compatible with all major browsers(including IE7) and touch devices 

* Various Events to control the layout

* If you want to roll your own framework use NavLayout without any dependency problem 

* No DOM manipulation on Tabs after its creation to till its existence, rather than navlayout uses its memory based parent & child linkage paradigm

* logic could be easily ported into other languages like c++ , c#, java , etc.. targeting different platform.

### Issues ###

NavLayout uses GitHub's issue tracker for enhancements and bugs. But please do check the Google Group before posting an issue. Also if the support need is urgent you can mail me at nav.ros@gmail.com

### Requirements ###

No external dependencies.

### Current / Future Work ###

* layout save and restore [ #### current ####]

* api documentation & proper comments

* a dedicated website www.navlayout.com for version releases, bug reporting, issue tracking and support.

* navlayout_popout_ext.js : will enable tab pop out as a new window by using security protocol 

* navlayout_widgets_ext.js 

* navlayout_theme_ext.js :  dynamic theme loading capability

* change various logic to make the plugin even much smaller and faster.. probably less than 40 kbs, i wish i could get time to do so :-( 

* checking memory leaks / profiling

## Usage ##

### Adding Tabs Using Config ###

       nl = new NavLayout({
            Config:
                JSON.stringify({
                    spliter: {
                        areaSize: '9px', // Gap between splitter and the tabs
                        barSize: '8px'
                    },
                    tabs: {
                        dragLockTime: 150,
                        spacing: '1px'
                    }
            data: [
                  {
                      name: '0',
                      connect: null,
                      dock: 'bottom',    // top, bottom, left, right , headerLeft, headerRight 
                      title: '0',
                      maximize: 'parent',
                      popout: 'parent',
                      close: true
                  },
                  {
                      name: '1',
                      connect: null,
                      dock: 'bottom',
                      title: '1'
                  }
                ]
            })
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


