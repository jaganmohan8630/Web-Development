#include<stdio.h>
#include<math.h>

int prime(int n) {
    if(n==0 || n==1) {
        return 0;
    }    
    for(int i=2;i<n;i++) {
        if(n%i==0) {
        return 0;
        }
    }
        return 1;   
}
int main() {
      int N =39;
      for(int i=2;i<N;i++) {
          if(prime(i)) {
              printf("%d\t",i);
          }
      }
      return 0;
}