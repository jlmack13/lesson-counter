(function() {
    //select each column and add an event listener to each
    const left = document.querySelector("#jar-left");
    const right = document.querySelector("#jar-right");
    
    left.addEventListener('click', blockComplete);
    right.addEventListener('click', blockIncomplete);

    //function for when left column is clicked. last "filled" item 
    // in left column should "empty" and first "empty" item in the right 
    // column should "fill"
    function blockComplete () {
        alert('You clicked the left column!');
    }

    //function for when right column is clicked. reverse of the above.
    function blockIncomplete () {
        alert('You clicked the right column!');
    }

})