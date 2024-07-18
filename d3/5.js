
    let dolyas = [
        { 
            "Браузеры": "Google Chrome", 
            "Доля рынка(%)": 63.33 
        },
        { 
            "Браузеры": "Apple Safari", 
            "Доля рынка(%)": 13.13 
        },
        { 
            "Браузеры": "Microsoft Edge", 
            "Доля рынка(%)": 10.46 
        },
        { 
            "Браузеры": "Mozilla Firefox", 
            "Доля рынка(%)": 5.96 
        }
    ];

    let table = d3.select("table");
    let tbody = table.select("tbody");

    function updateTable(data) {
        
        let rows = tbody.selectAll("tr")
            .data(data, d => d["Браузеры"]); 

        
        rows.exit()
            .remove();

        let newRows = rows.enter()
                        .append("tr");

        newRows.selectAll("td")
            .data(d => Object.values(d))
            .enter()
            .append("td")
            .text(d => d);

        rows.selectAll("td")
            .data(d => Object.values(d))
            .text(d => d);
    }

    // Первоначальное отображение таблицы
    updateTable(dolyas);

    function checkPage(vhodDolya) {
        const filteredData = dolyas.filter(d => d["Доля рынка(%)"] >= vhodDolya);
        updateTable(filteredData);
    }

    document.getElementById("change").addEventListener("click", function() {
        const vhodDolya = document.getElementById("Chislo").value;
        checkPage(vhodDolya);
    });