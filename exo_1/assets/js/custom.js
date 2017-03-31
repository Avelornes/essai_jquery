/**
 * Created by Séverine on 29/03/17.
 */

$(document).ready(function () {

    $('.label').on('click', function () {
        $('<div id="idlabel"><p>Texte du label : </p><input type="text" name="label" id="label"> <input type="submit" value="ok" id="ok1"></div>').insertAfter($('hr'));
        $('#ok1').on('click', function () {
            $('<span>' + $('#droite input:text').val() + ' : </span>').appendTo('#gauche');
            $('#idlabel').remove();
        });
    });

    $('.textrea').on('click', function () {
       $('<div id="idid"><p>ID de la zone de texte : </p><input type="text" name="textea"> <input type="submit" value="ok" id="ok2"></div>').insertAfter($('hr'));
       $('#ok2').on('click', function () {
           $('<input id="' + $('#droite input:text').val() + '"/><br>').appendTo('#gauche');
           $('#idid').remove();
       });
    });

    $('.bouton').on('click', function () {
        $('<div id="idbutton"><p>Texte du bouton : </p><input type="text" name="boutonv"> <input type="submit" value="ok" id="ok3"></div>').insertAfter($('hr'));
        $('#ok3').on('click', function () {
            $('<button>' + $('#droite input:text').val() + '</button>').appendTo('#gauche');
            $('#idbutton').remove();
        });
    });
});