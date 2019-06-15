function OpcaoProbabilidadeUniforme() {
    let escolha = document.getElementById("OpcaoUniforme").value;
    let pai = document.getElementById("EscolhaUniforme");
    let filhoMenor = pai.querySelector("#Menorque");
    let filhoMaior = pai.querySelector("#Maiorque");
    let filhoEntre1 = pai.querySelector("#Entre1");
    let filhoEntre2 = pai.querySelector("#Entre2");

    switch (escolha) {
        case "Maior que":
            if (filhoMenor !== null) {
                document.getElementById("Menorque").style.display = "none";
                document.getElementById("Menorque").style.visibility = "hidden";
            };
            if (filhoEntre1 !== null && filhoEntre2 !== null) {
                document.getElementById("Entre1").style.display = "none";
                document.getElementById("Entre1").style.visibility = "hidden";
                document.getElementById("Entre2").style.display = "none";
                document.getElementById("Entre2").style.visibility = "hidden";
            };

            let maior = document.createElement('input');
            maior.type = 'text';
            maior.placeholder = 'Maior que';
            maior.id = "Maiorque";
            maior.classList.add('form-control')
            pai.appendChild(maior);
            break;
        case "Menor que":
            if (filhoMaior !== null) {
                document.getElementById("Maiorque").style.display = "none";
                document.getElementById("Maiorque").style.visibility = "hidden";
            };
            if (filhoEntre1 !== null && filhoEntre2 !== null) {
                document.getElementById("Entre1").style.display = "none";
                document.getElementById("Entre1").style.visibility = "hidden";
                document.getElementById("Entre2").style.display = "none";
                document.getElementById("Entre2").style.visibility = "hidden";
            };

            let menor = document.createElement('input');
            menor.type = 'text';
            menor.placeholder = 'Menor que';
            menor.id = "Menorque";
            menor.classList.add('form-control')
            pai.appendChild(menor);
            break;
        case "Entre":
            if (filhoMaior !== null) {
                document.getElementById("Maiorque").style.display = "none";
                document.getElementById("Maiorque").style.visibility = "hidden";
            };
            if (filhoMenor !== null) {
                document.getElementById("Menorque").style.display = "none";
                document.getElementById("Menorque").style.visibility = "hidden";
            };

            let entre1 = document.createElement('input');
            entre1.type = 'text';
            entre1.placeholder = 'De';
            entre1.id = "Entre1";
            entre1.classList.add('form-control')
            pai.appendChild(entre1);

            let entre2 = document.createElement('input');
            entre2.type = 'text';
            entre2.placeholder = 'Até';
            entre2.id = "Entre2";
            entre2.classList.add('form-control')
            pai.appendChild(entre2);
    };
};

function OpcaoProbabilidadeNormal() {
    let escolha = document.getElementById("OpcaoNormal").value;
    let pai = document.getElementById("EscolhaNormal");
    let filhoMenor = pai.querySelector("#Menorque");
    let filhoMaior = pai.querySelector("#Maiorque");
    let filhoEntre1 = pai.querySelector("#Entre1");
    let filhoEntre2 = pai.querySelector("#Entre2");

    switch (escolha) {
        case "Maior que":
            if (filhoMenor !== null) {
                document.getElementById("Menorque").style.display = "none";
                document.getElementById("Menorque").style.visibility = "hidden";
            };
            if (filhoEntre1 !== null && filhoEntre2 !== null) {
                document.getElementById("Entre1").style.display = "none";
                document.getElementById("Entre1").style.visibility = "hidden";
                document.getElementById("Entre2").style.display = "none";
                document.getElementById("Entre2").style.visibility = "hidden";
            };

            let maior = document.createElement('input');
            maior.type = 'text';
            maior.placeholder = 'Maior que';
            maior.id = "Maiorque";
            maior.classList.add('form-control')
            pai.appendChild(maior);
            break;
        case "Menor que":
            if (filhoMaior !== null) {
                document.getElementById("Maiorque").style.display = "none";
                document.getElementById("Maiorque").style.visibility = "hidden";
            };
            if (filhoEntre1 !== null && filhoEntre2 !== null) {
                document.getElementById("Entre1").style.display = "none";
                document.getElementById("Entre1").style.visibility = "hidden";
                document.getElementById("Entre2").style.display = "none";
                document.getElementById("Entre2").style.visibility = "hidden";
            };

            let menor = document.createElement('input');
            menor.type = 'text';
            menor.placeholder = 'Menor que';
            menor.id = "Menorque";
            menor.classList.add('form-control')
            pai.appendChild(menor);
            break;
        case "Entre":
            if (filhoMaior !== null) {
                document.getElementById("Maiorque").style.display = "none";
                document.getElementById("Maiorque").style.visibility = "hidden";
            };
            if (filhoMenor !== null) {
                document.getElementById("Menorque").style.display = "none";
                document.getElementById("Menorque").style.visibility = "hidden";
            };

            let entre1 = document.createElement('input');
            entre1.type = 'text';
            entre1.placeholder = 'De';
            entre1.id = "Entre1";
            entre1.classList.add('form-control')
            pai.appendChild(entre1);

            let entre2 = document.createElement('input');
            entre2.type = 'text';
            entre2.placeholder = 'Até';
            entre2.id = "Entre2";
            entre2.classList.add('form-control')
            pai.appendChild(entre2);
    };
};

function probabilidadeUniforme() {
    let minimo = parseFloat(document.getElementById('minimo').value);
    let maximo = parseFloat(document.getElementById('maximo').value);
    let opcaoAtiva = document.getElementById("OpcaoUniforme").options[document.getElementById("OpcaoUniforme").selectedIndex].text

    let probab = document.createElement('p');
        probab.style.paddingLeft = "3%";
        probab.style.paddingBottom = "2%";
    let probabilidade, textoProbab, pai;
    pai = document.getElementById('ResultadoUniforme');

    //CALCULAR A MÉDIA
    let media = (minimo + maximo) / 2;
    let med = document.createElement('p');
        med.style.paddingTop = "2%";
        med.style.paddingLeft = "3%";
    let textomed = document.createTextNode('Media: ' + media);
    med.appendChild(textomed);
    pai.appendChild(med);

    //CALCULAR O DESVIO PADRÃO  
    let variancia = ((maximo - minimo) ** 2) / 12
    let desvioPadrao = Math.sqrt(variancia);
    let dp = document.createElement('p');
        dp.style.paddingLeft = "3%";
    let vr = document.createElement('p');
        vr.style.paddingLeft = "3%";
    let textodp = document.createTextNode('Desvio Padrão: ' + desvioPadrao.toFixed(2));
    let textovr = document.createTextNode('Variancia: ' + variancia.toFixed(2));
    dp.appendChild(textodp);
    vr.appendChild(textovr);
    pai.appendChild(dp);
    pai.appendChild(vr)

    //CALCULAR A PROBABILIDADE
    switch (opcaoAtiva) {
        case 'Maior que':
            let maiorQ = document.getElementById('Maiorque').value;
            probabilidade = (1 / (maximo - minimo)) * (maximo - maiorQ);
            textoProbab = document.createTextNode('Probabilidade: ' + (probabilidade * 100).toFixed(2) + '%');
            probab.appendChild(textoProbab);
            pai.appendChild(probab);
            break;
        case 'Entre':
            let entre1 = document.getElementById('Entre1').value;
            let entre2 = document.getElementById('Entre2').value;
            probabilidade = (1 / (maximo - minimo)) * (entre2 - entre1);
            textoProbab = document.createTextNode('Probabilidade: ' + (probabilidade * 100).toFixed(2) + '%');
            probab.appendChild(textoProbab);
            pai.appendChild(probab);
            break;
        case 'Menor que':
            let menorQ = document.getElementById('Menorque').value;
            probabilidade = (1 / (maximo - minimo)) * (menorQ - minimo);
            textoProbab = document.createTextNode('Probabilidade: ' + (probabilidade * 100).toFixed(2) + '%');
            probab.appendChild(textoProbab);
            pai.appendChild(probab);
            break;
    };
};

function probabilidadeBinomial() {
    let p = document.getElementById('Pbinomial').value;
    let q = document.getElementById('Qbinomial').value;
    let n = document.getElementById('Nbinomial').value;
    let k = document.getElementById('Kbinomial').value;
    let vetk = k.split(" ");
    let fatN = fat(n);
    let fatK = [], fatNK = [], anlComb = [];
    let cont = 0, soma = 0;

    while (cont < vetk.length) {
        fatK[cont] = fat(vetk[cont]);
        fatNK[cont] = fat(n - vetk[cont])
        anlComb[cont] = (fatN / (fatK[cont] * fatNK[cont])) * (p ** vetk[cont]) * (q ** (n - vetk[cont]));
        cont++;
    };

    for (let i = 0; i < vetk.length; i++) {
        soma += anlComb[i];
    };

    let mediaBinomial = n * p;
    let variancia = (n * p * q);
    let DPbinomial = Math.sqrt(variancia);

    let med = document.createElement('p');
        med.style.paddingTop = "2%";
        med.style.paddingLeft = "3%";
    let dp = document.createElement('p');
        dp.style.paddingLeft = "3%";
    let vr = document.createElement('p');
        vr.style.paddingLeft = "3%";
    let probab = document.createElement('p');
        probab.style.paddingLeft = "3%";
        probab.style.paddingBottom = "2%";
    let probabilidade, textoProbab, textoMed, textoDP, textovr, pai;
    pai = document.getElementById('ResultadoBinomial');    

    textoMed = document.createTextNode('Média: ' + mediaBinomial.toFixed(2));
    med.appendChild(textoMed);
    pai.appendChild(med);

    textoDP = document.createTextNode('Desvio Padrão: ' + DPbinomial.toFixed(2));
    dp.appendChild(textoDP);
    pai.appendChild(dp);

    textovr = document.createTextNode('Variancia: ' + variancia.toFixed(2));
    vr.appendChild(textovr);
    pai.appendChild(vr);

    textoProbab = document.createTextNode('Probabilidade: ' + (soma * 100).toFixed(2) + "%");
    probab.appendChild(textoProbab);
    pai.appendChild(probab);
};

function probabilidadeNormal() {
    let tabelaDist = {
        "0.1": [0.0000, 0.0040, 0.0080, 0.0120, 0.0160, 0.0199, 0.0239, 0.0279, 0.0319, 0.0359],
        "0.2": [0.0793, 0.0832, 0.0871, 0.0910, 0.0948, 0.0987, 0.1026, 0.1064, 0.1103, 0.1141],
        "0.3": [0.1179, 0.1217, 0.1255, 0.1293, 0.1331, 0.1368, 0.1406, 0.1443, 0.1480, 0.1517],
        "0.4": [0.1554, 0.1591, 0.1628, 0.1664, 0.1700, 0.1736, 0.1772, 0.1808, 0.1844, 0.1879],
        "0.5": [0.1915, 0.1950, 0.1985, 0.2019, 0.2054, 0.2088, 0.2123, 0.2157, 0.2190, 0.2224],
        "0.6": [0.2257, 0.2291, 0.2324, 0.2357, 0.2389, 0.2422, 0.2454, 0.2486, 0.2517, 0.2549],
        "0.7": [0.2580, 0.2611, 0.2642, 0.2673, 0.2704, 0.2734, 0.2764, 0.2794, 0.2823, 0.2852],
        "0.8": [0.2881, 0.2910, 0.2939, 0.2967, 0.2995, 0.3023, 0.3051, 0.3078, 0.3106, 0.3133],
        "0.9": [0.3159, 0.3186, 0.3212, 0.3238, 0.3264, 0.3289, 0.3315, 0.3340, 0.3365, 0.3389],
        "1.0": [0.3413, 0.3438, 0.3461, 0.3485, 0.3508, 0.3531, 0.3554, 0.3577, 0.3599, 0.3621],
        "1.1": [0.3643, 0.3665, 0.3686, 0.3708, 0.3729, 0.3749, 0.3770, 0.3790, 0.3810, 0.3830],
        "1.2": [0.3849, 0.3869, 0.3888, 0.3907, 0.3925, 0.3944, 0.3962, 0.3980, 0.3997, 0.4015],
        "1.3": [0.4032, 0.4049, 0.4066, 0.4082, 0.4099, 0.4115, 0.4131, 0.4147, 0.4162, 0.4177],
        "1.4": [0.4192, 0.4207, 0.4222, 0.4236, 0.4251, 0.4265, 0.4279, 0.4292, 0.4306, 0.4319],
        "1.5": [0.4332, 0.4345, 0.4357, 0.4370, 0.4382, 0.4394, 0.4406, 0.4418, 0.4429, 0.4441],
        "1.6": [0.4452, 0.4463, 0.4474, 0.4484, 0.4495, 0.4505, 0.4515, 0.4525, 0.4535, 0.4545],
        "1.7": [0.4554, 0.4564, 0.4573, 0.4582, 0.4591, 0.4599, 0.4608, 0.4616, 0.4625, 0.4633],
        "1.8": [0.4641, 0.4649, 0.4656, 0.4664, 0.4671, 0.4678, 0.4686, 0.4693, 0.4699, 0.4706],
        "1.9": [0.4713, 0.4719, 0.4726, 0.4732, 0.4738, 0.4744, 0.4750, 0.4756, 0.4761, 0.4767],
        "2.0": [0.4772, 0.4778, 0.4783, 0.4788, 0.4793, 0.4798, 0.4803, 0.4808, 0.4812, 0.4817],
        "2.1": [0.4821, 0.4826, 0.4830, 0.4834, 0.4838, 0.4842, 0.4846, 0.4850, 0.4854, 0.4857],
        "2.2": [0.4861, 0.4864, 0.4868, 0.4871, 0.4875, 0.4878, 0.4881, 0.4884, 0.4887, 0.4890],
        "2.3": [0.4893, 0.4896, 0.4898, 0.4901, 0.4904, 0.4906, 0.4909, 0.4911, 0.4913, 0.4916],
        "2.4": [0.4918, 0.4920, 0.4922, 0.4925, 0.4927, 0.4929, 0.4931, 0.4932, 0.4934, 0.4936],
        "2.5": [0.4938, 0.4940, 0.4941, 0.4943, 0.4945, 0.4946, 0.4948, 0.4949, 0.4951, 0.4952],
        "2.6": [0.4953, 0.4955, 0.4956, 0.4957, 0.4959, 0.4960, 0.4961, 0.4962, 0.4963, 0.4964],
        "2.7": [0.4965, 0.4966, 0.4967, 0.4968, 0.4969, 0.4970, 0.4971, 0.4972, 0.4973, 0.4974],
        "2.8": [0.4974, 0.4975, 0.4976, 0.4977, 0.4977, 0.4978, 0.4979, 0.4979, 0.4980, 0.4981],
        "2.9": [0.4981, 0.4982, 0.4982, 0.4983, 0.4984, 0.4984, 0.4985, 0.4985, 0.4986, 0.4986],
        "3.0": [0.4987, 0.4987, 0.4987, 0.4988, 0.4988, 0.4989, 0.4989, 0.4989, 0.4990, 0.4990],
        "3.1": [0.4990, 0.4991, 0.4991, 0.4991, 0.4992, 0.4992, 0.4992, 0.4992, 0.4993, 0.4993],
        "3.2": [0.4993, 0.4993, 0.4994, 0.4994, 0.4994, 0.4994, 0.4994, 0.4995, 0.4995, 0.4995],
        "3.3": [0.4995, 0.4995, 0.4995, 0.4996, 0.4996, 0.4996, 0.4996, 0.4996, 0.4996, 0.4997],
        "3.4": [0.4997, 0.4997, 0.4997, 0.4997, 0.4997, 0.4997, 0.4997, 0.4997, 0.4997, 0.4998],
        "3.5": [0.4998, 0.4998, 0.4998, 0.4998, 0.4998, 0.4998, 0.4998, 0.4998, 0.4998, 0.4998],
        "3.6": [0.4998, 0.4998, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999],
        "3.7": [0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999],
        "3.8": [0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999],
        "3.9": [0.5000, 0.5000, 0.5000, 0.5000, 0.5000, 0.5000, 0.5000, 0.5000, 0.5000, 0.5000],
        "4.0": [0.5000, 0.5000, 0.5000, 0.5000, 0.5000, 0.5000, 0.5000, 0.5000, 0.5000, 0.5000]
    };

    let mediaNormal = parseFloat(document.getElementById('mediaNormal').value);
    let desviopadraoNormal = parseFloat(document.getElementById('desvioPadrao').value);
    let opcaoAtiva = document.getElementById("OpcaoNormal").options[document.getElementById("OpcaoNormal").selectedIndex].text
    let z = [], zSep = [], doisPrimeiros = [], doisPrimeiros1 = [], probabilidade, linha, linha1, coluna, coluna1, Tb, Tb1;
    let pai = document.getElementById('ResultadoNormal');
    switch (opcaoAtiva) {
        case 'Maior que':
            let maiorQ = parseFloat(document.getElementById('Maiorque').value);
            if (maiorQ > mediaNormal) {
                z[0] = ((maiorQ - mediaNormal) / desviopadraoNormal).toFixed(2);
                zSep = z[0].split('');
                doisPrimeiros[0] = zSep[0];
                doisPrimeiros[1] = zSep[1];
                doisPrimeiros[2] = zSep[2];
                linha = parseFloat(doisPrimeiros.join('')).toFixed(1);
                coluna = parseInt(zSep[3]);
                Tb = tabelaDist[linha][coluna];
                probabilidade = (0.5 - Tb) * 100;
            };
            if (maiorQ < mediaNormal) {
                z[0] = ((maiorQ - mediaNormal) / desviopadraoNormal).toFixed(2);
                zSep = z[0].split('');
                doisPrimeiros[0] = zSep[1];
                doisPrimeiros[1] = zSep[2];
                doisPrimeiros[2] = zSep[3];
                linha = parseFloat(doisPrimeiros.join('')).toFixed(1);
                coluna = parseInt(zSep[4]);
                Tb = tabelaDist[linha][coluna];
                probabilidade = (0.5 - Tb) * 100;
            };
            if (maiorQ == mediaNormal) {
                probabilidade = 0.5 * 100;
            };
            break;
        case 'Entre':
            let entre1 = parseFloat(document.getElementById('Entre1').value);
            let entre2 = parseFloat(document.getElementById('Entre2').value);
            if (entre1 > mediaNormal && entre2 > mediaNormal) {
                z[0] = ((entre1 - mediaNormal) / desviopadraoNormal).toFixed(2);
                z[1] = ((entre2 - mediaNormal) / desviopadraoNormal).toFixed(2);
                zSep[0] = z[0].split('');
                zSep[1] = z[1].split('');
                doisPrimeiros[0] = zSep[0][0];
                doisPrimeiros[1] = zSep[0][1];
                doisPrimeiros[2] = zSep[0][2];

                doisPrimeiros1[0] = zSep[1][0];
                doisPrimeiros1[1] = zSep[1][1];
                doisPrimeiros1[2] = zSep[1][2];

                linha = parseFloat(doisPrimeiros.join('')).toFixed(1);
                coluna = parseInt(zSep[0][3]);
                Tb = tabelaDist[linha][coluna];

                linha1 = parseFloat(doisPrimeiros1.join('')).toFixed(1);
                coluna1 = parseInt(zSep[1][3]);
                Tb1 = tabelaDist[linha1][coluna1];
                probabilidade = (Tb1 - Tb) * 100;
            };
            if (entre1 < mediaNormal && entre2 < mediaNormal) {
                z[0] = ((entre1 - mediaNormal) / desviopadraoNormal).toFixed(2);
                z[1] = ((entre2 - mediaNormal) / desviopadraoNormal).toFixed(2);
                zSep[0] = z[0].split('');
                zSep[1] = z[1].split('');
                doisPrimeiros[0] = zSep[0][1];
                doisPrimeiros[1] = zSep[0][2];
                doisPrimeiros[2] = zSep[0][3];

                doisPrimeiros1[0] = zSep[1][1];
                doisPrimeiros1[1] = zSep[1][2];
                doisPrimeiros1[2] = zSep[1][3];

                linha = parseFloat(doisPrimeiros.join('')).toFixed(1);
                coluna = parseInt(zSep[0][4]);
                Tb = tabelaDist[linha][coluna];

                linha1 = parseFloat(doisPrimeiros1.join('')).toFixed(1);
                coluna1 = parseInt(zSep[1][4]);
                Tb1 = tabelaDist[linha1][coluna1];
                probabilidade = (Tb - Tb1) * 100;
            };
            if (entre1 < mediaNormal && entre2 > mediaNormal) {
                z[0] = ((entre1 - mediaNormal) / desviopadraoNormal).toFixed(2);
                z[1] = ((entre2 - mediaNormal) / desviopadraoNormal).toFixed(2);
                zSep[0] = z[0].split('');
                zSep[1] = z[1].split('');
                doisPrimeiros[0] = zSep[0][1];
                doisPrimeiros[1] = zSep[0][2];
                doisPrimeiros[2] = zSep[0][3];

                doisPrimeiros1[0] = zSep[1][0];
                doisPrimeiros1[1] = zSep[1][1];
                doisPrimeiros1[2] = zSep[1][2];

                linha = parseFloat(doisPrimeiros.join('')).toFixed(1);
                coluna = parseInt(zSep[0][4]);
                Tb = tabelaDist[linha][coluna];

                linha1 = parseFloat(doisPrimeiros1.join('')).toFixed(1);
                coluna1 = parseInt(zSep[1][3]);
                Tb1 = tabelaDist[linha1][coluna1];
                probabilidade = (Tb + Tb1) * 100;
            };
            if (entre1 == mediaNormal && entre2 > mediaNormal) {
                z[1] = ((entre2 - mediaNormal) / desviopadraoNormal).toFixed(2);
                zSep[1] = z[1].split('');

                doisPrimeiros1[0] = zSep[1][0];
                doisPrimeiros1[1] = zSep[1][1];
                doisPrimeiros1[2] = zSep[1][2];

                linha1 = parseFloat(doisPrimeiros1.join('')).toFixed(1);
                coluna1 = parseInt(zSep[1][3]);
                Tb1 = tabelaDist[linha1][coluna1];
                probabilidade = Tb1 * 100;
            };
            if (entre1 < mediaNormal && entre2 == mediaNormal) {
                z[0] = ((entre1 - mediaNormal) / desviopadraoNormal).toFixed(2);
                zSep[0] = z[0].split('');

                doisPrimeiros[0] = zSep[0][1];
                doisPrimeiros[1] = zSep[0][2];
                doisPrimeiros[2] = zSep[0][3];

                linha = parseFloat(doisPrimeiros.join('')).toFixed(1);
                coluna = parseInt(zSep[0][4]);
                Tb = tabelaDist[linha][coluna];
                probabilidade = Tb * 100;
            };
            break;
        case 'Menor que':
            let menorQ = document.getElementById('Menorque').value;
            if (menorQ > mediaNormal) {
                z[0] = ((menorQ - mediaNormal) / desviopadraoNormal).toFixed(2);
                zSep = z[0].split('');
                doisPrimeiros[0] = zSep[0];
                doisPrimeiros[1] = zSep[1];
                doisPrimeiros[2] = zSep[2];
                linha = parseFloat(doisPrimeiros.join('')).toFixed(1);
                coluna = parseInt(zSep[3]);
                Tb = tabelaDist[linha][coluna];
                probabilidade = (0.5 - Tb) * 100;
            };
            if (menorQ < mediaNormal) {
                z[0] = ((menorQ - mediaNormal) / desviopadraoNormal).toFixed(2);
                zSep = z[0].split('');
                doisPrimeiros[0] = zSep[1];
                doisPrimeiros[1] = zSep[2];
                doisPrimeiros[2] = zSep[3];
                linha = parseFloat(doisPrimeiros.join('')).toFixed(1);
                coluna = parseInt(zSep[4]);
                Tb = tabelaDist[linha][coluna];
                probabilidade = (0.5 - Tb) * 100;
            };
            if (menorQ == mediaNormal) {
                probabilidade = 0.5 * 100;
            };
            break;
    };
    let textoProbab = document.createTextNode('Probabilidade: ' + probabilidade.toFixed(2) + "%");
    let probab = document.createElement('p');
        probab.style.paddingLeft = "3%";
        probab.style.paddingBottom = "2%";
        probab.style.paddingTop = "2%";
    probab.appendChild(textoProbab);
    pai.appendChild(probab);
};

function fat(num) {
    if (num < 0) {
        return -1;
    }
    else if (num == 0) {
        return 1;
    }
    else {
        return (num * fat(num - 1));
    };
};