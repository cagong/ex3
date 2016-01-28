//Javascript

//call to jQuery ready function
//make sure html and css are loaded
var clickcounter = 0;

$(document).ready(function () {
    console.log('ready');
    
    $('li#green').click(function () {
        if(clickcounter==0){
        $('li.green span.time').css('color', '#b9b9b9');
        $('li.green span.des').css('display', 'inline-block');
        $('li.green').css('margin-left', '0');
        setTimeout(function() {clickcounter=1}, 100);
        }
        if(clickcounter==1){
        $('li.green span.time').css('color', '#cdffcd');
        $('li.green span.des').css('display', 'none');
        $('li.green').css('margin-left', '180px');
        setTimeout(function() {clickcounter=0}, 100);
        }
         });
    
    $('li#green1').click(function () {
        $('li#green1 span.time').css('color', '#b9b9b9');
        $('li#green1 span.des').css('display', 'inline-block');
        $('li#green1').css('margin-left', '0px');
        });
    
    $('li#green2').click(function () {
        $('li#green2 span.time').css('color', '#b9b9b9');
        $('li#green2 span.des').css('display', 'inline-block');
        $('li#green2').css('margin-left', '0');
         });
    
    $('li#green3').click(function () {
        $('li#green3 span.time').css('color', '#b9b9b9');
        $('li#green3 span.des').css('display', 'inline-block');
        $('li#green3').css('margin-left', '0');
         });
    
    $('li#yellow').click(function () {
        if(clickcounter==0){
        $('li.yellow span.time').css('color', '#b9b9b9');
        $('li.yellow span.des').css('display', 'inline-block');
        $('li.yellow').css('margin-left', '0');
        setTimeout(function() {clickcounter=1}, 100);
        }
        if(clickcounter==1){
        $('li.yellow span.time').css('color', '#fbffbf');
        $('li.yellow span.des').css('display', 'none');
        $('li.yellow').css('margin-left', '180px');
        setTimeout(function() {clickcounter=0}, 100);
        }
         });
    
    $('li#yellow1').click(function () {
        $('li#yellow1 span.time').css('color', '#b9b9b9');
        $('li#yellow1 span.des').css('display', 'inline-block');
        $('li#yellow1').css('margin-left', '0');
         });
    
    $('li#yellow2').click(function () {
        $('li#yellow2 span.time').css('color', '#b9b9b9');
        $('li#yellow2 span.des').css('display', 'inline-block');
        $('li#yellow2').css('margin-left', '0');
         });
    
    $('li#yellow3').click(function () {
        $('li#yellow3 span.time').css('color', '#b9b9b9');
        $('li#yellow3 span.des').css('display', 'inline-block');
        $('li#yellow3').css('margin-left', '0');
         });
    
    $('li#blue').click(function () {
        if(clickcounter==0){
        $('li.blue span.time').css('color', '#b9b9b9');
        $('li.blue span.des').css('display', 'inline-block');
        $('li.blue').css('margin-left', '0');
        setTimeout(function() {clickcounter=1}, 100);
        }
        if(clickcounter==1){
        $('li.blue span.time').css('color', '#bff4ff');
        $('li.blue span.des').css('display', 'none');
        $('li.blue').css('margin-left', '180px');
        setTimeout(function() {clickcounter=0}, 100);
        }
         });
    
    $('li#blue1').click(function () {
        $('li#blue1 span.time').css('color', '#b9b9b9');
        $('li#blue1 span.des').css('display', 'inline-block');
        $('li#blue1').css('margin-left', '0');
         });
    
    $('li#blue2').click(function () {
        $('li#blue2 span.time').css('color', '#b9b9b9');
        $('li#blue2 span.des').css('display', 'inline-block');
        $('li#blue2').css('margin-left', '0');
         });
    
    $('li#blue3').click(function () {
        $('li#blue3 span.time').css('color', '#b9b9b9');
        $('li#blue3 span.des').css('display', 'inline-block');
        $('li#blue3').css('margin-left', '0');
         });
    
    $('li#blue4').click(function () {
        $('li#blue4 span.time').css('color', '#b9b9b9');
        $('li#blue4 span.des').css('display', 'inline-block');
        $('li#blue4').css('margin-left', '0');
         });
    
    $('li#blue5').click(function () {
        $('li#blue5 span.time').css('color', '#b9b9b9');
        $('li#blue5 span.des').css('display', 'inline-block');
        $('li#blue5').css('margin-left', '0');
         });
    
    $('li#blue6').click(function () {
        $('li#blue6 span.time').css('color', '#b9b9b9');
        $('li#blue6 span.des').css('display', 'inline-block');
        $('li#blue6').css('margin-left', '0');
         });
    
    $('li#pink').click(function () {
        if(clickcounter==0){
        $('li.pink span.time').css('color', '#b9b9b9');
        $('li.pink span.des').css('display', 'inline-block');
        $('li.pink').css('margin-left', '0');
        setTimeout(function() {clickcounter=1}, 100);
        }
        if(clickcounter==1){
        $('li.pink span.time').css('color', '#fad4ff');
        $('li.pink span.des').css('display', 'none');
        $('li.pink').css('margin-left', '180px');
        setTimeout(function() {clickcounter=0}, 100);
        }
         });

    $('li#pink1').click(function () {
        $('li#pink1 span.time').css('color', '#b9b9b9');
        $('li#pink1 span.des').css('display', 'inline-block');
        $('li#pink1').css('margin-left', '0');
         });
    
    $('li#pink2').click(function () {
        $('li#pink2 span.time').css('color', '#b9b9b9');
        $('li#pink2 span.des').css('display', 'inline-block');
        $('li#pink2').css('margin-left', '0');
         });
    
    $('li#pink3').click(function () {
        $('li#pink3 span.time').css('color', '#b9b9b9');
        $('li#pink3 span.des').css('display', 'inline-block');
        $('li#pink3').css('margin-left', '0');
         });
    
    $('li#pink4').click(function () {
        $('li#pink4 span.time').css('color', '#b9b9b9');
        $('li#pink4 span.des').css('display', 'inline-block');
        $('li#pink4').css('margin-left', '0');
         });
    
    $('li#pink5').click(function () {
        $('li#pink5 span.time').css('color', '#b9b9b9');
        $('li#pink5 span.des').css('display', 'inline-block');
        $('li#pink5').css('margin-left', '0');
         });
    
    $('li#pink6').click(function () {
        $('li#pink6 span.time').css('color', '#b9b9b9');
        $('li#pink6 span.des').css('display', 'inline-block');
        $('li#pink6').css('margin-left', '0');
         });
    
    $('li#pink7').click(function () {
        $('li#pink7 span.time').css('color', '#b9b9b9');
        $('li#pink7 span.des').css('display', 'inline-block');
        $('li#pink7').css('margin-left', '0');
         });
    
    $('li#pink8').click(function () {
        $('li#pink8 span.time').css('color', '#b9b9b9');
        $('li#pink8 span.des').css('display', 'inline-block');
        $('li#pink8').css('margin-left', '0');
         });
    
    $('li#pink9').click(function () {
        $('li#pink9 span.time').css('color', '#b9b9b9');
        $('li#pink9 span.des').css('display', 'inline-block');
        $('li#pink9').css('margin-left', '0');
         });
})