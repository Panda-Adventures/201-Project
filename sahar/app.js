'use strict';



var newlocation=[];// this array to save the proparty and vlaue
function TimeTrip(LocationName,Grade,period,date,type,distance,time,startingTime, size, discription, req) {
  this.LocationName=LocationName;
  this.Grade = Grade;
  this.period = period;
  this.date = date;
  this.type = type;
  this.distance = distance;
  this.time = time;
  this.startingTime = startingTime;
  this.size = size;
  this.discription = discription;
  this.req = req;
  
  newlocation.push(this);
  return this;
}

function save_locations(){//this function creat the location and save them in local storage.
  new TimeTrip('Dana Hiking Trails From Rummana Campsite:Campsite Trail','Easy','up to 2 hours',"(March 15 – October 31)","guided or self-guided","1.5 km","1 hour","8:00 a.m. – 3:00 p.m. from the Rummana Campsite","4-20 people","This circular walk around the Rummana campsite is a great place to see birds, especially during migration seasons. The scenic viewpoints along the trail offer picturesque views of the Dana Mountains", 'no additional req');
  // new TimeTrip('Dana Hiking Trails From Rummana Campsite:The Cave Trail','Easy','up to 2 hours',"(March 15 – October 31)","guided or self-guided","1.5 km","1.5 hours","8:00 a.m. – 3:00 p.m. from the Rummana Campsite","4-20 people","Starting at the Rummana campsite, this trail passes by the unusual sandstone formations of Shaq al Kalb (Wadi of the Dog) to a group of small caves, believed to have been a religious retreat or hermitage.","No fear of heights");
  new TimeTrip('Dana Hiking Trails From Rummana Campsite: Rummana Mountain Trail','Moderate','up to 2 hours','(March 15 – October 31)','guided or self-guided','2.5 km','2 hours','8:00 a.m. – 3:00 p.m. from the Rummana Campsite', '4-20 people','This circular trail starts from the campsite and ascends to the top to Rummana Mountain, where the views of Wadi Araba are breathtaking. Highlights on the trail include magnificent sandstone and limestone formations, birds of prey, and beautiful views of the nature reserve.');
  // new TimeTrip('Dana Hiking Trails From Dana Guesthouse:Dana Villag','Easy','up to 2 hours','(Year-round)','guided or self-guided','2 km','1-1.5 hours','8:00 a.m. – 3:00 p.m. from the Dana Guesthouse',' 4-20 people','Starting from the Dana Guesthouse, this trail winds above the Dana Village and through the terraced gardens and local craft workshops. Visitors can meet the local residents, see original Ottoman architecture, and learn more about Dana srich,history.');
  // new TimeTrip('Dana Hiking Trails From Dana Guesthouse:Nawatef Trail','Moderate','up to 2 hours','(Year-round)',' guided only','2 km','2 hours','8:00 a.m. – 3:00 p.m. from the Dana Guesthouse','4-20 people','This circular trail begins from the Al-Barrah area and takes you to beautiful mountains, springs and ancient ruins in the Nawatef Area.','Transportation from Dana Guesthouse to the starting/ending point in Qadissiya; reasonable level of fitness; no fear of heights');
  // new TimeTrip('Dana Hiking Trails From Feynan Ecolodge:Sunset hike','Easy','up to 2 hours','(Year-round)','guided only',' 1.5 km','2 hours',' 90 minutes before sunset time','no limit','Every evening, guests are invited to join the lodge’s guides on a 20-minute stroll to the top of a gentle outcrop to watch a sunset like no other. Against the dramatic backdrop of rugged, multi-coloured mountains, the sun descends, spreading vivid ambers, violets and reds across the canvas of the evening sky. Take this rare opportunity to witness the end of the day in the Bedouin camps below; with children wandering home from play, women tending the evening fires and men rounding up their herds in a peaceful dance as the sun falls to the haunting sounds of the call to prayer. Feel the gentle breeze ushering in nightfall as stars dot the sky and guides brew fresh mint tea over the warm fire. The whole activity takes 2 hours, including 40-45 minutes of walking.');
  new TimeTrip('Azraq Hiking Trails:Marsh Trail','Difficult','up to 2 hours','(Year-round)',' guided or self-guided','1.5 km','30 minutes',' 9:00 a.m. to 4:00 p.m. (winter); 9:00 a.m. to 6:00 p.m. (summer)','4-20 people','This easy walking trail gives you an excellent introduction to the Azraq Wetland Reserve. The boardwalk leads you through dry and wet areas to a viewing platform overlooking the artesian pools that once released millions of cubic meters of water into the marshland. After leaving the platform, the trail takes you over an ancient black basalt wall, most likely constructed by an Umayyad Caliph. The trail then leads to a bird hide made of local mud brick where you can observe the migratory birds and perhaps catch a glimpse of the water buffalo. Follow the trail back to the Visitor Center, passing yet another part of the ancient basalt wall.',);
  // new TimeTrip('Ajloun Hiking Trails Roe Deer Trail','Easy','up to 2 hours','(Year-round)','Guided or self-guided',' 2 km','Less than 1 hour','','4-18 people','This short circular trail starts at the campsite and offers great views over the reserve. Not far from the campsite you will find an old stone wine press. Early in the morning, you may be lucky enough to see Roe deer before you return to the visitor center.');
  
  new TimeTrip('Dana Hiking Trails From Dana Guesthouse: White Dome Trail','Moderate','up to 3-4 hours','(March 15 – October 31, except during Ramadan)','guided only','8 km','3-4 hours',' from either the Rummana Campsite or the Dana Guesthouse','4-20 people','This trail contours the huge escarpments of Wadi Dana between the Rummana campsite and Dana Village. Passing through the terraced gardens of the village, the trail offers breathtaking views of the canyon-like Wadi. If desired, the trail can be done in reverse, from Dana Guesthouse to the Rummana campsite');
  // new TimeTrip('Dana Hiking TrailsFrom Feynan Ecolodge :Copper mines','Easy','up to 3-4 hours',' (Year-round)','guided only',' 6-7 km','3-4 hours','','up to 15','Learn how vast deposits of copper were discovered, mined and processed at Feynan by ancient civilizations thousands of years ago and what an important supply centre Feynan was for the Roman Empire. Come explore deep, long-forgotten mine shafts and visit nearby sites to see how the copper was transported and refined, leaving vast slag formations from the smelting process that are still visible today.');
  // new TimeTrip('Dana Hiking TrailsFrom Feynan Ecolodge :Archaeological treasures','Easy','up to 3-4 hours','(Year-round)','guided or self-guided',' 5-6 km','3-4 hours','','up to 20','Uncover the remarkable history of Feynan through the many archaeological treasures that dot the landscape surrounding the lodge. Well-preserved Roman ruins include an aqueduct and mill. Remnants of an early Byzantine monastery and church still stand atop a nearby hill and the remains of Neolithic settlements attest to the shift from a nomadic way of life to that of permanent dwellings and agriculture.');
  // new TimeTrip('Dana Hiking TrailsFrom Feynan Ecolodge : Wadi Dana sampler','Easy','up to 3-4 hours','(Year-round)',' guided or self-guided',' 6-7 km',' 3-4 hours','','up to 20','This half day hike explores the lower end of Wadi Dana. Starting from the lodge and the open desert-like zone of Dana Biosphere Reserve, the trail gradually becomes greener as the hike moves more and more into the valley of Wadi Dana, with tall peaks that line either side of the valley. Highlights of the hike include passing through groups of Bedouin families in traditional goat-tent homes, seeing natural springs, and catching a glimpse of some of the birds that call Dana Biosphere Reserve home. This hike returns to the lodge along the same route.');
  // new TimeTrip('Dana Hiking TrailsFrom Feynan Ecolodge :Wadi Ghwayr sampler','Easy','up to 3-4 hours','(Not available in winter)','guided or self-guided','7-8 km',' 4 hours','','up to 15','This scenic trail begins from the lodge and passes by Khirbet Feynan, where many Byzantine and Roman ruins are preserved passing onwards into the Wadi Ghwayr basin (wadi means valley or canyon). Following the gravel riverbed, the trail proceeds onwards past a Neolithic settlement estimated to be over 11,000 years old. The trail then follows the riverbed past pink oleander, reeds and other plant life. A regular stream of water keeps the gorge green and alive. Our guides enrich the experience by explaining the local uses of the plants as medicines, soap and shampoo. Before returning our guides will prepare for you a cup of tea to enjoy along the scenic path. The route returns the same way back to the lodge. Be prepared for your feet and ankles to get wet.');
  // new TimeTrip('Ajloun Hiking Trails: Soap House Trail','Moderate','up to 3-4 hours','(Year-round)','Guided only','6-7 km','3 hours','4-18 people','This trail begins at the Reserve Visitor Center and takes you to the Soap House in the neighboring village of Orjan On the way, you will hike through thick, healthy woodlands filled with oak, pistachio, and oriental strawberry trees. Take a short detour to view the ruins of a wine press before you pass one of the oldest strawberry trees in the Reserve on your way down into the valley The trail climbs to 1,100m above sea level at Eagle View Point, and then descends to the Soap House where local women follow the traditional process of making Orjan pure olive oil soap.');
  // new TimeTrip('Ajloun Hiking Trails :Rockrose Trail','Moderate','up to 3-4 hours','(Year-round)','Guided only',' 8 km','3-4 hours','',' 4-18 people','Named for the flowers that can be seen around the trail every spring, this hiking loop passes through thick woodlands, orchards, farms and villages in and around the Reserve. It offers beautiful views of the West Bank, Syria, and the Jordanian countryside. About halfway through the hike, observe the wine and olive press from the Byzantine and Roman eras, and just before reaching the end of the trail, rest in the shade of a large Maloul tree. Each season has different vegetation to enjoy.',' Reasonable level of fitness');
  new TimeTrip('Ajloun Hiking Trails :The Prophet’s Trail','Moderate','up to 3-4 hours','(Year-round, except during Ramadan)','Guided only','8.5 km','4 hours','8:30 a.m.','4-18 people',' This hike takes you from Ajloun Forest Reserve Visitor Center to Mar Elias, the ruins of one of Jordan oldest churches. It is named for the Prophet Elias, or Elijah, to whom Mar Elias is dedicated. The trail leads through fig and pear orchards, amongst forests of oak and oriental strawberry trees. The stone walls that crisscross the valley guard the farmers crops inside from both the winter rains and wild boar. Relax in the shade with a glass of tea before climbing to the hilltop ruins, which provide sweeping views of the surrounding area. The hike also includes a locally prepared picnic lunch near the ruins.');
  new TimeTrip('Mujib Hiking Trails:Ibex Trail','Difficult','up to 3-4 hours','(November 1 –March 31)','Guided only','9 km','4 hours','8:30 a.m.',' 6-25 people',' The trail begins at the Visitor Center and follows the Dead Sea Highway before ascending into the Reserve. Diverging to the south, the trail runs parallel to the Dead Sea, which provides a startlingly blue backdrop for the entire hike. The hike then continues along a number of dry wadis to the Raddas Ranger Station, where you may see Nubian Ibex. It is also where the famous rock “statue” of Lot’s wife can be seen. After resting at the Station, the trail continues along a road for about one hour until reaching the Reserve entrance near the Visitor Center');
  
  new TimeTrip('Dana Hiking Trails:Wadi Dana Trail','Moderate','up to 6 hours','(Year-round, except during Ramadan)',' guided or self-guided','14 km','6-7 hours','8:00 a.m. from Dana Guesthouse','10-20 people',' Passing through sandstone gorges, this trail leads downhill to Feynan, where visitors can arrange for return transportation or stay overnight in the Feynan Ecolodge. Alternatively, visitors can begin this trail at Feynan Ecolodge and travel to the Dana Guesthouse or Rummana Campsite.');
  new TimeTrip('Ajloun Hiking Trails:Orjan Village Tour','Moderate','up to 6 hours','(Year-round, except during Ramadan)','Guided only','12 km','6 hours','8:00 a.m.',' 4-18 people',' Continuing from the Soap House, this tour takes you through wooded valleys to the lush green orchards of Orjan village, giving you the chance to discover the rural lifestyle of the region. A poplar-lined spring provides a wonderful contrast to the arid mountains of the previous stages of the trail. As you hike, note the dramatic rock walls, old water mills once used by local people to grind their seeds and the hollow walnut tree. Enjoy a delicious traditional meal in an orchard of fig, pomegranate, apple and apricot trees.');
  new TimeTrip('Dana Hiking Trails From Dana Guesthouse: Shaq al Reesh Trail','Difficult','up to 6 hours','(Year-round, except during Ramadan)','guided only','8 km',' 4 hours','8:00 a.m.','4-20 people','This circular trail traverses from Al-Barrah, through a breathtaking siq, and to Shaq al Reesh.','Transportation to and from al-Barra area; no fear of heights');
 
  
  new TimeTrip('Dana Hiking Trails:Wadi Dathneh Trail','Difficult','Full Day','(Year-round, except during Ramadan)','guided only','19 km',' 8-10 hours','6:30 a.m.','10-20 people',' Perfect for adventure lovers who have no fear of heights, this trail descends through Wadi Dathneh, past an oasis, and through Wadi al Hamra to the Feynan area','Transportation to and from the Nawatef area; high level of fitness; no fear of heights.');
  new TimeTrip('Dana Hiking Trails:Wadi Ghwair Trail','Difficult','Full Day','(Year-round, except during Ramadan)','guided only','16 km','7-8 hours',' 6:30 a.m.','10-20 people','Continue along the gravel river bed of the Wadi, alongside a flowing stream, to the entrance to Wadi Ghweir. Very similar to the famous Siq in Petra, the trail leads through magnificent sceneries of different stone formations and many unique plants and trees on both sides of the river. The scenery is so breathtaking it has been known to cause visitors to forget about everything else -- including how long they have been hiking! After 3.5 hours, you will have tea and you can rest and learn more about the area from your guide. From there, continue to the Byzantine archaeology at Khirbet Feynan until you reach your final destination at Feynan Ecolodge.','Transportation to and from Al Mansoura near Shoubak area; no fear of heights');
  new TimeTrip('Ajloun Hiking Trails:Ajloun Castle Trail','Difficult','Full Day','(Year-round, except during Ramadan)','Guided only','18 km','Full Day','6:30 a.m.','4-18 people','Once you have reached Mar Elias, you have the option of continuing on this challenging trail, which takes you by small farm houses and their adjacent orchards on your way to Ajloun Castle, built between AD 1184-1188 by Salahadin nephew. In the first section of the trail you can enjoy views of the West Bank and Syria, before you descend into a wooded valley. The final difficult uphill is rewarded by the incredible Castle and the marvelous views that accompany it. The hike also includes a locally prepared picnic lunch.');
  
  new TimeTrip('RIFT VALLEY MOUNTAIN TREK:Wadi Dana Trail','Difficult','More Than One Day','(Year-round, except during Ramadan)','guided only',' 14km','5 -7 hrs','6:30 a.m.','10-20 people','Starting from the luscious highlands before winding through the rocky slopes and plains, the serenity is interrupted only by the sound of birdsong, as the scents of flowers permeate the crisp, cool air of the valley. After your 14km hike through this unique landscape, you will relax and spend the night at the dreamy, candle-lit Eco-lodge.');
  new TimeTrip('RIFT VALLEY MOUNTAIN TREK:Wadi Al Nakheel Trail','Moderate','More Than One Day','(Year-round, except during Ramadan)','guided only','18 km',' 7 - 8 hrs','6:30 a.m.','10-20 people','This trail offers an aquatic hike through small pools of water,especially refreshing during spring time. With different stone formations, this trail is reminiscent of the famous Siq of Petra “Petra canyon”. After 3 - 4 hours, you will take a relaxing tea break,whilst learning more about the spectacular surroundings from your local guide. Upon reaching the green valleys of Albustaan, you will meet your Bedouin hosts and sleep in a Bedouin tent.');
  new TimeTrip('RIFT VALLEY MOUNTAIN TREK:Al Matal Trail','Easy','More Than One Day','(Year-round, except during Ramadan)','guided only','14 km',' 5 - 6 hrs','6:30 a.m.','10-20 people','This easier hike starts from the old village of Sihan, which was inhabited by Shobaki locals up until the nineteenth century. Only ruins of the old stone houses now stand witness to a once lively community in Sihan. A high viewpoint is easily reached, rewarding you with magnificent views of Shobak’s proposed protected area. Following the Al Hazeem road you reach the Ras Al Faid area, where you spend your last night in Shobak before heading towards little Petra.');
  var productstring = JSON.stringify(newlocation);//to transfer the object to json formate (string)
  localStorage.setItem('locations', productstring);
}

function load_locations() {//to search that locations are stored in the storage, if not, call save function to generate and save locations 
  var productstring= localStorage.getItem('locations');
  if(productstring){
    newlocation = JSON.parse(productstring);
  }
  else{
    save_locations();
  }

}
load_locations();

function initiateList(){ // //Add all locations to the select options once the page is loaded
  var container = document.getElementById('LocationName');// locationName that in the form to creat all options
  if(container !== null){//If the select is not on page (in case javascript is shared between pages)
    if(newlocation.length != 0 ){
      container.removeChild( container.options[0] );// remove the defult (no avaliable place)
    }
    for(var i = 0; i < newlocation.length; i++){//creat option fo select list
      var opt = document.createElement('option');
      opt.appendChild( document.createTextNode(newlocation[i].LocationName) );
      opt.value = newlocation[i].LocationName; 
      container.appendChild(opt); 
    }
    
  }
}
initiateList();

var TripTime=document.getElementById('TimeofTrip');
var TripDif=document.getElementById('GradeofTrip');

TripTime.addEventListener("change", function() { // modify the select options depending on the selected filters

  var container = document.getElementById('LocationName');
  if(container !== null){

    container.innerHTML = "";//remove all the option before and when we change the time of trip the select liste change as we choose in time of trip

    for(var i = 0; i < newlocation.length; i++){ // iterate over all locations
      // check if the filters match the location, and display it
      if((TripTime.value == "any" || TripTime.value == newlocation[i].period) && (TripDif.value == "any" || TripDif.value == newlocation[i].Grade)){
        var opt = document.createElement('option');
        opt.appendChild( document.createTextNode(newlocation[i].LocationName) );
        opt.value = newlocation[i].LocationName; 
        container.appendChild(opt); 
      }
      
    }
    if(container.options.length == 0){ // if the select is empty, add default
      var opt = document.createElement('option');
        opt.appendChild( document.createTextNode("No Available Places") );
        opt.value ="NA"; 
        container.appendChild(opt); 
    }
    
  }
});

TripDif.addEventListener("change", function() {
  var container = document.getElementById('LocationName');
  if(container !== null){

    container.innerHTML = "";
    for(var i = 0; i < newlocation.length; i++){
      if((TripTime.value == "any" || TripTime.value == newlocation[i].period) && (TripDif.value == "any" || TripDif.value == newlocation[i].Grade)){
        var opt = document.createElement('option');
        opt.appendChild( document.createTextNode(newlocation[i].LocationName) );
        opt.value = newlocation[i].LocationName; 
        container.appendChild(opt); 
      }
      
    }
    if(container.options.length == 0){
      var opt = document.createElement('option');
        opt.appendChild( document.createTextNode("No Available Places") );
        opt.value ="NA"; 
        container.appendChild(opt); 
    }
    
  }
});


var moreInfo=document.getElementById('moreInfo');


moreInfo.addEventListener("click", function() { // when button is clicked, add the information of the location next to the form.

  var container = document.getElementById('LocationName');
  if(container !== null){
    var info =document.getElementById('info');
    info.innerHTML = "";
    if(container.value != "NA"){
       for(var i = 0; i < newlocation.length; i++){
        if(container.value ==newlocation[i].LocationName){
          
          var name = document.createElement('h1');
          name.appendChild( document.createTextNode(newlocation[i].LocationName) );
          info.appendChild(name);

          var grade = document.createElement('h3');
          grade.appendChild( document.createTextNode("Grade: "+newlocation[i].Grade) );
          info.appendChild(grade);

        var period = document.createElement('h3');
        period.appendChild(document.createTextNode("Period:  " + newlocation[i].period) );
        info.appendChild(period);

        var date = document.createElement('h3');
        date.appendChild( document.createTextNode("Date: "+newlocation[i].date) );
        info.appendChild(date);

        var type = document.createElement('h3');
        type.appendChild( document.createTextNode("Type: "+newlocation[i].type) );
        info.appendChild(type);

        var distance = document.createElement('h3');
        distance.appendChild( document.createTextNode("Distance: "+newlocation[i].distance) );
        info.appendChild(distance);

        var time = document.createElement('h3');
        time.appendChild( document.createTextNode("Time: "+newlocation[i].time) );
        info.appendChild(time);

        var startingTime = document.createElement('h3');
        startingTime.appendChild( document.createTextNode("Starting Time: "+newlocation[i].startingTime) );
        info.appendChild(startingTime);

        var size = document.createElement('h3');
        size.appendChild( document.createTextNode("Size: "+newlocation[i].size) );
        info.appendChild(size);


        var discription = document.createElement('h3');
        discription.appendChild( document.createTextNode("Discription: "+newlocation[i].discription) );
        info.appendChild(discription);


        var req = document.createElement('h3');
        req.appendChild( document.createTextNode("Requirement: "+newlocation[i].req) );
        info.appendChild(req);



        }
        
      }
    }
    else{
      var info =document.getElementById('info');
          var name = document.createElement('h1');
          name.appendChild( document.createTextNode("Please select a valid location.") );
          info.appendChild(name);
    }

   
    
  }
});

