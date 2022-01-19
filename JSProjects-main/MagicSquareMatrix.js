//MagicSquareMatrix
// magic_square = [

//     [8, 3, 4],

//     [1, 5, 9],

//     [6, 7, 2]

// ]



const k =require("readline-sync")
var r=k.questionInt("Enter the number of rows: ")
var c=k.questionInt("Enter the number of columns: ")
var ms=[]
var sumd1=0
var sumd2=0
var sumc=0
if (r==c){
    
    for (i=0;i<r;i++){
        var b=[]
        for (j=0;j<c;j++){
            r1=k.questionInt("Enter elements of row: ")
            b.push(r1)
        }
        ms.push(b)
    }
    for (i=0;i<c;i++){
        for (j=0;j<c;j++){
            if (i==j){
                sumd1=sumd1+ms[i][j]
            }
            if (i+j==r-1){
                sumd2=sumd2+ms[i][j]
            }
        }
    }
    if (sumd1!=sumd2){
        var f=0
    }else{
        for (i=0;i<r;i++){
            var sumr=0
            var sumc=0
            for (j=0;j<c;j++){
                sumr=sumr+ms[i][j]
                sumc=sumc+ms[j][i]
            }
            if (sumr!=sumd1){
                f=0
            }if (sumc!=sumd1){
                f=0
            }else{
                f=1
            }
        }
    }if (f==1){
        console.log("Matrix is magic square.")
    }else{
        console.log("Matrix is not magic square.")
    }

}else{
    console.log("The given matrix is not square matrix.")
}