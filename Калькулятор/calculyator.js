function calculate() {
    let h = document.getElementById('input1').value;
    let a = document.getElementById('input2').value;
    let ugol = document.getElementById('input3').value;
    let a_vhod = document.getElementById('input5').value;
    let b_vhod = document.getElementById('input4').value;
    let ugol_vhod = document.getElementById('input6').value;

    
    document.getElementById('input1').onfocus = function() {
        this.classList.remove('error');
    };
    document.getElementById('input2').onfocus = function() {
        this.classList.remove('error');
    };
    document.getElementById('input3').onfocus = function() {
        this.classList.remove('error');
    };
    document.getElementById('input4').onfocus = function() {
        this.classList.remove('error');
    };
    document.getElementById('input5').onfocus = function() {
        this.classList.remove('error');
    };
    document.getElementById('input6').onfocus = function() {
        this.classList.remove('error');
    };

if(document.getElementById('variantVh1').checked) {
    if ((parseFloat(h) <= 0 || isNaN(h) || !isFinite(h) || h==="") && 
        (parseFloat(a) <= 0 || isNaN(a) || !isFinite(a) || a==="") &&
        (parseFloat(ugol) <= 0 || parseFloat(ugol) > 90 || isNaN(ugol) || !isFinite(ugol) || ugol==="")) {
        document.getElementById('input1').classList.add('error');
        document.getElementById('input2').classList.add('error');
        document.getElementById('input3').classList.add('error');
        return false;
    }
       
    if ((parseFloat(h) <= 0 || isNaN(h) || !isFinite(h) || h==="") &&  (parseFloat(ugol) <= 0 || parseFloat(ugol) > 90 || isNaN(ugol) || !isFinite(ugol) || ugol==="")) {
        document.getElementById('input1').classList.add('error');
        document.getElementById('input3').classList.add('error');
        return false;
    }
    if ((parseFloat(h) <= 0 || isNaN(h) || !isFinite(h) || h==="") &&  (parseFloat(a) <= 0 || isNaN(a) || !isFinite(a) || a==="")) {
        document.getElementById('input1').classList.add('error');
        document.getElementById('input2').classList.add('error');
        return false;
    }
    if ((parseFloat(a) <= 0 || isNaN(a) || !isFinite(a) || a==="") &&  (parseFloat(ugol) <= 0 || parseFloat(ugol) > 90 || isNaN(ugol) || !isFinite(ugol) || ugol==="")) {
        document.getElementById('input2').classList.add('error');
        document.getElementById('input3').classList.add('error');
        return false;
    }

    if (parseFloat(h) <= 0 || isNaN(h) || !isFinite(h) || h==="") {
        document.getElementById('input1').classList.add('error');
        return false;
    }
    if (parseFloat(a) <= 0 || isNaN(a) || !isFinite(a) || a==="") {
        document.getElementById('input2').classList.add('error');
        return false;
    }
    if (parseFloat(ugol) <= 0 || parseFloat(ugol) > 90 || isNaN(ugol) || !isFinite(ugol) || ugol==="") {
        document.getElementById('input3').classList.add('error');
        return false;
    }
}
else if (document.getElementById('variantVh2').checked) {
    if ((parseFloat(b_vhod) <= 0 || isNaN(b_vhod) || !isFinite(b_vhod) || b_vhod==="") && 
        (parseFloat(a_vhod) <= 0 || isNaN(a_vhod) || !isFinite(a_vhod) || a_vhod==="") &&
        (parseFloat(ugol_vhod) <= 0 || parseFloat(ugol_vhod) > 90 || isNaN(ugol_vhod) || !isFinite(ugol_vhod) || ugol_vhod==="")) {
        document.getElementById('input4').classList.add('error');
        document.getElementById('input5').classList.add('error');
        document.getElementById('input6').classList.add('error');
        return false;
    }
       
    if ((parseFloat(b_vhod) <= 0 || isNaN(b_vhod) || !isFinite(b_vhod) || b_vhod==="") &&  (parseFloat(ugol_vhod) <= 0 || parseFloat(ugol_vhod) > 90 || isNaN(ugol_vhod) || !isFinite(ugol_vhod) || ugol_vhod==="")) {
        document.getElementById('input4').classList.add('error');
        document.getElementById('input6').classList.add('error');
        return false;
    }
    if ((parseFloat(b_vhod) <= 0 || isNaN(b_vhod) || !isFinite(b_vhod) || b_vhod==="") &&  (parseFloat(a_vhod) <= 0 || isNaN(a_vhod) || !isFinite(a_vhod) || a_vhod==="")) {
        document.getElementById('input4').classList.add('error');
        document.getElementById('input5').classList.add('error');
        return false;
    }
    if ((parseFloat(a_vhod) <= 0 || isNaN(a_vhod) || !isFinite(a_vhod) || a_vhod==="") &&  (parseFloat(ugol_vhod) <= 0 || parseFloat(ugol_vhod) > 90 || isNaN(ugol_vhod) || !isFinite(ugol_vhod) || ugol_vhod==="")) {
        document.getElementById('input5').classList.add('error');
        document.getElementById('input6').classList.add('error');
        return false;
    }

    if (parseFloat(b_vhod) <= 0 || isNaN(b_vhod) || !isFinite(b_vhod) || b_vhod==="") {
        document.getElementById('input4').classList.add('error');
        return false;
    }
    if (parseFloat(a_vhod) <= 0 || isNaN(a_vhod) || !isFinite(a_vhod) || a_vhod==="") {
        document.getElementById('input5').classList.add('error');
        return false;
    }
    if (parseFloat(ugol_vhod) <= 0 || parseFloat(ugol_vhod) > 90 || isNaN(ugol_vhod) || !isFinite(ugol_vhod) || ugol_vhod==="") {
        document.getElementById('input6').classList.add('error');
        return false;
    }

}

    a=parseFloat(a);
    h=parseFloat(h);
    ugol=parseFloat(ugol);
    b_vhod=parseFloat(b_vhod);
    a_vhod=parseFloat(a_vhod);
    ugol_vhod=parseFloat(ugol_vhod);

    let ugolRad = ugol * Math.PI / 180;
    let b = h/Math.sin(ugolRad);

    let ugolRad1 = ugol_vhod * Math.PI / 180;
   
    //элемент для вывода данных 
    let output = document.getElementById('output');

    let sost3 = document.getElementById('task3').checked;
    let sost2 = document.getElementById('task2').checked;
    let sost1 = document.getElementById('task1').checked;

    let sost4 = document.getElementById('task4').checked;
    let sost5 = document.getElementById('task5').checked;
    let sost6 = document.getElementById('task6').checked;

    document.querySelectorAll('input[type=checkbox]').forEach(checkbox => {
        checkbox.addEventListener('focus', () => {
            document.getElementById('find').classList.remove('red');
        });
    });

    document.querySelectorAll('input[type=checkbox]').forEach(checkbox => {
        checkbox.addEventListener('focus', () => {
            document.getElementById('find1').classList.remove('red');
        });
    });
    
    output.innerHTML = "<p>Результат:</p>";

    function perimetr() {
        let p = 2*(a+b);
    
        let newElement1 = document.createElement('p');
        newElement1.innerHTML = "P = " + Math.round(p*100)/100;
        output.appendChild(newElement1);
    }

    function diag() {
        let d1=Math.sqrt(a*a+b*b-2*a*b*Math.cos(ugolRad));
        let d2=Math.sqrt(a*a+b*b+2*a*b*Math.cos(ugolRad));

        let newElement2 = document.createElement('p');
        newElement2.innerHTML = "d1 = " + Math.round(d1*100)/100;
        output.appendChild(newElement2);

        let newElement3 = document.createElement('p');
        newElement3.innerHTML = "d2 = " + Math.round(d2*100)/100;
        output.appendChild(newElement3);
    }

    function square() {
        let s = b*h;

        let newElement4 = document.createElement('p');
        newElement4.innerHTML = "S = " + Math.round(s*100)/100;
        output.appendChild(newElement4);
    }

    function perimetr_2() {
        let p = 2*(a_vhod+b_vhod);
    
        let newElement1 = document.createElement('p');
        newElement1.innerHTML = "P = " + Math.round(p*100)/100;
        output.appendChild(newElement1);
    }

    function diag_2() {
        let d1=Math.sqrt(a_vhod*a_vhod+b_vhod*b_vhod-2*a_vhod*b_vhod*Math.cos(ugolRad1));
        let d2=Math.sqrt(a_vhod*a_vhod+b_vhod*b_vhod+2*a_vhod*b_vhod*Math.cos(ugolRad1));

        let newElement2 = document.createElement('p');
        newElement2.innerHTML = "d1 = " + Math.round(d1*100)/100;
        output.appendChild(newElement2);

        let newElement3 = document.createElement('p');
        newElement3.innerHTML = "d2 = " + Math.round(d2*100)/100;
        output.appendChild(newElement3);
    }

    function square_2() {
        let s = a_vhod*b_vhod*Math.sin(ugolRad1);

        let newElement4 = document.createElement('p');
        newElement4.innerHTML = "S = " + Math.round(s*100)/100;
        output.appendChild(newElement4);
    }
 
    if(document.getElementById('variantVh1').checked) {
        //Периметр
        if (sost1 && !sost2 && !sost3){
            perimetr();
        }
        //Диагонали
        else if (!sost1 && !sost2 && sost3) {
            diag();
        }
        //Площадь
        else if (!sost1 && sost2 && !sost3) {
            square();
        }
        else if (sost1 && sost2 && !sost3) {
            square();
            perimetr();
        }
        else if (sost1 && !sost2 && sost3) {
            diag();
            perimetr();
        }
        else if (sost1 && sost2 && sost3) {
            square();
            perimetr();
            diag();
        }
        else if (!sost1 && sost2 && sost3) {
            square();
            diag();
        }
        else {
            document.getElementById('find').classList.add('red');
            return false;
        }
    }
    else if(document.getElementById('variantVh2').checked) {
        //Периметр
        if (sost4 && !sost5 && !sost6){
            perimetr_2();
        }
        //Диагонали
        else if (!sost4 && !sost5 && sost6) {
            diag_2();
        }
        //Площадь
        else if (!sost4 && sost5 && !sost6) {
            square_2();
        }
        else if (sost4 && sost5 && !sost6) {
            square_2();
            perimetr_2();
        }
        else if (sost4 && !sost5 && sost6) {
            diag_2();
            perimetr_2();
        }
        else if (sost4 && sost5 && sost6) {
            square_2();
            perimetr_2();
            diag_2();
        }
        else if (!sost4 && sost5 && sost6) {
            square_2();
            diag_2();
        }
        else {
            document.getElementById('find1').classList.add('red');
            return false;
        }
    }

    return true;
}

function show(){
    if(document.getElementById('variantVh1').checked) {
        document.getElementById('variant1').classList.remove('hidden');
        document.getElementById('variant2').classList.add('hidden');
        clearResults();
        clear();
    }
    else if(document.getElementById('variantVh2').checked) {
        document.getElementById('variant2').classList.remove('hidden');
        document.getElementById('variant1').classList.add('hidden');
        clearResults();
        clear();
    }

}

function clearResults() {
    document.getElementById('output').innerHTML = '';
}

function clearall() {
    document.getElementById('input1').value = "";
    document.getElementById('input2').value = "";
    document.getElementById('input3').value = "";
    document.getElementById('input4').value = "";
    document.getElementById('input5').value = "";
    document.getElementById('input6').value = "";
    clearResults();
    document.getElementById('task1').checked = false;
    document.getElementById('task2').checked = false;
    document.getElementById('task3').checked = false;
    document.getElementById('task4').checked = false;
    document.getElementById('task5').checked = false;
    document.getElementById('task6').checked = false;

}