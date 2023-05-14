const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];
const totalCategoria = booksByCategory.length
console.log(totalCategoria)

for (category of booksByCategory){
    console.log('Toral de livros da categoria é:', category.category)
    console.log(category.books.length)
}
function countAuthor() {
    let author = []
    for (let category of booksByCategory) {
        for (let book of category.books){
            if (author.indexOf(book.author) == -1 ){
                author.push(book.author)
            }
        }
        
    }
    console.log("total de autores:", author.length)
}
countAuthor()

function booksOFAuthor(author) {
    let books = []
    for (let category of booksByCategory) {
        for (let book of category.books){
            if (book.author === author ){
                books.push(book.title)
            }
        }
        
    }
    console.log(`livros do autor ${author} são ${books.join(", ")}`)
}
booksOFAuthor('Augusto Cury')