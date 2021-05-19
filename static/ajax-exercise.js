"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', (response) => {
        $('#fortune-text').html(response);
    })
   
};


$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};


    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get('/weather.json', formData, (data) => {
        $("#weather-info").html(`${data["forecast"]}`);
        console.log(data);
});
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    const melonOrder = {"melon": $("#melon-type-field").val(),
                        "qty": $("#qty-field").val()};
   
    $.post('/order-melons.json',melonOrder,(result) => {
        $('#order-status').html(`${result.code}, ${result.msg}`)

    });
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
    
   if (melonOrder['qty'] > 10 || melonOrder['qty'] < 1){
    $('#order-status').addClass('order-error');
   }
   else{
    $('#order-status').removeClass('order-error');

   }
    
}

$("#order-form").on('submit', orderMelons);


