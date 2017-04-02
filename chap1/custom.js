/**
 * Created by Séverine on 27/03/17.
 */

$(function () {
    $('.reponse').hide();
    var q = $('.question');
    q.css('background', '#9EEAE0');
    q.css('border-style', 'groove');
    q.css('border-width', '4px');
    q.css('width', '900px');
    q.css('height', '250px');
    q.css('margin', '20px');

    $('.texte').css('float', 'left');
    $('.texte').css('width', '90%');

    $('img').css('float', 'right');
    $('img').css('margin-top', '80px');

    $('a').hover(
        function () {
            $('.reponse').show();
            if ($(':radio[id="r1"]:checked').val()){
                $('#img1').attr('src', 'valide.png');
                $('#reponse1').css('color', 'green');
            }
            else {
                $('#img1').attr('src', 'faux.png');
                $('#reponse1').css('color', 'red');
            }

            if ($(':radio[id="r4"]:checked').val()){
                $('#img2').attr('src', 'valide.png');
                $('#reponse2').css('color', 'green');
            }
            else {
                $('#img1').attr('src', 'faux.png');
                $('#reponse2').css('color', 'red');
            }

            if ($(':radio[id="r8"]:checked').val()){
                $('#img3').attr('src', 'valide.png');
                $('#reponse3').css('color', 'green');
            }
            else {
                $('#img3').attr('src', 'faux.png');
                $('#reponse3').css('color','red');
            }
        },
        function () {
            $('.reponse').hide();
            $('#img1').attr('src', 'question.png');
            $('#img2').attr('src', 'question.png');
            $('#img3').attr('src', 'question.png');
        }
    )
});

