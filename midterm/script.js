var cards;
var dataPromise;

function getCardData() {
  if(!dataPromise){
    dataPromise = $.ajax({
      "async": true,
  	"crossDomain": true,
  	"url": `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards?collectable=1`,
  	"method": "GET",
  	"headers": {
  		"x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
  		"x-rapidapi-key": "bf33166c19msh9e870eb4bc2736bp14e172jsn49ae46749b04"
  	}
      });
  }
  return dataPromise;
}

function showCardRandom(){
  var cardNo = Math.floor(Math.random() * cards.length);
  if(cardNo != undefined){
    showCard(cardNo)
  }else {
    document.write("please hold");
  }

}

function showCard(cardNo){
  var obj = cards[cardNo];
  $("#card-image").attr('src', obj.img);
  $("#card-name").html(obj.name);
  $("#card-type").text(obj.type);
  $("#card-faction").text(obj.faction);
  $("#card-rarity").text(obj.rarity);
  $("#player-class").text(obj.playerClass);
  $("#artist-name").text(obj.artist);
}

function flattenCards(data){
    // Flatten the object as cards are stored in sets
    var result = [];
    for (var set in data) {
      for (var i = 0; i < data[set].length; i++) {
        result.push(data[set][i]);
      }
    }
    return result;
}


$(document).ready(function() {
  getCardData()
    .done(function(data){
       $("#random").text("Next");
       cards = flattenCards(data);
       console.log(cards)
       showCardRandom();
    });
  $('#random').click(showCardRandom);
});

var totalCount = 6;
function ChangeIt()
{
var num = Math.ceil( Math.random() * totalCount );
document.body.style.backgroundImage = 'url(bgimages/'+num+'.jpg)';
document.body.style.backgroundRepeat = "repeat";// Background repeat
}
ChangeIt()
