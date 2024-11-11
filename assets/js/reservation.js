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

    jQuery('#ReservationButton').on('click', (e) => {
        e.preventDefault()

        let reserved = jQuery('.reserved')

        let device = jQuery('input[name="device"]:checked').val()

        if (reserved.length == 0) {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "It looks like you didn't choose a pack",
                showConfirmButton: false,
                timer: 3000,
            });
            return
        }

        if (device === undefined) {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "It looks like you didn't choose a device",
                showConfirmButton: false,
                timer: 3000,
            });
            return
        }

        jQuery('#packageOrder').html(`- Package : ${jQuery(reserved).data('pack')}`)
        jQuery('#deviceOrder').html(`- Device : ${device}`)

        jQuery('#orderPackage').val(jQuery(reserved).data('pack'))
        jQuery('#orderDevice').val(device)

        $('#reservation-modal').modal('show')
    })

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
            jQuery('.action').removeClass('reserved')
            jQuery('.action.base').removeClass('base')
            jQuery('.action.standard').removeClass('standard')
            jQuery('.action.gold').removeClass('gold')
            jQuery('input[name="device"]').prop('checked', false);
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



})