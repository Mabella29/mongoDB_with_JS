
const ConnectDB = require('./db')
const {ObjectId} = require('mongodb')

// async func to add book

async function addBook(book){
    const books = await ConnectDB();
    const result = await books.insertOne(book)
    console.log('Book added: ', result.insertedId)
}

// async func to list all books
async function listBooks(){
    const books = await ConnectDB();
    const allBooks = await books.find().toArray()
    console.log('All Books', allBooks)
}

// async to update a book
async function updateBook(id,updates) {
    const books = await ConnectDB();
    const result = await books.updateOne(
        {_id: new ObjectId(id)},
        { $set: updates}
    )
    console.log('Updated Book', result.modifiedCount)
}

// async function to delete a book
async function deleteBook(id){
    const books = await ConnectDB();
    const result = await books.deleteOne({_id: new ObjectId(id)});
    console.log('Deleted: ', result.deletedCount)
}

module.exports = {addBook, listBooks, updateBook, deleteBook}