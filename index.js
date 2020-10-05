//gsap.from(".turtle", {opacity: 0, x: 0});
//gsap.to(".turtle", {duration: 4, x: 100});
TweenMax.from("#leftMidLegFill", 1, {
  attr: {
    d: 'M86.4 70 Q 50 -50 105 70Z' 
}
});

TweenMax.to("#leftMidLegFill", 1, {
  attr: {
    d: 'M86.4 70 Q 140 -45 105 70Z' 
}
});

TweenMax.to("#rightMidLegFill", 1, {
  attr: {
    d: 'M 96 205 Q 155 360 88 94 Z' 
}
});
