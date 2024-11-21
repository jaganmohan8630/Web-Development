#include <stdio.h>

// Function to display Pascal's Triangle
void displayPascalsTriangle(int rows) {
    for (int i = 0; i < rows; i++) {
        int num = 1; // First value in each row is always 1
        
        // Print spaces for alignment
        for (int j = 0; j < rows - i - 1; j++) {
            printf(" ");
        }
        
        // Print values in the row
        for (int j = 0; j <= i; j++) {
            printf("%d ", num);
            num = num * (i - j) / (j + 1); // Calculate next value in the row
        }
        printf("\n");
    }
}

int main() {
    int rows;

    // Input number of rows
    printf("Enter the number of rows for Pascal's Triangle: ");
    scanf("%d", &rows);

    // Display Pascal's Triangle
    displayPascalsTriangle(rows);

    return 0;
}
