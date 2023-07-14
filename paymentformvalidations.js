// ****** Bank Form ********** //

$(document).ready(function () {
    var appNum = $("#bankBranchNo");
    var appNumMsg = $("#bankBranchNoMsg");
    var appBranchName = $("#bankBranchName");
    var appBranchNameMsg = $("#bankBranchNameMsg");
    var appPaidAmount = $("#paidAmount");
    var appPaidAmountMsg = $("#paidAmountMsg");
    var appPaymentDate = $("#bankpaymentDate");
    var appPaymentDateMsg = $("#bankpaymentDateMsg");
    var appFileUpload = $("#bankFileUpload");
    var appFileUploadMsg = $("#bankFileUploadMsg");

    function validateBankBranchNo() {
        if (/^\d{7}$/.test(appNum.val()) && appNum.val().length === 7) {
            appNumMsg.text("");
            return true;
        } else {
            appNumMsg.text("* Input not valid (Refer point 1 in Instructions)");
            return false;
        }
    }

    function validateBankBranchName() {
        if (appBranchName.val().trim() !== "") {
            appBranchNameMsg.text("");
            return true;
        } else {
            appBranchNameMsg.text("* Field required (Refer point 1 in Instructions)");
            return false;
        }
    }

    function validatePaidAmount() {
        if (appPaidAmount.val() !== "") {
            appPaidAmountMsg.text("");
            return true;
        } else {
            appPaidAmountMsg.text("* Field required");
            return false;
        }
    }

    function validatePaymentDate() {
        if (appPaymentDate.val() !== "") {
            appPaymentDateMsg.text("");
            return true;
        } else {
            appPaymentDateMsg.text("* Field required");
            return false;
        }
    }

    function validateFileUpload() {
        if (appFileUpload.val() !== "") {
            appFileUploadMsg.text("");
            return true;
        } else {
            appFileUploadMsg.text("* Field required");
            return false;
        }
    }

    $("#bankBranchNo").on("input", validateBankBranchNo);
    $("#bankBranchName").on("input", validateBankBranchName);
    $("#paidAmount").on("change", validatePaidAmount);
    $("#bankpaymentDate").on("input", validatePaymentDate);
    $("#bankFileUpload").on("change", validateFileUpload);

    $("form").submit(function (event) {
        var isValid = true;
        if (!validateBankBranchNo()) {
            isValid = false;
        }
        if (!validateBankBranchName()) {
            isValid = false;
        }
        if (!validatePaidAmount()) {
            isValid = false;
        }
        if (!validatePaymentDate()) {
            isValid = false;
        }
        if (!validateFileUpload()) {
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});


// *********** Online form *************** //

$(document).ready(function () {
    var onlineField1 = $("#onlineField1");
    var onlineField2 = $("#onlineField2");
    var onlineField3 = $("#onlineField3");
    var onlineField4 = $("#onlineField4");
    var onlinepaymentdate = $("#onlinepaymentdate");
    var onlineFileUpload = $("#onlineFileUpload");

    var onlineField1Msg = $("#onlineField1-error");
    var onlineField2Msg = $("#onlineField2-error");
    var onlineField3Msg = $("#onlineField3-error");
    var onlineField4Msg = $("#onlineField4-error");
    var onlinepaymentdateMsg = $("#onlinepaymentdate-error");
    var onlineFileUploadMsg = $("#onlineFileUpload-error");

    function validateOnlineField1() {
        if (onlineField1.val() === "") {
            onlineField1Msg.text("Please select an option");
            return false;
        } else {
            onlineField1Msg.text("");
            return true;
        }
    }

    function validateOnlineField2() {
        if (
            onlineField1.val() === "transaction" &&
            !/^\d{15}$|^\d{18}$/.test(onlineField2.val())
        ) {
            onlineField2Msg.text("Please enter a valid Txn No (refer point 4 in instructions)");
            return false;
        } else {
            onlineField2Msg.text("");
            return true;
        }
    }

    function validateOnlineField3() {
        if (
            onlineField1.val() === "ipg" &&
            !/^\d{15}$|^\d{18}$/.test(onlineField3.val())
        ) {
            onlineField3Msg.text("Please enter a valid IPG No (refer point 4 in instructions)");
            return false;
        } else {
            onlineField3Msg.text("");
            return true;
        }
    }

    function validateOnlineField4() {
        if (onlineField4.val() === "") {
            onlineField4Msg.text("Please select an amount");
            return false;
        } else {
            onlineField4Msg.text("");
            return true;
        }
    }

    function validateOnlinePaymentDate() {
        if (onlinepaymentdate.val() === "") {
            onlinepaymentdateMsg.text("Please enter a valid date");
            return false;
        } else {
            onlinepaymentdateMsg.text("");
            return true;
        }
    }

    function validateOnlineFileUpload() {
        if (onlineFileUpload.val() === "") {
            onlineFileUploadMsg.text("Please upload a file");
            return false;
        } else {
            onlineFileUploadMsg.text("");
            return true;
        }
    }

    onlineField1.on("change", function () {
        validateOnlineField1();
        validateOnlineField2();
        validateOnlineField3();
    });

    onlineField2.on("input", validateOnlineField2);
    onlineField3.on("input", validateOnlineField3);
    onlineField4.on("change", validateOnlineField4);
    onlinepaymentdate.on("input", validateOnlinePaymentDate);
    onlineFileUpload.on("change", validateOnlineFileUpload);

    $("form").submit(function (event) {
        var isValid = true;
        if (!validateOnlineField1()) {
            isValid = false;
        }
        if (!validateOnlineField2()) {
            isValid = false;
        }
        if (!validateOnlineField3()) {
            isValid = false;
        }
        if (!validateOnlineField4()) {
            isValid = false;
        }
        if (!validateOnlinePaymentDate()) {
            isValid = false;
        }
        if (!validateOnlineFileUpload()) {
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});


// ************* Post office form ************** //

$(document).ready(function () {
    var postOfficeField1 = $("#postOfficeField1");
    var postOfficeField2 = $("#postOfficeField2");
    var postOfficeField3 = $("#postOfficeField3");
    var post_Office_Payment_Date = $("#post_Office_Payment_Date");
    var postOfficeField5 = $("#postOfficeField5");
    var postOfficeFileUpload = $("#postOfficeFileUpload");

    var postOfficeField1Msg = $("#postOfficeField1Msg");
    var postOfficeField2Msg = $("#postOfficeField2Msg");
    var postOfficeField3Msg = $("#postOfficeField3Msg");
    var post_Office_Payment_DateMsg = $("#post_Office_Payment_DateMsg");
    var postOfficeField5Msg = $("#postOfficeField5Msg");
    var postOfficeFileUploadMsg = $("#postOfficeFileUploadMsg");

    function validatePostOfficeField1() {
        if (/^\d{6}$/.test(postOfficeField1.val()) && postOfficeField1.val().length === 6) {
            postOfficeField1Msg.text("");
            return true;
        } else {
            postOfficeField1Msg.text("* Input not valid");
            return false;
        }
    }

    function validatePostOfficeField2() {
        if (postOfficeField2.val().trim() !== "") {
            postOfficeField2Msg.text("");
            return true;
        } else {
            postOfficeField2Msg.text("* Field required");
            return false;
        }
    }

    function validatePostOfficeField3() {
        if (postOfficeField3.val() !== "") {
            postOfficeField3Msg.text("");
            return true;
        } else {
            postOfficeField3Msg.text("* Field required");
            return false;
        }
    }

    function validatePost_Office_Payment_Date() {
        if (post_Office_Payment_Date.val() !== "") {
            post_Office_Payment_DateMsg.text("");
            return true;
        } else {
            post_Office_Payment_DateMsg.text("* Field required");
            return false;
        }
    }

    function validatePostOfficeField5() {
        if (/^\d{19}$/.test(postOfficeField5.val())) {
            postOfficeField5Msg.text("");
            return true;
        } else {
            postOfficeField5Msg.text("Please enter a valid input");
            return false;
        }
    }

    function validatePostOfficeFileUpload() {
        if (postOfficeFileUpload.val() !== "") {
            postOfficeFileUploadMsg.text("");
            return true;
        } else {
            postOfficeFileUploadMsg.text("* Field required");
            return false;
        }
    }

    postOfficeField1.on("input", validatePostOfficeField1);
    postOfficeField2.on("input", validatePostOfficeField2);
    postOfficeField3.on("change", validatePostOfficeField3);
    post_Office_Payment_Date.on("input", validatePost_Office_Payment_Date);
    postOfficeField5.on("input", validatePostOfficeField5);
    postOfficeFileUpload.on("change", validatePostOfficeFileUpload);

    $("form").submit(function (event) {
        var isValid = true;
        if (!validatePostOfficeField1()) {
            isValid = false;
        }
        if (!validatePostOfficeField2()) {
            isValid = false;
        }
        if (!validatePostOfficeField3()) {
            isValid = false;
        }
        if (!validatePost_Office_Payment_Date()) {
            isValid = false;
        }
        if (!validatePostOfficeField5()) {
            isValid = false;
        }
        if (!validatePostOfficeFileUpload()) {
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});
