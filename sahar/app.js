'use strict';



var newlocation = [];// this array to save the proparty and vlaue
function TimeTrip(LocationName, route , Grade, period, date, type, distance, time, startingTime, size, discription, Transportation,food,equipment) {
  this.LocationName = LocationName;
  this.route = route;
  this.Grade = Grade;
  this.period = period;
  this.date = date;
  this.type = type;
  this.distance = distance;
  this.time = time;
  this.startingTime = startingTime;
  this.size = size;
  this.discription = discription;
  this.Transportation = Transportation;
  this.food=food;
  this.equipment=equipment;



  newlocation.push(this);
  return this;
}

function save_locations() {//this function creat the location and save them in local storage.
  new TimeTrip('Dana Hiking Trails:', 'From Rummana Campsite:Campsite Trail', 'Easy', 'up to 2 hours', '(March 15 – October 31)', 'guided or self-guided', '1.5 km', '1 hour', '8:00 a.m. – 3:00 p.m. from the Rummana Campsite', '4-20 people', 'This circular walk around the Rummana campsite is a great place to see birds, especially during migration seasons. The scenic viewpoints along the trail offer picturesque views of the Dana Mountains', 'transportation included from 7 circle to Dana Hiking Trails','Breakfast:falafel,hummas,tomato,potato','uniform and guiding tools');
  new TimeTrip('Dana Hiking Trails:', 'From Rummana Campsite :Rummana Mountain Trail', 'Moderate', 'up to 2 hours', '(March 15 – October 31)', 'guided or self-guided', '2.5 km', '2 hours', '8:00 a.m. – 3:00 p.m. from the Rummana Campsite', '4-20 people', 'This circular trail starts from the campsite and ascends to the top to Rummana Mountain, where the views of Wadi Araba are breathtaking. Highlights on the trail include magnificent sandstone and limestone formations, birds of prey, and beautiful views of the nature reserve.', 'transportation included from 7 circle to Dana Hiking Trails ','Breakfast:falafel,hummas,tomato,potato,fruits,vegetables','uniform and guiding tools' );
  new TimeTrip('Azraq Hiking Trails:','Marsh Trail', 'Difficult', 'up to 2 hours', '(Year-round)', ' guided or self-guided', '1.5 km', '30 minutes', ' 9:00 a.m. to 4:00 p.m. (winter); 9:00 a.m. to 6:00 p.m. (summer)', '4-20 people', 'This easy walking trail gives you an excellent introduction to the Azraq Wetland Reserve. The boardwalk leads you through dry and wet areas to a viewing platform overlooking the artesian pools that once released millions of cubic meters of water into the marshland. After leaving the platform, the trail takes you over an ancient black basalt wall, most likely constructed by an Umayyad Caliph. The trail then leads to a bird hide made of local mud brick where you can observe the migratory birds and perhaps catch a glimpse of the water buffalo. Follow the trail back to the Visitor Center, passing yet another part of the ancient basalt wall.', 'transportation included from 7 circle to Azraq Hiking Trails ','Breakfast:falafel,hummas,tomato,potato,fruits,vegetables','uniform and guiding tools and firstaid kit');

  new TimeTrip('Dana Hiking Trails:', 'From Dana Guesthouse: White Dome Trail', 'Moderate', 'up to 3-4 hours', '(March 15 – October 31, except during Ramadan)', 'guided only', '8 km', '3-4 hours', ' from either the Rummana Campsite or the Dana Guesthouse', '4-20 people', 'This trail contours the huge escarpments of Wadi Dana between the Rummana campsite and Dana Village. Passing through the terraced gardens of the village, the trail offers breathtaking views of the canyon-like Wadi. If desired, the trail can be done in reverse, from Dana Guesthouse to the Rummana campsite', 'transportation included from 7 circle to Dana Hiking Trails','Breakfast:falafel,hummas,tomato,potato,fruits,vegetables','uniform and guiding tools' );
  new TimeTrip('Ajloun Hiking Trails:',' The Prophet’s Trail', 'Moderate', 'up to 3-4 hours', '(Year-round, except during Ramadan)', 'Guided only', '8.5 km', '4 hours', '8:30 a.m.', '4-18 people', ' This hike takes you from Ajloun Forest Reserve Visitor Center to Mar Elias, the ruins of one of Jordan oldest churches. It is named for the Prophet Elias, or Elijah, to whom Mar Elias is dedicated. The trail leads through fig and pear orchards, amongst forests of oak and oriental strawberry trees. The stone walls that crisscross the valley guard the farmers crops inside from both the winter rains and wild boar. Relax in the shade with a glass of tea before climbing to the hilltop ruins, which provide sweeping views of the surrounding area. The hike also includes a locally prepared picnic lunch near the ruins.', 'transportation included from 7 circle to Ajloun Hiking Trails','Breakfast:falafel,hummas,tomato,potato,fruits,vegetables','uniform and guiding tools' );
  new TimeTrip('Mujib Hiking Trails:', 'Ibex Trail', 'Difficult', 'up to 3-4 hours', '(November 1 –March 31)', 'Guided only', '9 km', '4 hours', '8:30 a.m.', ' 6-25 people', ' The trail begins at the Visitor Center and follows the Dead Sea Highway before ascending into the Reserve. Diverging to the south, the trail runs parallel to the Dead Sea, which provides a startlingly blue backdrop for the entire hike. The hike then continues along a number of dry wadis to the Raddas Ranger Station, where you may see Nubian Ibex. It is also where the famous rock “statue” of Lot’s wife can be seen. After resting at the Station, the trail continues along a road for about one hour until reaching the Reserve entrance near the Visitor Center', 'transportation included from 7 circle to Mujib Hiking Trails','Breakfast:falafel,hummas,tomato,potato,fruits,vegetables','uniform and guiding tools and firstaid kit' );

  new TimeTrip('Dana Hiking Trails:', 'Wadi Dana Trail', 'Moderate', 'up to 6 hours', '(Year-round, except during Ramadan)', ' guided or self-guided', '14 km', '6-7 hours', '8:00 a.m. from Dana Guesthouse', '10-20 people', ' Passing through sandstone gorges, this trail leads downhill to Feynan, where visitors can arrange for return transportation or stay overnight in the Feynan Ecolodge. Alternatively, visitors can begin this trail at Feynan Ecolodge and travel to the Dana Guesthouse or Rummana Campsite.', 'transportation included from 7 circle to Dana Hiking Trails ','Breakfast:falafel,hummas,tomato,potato,fruits,vegetables','uniform and guiding tools' );
  new TimeTrip('Ajloun Hiking Trails:','Orjan Village Tour', 'Moderate', 'up to 6 hours', '(Year-round, except during Ramadan)', 'Guided only', '12 km', '6 hours', '8:00 a.m.', ' 4-18 people', ' Continuing from the Soap House, this tour takes you through wooded valleys to the lush green orchards of Orjan village, giving you the chance to discover the rural lifestyle of the region. A poplar-lined spring provides a wonderful contrast to the arid mountains of the previous stages of the trail. As you hike, note the dramatic rock walls, old water mills once used by local people to grind their seeds and the hollow walnut tree. Enjoy a delicious traditional meal in an orchard of fig, pomegranate, apple and apricot trees.', 'transportation included from 7 circle to Ajloun Hiking Trails','Breakfast:falafel,hummas,tomato,potato,fruits,vegetables','uniform and guiding tools' );
  new TimeTrip('Dana Hiking Trails:','From Dana Guesthouse: Shaq al Reesh Trail', 'Difficult', 'up to 6 hours', '(Year-round, except during Ramadan)', 'guided only', '8 km', ' 4 hours', '8:00 a.m.', '4-20 people', 'This circular trail traverses from Al-Barrah, through a breathtaking siq, and to Shaq al Reesh.', ' transportation included from 7 circle to Dana Hiking Trails','Breakfast:falafel,hummas,tomato,potato,fruits,vegetables','uniform and guiding tools and firstaid kit' );

  new TimeTrip('Dana Hiking Trails:', 'Wadi Dathneh Trail', 'Difficult', 'Full Day', '(Year-round, except during Ramadan)', 'guided only', '19 km', ' 8-10 hours', '6:30 a.m.', '10-20 people', ' Perfect for adventure lovers who have no fear of heights, this trail descends through Wadi Dathneh, past an oasis, and through Wadi al Hamra to the Feynan area', 'transportation included from 7 circle to Dana Hiking Trails ','Breakfast:falafel,hummas,tomato,potato,fruits,vegetables','uniform and guiding tools and firstaid kit');
  new TimeTrip('Dana Hiking Trails:', 'Wadi Ghwair Trail', 'Difficult', 'Full Day', '(Year-round, except during Ramadan)', 'guided only', '16 km', '7-8 hours', ' 6:30 a.m.', '10-20 people', 'Continue along the gravel river bed of the Wadi, alongside a flowing stream, to the entrance to Wadi Ghweir. Very similar to the famous Siq in Petra, the trail leads through magnificent sceneries of different stone formations and many unique plants and trees on both sides of the river. The scenery is so breathtaking it has been known to cause visitors to forget about everything else -- including how long they have been hiking! After 3.5 hours, you will have tea and you can rest and learn more about the area from your guide. From there, continue to the Byzantine archaeology at Khirbet Feynan until you reach your final destination at Feynan Ecolodge.', 'transportation included from 7 circle to Dana Hiking Trails','Breakfast:falafel,hummas,tomato,potato,fruits,vegetables','uniform and guiding tools and firstaid kit' );
  new TimeTrip('Ajloun Hiking Trails:', 'Ajloun Castle Trail', 'Difficult', 'Full Day', '(Year-round, except during Ramadan)', 'Guided only', '18 km', 'Full Day', '6:30 a.m.', '4-18 people', 'Once you have reached Mar Elias, you have the option of continuing on this challenging trail, which takes you by small farm houses and their adjacent orchards on your way to Ajloun Castle, built between AD 1184-1188 by Salahadin nephew. In the first section of the trail you can enjoy views of the West Bank and Syria, before you descend into a wooded valley. The final difficult uphill is rewarded by the incredible Castle and the marvelous views that accompany it. The hike also includes a locally prepared picnic lunch.', 'transportation included from 7 circle to Ajloun Hiking Trails','Breakfast:falafel,hummas,tomato,potato,fruits,vegetables','uniform and guiding tools and firstaid kit' );

  new TimeTrip('RIFT VALLEY MOUNTAIN TREK:', 'Wadi Dana Trail', 'Difficult', 'More Than One Day', '(Year-round, except during Ramadan)', 'guided only', ' 14km', '5 -7 hrs', '6:30 a.m.', '10-20 people', 'Starting from the luscious highlands before winding through the rocky slopes and plains, the serenity is interrupted only by the sound of birdsong, as the scents of flowers permeate the crisp, cool air of the valley. After your 14km hike through this unique landscape, you will relax and spend the night at the dreamy, candle-lit Eco-lodge.', 'transportation included from 7 circle to RIFT VALLEY MOUNTAIN', 'Breakfast:falafel,hummas,tomato,potato,fruits,vegetables','uniform and guiding tools and firstaid kit');
  new TimeTrip('RIFT VALLEY MOUNTAIN TREK:', 'Wadi Al Nakheel Trail', 'Moderate', 'More Than One Day', '(Year-round, except during Ramadan)', 'guided only', '18 km', ' 7 - 8 hrs', '6:30 a.m.', '10-20 people', 'This trail offers an aquatic hike through small pools of water,especially refreshing during spring time. With different stone formations, this trail is reminiscent of the famous Siq of Petra “Petra canyon”. After 3 - 4 hours, you will take a relaxing tea break,whilst learning more about the spectacular surroundings from your local guide. Upon reaching the green valleys of Albustaan, you will meet your Bedouin hosts and sleep in a Bedouin tent.', 'transportation included from 7 circle to RIFT VALLEY MOUNTAIN','Breakfast:falafel,hummas,tomato,potato,fruits,vegetables','uniform and guiding tools' );
  new TimeTrip('RIFT VALLEY MOUNTAIN TREK:', 'Al Matal Trail', 'Easy', 'More Than One Day', '(Year-round, except during Ramadan)', 'guided only', '14 km', ' 5 - 6 hrs', '6:30 a.m.', '10-20 people', 'This easier hike starts from the old village of Sihan, which was inhabited by Shobaki locals up until the nineteenth century. Only ruins of the old stone houses now stand witness to a once lively community in Sihan. A high viewpoint is easily reached, rewarding you with magnificent views of Shobak’s proposed protected area. Following the Al Hazeem road you reach the Ras Al Faid area, where you spend your last night in Shobak before heading towards little Petra.', 'transportation included from 7 circle to RIFT VALLEY MOUNTAIN', 'Breakfast:falafel,hummas,tomato,potato,fruits,vegetables','uniform and guiding tools');
  var productstring = JSON.stringify(newlocation);//to transfer the object to json formate (string)
  localStorage.setItem('locations', productstring);
}

function load_locations() {//to search that locations are stored in the storage, if not, call save function to generate and save locations
  var productstring = localStorage.getItem('locations');
  if (productstring) {
    newlocation = JSON.parse(productstring);
  }
  else {
    save_locations();
  }

}

load_locations();

function initiateList(){ // //Add all locations to the select options once the page is loaded
  var container = document.getElementById('LocationName');// locationName that in the form to creat all options
  if(container !== null){//If the select is not on page (in case javascript is shared between pages)
    if(newlocation.length !== 0 ){
      container.removeChild( container.options[0] );// remove the defult (no avaliable place)
    }

    var opt = document.createElement('option');
    opt.appendChild( document.createTextNode('Please select a location') );
    opt.value = 'NA';
    container.appendChild(opt);
    var taken = [];

    for(var i = 0; i < newlocation.length; i++){//creat option fo select list
      if (taken.includes(newlocation[i].LocationName))continue;// to not repeat the location in select item in location name box
      taken.push(newlocation[i].LocationName);
      var opt = document.createElement('option');
      opt.appendChild( document.createTextNode(newlocation[i].LocationName) );
      opt.value = newlocation[i].LocationName;
      container.appendChild(opt);
    }
    document.getElementById('route_div').style.display = 'none';//to hide the root because the location not selected until now
  }

}
initiateList();

var TripTime=document.getElementById('TimeofTrip');
var TripDif=document.getElementById('GradeofTrip');

TripTime.addEventListener('change', function() { // modify the select options depending on the selected filters

  var container = document.getElementById('LocationName');
  if(container !== null){

    container.innerHTML = '';//remove all the option before and when we change the time of trip the select liste change as we choose in time of trip
    var taken = [];// to save the already inputtted locations
    var opt = document.createElement('option');
    opt.appendChild( document.createTextNode('Please select a location') );
    opt.value = 'NA';
    container.appendChild(opt);
    for(var i = 0; i < newlocation.length; i++){ // iterate over all locations
      // check if the filters match the location, and display it
      if((TripTime.value === 'any' || TripTime.value === newlocation[i].period) && (TripDif.value === 'any' || TripDif.value === newlocation[i].Grade)){
        if(taken.includes(newlocation[i].LocationName))continue;
        taken.push(newlocation[i].LocationName);
        var opt = document.createElement('option');
        opt.appendChild( document.createTextNode(newlocation[i].LocationName) );
        opt.value = newlocation[i].LocationName;
        container.appendChild(opt);
      }

    }
    if(container.options.length === 1){ // if the select is empty, add default
      container.innerHTML = '';
      var opt = document.createElement('option');
      opt.appendChild( document.createTextNode('No Available Places') );
      opt.value ='NA';
      container.appendChild(opt);
    }
    document.getElementById('route_div').style.display = 'none';
  }
});

TripDif.addEventListener('change', function() {
  var container = document.getElementById('LocationName');
  if(container !== null){

    container.innerHTML = '';//remove all the option before and when we change the time of trip the select liste change as we choose in time of trip
    var taken = [];
    var opt = document.createElement('option');
    opt.appendChild( document.createTextNode('Please select a location') );
    opt.value = 'NA';
    container.appendChild(opt);
    for(var i = 0; i < newlocation.length; i++){ // iterate over all locations
      // check if the filters match the location, and display it
      if((TripTime.value === 'any' || TripTime.value == newlocation[i].period) && (TripDif.value === 'any' || TripDif.value === newlocation[i].Grade)){
        if(taken.includes(newlocation[i].LocationName))continue;
        taken.push(newlocation[i].LocationName);
        var opt = document.createElement('option');
        opt.appendChild( document.createTextNode(newlocation[i].LocationName) );
        opt.value = newlocation[i].LocationName;
        container.appendChild(opt);
      }

    }
    if(container.options.length === 1){ // if the select is empty, add default
      container.innerHTML = '';
      var opt = document.createElement('option');
      opt.appendChild( document.createTextNode('No Available Places') );
      opt.value ='NA';
      container.appendChild(opt);
    }
    document.getElementById('route_div').style.display = 'none';
  }
});


var container2 = document.getElementById('LocationName');
container2.addEventListener('change', function() {
  var container3 = document.getElementById('route');
  if(container3 !== null){

    container3.innerHTML = '';
    var opt = document.createElement('option');
    opt.appendChild( document.createTextNode('Please select a route') );
    opt.value = 'NA'; // when the user not choos the route the not available show on screen
    container3.appendChild(opt);

    for(var i = 0; i < newlocation.length; i++){
      if((TripTime.value === 'any' || TripTime.value === newlocation[i].period) && (TripDif.value === 'any' || TripDif.value === newlocation[i].Grade) && container2.value === newlocation[i].LocationName){
        var opt = document.createElement('option');
        opt.appendChild( document.createTextNode(newlocation[i].route) );
        opt.value = newlocation[i].route;
        container3.appendChild(opt);
      }

    }
    if(container3.options.length === 1){
      container3.innerHTML = '';
      var opt = document.createElement('option');
      opt.appendChild( document.createTextNode('No Available Places') );
      opt.value ='NA';
      container3.appendChild(opt);
    }
    document.getElementById('route_div').style.display = 'block';//route_div show as block when the location is selected, otherwise, dont show it (doesn't make sense)
  }
});


var moreInfo = document.getElementById('moreInfo');


moreInfo.addEventListener('click', function () { // when button is clicked, add the information of the location next to the form.

  var container = document.getElementById('LocationName');
  var container_route = document.getElementById('route');
  if (container !== null) {
    var info = document.getElementById('info');
    info.innerHTML = '';
    if (container.value !== 'NA' && container_route.value !== 'NA') {
      for (var i = 0; i < newlocation.length; i++) {
        if (container.value === newlocation[i].LocationName && container_route.value === newlocation[i].route) {

          var name = document.createElement('h1');
          name.appendChild(document.createTextNode(newlocation[i].LocationName+' '+ newlocation[i].route));
          info.appendChild(name);


          var grade = document.createElement('h3');
          grade.appendChild(document.createTextNode('Grade: ' + newlocation[i].Grade));
          info.appendChild(grade);

          var period = document.createElement('h3');
          period.appendChild(document.createTextNode('Period:  ' + newlocation[i].period));
          info.appendChild(period);

          var date = document.createElement('h3');
          date.appendChild(document.createTextNode('Date: ' + newlocation[i].date));
          info.appendChild(date);

          var type = document.createElement('h3');
          type.appendChild(document.createTextNode('Type: ' + newlocation[i].type));
          info.appendChild(type);

          var distance = document.createElement('h3');
          distance.appendChild(document.createTextNode('Distance: ' + newlocation[i].distance));
          info.appendChild(distance);

          var time = document.createElement('h3');
          time.appendChild(document.createTextNode('Time: ' + newlocation[i].time));
          info.appendChild(time);

          var startingTime = document.createElement('h3');
          startingTime.appendChild(document.createTextNode('Starting Time: ' + newlocation[i].startingTime));
          info.appendChild(startingTime);

          var size = document.createElement('h3');
          size.appendChild(document.createTextNode('Size: ' + newlocation[i].size));
          info.appendChild(size);


          var discription = document.createElement('h3');
          discription.appendChild(document.createTextNode('Discription: ' + newlocation[i].discription));
          info.appendChild(discription);


          var Transportation = document.createElement('h3');
          Transportation.appendChild(document.createTextNode('Transportation: ' + newlocation[i].Transportation));
          info.appendChild(Transportation);

          var food = document.createElement('h3');
          food.appendChild(document.createTextNode('food: ' + newlocation[i].food));
          info.appendChild(food);

          var equipment = document.createElement('h3');
          equipment.appendChild(document.createTextNode('equipment: ' + newlocation[i].equipment));
          info.appendChild(equipment);




        }

      }
    }
    else {
      var info = document.getElementById('info');
      var name = document.createElement('h1');
      name.appendChild(document.createTextNode('Please select a valid location.'));
      info.appendChild(name);
    }



  }
});


