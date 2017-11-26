$(document).ready(function () {
    $("#txtUserName").on("change", function () {
        if ($.trim($("#txtUserName").val()) == "") {
            $("#message").text("Please enter your Username!")
            $("#message").addClass("alert-danger").removeClass("display-hide");
            $("#txtUserName").focus();
            return;
        }
        else {
            $("#message").addClass("display-hide");
        }
    });

    $("#txtPassword").on("change", function () {
        if ($.trim($("#txtPassword").val()) == "") {
            $("#message").text("Please enter your Password!")
            $("#message").addClass("alert-danger").removeClass("display-hide");
            $("#txtPassword").focus();
            return;
        }
        else {
            if ($.trim($("#txtPassword").val()).length < 6) {
                $("#message").text("Password requires at least 6 characters!")
                $("#txtPassword").focus();
                $("#message").addClass("alert-danger").removeClass("display-hide");
                return;
            }

            $("#message").addClass("display-hide");
        }
    });

    $('#txtUserName').keypress(function (event) {
        if (event.which == 13) {
            DoLogin();
        }
    });

    $('#txtPassword').keypress(function (event) {
        if (event.which == 13) {
            DoLogin();
        }
    });

    $("#btnLogin").click(function () {
        DoLogin();
    })
})

function DoLogin() {
    var userName = $.trim($("#txtUserName").val());
    if (userName == "") {
        $("#message").text("Please enter your Username!")
        $("#txtUserName").focus();
        return;
    }

    var password = $.trim($("#txtPassword").val());

    if (password == "") {
        $("#message").text("Please enter your Password!")
        $("#txtPassword").focus();
        $("#message").addClass("alert-danger").removeClass("display-hide");
        return;
    }

    if (password.length < 6) {
        $("#message").text("Password requires at least 6 characters!")
        $("#txtPassword").focus();
        $("#message").addClass("alert-danger").removeClass("display-hide");
        return;
    }

    password = hex_md5(password);

    $.post( "/doLogin", {Username: userName, pass: password}, function( data ) {
        console.log(data);

        if(data == 1)
        {
            $("#message").text("Login successfull...");
            $("#message").addClass("alert-success").removeClass("display-hide").removeClass("alert-danger");
            window.location.href = "/dashboad";
        }
        else {
            $("#message").text("Username or password is incorrect!");
            $("#message").addClass("alert-danger").removeClass("display-hide");
        }
      });
}