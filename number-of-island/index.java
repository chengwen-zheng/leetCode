class Solution {
  public int numIslands(char[][] grid) {
      int count =0;
      
      for(int i = 0;i<grid.length;i++){
          for(int j = 0;j<grid[i].length;j++){
              if(grid[i][j] == '1'){
                  count++;
                  bfs(i,j,grid);
              }
              
          }
      }
      
      return count;
  }
  
  public void bfs(int x,int y,char[][] grid){
      if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] == '0')   {
          return;
      }            
      grid[x][y] = '0';
      bfs(x + 1, y, grid);
      bfs(x - 1, y, grid);
      bfs(x, y + 1, grid);
      bfs(x, y - 1, grid);
  }
}