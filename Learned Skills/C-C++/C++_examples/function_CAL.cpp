#include<iostream>
using namespace std;



int calculator(int x, int y, char z){
    
    switch (z)
    {
    case '+':
    return (x + y);
        break;

    case '-':
    return (x - y);
        break;
    case '*':
    return (x * y);
        break;
    case '/':
    return (float)x/ y;
        break;
    
    default:
    cout<<"Enter valid operation"<<endl;
        break;
    }
}

int main(){
    int a,b;
    char op;
    cout<<"Enter first number: "<<endl;
    cin>>a;
    cout<<"Enter second number: "<<endl;
    cin>>b;
    
    cout<<"Select operation: + , - , * , /"<<endl;
    cin>>op;

    int result = calculator(a,b,op);
    cout<<"The result is : "<<result<<endl;
    return 0;
    

}
