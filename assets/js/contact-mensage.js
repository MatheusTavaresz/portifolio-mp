document.getElementById('enviarBtn').addEventListener('click', function() {
    // Obter o valor digitado na textarea
    var message = document.getElementById('messageTextarea').value;

    // Codificar o texto para ser usado na URL do link do WhatsApp
    var encodedMessage = encodeURIComponent(message);

    // Montar o link do WhatsApp com o texto da mensagem
    var link = "https://api.whatsapp.com/send?phone=5563992626906&text=" + encodedMessage;

    // Redirecionar para o link do WhatsApp
    window.open(link, '_blank');
  });