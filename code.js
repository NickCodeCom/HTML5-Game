





Array.prototype.erase = function (item) {
    for (var i = this.length; i--; i) {
        if (this[i] === item) this.splice(i, 1);
    }
    
    return this;
};

Function.prototype.bind = function (bind) {
    var self = this;
    return function () {
        var args = Arrayprototype.slice.call(arguments);
        return self.apply(bind || null, args);
    };
};

