const quizDB=[

{
	question:"Q1 what is the full form of html?",
	a: "hello to my lord",
	b: "hey text markup language",
	c: "hyper text makeup language",
	d: "hyper text markup language",
	ans: "ans4"

},
{
	question:"Q2: what is the full form of css?",
	a: "cascading style sheets",
	b: "cascading style sheep",
	c: "cartoon style sheets",
	d: "cascading super sheet",
	ans: "ans1"
},
{
	question:"Q3: what is the full form of http?",
	a:"hyper text transfer product",
	b: "hyper text test protocol",
	c: "hey transfer protocol",
	d: "hypertext transfer protocol",
	ans: "ans4"
}

];
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const showscore=document.querySelector('#showscore');
let questionCount=0;
let score=0;
const loadQuestion=() =>{
	const questionlist=quizDB[questionCount];
	question.innerText=questionlist.question;
	option1.innerText=questionlist.a;
	option2.innerText=questionlist.b;
	option3.innerText=questionlist.c;
	option4.innerText=questionlist.d;
}
loadQuestion();
const getcheckAnswer=()=>{
	let answer;
	answers.forEach((curans)=>{
		if(curans.checked){
			answer=curans.id;
		}
	});
return answer;
};
const deselect=()=>{
	answers.forEach((curans)=>{
		curans.checked=false;
	});
}
submit.addEventListener('click',()=>{
	const checkedAnswer=getcheckAnswer();
	if(checkedAnswer==quizDB[questionCount].ans){
		score++;
	};

questionCount++;
deselect();
if(questionCount<quizDB.length){
	loadQuestion();
}else{
	showscore.innerHTML= `
	<h3> you scored ${score}/${quizDB.length} &#128526 &#128077</h3>
	<button class="btn" onclick="location.reload()">play again</button>
`;
showscore.classList.remove('scorearea');
}
});
