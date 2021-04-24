// On crée l'évenement du clique
let targets = document.querySelectorAll('.wrapper--img')

    targets.forEach(function(img) {
        // console.log(img)
        img.addEventListener('click', function(){

            // On coupe l'animation pour répartir les images
            targets.forEach(function(img, index){
                gsap.to (img, {
                    duration: 1.67, 
                    // top: '50%',
                    scale: 1, 
                    rotation: 0,
                    //on attribut 300 * (index + 1) d'espace pour la premiere photo + (10 * index) soit zéro.
                    // la deuxieme image dispose des mêmes propriétés, 300 * (index + 1) fait 600. L'image se retrouve alors collée, mais grâce à + (10 * index) il y a 10 d'espace.
                    // même principe pour la troisieme image 
                    left: 600 * (index + 1) + (10 * index), 
                    x: '-170px',
                    ease: 'power3.inOut'
                })
            })
        })
    })


    let targets2 = document.querySelectorAll('.wrapper--img-queries')

    targets2.forEach(function(img) {
        // console.log(img)
        img.addEventListener('click', function(){

            // On coupe l'animation pour répartir les images
            targets2.forEach(function(img, index){
                gsap.to (img, {
                    duration: 1.67, 
                    // top: '50%',
                    scale: 1, 
                    rotation: 0,
                    left: 450 * (index + 1) + (10 * index), 
                    x: '-90px',
                    ease: 'power3.inOut'
                })
            })
        })
    })

    let targets3 = document.querySelectorAll('.wrapper--img-queries2')

    targets3.forEach(function(img) {
        // console.log(img)
        img.addEventListener('click', function(){

            // On coupe l'animation pour répartir les images
            targets3.forEach(function(img, index){
                gsap.to (img, {
                    duration: 1.67, 
                    // top: '50%',
                    scale: 1, 
                    rotation: 0,
                    left: 380 * (index + 1) + (10 * index), 
                    x: '-125px',
                    ease: 'power3.inOut'
                })
            })
        })
    })

