function computeCost() {
        let adultsVal = $('#adults').val();
        let checkInVal = moment($('#checkIn').val());
        let checkOutVal = moment($('#checkOut').val());

        let dateDiff = checkOutVal.diff(checkInVal, 'days');

        return 150 * adultsVal * dateDiff;
    }

    $('#adults').bind('change', () => {
        if ($('#checkIn').val() !== '' && $('#checkOut').val() !== '')
            $('#cost').val('' + computeCost());
    });

    $('#checkIn').bind('change', () => {
        if ($('#checkOut').val() !== '') {
            $('#daysScheduled').val(moment($('#checkOut').val()).diff(moment($('#checkIn').val()), 'days'));
            $('#cost').val('' + computeCost());
        }
    });

    $('#checkOut').bind('change', () => {
        if ($('#checkIn').val() !== '') {
            $('#daysScheduled').val(moment($('#checkOut').val()).diff(moment($('#checkIn').val()), 'days'));
            $('#cost').val('' + computeCost());
        }
    });

    /*Removes .has-error class once user has changed their value to non empty one*/
    $('#user').on('change', () => {
        $('#userContainer').removeClass('has-error');
    });

    $('#firstName').on('change', () => {
        $('#firstNameContainer').removeClass('has-error');
    });

    $('#lastName').on('change', () => {
        $('#lastNameContainer').removeClass('has-error');
    });

    $('#phone').on('change', () => {
        $('#phoneContainer').removeClass('has-error');
    });

    $('#fax').on('change', () => {
        $('#faxContainer').removeClass('has-error');
    });

    $('#email').on('change', () => {
        $('#emailContainer').removeClass('has-error');
    })

    /*Reset all input fields in form*/
    $('#resetFormBtn').bind('click', () => {
        $('#user').val('');
        $('#firstName').val('');
        $('#lastName').val('');
        $('#phone').val('');
        $('#fax').val('');
        $('#email').val('');
        $('#adults').val(1);
        $('#checkIn').val('');
        $('#checkOut').val('');
        $('#daysScheduled').val('');
        $('#cost').val('');
        $('#message').val('');
        $('#range').val(0);
        $('input[value="Low"]').prop('checked', true);
        
        $('#userContainer').removeClass('has-error');
        $('#firstNameContainer').removeClass('has-error');
        $('#lastNameContainer').removeClass('has-error');
        $('#phoneContainer').removeClass('has-error');
        $('#faxContainer').removeClass('has-error');
        $('#emailContainer').removeClass('has-error');
      
        toastr.info("Fields were successfully cleared");
    });

    $('#submitFormBtn').bind('click', () => {
        let error = false;
      
        if (!$('#user').val()) {
            document.getElementById('user').classList.add('has-error');
            $('#userContainer').addClass('has-error');
            toastr.error('Username field is empty');
          error = true;
        }
        if (!$('#firstName').val()) {
            $('#firstNameContainer').addClass('has-error');
            toastr.error('First name field is empty');
            error = true;
        }
        if (!$('#lastName').val()) {
            $('#lastNameContainer').addClass('has-error');
            toastr.error('Last name field is empty');
            error = true;
        }
        if (!$('#phone').val()) {
            $('#phoneContainer').addClass('has-error');
            toastr.error('Phone field is empty');
            error = true;
        }
        if (!$('#fax').val()) {
            $('#faxContainer').addClass('has-error');
            toastr.error('Fax field is empty');
            error = true;
        }
        if (!$('#email').val()) {
            $('#emailContainer').addClass('has-error');
            toastr.error('E-mail field is empty');
            error = true;
        }
        if ($('#cost').val() === '') {
            toastr.error('No cost was calculated');
            error = true;
        }
        else if (Number($('#cost').val()) < 0) {
            toastr.error('Cost is negative');
            error = true;
        }
      
        if (!error)
            toastr.success('The form was successfully submitted');
    });