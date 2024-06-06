function calc(){
    let jo = true;
    let erk = new Date(document.getElementById("erk").value);
    let tav = new Date(document.getElementById("tav").value);
    let napoksz = 0;
    let szoba = Number(document.querySelector('input[name="szoba"]:checked').value);
    let ellatas = Number(document.querySelector('input[name="kaj"]:checked').value);
    let szobak = document.querySelector('input[name="szoba"]:checked');
    let ellatasok = document.querySelector('input[name="kaj"]:checked');
    vendegeksz = Number(document.getElementById('vendeg').value);

    let belteri = document.getElementById("belteri").checked;
    let kulteri = document.getElementById("kulteri").checked;
    let szauna = document.getElementById("szauna").checked;
    let teljes = document.getElementById("teljes").checked;

    let eletkorok = 0;
    let nagykoru = 0;

    let osszeg = 0;

    if (Number.isNaN(Number(document.getElementById("ev1").value))) {
        jo = false;
    } else if (document.getElementById("ev1").value != "" && Number(document.getElementById("ev1").value) > 16) {
        eletkorok++;
        nagykoru++;
    } else if (document.getElementById("ev1").value != "") {
        eletkorok++;
    }

    if (Number.isNaN(Number(document.getElementById("ev2").value))) {
        jo = false;
    } else if (document.getElementById("ev2").value != "" && Number(document.getElementById("ev2").value) > 16) {
        eletkorok++;
        nagykoru++;
    } else if (document.getElementById("ev2").value != "") {
        eletkorok++;
    }

    if (Number.isNaN(Number(document.getElementById("ev3").value))) {
        jo = false;
    } else if (document.getElementById("ev3").value != "" && Number(document.getElementById("ev3").value) > 16) {
        eletkorok++;
        nagykoru++;
    } else if (document.getElementById("ev3").value != "") {
        eletkorok++;
    }

    if (Number.isNaN(Number(document.getElementById("ev4").value))) {
        jo = false;
    } else if (document.getElementById("ev4").value != "" && Number(document.getElementById("ev4").value) > 16) {
        eletkorok++;
        nagykoru++;
    } else if (document.getElementById("ev4").value != "") {
        eletkorok++;
    }

    if (vendegeksz != eletkorok || szoba < vendegeksz || (szoba == 3 && nagykoru > 2) || (szoba == 4 && nagykoru > 2)) {
        jo = false;
    }

    if (erk > tav) {
        jo = false;
    } else {
        napoksz = (tav-erk) / (1000 * 3600 * 24)
    }

    if (teljes && (belteri || kulteri || szauna)) {
        jo = false;
    }

    if (szoba == 1) {
        osszeg += 9000 * napoksz;
    } else if (szoba == 2) {
        osszeg += 15000 * napoksz;
    } else if (szoba == 3) {
        osszeg += 18000 * napoksz;
    } else if (szoba == 4) {
        osszeg += 21000 * napoksz;
    } else {
        jo = false;
    }

    if (ellatas == 1) {
        osszeg += 900 * napoksz;
    } else if (ellatas == 2) {
        osszeg += 2900 * napoksz;
    } else if (ellatas == 3) {
        osszeg += 4900 * napoksz;
    } else {
        jo = false;
    }

    let szolgaltatas = "";

    if (teljes) {
        osszeg += 2000 * vendegeksz * napoksz;
        szolgaltatas = "Teljes szolgaltatas"
    }
    if (belteri) {
        osszeg += 800 * vendegeksz * napoksz;
        szolgaltatas = "Belteri "
    }
    if (kulteri) {
        osszeg += 800 * vendegeksz * napoksz;
        szolgaltatas += "Kulteri "
    }
    if (szauna) {
        osszeg += 800 * vendegeksz * napoksz;
        szolgaltatas += "Szauna"
    }


    let szobanev;
    if (szobak== null) {
        jo = false;
    } else {
        szobak= Number(szobak.value);
        switch (szobak) {
            case 1:
                szobanev = "Egyágyas"
                break;
            case 2:
                szobanev = "Kétágyas"
                break;
            case 3:
                szobanev = "Kétágyas 1 pótággyal"
                break;
            case 4:
                szobanev = "Kétágyas 2 pótággyal"
                break;
        }
    }

    
    let ellatasnev;
    if (ellatasok == null) {
        jo = false;
    } else {
        ellatasok = Number(ellatasok.value);
        switch (ellatasok) {
            case 1:
                ellatasnev = "Reggeli"
                break;
            case 2:
                ellatasnev = "Félpanzió"
                break;
            case 3:
                ellatasnev = "Teljes panzió"
                break;
        }
    }






    if (jo) {
        alert(`Kedves Vendégünk! \n\n
        Tájékoztatjuk sikeres foglalásról \n\n
        Érkezés: ${erk.toLocaleDateString()}\n
        Távozás: ${tav.toLocaleDateString()}\n
        Szoba típusa: ${szobanev}\n
        Vendégek száma ${vendegeksz} fő\n
        Ellátás: ${ellatasnev}\n
        Igényelt szolgáltatások: ${szolgaltatas}\n
        A teljes összeg: ${osszeg} Ft.\n\n
        Köszönjük megrendelését!`)

        
    } else {
        alert("legyszi jol csinald")
    }
}