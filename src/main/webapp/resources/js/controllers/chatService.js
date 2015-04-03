angular.module("ChatApp").service("ChatService", function($q, $timeout, $http) {
    var userInfo;
    $http.get("/server/user/999")
        .success(function(response) {
            userInfo = response;
            return userInfo;
        });
    var service = {}, listener = $q.defer(), socket = {
        client: null,
        stomp: null
    }, messageIds = [];

    service.RECONNECT_TIMEOUT = 30000;
    service.SOCKET_URL = "/server/chat";
    service.CHAT_TOPIC = "/conversation";
    service.CHAT_BROKER = "/messenger/chat";

    service.receive = function() {
        return listener.promise;
    };

    service.send = function(message, time) {
        var viewed = false;
        socket.stomp.send(service.CHAT_BROKER, {
            priority: 9
        }, JSON.stringify({
            message: message,
            date: time,
            viewed : viewed,
            authorId: userInfo.id
        }));
    };

    var reconnect = function() {
        $timeout(function() {
            initialize();
        }, this.RECONNECT_TIMEOUT);
    };

    var getMessage = function(data) {
        var message = JSON.parse(data), out = {};
        out.message = message.message;
        out.date = new Date(message.date);
        if (_.contains(messageIds, message.id)) {
            out.self = true;
            messageIds = _.remove(messageIds, message.id);
        }
        return out;
    };

    var startListener = function() {
        socket.stomp.subscribe(service.CHAT_TOPIC, function(data) {
            listener.notify(getMessage(data.body));
        });
    };

    var initialize = function() {
        socket.client = new SockJS(service.SOCKET_URL);
        socket.stomp = Stomp.over(socket.client);
        socket.stomp.connect({}, startListener);
        socket.stomp.onclose = reconnect;
    };

    initialize();
    return service;
});