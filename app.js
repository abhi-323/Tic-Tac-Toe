if (typeof document !== "undefined") {
    const cell = document.querySelectorAll(".cell");
    const btn = document.querySelector("#btn");
    const stat = document.querySelector("#status");

    cell.forEach( cell => cell.addEventListener("click" , fill) );
    btn.addEventListener("click", Reset);

    let results = ["", "", "", "","", "", "", "",""];
    let turn = true;

    // Function for Filling Inputs

    function fill(c) {
        const index = this.getAttribute("index");
        if(stat.innerHTML === "STATUS")
        if( turn && results[index] === "" ){
            c.target.innerHTML = "X";
            results[index] = "X";
            turn = false;
        }
        else if( !turn && results[index] === "" ){
            c.target.innerHTML = "O";
            results[index] = "O";
            turn = true;
        }
        else if( results[index] !== "" ) {
            alert("Position not Empty!!!");
        }

        checkWinner();

    }

    // Function for Checking Winner

    function checkWinner() {
        if( results[0] === results[1] && results[1] === results[2] ) {
            if( results[0] !== "" && results[1] !== "" && results[2] !== "" ) {
                stat.innerHTML = `${results[0]} is the Winner!`;
                setTimeout(Reset,2000);
            }
        }
        if( results[0] === results[3] && results[3] === results[6] ) {
            if( results[0] !== "" && results[3] !== "" && results[6] !== "" ) {
                stat.innerHTML = `${results[0]} is the Winner!`;
                setTimeout(Reset,2000);
            }
        }
        if( results[0] === results[4] && results[4] === results[8] ) {
            if( results[0] !== "" && results[4] !== "" && results[8] !== "" ) {
                stat.innerHTML = `${results[0]} is the Winner!`;
                setTimeout(Reset,2000);
            }
        }
        if( results[1] === results[4] && results[4] === results[7] ) {
            if( results[1] !== "" && results[4] !== "" && results[7] !== "" ) {
                stat.innerHTML = `${results[1]} is the Winner!`;
                setTimeout(Reset,2000);
            }
        }
        if( results[2] === results[5] && results[5] === results[8] ) {
            if( results[2] !== "" && results[5] !== "" && results[8] !== "" ) {
                stat.innerHTML = `${results[2]} is the Winner!`;
                setTimeout(Reset,2000);
            }
        }
        if( results[2] === results[4] && results[4] === results[6] ) {
            if( results[2] !== "" && results[4] !== "" && results[6] !== "" ) {
                stat.innerHTML = `${results[2]} is the Winner!`;
                setTimeout(Reset,2000);
            }
        }
        if( results[3] === results[4] && results[4] === results[5] ) {
            if( results[3] !== "" && results[4] !== "" && results[5] !== "" ) {
                stat.innerHTML = `${results[3]} is the Winner!`;
                setTimeout(Reset,2000);
            }
        }
        if( results[6] === results[7] && results[7] === results[8] ) {
            if( results[6] !== "" && results[7] !== "" && results[8] !== "" ) {
                stat.innerHTML = `${results[6]} is the Winner!`;
                setTimeout(Reset,2000);
            }
        }
        else if( !results.includes( "" ) && stat.innerHTML === "STATUS") {
            stat.innerHTML = "Draw";
            setTimeout(Reset,2000);
        }
    }

    // Function for Resetting cells
    
    function Reset(r) {
        for( i = 0 ; i < 9 ; i++ ) {
            results[i] = "";
        }
        
        cell.forEach( cell => cell.innerHTML = "" );
        stat.innerHTML = "STATUS";
        turn = true;
        
    }
}
