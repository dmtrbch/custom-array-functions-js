var _ = {
    each(collection, callback) {
        if(Array.isArray(collection)) {
            for(let i = 0; i < collection.length; i++) {
                callback(collection[i]);
            }
        } else {
            for(var key in collection) {
                callback(collection[key]);
            }
        }
    }
}