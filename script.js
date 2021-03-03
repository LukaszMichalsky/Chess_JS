function createBoard()
{
    

   var tab = document.createElement("table");
    for(let i=0;i<9;i++)
    {
         var row = document.createElement("tr");
         
        for(let j=0;j<9;j++)
        {
            var cell = document.createElement("td");  
           
            if(i==8 && j ==0) //left-bottom corner cell
            {
                cell.style.width = "20px";
                cell.style.height = "20px";
                cell.style.backgroundColor = "rgb(27, 27 ,27)";
            }
            else if(i==8) //create index row on the bootom of table 
            {
                cell.className = "bottom_index";
                cell.innerHTML = String.fromCharCode(64+j);
            }
            else if(j==0)
            {
                cell.className = "left_index";
                cell.innerHTML = 8-i;
            }
            else if(i%2==j%2)
            {
                cell.className = "black";
            }
            else
            {
                cell.className = "white";
            }
            row.appendChild(cell);
        }
        tab.appendChild(row);
    }
    
    document.body.appendChild(tab); 

    
}

function set_Pawns() //set white pieces on bottom of chessboard
{

    var Pieces_Black = document.getElementsByTagName("table")[0].rows[0].cells;
    var Pawns_Black = document.getElementsByTagName("table")[0].rows[1].cells;    
    var Pawns_White = document.getElementsByTagName("table")[0].rows[6].cells;
    var Pieces_White = document.getElementsByTagName("table")[0].rows[7].cells;
    
    var tab = [Pieces_Black,Pawns_Black,Pawns_White,Pieces_White];

    //tab.reverse();
    
   //set pawns
    for(let i = 1; i<9;i++)//count from 1 cause 0 element is index
    {

        tab[1][i].innerHTML = "<img src='Images/Black-Pawn.png' />";
        tab[2][i].innerHTML = "<img src='Images/White-Pawn.png' />";
        tab[1][i].id = "Pawn";
        tab[2][i].id = "Pawn";
    }
    
    //index of chessboard tiles start from 1!!!
    //sett rooks
    tab[0][1].innerHTML = "<img src='Images/Black-Rook.png' />";
    tab[0][8].innerHTML = "<img src='Images/Black-Rook.png' />";
    tab[3][1].innerHTML = "<img src='Images/White-Rook.png' />";
    tab[3][8].innerHTML = "<img src='Images/White-Rook.png' />";

    tab[0][1].id = "Rook";
    tab[0][8].id = "Rook";
    tab[3][1].id = "Rook";
    tab[3][8].id = "Rook";
    
    //set knights
    tab[0][2].innerHTML = "<img src='Images/Black-Knight.png' />";
    tab[0][7].innerHTML = "<img src='Images/Black-Knight.png' />";
    tab[3][2].innerHTML = "<img src='Images/White-Knight.png' />";
    tab[3][7].innerHTML = "<img src='Images/White-Knight.png' />";

    tab[0][2].id = "Knight";
    tab[0][7].id = "Knight";
    tab[3][2].id = "Knight";
    tab[3][7].id = "Knight";
    
    //set bishops
    tab[0][3].innerHTML = "<img src='Images/Black-Bishop.png' />";
    tab[0][6].innerHTML = "<img src='Images/Black-Bishop.png' />";
    tab[3][3].innerHTML = "<img src='Images/White-Bishop.png' />";
    tab[3][6].innerHTML = "<img src='Images/White-Bishop.png' />";

    tab[0][3].id = "Bishop";
    tab[0][6].id = "Bishop";
    tab[3][3].id = "Bishop";
    tab[3][6].id = "Bishop";
    
    //set queens
    tab[0][4].innerHTML = "<img src='Images/Black-Queen.png' />";
    tab[3][4].innerHTML = "<img src='Images/White-Queen.png' />";

    tab[0][4].id = "Queen";
    tab[3][4].id = "Queen";
    //set kings
    tab[0][5].innerHTML = "<img src='Images/Black-King.png' />";
    tab[3][5].innerHTML = "<img src='Images/White-King.png' />";
   
    tab[0][5].id = "King";
    tab[3][5].id = "King";
}



