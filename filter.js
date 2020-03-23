var _ = {
    filter(collection, callback) {
        let tranformedCollection = [];
        this.each(collection, function(value, index, collection) {
            if(!callback(value, index, collection)) {
                tranformedCollection.push(value);
            }
        });

        return tranformedCollection;
    }
}