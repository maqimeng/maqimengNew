var contentDiv = document.getElementById("content");
var pageDiv = document.getElementById("page");
var linyiContainerDiv = document.getElementById("linyi-container");
var linyiDiv = document.getElementById("linyi");
var linyiFramesDiv = document.getElementById("linyi-slides");
var sweatDiv = document.getElementById("sweat");
var blinkLinyiEyesTimer;
var bannersContainerDiv = document.getElementById("banners-container");
var isPreloadShiftUpAnimationFinish = false;
var canFinishShiftUpHorizontalLayersAfterEverythingLoaded = true;
var splashContainerDiv = document.getElementById("splash-container");
var huojianDiv = document.getElementById("huojian");
var groundAndGrassContainer1Div = document.getElementById("ground-and-grass-container-1");
var elevation1Div = document.getElementById("elevation-1");
var elevation2Div = document.getElementById("elevation-2");
var elevation5Div = document.getElementById("elevation-5");
var layerHorizontalArray = new Array();
var layerVerticalArray = new Array();
var gapBetweenContactCloudAndBannersContainer = 400;
var layerHorizontalSpeedArray = new Array();
var layerVerticalSpeedArray = new Array();
var sea1Div = document.getElementById("sea-1");
var seaFloorDiv = document.getElementById("sea-floor");
var seaFloorFrontObjectArray = new Array();
var seaFloorBackObjectArray = new Array();
var about1ContainerDiv = document.getElementById("dongche-container");
var buildingTargetLeftw = 2100;
var buildingEarlyPositionw = 200;
var buildingwArray = new Array();
var buildingwTargetLeftArray = new Array();
buildingwTargetLeftArray.push(buildingTargetLeftw);
var buildingwEarlyPositionArray = new Array();
buildingwEarlyPositionArray.push(buildingEarlyPositionw);
var canAnimateBuildingwInformation;
var about2ContainerDiv = document.getElementById("qiqiu-container");
var plantLine1Div = document.getElementById("qiqiu-line-1");
var plantLine2Div = document.getElementById("qiqiu-line-2");
var plantArray = new Array();
var plantTargetTopObjectArray = new Array();
plantTargetTopObjectArray.push(plantLine1Div, plantLine2Div, plantLine1Div, plantLine2Div, plantLine1Div);
var canAnimatePlantInformation;
var bubbleDiv = document.getElementById("bubble");
var bubbleTimer;
var shiftUpLayerHorizontalDistance;
var shiftUpLayerHorizontalTimer;
var shiftDownLayerHorizontalTimer;
var shiftUpDownLayerHorizontalIncrement = 40;
var shiftUpDownLayerHorizontalInterval = 40;
var seaAnimalSwimDistance = 900;
var blinkSeaAnimalsTimer;
var skill1ContainerDiv = document.getElementById("skill-1-container");
var fishArray = new Array();
var fishEyeArray = new Array();
var canAnimateFishInformation;
var isFishStillAnimating = false;
var fishAnimateNumber = 0;
var numberOfFishInEachRowArray = new Array();
numberOfFishInEachRowArray.push(5, 5, 4, 3);
var skill2ContainerDiv = document.getElementById("skill-2-container");
var crabArray = new Array();
var crabEyeArray = new Array();
var canAnimateCrabInformation;
var isCrabStillAnimating = false;
var crabAnimateNumber = 0;
var numberOfCrabInEachRowArray = new Array();
numberOfCrabInEachRowArray.push(5, 5, 4, 3);
var skill3ContainerDiv = document.getElementById("skill-3-container");
var turtleArray = new Array();
var turtleEyeArray = new Array();
var canAnimateTurtleInformation;
var isTurtleStillAnimating = false;
var turtleAnimateNumber = 0;
var numberOfTurtleInEachRowArray = new Array();
numberOfTurtleInEachRowArray.push(4, 3, 2, 2);
var pageVerticalPosition = 0;
var pageVerticalPositionOnTouch = 0;
var previousPageVerticalPosition = 0;
var deltaPageVerticalPosition = 0;
var isLinyiSwimming = false;
var isLinyiJumping;
var isLinyiFalling;
var isLinyiBelowSeaLevel = false;
var swimUpHeight;
var layersMovement;
var elevationArray = new Array();
var elevationNumberBelowLinyi = null;
var linyiRightEdge;
var linyiLeftEdge;
var distanceBetweenlinyiAndhuojian = 150;
var linyiMaxHorizontalDistance;
var counter = 0;
var switcher = 1;
var linyiStaticFrame = 0;
var linyiStartRunFrame = 1;
var linyiStopRunFrame = 2;
var linyiStartSwimFrame = 3;
var linyiStopSwimFrame = 4;
var linyiSwimDownFrame = 5;
var linyiStartJumpFrame = 6;
var linyiStopJumpFrame = 7;
var linyiOneFrameWidth = 200;
var shiftLinyiFrameTimeInterval = 200;
var canAnimateLinyiRunSwim;
var linyiStartFrame;
var linyiStopFrame;
var shiftLinyiFrameTimer;
var pageVerticalPositionWhenAnimateLinyi1;
var pageVerticalPositionWhenAnimateLinyi2;
var minimumVerticalDistanceToTriggerLinyiSwimDownFrame = 100;
var nbaBoardArray = new Array();
var about3ContainerDiv = document.getElementById("nba-container");
var nbaPlayerDiv = document.getElementById("nba-player");
var nbaPlayerContainerDiv = document.getElementById("nba-player-container");
var nbaPlayerFrameDiv = document.getElementById("nba-player-frame");
var nbaRimContainerDiv = document.getElementById("nba-rim-container");
var canAnimateNbaInformation;
var nbaBoardsCounter;
var nbaBoardsAnimationTimer;
var nbaPlayerCounter;
var nbaPlayerTimer;
var nbaPlayerEyesDiv = document.getElementById("nba-player-eyes");
var blinkNbaPlayerTimer;
var contactContainerDiv = document.getElementById("contact-container");
var socialContainerDiv = document.getElementById("social-container");
var canAnimateSocialContainer;
var happyLinyiTimer;
var isLinyiHappy = false;
var scrollOrSwipeTextContainer1Div = document.getElementById("scroll-or-swipe-text-container-1");
var canHideScrollOrSwipeTextContainer = true;
var scrollOrSwipeTextContainerTimer;
var canAnimateScrollOrSwipeTextContainer = true;
var touchStartX = 0;
var touchCurrentX = 0;
var touchEndX = 0;
var fireworksContainerDiv = document.getElementById("fireworks-container");
var fireworkArray = new Array();
var fireworkSvgArray = new Array();
var cArray = new Array();
var drawFireworkTimer;
var drawFireworkCounter = 0;
var fireworkRowNumber = 8;
var fireworkColumnNumber = 16;
var fireworkLayerNumber = 0;
var fireworkDotRadius = 5;
var fireworkCenterX;
var fireworkCenterY;
var fireworkOneRadiusDistance;
var fireworkOneRotationAngle;
var drawOneLayerOfFireworkTimer;
var canDrawManyFireworks = true;
disableIsLinyiJumpingAndFalling();
var landInformationContainerArray = new Array();
landInformationContainerArray.push(about1ContainerDiv, about2ContainerDiv, about3ContainerDiv);
var seaInformationContainerArray = new Array();
seaInformationContainerArray.push(skill1ContainerDiv, skill2ContainerDiv, skill3ContainerDiv);
setAllNbaCounter();
var canScrollOrSwipe;
disableScrollOrSwipe();
$(window).on("beforeunload", function() {
    $(window).scrollTop(0)
});
//禁用右键菜单
function doNothing(){
    window.event.returnValue=false;
    return false;
}
window.onload = function() {
    //禁止F12调试
    $(document).keydown(function(){
        return key(arguments[0])});
    function key(e){
        var keynum;if(window.event){
            keynum=e.keyCode;
        }else if(e.which){
            keynum=e.which;
        }
        if(keynum==123){
            // window.close();
            return false;
        }
    }
    if (deviceName != "computer") {
        initTouchEvents()
    }
    storeDivs();
    setFrontLayerVerticalHeight();
    setBannersContainerVerticalPosition();
    shiftUpPreloader();
    showContainer();
    initVariablesAfterShowContainer();
    shiftUpHorizontalLayersAfterEverythingLoaded();
    disableAnimateLinyiRunSwim();
    resetVariables();
    setPageHeight();
    setLayerSpeed();
    positionVerticalLayersHorizontally();
    positionBalloonAndLinyiContainerHorizontally();
    positionBalloonVertically();
    positionContactContainer();
    positionFireworksContainer();
    resetFunctions();
    positionSplashContainer();
    setLinyiLeftAndRightEdge();
    hideLinyiEyesClose();
    animateLinyiEyes();
    positionSeaFloorObjectsVertically();
    hideBubble();
    createFireworkSvg();
    appendFireworkSvgToContainer()
};
window.onscroll = function(e) {
    if (canScrollOrSwipe == true) {
        detectPageVerticalPosition();
        runTheseFunctionsAfterScrollOrSwipe()
    }
};
window.onresize = function(e) {
    setFrontLayerVerticalHeight();
    setBannersContainerVerticalPosition();
    setPageHeight();
    detectPageVerticalPosition();
    orientLinyi();
    setLayerSpeed();
    moveLayers();
    setLinyiLeftAndRightEdge();
    shiftUpDownHorizontalLayersOnResize();
    animateInformationAndEnemiesElements();
    positionSplashContainer();
    positionLinyiContainerVertically();
    positionBalloonVertically();
    positionPlants();
    positionSocialContainer();
    positionSeaFloorObjectsVertically();
    enableScrollOrSwipe()
};
$(window).on("orientationchange", orientationChangeHandler);

function orientationChangeHandler(e) {
    disableScrollOrSwipe();
    setTimeout(function() {
        $(window).trigger("resize")
    }, 500)
}
function enableScrollOrSwipe() {
    canScrollOrSwipe = true
}
function disableScrollOrSwipe() {
    canScrollOrSwipe = false
}
function initVariablesAfterShowContainer() {
    fireworkCenterX = 0.5 * fireworkArray[0].offsetWidth;
    fireworkCenterY = 0.5 * fireworkArray[0].offsetHeight;
    fireworkOneRadiusDistance = (fireworkCenterY - fireworkDotRadius) / fireworkRowNumber;
    fireworkOneRotationAngle = 2 * Math.PI / fireworkColumnNumber
}
function resetVariables() {
    pageVerticalPosition = 0;
    canAnimateBuildingwInformation = true;
    canAnimatePlantInformation = true;
    if (isFishStillAnimating == false) {
        canAnimateFishInformation = true
    }
    if (isCrabStillAnimating == false) {
        canAnimateCrabInformation = true
    }
    if (isTurtleStillAnimating == false) {
        canAnimateTurtleInformation = true
    }
    canAnimateNbaInformation = true;
    canAnimateSocialContainer = true;
    canDrawManyFireworks = true
}
function resetFunctions() {
    positionwBuildings();
    positionPlants();
    if (isFishStillAnimating == false) {
        positionSeaAnimals(fishArray, numberOfFishInEachRowArray, 150, 100)
    }
    if (isCrabStillAnimating == false) {
        positionSeaAnimals(crabArray, numberOfCrabInEachRowArray, 150, 100)
    }
    if (isTurtleStillAnimating == false) {
        positionSeaAnimals(turtleArray, numberOfTurtleInEachRowArray, 150, 100)
    }
    positionNbaElements();
    positionSocialContainer();
    resetFireworkSvg()
}
function initTouchEvents() {
    document.addEventListener("touchstart", handleStart, false);
    document.addEventListener("touchmove", handleMove, false);
    document.addEventListener("touchend", handleEnd, false)
}
function handleStart(e) {
    touchStartX = e.targetTouches[0].pageX;
    pageVerticalPositionOnTouch = pageVerticalPosition
}
function handleMove(e) {
    e.preventDefault();
    touchCurrentX = e.targetTouches[0].pageX;
    if (canScrollOrSwipe == true) {
        detectPageVerticalPosition();
        runTheseFunctionsAfterScrollOrSwipe()
    }
}
function handleEnd(e) {
    e.preventDefault();
    touchEndX = e.changedTouches[0].pageX
}
function runTheseFunctionsAfterScrollOrSwipe() {
    orientLinyi();
    checkLinyiJumpFallSwim();
    moveLayers();
    shiftUpDownHorizontalLayers();
    animateInformationAndEnemiesElements();
    animateLinyiRunSwim();
    hideScrollOrSwipeTextContainer();
    deviceFunctionScrollSwipe();
    printScrollSwipeText()
}
function deviceFunctionScrollSwipe() {
    if (deviceName != "computer") {
        if (layersMovement == "vertical") {
            positionHorizontalLayersToHaveSameRightPosition()
        }
    }
}
function showContainer() {
    containerDiv.setAttribute("class", "")
}
function shiftUpHorizontalLayersAfterEverythingLoaded() {
    for (var i = 0; i < layerHorizontalArray.length; i++) {
        $(layerHorizontalArray[i]).stop().animate({
            top: "0px"
        }, 1000, function() {
            finishShiftUpHorizontalLayersAfterEverythingLoaded()
        })
    }
}
function finishShiftUpHorizontalLayersAfterEverythingLoaded() {
    if (canFinishShiftUpHorizontalLayersAfterEverythingLoaded == true) {
        canFinishShiftUpHorizontalLayersAfterEverythingLoaded = false;
        isPreloadShiftUpAnimationFinish = true;
        makePageScrollable();
        shiftDownLinyiContainer();
        animateScrollOrSwipeTextContainer()
    }
}
function shiftDownLinyiContainer() {
    setLinyiJumpDownAndFallFrame();
    $(linyiContainerDiv).stop().animate({
        bottom: "8%"
    }, 500, function() {
        setLinyiStaticFrame();
        enableAnimateLinyiRunSwim()
    });
    if ((browserName == "internet explorer") && (browserVersion <= 8)) {
        enableAnimateLinyiRunSwim()
    }
}
function makePageScrollable() {
    contentDiv.setAttribute("class", "");
    enableScrollOrSwipe()
}
function setFrontLayerVerticalHeight() {
    layerVerticalArray[layerVerticalArray.length - 1].style.height = (2 * containerDiv.offsetHeight) + bannersContainerDiv.offsetHeight + gapBetweenContactCloudAndBannersContainer + "px"
}
function setBannersContainerVerticalPosition() {
    bannersContainerDiv.style.bottom = containerDiv.offsetHeight + "px"
}
function setPageHeight() {
    pageDiv.style.height = layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth + layerVerticalArray[layerVerticalArray.length - 1].offsetHeight + distanceBetweenlinyiAndhuojian + "px"
}
function setLayerSpeed() {
    while (layerHorizontalSpeedArray.length > 0) {
        layerHorizontalSpeedArray.pop()
    }
    while (layerVerticalSpeedArray.length > 0) {
        layerVerticalSpeedArray.pop()
    }
    for (var i = 0; i < layerHorizontalArray.length; i++) {
        var layerHorizontalSpeed = (layerHorizontalArray[i].offsetWidth - containerDiv.offsetWidth) / (layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth);
        layerHorizontalSpeedArray.push(layerHorizontalSpeed)
    }
    for (var i = 0; i < layerVerticalArray.length; i++) {
        var layerVerticalSpeed = (layerVerticalArray[i].offsetHeight - containerDiv.offsetHeight) / (layerVerticalArray[layerVerticalArray.length - 1].offsetHeight - containerDiv.offsetHeight);
        layerVerticalSpeedArray.push(layerVerticalSpeed)
    }
}
function detectPageVerticalPosition() {
    previousPageVerticalPosition = pageVerticalPosition;
    if (deviceName == "computer") {
        if (browserName == "internet explorer") {
            pageVerticalPosition = document.documentElement.scrollTop
        } else {
            pageVerticalPosition = pageYOffset
        }
    } else {
        pageVerticalPosition = pageVerticalPositionOnTouch + (touchStartX - touchCurrentX);
        if (pageVerticalPosition < 0) {
            pageVerticalPosition = 0
        }
        if (pageVerticalPosition > pageDiv.offsetHeight - containerDiv.offsetHeight) {
            pageVerticalPosition = pageDiv.offsetHeight - containerDiv.offsetHeight
        }
    }
    deltaPageVerticalPosition = pageVerticalPosition - previousPageVerticalPosition;
    if (pageVerticalPosition <= 0) {
        resetVariables();
        resetFunctions()
    }
}
function moveLayers() {
    setLayersMovement();
    if (layersMovement == "horizontal") {
        for (var i = 0; i < layerHorizontalArray.length; i++) {
            layerHorizontalArray[i].style.left = (-1 * layerHorizontalSpeedArray[i] * pageVerticalPosition) + "px"
        }
        positionLayerHorizontalToBottom();
        clearHappyLinyiTimer();
        positionVerticalLayersHorizontally()
    }
    if (layersMovement == "vertical") {
        for (var i = 0; i < layerVerticalArray.length; i++) {
            layerVerticalArray[i].style.bottom = (-1 * layerVerticalSpeedArray[i] * (pageVerticalPosition - (layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth))) + "px"
        }
        positionVerticalLayersAtLeftMost();
        positionHorizontalLayersToHaveSameRightPosition();
        positionHorizontalLayersVertically();
        clearShiftLinyiFrameTimer();
        clearHappyLinyiTimer()
    }
    if (layersMovement == "not moving 1") {
        positionVerticalLayersAtLeftMost();
        positionVerticalLayersToHaveSameTopPosition();
        positionHorizontalLayersAtBottomMost();
        positionHorizontalLayersToHaveSameRightPosition();
        clearHappyLinyiTimer()
    }
    if (layersMovement == "not moving 2") {
        positionVerticalLayersAtLeftMost();
        positionVerticalLayersToHaveSameTopPosition();
        positionHorizontalLayersAtBottomMost();
        positionHorizontalLayersToHaveSameRightPosition();
        animateSocialContainer();
        happyLinyi();
        drawManyFireworks()
    }
    positionBalloonAndLinyiContainerHorizontally();
    positionContactContainer();
    positionFireworksContainer()
}
function positionVerticalLayersAtLeftMost() {
    for (var i = 0; i < layerVerticalArray.length; i++) {
        layerVerticalArray[i].style.left = "0px"
    }
}
function positionHorizontalLayersToHaveSameRightPosition() {
    for (var i = 0; i < layerHorizontalArray.length; i++) {
        layerHorizontalArray[i].style.left = containerDiv.offsetWidth - layerHorizontalArray[i].offsetWidth + "px"
    }
}
function positionHorizontalLayersVertically() {
    for (var i = 0; i < layerHorizontalArray.length; i++) {
        layerHorizontalArray[i].style.top = layerVerticalArray[layerVerticalArray.length - 1].offsetTop + layerVerticalArray[layerVerticalArray.length - 1].offsetHeight - containerDiv.offsetHeight + "px"
    }
}
function positionHorizontalLayersAtBottomMost() {
    for (var i = 0; i < layerHorizontalArray.length; i++) {
        layerHorizontalArray[i].style.top = layerVerticalArray[layerVerticalArray.length - 1].offsetHeight - containerDiv.offsetHeight + "px"
    }
}
function setLinyiLeftAndRightEdge() {
    var distanceBetweenLinyiDivEdgeToHisFeet = 65;
    linyiRightEdge = 0.5 * (containerDiv.offsetWidth + linyiDiv.offsetWidth) - distanceBetweenLinyiDivEdgeToHisFeet;
    linyiLeftEdge = 0.5 * (containerDiv.offsetWidth - linyiDiv.offsetWidth) + distanceBetweenLinyiDivEdgeToHisFeet
}
function positionVerticalLayersToHaveSameTopPosition() {
    for (var i = 0; i < layerVerticalArray.length; i++) {
        layerVerticalArray[i].style.bottom = containerDiv.offsetHeight - layerVerticalArray[i].offsetHeight + "px"
    }
}
function positionVerticalLayersBottomToHorizontalLayersBottom() {
    for (var i = 0; i < layerVerticalArray.length; i++) {
        layerVerticalArray[i].style.bottom = (-1 * layerHorizontalArray[i].offsetTop) + "px"
    }
}
function shiftUpDownHorizontalLayers() {
    if (((previousPageVerticalPosition < sea1Div.offsetLeft - linyiLeftEdge) || (previousPageVerticalPosition > sea1Div.offsetLeft + sea1Div.offsetWidth - linyiRightEdge)) && ((pageVerticalPosition >= sea1Div.offsetLeft - linyiLeftEdge) && (pageVerticalPosition <= sea1Div.offsetLeft + sea1Div.offsetWidth - linyiRightEdge))) {
        isLinyiSwimming = true;
        shiftUpLayerHorizontal();
        shiftLinyiToSeaFloor();
        createBubble()
    }
    if (((previousPageVerticalPosition >= sea1Div.offsetLeft - linyiLeftEdge) && (previousPageVerticalPosition <= sea1Div.offsetLeft + sea1Div.offsetWidth - linyiRightEdge)) && ((pageVerticalPosition < sea1Div.offsetLeft - linyiLeftEdge) || (pageVerticalPosition > sea1Div.offsetLeft + sea1Div.offsetWidth - linyiRightEdge))) {
        isLinyiSwimming = false;
        shiftDownLayerHorizontal();
        shiftLinyiToGroundLevel();
        clearInterval(bubbleTimer);
        clearInterval(blinkSeaAnimalsTimer)
    }
}
function shiftUpDownHorizontalLayersOnResize() {
    if (((pageVerticalPosition >= sea1Div.offsetLeft - linyiLeftEdge) && (pageVerticalPosition <= sea1Div.offsetLeft + sea1Div.offsetWidth - linyiRightEdge))) {
        clearInterval(shiftUpLayerHorizontalTimer);
        clearInterval(shiftDownLayerHorizontalTimer);
        isLinyiSwimming = true;
        positionLayerHorizontalToTop();
        positionVerticalLayersBottomToHorizontalLayersBottom();
        createBubble()
    }
    if (((pageVerticalPosition < sea1Div.offsetLeft - linyiLeftEdge) || (pageVerticalPosition > sea1Div.offsetLeft + sea1Div.offsetWidth - linyiRightEdge))) {
        clearInterval(shiftUpLayerHorizontalTimer);
        clearInterval(shiftDownLayerHorizontalTimer);
        isLinyiSwimming = false;
        if (layersMovement == "horizontal") {
            positionLayerHorizontalToBottom();
            positionVerticalLayersBottomToHorizontalLayersBottom()
        } else {
            positionHorizontalLayersAtBottomMost();
            positionHorizontalLayersToHaveSameRightPosition()
        }
        clearInterval(bubbleTimer);
        clearInterval(blinkSeaAnimalsTimer)
    }
}
function setShiftUpLayerHorizontalDistance() {
    shiftUpLayerHorizontalDistance = 0.75 * containerDiv.offsetHeight
}
function shiftUpLayerHorizontal() {
    setShiftUpLayerHorizontalDistance();
    clearShiftUpDownLayerHorizontalTimer();
    shiftUpLayerHorizontalTimer = setInterval(function() {
        moveUpLayerHorizontal()
    }, shiftUpDownLayerHorizontalInterval);
    disableIsLinyiJumpingAndFalling()
}
function moveUpLayerHorizontal() {
    if (layersMovement == "horizontal") {
        for (var i = 0; i < layerHorizontalArray.length; i++) {
            var layerHorizontalArrayTop = layerHorizontalArray[i].offsetTop - shiftUpDownLayerHorizontalIncrement;
            if (layerHorizontalArrayTop <= -shiftUpLayerHorizontalDistance) {
                layerHorizontalArrayTop = -shiftUpLayerHorizontalDistance;
                layerHorizontalArray[i].style.top = layerHorizontalArrayTop + "px";
                clearInterval(shiftUpLayerHorizontalTimer)
            } else {
                layerHorizontalArray[i].style.top = layerHorizontalArrayTop + "px"
            }
            if (linyiContainerDiv.offsetTop > sea1Div.offsetTop + layerHorizontalArray[layerHorizontalArray.length - 1].offsetTop) {
                isLinyiBelowSeaLevel = true
            }
        }
        positionVerticalLayersBottomToHorizontalLayersBottom()
    } else {
        clearInterval(shiftUpLayerHorizontalTimer);
        positionHorizontalLayersAtBottomMost();
        positionHorizontalLayersToHaveSameRightPosition();
        isLinyiBelowSeaLevel = false
    }
}
function shiftDownLayerHorizontal() {
    clearShiftUpDownLayerHorizontalTimer();
    shiftDownLayerHorizontalTimer = setInterval(function() {
        moveDownLayerHorizontal()
    }, shiftUpDownLayerHorizontalInterval)
}
function moveDownLayerHorizontal() {
    if (layersMovement == "horizontal") {
        for (var i = 0; i < layerHorizontalArray.length; i++) {
            var layerHorizontalArrayTop = layerHorizontalArray[i].offsetTop + shiftUpDownLayerHorizontalIncrement;
            if (layerHorizontalArrayTop >= 0) {
                layerHorizontalArrayTop = 0;
                layerHorizontalArray[i].style.top = layerHorizontalArrayTop + "px";
                clearInterval(shiftDownLayerHorizontalTimer)
            } else {
                layerHorizontalArray[i].style.top = layerHorizontalArrayTop + "px"
            }
            if (linyiContainerDiv.offsetTop < sea1Div.offsetTop + layerHorizontalArray[layerHorizontalArray.length - 1].offsetTop) {
                isLinyiBelowSeaLevel = false
            }
        }
        positionVerticalLayersBottomToHorizontalLayersBottom()
    } else {
        clearInterval(shiftDownLayerHorizontalTimer);
        positionHorizontalLayersAtBottomMost();
        positionHorizontalLayersToHaveSameRightPosition();
        isLinyiBelowSeaLevel = false
    }
}
function clearShiftUpDownLayerHorizontalTimer() {
    clearInterval(shiftUpLayerHorizontalTimer);
    clearInterval(shiftDownLayerHorizontalTimer)
}
function shiftLinyiToGroundLevel() {
    $(linyiContainerDiv).stop().animate({
        bottom: containerDiv.offsetHeight - groundAndGrassContainer1Div.offsetTop - 10 + "px"
    }, 300, function() {})
}
function shiftLinyiToSeaFloor() {
    $(linyiContainerDiv).stop().animate({
        bottom: seaFloorDiv.offsetHeight + "px"
    }, 300, function() {})
}
function positionLayerHorizontalToTop() {
    if (isLinyiSwimming == true) {
        setShiftUpLayerHorizontalDistance();
        for (var i = 0; i < layerHorizontalArray.length; i++) {
            layerHorizontalArray[i].style.top = -shiftUpLayerHorizontalDistance + "px"
        }
        for (var i = 0; i < layerVerticalArray.length; i++) {
            layerVerticalArray[i].style.bottom = shiftUpLayerHorizontalDistance + "px"
        }
    }
}
function positionLayerHorizontalToBottom() {
    if (isLinyiSwimming == false) {
        for (var i = 0; i < layerHorizontalArray.length; i++) {
            layerHorizontalArray[i].style.top = "0px"
        }
        for (var i = 0; i < layerVerticalArray.length; i++) {
            layerVerticalArray[i].style.bottom = "0px"
        }
    }
}
function checkLinyiJumpFallSwim() {
    if (layersMovement == "horizontal") {
        if (isLinyiSwimming == true) {
            if (isLinyiBelowSeaLevel == true) {
                linyiSwimUp()
            }
        } else {
            for (var i = 0; i < elevationArray.length; i++) {
                linyiJumpUp(i);
                linyiFall(i)
            }
        }
    }
}
function linyiJumpUp(i) {
    if (((previousPageVerticalPosition <= elevationArray[i].offsetLeft - linyiRightEdge) && (pageVerticalPosition > elevationArray[i].offsetLeft - linyiRightEdge)) || ((previousPageVerticalPosition >= elevationArray[i].offsetLeft + elevationArray[i].offsetWidth - linyiLeftEdge) && (pageVerticalPosition < elevationArray[i].offsetLeft + elevationArray[i].offsetWidth - linyiLeftEdge))) {
        positionLinyiAtGroundLevel();
        $(linyiContainerDiv).stop().animate({
            bottom: [containerDiv.offsetHeight - groundAndGrassContainer1Div.offsetTop + 200, "easeOutCubic"]
        }, 300, function() {
            linyiJumpDown(i)
        });
        setLinyiJumpUpFrame()
    }
}
function linyiJumpDown(i) {
    if ((pageVerticalPosition > elevationArray[i].offsetLeft - linyiRightEdge) && (pageVerticalPosition < elevationArray[i].offsetLeft + elevationArray[i].offsetWidth - linyiLeftEdge)) {
        $(linyiContainerDiv).stop().animate({
            bottom: [containerDiv.offsetHeight - elevationArray[i].offsetTop - 10, "easeInCubic"]
        }, 300, function() {
            disableIsLinyiJumpingAndFalling();
            setLinyiStaticFrame()
        });
        setLinyiJumpDownAndFallFrame()
    }
}
function linyiFall(i) {
    if (((previousPageVerticalPosition < elevationArray[i].offsetLeft + elevationArray[i].offsetWidth - linyiLeftEdge) && (pageVerticalPosition >= elevationArray[i].offsetLeft + elevationArray[i].offsetWidth - linyiLeftEdge)) || ((previousPageVerticalPosition > elevationArray[i].offsetLeft - linyiRightEdge) && (pageVerticalPosition <= elevationArray[i].offsetLeft - linyiRightEdge))) {
        isLinyiFalling = true;
        setLinyiJumpDownAndFallFrame();
        $(linyiContainerDiv).stop().animate({
            bottom: [containerDiv.offsetHeight - groundAndGrassContainer1Div.offsetTop - 10, "easeInCubic"]
        }, 300, function() {
            disableIsLinyiJumpingAndFalling();
            setLinyiStaticFrame()
        })
    }
}
function setLinyiJumpUpFrame() {
    clearShiftLinyiFrameTimer();
    isLinyiJumping = true;
    linyiFramesDiv.style.left = (-1 * linyiStartJumpFrame * linyiOneFrameWidth) + "px"
}
function setLinyiJumpDownAndFallFrame() {
    linyiFramesDiv.style.left = (-1 * linyiStopJumpFrame * linyiOneFrameWidth) + "px"
}
function setLinyiStaticFrame() {
    linyiFramesDiv.style.left = "0px"
}
function setLinyiStaticFrameonsea() {
    linyiFramesDiv.style.left = "-1000px"
}
function disableIsLinyiJumpingAndFalling() {
    isLinyiJumping = false;
    isLinyiFalling = false
}
function linyiSwimUp() {
    getSwimUpHeight();
    if (swimUpHeight > 0) {
        var swimUpDistance = seaFloorDiv.offsetHeight + swimUpHeight + "px";
        var linyiSwimUpTime = 3 * swimUpHeight;
        var linyiSwimDownTime = 6 * swimUpHeight;
        $(linyiContainerDiv).stop().animate({
            bottom: swimUpDistance
        }, linyiSwimUpTime, function() {
            linyiSwimDown(linyiSwimDownTime)
        })
    }
}
function linyiSwimDown(linyiSwimDownTime) {
    $(linyiContainerDiv).stop().animate({
        bottom: seaFloorDiv.offsetHeight + "px"
    }, linyiSwimDownTime, function() {
        setLinyiStaticFrameonsea()
    });
    if (linyiContainerDiv.offsetTop + linyiContainerDiv.offsetHeight <= containerDiv.offsetHeight - seaFloorDiv.offsetHeight - minimumVerticalDistanceToTriggerLinyiSwimDownFrame) {
        linyiFramesDiv.style.left = (-1 * linyiSwimDownFrame * linyiOneFrameWidth) + "px"
    } else {
        setLinyiStaticFrameonsea()
    }
}
function animateLinyiEyes() {
    clearInterval(blinkLinyiEyesTimer);
    blinkLinyiEyesTimer = setInterval(function() {
        blinkLinyiEyes()
    }, 4000)
}
function blinkLinyiEyes() {
    if (layersMovement != "not moving 2") {
        $(sweatDiv).fadeTo(0, 1);
        $(sweatDiv).stop().delay(300).animate({
            opacity: 0
        }, 0, function() {})
    }
}
function hideLinyiEyesClose() {
    $(sweatDiv).fadeTo(0, 0)
}
function getSwimUpHeight() {
    swimUpHeight = Math.abs(deltaPageVerticalPosition);
    var maxSwimUpHeight = sea1Div.offsetHeight - linyiDiv.offsetHeight;
    if (swimUpHeight > maxSwimUpHeight) {
        swimUpHeight = maxSwimUpHeight
    }
}
function positionVerticalLayersHorizontally() {
    for (var i = 0; i < layerVerticalArray.length; i++) {
        layerVerticalArray[i].style.left = layerHorizontalArray[i].offsetLeft + layerHorizontalArray[i].offsetWidth - containerDiv.offsetWidth + "px"
    }
}
function positionBalloonAndLinyiContainerHorizontally() {
    var layerVerticalMovementDistance = (pageVerticalPosition * layerHorizontalSpeedArray[layerHorizontalSpeedArray.length - 1]) - (layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth);
    var linyiMaxHorizontalDistanceFromCenter = 250;
    var balloonMaxHorizontalDistanceFromCenter = 50;
    linyiMaxHorizontalDistance = (0.5 * containerDiv.offsetWidth) + linyiMaxHorizontalDistanceFromCenter;
    var linyiHorizontalDistance = (0.5 * containerDiv.offsetWidth) + layerVerticalMovementDistance;
    if (linyiHorizontalDistance >= linyiMaxHorizontalDistance) {
        linyiHorizontalDistance = linyiMaxHorizontalDistance
    }
    var balloonMaxHorizontalDistance = (0.5 * containerDiv.offsetWidth) + balloonMaxHorizontalDistanceFromCenter;
    var balloonHorizontalDistance = (0.5 * (containerDiv.offsetWidth - huojianDiv.offsetWidth)) + layerVerticalMovementDistance;
    if (balloonHorizontalDistance >= balloonMaxHorizontalDistance) {
        balloonHorizontalDistance = balloonMaxHorizontalDistance
    }
    if (layersMovement == "vertical") {
        huojianDiv.style.left = balloonHorizontalDistance + "px";
        linyiContainerDiv.style.bottom = (0.2 * containerDiv.offsetHeight) + 115 + "px";
        linyiContainerDiv.style.left = (linyiHorizontalDistance - 10) + "px"
    } else {
        if ((layersMovement == "not moving 1") || (layersMovement == "not moving 2")) {
            linyiContainerDiv.style.left = linyiHorizontalDistance + pageVerticalPosition - (pageDiv.offsetHeight - containerDiv.offsetHeight - distanceBetweenlinyiAndhuojian) + "px";
            huojianDiv.style.left = balloonHorizontalDistance + "px"
        } else {
            huojianDiv.style.left = layerHorizontalArray[layerHorizontalArray.length - 1].offsetLeft + layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - (0.5 * (containerDiv.offsetWidth + huojianDiv.offsetWidth)) + "px";
            linyiContainerDiv.style.left = "50%"
        }
    }
}
function positionBalloonVertically() {
    huojianDiv.style.bottom = (0.2 * containerDiv.offsetHeight) + "px"
}
function setLayersMovement() {
    if (pageVerticalPosition * layerHorizontalSpeedArray[layerHorizontalSpeedArray.length - 1] <= layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth) {
        layersMovement = "horizontal"
    } else {
        if ((pageVerticalPosition >= pageDiv.offsetHeight - containerDiv.offsetHeight - distanceBetweenlinyiAndhuojian) && (pageVerticalPosition < pageDiv.offsetHeight - containerDiv.offsetHeight)) {
            layersMovement = "not moving 1"
        } else {
            if (pageVerticalPosition >= pageDiv.offsetHeight - containerDiv.offsetHeight) {
                layersMovement = "not moving 2"
            } else {
                layersMovement = "vertical"
            }
        }
    }
}
function orientLinyi() {
    if (deltaPageVerticalPosition > 0) {
        linyiFramesDiv.style.top = "0px";
        sweatDiv.style.left = "70px"
    }
    if (deltaPageVerticalPosition < 0) {
        linyiFramesDiv.style.top = "-200px";
        sweatDiv.style.left = "90px"
    }
}
function storeDivs() {
    var divArray = document.getElementsByTagName("div");
    for (var i = 0; i < divArray.length; i++) {
        if (divArray[i].getAttribute("class") == "octopus") {
            fishArray.push(divArray[i])
        }
        if (divArray[i].getAttribute("class") == "octopus-eyes") {
            fishEyeArray.push(divArray[i])
        }
        if (divArray[i].getAttribute("class") == "fish") {
            crabArray.push(divArray[i])
        }
        if (divArray[i].getAttribute("class") == "fish-eyes") {
            crabEyeArray.push(divArray[i])
        }
        if (divArray[i].getAttribute("class") == "pig") {
            turtleArray.push(divArray[i])
        }
        if (divArray[i].getAttribute("class") == "pig-eyes") {
            turtleEyeArray.push(divArray[i])
        }
        if ((divArray[i].getAttribute("class") == "nba-kobe") || (divArray[i].getAttribute("class") == "nba-kd")) {
            nbaBoardArray.push(divArray[i])
        }
        if (divArray[i].getAttribute("class") == "elevation") {
            elevationArray.push(divArray[i])
        }
        if (divArray[i].getAttribute("class") == "dongche") {
            buildingwArray.push(divArray[i])
        }
        if (divArray[i].getAttribute("class") == "qiqiu") {
            plantArray.push(divArray[i])
        }
        if (divArray[i].getAttribute("class") == "layer-horizontal") {
            layerHorizontalArray.push(divArray[i])
        }
        if (divArray[i].getAttribute("class") == "layer-vertical") {
            layerVerticalArray.push(divArray[i])
        }
        if ((divArray[i].getAttribute("class") == "algae-a") || (divArray[i].getAttribute("class") == "algae-b") || (divArray[i].getAttribute("class") == "title-skills-class")) {
            seaFloorFrontObjectArray.push(divArray[i])
        }
        if ((divArray[i].getAttribute("class") == "coral") || (divArray[i].getAttribute("class") == "coral-big")) {
            seaFloorBackObjectArray.push(divArray[i])
        }
        if (divArray[i].getAttribute("class") == "firework") {
            fireworkArray.push(divArray[i])
        }
    }
}
function animatewBuildings() {
    for (var i = 0; i < buildingwArray.length; i++) {
        $(buildingwArray[i]).stop().delay(i * 300).animate({
            left: [buildingwTargetLeftArray[i], "easeOutCubic"]
        }, 1200, function() {})
    }
}
function positionwBuildings() {
    for (var i = 0; i < buildingwArray.length; i++) {
        buildingwArray[i].style.left = buildingwEarlyPositionArray[i] + "px"
    }
}
function nbaBoardsJump() {
    for (var i = 0; i < nbaBoardArray.length; i++) {
        $(nbaBoardArray[i]).stop().delay(i * 100).animate({
            bottom: [200, "easeOutCubic"]
        }, 300, function() {
            nbaBoardsFall()
        })
    }
}
function nbaBoardsFall() {
    $(nbaBoardArray[nbaBoardsCounter]).stop().animate({
        bottom: [0, "easeInCubic"]
    }, 300, function() {});
    nbaBoardsCounter = nbaBoardsCounter + 1;
    if (nbaBoardsCounter >= nbaBoardArray.length) {
        nbaBoardsCounter = 0
    }
}
function positionNbaBoard() {
    for (var i = 0; i < nbaBoardArray.length; i++) {
        nbaBoardArray[i].style.bottom = "0px"
    }
}
function animateNbaBoardsContinuously() {
    clearInterval(nbaBoardsAnimationTimer);
    nbaBoardsAnimationTimer = setInterval(function() {
        nbaBoardsJump()
    }, 3000)
}
function animateNbaPlayer() {
    nbaPlayerRun()
}
function nbaPlayerRun() {
    clearInterval(nbaPlayerTimer);
    nbaPlayerTimer = setInterval(function() {
        animateNbaPlayerRun()
    }, 200);
    $(nbaPlayerContainerDiv).stop().animate({
        left: "690px"
    }, 1000, function() {
        nbaPlayerJump()
    })
}
function animateNbaPlayerRun() {
    nbaPlayerCounter = nbaPlayerCounter + 1;
    shiftNbaPlayerFrame(nbaPlayerCounter % 2)
}
function nbaPlayerJump() {
    clearInterval(nbaPlayerTimer);
    nbaPlayerCounter = 0;
    shiftNbaPlayerFrame(2);
    $(nbaPlayerContainerDiv).stop().animate({
        left: "570px",
        bottom: [200, "easeOutCubic"]
    }, 300, function() {
        nbaPlayerFall()
    })
}
function nbaPlayerFall() {
    shiftNbaPlayerFrame(3);
    shakeRim();
    nbaBoardsJump();
    animateNbaBoardsContinuously();
    $(nbaPlayerContainerDiv).stop().animate({
        left: "450px",
        bottom: [0, "easeInCubic"]
    }, 300, function() {})
}
function shiftNbaPlayerFrame(nbaPlayerFrameNumber) {
    nbaPlayerFrameDiv.style.left = (-300 * nbaPlayerFrameNumber) + "px"
}
function shakeRim() {
    $(nbaRimContainerDiv).stop().animate({
        bottom: [-50, "easeOutCubic"]
    }, 100, function() {
        moveRimUp()
    })
}
function moveRimUp() {
    $(nbaRimContainerDiv).stop().animate({
        bottom: [0, "easeOutElastic"]
    }, 500, function() {})
}
function positionNbaElements() {
    stopAllNbaAnimation();
    setAllNbaCounter();
    clearAllNbaTimer();
    positionNbaBoard();
    positionNbaPlayerContainer()
}
function positionNbaPlayerContainer() {
    nbaPlayerContainerDiv.style.left = "1400px";
    nbaPlayerContainerDiv.style.bottom = "0px"
}
function animateNbaPlayerEyes() {
    clearInterval(blinkNbaPlayerTimer);
    blinkNbaPlayerTimer = setInterval(function() {
        blinkNbaPlayer()
    }, 4000)
}
function blinkNbaPlayer() {
    if ((pageVerticalPosition + (0.5 * containerDiv.offsetWidth) < about3ContainerDiv.offsetLeft) || (pageVerticalPosition + (0.5 * containerDiv.offsetWidth) > about3ContainerDiv.offsetLeft + about3ContainerDiv.offsetWidth)) {
        clearInterval(blinkNbaPlayerTimer)
    } else {
        $(nbaPlayerEyesDiv).fadeTo(0, 1);
        $(nbaPlayerEyesDiv).stop().delay(300).animate({
            opacity: 0
        }, 0, function() {})
    }
}
function clearAllNbaTimer() {
    clearInterval(blinkNbaPlayerTimer);
    clearInterval(nbaBoardsAnimationTimer);
    clearInterval(nbaPlayerTimer)
}
function setAllNbaCounter() {
    nbaBoardsCounter = 0;
    nbaPlayerCounter = 0
}
function stopAllNbaAnimation() {
    for (var i = 0; i < nbaBoardArray.length; i++) {
        $(nbaBoardArray[i]).stop(true, false)
    }
    $(nbaPlayerContainerDiv).stop(true, false)
}
function positionSeaAnimals(seaAnimalArray, numberOfSeaAnimalInEachRowArray, horizontalDistanceBetweenAnimals, verticalDistanceBetweenAnimals) {
    var seaAnimalLocalArray = seaAnimalArray;
    var numberOfSeaAnimalInEachRowLocalArray = numberOfSeaAnimalInEachRowArray;
    var columnDistance = horizontalDistanceBetweenAnimals;
    var rowDistance = verticalDistanceBetweenAnimals;
    var seaAnimalLocalNumber = 0;
    for (var i = 0; i < numberOfSeaAnimalInEachRowLocalArray.length; i++) {
        for (var j = 0; j < numberOfSeaAnimalInEachRowLocalArray[i]; j++) {
            seaAnimalLocalArray[seaAnimalLocalNumber].style.left = seaAnimalSwimDistance + (j * columnDistance) + "px";
            seaAnimalLocalArray[seaAnimalLocalNumber].style.top = (i * rowDistance) + "px";
            seaAnimalLocalNumber = seaAnimalLocalNumber + 1
        }
    }
}
function animateSeaAnimals(seaAnimalArray) {
    var seaAnimalLocalArray = seaAnimalArray;
    if (seaAnimalLocalArray == fishArray) {
        isFishStillAnimating = true
    }
    if (seaAnimalLocalArray == crabArray) {
        isCrabStillAnimating = true
    }
    if (seaAnimalLocalArray == turtleArray) {
        isTurtleStillAnimating = true
    }
    for (var i = 0; i < seaAnimalLocalArray.length; i++) {
        $(seaAnimalLocalArray[i]).stop().delay(i * 100).animate({
            left: [seaAnimalLocalArray[i].offsetLeft - seaAnimalSwimDistance, "easeOutCubic"]
        }, 600, function() {
            disableIsSeaAnimalStillAnimating(seaAnimalLocalArray)
        })
    }
}
function disableIsSeaAnimalStillAnimating(seaAnimalArray) {
    var seaAnimalLocalArray = seaAnimalArray;
    if (seaAnimalLocalArray == fishArray) {
        if (fishAnimateNumber >= seaAnimalLocalArray.length - 1) {
            isFishStillAnimating = false;
            fishAnimateNumber = 0
        } else {
            fishAnimateNumber = fishAnimateNumber + 1
        }
    }
    if (seaAnimalLocalArray == crabArray) {
        if (crabAnimateNumber >= seaAnimalLocalArray.length - 1) {
            isCrabStillAnimating = false;
            crabAnimateNumber = 0
        } else {
            crabAnimateNumber = crabAnimateNumber + 1
        }
    }
    if (seaAnimalLocalArray == turtleArray) {
        if (turtleAnimateNumber >= seaAnimalLocalArray.length - 1) {
            isTurtleStillAnimating = false;
            turtleAnimateNumber = 0
        } else {
            turtleAnimateNumber = turtleAnimateNumber + 1
        }
    }
}
function animateLinyiRunSwim() {
    if ((canAnimateLinyiRunSwim == true) && (isLinyiJumping == false) && (isLinyiFalling == false) && (layersMovement != "vertical")) {
        disableAnimateLinyiRunSwim();
        clearInterval(shiftLinyiFrameTimer);
        shiftLinyiFrameTimer = setInterval(function() {
            shiftLinyiFrame()
        }, shiftLinyiFrameTimeInterval)
    }
}
function shiftLinyiFrame() {
    if (isLinyiFalling == true) {
        clearShiftLinyiFrameTimer();
        setLinyiJumpDownAndFallFrame();
        return
    } else {
        if ((isLinyiSwimming == true) && (isLinyiBelowSeaLevel == true)) {
            linyiStartFrame = linyiStartSwimFrame;
            linyiStopFrame = linyiStopSwimFrame
        } else {
            linyiStartFrame = linyiStartRunFrame;
            linyiStopFrame = linyiStopRunFrame
        }
    }
    linyiFramesDiv.style.left = (-1 * linyiOneFrameWidth * (linyiStartFrame + counter)) + "px";
    if (linyiStartFrame + counter + switcher > linyiStopFrame) {
        switcher = -1 * switcher
    }
    if (linyiStartFrame + counter + switcher == linyiStartFrame) {
        pageVerticalPositionWhenAnimateLinyi1 = pageVerticalPosition
    }
    if (linyiStartFrame + counter + switcher < linyiStartFrame) {
        pageVerticalPositionWhenAnimateLinyi2 = pageVerticalPosition;
        if (pageVerticalPositionWhenAnimateLinyi1 == pageVerticalPositionWhenAnimateLinyi2) {
            clearShiftLinyiFrameTimer();
            if (layersMovement == "not moving 2") {
                linyiHandsUp()
            }
            return
        } else {
            switcher = -1 * switcher
        }
    }
    counter = counter + switcher
}
function clearShiftLinyiFrameTimer() {
    clearInterval(shiftLinyiFrameTimer);
    if (isLinyiSwimming == false) {
        setLinyiStaticFrame()
    }
    if ((isLinyiSwimming == true) && (linyiContainerDiv.offsetTop + linyiContainerDiv.offsetHeight >= containerDiv.offsetHeight - seaFloorDiv.offsetHeight)) {
        setLinyiStaticFrameonsea()
    }
    counter = 0;
    switcher = 1;
    enableAnimateLinyiRunSwim()
}
function enableAnimateLinyiRunSwim() {
    canAnimateLinyiRunSwim = true
}
function disableAnimateLinyiRunSwim() {
    canAnimateLinyiRunSwim = false
}
function animateInformationAndEnemiesElements() {
    if (layersMovement == "horizontal") {
        if (isLinyiSwimming == false) {
            for (var i = 0; i < landInformationContainerArray.length; i++) {
                if (((previousPageVerticalPosition + (0.5 * containerDiv.offsetWidth) > landInformationContainerArray[i].offsetLeft) || (previousPageVerticalPosition + (0.5 * containerDiv.offsetWidth) > landInformationContainerArray[i].offsetLeft + 1000)) && ((pageVerticalPosition + (0.5 * containerDiv.offsetWidth) > landInformationContainerArray[i].offsetLeft) && (pageVerticalPosition + (0.5 * containerDiv.offsetWidth) > landInformationContainerArray[i].offsetLeft + 1000))) {
                    if (landInformationContainerArray[i] == about1ContainerDiv) {
                        if (canAnimateBuildingwInformation == true) {
                            animatewBuildings();
                            canAnimateBuildingInformation = false
                        }
                    }
                }
                if (((previousPageVerticalPosition + (0.5 * containerDiv.offsetWidth) < landInformationContainerArray[i].offsetLeft) || (previousPageVerticalPosition + (0.5 * containerDiv.offsetWidth) > landInformationContainerArray[i].offsetLeft + landInformationContainerArray[i].offsetWidth)) && ((pageVerticalPosition + (0.5 * containerDiv.offsetWidth) > landInformationContainerArray[i].offsetLeft) && (pageVerticalPosition + (0.5 * containerDiv.offsetWidth) < landInformationContainerArray[i].offsetLeft + landInformationContainerArray[i].offsetWidth))) {
                    if (landInformationContainerArray[i] == about2ContainerDiv) {
                        if (canAnimatePlantInformation == true) {
                            animatePlants();
                            canAnimatePlantInformation = false
                        }
                    }
                    if (landInformationContainerArray[i] == about3ContainerDiv) {
                        animateNbaPlayerEyes();
                        if (canAnimateNbaInformation == true) {
                            animateNbaPlayer();
                            canAnimateNbaInformation = false
                        }
                    }
                }
            }
        }
        if (isLinyiSwimming == true) {
            for (var i = 0; i < seaInformationContainerArray.length; i++) {
                if (((previousPageVerticalPosition + (0.5 * containerDiv.offsetWidth) < sea1Div.offsetLeft + seaInformationContainerArray[i].offsetLeft) || (previousPageVerticalPosition + (0.5 * containerDiv.offsetWidth) > sea1Div.offsetLeft + seaInformationContainerArray[i].offsetLeft + seaInformationContainerArray[i].offsetWidth)) && ((pageVerticalPosition + (0.5 * containerDiv.offsetWidth) > sea1Div.offsetLeft + seaInformationContainerArray[i].offsetLeft) && (pageVerticalPosition + (0.5 * containerDiv.offsetWidth) < sea1Div.offsetLeft + seaInformationContainerArray[i].offsetLeft + seaInformationContainerArray[i].offsetWidth))) {
                    if (seaInformationContainerArray[i] == skill1ContainerDiv) {
                        makeSeaAnimalsBlinking(fishEyeArray);
                        if (canAnimateFishInformation == true) {
                            animateSeaAnimals(fishArray);
                            canAnimateFishInformation = false
                        }
                    }
                    if (seaInformationContainerArray[i] == skill2ContainerDiv) {
                        makeSeaAnimalsBlinking(crabEyeArray);
                        if (canAnimateCrabInformation == true) {
                            animateSeaAnimals(crabArray);
                            canAnimateCrabInformation = false
                        }
                    }
                    if (seaInformationContainerArray[i] == skill3ContainerDiv) {
                        makeSeaAnimalsBlinking(turtleEyeArray);
                        if (canAnimateTurtleInformation == true) {
                            animateSeaAnimals(turtleArray);
                            canAnimateTurtleInformation = false
                        }
                    }
                }
            }
        }
    }
}
function createBubble() {
    clearInterval(bubbleTimer);
    bubbleTimer = setInterval(function() {
        animateBubble()
    }, 3000)
}
function animateBubble() {
    var linyiToSeaSurfaceDistance = linyiContainerDiv.offsetTop - (sea1Div.offsetTop - shiftUpLayerHorizontalDistance);
    positionBubble(linyiToSeaSurfaceDistance);
    showBubble();
    $(bubbleDiv).stop().animate({
        top: "0px"
    }, 2 * linyiToSeaSurfaceDistance, function() {
        hideBubble()
    })
}
function hideBubble() {
    $(bubbleDiv).fadeTo(0, 0)
}
function showBubble() {
    $(bubbleDiv).fadeTo(0, 1)
}
function positionBubble(linyiToSeaSurfaceDistance) {
    bubbleDiv.style.left = pageVerticalPosition + (0.5 * containerDiv.offsetWidth) - sea1Div.offsetLeft + "px";
    bubbleDiv.style.top = linyiToSeaSurfaceDistance + "px"
}
function blinkSeaAnimals(seaAnimalEyeArray) {
    var seaAnimalLocalEyeArray = seaAnimalEyeArray;
    var selectedSeaAnimalEyeArray = new Array();
    var seaAnimalBlinkMaxNumber = Math.ceil(Math.random() * 5);
    for (var i = 0; i < seaAnimalBlinkMaxNumber; i++) {
        var selectedSeaAnimalNumber = Math.floor(Math.random() * seaAnimalEyeArray.length);
        selectedSeaAnimalEyeArray.push(seaAnimalLocalEyeArray[selectedSeaAnimalNumber])
    }
    for (var i = 0; i < selectedSeaAnimalEyeArray.length; i++) {
        $(selectedSeaAnimalEyeArray[i]).fadeTo(0, 1);
        $(selectedSeaAnimalEyeArray[i]).stop().delay(300).animate({
            opacity: 0
        }, 0, function() {})
    }
}
function makeSeaAnimalsBlinking(seaAnimalEyeArray) {
    clearInterval(blinkSeaAnimalsTimer);
    blinkSeaAnimalsTimer = setInterval(function() {
        blinkSeaAnimals(seaAnimalEyeArray)
    }, 3000)
}
function positionContactContainer() {
    contactContainerDiv.style.top = layerVerticalArray[layerVerticalArray.length - 1].offsetTop + "px";
    contactContainerDiv.style.left = layerVerticalArray[layerVerticalArray.length - 1].offsetLeft + "px"
}
function positionFireworksContainer() {
    fireworksContainerDiv.style.top = layerVerticalArray[layerVerticalArray.length - 1].offsetTop + "px";
    fireworksContainerDiv.style.left = layerVerticalArray[layerVerticalArray.length - 1].offsetLeft + "px"
}
function positionSocialContainer() {
    if (canAnimateSocialContainer == true) {
        setSocialContainerOpacity(0);
        socialContainerDiv.style.top = "80%"
    } else {
        socialContainerDiv.style.top = "0px"
    }
}
function animateSocialContainer() {
    if (canAnimateSocialContainer == true) {
        $(socialContainerDiv).stop().animate({
            top: [0, "easeOutCubic"]
        }, 1000, function() {});
        setSocialContainerOpacity(1);
        canAnimateSocialContainer = false
    }
}
function setSocialContainerOpacity(socialContainerOpacity) {
    if (socialContainerOpacity > 1) {
        socialContainerOpacity = 1
    }
    if (socialContainerOpacity < 0) {
        socialContainerOpacity = 0
    }
    var socialContainerChildrenLength = $(socialContainerDiv).children().length;
    for (var i = 0; i < socialContainerChildrenLength; i++) {
        $(socialContainerDiv.children[i]).fadeTo(0, socialContainerOpacity)
    }
    var socialMiddleChildren = $(socialContainerDiv.children[1]).children().length;
    for (var i = 0; i < socialMiddleChildren; i++) {
        $(socialContainerDiv.children[1].children[i]).fadeTo(0, socialContainerOpacity)
    }
}
function happyLinyi() {
    if (isLinyiHappy == false) {
        clearInterval(happyLinyiTimer);
        happyLinyiTimer = setInterval(function() {
            linyiHandsUp()
        }, 3000);
        isLinyiHappy = true
    }
}
function clearHappyLinyiTimer() {
    if (isLinyiHappy == true) {
        clearInterval(happyLinyiTimer);
        isLinyiHappy = false
    }
}
function linyiHandsUp() {
    linyiFramesDiv.style.left = "-1600px";
    setTimeout(function() {
        setLinyiStaticFrame()
    }, 1000)
}
function positionSplashContainer() {
    splashContainerDiv.style.left = (0.5 * (containerDiv.offsetWidth - splashContainerDiv.offsetWidth)) + "px"
}
function positionLinyiContainerVertically() {
    if (isPreloadShiftUpAnimationFinish == true) {
        $(linyiContainerDiv).stop(true, false);
        setLinyiStaticFrame();
        if (isLinyiSwimming == true) {
            positionLinyiAtSeaFloorLevel()
        } else {
            checkElevationNumberBelowLinyi();
            if (elevationNumberBelowLinyi != null) {
                linyiContainerDiv.style.bottom = containerDiv.offsetHeight - elevationArray[elevationNumberBelowLinyi].offsetTop + "px"
            } else {
                positionLinyiAtGroundLevel()
            }
        }
    }
}
function positionLinyiAtGroundLevel() {
    linyiContainerDiv.style.bottom = (0.08 * containerDiv.offsetHeight) + "px"
}
function positionLinyiAtSeaFloorLevel() {
    linyiContainerDiv.style.bottom = seaFloorDiv.offsetHeight + "px"
}
function checkElevationNumberBelowLinyi() {
    for (var i = 0; i < elevationArray.length; i++) {
        if ((pageVerticalPosition < elevationArray[i].offsetLeft + elevationArray[i].offsetWidth - linyiLeftEdge) && (pageVerticalPosition > elevationArray[i].offsetLeft - linyiRightEdge)) {
            elevationNumberBelowLinyi = i;
            break
        } else {
            elevationNumberBelowLinyi = null
        }
    }
}
function positionSeaFloorObjectsVertically() {
    for (var i = 0; i < seaFloorFrontObjectArray.length; i++) {
        if (seaFloorFrontObjectArray[i].offsetHeight > sea1Div.offsetHeight) {
            seaFloorFrontObjectArray[i].style.bottom = (-1 * (seaFloorFrontObjectArray[i].offsetHeight - sea1Div.offsetHeight)) + "px"
        } else {
            seaFloorFrontObjectArray[i].style.bottom = "0px"
        }
    }
    for (var i = 0; i < seaFloorBackObjectArray.length; i++) {
        if (seaFloorBackObjectArray[i].offsetHeight > sea1Div.offsetHeight) {
            seaFloorBackObjectArray[i].style.bottom = ((-0.7 * containerDiv.offsetHeight) - (seaFloorBackObjectArray[i].offsetHeight - sea1Div.offsetHeight)) + "px"
        } else {
            seaFloorBackObjectArray[i].style.bottom = "-70%"
        }
    }
}
function animateScrollOrSwipeTextContainer() {
    if (canAnimateScrollOrSwipeTextContainer == true) {
        canAnimateScrollOrSwipeTextContainer = false;
        clearInterval(scrollOrSwipeTextContainerTimer);
        scrollOrSwipeTextContainerTimer = setInterval(function() {
            turnOnAndOffScrollOrSwipeTextContainer()
        }, 1000)
    }
}
function turnOnAndOffScrollOrSwipeTextContainer() {
    $(scrollOrSwipeTextContainer1Div).fadeTo(0, 1);
    $(scrollOrSwipeTextContainer1Div).stop().delay(500).animate({
        opacity: 0
    }, 0, function() {})
}
function hideScrollOrSwipeTextContainer() {
    if (canHideScrollOrSwipeTextContainer == true) {
        clearInterval(scrollOrSwipeTextContainerTimer);
        fadeOutScrollOrSwipeTextContainer();
        canHideScrollOrSwipeTextContainer = false
    }
}
function fadeOutScrollOrSwipeTextContainer() {
    $(scrollOrSwipeTextContainer1Div).fadeTo(0, 0)
}
function createFireworkSvg() {
    if (!((browserName == "internet explorer") && (browserVersion <= 8))) {
        for (var i = 0; i < fireworkArray.length; i++) {
            var fireworkSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            fireworkSvg.setAttribute("version", "1.2");
            fireworkSvg.setAttribute("baseProfile", "tiny");
            fireworkSvg.setAttribute("width", "100%");
            fireworkSvg.setAttribute("height", "100%");
            fireworkSvgArray.push(fireworkSvg)
        }
    }
}
function appendFireworkSvgToContainer() {
    if (!((browserName == "internet explorer") && (browserVersion <= 8))) {
        for (var i = 0; i < fireworkArray.length; i++) {
            fireworkArray[i].appendChild(fireworkSvgArray[i])
        }
    }
}
function drawManyFireworks() {
    if (!((browserName == "internet explorer") && (browserVersion <= 8))) {
        if (canDrawManyFireworks == true) {
            clearInterval(drawFireworkTimer);
            drawFireworkTimer = setInterval(function() {
                drawFirework()
            }, 1000);
            canDrawManyFireworks = false
        }
    }
}
function drawFirework() {
    if (drawFireworkCounter >= fireworkArray.length) {
        drawFireworkCounter = 0;
        clearInterval(drawFireworkTimer)
    } else {
        clearInterval(drawOneLayerOfFireworkTimer);
        drawOneLayerOfFireworkTimer = setInterval(function() {
            drawOneLayerOfFirework()
        }, 40)
    }
}
function drawOneLayerOfFirework() {
    if (fireworkLayerNumber < fireworkRowNumber) {
        fireworkLayerNumber = fireworkLayerNumber + 1;
        for (var i = 0; i < fireworkColumnNumber; i++) {
            var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            c.setAttribute("cx", String(fireworkCenterX + (Math.cos(i * fireworkOneRotationAngle) * (fireworkLayerNumber * fireworkOneRadiusDistance))));
            c.setAttribute("cy", String(fireworkCenterY + (Math.sin(i * fireworkOneRotationAngle) * (fireworkLayerNumber * fireworkOneRadiusDistance))));
            c.setAttribute("r", fireworkDotRadius);
            c.setAttribute("fill", "#ffffff");
            fireworkSvgArray[drawFireworkCounter].appendChild(c)
        }
    } else {
        fireworkLayerNumber = 0;
        clearInterval(drawOneLayerOfFireworkTimer);
        makeFireworkDisappear(drawFireworkCounter);
        drawFireworkCounter = drawFireworkCounter + 1
    }
}
function makeFireworkDisappear(fireworkNumber) {
    $(fireworkArray[fireworkNumber]).fadeTo(1000, 0)
}
function resetFireworkSvg() {
    for (var i = 0; i < fireworkArray.length; i++) {
        $(fireworkSvgArray[i]).empty();
        $(fireworkArray[i]).fadeTo(0, 1)
    }
}
var bird_big_dir = 0;
(function birdBigAction() {
    $(".bird_big").animate({
        "top": 200 + (60 * bird_big_dir)
    }, 600, function() {
        bird_big_dir = bird_big_dir ? 0 : 1;
        birdBigAction();
        $(".bird_big").toggleClass("action")
    })
})();
var bird_small_dir = 0;
(function birdSmallAction() {
    $(".bird_small").animate({
        "top": 200 + (80 * bird_small_dir)
    }, 700, function() {
        bird_small_dir = bird_small_dir ? 0 : 1;
        birdSmallAction();
        $(".bird_small").toggleClass("action")
    })
})();
var bike_left_dir = 0;
(function bikeleftAction() {
    $(".bike_left").animate({
        "right": 100 + (800 * bike_left_dir)
    }, 600, function() {
        bike_left_dir = bike_left_dir ? 0 : 1;
        bikeleftAction();
        $(".bike_left").toggleClass("action")
    })
})();
var lovers_right_dir = 0;
(function loversrightAction() {
    $(".lovers_right").animate({
        "right": 10 + (800 * lovers_right_dir)
    }, 600, function() {
        lovers_right_dir = lovers_right_dir ? 0 : 1;
        loversrightAction();
        $(".lovers_right").toggleClass("action")
    })
})();
var teacher_left_dir = 0;
(function teacherAction() {
    $(".teacher_left").animate({
        "right": 10 + (800 * lovers_right_dir)
    }, 600, function() {
        teacher_left_dir = teacher_left_dir ? 0 : 1;
        teacherAction();
        $(".teacher_left").toggleClass("action")
    })
})();

function animatePlants() {
    for (var i = 0; i < plantArray.length; i++) {
        $(plantArray[i]).stop().delay(i * 300).animate({
            top: [plantTargetTopObjectArray[i].offsetTop, "easeOutElastic"]
        }, 3000, function() {})
    }
}
function positionPlants() {
    for (var i = 0; i < plantArray.length; i++) {
        if (canAnimatePlantInformation == true) {
            plantArray[i].style.top = "100%"
        } else {
            plantArray[i].style.top = plantTargetTopObjectArray[i].offsetTop + "px"
        }
    }
}
function disappearweixin() {
    document.getElementById("weixin").style.display = "none"
}
function displayweixin() {
    document.getElementById("weixin").style.display = "block"
}
function disappearemail() {
    document.getElementById("youxiang").style.display = "none"
}
function displayemail() {
    document.getElementById("youxiang").style.display = "block"
};
function disappeareQQ() {
    document.getElementById("youxiang2").style.display = "none"
}
function displayeQQ() {
    document.getElementById("youxiang2").style.display = "block"
};
function disappeareYestar() {
    document.getElementById("yestar").style.display = "none"
}
function displayeYestar() {
    document.getElementById("yestar").style.display = "block"
};
function disappearePet() {
    document.getElementById("pet").style.display = "none"
}
function displayePet() {
    document.getElementById("pet").style.display = "block"
};