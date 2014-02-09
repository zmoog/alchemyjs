describe("MongoDB", function() {
    it("is there a server running", function(next) {
        var MongoClient = require('mongodb').MongoClient;
        MongoClient.connect('mongodb://fastdelivery:nonlaso@troup.mongohq.com:10075/fastdelivery', function(err, db) {
            expect(err).toBe(null);
            next();
        });
    });
});

