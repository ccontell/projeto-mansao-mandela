const form = document.querySelector('.fale-conosco')
    const background = document.querySelector('.mascara-form')

    function showForm() {
        form.style.left = '50%'
        form.style.transform = 'translateX(-50%)'
        background.style.visibility = 'visible'
    }

    function hideForm() {
        form.style.left = '-350px'
        form.style.transform = 'translateX(0)'
        background.style.visibility = 'hidden'
    }

   function validaCPF(cpf) {
  var Soma = 0
  var Resto

  var strCPF = String(cpf).replace(/[^\d]/g, '')
  
  if (strCPF.length !== 11)
     return false
  
  if ([
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
    ].indexOf(strCPF) !== -1)
    return false

  for (i=1; i<=9; i++)
    Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);

  Resto = (Soma * 10) % 11

  if ((Resto == 10) || (Resto == 11)) 
    Resto = 0

  if (Resto != parseInt(strCPF.substring(9, 10)) )
    return false

  Soma = 0

  for (i = 1; i <= 10; i++)
    Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i)

  Resto = (Soma * 10) % 11

  if ((Resto == 10) || (Resto == 11)) 
    Resto = 0

  if (Resto != parseInt(strCPF.substring(10, 11) ) )
    return false

  return true

  
}
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true
});

typewriter
  .typeString('* Mansão Mandela* — O berço dos maiores talentos do funk ! Aqui, o som é pesado, a vibe é única e os sonhos viram realidade.')
  .pauseFor(2500)
  .deleteAll()
  .typeString('Produtora que tá revolucionando o funk brasileiro com batidas originais, MCs de peso e muita atitude.')
  .pauseFor(2500)
  .deleteChars(28)
  .typeString('*Mansão Mandela* Onde o funk acontece de verdade!!!')
  .start();
