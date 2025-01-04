const book = {
    title: prompt("Enter the book title:"), 
    author: prompt("Enter the book author:"),
    readingStatus: confirm("Have you already read this book? (OK for Yes, Cancel for No)"),

    getReadingStatus: function(){
        if(this.readingStatus){
            return `Already read '${this.title}' by ${this.author}.`;
        } else {
            return `You still need to read '${this.title}' by ${this.author}.`;
        }
    }
};

console.log(book.getReadingStatus()); 

console.log(book.readingStatus);