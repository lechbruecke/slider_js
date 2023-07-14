let bild = document.querySelector('.img')
let city = document.querySelector('#city')
let meter = document.querySelector('#meter')
let monate = document.querySelector('#monate')
let pfeil_l = document.querySelector('.left-pfeil')
let pfeil_r = document.querySelector('.right-pfeil')

let kollektion_kreise = document.querySelectorAll('.btn-control')
let kollektion_staedte = document.querySelectorAll('.btn-img')

let jetzige = 0

let mass = [
	{
		schluessel_1: './img/img1.png', 
		schluessel_2: 'ROSTOV-ON-DON, ADMIRAL',
		schluessel_3: 'Rostov-on-Don <br> LCD admiral',
		schluessel_4: '81 m2',
		schluessel_5: '3.5 months',
	},
	{
		schluessel_1: './img/img2.png', 
		schluessel_2: 'SOCHI THIEVES',
		schluessel_3: 'Sochi <br> Thieves',
		schluessel_4: '105 m2',
		schluessel_5: '4 months',
	},
	{
		schluessel_1: './img/img3.png', 
		schluessel_2: 'ROSTOV-ON-DON PATRIOTIC',
		schluessel_3: 'Rostov-on-Don <br> Patriotic',
		schluessel_4: '93 m2',
		schluessel_5: '3 months',
	},
]

let f_bild_aendert = (arg)=>{  
	bild.src = mass[arg].schluessel_1
	city.innerHTML = mass[arg].schluessel_3
	meter.innerHTML = mass[arg].schluessel_4
	monate.innerHTML = mass[arg].schluessel_5
	jetzige = arg  
	f_kreisfarbe()
	f_staedtefarbe()
}

let f_kreisfarbe = ()=>{
	for(let i = 0; i < kollektion_kreise.length; i++){
		if(jetzige === i){
			kollektion_kreise[i].classList.add('btn-control_active')
		}
		else{
			kollektion_kreise[i].classList.remove('btn-control_active')
		}
	}
}

let f_staedtefarbe = ()=>{
	for(let i = 0; i < kollektion_staedte.length; i++){
		if(jetzige === i){
			kollektion_staedte[i].classList.add('btn-img_active')
		}
		else{
			kollektion_staedte[i].classList.remove('btn-img_active')
		}
	}
}

let f_staedtename = ()=>{
	for(let i = 0; i < mass.length; i++){
		kollektion_staedte[i].innerHTML = mass[i].schluessel_2
	}
}

pfeil_r.addEventListener(
	'click', 
	()=>{
		let a; 
		if(jetzige === mass.length - 1){  
			a = 0  
		}
		else{
			a = jetzige + 1
		}
		f_bild_aendert(a)
	}
)

pfeil_l.addEventListener(
	'click', 
	()=>{
		let a; 
		if(jetzige === 0){  
			a = mass.length - 1  
		}
		else{
			a = jetzige - 1
		}
		f_bild_aendert(a)
	}
)

for(let i = 0; i < kollektion_kreise.length; i++){
	kollektion_kreise[i].addEventListener(
		'click', 
		()=>{
			f_bild_aendert(i)
		}
	)
}

for(let i = 0; i < kollektion_staedte.length; i++){
	kollektion_staedte[i].addEventListener(
		'click', 
		()=>{
			f_bild_aendert(i)
		}
	)
} 

f_staedtename()
f_bild_aendert(jetzige)
