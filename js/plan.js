'use strict';

var packagedLocations = [];// this array to save the proparty and vlaue
var foodType = ['Breakfast Dish', 'Summer Dish', 'Winter Dish'];
var equipmentType = ['uniform', 'uniform & guiding tools', 'uniform, guiding tools, and first-aid kit'];
function PackageTrip(LocationName, routes, Grade, period, date, type, distance, time, startingTime, size, discription, food) {
    this.LocationName = LocationName;
    this.routes = routes;
    this.Grade = Grade;
    this.period = period;
    this.date = date;
    this.type = type;
    this.distance = distance;
    this.time = time;
    this.startingTime = startingTime;
    this.size = size;
    this.discription = discription;
    this.food = food;

    packagedLocations.push(this);
    return this;
}

function createPackagedTrips() {//this function creat the location and save them in local storage.
    new PackageTrip('Dana Hiking Trails', 'From Rummana Campsite:Campsite Trail', 'Easy', 'up to 2 hours', "(March 15 – October 31)", "guided or self-guided", "1.5 km", "1 hour", "8:00 a.m. – 3:00 p.m. from the Rummana Campsite", "4-20 people", "This circular walk around the Rummana campsite is a great place to see birds, especially during migration seasons. The scenic viewpoints along the trail offer picturesque views of the Dana Mountains", 'food1');
    new PackageTrip('Dana Hiking Trails', 'From Rummana Campsite: Rummana Mountain Trail', 'Moderate', 'up to 2 hours', '(March 15 – October 31)', 'guided or self-guided', '2.5 km', '2 hours', '8:00 a.m. – 3:00 p.m. from the Rummana Campsite', '4-20 people', 'This circular trail starts from the campsite and ascends to the top to Rummana Mountain, where the views of Wadi Araba are breathtaking. Highlights on the trail include magnificent sandstone and limestone formations, birds of prey, and beautiful views of the nature reserve.');
    new PackageTrip('Azraq Hiking Trail', 'Marsh Trail', 'Easy', 'up to 2 hours', '(Year-round)', ' guided or self-guided', '1.5 km', '30 minutes', ' 9:00 a.m. to 4:00 p.m. (winter); 9:00 a.m. to 6:00 p.m. (summer)', '4-20 people', 'This easy walking trail gives you an excellent introduction to the Azraq Wetland Reserve. The boardwalk leads you through dry and wet areas to a viewing platform overlooking the artesian pools that once released millions of cubic meters of water into the marshland. After leaving the platform, the trail takes you over an ancient black basalt wall, most likely constructed by an Umayyad Caliph. The trail then leads to a bird hide made of local mud brick where you can observe the migratory birds and perhaps catch a glimpse of the water buffalo. Follow the trail back to the Visitor Center, passing yet another part of the ancient basalt wall.');

    new PackageTrip('Dana Hiking Trails', 'From Dana Guesthouse: White Dome Trail', 'Moderate', 'up to 3-4 hours', '(March 15 – October 31, except during Ramadan)', 'guided only', '8 km', '3-4 hours', ' from either the Rummana Campsite or the Dana Guesthouse', '4-20 people', 'This trail contours the huge escarpments of Wadi Dana between the Rummana campsite and Dana Village. Passing through the terraced gardens of the village, the trail offers breathtaking views of the canyon-like Wadi. If desired, the trail can be done in reverse, from Dana Guesthouse to the Rummana campsite');
    new PackageTrip('Ajloun Hiking Trails', 'The Prophet’s Trail', 'Moderate', 'up to 3-4 hours', '(Year-round, except during Ramadan)', 'Guided only', '8.5 km', '4 hours', '8:30 a.m.', '4-18 people', ' This hike takes you from Ajloun Forest Reserve Visitor Center to Mar Elias, the ruins of one of Jordan oldest churches. It is named for the Prophet Elias, or Elijah, to whom Mar Elias is dedicated. The trail leads through fig and pear orchards, amongst forests of oak and oriental strawberry trees. The stone walls that crisscross the valley guard the farmers crops inside from both the winter rains and wild boar. Relax in the shade with a glass of tea before climbing to the hilltop ruins, which provide sweeping views of the surrounding area. The hike also includes a locally prepared picnic lunch near the ruins.');
    new PackageTrip('Mujib Hiking Trails', 'Ibex Trail', 'Difficult', 'up to 3-4 hours', '(November 1 –March 31)', 'Guided only', '9 km', '4 hours', '8:30 a.m.', ' 6-25 people', ' The trail begins at the Visitor Center and follows the Dead Sea Highway before ascending into the Reserve. Diverging to the south, the trail runs parallel to the Dead Sea, which provides a startlingly blue backdrop for the entire hike. The hike then continues along a number of dry wadis to the Raddas Ranger Station, where you may see Nubian Ibex. It is also where the famous rock “statue” of Lot’s wife can be seen. After resting at the Station, the trail continues along a road for about one hour until reaching the Reserve entrance near the Visitor Center');

    new PackageTrip('Dana Hiking Trails', 'Wadi Dana Trail', 'Moderate', 'up to 6 hours', '(Year-round, except during Ramadan)', ' guided or self-guided', '14 km', '6-7 hours', '8:00 a.m. from Dana Guesthouse', '10-20 people', ' Passing through sandstone gorges, this trail leads downhill to Feynan, where visitors can arrange for return transportation or stay overnight in the Feynan Ecolodge. Alternatively, visitors can begin this trail at Feynan Ecolodge and travel to the Dana Guesthouse or Rummana Campsite.');
    new PackageTrip('Ajloun Hiking Trails', 'Orjan Village Tour', 'Moderate', 'up to 6 hours', '(Year-round, except during Ramadan)', 'Guided only', '12 km', '6 hours', '8:00 a.m.', ' 4-18 people', ' Continuing from the Soap House, this tour takes you through wooded valleys to the lush green orchards of Orjan village, giving you the chance to discover the rural lifestyle of the region. A poplar-lined spring provides a wonderful contrast to the arid mountains of the previous stages of the trail. As you hike, note the dramatic rock walls, old water mills once used by local people to grind their seeds and the hollow walnut tree. Enjoy a delicious traditional meal in an orchard of fig, pomegranate, apple and apricot trees.');
    new PackageTrip('Dana Hiking Trails', 'From Dana Guesthouse: Shaq al Reesh Trail', 'Difficult', 'up to 6 hours', '(Year-round, except during Ramadan)', 'guided only', '8 km', ' 4 hours', '8:00 a.m.', '4-20 people', 'This circular trail traverses from Al-Barrah, through a breathtaking siq, and to Shaq al Reesh.', 'Transportation to and from al-Barra area; no fear of heights');


    new PackageTrip('Dana Hiking Trails', 'Wadi Dathneh Trail', 'Difficult', 'Full Day', '(Year-round, except during Ramadan)', 'guided only', '19 km', ' 8-10 hours', '6:30 a.m.', '10-20 people', ' Perfect for adventure lovers who have no fear of heights, this trail descends through Wadi Dathneh, past an oasis, and through Wadi al Hamra to the Feynan area', 'Transportation to and from the Nawatef area; high level of fitness; no fear of heights.');
    new PackageTrip('Dana Hiking Trails', 'Wadi Ghwair Trail', 'Difficult', 'Full Day', '(Year-round, except during Ramadan)', 'guided only', '16 km', '7-8 hours', ' 6:30 a.m.', '10-20 people', 'Continue along the gravel river bed of the Wadi, alongside a flowing stream, to the entrance to Wadi Ghweir. Very similar to the famous Siq in Petra, the trail leads through magnificent sceneries of different stone formations and many unique plants and trees on both sides of the river. The scenery is so breathtaking it has been known to cause visitors to forget about everything else -- including how long they have been hiking! After 3.5 hours, you will have tea and you can rest and learn more about the area from your guide. From there, continue to the Byzantine archaeology at Khirbet Feynan until you reach your final destination at Feynan Ecolodge.', 'Transportation to and from Al Mansoura near Shoubak area; no fear of heights');
    new PackageTrip('Ajloun Hiking Trails', 'Ajloun Castle Trail', 'Difficult', 'Full Day', '(Year-round, except during Ramadan)', 'Guided only', '18 km', 'Full Day', '6:30 a.m.', '4-18 people', 'Once you have reached Mar Elias, you have the option of continuing on this challenging trail, which takes you by small farm houses and their adjacent orchards on your way to Ajloun Castle, built between AD 1184-1188 by Salahadin nephew. In the first section of the trail you can enjoy views of the West Bank and Syria, before you descend into a wooded valley. The final difficult uphill is rewarded by the incredible Castle and the marvelous views that accompany it. The hike also includes a locally prepared picnic lunch.');

    new PackageTrip('Rift Valley Mountain', 'Wadi Dana Trail', 'Difficult', 'More Than One Day', '(Year-round, except during Ramadan)', 'guided only', ' 14km', '5 -7 hrs', '6:30 a.m.', '10-20 people', 'Starting from the luscious highlands before winding through the rocky slopes and plains, the serenity is interrupted only by the sound of birdsong, as the scents of flowers permeate the crisp, cool air of the valley. After your 14km hike through this unique landscape, you will relax and spend the night at the dreamy, candle-lit Eco-lodge.');
    new PackageTrip('Rift Valley Mountain', 'Wadi Al Nakheel Trail', 'Moderate', 'More Than One Day', '(Year-round, except during Ramadan)', 'guided only', '18 km', ' 7 - 8 hrs', '6:30 a.m.', '10-20 people', 'This trail offers an aquatic hike through small pools of water,especially refreshing during spring time. With different stone formations, this trail is reminiscent of the famous Siq of Petra “Petra canyon”. After 3 - 4 hours, you will take a relaxing tea break,whilst learning more about the spectacular surroundings from your local guide. Upon reaching the green valleys of Albustaan, you will meet your Bedouin hosts and sleep in a Bedouin tent.');
    new PackageTrip('Rift Valley Mountain', 'Al Matal Trail', 'Easy', 'More Than One Day', '(Year-round, except during Ramadan)', 'guided only', '14 km', ' 5 - 6 hrs', '6:30 a.m.', '10-20 people', 'This easier hike starts from the old village of Sihan, which was inhabited by Shobaki locals up until the nineteenth century. Only ruins of the old stone houses now stand witness to a once lively community in Sihan. A high viewpoint is easily reached, rewarding you with magnificent views of Shobak’s proposed protected area. Following the Al Hazeem road you reach the Ras Al Faid area, where you spend your last night in Shobak before heading towards little Petra.');

    var packagedLocationsString = JSON.stringify(packagedLocations);//to transfer the object to json formate (string)
    localStorage.setItem('packagedLocations', packagedLocationsString);
}

function loadPackegedTrips() {//to search that locations are stored in the storage, if not, call save function to generate and save locations 
    var packagedLocationsString = localStorage.getItem('packagedLocations');
    if (packagedLocationsString) {
        packagedLocations = JSON.parse(packagedLocationsString);
    }
    else {
        createPackagedTrips();
    }

}
loadPackegedTrips();



var tripDestination = document.getElementById('destination');

tripDestination.addEventListener("change", function () { // modify the select options depending on the selected filters

    var containerElement = document.getElementById('routes');
    if (containerElement !== null) {

        containerElement.innerHTML = "";//remove all the option before and when we change the time of trip the select liste change as we choose in time of trip

        for (var i = 0; i < packagedLocations.length; i++) { // iterate over all locations
            // check if the filters match the location, and display it
            if (tripDestination.value == packagedLocations[i].LocationName) {
                var optEl = document.createElement('option');
                optEl.appendChild(document.createTextNode(packagedLocations[i].routes));
                optEl.value = packagedLocations[i].routes;
                containerElement.appendChild(optEl);
            }

        }
        if (containerElement.options.length == 0) { // if the select is empty, add default
            var optEl = document.createElement('option');
            optEl.appendChild(document.createTextNode("No Available Places"));
            optEl.value = "NA";
            containerElement.appendChild(optEl);
        }

    }
});

var tripFood = document.getElementById('food');

tripFood.addEventListener("change", function () { // modify the select options depending on the selected filters


    var containerElement = document.getElementById('foodtype');
    if (containerElement !== null) {

        containerElement.innerHTML = "";//remove all the option before and when we change the time of trip the select liste change as we choose in time of trip

        if (tripFood.value === 'yes') {

            for (var i = 0; i < foodType.length; i++) {
                var optEl = document.createElement('option');
                optEl.appendChild(document.createTextNode(foodType[i]));
                optEl.value = foodType[i];
                containerElement.appendChild(optEl);
                var optEl = document.getElementById('foodtype');
                optEl.style.display = 'inline-block';
                var optEl2 = document.getElementById('label');
                optEl2.style.display = 'inline-block';
            }

        }
        else {
            var optEl = document.getElementById('foodtype');
            optEl.style.display = 'none';
            var optEl2 = document.getElementById('label');
            optEl2.style.display = 'none';
        }

        if (containerElement.options.length == 0) { // if the select is empty, add default
            var optEl = document.createElement('option');
            optEl.appendChild(document.createTextNode("No Available Places"));
            optEl.value = "NA";
            containerElement.appendChild(optEl);

        }

    }
});

var tripEquipment = document.getElementById('equipment');

tripEquipment.addEventListener("change", function () { // modify the select options depending on the selected filters


    var containerElement = document.getElementById('equipmenttype');
    if (containerElement !== null) {

        containerElement.innerHTML = "";//remove all the option before and when we change the time of trip the select liste change as we choose in time of trip

        if (tripEquipment.value === 'yes') {

            for (var i = 0; i < equipmentType.length; i++) {
                var optEl = document.createElement('option');
                optEl.appendChild(document.createTextNode(equipmentType[i]));
                optEl.value = equipmentType[i];
                containerElement.appendChild(optEl);
                var optEl = document.getElementById('equipmenttype');
                optEl.style.display = 'inline-block';
                var optEl2 = document.getElementById('label2');
                optEl2.style.display = 'inline-block';
            }

        }
        else {
            var optEl = document.getElementById('equipmenttype');
            optEl.style.display = 'none';
            var optEl2 = document.getElementById('label2');
            optEl2.style.display = 'none';
        }

        if (containerElement.options.length == 0) { // if the select is empty, add default
            var optEl = document.createElement('option');
            optEl.appendChild(document.createTextNode("No Available Places"));
            optEl.value = "NA";
            containerElement.appendChild(optEl);

        }

    }
});

var loadplanLocations = [];


if (!localStorage.getItem('planTrip')) {
    console.log('hi');

}
else {
    loadPlanTrip();
    var check = document.getElementById('render');
    // if (check){
    //     check.innerHTML = '';
    //     renderPlan();
    // }
    // else{
    //     renderPlan();
    // }
}


var newplanLocations = [];
var formValues = document.getElementById('createPlan');
formValues.addEventListener('submit', function (event) {

    event.preventDefault();
    console.log(event.target.elements[0].elements[0].value);
    var locationName = event.target.elements[0].elements[0].value;
    var period = event.target.elements[0].elements[1].value;
    var route = event.target.elements[0].elements[2].value;
    var transportation = event.target.elements[0].elements[3].value;
    var food = event.target.elements[0].elements[4].value;
    var foodType = event.target.elements[0].elements[5].value;
    var equipment = event.target.elements[0].elements[6].value;
    var equipmentType = event.target.elements[0].elements[7].value;

    new PlanTrip(locationName, period, route, transportation, food, foodType, equipment, equipmentType);

    var planTripString = JSON.stringify(newplanLocations);
    localStorage.setItem('planTrip', planTripString);

    loadPlanTrip();

    var check = document.getElementById('render');
    if (check){
        check.innerHTML = '';
        renderPlan();
    }
    else{
        renderPlan();
    }
    
});


function PlanTrip(locationName, period, route, transportation, food, foodType, equipment, equipmentType) {

    this.locationName = locationName;
    this.period = period;
    this.route = route;
    this.grade;
    this.discription;
    this.transportation = transportation;
    this.food = food;
    this.foodType = foodType;
    this.equipment = equipment;
    this.equipmentType = equipmentType;
    for (var i = 0; i < packagedLocations.length; i++) {
        if (this.route === packagedLocations[i].routes) {

            this.distance = packagedLocations[i].distance;
            this.discription = packagedLocations[i].discription;
            this.size = packagedLocations[i].size;
            this.grade = packagedLocations[i].Grade;

        }
    }
    newplanLocations.push(this);
}

function loadPlanTrip() {//to search that locations are stored in the storage, if not, call save function to generate and save locations 

    var planTripString = localStorage.getItem('planTrip');
    loadplanLocations = JSON.parse(planTripString);

}


var canvas
function renderPlan() {
    // for (var i = 0; i < planLocations.length; i++){
    canvas = document.getElementById('render');
    var h2El = document.createElement('h2')
    h2El.textContent = `Your ${loadplanLocations[loadplanLocations.length -1].locationName} trip details:`;
    canvas.appendChild(h2El);

    var h5El = document.createElement('h5');
    h5El.textContent = `Chosen route:  your trip will be ${loadplanLocations[loadplanLocations.length -1].distance} starting at ${loadplanLocations[loadplanLocations.length -1].locationName} and finished at ${loadplanLocations[loadplanLocations.length -1].route}`
    canvas.appendChild(h5El);


    var h5El = document.createElement('h5');
    h5El.textContent = `The grade of your trip is ${loadplanLocations[loadplanLocations.length -1].grade}`
    canvas.appendChild(h5El);

    var h6El = document.createElement('h6');
    h6El.textContent = `${loadplanLocations[loadplanLocations.length -1].discription}`
    canvas.appendChild(h6El);

    if (loadplanLocations[loadplanLocations.length -1].food === 'yes') {
        var h6El = document.createElement('h6');
        h6El.textContent = `We will be providing you with our fine meals of the ${loadplanLocations[loadplanLocations.length -1].foodType} to enjoy through the hike and to keep you at full energy`
        canvas.appendChild(h6El);
    }

    else{
        var h6El = document.createElement('h6');
        h6El.textContent = `Please make sure to bring some food that enjoy with you, so you are always having the energy to keep going forward`
        canvas.appendChild(h6El);
    }


    if (loadplanLocations[0].equipment === 'yes') {
        var h6El = document.createElement('h6');
        h6El.textContent = `We will be providing you with our high quality ${loadplanLocations[loadplanLocations.length -1].equipmentType} to help you on getting over the challenges of the hike with ease`
        canvas.appendChild(h6El);
    }

    else{
        var h6El = document.createElement('h6');
        h6El.textContent = `Please make sure to bring proper equipment to help you through the hike as the terrain of these hikes could be rough some times`
        canvas.appendChild(h6El);
    }

    if (loadplanLocations[0].transportation === 'yes') {
        var h6El = document.createElement('h6');
        h6El.textContent = `Make sure to arrive at the 7th circle which will be our gathering point for all adventureres, and when time comes we will be leaving in our high quality buses towards ${loadplanLocations[loadplanLocations.length -1].locationName}`
        canvas.appendChild(h6El);
    }

    else{
        var h6El = document.createElement('h6');
        h6El.textContent = `Please make sure to be at ${loadplanLocations[loadplanLocations.length -1].locationName} as early as possible so we start moving togother`
        canvas.appendChild(h6El);
    }



}

var x = document.getElementById("container1");
var y = document.getElementById("section-left");
var z = document.getElementById('right')

function myFunction() {
    if (x.style.display === "none") {
      x.style.display = "block";
      z.style.display = 'block';
      y.style.display = "none";
    } else {
      x.style.display = "none";
      z.style.display = 'none';
      y.style.display = "none";
    }
  }

  function myFunction2() {
    if (y.style.display === "none") {
      y.style.display = "block";
      x.style.display = "none";
      z.style.display = 'none';

    } else {
      y.style.display = "none";
      x.style.display = "none";
      z.style.display = 'none';

    }
  }
