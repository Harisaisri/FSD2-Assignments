"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LibraryBook {
    bookTitle;
    author;
    price;
    discount;
    quantity;
    constructor(title, author, price, discount, quantity) {
        this.bookTitle = title;
        this.author = author;
        this.price = price;
        this.discount = discount ?? 25;
        this.quantity = quantity ?? 1;
    }
    calculateFinalPrice() {
        const discountAmount = (this.price * this.discount) / 100;
        return this.price - discountAmount;
    }
    displayDetails() {
        console.log("------ Book Details ------");
        console.log(`Title      : ${this.bookTitle}`);
        console.log(`Author     : ${this.author}`);
        console.log(`Price      : ₹${this.price}`);
        console.log(`Discount   : ${this.discount}%`);
        console.log(`Quantity   : ${this.quantity}`);
        console.log(`Final Price: ₹${this.calculateFinalPrice()}`);
        console.log("-------------------\n");
    }
}
const book1 = new LibraryBook("Wings of Fire", "Abdul kalam", 800);
const book2 = new LibraryBook("Gitanjali", "Rabindranath Tagore ", 950, 20, 5);
book1.displayDetails();
book2.displayDetails();
book2.price = 1000;
console.log(`Updated Final Price: ₹${book2.calculateFinalPrice()}`);
//# sourceMappingURL=construct.js.map