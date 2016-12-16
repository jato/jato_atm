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

var customer = new bankAccount(123456, "James", 1000, 5000);
// customer.prototype.account = "123456789"
// customer.prototype.name = "James"
// customer.prototype.limit = 1000
// customer.prototype.balance = 5000