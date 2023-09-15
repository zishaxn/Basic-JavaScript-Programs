const rect = document.querySelector('.centre');

rect.addEventListener('mousemove', (mouseDetails) => {
    let rectLocation = rect.getBoundingClientRect(); /* this will give you all the physical properties of recatngle, such as height , width, ditance from top , left etc. */
    let insideRectangle = mouseDetails.clientX - rectLocation.left;
    // insideRecangle will give me how  much distance is there from the left edge


    // code for left side
    if (insideRectangle < rectLocation.width / 2) {
        var redIntensity = gsap.utils.mapRange(0, rectLocation.width / 2, 255, 0, insideRectangle);
        gsap.to(rect, {
            backgroundColor: `rgb(${redIntensity},0,0)`,
            duration:0.1,
            ease:`power2.inOut`
        })
        
    }
    else {
        var blueIntensity = gsap.utils.mapRange(rectLocation.width / 2, rectLocation.width, 0, 255, insideRectangle);
        gsap.to(rect, {
            backgroundColor: `rgb(0,${blueIntensity},0)`,
            duration:0.1,
            ease:`power2.inOut`
        })
    }


});

// we want that the effect should only be visible when mouse is within the rectangle, otherwise rectangle
// should be white.
rect.addEventListener('mouseleave', () => { 
    gsap.to(rect, {
        backgroundColor: 'white',
        duration: 0.1,
        ease: `power2.inOut`
    });
})