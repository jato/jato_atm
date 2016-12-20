// base object logic, didn't work how I wanted (or.. at all)

function bankAccount(account, name, limit, balance) {
  this.account = account;
  this.name = name;
  this.limit = limit;
  this.balance = balance;

  this.getAccount = function() {
    return this.account;
  }

  this.getLimit = function() {
      return this.limit;
  }

  this.getBalance = function() {
    return this.balance;
  }

  this.getName = function() {
    return this.name;
  }

  this.withdraw_check = function(amount) {
    if(this.balance + amount < this.limit) {
      return true;
    } else {
      return false;
    }
  }

  this.withdraw = function(amount) {
    if(this.withdraw_check(amount)) {
      this.balance -= amount;
    }

  this.deposit = function(amount) {
    this.balance += amount
  }  


  };
}



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
    } else { 
      alert("Insufficient funds.") 
    };

  
    updateBalance();

    // reset text fields.
    $(".account").find(".input").val("");
});


// how to pull integer from text field
function balanceCheck() {
    if ((parseInt($("#" + transaction).find($(".balance")).text()) + amount) < 0) {
        return true;
    }
}

// borrowed part of this logic (basic calculator)
function calculate () {
    $("#" + transaction).find($(".balance")).text(amount + parseInt($("#" + transaction).find($(".balance")).text()));
}

// update the balance
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


// 2nd attempt at functional JS
// var self = this;

// function bankAccount(account, name, limit, balance) {
//   var self = {}, _account, _name, _limit, _balance
//   _account = account;
//   _name = name;
//   _limit = limit;
//   _balance = balance;

//   self.getAccount = function() {
//     return _account;
//   }

//   self.getLimit = function() {
//       return _limit;
//   }

//   self.getBalance = function() {
//     return _balance;
//   }

//   self.getName = function() {
//     return _name;
//   }

//   self.withdrawal_check = function(amount) {
//     if(amount <= _limit && _balance - amount >= 0)
//       return true;
//     console.log("customer attempted to exceed limit or go negitive")
//     return false;
//   }

//   self.withdrawal = function(amount) {
//     if(self.withdrawal_check(amount)) {
//       _balance -= amount;
//     }
//     return self
//   };

//   self.deposit = function(amount) {
//     _balance += amount
//     return self
//   }  
//   return self
// }

// var customer = bankAccount(123456, "James", 1000, 5000);
// console.log(customer.getLimit())
// console.log(customer.getName())
// console.log(customer.getBalance())
// customer.withdrawal(1000)
// console.log(customer.getBalance())
// customer.deposit(50)
// console.log(customer.getBalance())
// customer.withdrawal(25).deposit(33)
// console.log(customer.getBalance())

var ATM = (function() {
    var ATM = function() {}
    ATM.prototype = {
        withdraw: function(amount, accountNumber, pin) {
      var withdrawn = this.bank.withdraw(amount, accountNumber, pin);
      $('input#checking').val(withdrawn);
      $('#accountBalance').text(this.checkBalance(accountNumber, pin));
      return withdrawn;
        },
      checkBalance: function(accountNumber, pin) {
        return this.bank.checkBalance(accountNumber, pin);
    }

    }
    return {
        create: function() {
      var atm = new ATM();
      atm.bank = Bank.create();
      $('input#withdraw').click(function() {
        atm.withdraw($('input#amount').val(),
          $('input#accountNumber').val(),
          $('input#PIN').val());
      });
            return atm;
        }    
  }
})();

