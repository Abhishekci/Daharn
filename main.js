window.onload = function () {
    window.scrollTo(0, 0);
};

function closeWindow() {
    window.close();
    navLinks.forEach(function (link) {
        link.classList.remove('active');
    });

}

window.addEventListener('beforeunload', function () {
    // Get all the nav links
    var navLinks = document.querySelectorAll('.site-navigation .main-menu .nav-link');

    // Remove the active class from each nav link
    navLinks.forEach(function (link) {
        link.classList.remove('active');
    });
});

// *************************** NAV Disabler *************************** //

$(document).ready(function () {
    $('.site-navbar .site-navigation .site-menu>li>a').click(function () {
        // Remove the 'active' class from all navigation items
        $('.site-navbar .site-navigation .site-menu>li>a').removeClass('active');
        // Add the 'active' class to the clicked navigation item
        $(this).addClass('active');
    });
});

//****************************** File Uploads ***********************************/

// ************************ Postoffice image uploaad Preview ********************* //
function previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        const preview = document.getElementById('preview');
        preview.src = reader.result;
        preview.style.display = 'block';
    }

    if (file) {
        reader.readAsDataURL(file);
    }
}

// **************************** online image uploaad Preview ************* //
function previewonlineImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        const preview = document.getElementById('onlinePreview');
        preview.src = reader.result;
        preview.style.display = 'block';
    }

    if (file) {
        reader.readAsDataURL(file);
    }
}

// ********************** Bank image uploaad Preview ***************//

function previewbankImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        const preview = document.getElementById('bankPreview');
        preview.src = reader.result;
        preview.style.display = 'block';
    }

    if (file) {
        reader.readAsDataURL(file);
    }
}

// ********** Txn and IPG No. Interchange funtionality ******************* //

$(document).ready(function () {
    $('#onlineField2').closest('.form-group').hide();
    $('#onlineField3').closest('.form-group').hide();
    $('#onlineField1').on('change', function () {
        var selectedOption = $(this).val();

        if (selectedOption === 'transaction') {
            $('#onlineField2').closest('.form-group').show();
            $('#onlineField3').closest('.form-group').hide();
        } else if (selectedOption === 'ipg') {
            $('#onlineField2').closest('.form-group').hide();
            $('#onlineField3').closest('.form-group').show();
        } else {
            $('#onlineField2').closest('.form-group').hide();
            $('#onlineField3').closest('.form-group').hide();
        }
    });
});


// ********************* input limiter ************************ //

function limitInput(element, maxLength) {
    if (element.value.length > maxLength) {
        element.value = element.value.slice(0, maxLength);
    }
}



$(document).ready(function () {

    function showalert() {
        Swal.fire({
            title: 'Good job!',
            text: 'You clicked the button!',
            icon: 'success'
        }).then(function () {
            // Wait for 2 seconds before opening the new window
            setTimeout(function () {
                window.open('Applicationform.html', 'KSPCPC454', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ',scrollbars=yes');
            }); // 2 seconds delay
        });
    }


    // pop after agreed in instruction page

    $('#nextBtn').click(function () {
        // Check if the "Agree" checkbox is checked
        if ($('#agreeCheckbox').is(':checked')) {
            window.open('Applicationform.html', 'KSPCPC454', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ',scrollbars=yes');
            // Call the showalert() function
            // showalert();
        } else {
            Swal.fire({
                title: 'Please agree',
                text: 'Please agree to the terms and conditions.',
                icon: 'warning'
            });
        }
    });

    $('.login-btn').click(function () {
        window.open('https://localhost:44366/auth/login', 'KSPCPC454', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ',scrollbars=yes');
    });

    $('.login-btn').click(function () {
        window.open('https://localhost:44366/auth/login', 'KSPCPC454', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ',scrollbars=yes');
    });

    $('#nextBtn2').click(function () {
        // Check if the "Agree" checkbox is checked
        if ($('#agreeCheckbox').is(':checked')) {
            window.open('my_application_details.html', 'KSPCPC454', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ',scrollbars=yes');
            // Call the showalert() function
            // showalert();
        } else {
            Swal.fire({
                title: 'Please agree',
                text: 'Please agree to the terms and conditions.',
                icon: 'warning'
            });
        }
    });

    $('.login-btn').click(function () {
        window.open('https://localhost:44366/auth/login', 'KSPCPC454', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ',scrollbars=yes');
    });

    $('.login-btn').click(function () {
        window.open('https://localhost:44366/auth/login', 'KSPCPC454', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ',scrollbars=yes');
    });

});





