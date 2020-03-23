var _ = {
    map(collection, callback) {
        let tranformedCollection = [];
        this.each(collection, function(value, index, collection) {
            tranformedCollection.push(callback(value, index, collection));
        });

        return tranformedCollection;
    }
}