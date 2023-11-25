let search = () => {
    let searchbox = document.getElementById("search-item").value.toUpperCase();
    let product = document.querySelectorAll(".shop-1");
    let no = document.getElementById("when-nohave");
    let matchFound = false;

    for (var i = 0; i < product.length; i++) {
        let pname = product[i].getElementsByTagName('h2')[0];

        if (pname) {
            let textvalue = pname.textContent || pname.innerHTML;
            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
                matchFound = true;
            } else {
                product[i].style.display = "none";
            }
        }
    }

    if (matchFound) {
        no.style.display = "none";
    } else {
        no.innerHTML = "ขออภัยยังไม่มีรายการที่ท่านเลือก";
        no.style.display = "block";
    }
}



// let search = () => {
//     let searchbox = document.getElementById("search-item").value.toUpperCase();
//     let storeitems = document.getElementById("product-list");
//     let product = document.querySelectorAll(".shop-1");
//     let pname =  document.getElementsByTagName("h2");
//     let no = document.getElementById("when-nohave");

//     for (var i=0; i< pname.length; i++){
//         let match = product[i].getElementsByTagName('h2')[0];

//         if(match){
//            let textvalue = match.textContent || match.innerHTML

//            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
//             product[i].style.display = "";
//             no.innerHTML.style.display = "none"
//            }
//            else{
//             product[i].style.display = "none";
//             no.innerHTML = "ยังไม่มีรายการที่ท่านเลือก"
//            }
//         }
//     }
// }


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.opacity = "0.7";
    } else {
        document.getElementById("navbar").style.opacity = "1";
    }
}
