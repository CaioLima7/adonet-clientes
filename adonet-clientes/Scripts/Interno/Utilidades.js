﻿function voltar() {
    window.history.back();
}

function incluir() {
    $("#formulario *").removeAttr('disabled');
}

function cancelar() {
    $("#formulario *").prop('disabled', 'enabled').val('');

}

$(document).ready(function () {
    $('.data').mask('00/00/0000');
    $('.tempo').mask('00:00:00');
    $('.data_tempo').mask('00/00/0000 00:00:00');
    $('.cep').mask('00000-000');
    $('.tel').mask('(00) 0 0000-0000');
    $('.ddd_tel').mask('(00) 0000-0000');
    $('.cpf').mask('000.000.000-00');
    $('.cnpj').mask('00.000.000/0000-00');
    $('.dinheiro').mask('000.000.000.000.000,00', { reverse: true });
    $('.dinheiro2').mask("#.##0,00", { reverse: true });
    $('.rg').mask("00.000.00-0");
});

function ToJavaScriptDate(value) {
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(value);
    var dt = new Date(parseFloat(results[1]));
    return (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear();
}

var dateMask = IMask(
    document.getElementById('date-mask'),
    {
        mask: Date,
        min: new Date(1990, 0, 1),
        max: new Date(2021, 0, 1),
        lazy: false
    });