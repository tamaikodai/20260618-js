function sayHello(){
    console.log("こんにちは")
}
sayHello();

function sayHelloName(name){
    console.log("こんにちは,"+ name);
}

sayHelloName("皓大");
sayHelloName("健太");
sayHelloName("航太郎");
sayHelloName("海琉");

function callFunc(elm, price){
    const element = document.querySelector(elm);
    element.textContent = "商品の値段は" + price + "円です";
}

callFunc("p#product1",3000);
callFunc("p#product2",900);
callFunc("p#product3",17000);
callFunc("p#product4",7500);
callFunc("p#product5",1100);