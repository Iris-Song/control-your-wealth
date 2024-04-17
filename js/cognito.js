// cognito.js
// import "https://unpkg.com/amazon-cognito-identity-js/dist/amazon-cognito-identity.min.js";
// import "https://sdk.amazonaws.com/js/aws-sdk-2.1030.0.min.js";

AWS.config.region = "us-east-1"; // Your Cognito Region

const poolData = {
  UserPoolId: "us-east-1_iCTJILvht",
  ClientId: "3jnqpr1v954jlfnuo0n3u8v9ps",
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

export async function signUp(username, email, password) {
  var attributeList = [];
  var dataEmail = {
    Name: "email",
    Value: email,
  };
  var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(
    dataEmail
  );
  attributeList.push(attributeEmail);
  userPool.signUp(
    username,
    password,
    attributeList,
    null,
    function (err, result) {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      var cognitoUser = result.user;
      alert(
        "Registering for " +
          cognitoUser.getUsername() +
          ", check email for an verification code"
      );
    }
  );
}

export async function confirmSignUp(username, code) {
  var userData = {
    Username: username,
    Pool: userPool,
  };

  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  cognitoUser.confirmRegistration(code, true, function (err, result) {
    if (err) {
      alert(err.message || JSON.stringify(err));
      return;
    }
    alert("Registration Completed!");
  });
}

// export async function signUp(username, email, password) {
//   const attributeList = [];

//   const dataEmail = {
//     Name: "email",
//     Value: email,
//   };

//   const attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(
//     dataEmail
//   );
//   attributeList.push(attributeEmail);

//   userPool.signUp(
//     username,
//     password,
//     attributeList,
//     null,
//     function (err, result) {
//       if (err) {
//         alert(err.message || JSON.stringify(err));
//         return;
//       }
//       const cognitoUser = result.user;
//       console.log("user name is " + cognitoUser.getUsername());
//       alert("Check your email for the verification link.");
//     }
//   );
// }

// export function signIn(username, password) {
//     return new Promise((resolve, reject) => {
//         const authenticationDetails = new AuthenticationDetails({
//             Username: username,
//             Password: password
//         });

//         const cognitoUser = new CognitoUser({
//             Username: username,
//             Pool: userPool
//         });

//         cognitoUser.authenticateUser(authenticationDetails, {
//             onSuccess: (result) => {
//                 resolve(result);
//             },
//             onFailure: (err) => {
//                 reject(err);
//             }
//         });
//     });
// }

// export function confirmSignUp(username, code) {
//     return new Promise((resolve, reject) => {
//         const cognitoUser = new CognitoUser({
//             Username: username,
//             Pool: userPool
//         });

//         cognitoUser.confirmRegistration(code, true, function(err, result) {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(result); // "SUCCESS", usually
//             }
//         });
//     });
// }
