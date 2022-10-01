const d = new Date();

let all_data= null;
let common_headlines = [];
let clicked = true;
fetch('headlines.txt')
  .then(response => response.text())
  .then(data => {
    all_data = data.split('\n')
  });


function program(){
  if (clicked){
    var elem = document.getElementById('startbutton');
    elem.parentNode.removeChild(elem);
    clicked = false;
  }
  
  document.getElementById("header").innerHTML = "TODAY'S HEADLINES - " + d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear();
  if (all_data==null){
    alert("all_data not ready")
    return
  }
  us_headlines = all_data.slice(0, 15)
  us_urls = all_data.slice(16,30)
  us_keywords = all_data.slice(31,45)
  uk_headlines = all_data.slice(46, 60)
  uk_urls = all_data.slice(61,75)
  uk_keywords = all_data.slice(76,90)
  france_headlines = all_data.slice(91, 105)
  france_urls = all_data.slice(106,120)
  france_keywords = all_data.slice(121,135)
  germany_headlines = all_data.slice(136, 150)
  germany_urls = all_data.slice(151,165)
  germany_keywords = all_data.slice(166,180)
  russia_headlines = all_data.slice(181, 195)
  russia_urls = all_data.slice(196,210)
  russia_keywords = all_data.slice(211,225)
  saudi_headlines = all_data.slice(226, 240)
  saudi_urls = all_data.slice(241,255)
  saudi_keywords = all_data.slice(256,270)
  india_headlines = all_data.slice(271, 285)
  india_urls = all_data.slice(286,300)
  india_keywords = all_data.slice(301,315)
  china_headlines = all_data.slice(316, 330)
  china_urls = all_data.slice(331,345)
  china_keywords = all_data.slice(346,360)
  brazil_headlines = all_data.slice(361, 375)
  brazil_urls = all_data.slice(376,390)
  brazil_keywords = all_data.slice(391,405)
  southafrica_headlines = all_data.slice(406, 420)
  southafrica_urls = all_data.slice(421,435)
  southafrica_keywords = all_data.slice(436,450)
  japan_headlines = all_data.slice(451, 465)
  japan_urls = all_data.slice(466,480)
  japan_keywords = all_data.slice(481,495)
  austrailia_headlines = all_data.slice(496, 510)
  austrailia_urls = all_data.slice(511,525)
  austrailia_keywords = all_data.slice(526,540)
  nigeria_headlines = all_data.slice(541, 555)
  nigeria_urls = all_data.slice(556,570)
  nigeria_keywords = all_data.slice(571,585)
  mexico_headlines = all_data.slice(586, 600)
  mexico_urls = all_data.slice(601,615)
  mexico_keywords = all_data.slice(616,630)
  singapore_headlines = all_data.slice(631, 645)
  singapore_urls = all_data.slice(646,660)
  singapore_keywords = all_data.slice(661,675)
  

  document.getElementById("us_headline0").innerHTML = us_headlines[0];
  document.getElementById("us_headline1").innerHTML = us_headlines[1];
  document.getElementById("us_headline2").innerHTML = us_headlines[2];
  document.getElementById("us_headline3").innerHTML = us_headlines[3];
  document.getElementById("us_headline4").innerHTML = us_headlines[4];
  document.getElementById("us_headline5").innerHTML = us_headlines[5];
  document.getElementById("us_headline6").innerHTML = us_headlines[6];
  document.getElementById("us_headline7").innerHTML = us_headlines[7];
  document.getElementById("us_headline8").innerHTML = us_headlines[8];
  document.getElementById("us_headline9").innerHTML = us_headlines[9];
  document.getElementById("us_headline10").innerHTML = us_headlines[10];
  document.getElementById("us_headline11").innerHTML = us_headlines[11];
  document.getElementById("us_headline12").innerHTML = us_headlines[12];
  document.getElementById("us_headline13").innerHTML = us_headlines[13];
  document.getElementById("us_headline14").innerHTML = us_headlines[14];
  document.getElementById("uk_headline0").innerHTML = uk_headlines[0];
  document.getElementById("uk_headline1").innerHTML = uk_headlines[1];
  document.getElementById("uk_headline2").innerHTML = uk_headlines[2];
  document.getElementById("uk_headline3").innerHTML = uk_headlines[3];
  document.getElementById("uk_headline4").innerHTML = uk_headlines[4];
  document.getElementById("uk_headline5").innerHTML = uk_headlines[5];
  document.getElementById("uk_headline6").innerHTML = uk_headlines[6];
  document.getElementById("uk_headline7").innerHTML = uk_headlines[7];
  document.getElementById("uk_headline8").innerHTML = uk_headlines[8];
  document.getElementById("uk_headline9").innerHTML = uk_headlines[9];
  document.getElementById("uk_headline10").innerHTML = uk_headlines[10];
  document.getElementById("uk_headline11").innerHTML = uk_headlines[11];
  document.getElementById("uk_headline12").innerHTML = uk_headlines[12];
  document.getElementById("uk_headline13").innerHTML = uk_headlines[13];
  document.getElementById("uk_headline14").innerHTML = uk_headlines[14];
  document.getElementById("france_headline0").innerHTML = france_headlines[0];
  document.getElementById("france_headline1").innerHTML = france_headlines[1];
  document.getElementById("france_headline2").innerHTML = france_headlines[2];
  document.getElementById("france_headline3").innerHTML = france_headlines[3];
  document.getElementById("france_headline4").innerHTML = france_headlines[4];
  document.getElementById("france_headline5").innerHTML = france_headlines[5];
  document.getElementById("france_headline6").innerHTML = france_headlines[6];
  document.getElementById("france_headline7").innerHTML = france_headlines[7];
  document.getElementById("france_headline8").innerHTML = france_headlines[8];
  document.getElementById("france_headline9").innerHTML = france_headlines[9];
  document.getElementById("france_headline10").innerHTML = france_headlines[10];
  document.getElementById("france_headline11").innerHTML = france_headlines[11];
  document.getElementById("france_headline12").innerHTML = france_headlines[12];
  document.getElementById("france_headline13").innerHTML = france_headlines[13];
  document.getElementById("france_headline14").innerHTML = france_headlines[14];
  document.getElementById("germany_headline0").innerHTML = germany_headlines[0];
  document.getElementById("germany_headline1").innerHTML = germany_headlines[1];
  document.getElementById("germany_headline2").innerHTML = germany_headlines[2];
  document.getElementById("germany_headline3").innerHTML = germany_headlines[3];
  document.getElementById("germany_headline4").innerHTML = germany_headlines[4];
  document.getElementById("germany_headline5").innerHTML = germany_headlines[5];
  document.getElementById("germany_headline6").innerHTML = germany_headlines[6];
  document.getElementById("germany_headline7").innerHTML = germany_headlines[7];
  document.getElementById("germany_headline8").innerHTML = germany_headlines[8];
  document.getElementById("germany_headline9").innerHTML = germany_headlines[9];
  document.getElementById("germany_headline10").innerHTML = germany_headlines[10];
  document.getElementById("germany_headline11").innerHTML = germany_headlines[11];
  document.getElementById("germany_headline12").innerHTML = germany_headlines[12];
  document.getElementById("germany_headline13").innerHTML = germany_headlines[13];
  document.getElementById("germany_headline14").innerHTML = germany_headlines[14];
  document.getElementById("russia_headline0").innerHTML = russia_headlines[0];
  document.getElementById("russia_headline1").innerHTML = russia_headlines[1];
  document.getElementById("russia_headline2").innerHTML = russia_headlines[2];
  document.getElementById("russia_headline3").innerHTML = russia_headlines[3];
  document.getElementById("russia_headline4").innerHTML = russia_headlines[4];
  document.getElementById("russia_headline5").innerHTML = russia_headlines[5];
  document.getElementById("russia_headline6").innerHTML = russia_headlines[6];
  document.getElementById("russia_headline7").innerHTML = russia_headlines[7];
  document.getElementById("russia_headline8").innerHTML = russia_headlines[8];
  document.getElementById("russia_headline9").innerHTML = russia_headlines[9];
  document.getElementById("russia_headline10").innerHTML = russia_headlines[10];
  document.getElementById("russia_headline11").innerHTML = russia_headlines[11];
  document.getElementById("russia_headline12").innerHTML = russia_headlines[12];
  document.getElementById("russia_headline13").innerHTML = russia_headlines[13];
  document.getElementById("russia_headline14").innerHTML = russia_headlines[14];
  document.getElementById("saudi_headline0").innerHTML = saudi_headlines[0];
  document.getElementById("saudi_headline1").innerHTML = saudi_headlines[1];
  document.getElementById("saudi_headline2").innerHTML = saudi_headlines[2];
  document.getElementById("saudi_headline3").innerHTML = saudi_headlines[3];
  document.getElementById("saudi_headline4").innerHTML = saudi_headlines[4];
  document.getElementById("saudi_headline5").innerHTML = saudi_headlines[5];
  document.getElementById("saudi_headline6").innerHTML = saudi_headlines[6];
  document.getElementById("saudi_headline7").innerHTML = saudi_headlines[7];
  document.getElementById("saudi_headline8").innerHTML = saudi_headlines[8];
  document.getElementById("saudi_headline9").innerHTML = saudi_headlines[9];
  document.getElementById("saudi_headline10").innerHTML = saudi_headlines[10];
  document.getElementById("saudi_headline11").innerHTML = saudi_headlines[11];
  document.getElementById("saudi_headline12").innerHTML = saudi_headlines[12];
  document.getElementById("saudi_headline13").innerHTML = saudi_headlines[13];
  document.getElementById("saudi_headline14").innerHTML = saudi_headlines[14];
  document.getElementById("india_headline0").innerHTML = india_headlines[0];
  document.getElementById("india_headline1").innerHTML = india_headlines[1];
  document.getElementById("india_headline2").innerHTML = india_headlines[2];
  document.getElementById("india_headline3").innerHTML = india_headlines[3];
  document.getElementById("india_headline4").innerHTML = india_headlines[4];
  document.getElementById("india_headline5").innerHTML = india_headlines[5];
  document.getElementById("india_headline6").innerHTML = india_headlines[6];
  document.getElementById("india_headline7").innerHTML = india_headlines[7];
  document.getElementById("india_headline8").innerHTML = india_headlines[8];
  document.getElementById("india_headline9").innerHTML = india_headlines[9];
  document.getElementById("india_headline10").innerHTML = india_headlines[10];
  document.getElementById("india_headline11").innerHTML = india_headlines[11];
  document.getElementById("india_headline12").innerHTML = india_headlines[12];
  document.getElementById("india_headline13").innerHTML = india_headlines[13];
  document.getElementById("india_headline14").innerHTML = india_headlines[14];
  document.getElementById("china_headline0").innerHTML = china_headlines[0];
  document.getElementById("china_headline1").innerHTML = china_headlines[1];
  document.getElementById("china_headline2").innerHTML = china_headlines[2];
  document.getElementById("china_headline3").innerHTML = china_headlines[3];
  document.getElementById("china_headline4").innerHTML = china_headlines[4];
  document.getElementById("china_headline5").innerHTML = china_headlines[5];
  document.getElementById("china_headline6").innerHTML = china_headlines[6];
  document.getElementById("china_headline7").innerHTML = china_headlines[7];
  document.getElementById("china_headline8").innerHTML = china_headlines[8];
  document.getElementById("china_headline9").innerHTML = china_headlines[9];
  document.getElementById("china_headline10").innerHTML = china_headlines[10];
  document.getElementById("china_headline11").innerHTML = china_headlines[11];
  document.getElementById("china_headline12").innerHTML = china_headlines[12];
  document.getElementById("china_headline13").innerHTML = china_headlines[13];
  document.getElementById("china_headline14").innerHTML = china_headlines[14];
  document.getElementById("brazil_headline0").innerHTML = brazil_headlines[0];
  document.getElementById("brazil_headline1").innerHTML = brazil_headlines[1];
  document.getElementById("brazil_headline2").innerHTML = brazil_headlines[2];
  document.getElementById("brazil_headline3").innerHTML = brazil_headlines[3];
  document.getElementById("brazil_headline4").innerHTML = brazil_headlines[4];
  document.getElementById("brazil_headline5").innerHTML = brazil_headlines[5];
  document.getElementById("brazil_headline6").innerHTML = brazil_headlines[6];
  document.getElementById("brazil_headline7").innerHTML = brazil_headlines[7];
  document.getElementById("brazil_headline8").innerHTML = brazil_headlines[8];
  document.getElementById("brazil_headline9").innerHTML = brazil_headlines[9];
  document.getElementById("brazil_headline10").innerHTML = brazil_headlines[10];
  document.getElementById("brazil_headline11").innerHTML = brazil_headlines[11];
  document.getElementById("brazil_headline12").innerHTML = brazil_headlines[12];
  document.getElementById("brazil_headline13").innerHTML = brazil_headlines[13];
  document.getElementById("brazil_headline14").innerHTML = brazil_headlines[14];
  document.getElementById("southafrica_headline0").innerHTML = southafrica_headlines[0];
  document.getElementById("southafrica_headline1").innerHTML = southafrica_headlines[1];
  document.getElementById("southafrica_headline2").innerHTML = southafrica_headlines[2];
  document.getElementById("southafrica_headline3").innerHTML = southafrica_headlines[3];
  document.getElementById("southafrica_headline4").innerHTML = southafrica_headlines[4];
  document.getElementById("southafrica_headline5").innerHTML = southafrica_headlines[5];
  document.getElementById("southafrica_headline6").innerHTML = southafrica_headlines[6];
  document.getElementById("southafrica_headline7").innerHTML = southafrica_headlines[7];
  document.getElementById("southafrica_headline8").innerHTML = southafrica_headlines[8];
  document.getElementById("southafrica_headline9").innerHTML = southafrica_headlines[9];
  document.getElementById("southafrica_headline10").innerHTML = southafrica_headlines[10];
  document.getElementById("southafrica_headline11").innerHTML = southafrica_headlines[11];
  document.getElementById("southafrica_headline12").innerHTML = southafrica_headlines[12];
  document.getElementById("southafrica_headline13").innerHTML = southafrica_headlines[13];
  document.getElementById("southafrica_headline14").innerHTML = southafrica_headlines[14];
  document.getElementById("japan_headline0").innerHTML = japan_headlines[0];
  document.getElementById("japan_headline1").innerHTML = japan_headlines[1];
  document.getElementById("japan_headline2").innerHTML = japan_headlines[2];
  document.getElementById("japan_headline3").innerHTML = japan_headlines[3];
  document.getElementById("japan_headline4").innerHTML = japan_headlines[4];
  document.getElementById("japan_headline5").innerHTML = japan_headlines[5];
  document.getElementById("japan_headline6").innerHTML = japan_headlines[6];
  document.getElementById("japan_headline7").innerHTML = japan_headlines[7];
  document.getElementById("japan_headline8").innerHTML = japan_headlines[8];
  document.getElementById("japan_headline9").innerHTML = japan_headlines[9];
  document.getElementById("japan_headline10").innerHTML = japan_headlines[10];
  document.getElementById("japan_headline11").innerHTML = japan_headlines[11];
  document.getElementById("japan_headline12").innerHTML = japan_headlines[12];
  document.getElementById("japan_headline13").innerHTML = japan_headlines[13];
  document.getElementById("japan_headline14").innerHTML = japan_headlines[14];
  document.getElementById("austrailia_headline0").innerHTML = austrailia_headlines[0];
  document.getElementById("austrailia_headline1").innerHTML = austrailia_headlines[1];
  document.getElementById("austrailia_headline2").innerHTML = austrailia_headlines[2];
  document.getElementById("austrailia_headline3").innerHTML = austrailia_headlines[3];
  document.getElementById("austrailia_headline4").innerHTML = austrailia_headlines[4];
  document.getElementById("austrailia_headline5").innerHTML = austrailia_headlines[5];
  document.getElementById("austrailia_headline6").innerHTML = austrailia_headlines[6];
  document.getElementById("austrailia_headline7").innerHTML = austrailia_headlines[7];
  document.getElementById("austrailia_headline8").innerHTML = austrailia_headlines[8];
  document.getElementById("austrailia_headline9").innerHTML = austrailia_headlines[9];
  document.getElementById("austrailia_headline10").innerHTML = austrailia_headlines[10];
  document.getElementById("austrailia_headline11").innerHTML = austrailia_headlines[11];
  document.getElementById("austrailia_headline12").innerHTML = austrailia_headlines[12];
  document.getElementById("austrailia_headline13").innerHTML = austrailia_headlines[13];
  document.getElementById("austrailia_headline14").innerHTML = austrailia_headlines[14];
  document.getElementById("nigeria_headline0").innerHTML = nigeria_headlines[0];
  document.getElementById("nigeria_headline1").innerHTML = nigeria_headlines[1];
  document.getElementById("nigeria_headline2").innerHTML = nigeria_headlines[2];
  document.getElementById("nigeria_headline3").innerHTML = nigeria_headlines[3];
  document.getElementById("nigeria_headline4").innerHTML = nigeria_headlines[4];
  document.getElementById("nigeria_headline5").innerHTML = nigeria_headlines[5];
  document.getElementById("nigeria_headline6").innerHTML = nigeria_headlines[6];
  document.getElementById("nigeria_headline7").innerHTML = nigeria_headlines[7];
  document.getElementById("nigeria_headline8").innerHTML = nigeria_headlines[8];
  document.getElementById("nigeria_headline9").innerHTML = nigeria_headlines[9];
  document.getElementById("nigeria_headline10").innerHTML = nigeria_headlines[10];
  document.getElementById("nigeria_headline11").innerHTML = nigeria_headlines[11];
  document.getElementById("nigeria_headline12").innerHTML = nigeria_headlines[12];
  document.getElementById("nigeria_headline13").innerHTML = nigeria_headlines[13];
  document.getElementById("nigeria_headline14").innerHTML = nigeria_headlines[14];
  document.getElementById("singapore_headline0").innerHTML = singapore_headlines[0];
  document.getElementById("singapore_headline1").innerHTML = singapore_headlines[1];
  document.getElementById("singapore_headline2").innerHTML = singapore_headlines[2];
  document.getElementById("singapore_headline3").innerHTML = singapore_headlines[3];
  document.getElementById("singapore_headline4").innerHTML = singapore_headlines[4];
  document.getElementById("singapore_headline5").innerHTML = singapore_headlines[5];
  document.getElementById("singapore_headline6").innerHTML = singapore_headlines[6];
  document.getElementById("singapore_headline7").innerHTML = singapore_headlines[7];
  document.getElementById("singapore_headline8").innerHTML = singapore_headlines[8];
  document.getElementById("singapore_headline9").innerHTML = singapore_headlines[9];
  document.getElementById("singapore_headline10").innerHTML = singapore_headlines[10];
  document.getElementById("singapore_headline11").innerHTML = singapore_headlines[11];
  document.getElementById("singapore_headline12").innerHTML = singapore_headlines[12];
  document.getElementById("singapore_headline13").innerHTML = singapore_headlines[13];
  document.getElementById("singapore_headline14").innerHTML = singapore_headlines[14];
  const list_of_all_keywords = [us_keywords,uk_keywords,france_keywords,germany_keywords,brazil_keywords,russia_keywords,india_keywords,china_keywords,southafrica_keywords,saudi_keywords,mexico_keywords,austrailia_keywords,singapore_keywords,nigeria_keywords,japan_keywords]
  const list_of_all_latlongs = [[47.751076,-120.740135],[51.507351,-1.0127758],[48.856614,2.352222],[52.520008,13.404954],[-10.333333,-53.2], [55.755825,37.617298],[28.613939,77.209023],[39.904202,116.407394],[-28.8166236,24.991639],[24.713552,46.675297],[19.4326296,-991331785],[-35.2975906,149.1012676],[1.357107,103.8194992],[9.6000359,7.9999721],[35.6828387,139.7594549]]
  const list_of_all_headlines = [us_headlines,uk_headlines,france_headlines,germany_headlines,brazil_headlines,russia_headlines,india_headlines,china_headlines,southafrica_headlines,saudi_headlines,mexico_headlines,austrailia_headlines,singapore_headlines,nigeria_headlines,japan_headlines]
  const list_of_all_urls = [us_urls,uk_urls,france_urls,germany_urls,brazil_urls,russia_urls,india_urls,china_urls,southafrica_urls,saudi_urls,mexico_urls,austrailia_urls,singapore_urls,nigeria_urls,japan_urls]
  const list_of_all_markers = [us_marker,uk_marker,france_marker,germany_marker,brazil_marker,russia_marker,india_marker,china_marker,southafrica_marker,saudi_marker,mexico_marker,austrailia_marker,singapore_marker,nigeria_marker,japan_marker]
  for (let index = 0; index < us_keywords.length; index++) {
    
    us_keywords[index] = (us_keywords[index].split(","))
    uk_keywords[index] = (uk_keywords[index].split(","))
    france_keywords[index] = (france_keywords[index].split(","))
    germany_keywords[index] = (germany_keywords[index].split(","))
    saudi_keywords[index] = (saudi_keywords[index].split(","))
    brazil_keywords[index] = (brazil_keywords[index].split(","))
    india_keywords[index] = (india_keywords[index].split(","))
    china_keywords[index] = (china_keywords[index].split(","))
    russia_keywords[index] = (russia_keywords[index].split(","))
    southafrica_keywords[index] = (southafrica_keywords[index].split(","))
    mexico_keywords[index] = (mexico_keywords[index].split(","))
    singapore_keywords[index] = (singapore_keywords[index].split(","))
    japan_keywords[index] = (japan_keywords[index].split(","))
    nigeria_keywords[index] = (nigeria_keywords[index].split(","))
    austrailia_keywords[index] = (austrailia_keywords[index].split(","))


    
  }
  console.log(us_keywords)
  
  let my_headline = "";
  let my_url = "";
  let my_keywords = [];

  function headline_called(headline_to_check) {
    connections.removeFrom(map)
    common_headlines = []
    
    headline_location = headline_to_check.substring(0, headline_to_check.length - 2)
    headline_number = parseInt(headline_to_check.slice(-2))
    if (headline_location == "us"){
      my_headline = us_headlines[headline_number];
      my_keywords = us_keywords[headline_number]
      my_url = us_urls[headline_number]
      my_latlong = [47.751076,-120.740135]
    } else if (headline_location == "uk"){
      my_headline = uk_headlines[headline_number];
      my_keywords = uk_keywords[headline_number]
      my_url = uk_urls[headline_number]
      my_latlong = [51.507351,-0.127758]
    } else if (headline_location == "france"){
      my_headline = france_headlines[headline_number];
      my_keywords = france_keywords[headline_number]
      my_url = france_urls[headline_number]
      my_latlong = [48.856614,2.352222]
    } else if (headline_location == "germany"){
      my_headline = germany_headlines[headline_number];
      my_keywords = germany_keywords[headline_number]
      my_url = germany_urls[headline_number]
      my_latlong = [52.520008,13.404954]
    } else if (headline_location == "brazil"){
      my_headline = brazil_headlines[headline_number];
      my_keywords = brazil_keywords[headline_number]
      my_url = brazil_urls[headline_number]
      my_latlong = [-10.333333,-53.2]
    } else if (headline_location == "russia"){
      my_headline = russia_headlines[headline_number];
      my_keywords = russia_keywords[headline_number]
      my_url = russia_urls[headline_number]
      my_latlong = [55.755825,37.617298]
    } else if (headline_location == "india"){
      my_headline = india_headlines[headline_number];
      my_keywords = india_keywords[headline_number]
      my_url = india_urls[headline_number]
      my_latlong = [28.613939,77.209023]
    } else if (headline_location == "china"){
      my_headline = china_headlines[headline_number];
      my_keywords = china_keywords[headline_number]
      my_url = china_urls[headline_number]
      my_latlong = [39.904202,116.407394]
    } else if (headline_location == "southafrica"){
      my_headline = southafrica_headlines[headline_number];
      my_keywords = southafrica_keywords[headline_number]
      my_url = southafrica_urls[headline_number]
      my_latlong = [-28.8166236,24.991639]
    } else if (headline_location == "saudi"){
      my_headline = saudi_headlines[headline_number];
      my_keywords = saudi_keywords[headline_number]
      my_url = saudi_urls[headline_number]
      my_latlong = [24.713552,46.675297]
    } else if (headline_location == "nigeria"){
      my_headline = nigeria_headlines[headline_number];
      my_keywords = nigeria_keywords[headline_number]
      my_url = nigeria_urls[headline_number]
      my_latlong = [9.6000359,7.9999721]
    } else if (headline_location == "austrailia"){
      my_headline = austrailia_headlines[headline_number];
      my_keywords = austrailia_keywords[headline_number]
      my_url = austrailia_urls[headline_number]
      my_latlong = [-35.2975906,149.1012676]
    } else if (headline_location == "japan"){
      my_headline = japan_headlines[headline_number];
      my_keywords = japan_keywords[headline_number]
      my_url = japan_urls[headline_number]
      my_latlong = [35.6828387,139.7594549]
    } else if (headline_location == "mexico"){
      my_headline = mexico_headlines[headline_number];
      my_keywords = mexico_keywords[headline_number]
      my_url = mexico_urls[headline_number]
      my_latlong = [19.4326296,-991331785]
    } else if (headline_location == "singapore"){
      my_headline = singapore_headlines[headline_number];
      my_keywords = singapore_keywords[headline_number]
      my_url = singapore_urls[headline_number]
      my_latlong = [1.357107,103.8194992]
    } 
    common_latlongs = []
    for (let index = 0; index < list_of_all_keywords.length; index++) {
      
      commons = check_against(my_keywords,list_of_all_keywords[index])
      if (commons.length > 0){
        common_latlongs.push(my_latlong)
        common_latlongs.push(list_of_all_latlongs[index])
        text = ""
        for (let index1 = 0; index1 < commons.length; index1++) {
          text = text + list_of_all_headlines[index][commons[index1]] + "\n" + list_of_all_urls[index][commons[index1]] + "\n"
          
        }
        
        list_of_all_markers[index].bindPopup(text,{closeOnClick: false, autoClose: false})
      }
    }
    
    add_connection(common_latlongs)
    
    
  }
    return {headline_called};

}



function check_against(local_keywords,external_keywords){
  common_headlines = []
  for (let i = 0; i < external_keywords.length; i++) {
    

    
    
    if (local_keywords.filter(value => external_keywords[i].includes(value)).length > 0){
      common_headlines.push(i)
  
      
    }
   
  }
  
  return common_headlines
}

function add_connection(points){
  connections = L.layerGroup()
  this.connections.addLayer(L.polyline(points, {color: 'white'}))
  connections.addTo(map)
}


 
 