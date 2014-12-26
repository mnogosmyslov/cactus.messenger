<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.2/angular-route.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular.min.js"></script>

  <script src="<c:url value="/pages/controller.js"/>"></script>
  <title></title>
</head>
<body ng-app="MyApp">
  <div ng-controller="DataCtrl">
    <p>Message is: {{scope.data}} </p>
  </div>
</body>
</html>
