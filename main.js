window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.box'));
    let currentUser = "O";
    tiles.forEach((ele, index) => {
        ele.addEventListener('click', () => clicked(index));
    });
    let cr = document.getElementById('turn')
    document.addEventListener('click', () => changeTurn());
    let changeTurn = () => {
        cr.innerText = `${currentUser}'s Turn`;

        // if(tiles[ele].innerText!="")
        // {
        //     cr.innerText=`${currentUser} Turn`;
        // }
        // else{
        //     cr.innerText= "Press reset to Start New Game";
        // }
    }
    let arr = [];
    let clicked = (ele) => {
        if (tiles[ele].innerText == "" && currentUser == "X") {
            tiles[ele].innerText = "X";
            currentUser = "O";
            arr.push(ele);
            checkWin(arr);
        }
        if (tiles[ele].innerText == "" && currentUser == "O") {
            tiles[ele].innerText = "O";
            currentUser = "X";
            arr.push(ele);
            checkWin(arr);
        }
        // tiles.forEach(ele=>{
        //     if(ele.innerText!=""){
        //         endGame();
        //     }
        // })
    }
    // let endGame = ()=>{
    //     document.getElementById('result').innerText="";
    // }
    let win = (
        [0, 1, 2], [0, 3, 6],
        [0, 4, 8], [1, 4, 7],
        [3, 4, 5], [6, 7, 8],
        [2, 4, 6], [2, 5, 8]
    );
    let rst = document.getElementById('result');
    let checkWin = () => {

        //check after atleast 5 elements filled push to arr then check for length
        console.log("arrayworked")
        if (arr.length >= 5) {
            if (tiles[0].innerText == tiles[1].innerText && tiles[0].innerText == tiles[2].innerText) {
                rst.innerText = tiles[0].innerText+" WON";
                setTimeout(resetAll, 2000);
            }

            if (tiles[0].innerText == tiles[3].innerText && tiles[0].innerText == tiles[6].innerText) {
                rst.innerText = tiles[0].innerText+" WON";
                setTimeout(resetAll, 2000);
            }
            if (tiles[1].innerText == tiles[4].innerText && tiles[1].innerText == tiles[7].innerText) {
                rst.innerText = tiles[1].innerText+" WON";
                setTimeout(resetAll, 2000);
            }
            if (tiles[0].innerText == tiles[4].innerText && tiles[0].innerText == tiles[8].innerText) {
                rst.innerText = tiles[0].innerText+" WON";
                setTimeout(resetAll, 2000);
            }
            if (tiles[3].innerText == tiles[4].innerText && tiles[3].innerText == tiles[5].innerText) {
                rst.innerText = tiles[3].innerText+" WON";
                setTimeout(resetAll, 2000);
            }
            if (tiles[6].innerText == tiles[7].innerText && tiles[6].innerText == tiles[8].innerText) {
                rst.innerText = tiles[6].innerText+" WON";
                setTimeout(resetAll, 2000);
            }
            if (tiles[2].innerText == tiles[4].innerText && tiles[2].innerText == tiles[6].innerText) {
                rst.innerText = tiles[2].innerText+" WON";
                setTimeout(resetAll, 2000);
            }
            if (tiles[2].innerText == tiles[5].innerText && tiles[2].innerText == tiles[8].innerText) {
                rst.innerText = tiles[2].innerText+" WON";
                setTimeout(resetAll, 2000);
            }
        }
    }


    let reset = document.getElementById("reset");

    reset.addEventListener('click', () => resetAll());
    let resetAll = () => {
        tiles.forEach((ele) => {
            ele.innerText = "";
        })
        arr = [];
        currentUser = "O";
        rst.innerText = "";

    }



})
