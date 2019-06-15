//#################################################
//################ OBTER VARIAVEL #################
//#################################################
function ObterVariavel() {
    let variavel = document.getElementById('variavel').value;
    return variavel;
};

//#################################################
//################# OBTER DADOS ###################
//#################################################
function ObterDados() {
    let dados = document.getElementById('dados').value;
    let vetDados = dados.split(" ");
    return vetDados;
};

//#################################################
//####### OBTER TIPO/PROCESSO DA VARIAVEL #########
//#################################################
function TipoProcesso() {
    let processoAtivo, tipoAtivo, tipoProcesso = [];
    let processo = document.getElementsByName('processos');
    let tipo = document.getElementsByName('tipo');
    for (let i = 0; i < processo.length; i++) {
        if (processo[i].checked) {
            processoAtivo = processo[i].value;
        };
    };
    for (let i = 0; i < tipo.length; i++) {
        if (tipo[i].checked) {
            tipoAtivo = tipo[i].value;
        };
    };
    tipoProcesso[0] = tipoAtivo;
    tipoProcesso[1] = processoAtivo;
    return tipoProcesso;
};

//#################################################
//########## OBTER MEDIDA SEPARATRIZ ##############
//#################################################
function MedSeparatriz() {
    let medidaS = document.getElementsByName('MedSeparatriz');
    let medidaSativa = 0, percentil = 0;
    for (let i = 0; i < medidaS.length; i++) {
        if (medidaS[i].checked) {
            medidaSativa = medidaS[i].value;
        } else {
            percentil = document.getElementById('Percentil').value;
        };
        if (percentil != 0) {
            medidaSativa = percentil / 100;
        };
    };

    return medidaSativa;
};

//#################################################
//######### OBTER DADOS DE FORMA UNICA ############
//#################################################
function Dados(vetDados) {
    let cont = 0;
    let aux = [];
    let fi = [];

    //Cria copia auxiliar dos dados
    for (let j = 0; j < vetDados.length; j++) {
        aux.push(vetDados[j]);
    };

    //Calcula frequencia
    for (let i = 0; i < vetDados.length; i++) {
        for (let j = 0; j < aux.length; j++) {
            if (vetDados[i] == aux[j]) {
                cont++;
                aux.splice(j, 1);
            };
        };
        fi.push(cont);
        cont = 0;
    };

    //REMOVENDO AS FREQUENCIAS IGUAIS A 0
    for (let i = 0; i < vetDados.length; i++) {
        for (let j = 0; j < vetDados.length; j++) {
            if (fi[j] == 0) {
                fi.splice(j, 1);
                vetDados.splice(j, 1);
            };
        };
    };

    //Cria copia auxiliar dos dados
    for (let j = 0; j < vetDados.length; j++) {
        aux.push(vetDados[j]);
    };

    let frequencia = [];
    cont = 0;
    for (let i = 0; i < vetDados.length; i++) {
        for (let j = 0; j < vetDados.length; j++) {
            if (vetDados[i] == aux[j]) {
                cont += fi[j];
                aux.splice(j, 1, 0);
                fi.splice(j, 1, 0);
            };
        };
        frequencia.push(0);
        frequencia[i] = cont;
        cont = 0;
    };

    //REMOVENDO AS FREQUENCIAS IGUAIS A 0
    for (let i = 0; i < vetDados.length; i++) {
        for (let j = 0; j < vetDados.length; j++) {
            if (frequencia[j] == 0) {
                frequencia.splice(j, 1);
                vetDados.splice(j, 1);
            };
        };
    };
    return vetDados;
};

//#################################################
//############# CALCULAR FREQUENCIA ###############
//#################################################
function Frequencia(vetDados) {
    let cont = 0;
    let aux = [];
    let fi = [];

    //Cria copia auxiliar dos dados
    for (let j = 0; j < vetDados.length; j++) {
        aux.push(vetDados[j]);
    };

    //Calcula frequencia
    for (let i = 0; i < vetDados.length; i++) {
        for (let j = 0; j < aux.length; j++) {
            if (vetDados[i] == aux[j]) {
                cont++;
                aux.splice(j, 1);
            };
        };
        fi.push(cont);
        cont = 0;
    };

    //REMOVENDO AS FREQUENCIAS IGUAIS A 0
    for (let i = 0; i < vetDados.length; i++) {
        for (let j = 0; j < vetDados.length; j++) {
            if (fi[j] == 0) {
                fi.splice(j, 1);
                vetDados.splice(j, 1);
            };
        };
    };

    //Cria copia auxiliar dos dados
    for (let j = 0; j < vetDados.length; j++) {
        aux.push(vetDados[j]);
    };

    let frequencia = [];
    cont = 0;
    for (let i = 0; i < vetDados.length; i++) {
        for (let j = 0; j < vetDados.length; j++) {
            if (vetDados[i] == aux[j]) {
                cont += fi[j];
                aux.splice(j, 1, 0);
                fi.splice(j, 1, 0);
            };
        };
        frequencia.push(0);
        frequencia[i] = cont;
        cont = 0;
    };

    //REMOVENDO AS FREQUENCIAS IGUAIS A 0
    for (let i = 0; i < vetDados.length; i++) {
        for (let j = 0; j < vetDados.length; j++) {
            if (frequencia[j] == 0) {
                frequencia.splice(j, 1);
                vetDados.splice(j, 1);
            };
        };
    };

    return frequencia;
};

//#################################################
//####### CALCULAR FREQUENCIA PERCENTUAL ##########
//#################################################
function FreqPercentual(frequencia) {
    let frPercentual = [], total = 0;
    for (let i = 0; i < frequencia.length; i++) {
        total += frequencia[i];
    };
    for (let i = 0; i < frequencia.length; i++) {
        frPercentual[i] = (frequencia[i] / total) * 100;
        frPercentual[i];
    };
    return frPercentual;
};

//#################################################
//####### CALCULAR FREQUENCIA ACUMULADA ###########
//#################################################
function FreqAcumulada(frequencia) {
    let Fac = [];
    let soma = 0;
    for (let i = 0; i < frequencia.length; i++) {
        soma += frequencia[i];
        Fac[i] = soma;
    };
    return Fac;
};

//#################################################
//### CALCULAR FREQUENCIA ACUMULADA PERCENTUAL ####
//#################################################
function FreqAcumuladaPercentual(Fac) {
    let FacPercentual = [], total = 0;
    total = Fac[Fac.length - 1];
    for (let i = 0; i < Fac.length; i++) {
        FacPercentual[i] = (Fac[i] / total) * 100;
        FacPercentual[i].toFixed(2);
    };
    return FacPercentual;
};

//######################################################
//############### CALCULO DA MEDIANA ###################
//######################################################
function mediana(total, fac, dados) {
    mediana = [];
    meio = 0;
    let result = [];
    if (total % 2 == 0) {
        meio = total / 2;
        mediana[0] = meio;
        mediana[1] = meio + 1;

        if (mediana[0] <= fac[0]) {
            mediana[3] = dados[0];
        };
        if (mediana[1] <= fac[0]) {
            mediana[4] = dados[0];
        };

        for (let i = 0; i < fac.length; i++) {
            if (mediana[0] >= fac[i] && mediana[0] < fac[i + 1]) {
                mediana[3] = dados[i + 1];
            };
            if (mediana[1] >= fac[i] && mediana[1] < fac[i + 1]) {
                mediana[4] = dados[i + 1];
            };
        };
        if (mediana[3] == mediana[4]) {
            return mediana[3];
        } else {
            result[0] = mediana[3];
            result[1] = mediana[4];
            return result;
        }
    } else {
        meio = total / 2;
        mediana[0] = Math.round(meio);
        for (let i = 0; i < fac.length; i++) {
            if (mediana[0] <= fac[0]) {
                mediana[3] = dados[0];
            } else if (mediana[0] >= fac[i] && mediana[0] < fac[i + 1]) {
                mediana[3] = dados[i + 1];
            };
        };
        return mediana[3];
    };
};

function criarTabela(conteudo) {
    let teste = document.getElementById('tabela');
    if (teste.children[0] != null) {
        teste.children[0].remove();
    };
    var tabela = document.createElement('table');
        tabela.style.width = "115%"
    var thead = document.createElement("thead");
        thead.style.textAlign = "center"
        thead.style.font = "bold 20px Times New Roman "
        thead.style.backgroundColor = "#444"
        thead.style.color = "#fff"
    var tbody = document.createElement("tbody");
        tbody.style.textAlign = "center";
    var thd = function (i) { return (i == 0) ? "th" : "td"; };
        
    for (var i = 0; i < conteudo.length; i++) {
        var tr = document.createElement("tr");
            tr.style.border = "1px solid #000";
        for (var o = 0; o < conteudo[i].length; o++) {
            var t = document.createElement(thd(i));
            var texto = document.createTextNode(conteudo[i][o]);
            t.appendChild(texto);
            tr.appendChild(t);
        };
        (i == 0) ? thead.appendChild(tr) : tbody.appendChild(tr);
    };

    tabela.appendChild(thead);
    tabela.appendChild(tbody);
    
    return tabela;
};

function graficoPizza(vetDados, frPercentual) {
    let teste = document.getElementById('grafico');
    if (teste.children[0] != null) {
        teste.children[0].remove();
    };

    var dados_pizza = [];
    for (let i = 0; i < vetDados.length; i++) {
        dados_pizza[i] = new Array();
        dados_pizza[i][0] = vetDados[i];
        dados_pizza[i][1] = frPercentual[i];
    };

    var chart = anychart.pie(dados_pizza);

    chart.title('Grafico da tabela qualitativa');

    chart.container('grafico');

    chart.draw();
};

function GraficoDiscreta(vetDados, frPercentual){
    let teste = document.getElementById('grafico');
    if (teste.children[0] != null) {
        teste.children[0].remove();
    };

    var chart = anychart.column();

    chart.animation(true);
    chart.title('Gráfico da tabela discreta');

    var dados_colunas = [];
    for (let i = 0; i < vetDados.length; i++) {
        dados_colunas[i] = new Array();
        dados_colunas[i][0] = vetDados[i];
        dados_colunas[i][1] = frPercentual[i];
    };

    var series = chart.column(dados_colunas);
    series.tooltip().titleFormat('{%X}');
    series.tooltip()
        .position('center-top')
        .anchor('center-bottom')
        .offsetX(0)
        .offsetY(5)
        .format('Quant:{%Value}{groupsSeparator: }');

    chart.yScale().minimum(0);
    chart.yAxis().labels().format('{%Value}{groupsSeparator: }');

    chart.tooltip().positionMode('point');
    chart.interactivity().hoverMode('by-x');

    chart.xAxis().title('Dados');
    chart.yAxis().title('Quantidade (%)');
    
    chart.container('grafico');

    chart.draw();
};

function GraficoContinua(vetDados, frPercentual){
    let teste = document.getElementById('grafico');
    if (teste.children[0] != null) {
        teste.children[0].remove();
    };

    var chart = anychart.column();

    chart.animation(true);
    chart.title('Gráfico da tabela contínua');

    var dados_colunas = [];
    for (let i = 0; i < vetDados.length; i++) {
        dados_colunas[i] = new Array();
        dados_colunas[i][0] = vetDados[i];
        dados_colunas[i][1] = frPercentual[i];
    };

    var series = chart.column(dados_colunas);

    chart.barGroupsPadding(0);

    
    series.tooltip()
        .position('center-top')
        .anchor('center-bottom')
        .offsetX(0)
        .offsetY(5)
        .format('Quant: {%Value}{groupsSeparator: }');

    chart.yScale().minimum(0);
    chart.yAxis().labels().format('{%Value}{groupsSeparator: }');

    chart.tooltip().positionMode('point');
    chart.interactivity().hoverMode('by-x');

    chart.xAxis().title('Dados');
    chart.yAxis().title('Quantidade (%)');
    
    chart.container('grafico');

    chart.draw();
};

function calcular() {
    let tipoProcesso = TipoProcesso();
    let vetDados = [], dados = [], frequencia = [], frPercentual = [], fac = [], facPercentual = [], tabela = new Array(), header = [], total = 0, medianas = 0;
    let resultado = document.getElementById('resultado');
    let ResultTotal, ResultMediana, ResultModa, ResultMedia, ResultDP, ResultDPpercentual, TxtTotal, TxtMediana, TxtModa, TxtMedia, TxtDP, TxtDPpercentual;
    switch (tipoProcesso[0]) {
        case 'qualiNominal':
            vetDados = ObterDados();
            vetDados1 = ObterDados();
            dados = Dados(vetDados);
            frequencia = Frequencia(ObterDados());
            frPercentual = FreqPercentual(frequencia);
            fac = FreqAcumulada(frequencia);
            facPercentual = FreqAcumuladaPercentual(fac);
            total = 0;
            for (let i = 0; i < frequencia.length; i++) {
                total += frequencia[i];
            };

            let teste = document.getElementById('resultado');
            if (teste.children[0] != null) {
                teste.children[0].remove();
            };
            if (teste.children[0] != null) {
                teste.children[0].remove();
            };

            //######################################################
            //############### EXIBIÇÃO DOS DADOS ###################
            //######################################################
            header[0] = ObterVariavel();
            header[1] = "Fi";
            header[2] = "Fr%";
            header[3] = "Fac";
            header[4] = "Fac%";

            tabela[0] = new Array();
            for (let i = 0; i < header.length; i++) {
                tabela[0][i] = header[i];
            };

            for (let i = 0; i < dados.length; i++) {
                tabela[i + 1] = new Array();
                tabela[i + 1][0] = dados[i];
                tabela[i + 1][1] = frequencia[i];
                tabela[i + 1][2] = frPercentual[i].toFixed(2) + "%";
                tabela[i + 1][3] = fac[i];
                tabela[i + 1][4] = facPercentual[i].toFixed(2) + "%";
            };

            document.getElementById('tabela').appendChild(criarTabela(tabela));

            medianas = mediana(total, fac, dados);
            ResultMediana = document.createElement('p'); 
                ResultMediana.style.paddingTop = "2%"; 
                ResultMediana.style.paddingLeft = "5%";          
            TxtMediana = document.createTextNode("Mediana: " + medianas)
            ResultMediana.appendChild(TxtMediana);
            resultado.appendChild(ResultMediana);
            //######################################################
            //############ FIM DA EXIBIÇÃO DOS DADOS ###############
            //######################################################



            //######################################################
            //################## CALCULO DA MODA ###################
            //######################################################
            moda = frequencia.indexOf(Math.max.apply(null, frequencia));
            ResultModa = document.createElement('p');
                ResultModa.style.paddingBottom = "2%";
                ResultModa.style.paddingLeft = "5%";
            TxtModa = document.createTextNode("Moda: " + dados[moda]);
            ResultModa.appendChild(TxtModa);
            resultado.appendChild(ResultModa);
            //######################################################
            //############## FIM DO CALCULO DA MODA ################
            //######################################################

            graficoPizza(vetDados, frPercentual);

            break;

        case 'qualiOrdinal': //QUALITATIVA ORDINAL

            vetDados = ObterDados();
            dados = vetDados.sort();
            frequencia = Frequencia(dados);
            frPercentual = FreqPercentual(frequencia);
            fac = FreqAcumulada(frequencia);
            facPercentual = FreqAcumuladaPercentual(fac);
            total = 0;
            for (let i = 0; i < frequencia.length; i++) {
                total += frequencia[i];
            };

            //######################################################
            //############### EXIBIÇÃO DOS DADOS ###################
            //######################################################
            header[0] = ObterVariavel();
            header[1] = "Fi";
            header[2] = "Fr%";
            header[3] = "Fac";
            header[4] = "Fac%";

            tabela[0] = new Array();
            for (let i = 0; i < header.length; i++) {
                tabela[0][i] = header[i];
            };

            for (let i = 0; i < dados.length; i++) {
                tabela[i + 1] = new Array();
                tabela[i + 1][0] = dados[i];
                tabela[i + 1][1] = frequencia[i];
                tabela[i + 1][2] = frPercentual[i].toFixed(2) + "%";
                tabela[i + 1][3] = fac[i];
                tabela[i + 1][4] = facPercentual[i].toFixed(2) + "%";
            };

            document.getElementById('tabela').appendChild(criarTabela(tabela));

            medianas = mediana(total, fac, dados);
            ResultMediana = document.createElement('p');
                ResultMediana.style.paddingTop = "2%";
                ResultMediana.style.paddingLeft = "5%";
            TxtMediana = document.createTextNode("Mediana: " + medianas)
            ResultMediana.appendChild(TxtMediana);
            resultado.appendChild(ResultMediana);
            //######################################################
            //########### FIM DA EXIBIÇÃO DOS DADOS ################
            //######################################################



            //######################################################
            //################## CALCULO DA MODA ###################
            //######################################################
            moda = frequencia.indexOf(Math.max.apply(null, frequencia));
            ResultModa = document.createElement('p');
                ResultModa.style.paddingBottom = "2%";
                ResultModa.style.paddingLeft = "5%";
            TxtModa = document.createTextNode("Moda: " + dados[moda]);
            ResultModa.appendChild(TxtModa);
            resultado.appendChild(ResultModa);
            //######################################################
            //############## FIM DO CALCULO DA MODA ################
            //######################################################

            graficoPizza(vetDados, frPercentual);

            break;

        case 'quantDiscreta': //QUANTITATIVA DISCRETA

            vetDados = ObterDados();
            vetOrdenado = vetDados.sort((a, b) => a - b);
            frequencia = Frequencia(vetOrdenado);
            frPercentual = FreqPercentual(frequencia);
            fac = FreqAcumulada(frequencia);
            facPercentual = FreqAcumuladaPercentual(fac);
            total = 0;
            for (let i = 0; i < frequencia.length; i++) {
                total += frequencia[i];
            };


            //######################################################
            //############### EXIBIÇÃO DOS DADOS ###################
            //######################################################
            tabela = new Array();
            header = [];
            header[0] = ObterVariavel();
            header[1] = "Fi";
            header[2] = "Fr%";
            header[3] = "Fac";
            header[4] = "Fac%";

            tabela[0] = new Array();
            for (let i = 0; i < header.length; i++) {
                tabela[0][i] = header[i];
            };

            for (let i = 0; i < vetOrdenado.length; i++) {
                tabela[i + 1] = new Array();
                tabela[i + 1][0] = vetOrdenado[i];
                tabela[i + 1][1] = frequencia[i];
                tabela[i + 1][2] = frPercentual[i].toFixed(2) + "%";
                tabela[i + 1][3] = fac[i];
                tabela[i + 1][4] = facPercentual[i].toFixed(2) + "%";
            };

            ResultTotal = document.createElement('p');
                ResultTotal.style.paddingTop = "2%";
                ResultTotal.style.paddingLeft = "5%";
            TxtTotal = document.createTextNode("Total: " + total);
            ResultTotal.appendChild(TxtTotal);
            resultado.appendChild(ResultTotal);

            document.getElementById('tabela').appendChild(criarTabela(tabela));
            //######################################################
            //########### FIM DA EXIBIÇÃO DOS DADOS ################
            //######################################################


            //######################################################
            //############### CALCULO DA MEDIANA ###################
            //######################################################
            medianas = mediana(total, fac, vetOrdenado);
            ResultMediana = document.createElement('p');
                ResultMediana.style.paddingLeft = "5%";
            TxtMediana = document.createTextNode("Mediana: " + medianas)
            ResultMediana.appendChild(TxtMediana);
            resultado.appendChild(ResultMediana);
            //######################################################
            //############# FIM DO CALCULO DA MEDIANA ##############
            //######################################################



            //######################################################
            //################## CALCULO DA MODA ###################
            //######################################################
            moda = frequencia.indexOf(Math.max.apply(null, frequencia));
            ResultModa = document.createElement('p');
                ResultModa.style.paddingLeft = "5%";
            TxtModa = document.createTextNode("Moda: " + vetOrdenado[moda]);
            ResultModa.appendChild(TxtModa);
            resultado.appendChild(ResultModa);
            //######################################################
            //############## FIM DO CALCULO DA MODA ################
            //######################################################



            //######################################################
            //################## CALCULO DA MÉDIA ##################
            //######################################################
            somatoria = 0;
            for (let i = 0; i < vetOrdenado.length; i++) {
                somatoria += vetOrdenado[i] * frequencia[i];
            }
            media = somatoria / total;
            ResultMedia = document.createElement('p');
                ResultMedia.style.paddingLeft = "5%";
            TxtMedia = document.createTextNode("Média: " + media.toFixed(2));
            ResultMedia.appendChild(TxtMedia);
            resultado.appendChild(ResultMedia);
            //######################################################
            //############## FIM DO CALCULO DA MÉDIA ###############
            //######################################################


            //######################################################
            //############ CALCULO DO DESVIO PADRÃO ################
            //######################################################
            somatoria = 0;
            for (let i = 0; i < vetOrdenado.length; i++) {
                somatoria += ((vetOrdenado[i] - media) ** 2) * frequencia[i];
            };
            desvioPadrao = Math.sqrt(somatoria / (total - tipoProcesso[1]));
            DPpercentual = Math.round((desvioPadrao / media) * 100);
            ResultDP = document.createElement('p');
                ResultDP.style.paddingLeft = "5%";
            TxtDP = document.createTextNode("Desvio Padrão: " + desvioPadrao.toFixed(2));
            ResultDP.appendChild(TxtDP);
            resultado.appendChild(ResultDP);
            ResultDPpercentual = document.createElement('p');
                ResultDPpercentual.style.paddingBottom = "2%"
                ResultDPpercentual.style.paddingLeft = "5%";
            TxtDPpercentual = document.createTextNode("Coeficiente de Variação: " + DPpercentual.toFixed(2) + "%");
            ResultDPpercentual.appendChild(TxtDPpercentual);
            resultado.appendChild(ResultDPpercentual);
            //######################################################
            //######### FIM DO CALCULO DO DESVIO PADRÃO ############
            //######################################################

            GraficoDiscreta(vetDados, frPercentual);

            break;

        case 'quantContinua':

            vetDados = ObterDados();            

            Array.min = function (vetDados) {
                return Math.min.apply(Math, vetDados);
            };
            Array.max = function (vetDados) {
                return Math.max.apply(Math, vetDados);
            };
            let maximo = Array.max(vetDados);
            let minimo = Array.min(vetDados);
            let amplitude = maximo - minimo;
            let classe = Math.floor(Math.sqrt(vetDados.length));
            let Ic = 0, k = 0, inferior = minimo, min = minimo;

            for (let i = amplitude + 1; i < 100; i++) {
                if ((i % (classe - 1)) == 0) {
                    Ic = i / (classe - 1);
                    k = classe - 1;
                    break;
                }
                else if ((i % (classe)) == 0) {
                    Ic = i / classe;
                    k = classe;
                    break;
                }
                else if ((i % (classe + 1)) == 0) {
                    Ic = i / (classe + 1);
                    k = classe + 1;
                    break;
                };
            };

            cont = 0, total = 0;

            let intervalo = new Array();
            for(let i = 0; i < k; i++){
                intervalo[i] = new Array();                         
                intervalo[i][0] = inferior;
                intervalo[i][1] = inferior + Ic;
                inferior += Ic;
            };
            
            //Calcula frequencia
            for (let j = 0; j < k; j++) {
                for (let i = 0; i < vetDados.length; i++) {
                    if (vetDados[i] >= intervalo[j][0] && vetDados[i] < intervalo[j][1]){
                        cont++;
                    };
                };
                frequencia.push(cont);
                cont = 0;
            };

            for(let i = 0; i < frequencia.length; i++){
                total += frequencia[i];
            };

            frPercentual = FreqPercentual(frequencia);
            fac = FreqAcumulada(frequencia);
            facPercentual = FreqAcumuladaPercentual(fac);
            
            //######################################################
            //############### EXIBIÇÃO DOS DADOS ###################
            //######################################################
            tabela = new Array();
            header = [];
            header[0] = "Classes";
            header[1] = ObterVariavel();
            header[2] = "Fi";
            header[3] = "Fr%";
            header[4] = "Fac";
            header[5] = "Fac%";

            tabela[0] = new Array();
            for (let i = 0; i < header.length; i++) {
                tabela[0][i] = header[i];
            };

            let ClassesCont = [];
            for (let i = 0; i < k; i++) {
                tabela[i + 1] = new Array();
                tabela[i + 1][0] = i + 1;
                tabela[i + 1][1] = `${intervalo[i][0]} |---- ${intervalo[i][1]}`;
                tabela[i + 1][2] = frequencia[i];
                tabela[i + 1][3] = frPercentual[i].toFixed(2) + "%";
                tabela[i + 1][4] = fac[i];
                tabela[i + 1][5] = facPercentual[i].toFixed(2) + "%";
                min += Ic;
                ClassesCont[i] = intervalo[i][0] + " |---- " + intervalo[i][1];
            };

            ResultTotal = document.createElement('p');
                ResultTotal.style.paddingTop = "2%";
                ResultTotal.style.paddingLeft = "5%";
            TxtTotal = document.createTextNode("Total: " + total);
            ResultTotal.appendChild(TxtTotal);
            resultado.appendChild(ResultTotal);

            document.getElementById('tabela').appendChild(criarTabela(tabela));
            //######################################################
            //########### FIM DA EXIBIÇÃO DOS DADOS ################
            //######################################################



            //######################################################
            //################## CALCULO DA MÉDIA ##################
            //######################################################
            somatoria = 0;
            for (let i = 0; i < k; i++) {
                somatoria += (((intervalo[i][0] + intervalo[i][1]) / 2) * frequencia[i]);
            }
            media = somatoria / total;
            ResultMedia = document.createElement('p');
                ResultMedia.style.paddingLeft = "5%";
            TxtMedia = document.createTextNode("Média: " + media.toFixed(2));
            ResultMedia.appendChild(TxtMedia);
            resultado.appendChild(ResultMedia)
            //######################################################
            //############## FIM DO CALCULO DA MÉDIA ###############
            //######################################################



            //######################################################
            //################## CALCULO DA MODA ###################
            //######################################################
            let maiorFrequencia = Array.max(frequencia);
            let indice = frequencia.indexOf(maiorFrequencia);
            moda = 0;
            moda = (intervalo[indice][0] + intervalo[indice][1]) / 2;
            ResultModa = document.createElement('p');
                ResultModa.style.paddingLeft = "5%";
            TxtModa = document.createTextNode("Moda: " + moda);
            ResultModa.appendChild(TxtModa);
            resultado.appendChild(ResultModa);
            //######################################################
            //############## FIM DO CALCULO DA MODA ################
            //######################################################



            //######################################################
            //################ CALCULO DA MEDIANA ##################
            //######################################################
            let posicao = total / 2;
            medianas = 0;
            if(indice == 0){
                medianas = minimo + ((posicao - 0) / frequencia[indice]) * Ic;
            }else{
                medianas = intervalo[indice][0] + ((posicao - fac[indice - 1]) / frequencia[indice]) * Ic;
            };
            ResultMediana = document.createElement('p');
                ResultMediana.style.paddingLeft = "5%"
            TxtMediana = document.createTextNode("Mediana: " + medianas.toFixed(2));
            ResultMediana.appendChild(TxtMediana);
            resultado.appendChild(ResultMediana);
            //######################################################
            //############# FIM DO CALCULO DA MEDIANA ##############
            //######################################################



            //######################################################
            //############ CALCULO DO DESVIO PADRÃO ################
            //######################################################
            somatoria = 0;
            for (let i = 0; i < k; i++) {
                somatoria += ((((intervalo[i][0] + intervalo[i][1]) / 2) - media) ** 2) * frequencia[i];
            };
            desvioPadrao = Math.sqrt(somatoria / (total - tipoProcesso[1]));
            DPpercentual = Math.round((desvioPadrao / media) * 100);
            ResultDP = document.createElement('p');
                ResultDP.style.paddingLeft = "5%";
            TxtDP = document.createTextNode("Desvio Padrão: " + desvioPadrao.toFixed(2));
            ResultDP.appendChild(TxtDP);
            resultado.appendChild(ResultDP);
            ResultDPpercentual = document.createElement('p');
                ResultDPpercentual.style.paddingBottom = "2%";
                ResultDPpercentual.style.paddingLeft = "5%";
            TxtDPpercentual = document.createTextNode("Coeficiente de Variação: " + DPpercentual.toFixed(2) + "%");
            ResultDPpercentual.appendChild(TxtDPpercentual);
            resultado.appendChild(ResultDPpercentual);
            //######################################################
            //######### FIM DO CALCULO DO DESVIO PADRÃO ############
            //######################################################

            GraficoContinua(ClassesCont, frPercentual)
    };
    //######################################################
    //######### CALCULO DAS MEDIDAS SEPARATRIZES ###########
    //######################################################s
    /*
    document.write(`<input type="radio" name="MedSeparatriz" value="0.25">Quartil 1 <input type="radio" name="MedSeparatriz" value="0.50">Quartil 2 <input type="radio" name="MedSeparatriz" value="0.75">Quartil 3 <input type="radio" name="MedSeparatriz" value="1">Quartil 4<br>`);
    document.write(`<input type="radio" name="MedSeparatriz" value="0.20">Quintil 1 <input type="radio" name="MedSeparatriz" value="0.40">Quintil 2 <input type="radio" name="MedSeparatriz" value="0.60">Quintil 3 <input type="radio" name="MedSeparatriz" value="0.80">Quintil 4 <input type="radio" name="MedSeparatriz" value="1">Quintil 5<br>`);
    document.write(`<input type="radio" name="MedSeparatriz" value="0.10">Deal 1 <input type="radio" name="MedSeparatriz" value="0.20">Deal 2 <input type="radio" name="MedSeparatriz" value="0.30">Deal 3 <input type="radio" name="MedSeparatriz" value="0.40">Deal 4 <input type="radio" name="MedSeparatriz" value="0.50">Deal 5 <input type="radio" name="MedSeparatriz" value="0.60">Deal 6 <input type="radio" name="MedSeparatriz" value="0.70">Deal 7 <input type="radio" name="MedSeparatriz" value="0.80">Deal 8 <input type="radio" name="MedSeparatriz" value="0.90">Deal 9 <input type="radio" name="MedSeparatriz" value="1">Deal 10<br>`);
    document.write(`<input type="text" name="Percentil" placeholder="Percentil" id="Percentil"> <button id="Separatriz">Calcular</button>`);
    */
    //######################################################
    //###### FIM DO CALCULO DAS MEDIDAS SEPARATRIZES #######
    //######################################################
};