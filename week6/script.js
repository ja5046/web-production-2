$(function(){
  $('#card-search').click(function(){
    let result = $('#search-card').val()

if(result !== ''){

  const settings = {
	"async": true,
	"crossDomain": true,
	"url": `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${result}`,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
		"x-rapidapi-key": "bf33166c19msh9e870eb4bc2736bp14e172jsn49ae46749b04"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
  for(let i=0; i< response.length; i++){
$("#hearthstone").append(`<img src="${response[i].img}" />`)
}
})
};
})
})
