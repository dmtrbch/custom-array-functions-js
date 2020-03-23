var _ = {
    reduce(collection, callback, init) {
        let storage = init;
    
        this.each(collection, value => {
           storage = callback(storage, value);
        });
        return storage;
    }
}