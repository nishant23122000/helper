
$(document).ready(function(){
   
    $('#button').click(function(){
       
           var result=$('#result').val()
           var final='services#'+result
           $(this).attr('href',final)
        })
    

})

var load=document.querySelector('.loader')
function loader(){
   
    load.style.display='none'
}
    