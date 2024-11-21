#include<stdio.h>

int main(){
int arr[100]={1,5,4,9,10};
for(int i=0;i<5;i++){
    if(arr[i]>arr[0]){
        arr[0]=arr[i];
    }
    else{
        printf("%d",arr[0]);
    }
}
}