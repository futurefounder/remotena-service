// Function to create a cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Function to read a cookie
function readCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Function to remove the popup and set a cookie based on user input to not show again for X days
function closePopup(obj, popupOcName) {

    var days;
    switch (obj.frequency) { // How long does the popup need to be hidden
        case 'once':
            days = 99999;
            break;
        case 'daily':
            days = 1;
            break;
        case 'weekly':
            days = 7;
            break;
        case 'monthly':
            days = 30;
            break;
        case 'always':
            days = 0;
            break;
        default:
            days = 180;
    }

    // Create Element.remove() function if not exist
    if (!('remove' in Element.prototype)) {
        Element.prototype.remove = function () {
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
        };
    }

    setCookie(popupOcName, 'true', days); // Set the cookie to not show popup for X days

    if (document.getElementById(popupOcName)) { // Remove popup if it exists
        document.getElementById(popupOcName).remove();
        var removePopupIE = document.getElementById(popupOcName); // Remove popup if it exists for older browsers
        if(removePopupIE) {
            while (removePopupIE.hasChildNodes()) {
                removePopupIE.removeChild(removePopupIE.firstChild);
            }
        }
    }

}

// Short function to see if objects exists
function checkIfExists(object){
    if(typeof object !== 'undefined'){
        return true;
    }else{
        return false;
    }
}

// Function fires when visitor is closing the popup
function whenClosePopup(obj, popupOcName) {

    // If we have  close link, set event listener
    var closeLink = document.querySelector('#' + popupOcName + ' #pf_close_link');
    if (closeLink) {
        closeLink.addEventListener("click", function(){
            closePopup(obj, popupOcName)
        });
    }

    // If we have CTA, set event listener
    var closeLinkCTA = document.querySelector('#' + popupOcName + ' #pf__element--btn-cta');
    if (closeLinkCTA) {
        closeLinkCTA.addEventListener("click", function(){
            closePopup(obj, popupOcName);
            sendGaData(popupOcName, 'click');
        });
    }

    // If we have close cross, set event listener
    var closeLinkCross = document.querySelector('#' + popupOcName + ' #pf_close_cross_link');
    if (closeLinkCross) {
        closeLinkCross.addEventListener("click", function(){
            closePopup(obj, popupOcName)
        });
    }
}

// Premium Functions


function renderFullBar(obj, pushfolioType) {

    var popupOcName = pushfolioType + '-' + obj.popupName.replace(' ', '-'); // Name of popup, used for cookies and stuff
        var htmlContent = ''; // Set HTML adding
        var elemDiv = document.createElement('div'); // Create element
        elemDiv.id = popupOcName; // Set element ID
        elemDiv.className = 'pushFolio ' + pushfolioType; // Set classname for the type of popup


        function renderMessage(){
            var htmlContent = ''; // Empty content on every§ load
            document.body.appendChild(elemDiv); // Add element to the body
            elemDiv.setAttribute("style", obj.positionY + ':0px;'); // Set location based on user variable
            htmlContent += '<div class="inner width-all-75 mx-auto my-4">';

            // Add Title if exists
            if(checkIfExists(obj.messageContentTitle) || checkIfExists(obj.messageContent)){
                htmlContent +=
                    '<div class="content width-all-80 d-inline-block px-4 v-align-middle">'
                ;
            }
            if (checkIfExists(obj.messageContentTitle)) {
               htmlContent +=
                    '<h3 class="fz-24 fw-700">' +
                    obj.messageContentTitle +
                    '</h3>'
                ;
            }
            // Add Content if exists
            if (checkIfExists(obj.messageContent)) {
                htmlContent +=
                    '<p class="fz-16">'
                    + obj.messageContent
                    + '</p>'
                ;
            }

            if(checkIfExists(obj.messageContentTitle) || checkIfExists(obj.messageContent)){
                htmlContent +=
                    '</div>'
                ;
            }

            if (checkIfExists(obj.messageCtaText)) {
                htmlContent +=
                    '<div class="button width-all-20 d-inline-block v-align-middle">' +
                    '<a href="' +
                    obj.messageCtaURL +
                    '" target="_blank" class="btn btn-primary fw-700 pf__element--btn-cta pf_close m-0 text-center px-0" id="pf__element--btn-cta"'
                ;
            }


            // Add Button color if exists
            if (checkIfExists(obj.messageCtaColor) && checkIfExists(obj.messageCtaURL) && checkIfExists(obj.messageCtaText)) {
                htmlContent +=
                    'style="background-color:' +
                    obj.messageCtaColor +
                    ';" '
                ;
            }
            if (checkIfExists(obj.messageCtaText)) {
                htmlContent +=
                    '>' +
                    obj.messageCtaText +
                    '</a>' +
                    '</div>'
                ;
            }

            htmlContent += '</div>';

            elemDiv.innerHTML = htmlContent; // Add content to created popup element

            whenClosePopup(obj, popupOcName); // Close popup function when user clicks cross or CTA button
        }

        // Check if user set Trigger Method
        // If not, than use default
            if (checkIfExists(obj.delay) === false) {
                obj.delay = 100
            }

            setTimeout(function () { // Timeout loading based on the delay set by user

                renderMessage();

            }, obj.delay); // Delay based on user variable

            } // End Render Popup



function renderMessagePopup(obj, pushfolioType) {

    var popupOcName = pushfolioType + '-' + obj.popupName.replace(' ', '-'); // Name of popup, used for cookies and stuff
            var htmlContent = ''; // Set HTML adding
            var elemDiv = document.createElement('div'); // Create element
            elemDiv.id = popupOcName; // Set element ID
            elemDiv.className = 'pushFolio ' + pushfolioType; // Set classname for the type of popup


            function renderMessage(){
                var htmlContent = ''; // Empty content on every§ load
                document.body.appendChild(elemDiv); // Add element to the body
                elemDiv.setAttribute("style", obj.positionX + ': 20px; ' + obj.positionY + ': 20px; '); // Set location based on user variable

                // Add Header if exists
                if (checkIfExists(obj.headerText)) {
                    htmlContent +=
                        '<header class="p-3 bg-black-80">'
                    ;
                }
                // Add Avatar if exists
                if (checkIfExists(obj.headerAvatar) && checkIfExists(obj.headerText)) {
                    htmlContent +=
                        '<img class="avatar mr-3" src="' +
                        obj.headerAvatar +
                        '" width="40" height="40"/>'
                    ;
                }
                // Add Header Message if exists
                if (checkIfExists(obj.headerText)) {
                    htmlContent +=
                        '<h5 class="m-0 fw-400 fz-16">' +
                        obj.headerText +
                        '</h5>' +
                        '</header>'
                    ;
                }
                // Add Popup Image if exists
                if (checkIfExists(obj.messageImageSrc)) {
                    htmlContent +=
                        '<figure>' +
                        '<img src="' +
                        obj.messageImageSrc +
                        '"/>' +
                        '</figure>'
                }

                // Add Set div for inner content
                htmlContent += '<div class="inner p-3 p-sm-4">';

                // Add Title if exists
                if (checkIfExists(obj.messageContentTitle)) {
                    htmlContent +=
                        '<h3 class="fz-24 mb-sm-3 mb-2 fw-700">'
                        + obj.messageContentTitle
                        + '</h3>'
                    ;
                }
                // Add Content if exists
                if (checkIfExists(obj.messageContent)) {
                    htmlContent +=
                        '<p class="fz-16">'
                        + obj.messageContent
                        + '</p>'
                    ;
                }

                // Add CTA if exists
                if (checkIfExists(obj.messageCtaURL) && checkIfExists(obj.messageCtaText)) {
                    htmlContent +=
                        '<a class="btn btn-primary fw-700 pf__element--btn-cta pf_close  mt-3 mb-0 text-center px-0" id="pf__element--btn-cta" href="' +
                        obj.messageCtaURL +
                        '" '
                    ;
                }

                // Add Button color if exists
                if (checkIfExists(obj.messageCtaColor) && checkIfExists(obj.messageCtaURL) && checkIfExists(obj.messageCtaText)) {
                    htmlContent +=
                        'style="background-color:' +
                        obj.messageCtaColor +
                        ';" '
                    ;
                }

                // Add URL if exists
                if (checkIfExists(obj.messageCtaURL) && checkIfExists(obj.messageCtaText)) {
                    htmlContent +=
                        ' target="_blank">' +
                        obj.messageCtaText +
                        '</a>'
                    ;
                }

                // Add Powered By if exists (would be nice ;)
                //removeIf(!basic)
                htmlContent +=
                        '<span class="powered-by mt-2">' +
                        '⚡️ Powered by <a target="_blank" href="https://www.pushfol.io">Pushfol.io</a>' +
                        '</span>'
                ;

                //endRemoveIf(!basic)




                // Add close button and close surrounding divs
                htmlContent +=
                    '<div class="pf_close_cross" id="pf_close_cross_link">' +
                    '<svg width="21px" height="21px" viewBox="0 0 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch --> <desc>Created with Sketch.</desc> <defs></defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Artboard-5" transform="translate(-7.000000, -7.000000)"> <g id="Group" transform="translate(7.000000, 7.000000)"> <g id="Group-2"> <circle id="Oval" fill="#FFFFFF" fill-rule="nonzero" cx="10.5" cy="10.5" r="10.5"></circle> <path d="M14.5044643,13.1116071 C14.6294649,13.2366078 14.6919643,13.388392 14.6919643,13.5669643 C14.6919643,13.7455366 14.6294649,13.8973208 14.5044643,14.0223214 L13.59375,14.9330357 C13.4687494,15.0580363 13.3169652,15.1205357 13.1383929,15.1205357 C12.9598205,15.1205357 12.8080363,15.0580363 12.6830357,14.9330357 L10.7142857,12.9642857 L8.74553571,14.9330357 C8.62053509,15.0580363 8.46875089,15.1205357 8.29017857,15.1205357 C8.11160625,15.1205357 7.95982205,15.0580363 7.83482143,14.9330357 L6.92410714,14.0223214 C6.79910652,13.8973208 6.73660714,13.7455366 6.73660714,13.5669643 C6.73660714,13.388392 6.79910652,13.2366078 6.92410714,13.1116071 L8.89285714,11.1428571 L6.92410714,9.17410714 C6.79910652,9.04910652 6.73660714,8.89732232 6.73660714,8.71875 C6.73660714,8.54017768 6.79910652,8.38839348 6.92410714,8.26339286 L7.83482143,7.35267857 C7.95982205,7.22767795 8.11160625,7.16517857 8.29017857,7.16517857 C8.46875089,7.16517857 8.62053509,7.22767795 8.74553571,7.35267857 L10.7142857,9.32142857 L12.6830357,7.35267857 C12.8080363,7.22767795 12.9598205,7.16517857 13.1383929,7.16517857 C13.3169652,7.16517857 13.4687494,7.22767795 13.59375,7.35267857 L14.5044643,8.26339286 C14.6294649,8.38839348 14.6919643,8.54017768 14.6919643,8.71875 C14.6919643,8.89732232 14.6294649,9.04910652 14.5044643,9.17410714 L12.5357143,11.1428571 L14.5044643,13.1116071 Z" id="" fill="#222222"></path> </g> </g> </g> </g> </svg>' +
                    '</div></div>'
                ;
                elemDiv.innerHTML = htmlContent; // Add content to created popup element

                whenClosePopup(obj, popupOcName); // Close popup function when user clicks cross or CTA button
            }

            // Check if user set Trigger Method
            // If not, than use default
                if (checkIfExists(obj.delay) === false) {
                    obj.delay = 100
                }

                setTimeout(function () { // Timeout loading based on the delay set by user

                    renderMessage();

                }, obj.delay); // Delay based on user variable

                } // End Render Popup




// Create pushFolio plugin
function pushFolio() {

    // Mobile check so we can hide on mobile when user wants to
    var checkMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // Check if the popup got triggered or not
    var triggered = false;

    // Create the popupModal objects
    this.popupModal = function popupModal(obj) { // Fill using import from user variable
        var pushfolioType = 'pf__message'; // Class name of the popup
        var popupOcName = pushfolioType + '-' + obj.popupName; // Unique name used for cookie setting
        var popupCookie = readCookie(popupOcName); // Check if popup cookie has already been set
        var popupDelay = obj.delay; // Set the display delay time

        // If the cookie doesn't exist, start loading the popup
        if (popupCookie !== 'true') {
            if (obj.mobile === false && checkMobile === false) { // Show only on desktop
                renderMessagePopup(obj,pushfolioType);
            } else if (obj.mobile === true) {                   // Show on all devices
                renderMessagePopup(obj, pushfolioType);
            }else if (checkIfExists(obj.mobile) === false) {    // Show on all devices if obj.mobile is not set
                renderMessagePopup(obj, pushfolioType);
            }
        }
    };


    this.fullBar = function fullBar(obj) { // Fill using import from user variable
        var pushfolioType = 'pf__bottom-bar'; // Class name of the popup
        var popupOcName = pushfolioType + '-' + obj.popupName; // Unique name used for cookie setting
        var popupCookie = readCookie(popupOcName); // Check if popup cookie has already been set
        var popupDelay = obj.delay; // Set the display delay time

        // If the cookie doesn't exist, start loading the popup
        if (popupCookie !== 'true') {
            if (obj.mobile === false && checkMobile === false) { // Show only on desktop
                renderFullBar(obj,pushfolioType);
            } else if (obj.mobile === true) {                   // Show on all devices
                renderFullBar(obj, pushfolioType);
            }else if (checkIfExists(obj.mobile) === false) {    // Show on all devices if obj.mobile is not set
                renderFullBar(obj, pushfolioType);
            }
        }
    };


}



var pushFolio = new pushFolio(); // Initiate pushFolio
