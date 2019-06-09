var projetar = document.createElement('input');
    projetar.type = "button";
    projetar.value = "Projetar";
    projetar.classList = "btn btn-primary";
    projetar.id = "Projetar";

function somatoria(vet) {
    let soma = 0;
    for (let i = 0; i < vet.length; i++) {
        soma += parseFloat(vet[i]);
    };
    return soma;
};

function potencia(vet) {
    let quadrado = [];
    for (let i = 0; i < vet.length; i++) {
        quadrado[i] = parseFloat(vet[i] ** 2);
    };
    return quadrado;
};

function Calcular() {
    //######################################
    //####### CALCULO DA CORRELAÇÃO ########
    //######################################
    let NomeX, NomeY, valoresX, valoresY, vetX = [], vetY = [], vetX2 = [], vetY2 = [], vetXY = [], somaX = 0, somaY = 0, somaX2 = 0, somaY2 = 0, somaXY = 0, correlacao = 0, total = 0;
    NomeX = document.getElementById('NomeIndependente').value;
    NomeY = document.getElementById('NomeDependente').value;
    valoresX = document.getElementById('ValoresIndependente').value;
    valoresY = document.getElementById('ValoresDependente').value;
    vetX = valoresX.split(' ');
    vetY = valoresY.split(' ');

    for (let i = 0; i < vetX.length; i++) {
        vetXY[i] = parseFloat(vetX[i] * vetY[i]);
    };

    vetX2 = potencia(vetX);
    vetY2 = potencia(vetY);
    somaX = somatoria(vetX);
    somaY = somatoria(vetY);
    somaX2 = somatoria(vetX2);
    somaY2 = somatoria(vetY2);
    somaXY = somatoria(vetXY);

    total = vetX.length;
    correlacao = (((total * somaXY) - (somaX * somaY)) / Math.sqrt(((total * somaX2) - (somaX ** 2)) * ((total * somaY2) - (somaY ** 2)))) * 100;
    //######################################
    //######################################


    //######################################
    //####### CALCULO DA REGRESSÃO #########
    //######################################
    let a = 0, b = 0;

    a = ((total * somaXY) - (somaX * somaY)) / ((total * somaX2) - (somaX ** 2));
    b = ((somaY / total) - a * (somaX / total));
    //######################################
    //######################################


    Array.min = function (vet) {
        return Math.min.apply(Math, vet);
    };
    Array.max = function (vet) {
        return Math.max.apply(Math, vet);
    };

    let menorX = Array.min(vetX);
    let maiorX = Array.max(vetX);
    let menorY = 0, maiorY = 0;
    menorY = (a * menorX + b);
    maiorY = (a * maiorX + b);

    //Dados dos pontos dispersos
    var dados_dispersos = [];
    for (let i = 0; i < vetX.length; i++) {
        dados_dispersos[i] = new Array();
        dados_dispersos[i][0] = vetX[i];
        dados_dispersos[i][1] = vetY[i];
    };

    var dados_reta = [
        { x: menorX, y: menorY },
        { x: maiorX, y: maiorY }
    ];

    if (document.getElementById('equa1') != null) {
        document.getElementById('equa1').remove();
    };
    if (document.getElementById('equa2') != null) {
        document.getElementById('equa2').remove();
    };
    if (document.getElementById('equaX') != null) {
        document.getElementById('equaX').remove();
    };
    if (document.getElementById('equaY') != null) {
        document.getElementById('equaY').remove();
    };
    if (document.getElementById('Projetar') != null) {
        document.getElementById('Projetar').remove();
    };
    if (document.getElementById('txtCorelacao') != null) {
        document.getElementById('txtCorelacao').remove();
    };
    let pai = document.getElementById('dados');
    let equacao1 = document.getElementById('equacao1');
    let equacao2 = document.getElementById('equacao2');
    let equacao3 = document.getElementById('equacao3');
    let equacao4 = document.getElementById('equacao4');
    let equacao5 = document.getElementById('equacao5');
    let correl = document.createElement('p');
        correl.id = "txtCorelacao";
    let textoCorrelacao;
    if (correlacao >= 60) {
        textoCorrelacao = document.createTextNode('Correlação significante de: ' + correlacao.toFixed(2) + '%');
    } else if (correlacao < 60 && correlacao >= 30) {
        textoCorrelacao = document.createTextNode('Correlação fraca de: ' + correlacao.toFixed(2) + '%');
    } else {
        textoCorrelacao = document.createTextNode('Correlação insignificante de: ' + correlacao.toFixed(2) + '%');
    };
    let equa1 = document.createElement('p');
        equa1.id = "equa1";
    let equaX = document.createElement('input');
        equaX.id = "equaX";
        equaX.type = "text";
        equaX.placeholder = " X";
        equaX.size = 2;
    let equaY = document.createElement('input');
        equaY.id = "equaY";
        equaY.type = "text";
        equaY.placeholder = " Y";
        equaY.size = 2;
    let equa2 = document.createElement('p');
        equa2.id = "equa2";
    let textoEqua1 = document.createTextNode(a.toFixed(2) + ' * ');
    let textoEqua2 = document.createTextNode(' + ' + b.toFixed(2) + ' = ');

    correl.appendChild(textoCorrelacao);
    pai.appendChild(correl);
    equa1.appendChild(textoEqua1);
    equa2.appendChild(textoEqua2);
    equacao1.appendChild(equa1);
    equacao2.appendChild(equaX);
    equacao3.appendChild(equa2);
    equacao4.appendChild(equaY);
    equacao5.appendChild(projetar);

    desenharGrafico(menorX, menorY, maiorX, maiorY, NomeX, NomeY, dados_dispersos, dados_reta);
};

function desenharGrafico(menorX, menorY, maiorX, maiorY, NomeX, NomeY, dados_dispersos, dados_reta, Xequa, Yequa, x, y) {
    let teste = document.getElementById('container');
    if (teste.children[0] != null) {
        teste.children[0].remove();
    };
    var chart = anychart.scatter();

    chart.animation(true);
    chart.title('Projeção');

    if (!isNaN(Xequa)) {
        if (Xequa <= menorX) {
            chart.xScale()
                .minimum(Math.round(Xequa - 2))
                .maximum(Math.round(maiorX + 2))
                .ticks({ interval: 1 })
        } else if (Xequa >= maiorX) {
            chart.xScale()
                .minimum(Math.round(menorX - 2))
                .maximum(Math.round(Xequa + 2))
                .ticks({ interval: 1 })
        } else {
            chart.xScale()
                .minimum(Math.round(menorX - 2))
                .maximum(Math.round(maiorX + 2))
                .ticks({ interval: 1 })
        };
    } else {
        if (x <= menorX) {
            chart.xScale()
                .minimum(Math.round(x - 2))
                .maximum(Math.round(maiorX + 2))
                .ticks({ interval: 1 })
        } else if (x >= maiorX) {
            chart.xScale()
                .minimum(Math.round(menorX - 2))
                .maximum(Math.round(x + 2))
                .ticks({ interval: 1 })
        } else {
            chart.xScale()
                .minimum(Math.round(menorX - 2))
                .maximum(Math.round(maiorX + 2))
                .ticks({ interval: 1 })
        };
    };

    if (!isNaN(Yequa)) {
        if (Yequa <= menorY) {
            chart.yScale()
                .minimum(Math.round(Yequa - 2))
                .maximum(Math.round(maiorY + 2))
                .ticks({ interval: 1 })
        } else if (Yequa >= maiorY) {
            chart.yScale()
                .minimum(Math.round(menorY - 2))
                .maximum(Math.round(Yequa + 2))
                .ticks({ interval: 1 })
        } else {
            chart.yScale()
                .minimum(Math.round(menorY - 2))
                .maximum(Math.round(maiorY + 2))
                .ticks({ interval: 1 })
        };
    } else {
        if (y <= menorY) {
            chart.yScale()
                .minimum(Math.round(y - 2))
                .maximum(Math.round(maiorY + 2))
                .ticks({ interval: 1 })
        } else if (y >= maiorY) {
            chart.yScale()
                .minimum(Math.round(menorY - 2))
                .maximum(Math.round(y + 2))
                .ticks({ interval: 1 })
        } else {
            chart.yScale()
                .minimum(Math.round(menorY - 2))
                .maximum(Math.round(maiorY + 2))
                .ticks({ interval: 1 })
        };
    };


    chart.yAxis().title(NomeY);
    chart.xAxis()
        .title(NomeX)
        .drawFirstLabel(false)
        .drawLastLabel(false);

    chart.interactivity()
        .hoverMode('by-spot')
        .spotRadius(8);

    chart.tooltip().displayMode('union');


    var marker = chart.marker(dados_dispersos);
    marker.type('circle')
        .size(4);
    marker.hovered()
        .size(6)
        .fill('red')
        .stroke(anychart.color.darken('black'));
    marker.tooltip()
        .hAlign('start')
        .format(function () {
            return NomeY + ': ' + this.value + '\n' + NomeX + ': ' + this.x;
        });

    chart.line(dados_reta);
    chart.container('container');
    chart.draw();
    teste = 1;
};

projetar.onclick = function () {
    let Xequa, Yequa;
    Xequa = parseFloat(document.getElementById('equaX').value);
    Yequa = parseFloat(document.getElementById('equaY').value);

    //############################################
    //##### VERIFICA SE OS DADOS SÃO VÁLIDOS #####
    //############################################
    if (isNaN(Xequa) && isNaN(Yequa)) {
        alert("Informe um valor.");
        document.getElementById('equaX').value = "";
        document.getElementById('equaY').value = "";
        return false;
    } else if (!isNaN(Xequa) && !isNaN(Yequa)) {
        alert("Informe apenas um valor.");
        document.getElementById('equaX').value = "";
        document.getElementById('equaY').value = "";
        return false;
    };


    //######################################
    //####### CALCULO DA CORRELAÇÃO ########
    //######################################
    let NomeX, NomeY, valoresX, valoresY, vetX = [], vetY = [], vetX2 = [], vetY2 = [], vetXY = [], somaX = 0, somaY = 0, somaX2 = 0, somaY2 = 0, somaXY = 0, correlacao = 0, total = 0;
    NomeX = document.getElementById('NomeIndependente').value;
    NomeY = document.getElementById('NomeDependente').value;
    valoresX = document.getElementById('ValoresIndependente').value;
    valoresY = document.getElementById('ValoresDependente').value;
    vetX = valoresX.split(' ');
    vetY = valoresY.split(' ');

    for (let i = 0; i < vetX.length; i++) {
        vetXY[i] = parseFloat(vetX[i] * vetY[i]);
    };

    vetX2 = potencia(vetX);
    vetY2 = potencia(vetY);
    somaX = somatoria(vetX);
    somaY = somatoria(vetY);
    somaX2 = somatoria(vetX2);
    somaY2 = somatoria(vetY2);
    somaXY = somatoria(vetXY);

    total = vetX.length;
    correlacao = (((total * somaXY) - (somaX * somaY)) / Math.sqrt(((total * somaX2) - (somaX ** 2)) * ((total * somaY2) - (somaY ** 2)))) * 100;
    //######################################
    //######################################


    //######################################
    //####### CALCULO DA REGRESSÃO #########
    //######################################
    let a = 0, b = 0;

    a = ((total * somaXY) - (somaX * somaY)) / ((total * somaX2) - (somaX ** 2));
    b = ((somaY / total) - a * (somaX / total));
    //######################################
    //######################################


    Array.min = function (vet) {
        return Math.min.apply(Math, vet);
    };
    Array.max = function (vet) {
        return Math.max.apply(Math, vet);
    };

    let menorX = Array.min(vetX);
    let maiorX = Array.max(vetX);
    let menorY = 0, maiorY = 0;
    menorY = (a * menorX + b);
    maiorY = (a * maiorX + b);

    //Dados dos pontos dispersos
    var dados_dispersos = [];
    for (let i = 0; i < vetX.length; i++) {
        dados_dispersos[i] = new Array();
        dados_dispersos[i][0] = vetX[i];
        dados_dispersos[i][1] = vetY[i];
    };

    if (document.getElementById('equa1') != null) {
        document.getElementById('equa1').remove();
    };
    if (document.getElementById('equa2') != null) {
        document.getElementById('equa2').remove();
    };
    if (document.getElementById('equaX') != null) {
        document.getElementById('equaX').remove();
    };
    if (document.getElementById('equaY') != null) {
        document.getElementById('equaY').remove();
    };
    if (document.getElementById('Projetar') != null) {
        document.getElementById('Projetar').remove();
    };
    if (document.getElementById('txtCorelacao') != null) {
        document.getElementById('txtCorelacao').remove();
    };

    var dados_reta = [];
    let x = 0, y = 0;
    let equaX = document.createElement('input');
        equaX.id = "equaX";
        equaX.type = "text";
        equaX.placeholder = " X";
        equaX.size = 2;
    let equaY = document.createElement('input');
        equaY.id = "equaY";
        equaY.type = "text";
        equaY.placeholder = " Y";
        equaY.size = 2;

    if (!isNaN(Xequa)) {
        y = (a * Xequa) + b;
        if (Xequa <= menorX) {
            dados_reta = [
                { x: Xequa, y: y },
                { x: menorX, y: menorY },
                { x: maiorX, y: maiorY }
            ];
        } else if (Xequa >= maiorX) {
            dados_reta = [
                { x: menorX, y: menorY },
                { x: maiorX, y: maiorY },
                { x: Xequa, y: y }
            ];
        } else if (Xequa >= menorX || Xequa <= maiorX) {
            dados_reta = [
                { x: menorX, y: menorY },
                { x: Xequa, y: y },
                { x: maiorX, y: maiorY }
            ];
        };
        equaX.value = Xequa
        equaY.value = y.toFixed(2);
    } else if (!isNaN(Yequa)) {
        x = (-Yequa + b) / -a
        if (Yequa <= menorY) {
            dados_reta = [
                { x: x, y: Yequa },
                { x: menorX, y: menorY },
                { x: maiorX, y: maiorY }
            ];
        } else if (Yequa >= maiorY) {
            dados_reta = [
                { x: menorX, y: menorY },
                { x: maiorX, y: maiorY },
                { x: x, y: Yequa }
            ];
        } else if (Yequa >= menorY || Yequa <= maiorY) {
            dados_reta = [
                { x: menorX, y: menorY },
                { x: x, y: Yequa },
                { x: maiorX, y: maiorY }
            ];
        };
        equaX.value = x.toFixed(2);
        equaY.value = Yequa;
    };

    let pai = document.getElementById('dados');
    let equacao1 = document.getElementById('equacao1');
    let equacao2 = document.getElementById('equacao2');
    let equacao3 = document.getElementById('equacao3');
    let equacao4 = document.getElementById('equacao4');
    let equacao5 = document.getElementById('equacao5');
    let correl = document.createElement('p');
        correl.id = "txtCorelacao";
    let textoCorrelacao;
    if (correlacao >= 60) {
        textoCorrelacao = document.createTextNode('Correlação significante de: ' + correlacao.toFixed(2) + '%');
    } else if (correlacao < 60 && correlacao >= 30) {
        textoCorrelacao = document.createTextNode('Correlação fraca de: ' + correlacao.toFixed(2) + '%');
    } else {
        textoCorrelacao = document.createTextNode('Correlação insignificante de: ' + correlacao.toFixed(2) + '%');
    };
    let equa1 = document.createElement('p');
        equa1.id = "equa1";
    let equa2 = document.createElement('p');
        equa2.id = "equa2";
    let textoEqua1 = document.createTextNode(a.toFixed(2) + ' * ');
    let textoEqua2 = document.createTextNode(' + ' + b.toFixed(2) + ' = ');

    correl.appendChild(textoCorrelacao);
    pai.appendChild(correl);
    equa1.appendChild(textoEqua1);
    equa2.appendChild(textoEqua2);
    equacao1.appendChild(equa1);
    equacao2.appendChild(equaX);
    equacao3.appendChild(equa2);
    equacao4.appendChild(equaY);
    equacao5.appendChild(projetar);

    desenharGrafico(menorX, menorY, maiorX, maiorY, NomeX, NomeY, dados_dispersos, dados_reta, Xequa, Yequa, x, y);
};