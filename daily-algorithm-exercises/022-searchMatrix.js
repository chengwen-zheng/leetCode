var searchMatrix = function(matrix, target) {
  const m = matrix.length;

  for(let i = 0;  i < m;i++){
      const n = matrix[i].length;
      let j = 0;
      while(j < matrix[i].length){
          if(matrix[i][j] == target) {
              return true; 
          } else if(matrix[i][j] > target){
              break;
          }
          j++;
      }
  }

  return false
};

searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5)

