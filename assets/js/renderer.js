jQuery(document).ready(function () {

    let workContainer = jQuery('#recentWorkContainer')
    let packagesContainer = jQuery('#packagesContainer')

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

    const packagesCards = (data) => {
        let lists = ``

        for (let key in data.offer) {
            if (data.offer[key] == true) {
                lists += `
                   <li class="list">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                <g id="SVGRepo_iconCarrier">
                  <path fill="#ffffff"
                    d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
                    clip-rule="evenodd" fill-rule="evenodd"></path>
                </g>
              </svg>
              <span> ${key} </span>
            </li>
                `
            } else {
                lists += `
                
                       <li class="list">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x"
                viewBox="2 2 11 11">
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
              <span> ${key} </span>
            </li>

                `
            }
        }

        let html = `<div class="col-sm-12 col-lg-4 mb-5">
        <div class="pack pack-${data.type}">
          <span class="badge"></span>
          <p class="price">
            ${data.price}
          </p>
          <ul class="lists">
            ${lists}
          </ul>
          <a href="#" class="action reserve" data-pack="${data.type}" data-id="${data.id}">
            Make a reservation
          </a>
        </div>
      </div>`

        return html

    }


    fetch('../../data/recentWork.json').then((r) => {
        return r.json()
    }).then((data) => {
        data.forEach(work => {
            let card = recentWorkCards(work)
            workContainer.append(card)
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

    fetch('../../data/packages.json').then((r) => {
        return r.json()
    }).then((data) => {
        data.forEach(pack => {
            let card = packagesCards(pack)
            packagesContainer.append(card)
        });

        jQuery('.reserve').on('click', (e) => {
            e.preventDefault()
            let type = jQuery(e.target).data('pack')
            let id = jQuery(e.target).data('id')

            console.log(type);
            console.log(id);

            $('#reservation-modal').modal('show')

            // switch (type) {
            //     case "basic":

            //         break;
            //     case "standard":

            //         break;
            //     case "gold":

            //         break;
            //     default:
            //         console.error('unknown type');
            //         break;
            // }
        })

    }).catch((e) => {
        console.error(e);
    })



})