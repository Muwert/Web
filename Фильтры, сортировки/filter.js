//Фильтрация
let createTable = (data, idTable) => {
    let table = document.getElementById(idTable);
    let tr = document.createElement('tr');
    for ( key in data[0]) {
        let th = document.createElement('th');
        th.innerHTML = key;
        tr.append(th);
    }


    table.append(tr);
    data.forEach((item) => {
        tr = document.createElement("tr");

        for (value in item) {
            let td = document.createElement("td");
            td.innerHTML = item[value];
            tr.append(td);
        }

        table.append(tr);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    createTable(buildings, 'list');

    let searchButton = document.getElementById("search");
    searchButton.addEventListener("click", function () {
        let dataForm = document.getElementById("filter");
        filterTable(buildings, "list", dataForm);
    })

    let clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", function(){clearFilter()});

    setSortSelects(buildings[0], document.getElementById("sort"));
    let SortButton = document.getElementById("Sort_btn");
    SortButton.addEventListener("click", function () {
        let dataForm = document.getElementById("sort");
        sortTable("list", dataForm);
    });

    let First_Set = document.getElementById("sort1");
    First_Set.addEventListener("change", function () {
        changeNextSelect("sort2", First_Set);
    });
    let Second_Set = document.getElementById("sort2");
    Second_Set.addEventListener("change", function () {
        changeNextSelect("sort3", Second_Set);
    });

    let clearsort = document.getElementById("Clear_btn")
    clearsort.addEventListener("click", function(){
        resetSort("list");
        clearTable('list');
        createTable(buildings, 'list');
    })

});

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function(){clearFilter()});

let correspond = {
    'Название отеля': 'Honame',
    'Город': 'Ciname',
    'Сайт': 'Linkname',
    'Рейтинг': ['rayFrom', 'rayTo'],
    'Цена за ночь': ['priceFrom', 'priceTo'],
    'Тип отеля': 'typeHotel'
}

let dataFilter = (dataForm) => {

    let dictFilter = {};

    for(let j = 0; j < dataForm.elements.length; j++) {
        let item = dataForm.elements[j];
        let valInput = item.value;
        if (item.type == "text") {
            valInput = valInput.toLowerCase();
        }   else if (item.type == "number") {
            if (valInput === "") {
                if (item.id.includes("From")) {
                    valInput = Number.NEGATIVE_INFINITY;
                } else if (item.id.includes("To")) {
                    valInput = Number.POSITIVE_INFINITY;
                }
            } else {
                valInput = Number(valInput);
            }
        }
        dictFilter[item.id] = valInput;
    }
    return dictFilter;
}

let filterTable = (data, idTable, dataForm) =>{

    let datafilter = dataFilter(dataForm);

    let tableFilter = data.filter(item => {

        let result = true;

        for(let key in item) {

            let val = item[key];

             if (typeof val == 'string') {
                 val = item[key].toLowerCase();
                 result &&= val.indexOf(datafilter[correspond[key]]) !== -1;
            }
             else if (typeof val === "number") {
                 if (typeof correspond[key] === "object") {
                     result &&= Number(datafilter[correspond[key][0]]) <= val && val <= Number(datafilter[correspond[key][1]]);
                 } else {
                     result &&= datafilter[correspond[key]] === '' ? true : val === Number(datafilter[correspond[key]]);
                 }
             }
            console.log(result)
        }
        return result;
    });

    clearTable(idTable);
    createTable(tableFilter, idTable);
};

function clearTable(idTable) {
    let table = document.getElementById(idTable);
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
};

let clearFilter =() => {
    document.getElementById("filter").reset();
    clearTable("list");
    createTable(buildings, "list");
};

//Сортировка
// формирование полей элемента списка с заданным текстом и значением
let createOption = (str, val) => {
    let item = document.createElement('option');
    item.text = str;
    item.value = val;
    return item;
}

let setSortSelect = (head, sortSelect) => {
    sortSelect.append(createOption('Нет', 0));
    for (let i in head) {
        sortSelect.append(createOption(head[i], Number(i) + 1));
    }
}

let setSortSelects = (data, dataForm) => {
    let head = Object.keys(data);
    let allSelect = dataForm.getElementsByTagName('select');

    for(let j = 0; j < allSelect.length; j++) {
        setSortSelect(head, allSelect[j]);
        if (j != 0) {
            allSelect[j].setAttribute("disabled", "disabled");
        }
    }
};

let changeNextSelect = (nextSelectId, curSelect) => {

    let nextSelect = document.getElementById(nextSelectId);

    if(curSelect.value == 0 ) {
        let allselect = document.getElementsByTagName('select')
        let foundCurrent = false;

        for (let i = 0; i < allselect.length; i++) {
            if (foundCurrent) {
                allselect[i].disabled = true;
            } else if (allselect[i] === curSelect) {
                foundCurrent = true;
            }
        }
    }
    else{
        nextSelect.disabled = false;
        nextSelect.innerHTML = curSelect.innerHTML;
        let selectedOption = curSelect.options[curSelect.selectedIndex];

        for (var i = 0; i < nextSelect.options.length; i++) {
            if (nextSelect.options[i].value === selectedOption.value) {
                nextSelect.remove(i);
                break;
            }
        }
    }
};

let createSortArr = (data) => {
    let sortArr = [];
    let sortSelects = data.getElementsByTagName('select');

    for (let i = 0; i < sortSelects.length; i++) {

        let keySort = sortSelects[i].value;

        if (keySort == 0) {
            break;
        }
        let desc = document.getElementById(sortSelects[i].id + "Desc").checked;
        if(desc==true) sortArr.push({ column: keySort - 1, order: true });
        else sortArr.push({ column: keySort - 1, order: false });
    }
    return sortArr;
};

let sortTable = (idTable, data) => {
    let sortArr = createSortArr(data);

    if (sortArr.length === 0) {
        return false;
    }

    let table = document.getElementById(idTable);
    let rowData = Array.from(table.rows);

    rowData.shift();
    rowData.sort((first, second) => {

        for (let i in sortArr) {
            let key = sortArr[i].column;
            let order = sortArr[i].order ? -1 : 1;

            let one = first.cells[key].innerHTML;
            let two = second.cells[key].innerHTML;

            if (parseFloat(one) && parseFloat(two)){
                one = parseFloat(one);
                two = parseFloat(two);
            }
            if (one > two) return 1 * order
            else if (one < two) return -1 * order
        }
        return 0;
    });

    table.innerHTML = table.rows[0].innerHTML;

    rowData.forEach((item) => {
        table.append(item);
    });
}


let resetSort = (tableid) => {

    let table = document.getElementById(tableid)
    document.getElementById("sort").reset();
    document.getElementById("sort2").disabled = true;
    document.getElementById("sort3").disabled = true;
}

