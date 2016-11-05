// inkludera jQuery från node_modules
var $ = require('jquery');

/*** Game class ***/
class Game {
    // sätt initiala värden
    constructor() {
        this.totalClicks = 0;
        this.clickIncrement = 1;
        this.autoClicker = {
            amount: 0,   
            increment: 1
        }
        this.total = $('#totalClicks');
        this.auto = $('#autoClickers');
        this.clicks = $('#clicksPerClick');
    }
    
    buyAutoClicker(cost, increment) {
        this.autoClicker.increment += increment;
        this.autoClicker.amount++;
        this.totalClicks -= cost;
        this.updateValues();
    }
    
    buyExtraClicker(cost, extraClicks) {
        this.clickIncrement += extraClicks;
        this.totalClicks -= cost;
        this.updateValues();
    }
    
    updateValues() {
        this.total.html(this.totalClicks);
        this.auto.html(this.autoClicker.amount);
        this.clicks.html(this.clickIncrement);
        if(this.totalClicks > 50000) {
            $('#superClicker').removeClass('hidden');
        }
        if(this.totalClicks > 100000) {
            $('#uberClicker').removeClass('hidden');
        }
    }
}



/* new Game instance */
var clickGame = new Game();
var tick = 1000;

/* Click to Increment */
$('#click').click(function () {
    clickGame.totalClicks += clickGame.clickIncrement;
    this.classList.toggle('clicked');
    clickGame.updateValues();
});

var runAutoClicker = setInterval(function () {
        clickGame.totalClicks += (clickGame.autoClicker.increment * clickGame.autoClicker.amount);
        clickGame.updateValues();
    }, tick);


/* Buy AutoClickers */
$('#autoClickerBuy').click(function () {
    if (clickGame.totalClicks >= 10) {
        clickGame.totalClicks -= 10;
        clickGame.autoClicker.amount++;
        clickGame.updateValues();
    }
});



/* Upgraderingar */
/* Två klick Per Autoklick */
$('#upgradeTwoAutoClicks').click(function () {
    if (clickGame.totalClicks >= 200) {
        clickGame.buyAutoClicker(200, 2);
        $(this).addClass('hidden');
        $('#upgradeFiveAutoClicks').removeClass('hidden');
        clickGame.updateValues();
    }
});

/* Fem klick Per Autoklick */
$('#upgradeFiveAutoClicks').click(function () {
    if (clickGame.totalClicks >= 500) {
        clickGame.buyAutoClicker(500, 5);
        $(this).addClass('hidden');
        clickGame.updateValues();
    }
});


/*  Två klick Per klick */
$('#upgradeTwoClicks').click(function () {
    if (clickGame.totalClicks >= 20) {
        clickGame.buyExtraClicker(20, 2);
        $(this).addClass('hidden');
        $('#upgradeFiveClicks').removeClass('hidden');
        clickGame.updateValues();
    }
});

/* Fem klick Per klick*/
$('#upgradeFiveClicks').click(function () {
    if (clickGame.totalClicks >= 100) {
        clickGame.buyExtraClicker(100, 5);
        $(this).addClass('hidden');
        $('#upgradeTenClicks').removeClass('hidden');
        clickGame.updateValues();
    }
});

/* Tio klick Per klick */
$('#upgradeTenClicks').click(function () {
    if (clickGame.totalClicks >= 500) {
        clickGame.buyExtraClicker(500, 10);
        $(this).addClass('hidden');
        $('#superClicker').removeClass('hidden');
        clickGame.updateValues();
    }
});


/* 100 klick Per klick */
$('#superClicker').click(function () {
    if(clickGame.totalClicks > 50000) {
        clickGame.buyExtraClicker(50000, 100);
        $(this).addClass('hidden');
        $('#uberClicker').removeClass('hidden');
        clickGame.updateValues();
    }
});

/* 1000!!! klick Per klick */
$('#uberClicker').click(function () {
    if(clickGame.totalClicks > 150000) {
        clickGame.buyExtraClicker(150000, 1000);
        $(this).addClass('hidden');
        clickGame.updateValues();
    }
});