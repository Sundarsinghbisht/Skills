#include<iostream>
using namespace std;

class box{
    public:
    int a;
    int b;

    box(){    //default constructor
        a = 10;
        b = 20;

    }

    box(int x, int y){   //parameterised  constructor
        a=x;
        b=y;

    }

    box(box& obj3){     //copy constructor
        a = obj3.a;
        b = obj3.b;

    }
    ~box(){   //destructor
        cout<<"destructor"<<endl;

    }

};
int main()
{

    // box  obj1;
    // cout<< obj1.a<<endl;

     box *obj1 = new box();
    cout<<obj1->a<<" "<<obj1->b<<endl;
    delete obj1;

    box obj2(2,3);
    cout<<obj2.a<<endl;

    box obj3 = obj2;
    cout<<obj3.a<<endl;

   

    
 
}
