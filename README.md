# <center>Custom box para uso de cookies</center> #

## Sobre o projeto ##

A biblioteca pode ser usada para adicionar a informação visual do uso de cookies no respectivo domínio ao qual o usuário está navegando.

## Inicializando a biblioteca ##

É necessário gerar o arquivo `cookies.js` e então adicioná-lo ao header/footer da página ao qual será exibida a informação.

<b>Exemplo:</b>
``` HTML
<script type="text/javascript" src="cookies.js"></script>
```

Logo após, abaixo da importação acima, é necessário instanciar a função de carregamento e passar um objeto com alguns parâmetros.

<b>Exemplo:</b>
``` HTML
<script type="text/javascript" src="cookies.js"></script>
<script type="text/javascript">
  cookies.initiate({
    boxBackground: '#691054',
    text: 'Informe aqui a mensagem que será exibida na box do container',
    textColor: '#FFF',
    buttonBackgroundColor: '#FFF',
    buttonTextColor: '#691054'
  })
</script>
```

Referente as informações passadas no objeto, temos:

``` JSON
{
  "boxBackground": "cor de fundo do container",
  "text": "texto que será exibido",
  "textColor": "cor do texto",
  "buttonBackgroundColor": "cor de fundo do botão",
  "buttonTextColor": "cor do texto do botão"
}
```

## Uso na web ##

A mensagem é exibida e apenas quando o usuário clicar em "Aceitar", a box é removida e dessa forma não será mais exibida.

