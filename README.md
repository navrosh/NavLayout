# NavLayout #  
  
### NavLayout is a pure javascript based powerful window/dock engine which enables you to go beyond fixed layouts, designed for small size (55 kb), speed & flexibility. ###

Why there was a need to write a plugin if there are already many similar plugins avaliable ? 

Yes this is true that there are multiple dockable plugins like GoldenLayout (my favourite & inspiration), PhosphorJS, wcDocker, dockspawn or more BUT all avaliable plugins are either jquery dependent , bulky or have got limitions. 

I was writing my very first commercial plugin and thought about extending the user experience by using dockable panels. I explored/implemented various plugins and got stuck !

My requirements were simple -> a micro/lightweight dockable plugin + it should support every browser + fast + flexible

So, i decided to write my OWN and being as an ordinary c++ developer there was a little learning curve to get used to javascript, and frankly speaking now javascript is my sencond most favourite language after c++. 

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

### Documentation ###

Documentation can be found in the doc folder of the project, or you can view it online here.

