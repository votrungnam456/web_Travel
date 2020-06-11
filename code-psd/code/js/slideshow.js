var slideIndex = 0;
showSlides();

function plusSlides() {
    slideIndex++;
    showSlides();
  }
  function minusSlides() {
    slideIndex--;
    showSlides();
  }
// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");

//     var dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     console.log(slides)
//     console.log(slides[slideIndex - 1])
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
//     setTimeout(showSlides, 5000); // Change image every 2 seconds
// }
function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (slideIndex > slides.length) {slideIndex= 1}
     if (slideIndex < 1) {slideIndex= 3}  
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }
   setInterval(plusSlides, 5000);

let trong_nuoc = ["Tp.Hồ Chí Minh", "Hà Nội", "Nha Trang", "Sapa", "Vũng Tàu", "Vịnh Hạ Long", "Cần Thơ", "Đà Lạt", "Hà Giang", "Phú Quốc", "Hội An", "Tuy Hòa - Phú Yên"];
let ngoai_nuoc = ["Mỹ", "Malaysia", "Pháp", "Trung Quốc", "Lào", "Campuchia", "Đài Loan", "Italia", "Nhật Bản", "Thái Lan", "Hàn Quốc", "Singapore"];
trong_nuoc.sort();
ngoai_nuoc.sort();

function clearSelect() {
    let select = document.getElementById("cate2");
    let length = select.options.length;
    for (i = length - 1; i >= 0; i--) {
        select.options[i] = null;
    }
}

function changeSelect() {
    let cate1 = document.getElementById("cate");
    let cate2 = document.getElementById("cate2");
    cate1.addEventListener("click", () => {
        if (cate1.value == "") {
            clearSelect();
            let node = document.createElement("option")
            let content = document.createTextNode("Chọn địa điểm")
            node.appendChild(content)
            cate2.appendChild(node)
            return;
        }
        if (cate1.value == "/trong-nuoc") {
            clearSelect();
            for (let i = 0; i < trong_nuoc.length; i++) {
                let node = document.createElement("option")
                let content = document.createTextNode(trong_nuoc[i])
                node.appendChild(content)
                cate2.appendChild(node)
            }
        } else {
            clearSelect();
            for (let i = 0; i < ngoai_nuoc.length; i++) {
                let node = document.createElement("option")
                let content = document.createTextNode(ngoai_nuoc[i])
                node.appendChild(content)
                cate2.appendChild(node)
            }
        }
    })

}
changeSelect();

function search() {
    let searcher = document.getElementById("searcher");
    let cate2 = document.getElementById("cate2");
    searcher.addEventListener("click", () => {
        if (cate2.value == "Nha Trang") {
            window.open("nhatrang.html", "_self");
            return;
        } else if (cate2.value == "Tp.Hồ Chí Minh") {
            window.open("hcm.html", "_self");
            return;
        } else if (cate2.value == "Sapa") {
            window.open("sapa.html", "_self");
            return;
        } else if (cate2.value == "Vũng Tàu") {
            window.open("vungtau.html", "_self");
            return;
        } else if (cate2.value == "Hà Nội") {
            window.open("hanoi.html", "_self");
            return;
        } else if (cate2.value == "Vịnh Hạ Long") {
            window.open("vinhalong.html", "_self");
            return;
        } else if (cate2.value == "Tuy Hòa - Phú Yên") {
            window.open("tuyhoaphuyen.html", "_self");
            return;
        } else if (cate2.value == "Cần Thơ") {
            window.open("cantho.html", "_self");
            return;
        } else if (cate2.value == "Đà Lạt") {
            window.open("dalat.html", "_self");
            return;
        } else if (cate2.value == "Hà Giang") {
            window.open("hagiang.html", "_self");
            return;
        } else if (cate2.value == "Phú Quốc") {
            window.open("phuquoc.html", "_self");
            return;
        } else if (cate2.value == "Hội An") {
            window.open("hoian.html", "_self");
            return;
        }


    })
}
search();
