'use strict'
/*
function f1(){
	setTimeout(() => {console.log('f1')}, 1); 
};

function f2(){
	console.log('f2'); 
};

function doSomething(something, callback){
	alert(`I am ${something}() now`);
	callback();
};

function finish(callback) {
	alert('Finished');
	callback();
};

doSomething('sleeping', () => { finish(f2) });

*/

//////////////////////////////////////////////////////////////////

/*
const goodTeacher = Math.round(Math.random());// > 0.5 ? true : false;
console.log(goodTeacher);

const willExam = new Promise(
	(resolve, reject) => {
		if(goodTeacher){ 
			const exam = {
							ps:'passed',
							mk:10
						};
			resolve(exam);
		}else{
			const reason = new Error('RETAKE!');
			reject(reason);
		};
	}
);


const passedExam = function(exam) {
	const happyMessage = `Mark: ${exam.mk}`;
	return Promise.resolve(happyMessage);
};

const dayX = function() {
	willExam
			.then(passedExam)
			.then(text=>{console.log(text)})
			.catch(error=>console.log(error))
			.finally(function() {console.log('To be continue...\n\n\n')})
};

dayX();

*/

////////////////////////////////////////////////////////////////////////

/*
const visa = function(docs){
	console.log('Docs...');
	let promise = new Promise( (resolve, reject) =>	{
		setTimeout(() => {
			Math.random() > 0.5 ? resolve('[+] Visa') : reject('Permission denied');
		}, 1500);
	});
	return promise;
};

const hotel = function(docs){
	console.log('Hotel...');
	return new Promise( (resolve, reject) =>	{
		setTimeout(() => {
			Math.random() > 0.5 ? resolve('[+] Hotel') : reject('Full hotel');
		}, 1500);
	});
};

const ticket = function(docs){
	console.log('Tickets...');
	return new Promise( (resolve, reject) => {
		setTimeout(() => {
			Math.random() > 0.5 ? resolve('[+] Ticket') : reject('Tickets not found');
		}, 1500);
	});
};

visa()
	.then(answer => console.log(answer))
	.then(hotel)
	.then(answer => console.log(answer))
	.then(ticket)
	.then(answer => console.log(answer))
	.then(() => console.log('Lets go fly :)'))
	.catch(error => console.log(error))


*/


//////////////////////////////////////////////////////////////////////


let num = Math.random()*100;
console.log(num);

const spin = new Promise(
	(resolve, reject) => {
		if(num>=80){ 
			resolve('Hi');
		}else{
			reject('Bye');
		};
	}
);
const abcd = function() {
	spin.then(answer => console.log(answer))
	.then(() => setTimeout( () => {console.log('Im a human...')}, 1000))
	.then(() => setTimeout( () => {console.log('...or not')}, 2000))
	.catch(error => console.log(error))
};

abcd();