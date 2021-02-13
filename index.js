const autobahn = require("autobahn");
const path = require("path");


var connection = new autobahn.Connection({
    transports: [{
        type: 'rawsocket',
        path: path.join(process.env.SNAP_COMMON, 'sockdir/thinghub.sock')
    }],
    realm: 'realm1'
});


connection.onopen = function (session) {
    console.log(session);
};

connection.open();

