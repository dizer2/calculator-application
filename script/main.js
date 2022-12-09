const values = document.querySelector('#values');
const result = document.querySelector('#result');

const buttons =  document.querySelectorAll('.btn')


buttons.forEach((el) => {
	el.onclick = () => {
		console.log(el.id)
		if(el.id === "clear"){
			values.innerText = "";
			result.innerText = "0";

		} else if(el.id === "backspace"){
			let string = values.innerHTML.toString();
			values.innerHTML = string.slice(0, -1);
		}else if(el.id != "" && el.id != "equal"){
			values.innerHTML += el.id;
		}else if(el.id === "equal"){
			let equation = eval(values.innerHTML);
			console.log(equation)
			if(equation == undefined){
				result.innerHTML = "0";
			}else{
				result.innerHTML = equation;
			}
		}
	};
});

$('#light__img').hide();

dark__img.onclick = function(){
	$('#light__img').show();
	$('#dark__img').hide();
	calc.classList.add('calc__dark');
	$('#calc-result').css("color"," #fff");
	$(".btn").addClass("btn__dark");
	$(".btn").removeClass("btn");
	$(".btn--number").addClass("btn--number__dark");
	$(".btn--number").removeClass("btn--number");
	$(".btn--blue-color").addClass("btn--blue-color__dark");
	$(".btn--blue-color").removeClass("btn--blue-color");
	$(".equal").addClass("equal__dark");
	$(".equal").removeClass("equal");

}

light__img.onclick = function(){
	$('#dark__img').show();
	$('#light__img').hide();
	calc.classList.remove('calc__dark');
	$('#calc-result').css("color"," #424242");
	$(".btn__dark").addClass("btn");
	$(".btn").removeClass("btn__dark");
	$(".btn--number__dark").addClass("btn--number");
	$(".btn--blue-color__dark").addClass("btn--blue-color");
	$(".btn--number").removeClass("btn--number__dark");
	$(".btn--blue-color").removeClass("btn--blue-color__dark");
	$(".equal__dark").addClass("equal");

	$(".equal").removeClass("equal__dark");
}