function bankAccount(account, name, limit, blance) {
  this.account = account;
  this.name = name;
  this.limit = limit;
  this.balance = balance;
  var amount = 0

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

    this.can_charge = function(amount){
    if(this.balance + amount < this.limit) {
      return true;
    } else {
      return false;
    }
  }
}