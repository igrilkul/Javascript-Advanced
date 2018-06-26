function validate() {
    // TODO

    let username=$('#username');
    let pass = $('#password');
    let confirm = $('#confirm-password');
    let email = $('#email');
    let company = $('#company');
    let companyNumber = $('#companyNumber');
    let companyInfo = $('#companyInfo');
    let button = $('#submit');

    //Regex
    let usernameRegex=/^[A-Za-z\d]{3,20}$/g;
    let passRegex=/^\w{5,15}$/g;
    let emailRegex=/\w+@\w+\.\w+(\.\w+)*/g;

    let isValid = true;

    company.on('change',function () {
        if(company.is(':checked')){
            companyInfo.css('display','block');
        }
        else
        {
            companyInfo.css('display','none');
        }

    });

    button.on('click',function (ev) {
        ev.preventDefault();

       validateForm(username,pass,confirm,email,company,companyInfo,companyNumber);

       if(isValid)
       {
           $('#valid').css('display','block');
       }
       else
       {
           $('#valid').css('display','none');
       }

    });

    function validateForm(username,pass,confirm,email,company,companyInfo,companyNumber) {

        isValid=true;
        if(usernameRegex.test(username.val())===false)
        {
            isValid = false;
            username.css('border','1px solid red');
        }
        else{
            username.css('border','none');
        }

        if(passRegex.test(pass.val())===false)
        {
            isValid=false;
            pass.css('border','1px solid red');
        }
        else
        {
            pass.css('border','none');
        }

        if(confirm.val()!==pass.val())
        {
            isValid=false;
            confirm.css('border','1px solid red');
        }
        else
        {
            confirm.css('border','none');
        }

        if(emailRegex.test(email.val())===false)
        {
            isValid=false;
            email.css('border','1px solid red');
        }
        else
        {
            email.css('border','none');
        }

        if(company.is(':checked'))
        {

            if(!(1000<Number(companyNumber.val()) && Number(companyNumber.val())<9999))
            {
                console.log("o");
                isValid=false;
                companyNumber.css('border','1px solid red');
            }
            else
            {
                companyNumber.css('border','none');
            }
        }


    }

}
