let packages = [{
    "days": "4",
    "imageUrl": "https://www.georgeclinical.com/wp-content/uploads/2015/11/malaysia2.jpg",
    "nights": "3",
    "price": "70,000",
    "subtitle": "TRULY ASIA",
    "title": "MALAYSIA"
}, {
    "days": "2",
    "imageUrl": "http://www.varthabharati.in/sites/default/files/images/articles/2018/07/5/141416.jpg",
    "nights": "3",
    "price": "20,000",
    "subtitle": "SERENE AND RELIGIOUS FAMILY TRIP",
    "title": "VARANASI"
}, {
    "days": "5",
    "imageUrl": "https://www.dukesdubai.com/static/img/offers/data/summer-getaway-at-dukes-dubai.jpg",
    "nights": "4",
    "price": "35,000",
    "subtitle": "THE GULF TRIP",
    "title": "ABU DHABI"
}];

let packageDetails = [{
    "accommodation": "Days Hotel by Wyndham Singapore",
    "images": ["https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5230061447001_5203619434001-vs.jpg?pubId=5104226627001&videoId=5203619434001", "http://www.asia.jlt.com/-/media/images/sites/asia/about-asia/country-images/kl_bg2.ashx?h=720&la=en-GB&w=1440&hash=C48232A0DBD589D392CE1B77EB2B831BF7FAF41C", "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1024,c_fill,g_auto,h_576,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170606121243-malaysia---travel-destination---shutterstock-397085455.jpg", "https://www.oyorooms.com/blog/wp-content/uploads/2018/06/Featured-Image-Historical-Places-1.jpg"],
    "info": "Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences. The capital, Kuala Lumpur, is home to colonial buildings, busy shopping districts such as Bukit Bintang and skyscrapers such as the iconic, 451m-tall Petronas Twin Towers.",
    "itinerary": ["Explore the Urban Delights and Food in Kuala Lumpur", "Soak in Malaysian Culture", "Explore the Historical Sights", "Sightseeing in Singapore", "Discover the Hidden Gems of Singapore"]
}, {
    "accommodation": "The Taj Residency",
    "images": ["https://images.thrillophilia.com/image/upload/s--KEt-lGbS--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/013/322/original/1527582699_things_to_do_in_Varanasi_Main.jpg.jpg?1527582699", "https://s27363.pcdn.co/wp-content/uploads/2017/01/Sunrise-Boat-Tour-in-Varanasi.jpg.optimal.jpg", "https://cdn1.goibibo.com/t_tg_fs/uttar-pradesh-varanasi-148915950084-orijgp.jpg", "https://image3.mouthshut.com/images/imagesp/925003680s.jpg"],
    "info": "Varanasi is a city in the northern Indian state of Uttar Pradesh dating to the 11th century B.C. Regarded as the spiritual capital of India, the city draws Hindu pilgrims who bathe in the Ganges River’s sacred waters and perform funeral rites. Along the city's winding streets are some 2,000 temples, including Kashi Vishwanath, the “Golden Temple,” dedicated to the Hindu god Shiva.",
    "itinerary": ["Maha Aarti by the holy Ganga", "Morning Boat Ride"]
}, {
    "accommodation": "Grand Hyatt Abu Dhabi",
    "images": ["https://www.arabianbusiness.com/sites/default/files/styles/full_img/public/images/2017/09/12/abu_dhabi_skyline.jpg", "https://s1.it.atcdn.net/wp-content/uploads/2013/03/Ferrari-world-Abu-Dhabi.jpg", "https://www.europcar-abudhabi.com/uploads/1202/grand-mosque-f5929199.jpg", "https://images.memphistours.com/large/651148590_Sheikh%20Zayed%20Mosque.jpg"],
    "info": "Abu Dhabi, the capital of the United Arab Emirates, sits off the mainland on an island in the Persian (Arabian) Gulf. Its focus on oil exports and commerce is reflected by the skyline’s modern towers and shopping megacenters such as Abu Dhabi and Marina malls. Beneath white-marble domes, the vast Sheikh Zayed Grand Mosque features an immense Persian carpet, crystal chandeliers and capacity for 41,000 worshipers.",
    "itinerary": ["Abu Dhabi city tour with BigBus Tours", "Sheikh Zayed Grand Mosque", "Galleria & Rosewood", "Abu Dhabi Corniche & Dhow Cruise"]
}]



function makeRequest(sendUrl, item) {
    $.ajax({
        url: "http://192.168.43.115:2018/packages",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(package),
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        success: data => {
            alert("Success");
        },
        error: (xhr, status, err) => {
            console.log(xhr);
            console.log(err);
            alert(xhr + " ::: " + status + " ::: " + err);
            return false;
        }
    });
}

function addPackage() {
    let stringified = JSON.stringify(package);
    console.log(stringified);
    $.ajax({
        url: "http://192.168.43.115:2018/packages",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        data: JSON.stringify(package),
        success: (data) => {
            console.log(data);
            alert("Successfully added package");
            addPackageItineraries(data.id, itin, images);
        },
        error: (xhr, status, err) => {
            alert(xhr + " ::: " + status + " ::: " + err);
            console.log(xhr);
            console.log(xhr + " ::: " + status + " ::: " + err);
            return false;
        }
    });
    return false;
}

function addPackageItineraries(packageId, itinerary, images) {
    console.log(itinerary);
    $.ajax({
        url: "http://192.168.43.115:2018/package/" + packageId + "/itineraryArray",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Authorization'
        },
        data: JSON.stringify(itinerary),
        success: (data) => {
            console.log(data);
            alert("Successfully added itineraries");
            addPackageImages(packageId, images);
        },
        error: (xhr, status, err) => {
            alert(xhr + " ::: " + status + " ::: " + err);
            return false;
        }
    });
}

function addPackageImages(packageId, images) {
    console.log(images);
    console.log(JSON.stringify(images));
    $.ajax({
        url: "http://192.168.43.115:2018/package/" + packageId + "/imageArray",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(images),
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        success: (data) => {
            console.log(data);
            alert("Successfully added images");
        },
        error: (xhr, status, err) => {
            alert(xhr + " ::: " + status + " ::: " + err);
            console.log(xhr + " ::: " + status + " ::: " + err);
            return false;
        }
    });
}