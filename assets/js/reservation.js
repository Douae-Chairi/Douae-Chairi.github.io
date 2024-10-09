jQuery(document).ready(() => {

    jQuery('#reservation-modal').on('hide.bs.modal', () => {
        console.log("modal closed !!");
    })

    const basic = {
        price: 50,
        features: []
    }
    const standard = {
        price: 75,
        features: []
    }
    const gold = {
        price: 100,
        features: []
    }

    // jQuery('#sendReservation').on('click', (e) => {
    //     e.preventDefault()
    //     console.log("i will handel the submit myself !!");
    //     let formData = jQuery('#reservationForm').serialize()
    //     console.log(formData);
    // })

    const form = document.getElementById('reservationForm');
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        jQuery("#pageloader").fadeIn();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
            method: 'POST',
            body: data,
        }).then(r => {
            return r.json()
        }).then(d => {
            jQuery("#pageloader").fadeOut();
            $('#reservation-modal').modal('hide')
            form.reset();
            Swal.fire({
                position: "center",
                // icon: "success",
                iconHtml: '<img src="https://picsum.photos/100/100">',
                title: "Thank you for choosing us &#128582;",
                showConfirmButton: false,
                timer: 3000,
                customClass: {
                    icon: 'no-border'
                }
            });
        }).catch(e => {
            console.log(e.message);
        })
    });

    // jQuery('#reservationForm').on('submit', (e) => {
    //     e.preventDefault();
    //     jQuery("#pageloader").fadeIn();
    //     const data = new FormData(form);
    //     const action = jQuery(e.target).action;
    //     console.log(data);
    //     console.log(action);

    //     // fetch(action, {
    //     //     method: 'POST',
    //     //     body: data,
    //     // }).then(r => {
    //     //     return r.json()
    //     // }).then(d => {
    //     //     Swal.fire({
    //     //         position: "center",
    //     //         icon: "success",
    //     //         title: d.result,
    //     //         showConfirmButton: false,
    //     //         timer: 1500
    //     //     });
    //     // }).catch(e => {
    //     //     console.log(e.message);
    //     // })
    // })

})