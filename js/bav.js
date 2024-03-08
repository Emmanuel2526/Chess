  //Connecting to web socket server, code should be removed from here in future
  if(localStorage.server_state == null){
    localStorage.server_state = 0;
  }else if(localStorage.server_state == 1){
    const socket = new WebSocket('ws://192.168.137.1:8080');
  }
  var board = [
    [-9, -10, -11, -12, -13, -14, -15, -16],
    [-1,  -2,  -3,  -4,  -5,  -6,  -7,  -8],
    [ 0,   0,   0,   0,   0,   0,   0,   0],
    [ 0,   0,   0,   0,   0,   0,   0,   0],
    [ 0,   0,   0,   0,   0,   0,   0,   0],
    [ 0,   0,   0,   0,   0,   0,   0,   0],
    [ 1,   2,   3,   4,   5,   6,   7,   8],
    [ 9,  10,  11,  12,  13,  14,  15,  16]
  ]
  var boardid = [
    ["bqr", "bqn", "bqb", "bq", "bk", "bkb", "bkn", "bkr"],
    ["bqrp", "bqnp", "bqbp", "bqp", "bkp", "bkbp", "bknp", "bkrp"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["wqrp", "wqnp", "wqbp", "wqp", "wkp", "wkbp", "wknp", "wkrp"],
    ["wqr", "wqn", "wqb", "wq", "wk", "wkb", "wkn", "wkr"]
  ]
  var boardpid = [
    ["bqr", "bqn", "bqb", "bq", "bk", "bkb", "bkn", "bkr"],
    ["bqrp", "bqnp", "bqbp", "bqp", "bkp", "bkbp", "bknp", "bkrp"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["wqrp", "wqnp", "wqbp", "wqp", "wkp", "wkbp", "wknp", "wkrp"],
    ["wqr", "wqn", "wqb", "wq", "wk", "wkb", "wkn", "wkr"]
  ]
  var boardppa = [
   [0,   0,   0,   0,   0,   0,   0,   0],
   [0,   0,   0,   0,   0,   0,   0,   0],
   [0,   0,   0,   0,   0,   0,   0,   0],
   [0,   0,   0,   0,   0,   0,   0,   0],
   [0,   0,   0,   0,   0,   0,   0,   0],
   [0,   0,   0,   0,   0,   0,   0,   0],
   [0,   0,   0,   0,   0,   0,   0,   0],
   [0,   0,   0,   0,   0,   0,   0,   0]
  ]
  var boardhbd = [
   [0,   0,   0,   0,   0,   0,   0,   0],
   [0,   0,   0,   0,   0,   0,   0,   0],
   [0,   0,   0,   0,   0,   0,   0,   0],
   [0,   0,   0,   0,   0,   0,   0,   0],
   [0,   0,   0,   0,   0,   0,   0,   0],
   [0,   0,   0,   0,   0,   0,   0,   0],
   [0,   0,   0,   0,   0,   0,   0,   0],
   [0,   0,   0,   0,   0,   0,   0,   0]
  ]
  var boardhsq = [
   [0,   0,   0,   0,   0,   0,   0,   0],
   [0,   0,   0,   0,   0,   0,   0,   0],
   [0,   0,   0,   0,   0,   0,   0,   0],
   [0,   0,   0,   0,   0,   0,   0,   0],
   [0,   0,   0,   0,   0,   0,   0,   0],
   [0,   0,   0,   0,   0,   0,   0,   0],
   [0,   0,   0,   0,   0,   0,   0,   0],
   [0,   0,   0,   0,   0,   0,   0,   0]
  ]
  var boardksq = [
   [0,   0,   0,   0,   0,   0,   0,   0],
   [0,   0,   0,   0,   0,   0,   0,   0],
   [0,   0,   0,   0,   0,   0,   0,   0],
   [0,   0,   0,   0,   0,   0,   0,   0],
   [0,   0,   0,   0,   0,   0,   0,   0],
   [0,   0,   0,   0,   0,   0,   0,   0],
   [0,   0,   0,   0,   0,   0,   0,   0],
   [0,   0,   0,   0,   0,   0,   0,   0]
  ]
  var boardasq = [
   [99,   99,   99,   99,   99,   99,   99,   99],
   [99,   99,   99,   99,   99,   99,   99,   99],
   [99,   99,   99,   99,   99,   99,   99,   99],
   [99,   99,   99,   99,   99,   99,   99,   99],
   [99,   99,   99,   99,   99,   99,   99,   99],
   [99,   99,   99,   99,   99,   99,   99,   99],
   [99,   99,   99,   99,   99,   99,   99,   99],
   [99,   99,   99,   99,   99,   99,   99,   99]
  ]
  var boarddng = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
    ]
  var boardpmv = [
    [0,   0,   0,   0,   0,   0,   0,   0],
    [0,   0,   0,   0,   0,   0,   0,   0],
    [0,   0,   0,   0,   0,   0,   0,   0],
    [0,   0,   0,   0,   0,   0,   0,   0]
    ]
  var boardstatic = [
    [-9, -10, -11, -12, -13, -14, -15, -16],
    [-1,  -2,  -3,  -4,  -5,  -6,  -7,  -8],
    [ 1,   2,   3,   4,   5,   6,   7,   8],
    [ 9,  10,  11,  12,  13,  14,  15,  16]
    ]
  var listpc = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
  ]
  var npoc //<link rel="icon" href="favicon.ico" type="image/x-icon">
  var initialfr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  var hbd = "border: 10px solid white;"
  var hsq = "border: 10px solid green;"
  var ksq = "border: 10px solid yellow;"
  var csl = "border: 10px solid purple;"
  var checkv = "border: 10px solid red;"
  var shrink = "width: 0px; height: 0px;"
  var clear = "border: 0px;"
  //var hbd = ""
  /*var hsq = ""
  var ksq = ""
  var csl = ""
  var checkv = ""*/
function play_sound(path){
  let song = new Audio(path)
  song.play()
}
  var castl = new Audio("../aud/castl.mp3")
  var buttons = new Audio("../aud/movesound.ogg")
  //There is also a buttons.mp3 file
  var check = new Audio("../aud/check.mp3")
  var promote = new Audio("../aud/promote.mp3")
window.onload = function() {
  let  a = document.getElementById("sound");
  a.onclick = function  () {play_sound("../aud/burn1.mp3");}
}
  //What happens if there is no path to music file?{Youu get an error dude}
  var z = 0
  var a = 1
  var b = 2
  var c = 3
  var d = 4
  var e = 5
  var f = 6
  var g = 7
  var h = 8
  var sv = [null, "a", "b", "c", "d", "e", "f", "g", "h"]
  var htypef = [null, 35, 152, 267, 384, 501, 618, 735, 852]
  var htyper = [null, 1144, 1027, 910, 793, 676, 559, 442, 325]
  var piece_turn = 0
  var shrinking = false
  var shrinkassist = true
  var incheck = false
  var ntpa = 0
  var nnc = 0
  var qnc = 0
  var rnc = 0
  var bnc = 0
  var rhc = 1
  var poc = 0
  var linosep
  var pind = [[[""],[[], []] ,[[0, 0], []]],
              [[""],[[], []] ,[[0, 0], []]],
              [[""],[[], []] ,[[0, 0], []]],
              [[""],[[], []] ,[[0, 0], []]],
              [[""],[[], []] ,[[0, 0], []]],
              [[""],[[], []] ,[[0, 0], []]],
              [[""],[[], []] ,[[], []]],
              [[""],[[], []] ,[[], []]],
              [[""],[[], []] ,[[], []]],
              [[""],[[], []] ,[[], []]],
              [[""],[[], []] ,[[], []]],
              [[""],[[], []] ,[[], []]],
              [[""],[[], []] ,[[], []]],
              [[""],[[], []] ,[[], []]],
              [[""],[[], []] ,[[], []]],
              [[""],[[], []] ,[[], []]]
              ]
  if(localStorage.test == null){
    localStorage.test = ""
  }
  var coorx = [35, 152, 267, 384, 501, 618, 735, 852]
  var coory = [1144, 1027, 910, 793, 676, 559, 442, 325]
  var binum_dng = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 13, 14, 14, 14, 14, 15, 16, 16, 16, 16]
  var pname_dng = ["kpd", "kpd", "kpd", "kpd", "kpd", "kpd", "kpd", "kpd", "r", "r", "r", "r","n", "b","b", "b", "b", "q", "q", "q", "q", "q", "q", "q", "q","k", "b", "b", "b", "b","n", "r", "r", "r", "r"]
  var listf_dng = [
      [1, -1],
      [1, -1],
      [1, -1],
      [1, -1],
      [1, -1],
      [1, -1],
      [1, -1],
      [1, -1],//for rook
      [0,0,0,0,0,0,0],
      [1,2,3,4,5,6,7],
      [0,0,0,0,0,0,0],
      [-1,-2,-3,-4,-5,-6,-7],//for knight
      [-1, -1, 1, 1, -2, 2,-2, 2],//for bishop
      [1,2,3,4,5,6,7],
      [-1,-2,-3,-4,-5,-6,-7],
      [-1,-2,-3,-4,-5,-6,-7],
      [1,2,3,4,5,6,7],//for queen
      [0,0,0,0,0,0,0],
      [1,2,3,4,5,6,7],
      [0,0,0,0,0,0,0],
      [-1,-2,-3,-4,-5,-6,-7],
      [1,2,3,4,5,6,7],
      [-1,-2,-3,-4,-5,-6,-7],
      [-1,-2,-3,-4,-5,-6,-7],
      [1,2,3,4,5,6,7],//for king
      [0, 0, 1, -1, 1, 1, -1, -1],//for bishop
      [1,2,3,4,5,6,7],
      [-1,-2,-3,-4,-5,-6,-7],
      [-1,-2,-3,-4,-5,-6,-7],
      [1,2,3,4,5,6,7],//for knight
      [-1, -1, 1, 1, -2, 2,-2, 2],//for rook
      [0,0,0,0,0,0,0],
      [1,2,3,4,5,6,7],
      [0,0,0,0,0,0,0],
      [-1,-2,-3,-4,-5,-6,-7]
      ]
  var listr_dng = [
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],//for rook
      [1,2,3,4,5,6,7],
      [0,0,0,0,0,0,0],
      [-1,-2,-3,-4,-5,-6,-7],
      [0,0,0,0,0,0,0],//for knigt
      [2, -2, 2, -2, 1, 1, -1, -1],//for bishop
      [1,2,3,4,5,6,7],
      [-1,-2,-3,-4,-5,-6,-7],
      [1,2,3,4,5,6,7],
      [-1,-2,-3,-4,-5,-6,-7],//for queen
      [1,2,3,4,5,6,7],
      [0,0,0,0,0,0,0],
      [-1,-2,-3,-4,-5,-6,-7],
      [0,0,0,0,0,0,0],
      [1,2,3,4,5,6,7],
      [-1,-2,-3,-4,-5,-6,-7],
      [1,2,3,4,5,6,7],
      [-1,-2,-3,-4,-5,-6,-7],//for king
      [1, -1, 0, 0, 1, -1, 1, -1],//for bishop
      [1,2,3,4,5,6,7],
      [-1,-2,-3,-4,-5,-6,-7],
      [1,2,3,4,5,6,7],
      [-1,-2,-3,-4,-5,-6,-7],//for knight
      [2, -2, 2, -2, 1, 1, -1, -1],//for rook
      [1,2,3,4,5,6,7],
      [0,0,0,0,0,0,0],
      [-1,-2,-3,-4,-5,-6,-7],
      [0,0,0,0,0,0,0]
      ]
  var listfr_dng = [
    [[], []],
    [[], []],
    [[], []],
    [[], []]
  ]