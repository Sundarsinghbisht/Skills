#include<iostream>
using namespace std;

class Fruits{
public:

    string name;
    string color;
};

int main(){

    Fruits Apple;
    Apple.name = "apple";
    Apple.color = "red";

    cout<<Apple.name<<endl;

    Fruits *mango = new Fruits();
    mango->name = "Mango";
    mango->color = "Yellow";
    cout<<mango->name<<endl;


    
} 
