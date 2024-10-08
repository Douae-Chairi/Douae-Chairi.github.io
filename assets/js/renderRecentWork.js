jQuery(document).ready(function () {

    let container = jQuery('#recentWorkContainer')

    const recentWorkCards = (data) => {
        //     let html = `
        //     <div>
        //     <div class="card"> <img class="card-img" src="assets/img/${data.img}" alt="${data.title}">
        //       <div class="card-img-overlay"> <a href="#"><img src="assets/img/heart.png" class="heart"
        //             alt="heart icon" data-id="${data.id}"></a>
        //         <div class="bottom-text">
        //           <h5 class="card-title">${data.title}</h5>
        //           <p class="card-text">${data.type}</p>
        //         </div>
        //       </div>
        //     </div>
        //   </div>`

        let html
        if (data.img.indexOf('.mp4') > -1) {
            html = `
                <div>
                    <div class="card"> 
                   <video width="244" height="334" autoplay loop muted>
  <source src="assets/img/${data.img}" type="video/mp4">
  Your browser does not support the video tag.
</video>
     <div class="card-img-overlay">
                        <div class="bottom-text">
                            <h5 class="card-title">${data.title}</h5>
                            <p class="card-text">${data.type}</p>
                        </div>
                    </div>
                    </div>
                </div>`
            return html
        } else {
            html = `
            <div>
                <div class="card"> <img class="card-img" src="assets/img/${data.img}" alt="${data.title}">
                    <div class="card-img-overlay">
                        <div class="bottom-text">
                            <h5 class="card-title">${data.title}</h5>
                            <p class="card-text">${data.type}</p>
                        </div>
                    </div>
                </div>
            </div>`
            return html
        }

    }


    fetch('../../data/recentWork.json').then((r) => {
        return r.json()
    }).then((data) => {
        data.forEach(work => {
            let card = recentWorkCards(work)
            container.append(card)
        });
        jQuery(".owl-carousel2").owlCarousel({
            loop: true,
            center: false,
            margin: 20,
            responsiveClass: true,
            nav: true,
            responsive: {
                0: {
                    items: 2,
                    nav: false,
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 4,
                    nav: true,
                    loop: true
                }
            }
        }
        );

    }).catch((e) => {
        console.log(e);
    })


})