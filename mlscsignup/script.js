
document.addEventListener('mousemove', function(event){
    let card_x = getTransformValue(event.clientX, window.innerWidth, 56);
    let card_y = getTransformValue(event.clientY, window.innerHeight, 56);
    let shadow_x = getTransformValue(event.clientX, window.innerWidth, 20);
    let shadow_y = getTransformValue(event.clientY, window.innerHeight, 20);
    let text_shadow_x = getTransformValue(event.clientX, window.innerWidth, 28);
    let text_shadow_y = getTransformValue(event.clientY, window.innerHeight, 28);

    document.querySelectorAll(".floating").forEach(function(el) {
        el.style.transform = `rotateX(${card_y}deg) rotateY(${card_x}deg)`;
        el.style.boxShadow = `${-card_x}px ${card_y}px 55px rgba(0, 0, 0, .55)`;
    });

    document.querySelectorAll(".svg").forEach(function(el) {
        el.style.filter = `drop-shadow(${-shadow_x}px ${shadow_y}px 4px rgba(0, 0, 0, .6))`;
    });

    document.querySelectorAll(".text").forEach(function(el) {
        el.style.textShadow = `${-text_shadow_x}px ${text_shadow_y}px 6px rgba(0, 0, 0, .8)`;
    });
});

function getTransformValue(v1, v2, value){
    return ((v1/v2 * value - value/2) * 1).toFixed(1);                        
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function(){
        document.body.classList.remove('active');
    }, 2200);
});

