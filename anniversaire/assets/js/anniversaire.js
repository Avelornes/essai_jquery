/**
 * Created by Séverine on 30/03/17.
 */

$(document).ready(function () {
    $('#btn1').on('click', function () {
        $('#list_item').append('<li id="first">A beautiful day</li>');
        $('#btn1').remove();
        $('#first').on('click', function () {
            $('ul').append('<li id="second">Yes, it is !</li>');
            $('#second').on('click', function () {
                $('ul').append('<li id="third">Sun, sea, ect...</li>');
                $('#third').on('click', function () {
                    $('body').css('background-image', 'url("img/background.jpg")');
                });
            });
        });
    });
});
