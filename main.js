// All Impoprt section as Variable
var header = document.getElementById("head");
var main = document.getElementById("itemContainer");
var mBtn = document.getElementById("resMenue");
var Smenu = document.getElementById("sideList");
var close = document.getElementById("close"); 
var navItem = document.getElementById("navUl");
var navLink = document.querySelectorAll("#nav_link > ul > li");

// Slide section 
let slide = document.getElementsByClassName("testCard");
let slideCounter = 0;

function right(){
    if(slideCounter == 0){
    slide[1].style.zIndex = "200";
    slide[1].style.left = "0px";
    slideCounter++;
    initVal.innerText = ival;
    console.log(slideCounter);
    increment();
    }else if(slideCounter == 1){
    slide[2].style.zIndex = "200";
    slide[2].style.left = "0px";
    slideCounter++;
    console.log(slideCounter);
    increment();
    }
}

let optonal = 0;
function left(){
if(slideCounter == 2){
    slide[2].style.zIndex = "200";
    slide[2].style.left = "900px";
    slideCounter++;
    console.log(slideCounter);
    decrement();
    }else if(slideCounter == 3){
    slide[1].style.zIndex = "200";
    slide[1].style.left = "900px";
    slideCounter = 0;
    console.log(slideCounter);
    decrement();
    }
}

document.addEventListener("keydown", (e)=>{
    if(e.key == "ArrowRight"){
        if(slideCounter == 0){
            slide[1].style.zIndex = "200";
            slide[1].style.left = "0px";
            slideCounter++;
            increment();
            console.log(slideCounter);
            }else if(slideCounter == 1){
            slide[2].style.zIndex = "200";
            slide[2].style.left = "0px";
            slideCounter++;
            console.log(slideCounter);
            increment();
        }
    }

    if(e.key == "ArrowLeft"){
        if(slideCounter == 2){
            slide[2].style.zIndex = "200";
            slide[2].style.left = "900px";
            slideCounter++;
            console.log(slideCounter);
            decrement();
            }else if(slideCounter == 3){
            slide[1].style.zIndex = "200";
            slide[1].style.left = "900px";
            slideCounter = 0;
            console.log(slideCounter);
            decrement();
        }
    }
});

let ival = 1;
function increment(){
    let initVal = document.getElementById("initVal");
    ival++;
    if(ival < 4){
        initVal.innerText = ival;
    }else{
        ival = 3;
    }
}
function decrement(){
    let initVal = document.getElementById("initVal");
    ival--;
    if(ival > 0){
        initVal.innerText = ival;
    }else{
        ival = 1;
    }
}

let productNumber = 0;
function addCart(){
    mp3_2();
    productNumber++;
    let counter = document.getElementById("counter");
    counter.innerText = productNumber;
}


// All components 
const home = '<div id="home">\
<div class="box">\
    <img src="organic-products.png">\
</div>\
<div class="box">\
    <div class="img_small">\
        <img src="logo-leaf-new.png">\
    </div>\
    <h3 class="bestquality">best quality product</h3>\
    <h2>join the organic movement!</h2>\
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>\
    <button onclick="mp3();"><ion-icon name="cart"></ion-icon><span>Shop Now</span></button>\
    <img id="fade_img" src="leaves-free-img.png">\
</div>\
</div>';

var service = '<br><br><br><div id="service">\
    <div class="serviceItem">\
        <div class="item">\
            <div class="icon">\
            <ion-icon name="car"></ion-icon>\
            </div>\
            <div class="text"><h4 class="sheading">free shipping</h4><p class="sp">above $5 only</p></div>\
        </div>\
        <div class="item">\
            <div class="icon">\
            <ion-icon name="create"></ion-icon>\
            </div>\
            <div class="text"><h4 class="sheading">sertified organic</h4><p class="sp">100% guarantee</p></div>\
        </div>\
        <div class="item">\
            <div class="icon">\
            <ion-icon name="card"></ion-icon>\
            </div>\
            <div class="text"><h4 class="sheading">huge savings</h4><p class="sp">100% guarantee</p></div>\
        </div>\
        <div class="item">\
            <div class="icon">\
            <ion-icon name="sync"></ion-icon>\
            </div>\
            <div class="text"><h4 class="sheading">easy returns</h4><p class="sp">no question asked</p></div>\
        </div>\
    </div>';


// best product

var bestSell = '<div id="bestsell">\
<div class="box">\
    <img src="logo-leaf-new.png">\
    <h4 class="bestHeading">best selling product</h4>\
</div>\
<div class="box">\
    <div class="item">\
        <div class="img">\
            <img src="product21-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>assorted dry fruits</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button>view products</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button>select options</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product26-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>tea combo</h5></div>\
            <div class="productProce">$212</div>\
            <button>buy on amazone</button>\
        </div>\
    </div>\
    <div class="item">\
    <div class="img">\
        <img src="honey-jar-free-img-600x600.jpg" alt="">\
    </div>\
    <div class="productDitails">\
        <div class="prductName"><h5>organic huney</h5></div>\
        <div class="productProce">$150 - $400</div>\
        <button>view products</button>\
    </div>\
</div>\
</div>\
<div class="box pageination">\
    <span class="ination">\
        <span>1</span>\
        <span>2</span>\
        <span><ion-icon name="arrow-redo-outline"></ion-icon></span>\
    </span>\
</div>\
</div>';

// All product 

var allProduct = '<div id="bestsell" class="productPage">\
<div class="box">\
<img src="logo-leaf-new.png">\
<h3>Shop</h3>\
</div>\
<div class="box">\
    <div class="item">\
        <div class="img">\
            <img src="product26-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>tea combo</h5></div>\
            <div class="productProce">$212</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product21-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>assorted dry fruits</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product26-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>tea combo</h5></div>\
            <div class="productProce">$212</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product21-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>assorted dry fruits</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="honey-jar-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>organic huney</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product26-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>tea combo</h5></div>\
            <div class="productProce">$212</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product21-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>assorted dry fruits</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product26-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>tea combo</h5></div>\
            <div class="productProce">$212</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product21-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>assorted dry fruits</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="honey-jar-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>organic huney</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product26-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>tea combo</h5></div>\
            <div class="productProce">$212</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product21-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>assorted dry fruits</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product26-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>tea combo</h5></div>\
            <div class="productProce">$212</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product21-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>assorted dry fruits</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="honey-jar-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>organic huney</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product26-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>tea combo</h5></div>\
            <div class="productProce">$212</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product21-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>assorted dry fruits</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product26-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>tea combo</h5></div>\
            <div class="productProce">$212</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product21-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>assorted dry fruits</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="honey-jar-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>organic huney</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product26-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>tea combo</h5></div>\
            <div class="productProce">$212</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product21-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>assorted dry fruits</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product26-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>tea combo</h5></div>\
            <div class="productProce">$212</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product21-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>assorted dry fruits</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="honey-jar-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>organic huney</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product26-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>tea combo</h5></div>\
            <div class="productProce">$212</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product21-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>assorted dry fruits</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product26-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>tea combo</h5></div>\
            <div class="productProce">$212</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product21-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>assorted dry fruits</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="honey-jar-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>organic huney</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product26-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>tea combo</h5></div>\
            <div class="productProce">$212</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product21-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>assorted dry fruits</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product26-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>tea combo</h5></div>\
            <div class="productProce">$212</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product21-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>assorted dry fruits</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="honey-jar-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>organic huney</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product26-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>tea combo</h5></div>\
            <div class="productProce">$212</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product21-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>assorted dry fruits</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product26-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>tea combo</h5></div>\
            <div class="productProce">$212</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product21-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>assorted dry fruits</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="honey-jar-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>organic huney</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product26-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>tea combo</h5></div>\
            <div class="productProce">$212</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product21-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>assorted dry fruits</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product26-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>tea combo</h5></div>\
            <div class="productProce">$212</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product21-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>assorted dry fruits</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="honey-jar-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>organic huney</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product26-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>tea combo</h5></div>\
            <div class="productProce">$212</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product21-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>assorted dry fruits</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product26-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>tea combo</h5></div>\
            <div class="productProce">$212</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product21-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>assorted dry fruits</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="honey-jar-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>organic huney</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product26-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>tea combo</h5></div>\
            <div class="productProce">$212</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product21-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>assorted dry fruits</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product26-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>tea combo</h5></div>\
            <div class="productProce">$212</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product21-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>assorted dry fruits</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="honey-jar-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>organic huney</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product26-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>tea combo</h5></div>\
            <div class="productProce">$212</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product21-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>assorted dry fruits</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product26-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>tea combo</h5></div>\
            <div class="productProce">$212</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product21-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>assorted dry fruits</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="honey-jar-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>organic huney</h5></div>\
            <div class="productProce">$150 - $400</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
    <div class="item">\
        <div class="img">\
            <img src="product25-free-img-600x600.jpg" alt="">\
        </div>\
        <div class="productDitails">\
            <div class="prductName"><h5>coffe combo</h5></div>\
            <div class="productProce">$140 - $334</div>\
            <button onclick="addCart();">add to cart</button>\
        </div>\
    </div>\
</div>\
<div class="box pageination">\
</div>\
</div>';

// fresh module 
var freshFurites = '<div id="fresh">\
<div class="con">\
    <img src="leaf-free-img.png">\
</div>\
<div class="con">\
    <div class="card">\
        <h3 id="freshTitle">farm fresh fruits</h3>\
        <br>\
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, at ipsam\ architecto exercitationem eum quae unde cupiditate.</p>\
        <br>\
        <button onclick="mp3();"><ion-icon name="cart"></ion-icon><span>Shop Now</span></button>\
        <div class="spacher"></div>\
        <br><br><br>\
    </div>\
    <div class="card">\
        <h3 id="freshTitle">farm vegatables</h3>\
        <br>\
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, at ipsam \architecto exercitationem eum quae unde cupiditate.</p>\
        <br>\
        <button onclick="mp3();"><ion-icon name="cart"></ion-icon><span>Shop Now</span></button>\
        <div class="spacher"></div>\
        <br><br><br>\
    </div>\
    <div class="card">\
        <h3 id="freshTitle">organic legume</h3>\
        <br>\
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, at ipsam \architecto exercitationem eum quae unde cupiditate.</p>\
        <br>\
        <button onclick="mp3();"><ion-icon name="cart"></ion-icon><span>Shop Now</span></button>\
        <div class="spacher"></div>\
        <br><br><br>\
    </div>\
</div>\
</div>';

// discount module

var discount = '<div id="discunt">\
<h2 id="disHading">get 25% off your first purchase!</h2>\
<div class="btn">\
<button onclick="mp3();"><ion-icon name="cart"></ion-icon><span>Shop Now</span></button>\
</div>\
</div>';


// Customer Slide module

var customerCarosal = ' <div id="mainSlide">\
<div class="sectionTitle">\
    <img src="logo-leaf-new.png">\
    <h3>customer reviews</h3>\
</div>\
<div id="slideCon">\
    <div id="slide"><span id="sleft" onclick="left()"><</span></div>\
    <div id="slideCard">\
        <div class="testCard" id="Tcard">\
            <div class="top">\
                <div class="img">\
                    <img src="client01-free-img.png">\
                </div>\
                <div class="ditals">\
                    <div id="name">John Doe</div>\
                    <div id="post">CEO</div>\
                </div>\
            </div>\
            <div class="bottom">\
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos facere laboriosam <span class="remain"> hic neque, dolores porro laudantium qui nihil incidunt, eius aperiam, eum consequatur id recusandae officiis corporis sunt ut esse.</span></p>\
            </div>\
        </div>\
        <div class="testCard" id="Tcard">\
            <div class="top">\
                <div class="img">\
                    <img src="client02-free-img.png">\
                </div>\
                <div class="ditals">\
                    <div id="name">John Doe</div>\
                    <div id="post">CEO</div>\
                </div>\
            </div>\
            <div class="bottom">\
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos facere laboriosam <span class="remain"> hic neque, dolores porro laudantium qui nihil incidunt, eius aperiam, eum consequatur id recusandae officiis corporis sunt ut esse.</span></p>\
            </div>\
        </div>\
        <div class="testCard" id="Tcard">\
            <div class="top">\
                <div class="img">\
                <img src="client02-free-img.png">\
                </div>\
                <div class="ditals">\
                    <div id="name">John Doe</div>\
                    <div id="post">CEO</div>\
                </div>\
            </div>\
            <div class="bottom">\
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<span \class="remain_2"> Dignissimos facere laboriosam <span class="remain_2"> hic neque, dolores porro laudantium qui nihil incidunt, eius aperiam, eum consequatur id recusandae officiis corporis sunt ut esse.</span></span></p>\
            </div>\
        </div>\
    </div>\
    <div id="slide"><span id="sright" onclick="right()">></span></div>\
</div>\
<div class="slideCounter">\
    <span><span id="initVal">1</span>/<span id="endVal">3</span></span>\
</div>\
</div>';


var company = ' <div id="company">\
            <img src="logo01-free-img.png">\
            <img src="logo02-free-img.png">\
            <img src="logo03-free-img.png">\
            <img src="logo04-free-img.png">\
            <img src="organic-badge-freeimg-1.png">\
            <img src="logo05-free-img.png">\
            </div>';

// ========================= Alli about componnrnt ===========================

var aboutSammry =  ' <div id="about">\
<div class="box">\
    <h3>About Us</h3>\
    <img src="leaf-free-img.png">\
</div>\
<div class="box">\
    <div class="cont">\
        <h3>Lorem ipsum dolor sit amet</h3>\
        <br>\
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur corporis sit recusandae assumenda quia! Quia quos accusantium similique totam id inventore est, fugiat placeat autem, nihil animi maxime et sed, libero ex reprehenderit optio delectus necessitatibus quas ad? Deserunt, corporis fugiat fugit, sequi reiciendis sint rem sapiente natus repellat laboriosam porro delectus veniam eaque esse odio vero consectetur molestias. Tenetur expedita.\
        laudantium odit quos voluptatem dicta dolor, molestiae amet culpa \
        <span id="mARemain">veritatis quidem! Aspernatur voluptatibus odio neque soluta adipisci porro dicta, impedit minima cum magni rerum laboriosam optio nemo\
        <span id="aRemain"> repellendus. Eveniet omnis magni accusamus nostrum! Perspiciatis\
        <br><br>\
        tempora dolor, quidem cupiditate at provident fugiat pariatur explicabo, doloribus error quae aperiam enim nemo laborum. Neque nemo ex animi, numquam enim est ducimus perspiciatis facilis sequi laboriosam ratione distinctio deleniti quae tempore quia exercitationem, eos iusto ullam eligendi architecto totam obcaecati, necessitatibus voluptatem! Voluptas.</span></span></p>\
    </div>\
    <div class="cont">\
        <img src="banner-01.jpg">\
    </div>\
</div>\
</div>';

var population = ' <div id="population">\
<div class="item thanks">\
    <h3>numbers speak for themeslves</h3>\
</div>\
<div class="item">\
    <div id="pcounter">1200+</div>\
    <div class="countnName">curated products</div>\
</div>\
<div class="item">\
    <div id="pcounter">1200+</div>\
    <div class="countnName">curated products</div>\
</div>\
<div class="item">\
    <div id="pcounter">1200+</div>\
    <div class="countnName">curated products</div>\
</div>\
</div>';

var slider = ' <div id="s_about">\
<div class="s_con">\
    <div class="slider">\
        <div id="left"><span id="slideleft" onclick="sleft();"><</span></div>\
            <div class="img">\
                <div class="img_con" id="img_con">\
                    <img src="farming03-free-img.jpg" alt="">\
                    <img src="farming04-free-img.jpg" alt="">\
                    <img src="farming03-free-img.jpg" alt="">\
                </div>\
            </div>\
        <div id="right"><span id="slideright" onclick="srigth();">></span>\</div>\
    </div>\
    <div id="stestiSlider">\
        <div id="stestiSliderLeft"><span id="innerstestiSliderLeft" onclick="leftscs();"><</span>\
        </div>\
        <div id="stestiSliderCon">\
            <div id="ACSC">\
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>\
             <div id="img_box">\
                <img src="client01-free-img.png">\
                <div id="personD">\
                    <div id="name">john</div>\
                    <div id="post">CEO</div>\
                </div>\
            </div>\
            </div>\
            <div id="ACSC">\
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>\
             <div id="img_box">\
                <img src="client01-free-img.png">\
                <div id="personD">\
                    <div id="name">john</div>\
                    <div id="post">CEO</div>\
                </div>\
            </div>\
            </div>\
            <div id="ACSC">\
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>\
             <div id="img_box">\
                <img src="client01-free-img.png">\
                <div id="personD">\
                    <div id="name">john</div>\
                    <div id="post">CEO</div>\
                </div>\
            </div>\
            </div>\
        </div>\
        <div id="stestiSliderRight"><span id="innerstestiSliderRight" onclick="rightscs();">></span></div>\
    </div>\
</div>\
<div class="s_con">\
  <div class="s_con_item box">\
        <div class="s_img_box">\
            <img src="organic-badge-freeimg-1.png">\
            <div class="text">\
                <h3>Certifide Products</h3>\
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam laboriosam illum necessitatibus quis.</p>\
            </div>\
        </div>\
  </div>\
  <div class="s_con_item h2">\
    <h2>we deal with various quality organic products!</h2>\
  </div>\
  <div class="s_con_item leave">\
    <img src="logo-leaf-new.png" alt="">\
  </div>\
  <div class="s_con_item ul">\
    <ul>\
        <li><ion-icon name="checkmark-circle-outline"></ion-icon>&#160;fresh fruits</li>\
        <li><ion-icon name="checkmark-circle-outline"></ion-icon>&#160;dary fruits</li>\
        <li><ion-icon name="checkmark-circle-outline"></ion-icon>&#160;fresh vagetables</li>\
        <li><ion-icon name="checkmark-circle-outline"></ion-icon>&#160;dried vagetables</li>\
    </ul>\
    <ul>\
        <li><ion-icon name="checkmark-circle-outline"></ion-icon>&#160;fresh fruits</li>\
        <li><ion-icon name="checkmark-circle-outline"></ion-icon>&#160;dary fruits</li>\
        <li><ion-icon name="checkmark-circle-outline"></ion-icon>&#160;fresh vagetables</li>\
        <li><ion-icon name="checkmark-circle-outline"></ion-icon>&#160;dried vagetables</li>\
    </ul>\
  </div>\
  <div class="s_con_item button">\
    <button onclick="mp3();"><ion-icon name="cart"></ion-icon>&#160;<span>Shop Now</span></button>\
  </div>\
</div>\
</div>';

var contact = '<div id="contact">\
<div id="contact_con">\
    <h3>contact</h3>\
    <img src="leaf-free-img.png" alt="">\
</div>\
<div id="contact_con">\
    <div class="box">\
        <h2>We are here to help!</h2>\
        <p>Let us know how we can best serve you. Use the contact form to email us or select from the topics below that best fit your needs. It`s an honor to support you in your journey towards better health.</p>\
    </div>\
    <div class="box">\
        <form action="#">\
            <input type="text" required id="name" placeholder="name">\
            <input type="email" required id="email" placeholder="email">\
            <input type="tel" id="phone" placeholder="phone">\
            <textarea id="comment" placeholder="write something about you!"></textarea>\
            <input type="submit" value="Send" onclick="mp3();">\
        </form>\
    </div>\
</div>\
<div id="contact_con">\
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3643.765933379391!2d90.25423617363572!3d24.03931787762651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e6d0d72c04ed%3A0x559b2a5e1643bc5b!2sGazipur%20Network%20System%20(GNS)!5e0!3m2!1sen!2sbd!4v1714637101783!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>\
</div>\
</div>';

let faq = '<div id="faq">\
    <h2>FAQ</h2>\
<div class="toggle" id="toggle">\
    <div id="tHeader" onclick="slideToggle();">\
        <h4>What is Rowe Casa Organics?</h4>\
        <span id="plus">+</span>\
    </div>\
    <p>Rowe Casa Organics is a small business based in New Boston, Texas with a mission to empower individuals with the education, resources, and products that they need to live healthier, more balanced lives. Learn more about us <a href="#">here</a>.</p>\
</div>\
<div class="toggle" id="toggle_2">\
    <div id="tHeader" onclick="slideToggle_2();">\
        <h4>How are your products formulated?</h4>\
        <span id="plus_2">+</span>\
    </div>\
    <p>Our products are made and manufactured by hand in our Texas facility. We are constantly pursuing the best ingredients found in nature along with consulting with organic chemists, master herbalists, naturopaths, certified aromatherapists, and third-party testers to ensure maximum potency, efficacy, and quality with every ingredient and product. We do not test our ingredients or products on animals and ethically source our ingredients, focusing first on land of origin.</p>\
</div>\
<div class="toggle" id="toggle_3">\
    <div id="tHeader" onclick="slideToggle_3();">\
        <h4>Processing and Shipping.</h4>\
        <span id="plus_3">+</span>\
    </div>\
    <p>If you pay for ground or priority shipping, please know the expedited shipping only applies to the package once shipped, as processing times arent taken into consideration.\
    <br>\
    <br>\
    We aim to ship all orders within 2-3 business days but sales and other factors can have an impact.\
    <br>\
    <br>\
    All shipping prices come directly from USPS and we dont have control over the various options offered.</p>\
</div>\
<div class="toggle" id="toggle_4">\
    <div id="tHeader" onclick="slideToggle_4();">\
        <h4>Can I cancel my order?</h4>\
        <span id="plus_4">+</span>\
    </div>\
    <p>We do allow cancellations if your order has not shipped. To request a cancellation, please contact us at <a href="#">info@rowecasaorganics.com</a> for assistance.</p>\
</div>\
<div class="toggle" id="toggle_5">\
    <div id="tHeader" onclick="slideToggle_5();">\
        <h4>What is the return policy?</h4>\
        <span id="plus_5">+</span>\
    </div>\
    <p>To be eligible for a return, your item must be in the same condition as it was received and in its original packaging. You will also need the receipt or proof of purchase. All clothing purchased is final sale and not eligible for returns due to sanitation concerns such as pets, fragrances. To request a return, please contact us at <a href="#">info@rowecasaorganics.com</a> for assistance. If your return is accepted, we will provide clear instructions on how to complete your return.</p>\
</div>\
<div class="toggle" id="toggle_6">\
    <div id="tHeader" onclick="slideToggle_6();">\
        <h4>Do you ship internationally?</h4>\
        <span id="plus_6">+</span>\
    </div>\
    <p>Yes, we offer international shipping. Free shipping does not apply to international orders.</p>\
</div>\
<div class="toggle" id="toggle_7">\
    <div id="tHeader" onclick="slideToggle_7();">\
        <h4>Can I add to my order once it has been placed?</h4>\
        <span id="plus_7">+</span>\
    </div>\
    <p>Unfortunately, we are unable to remove or add products to orders that have already been placed since orders go directly to processing once submitted.</p>\
</div>\
<div class="toggle" id="toggle_8">\
    <div id="tHeader" onclick="slideToggle_8();">\
        <h4>What qualifies a purchase for free shipping?</h4>\
        <span id="plus_8">+</span>\
    </div>\
    <p>Your domestic order total must be $150 dollars after any discounts applied and before taxes to qualify for free shipping. The purchase of gift cards and digital content will not count towards free shipping. Free shipping also does not apply to international orders.</p>\
</div>\
<div class="toggle" id="toggle_9">\
    <div id="tHeader" onclick="slideToggle_9();">\
        <h4>How do I use my Rowe Casa Gift Card?</h4>\
        <span id="plus_9">+</span>\
    </div>\
    <p>Our gift cards can be applied at check out by typing in your gift card number where it says “Discount code or gift card.” Only one gift card can be used per purchase, and gift cards cannot be used with other discount codes. Using a gift card as payment does not affect your order qualifying for free shipping. Use of gift cards during certain promotions may be exempt.</p>\
</div>\
</div>';

var check = '<div id="checkOut">\
<div id="form" class="pageTitle">\
    <h2>Check Out</h2>\
    <img src="leaf-free-img.png" alt="">\
</div>\
<div id="form" class="coupon">\
    <span><ion-icon name="receipt-outline"></ion-icon>&#160;<span>Have a Coupon</span>&#160;<span id="couponClick" onclick="coupon();">Click here to enter your code</span></span>\
    <form action="#" id="couponForm">\
        <input type="text" id="couponVal" placeholder="Enter coupon code">\
        <input type="submit" onclick="mp3();" id="submitCoupon">\
    </form>\
</div>\
<div id="form" class="allForm">\
    <div class="from_box">\
        <div class="formHeader">\
            <h3>Billing ditails</h3>\
        </div>\
        <form action="#">\
            <input type="text" placeholder="name *">\
            <select onclick="mp3_2();">\
                <option value="">Select</option>\
                <option value="bangladesh">Bangladesh</option>\
                <option value="China">China</option>\
                <option value="paskistan">Pakistan</option>\
                <option value="iran">Iran</option>\
                <option value="iraq">Iraq</option>\
                <option value="palastine">Palastine</option>\
                <option value="indonasia">Indonasia</option>\
                <option value="rusia">Rusia</option>\
            </select>\
            <input type="text" placeholder="house & street no *">\
            <input type="tel" placeholder="town / city *">\
            <input type="email" placeholder="email *">\
        </form>\
    </div>\
    <div class="from_box">\
        <div class="formHeader">\
            <h3>Aditional information</h3>\
        </div>\
        <form action="#">\
            <textarea id="note" placeholder="write your order note" id="note"></textarea>\
        </form>\
    </div>\
</div>\
<div id="form" class="order">\
    <div class="order_title">\
        <h3>Your order</h3>\
    </div>\
    <table>\
        <th>Products</th>\
        <th>Subtotal</th>\
        <tr>\
            <td>asorted coffee</td>\
            <td>$200</td>\
        </tr>\
        <tr>\
            <td>asorted coffee</td>\
            <td>$100</td>\
        </tr>\
        <tr>\
            <td>asorted coffee</td>\
            <td>$340</td>\
        </tr>\
        <tr>\
            <td>asorted coffee</td>\
            <td>$480</td>\
        </tr>\
        <tr>\
            <td>asorted coffee</td>\
            <td>$150</td>\
        </tr>\
        <tr>\
            <td><strong>Subtotal</strong></td>\
            <td><strong>$1,270</strong></td>\
        </tr>\
        <tr>\
            <td><strong>Total</strong></td>\
            <td><strong>$1,270</strong></td>\
        </tr>\
    </table>\
</div>\
<div id="form" class="payment">\
    <p>Pay Online(Credit/Debit Card/MobileBanking/NetBanking/bKash) SSLCommerz &&&#160;Paypal</p>\
    <p>Pay securely by Credit/Debit card, Internet banking or Mobile banking through SSLCommerz &&&#160;Paypal</p>\
    <br><hr><br>\
    <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our &#160;<a href="#">privacy policy.</a></p>\
    <div id="orderbutton">\
        <button type="submit" onclick="mp3();">Place order</button>\
    </div>\
</div>\
</div>';

// cart page moule 
var cart = ' <div id="cartPage">\
<div class="pageHeader">\
    <h3>Cart</h3>\
    <img src="leaf-free-img.png">\
</div>\
<div id="table">\
    <table>\
        <th></th>\
        <th>product image</th>\
        <th>product</th>\
        <th>price</th>\
        <th>quantity</th>\
        <th>subtotal</th>\
        <tr>\
            <td><span class="closepd">+</span></td>\
            <td><img src="product21-free-img-600x600.jpg"></td>\
            <td class="cartname">Assorted coffee</td>\
            <td>$400</td>\
            <td><input type="number" value="6"></td>\
            <td>$2400</td>\
        </tr>\
        <tr>\
            <td><span class="closepd">+</span></td>\
            <td><img src="product25-free-img-600x600.jpg"></td>\
            <td class="cartname">Coffee Combo</td>\
            <td>$350</td>\
            <td><input type="number" value="6"></td>\
            <td>$2100</td>\
        </tr>\
        <tr>\
            <td><span class="closepd">+</span></td>\
            <td><img src="product26-free-img-600x600.jpg"></td>\
            <td class="cartname">Tea Combo</td>\
            <td>$150</td>\
            <td><input type="number" value="6"></td>\
            <td>$900</td>\
        </tr>\
        <tr>\
            <td></td>\
            <td></td>\
            <td></td>\
            <td></td>\
            <td></td>\
            <td class="button"><button onclick="mp3();">update cart</button></td>\
        </tr>\
    </table> \
</div>\
<div id="chechOutProcess">\
    <div class="block">\
        <div class="cartTotalHeadding">\
            <h2>Cart Total</h2>\
        </div>\
        <div id="list">\
            <div id="listItem">\
                <div class="listBox"><strong>Subotal</strong></div>\
                <div class="listBox"><span>$5,400</span></div>\
                <div class="listBox"></div>\
            </div>\
            <div id="listItem">\
                <div class="listBox"><strong>Total</strong></div>\
                <div class="listBox"><span>$5,400</span></div>\
                <div class="listBox"></div>\
            </div>\
        </div>\
        <button onclick="mp3_2();">Proceed to Checkout</button>\
    </div>\
</div>\
</div> ';

// MyAccount module

var myAccount = '<div id="myAccount">\
<div class="accountBox">\
    <h3>My Account</h3>\
    <img src="leaf-free-img.png">\
</div>\
<div class="accountBox">\
    <form action="#">\
        <div class="myFormHeader">Sign-up</div>\
        <input type="text" required placeholder="First name*">\
        <input type="text" required placeholder="Lasst name*">\
        <input type="email" required placeholder="Enter your email*">\
        <input type="password" required placeholder="Enter your password*">\
        <button class="submitBtn" type="submit" onclick="mp3_2()">Sign up</button>\
    </form>\
    <form action="#">\
        <div class="myFormHeader">Login</div>\
        <input type="text" required placeholder="Enter your name*">\
        <input type="password" required placeholder="Enter your password*">\
        <button class="submitBtn" type="submit" onclick="mp3_2()">Login</button>\
    </form>\
</div>\
</div>  ';

const homePakege = home + service + bestSell + freshFurites + discount + customerCarosal + company;
navLink[0].addEventListener("click", ()=>{
    mp3();
    main.innerHTML = homePakege; 
})
navLink[1].addEventListener("click", ()=>{
    mp3();
    main.innerHTML = allProduct; 
});

navLink[2].addEventListener("click", ()=>{
    mp3();
    main.innerHTML = aboutSammry + population + slider; 
});
navLink[3].addEventListener("click", ()=>{
    mp3();
    main.innerHTML = contact + faq; 
});
navLink[4].addEventListener("click", ()=>{
    mp3();
});

mBtn.onclick = function(){
    mp3_2();
    Smenu.style.left = "0px";
}

close.onclick = function(){
    mp3();
    Smenu.style.left = "-302px";  
}

let conVal = 0;

function homeMobile(){
    mp3_2();
    main.innerHTML = homePakege;
    Smenu.style.left = "-302px";
}
function allProductMobile(){
    mp3_2();
    main.innerHTML = allProduct;
    Smenu.style.left = "-302px"; 
}

function aboutMobile(){
    mp3_2();
    main.innerHTML = aboutSammry + population + slider;;
    Smenu.style.left = "-302px"; 
}

function contactMobail(){
    mp3_2();
    main.innerHTML = main.innerHTML = contact + faq;
    Smenu.style.left = "-302px"; 
}

function myAccountMobile(){
    mp3_2();
    main.innerHTML = myAccount;
    Smenu.style.left = "-302px"; 
}

function checkMobile(){
    mp3_2();
    main.innerHTML = check;
    Smenu.style.left = "-302px"; 
}

function cartMobile(){
    mp3_2();
    main.innerHTML = cart;
    Smenu.style.left = "-302px"; 
}


function sleft(){
    mp3_2();
    conVal++;
    let img_con = document.getElementById("img_con");
    let slideleft = document.getElementById("slideleft");
    let slideright = document.getElementById("slideright");
    if(conVal == 3){
        img_con.style.left = "-370px";
    }else if(conVal == 4){
        img_con.style.left = "0px";
        slideright.style.display="block";
        slideleft.style.display = "none";
        conVal = 0;
    }
}

function srigth(){
    mp3_2();
    conVal++;
    let img_con = document.getElementById("img_con");
    let slideleft = document.getElementById("slideleft");
    let slideright = document.getElementById("slideright");
    if(conVal == 1){
        img_con.style.left = "-370px";
        console.log(conVal);
    }
    else if(conVal == 2){
        img_con.style.left = "-740px";
        slideright.style.display="none";
        slideleft.style.display = "block";
    }
    console.log(conVal);
}


let scsval = 0;

function leftscs(){
    mp3_2();
    let ACSC = document.querySelectorAll("#ACSC");
    if(scsval == 2){
    ACSC[2].style.zIndex = "30";
    ACSC[2].style.left = "100%";
    scsval++;
    console.log(scsval); 
    }else if( scsval == 3){
    ACSC[1].style.zIndex = "30";
    ACSC[1].style.left = "100%";
    scsval = 0;
    console.log(scsval);
    } 

}

function rightscs(){
    mp3_2();
    let ACSC = document.querySelectorAll("#ACSC");
    if(scsval == 0){
    ACSC[1].style.zIndex = "30";
    ACSC[1].style.left = "0%";
    scsval++;
    console.log(scsval);
    }else if( scsval == 1){
    ACSC[2].style.zIndex = "30";
    ACSC[2].style.left = "0%";
    scsval++;
    console.log(scsval);
    } 
    console.log(scsval)
}

function mp3(){
    var audio = document.getElementById("sound");
    audio.play();
}
function mp3_2(){
    var audio = document.getElementById("sound2");
    audio.play();
}

function slideToggle(){
    mp3_2()
    let dd = document.getElementById("toggle");
    let plus = document.getElementById("plus");
    dd.classList.toggle("heightToggle");
    plus.classList.toggle("rotate");
}
function slideToggle_2(){
    mp3_2()
    let dd = document.getElementById("toggle_2");
    dd.classList.toggle("heightToggle");
    let plus = document.getElementById("plus_2");
    plus.classList.toggle("rotate");
}
function slideToggle_3(){
    mp3_2()
    let dd = document.getElementById("toggle_3");
    dd.classList.toggle("heightToggle");
    let plus = document.getElementById("plus_3");
    plus.classList.toggle("rotate");
}
function slideToggle_4(){
    mp3_2()
    let dd = document.getElementById("toggle_4");
    dd.classList.toggle("heightToggle");
    let plus = document.getElementById("plus_4");
    plus.classList.toggle("rotate");
}

function slideToggle_5(){
    mp3_2()
    let dd = document.getElementById("toggle_5");
    dd.classList.toggle("heightToggle");
    let plus = document.getElementById("plus_5");
    plus.classList.toggle("rotate");
}
function slideToggle_6(){
    mp3_2()
    let dd = document.getElementById("toggle_6");
    dd.classList.toggle("heightToggle");
    let plus = document.getElementById("plus_6");
    plus.classList.toggle("rotate");
}
function slideToggle_7(){
    mp3_2()
    let dd = document.getElementById("toggle_7");
    dd.classList.toggle("heightToggle");
    let plus = document.getElementById("plus_7");
    plus.classList.toggle("rotate");
}
function slideToggle_8(){
    mp3_2()
    let dd = document.getElementById("toggle_8");
    dd.classList.toggle("heightToggle");
    let plus = document.getElementById("plus_8");
    plus.classList.toggle("rotate");
}
function slideToggle_9(){
    mp3_2()
    let dd = document.getElementById("toggle_9");
    dd.classList.toggle("heightToggle");
    let plus = document.getElementById("plus_9");
    plus.classList.toggle("rotate");
}

function coupon(){
    mp3_2();
    let form = document.getElementById("couponForm");
    form.style.visibility = "visible";
}

function checkPage(){
    mp3_2();
    main.innerHTML = check;
}

function cartPage(){
    mp3_2();
    main.innerHTML = cart;
}

function Account(){
    main.innerHTML = myAccount;
}

document.addEventListener("keyup", ()=>{
    mp3_2();
})

window.addEventListener("load", ()=>{
    main.innerHTML += homePakege;
    navItem.addEventListener("click", (selecteditem)=>{
        if(selecteditem.target.classList.contains("link")){
            document.querySelector(".navActive").classList.remove("navActive");
            selecteditem.target.classList.add("navActive");
        }
    });
});