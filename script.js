
function verificar (){
   var data = new Date ()
   var ano = data.getFullYear ()
   var fano = document.getElementById('txtano')//Referente ao Formulário
   var res = document.querySelector('div#res')

   if(fano.value.length == 0 || Number (fano.value) > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')

   }else{
       var fsex = document.getElementsByTagName('radsex')
       var idade = ano - Number(fano.value)
       var genero_masc = document.getElementById('masc')
       var genero_fem = document.getElementById('fem')
        var img = document.createElement ('img')
        img.setAttribute('id', 'foto')
   
        
        if (genero_masc.checked) {
            genero ='Homem'
            if(idade >=0 && idade < 12){
                img.setAttribute ('src', 'imagens/foto-bebe-m.jpg' )
            }else if (idade < 25){
                img.setAttribute ('src', 'imagens/foto-jovem-m.jpg' )
            }else if (idade < 50){
                img.setAttribute ('src', 'imagens/foto-adulto-m.jpg')
            } else {
                img.setAttribute ('src', 'imagens/foto-idoso.jpg' )
            }
        } else if (genero_fem.checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 12){
                img.setAttribute ('src', 'imagens/foto-bebe-f.jpg')
            }else if (idade < 25){
                img.setAttribute ('src', 'imagens/foto-jovem-f.jpg')
            }else if (idade < 50){
                img.setAttribute ('src', 'imagens/foto-adulta-f.jpg')
            } else {
                img.setAttribute ('src', 'imagens/foto-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    
        
    }
}