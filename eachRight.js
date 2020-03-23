var _ = {
    eachRight(collection, callback) {
        for(let i = collection.length-1; i >= collection.length; i--) {
            callback(collection[i]);
        }
    }
}