$(document).ready(onReady);

function onReady() {

    console.log('jQuery is loaded');
    
    $('#addPlayerButton').on('click', addPlayer);
   
    getAllPlayers()
}

function getAllPlayers() {
    $.ajax({
        type: 'GET',
        url: '/players'
    })
    .then(function (response) {
        $('#playerList').empty;
        response.forEach(function(player){   
            $('#playerList').append(
            `<li>${player}</li>`);     
        });
        
    })
    
}
    

function addPlayer() {

    let newPlayer = $('#playerName').val()

    console.log('Welcome', newPlayer+'!' );

   $.ajax({
       method: 'POST',
       url: '/add-player',
       data: newPlayer
   })
   .then(getAllPlayers()
       );
   

   
}