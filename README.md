# indrz
indoor maps, orientation, wayfinding and indoor routing for buildings large or small, app or webpage

### What is indrz?
indrz will allow you as a developer to integrate indoor maps and routing services into your application.  If you work at a university or other organization and need an online wayfinder indrz(www.indrz.com) will offer our services to build-host it for you.  Our business model is like Mapbox, free open source software and payed services.

### What you GET
The code is for building the routing services, client side javascript to view routes, show maps, change floors, ...  All the functionality is baked in for your own indoor routing app or webpage.  

### What this is NOT
You do not get the data prepared for the system, data import, data conversion, platform installation, design and more.  These are all services we provide at (www.indrz.com) so to keep this all open source please contact us to keep things moving forward.

If you want we can make the maps, import data, convert file formats such as DWG,JPG, PDF into maps or does it upload into a PostGIS database.  This is hard work and I am still looking for a quick magicical way to automagically import your indoor maps (simple images is easy and everyone can do that).  Finally we also build the indoor routing network.

### Where can you use it?
* universities
* hospitals
* business parks
* shopping malls
* expo halls
* events opera house, stadiums
* libraries
* any building anywhere

## Features
* search people, places
* API connect to external data such as room booking systems vi API
* API to show or hide map components
* floor switcher to view floor plans per floor
* routing indoor 3d routes from any floor to any floor
* routing for diabled
* routing walk time
* routing distance
* routing logic such as route to front office first then to destination
* 3D view in google earth connected to 2d map
* Print maps
* share map, share route, share search results
* Points of interests: cafe, vending machines, bookstore you name it
* multilanguage to support any language
* mobile web page based on jquery mobile


### Questions you might want to answer
* How long are people waiting in line at your airport?
* How many people are located in a room / area?
* Where do the most people visit within a building?
* Security planning for events and people locations


### Current branches in use
* indrz campus university (http://gis.wu.ac.at)
* indrz library [Vienna University of Economics and Business Administration Library](http://gis.wu.ac.at/?key=ST%20261.w34%20G744)
* indrz business park [Lakeside Science & Technology Park](http://ws1.gomogi.com/lakeside/Firmensuche.html)

[Indrz Campus GIS](http://gomogi.com/products/campus-gis) is a indoor map platform.[GIT Project Page](http://gomogi.github.io/indrz/).  It allows you to find your way around in an indoor environment such as large building complexes. The man behind it is [Michael Diener](http://twitter.com/spatialmounty) &mdash; [get in touch](#contact--community) if you'd like to discuss the project in more detail.


## Contact & community
Communication is simple via email ([office@gomogi.com](mailto:office@gomogi.com)). All other discussion should happen in the [indrz Google Group](https://groups.google.com/forum/#!forum/indrz),  or [relevant GitHub issues page](https://github.com/gomogi/indrz/issues).

## Getting involved
indrz would love your help. We need people to submit bugs, suggest features, share how they're using the project, and contribute code.


## Building blocks Libraries we use

* [Django](http://djangoproject.com) – Web Framework Backend
* [Django Rest Framework](http://www.django-rest-framework.org) – Django Rest Web Framework our API
* [PostGIS](http://postgis.net) – Spatial Database extension to Postgresql
* [PGRouting](http://pgrouting.org) - Routing extension to PostGIS and Posgresql
* [Postgresql](http://www.postgresql.org) – Database
* [Geoserver](http://geoserver.org) – Web map server to serve and create, maps and data
* [Openlayers 3](http://openlayers.org) – Slippy client side javascript mapping library
* [Angularjs](http://angularjs.org/) - Javascript framework
* [three.js](http://threejs.org) - 3d Javascript library
* [Bootstrap css](http://bootstrap.com/) - css framework bootstrap
* [jQuery Mobile js](http://http://jquerymobile.com) - mobile web pages made easy
* [ionic Framework](http://ionicframework.com) - hybrid mobile apps with html 5
* [Gulpjs js](http://gulpjs.com) - js building 

## Licence
indrz is under Apache license.  The name "indrz" is not allowed to be used by third parties and is a trademark.  Other than that you can do what you want accordingly  (http://www.apache.org/licenses/LICENSE-2.0)

