$(document).ready(function() {

    var phoneBehavior = function (val) {
      return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    };
    
    var phoneOptions = {
        onKeyPress: function (val, e, field, options) {
            // Re-aplica a máscara a cada tecla pressionada para alternar entre fixo e celular
            field.mask(phoneBehavior.apply({}, arguments), options);
        }
    };

    $('#telefone').mask(phoneBehavior, phoneOptions);
    $('#data').mask('00/00/0000');
    
});