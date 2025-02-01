// #include<iostream>
// #include<string>
// using namespace std;

// class calculator{
//     private:
//     int x;
//     int y;

//     public:
//     set(int a,int b){
//         x = a;
//         y = b;

//         cout<<"first no.is"+ x<<endl;
//         cout<<"second no.is"+ y<<endl;
//     }
//     int add(){
//         return x + y;
//     }
// };

// int main() {
//     calculator obj; // Create an object of Calculator
//     obj.set(10, 20); // Set values
//     int result = obj.add(); // Call add() and store the result
//     cout << "Sum is: " << result << endl; // Print the sum

//     return 0; // Return from main
// }


#include <iostream>
#include <string>
using namespace std;

// Abstract class representing a general Calculator
class Calculator {
public:
    virtual void set(int a, int b) = 0; // Pure virtual function for setting values
    virtual int add() = 0;              // Pure virtual function for addition
};

// Derived class for BasicCalculator
class BasicCalculator : public Calculator {
private:
    int x;
    int y;

public:
    void set(int a, int b) override {
        x = a; // Assign parameter a to member variable x
        y = b; // Assign parameter b to member variable y

        cout << "First number is: " << x << endl;
        cout << "Second number is: " << y << endl;
    }

    int add() override {
        return x + y; // Return the sum of x and y
    }
};

int main() {


    // Calculator* calc = new BasicCalculator(); 
    // calc->set(10, 20);                     
    // int result = calc->add();               
    // cout << "Sum is: " << result << endl;   

    BasicCalculator obj;
    obj.set(20,20);
    int result = obj.add();
     cout << "Sum is: " << result << endl; 





    // delete obj; // Clean up the allocated memory
    return 0;    // Return from main
}
