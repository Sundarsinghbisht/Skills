#include<iostream>
using namespace std;

class AgeChecker{
public:

       int age;

      void check(){

        if (age>=18){
            cout<<"Eligible"<<endl;
        }
        else{
            cout<<"not eligible"<<endl;
        }
      }

};

int main(){

    AgeChecker ac;
    
    cout<<"Enter your age: "<<endl;
    cin>>ac.age;
    ac.check();

    
}