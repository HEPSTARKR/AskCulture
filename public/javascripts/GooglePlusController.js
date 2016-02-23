/**
 * Created by Sunrin on 2016. 2. 15..
 */
function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
}
function onFailure(error) {
    console.log(error);
}
function renderButton() {
    gapi.signin2.render('googlePlusRegisterButton',{
        'scope': 'https://www.googleapis.com/auth/plus.login',
        'width': 384,
        'height': 40,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
    });
    gapi.signin2.render('googlePlusLoginButton', {
        'scope': 'https://www.googleapis.com/auth/plus.login',
        'width': 384,
        'height': 40,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
    });
}
