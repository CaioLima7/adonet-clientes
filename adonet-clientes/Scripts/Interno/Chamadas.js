function buscarDadosCliente() {
    debugger;
    var valorId = $("#valorId").text();
    $.ajax({
        method: "POST",
        url: '/Cliente/BuscarDados',
        data: { Id: valorId },
        success: function (data) {
            $('#nome').val(data[1]);
            $('#cpf').val(data[2]);
            $('#rg').val(data[3]);
            $('#dtNascimento').val(ToJavaScriptDate(data[4]));
            $('#telefone').val(data[5]);
            $('#logradourou').val(data[6]);
            $('#numero').val(data[7]);
            $('#complemento').val(data[8]);
            $('#cep').val(data[9]);
            $('#bairro').val(data[10]);
            $('#estado').val(data[11]);
            $('#cidade').val(data[12]);
        },
    });
}

function salvarCliente() {
    debugger;
    var nome = $('#nome').val();
    var cpf = $('#cpf').val().split(".").join("").replace("-", "")
    var rg = $('#rg').val().split(".").join("").replace("-", "");
    var dtNascimento = $('#dtNascimento').val().concat(" 00:00:00");
    var telefone = $('#telefone').val().replace(/[^0-9]+/g, '');
    var logradouro = $('#logradouro').val();
    var numero = $('#numero').val();
    var complemento = $('#complemento').val();
    var cep = $('#cep').val();
    var bairro = $('#bairro').val();
    var estado = $('#estado').val();
    var cidade = $('#cidade').val();

    $.ajax({
        method: "POST",
        url: '/Cliente/Inserir',
        data: {
            nome: nome, cpf: cpf, Rg: rg, DataNascimento: dtNascimento,
            Telefone: telefone, logradouro: logradouro,
            Numero: numero, complemento: complemento, cep: cep,
            bairro: bairro, estado: estado, cidade: cidade,
        },
        error: function (data) {
            console.log("Falhou!");
        },
        success: function (data) {
            console.log("Sucesso!");
        }
    });
}

function alterarCliente() {
    var valorId = $("#valorId").text();

    var nome = $('#nome').val();
    var cpf = $('#cpf').val().split(".").join("").replace("-", "")
    var rg = $('#rg').val().split(".").join("").replace("-", "");
    var dtNascimento = $('#dtNascimento').val().concat(" 00:00:00");
    var telefone = $('#telefone').val().replace(/[^0-9]+/g, '');
    var logradouro = $('#logradouro').val();
    var numero = $('#numero').val();
    var complemento = $('#complemento').val();
    var cep = $('#cep').val();
    var bairro = $('#bairro').val();
    var estado = $('#estado').val();
    var cidade = $('#cidade').val();

    $.ajax({
        method: "POST",
        url: '/Cliente/Alterar',
        data: {
            Id: valorId,
            nome: nome, cpf: cpf, Rg: rg, DataNascimento: dtNascimento,
            Telefone: telefone, logradouro: logradouro,
            Numero: numero, complemento: complemento, cep: cep,
            bairro: bairro, estado: estado, cidade: cidade,
        },
        error: function (data) {
            console.log("Falhou!");
        },
        success: function (data) {
            console.log("Sucesso!");
        }
    });
}

$('#myModal').on('shown.bs.modal', function () {
    $.ajax({
        method: "GET",
        url: '/Cliente/MiniGrid',
        success: function (data) {
            $('#id1').text(data[0].ID);
            $('#nome1').text(data[0].Nome);
            $('#cpf1').text(data[0].CPF);
            var dataHora = data[0].DataNascimento;
            var dataNascimento = dataHora.replace(" 00:00:00", "")
            $('#dtNasc1').text(dataNascimento);

            $('#id2').text(data[1].ID);
            $('#nome2').text(data[1].Nome);
            $('#cpf2').text(data[1].CPF);
            var dataHora = data[1].DataNascimento;
            var dataNascimento1 = dataHora.replace(" 00:00:00", "")
            $('#dtNasc2').text(dataNascimento1);

            $('#id3').text(data[2].ID);
            $('#nome3').text(data[2].Nome);
            $('#cpf3').text(data[2].CPF);
            var dataHora = data[2].DataNascimento;
            var dataNascimento2 = dataHora.replace(" 00:00:00", "")
            $('#dtNasc3').text(dataNascimento2);

            $('#id4').text(data[3].ID);
            $('#nome4').text(data[3].Nome);
            $('#cpf4').text(data[3].CPF);
            var dataHora = data[3].DataNascimento;
            var dataNascimento3 = dataHora.replace(" 00:00:00", "")
            $('#dtNasc4').text(dataNascimento3);

            $('#id5').text(data[4].ID);
            $('#nome5').text(data[4].Nome);
            $('#cpf5').text(data[4].CPF);
            var dataHora = data[4].DataNascimento;
            var dataNascimento4 = dataHora.replace(" 00:00:00", "")
            $('#dtNasc5').text(dataNascimento4);

            $('#id6').text(data[5].ID);
            $('#nome6').text(data[5].Nome);
            $('#cpf6').text(data[5].CPF);
            var dataHora = data[5].DataNascimento;
            var dataNascimento5 = dataHora.replace(" 00:00:00", "")
            $('#dtNasc6').text(dataNascimento5);
        },  
    })
})


function deletarCliente() {
    var valorId = $("#valorId").text();

    $.ajax({
        method: "POST",
        url: '/Cliente/Deletar',
        data: {
            Id: valorId
        },
        error: function (data) {
            console.log("Falhou!");
        },
        success: function (data) {
            console.log("Sucesso!");
            cancelar();
        }
    });
}

