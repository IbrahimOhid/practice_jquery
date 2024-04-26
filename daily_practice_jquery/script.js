// $('h1').text('Ibrahim');

// $('.my-div h1').text('Mohammad ibrahim');
// $('#p1').text('I am a good boy');
// $('#p1').html('<b>I am a Good Boy</b>')

// $('.my-div h1').append(' Wow Beautiful!');
// $('#p1').prepend('Yes! ');

// var newPara = $('<p></p>').text('This is Para Two');
// $('#para1').after(newPara);
//  $('#para1').before(newPara);

// $('a').attr('href');
// $('a').removeAttr('href');
// $('a').attr('href', 'https://github.com/')

// $('h2').css('color', 'red');
// $('h2').css('font-style', 'italic');
// $('h2').css('font-size', '3rem');
// $('h2').css({'color':'pink','font-size':'2rem', 'font-family':'sans-serif'});

// $('h2').addClass('styleh2,  styleh3');

// $('button').click(function(){
//     $('h1').text('Thanks For Click');
// })

// $('button').click(function(){
//     $('h1').toggleClass('style3');
// })

// $('.myButton').click(function() {
//     var value = this.innerHTML;
//     $('h1').text(value + ' is Clicked')
// })

// $('.myButton').mouseover(function() {
//     var value = this.innerHTML;
//     $('h1').text(value + ' is Mouseover');
// })


// $('#btn').click(function () {
//     var Password1 = $('#pass1').val();
//     var Password2 = $('#pass2').val();
//     if (Password1 != '' && Password2 != '') {
//         if (Password1 == Password2) {
//             $('h1').text('Password Matching');
//         } else {
//             $('h1').text('Password MisMatch');
//         }
//     } else {
//         $('h1').text('Please Enter a Password');
//     }
// })

// $('#btn').click(function(){
//     // $('#div1').hide();
//     // $('#div1').toggle(1000);
//     // $('#div1').fadeOut(2000).fadeIn(2000);
//     // $('#div1').fadeToggle(2000);
//     // $('#div1').slideToggle();
//     $('#div1').animate({
//         height:'500px',
//         width: '800px',
//         marginLeft: '80px'
//     })
// })       

// $(document).ready(function(){
//     // $('button').on('click', function(){
//     //     alert('Hello World')
//     // });

// });

// $(document).ready(function(){
//     $('button').click(function(){
//         $('.one').slideToggle(1000, function(){
//             alert('Oh No');
//         });
//     });
// });

// $(document).ready(function(){
//     $('button').click(function(){
//         $('.one').animate({
//             marginLeft:'30px',
//             height: '10px',
//             width: '10px'
//         }, 1000, function(){
//             alert('Very Small');
//         });
//     });
// });

// $(document).ready(function(){
//     // $('button').click(function(){
//     //     $('.two').slideToggle();
//     // })
//     $('#start').click(function(){
//         $('.two').animate({
//             marginLeft : '500px'
//         }, 2000);
//     });
//     $('#stop').click(function(){
//         $('.two').stop();
//     });
// });

// $(document).ready(function(){
//     $('button').click(function(){
//         $('.one .title1').text('OHID BHAI');
//     });
// });

// $(document).ready(function(){
//     $('button').click(function(e){
//         let firstName = $('#fname').val();
//         let lastName = $('#lname').val();
//         let userName = $('#uname').val();
//         let Password = $('#password').val();
//         e.preventDefault();
//         if(firstName == '' || lastName == '' || userName == '' || Password == ''){
//             $('h1').text('Login Failed');
//         }else{
//             $('h1').text('Login Successful');
//         }
//     });
// });

// $(document).ready(function () {
//     $('button').click(function () {
//         let oneText = $('.one').text();
//         $('.two').text(oneText);
//     });
// });

// $(document).ready(function(){
//     $('button').click(function(e){
//         e.preventDefault();
//         $('#fname').val('Ibrahim')
//     })
// })

// $(document).ready(function(){
//     // $('.para a').attr('href', 'https://www.facebook.com/');
//     // $('.para a').attr('target', '_blank');
//     $('.para a').attr({
//         'href': 'https://www.facebook.com/',
//         'target': '_blank'
//     })
// })

// $(document).ready(function(){
//     $('button').click(function(){
//         let para2 = '<div class="para2"><h1>Ohid Bhai</h1></div>';
//     $('.para').after(para2)
//     })
// })

// $(document).ready(function(){
//     $('button').click(function(){
//         let para1 = '<div class="para1"><h5>Ebna Osman Ebnol</h5></div>';
//         $('.para').before(para1);
//         let para2 = '<div class="para2"><h1>Ohid Bhai</h1></div>';
//         $('.para').after(para2)
//     })
// })

// $(document).ready(function(){
//     $('button').click(function(){
//         let para1 = $('<h3></h3>').text('Hello World');
//         $('.para').after(para1)
//     })
// })