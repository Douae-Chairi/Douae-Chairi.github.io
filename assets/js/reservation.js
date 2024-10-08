jQuery(document).ready(() => {

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

    $('.reserve').on('click', (e) => {
        e.preventDefault()
        let type = $(e.target).data('pack')
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
})