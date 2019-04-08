var Body = {
   SetColor:function (color){
     //document.querySelector('body').style.Color = color;
    $('body').css('color',color);
   },
    setbackgroundColor:function (color){
      //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color)
   }
 }
function nightdayhandler(self){
  var target = document.querySelector('body');
  if (document.querySelector('#m_s').scr === '1.png'){
    Body.setbackgroundColor('#282828');
    Body.SetColor('white');
    document.querySelector('#m_s').scr = 's.png' ;
  } else {
  Body.setbackgroundColor('white');
  Body.SetColor('black');
  document.querySelector('#m_s').scr = '1.png';
  }
}
