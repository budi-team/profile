var data = {
    first_name: $('#first_name').val(),
    last_name: $('#last_name').val(),
    email: $('#email').val(),
    password: $('#password').val()
};

$.post('https://joinbudi.com/insert.php', data, function(response) {
    console.log(response);
});