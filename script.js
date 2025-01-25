var timeline = gsap.timeline({
    scrollTrigger:{
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: 1.5,
        //markers: true, //DEPURAÇÂO
    },
});

timeline.to(
    '#fanta',
    {
        top: '120%',
        left: '0%',
    },
    'orange'
)

timeline.to(
    '#laranja-cortada',
    {
        top: '160%',
        left: '23%',
    },
    'orange'
)

timeline.to(
    '#laranja',
    {
        width: '15%',
        top: '165%',
        right: '10%',
    },
    'orange'
)

timeline.to(
    '#folha1',
    {
        top: '110%',
        rotate: '130deg',
        left: '70%',
    },
    'orange'
)

timeline.to(
    '#folha2',
    {
        top: '110%',
        rotate: '130deg',
        left: '0%',
    },
    'orange'
)

var timeline2 = gsap.timeline({
    scrollTrigger:{
        trigger: '.three',
        start: '0% 95%',
        end: '0% 50%', //50% da altura do topo da tela quando estiver a 20% da seção three
        scrub: 1.5,
        //markers: true, //DEPURAÇÂO
    },
});

timeline2.from(
    '.lemon1',{
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
    },
    'ca'
) 

timeline2.from(
    '#cocacola',{
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
    },
    'ca'
) 

timeline2.from(
    '.lemon2',{
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
) 

timeline2.from(
    '#sprite',{
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
) 

timeline2.to(
    '#laranja-cortada',
    {
        width: '18%',
        left: '41%',
        top: '204%',
    },
    'ca'
)

timeline2.to(
    '#fanta',
    {
        width: '35%',
        left: '32.5%',
        top: '215%',
    },
    'ca'
)

document.getElementById('link-descricao').addEventListener('click', function (e) {
    e.preventDefault();
    gsap.to(window, {
        duration: 1, // Duração da rolagem (1 segundo)
        scrollTo: { y: ".two", offsetY: 50 }, // Alvo da rolagem
        ease: "power2.inOut" // Suavidade
    });
});

document.getElementById('link-produtos').addEventListener('click', function (e) {
    e.preventDefault();
    gsap.to(window, {
        duration: 1, // Duração da rolagem (1 segundo)
        scrollTo: { y: ".three", offsetY: 50 }, // Alvo da rolagem
        ease: "power2.inOut" // Suavidade
    });
});

document.getElementById('link-home').addEventListener('click', function (e) {
    e.preventDefault();
    gsap.to(window, {
        duration: 1, // Duração da rolagem (1 segundo)
        scrollTo: { y: ".hero", offsetY: 50 }, // Alvo da rolagem
        ease: "power2.inOut" // Suavidade
    });
});
