// base object logic, didn't work how I wanted (or.. at all)

// function bankAccount(account, name, limit, balance) {
//   this.account = account;
//   this.name = name;
//   this.limit = limit;
//   this.balance = balance;

//   this.getAccount = function() {
//     return this.account;
//   }

//   this.getLimit = function() {
//       return this.limit;
//   }

//   this.getBalance = function() {
//     return this.balance;
//   }

//   this.getName = function() {
//     return this.name;
//   }

//   this.withdraw_check = function(amount) {
//     if(this.balance + amount < this.limit) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   this.withdraw = function(amount) {
//     if(this.withdraw_check(amount)) {
//       this.balance -= amount;
//     }

//   this.deposit = function(amount) {
//     this.balance += amount
//   }  


//   };
// }



// var customer = new bankAccount(123456, "James", 1000, 5000);
// customer.prototype.account = "123456789"
// customer.prototype.name = "James"
// customer.prototype.limit = 1000
// customer.prototype.balance = 5000






var transaction;
var type;
var amount = 0;

$(document).on("ready", function() {


$(".balance").text("5000");

// add event listener for click, I struggled with trying to implement this correctly
$(":button").on("click", function() {

    

    // update amounts, pulls
    type = $(this).val();
    transaction = $(this).parent().attr('id');
    amount = parseInt($(this).siblings(".input").val());

    // bug -- need to flip to negative to calculate withdrawal
    if (type == "Withdraw") {
        amount = amount * (-1);
    };

    // If balance is sufficient 
    if (balanceCheck() != true) {
        calculate();
    };

  
    updateBalance();

    // reset text fields.
    $(".account").find(".input").val("");
});


function balanceCheck() {
    if ((parseInt($("#" + transaction).find($(".balance")).text()) + amount) < 0) {
        return true;
    }
}

// borrowed part of this logic (basic calculator)
function calculate () {
    $("#" + transaction).find($(".balance")).text(amount + parseInt($("#" + transaction).find($(".balance")).text()));
}


function updateBalance () {
    if (parseInt($("#" + transaction).find(".balance").text()) <= 0) {
        $("#" + transaction).find(".balance");
    }
    if (parseInt($(".account").not("#"+transaction).find(".balance").text()) <= 0) {
        $(".account").not("#" + transaction).find(".balance");
    }
    
}

// end doc ready
});

