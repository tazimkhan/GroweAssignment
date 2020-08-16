var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pizza = /** @class */ (function () {
    function Pizza(topping, size, base, price) {
        this.topping = topping;
        this.size = size;
        this.base = base;
        this.price = price;
    }
    return Pizza;
}());
var NonVeg = /** @class */ (function (_super) {
    __extends(NonVeg, _super);
    function NonVeg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NonVeg.prototype.priceCal1 = function (topping, size, base, price) {
        if (topping === 'Chicken breasts' && size === 'small' && base === 'Thin Crust') {
            return this.price + 100;
        }
        else if (topping === 'Chicken breasts' && size === 'medium' && base === 'Thin Crust') {
            return this.price + 150;
        }
        else if (topping === 'Chicken breasts' && size === 'large' && base === 'Thin Crust') {
            return this.price + 190;
        }
        else if (topping === 'Chicken Golden Delight' && size === 'small' && base === 'Thin Crust') {
            return this.price + 200;
        }
        else if (topping === 'Chicken Golden Delight' && size === 'medium' && base === 'Thin Crust') {
            return this.price + 250;
        }
        else if (topping === 'Chicken Golden Delight' && size === 'large' && base === 'Thin Crust') {
            return this.price + 290;
        }
        else {
            return this.price + 399;
        }
    };
    return NonVeg;
}(Pizza));
var Veg = /** @class */ (function (_super) {
    __extends(Veg, _super);
    function Veg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Veg.prototype.priceCal2 = function (topping, size, base, price) {
        if (topping === 'Pepperoni' && size === 'small' && base === 'Thin Crust') {
            return this.price + 100;
        }
        else if (topping === 'Pepperoni' && size === 'medium' && base === 'Thin Crust') {
            return this.price + 150;
        }
        else if (topping === 'Pepperoni' && size === 'large' && base === 'Thin Crust') {
            return this.price + 190;
        }
        else if (topping === 'Mushrooms' && size === 'small' && base === 'Thin Crust') {
            return this.price + 200;
        }
        else if (topping === 'Mushrooms' && size === 'medium' && base === 'Thin Crust') {
            return this.price + 250;
        }
        else if (topping === 'Mushrooms' && size === 'large' && base === 'Thin Crust') {
            return this.price + 290;
        }
        else {
            return this.price + 399;
        }
    };
    return Veg;
}(Pizza));
var pizza1 = new NonVeg('Chicken Golden Delight', 'large', 'Thin Crust', 9);
console.log(pizza1.priceCal1('Chicken Golden Delight', 'large', 'Thin Crust', 9));
var pizza2 = new Veg('Mushrooms', 'medium', 'Thin Crust', 19);
console.log(pizza2.priceCal2('Mushrooms', 'medium', 'Thin Crust', 19));
