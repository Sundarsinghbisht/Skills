#include<iostream>
using namespace std;

//****************************************1.FUNCTION OVERLOADING************************************************

class Sum{
    public:

    void add(int x, int y){
        int sum = x + y;
        cout<<sum<<endl;
    }

    void add(int x, int y, int z){
        int sum = x + y + z;
        cout<<sum<<endl;
    }

    void add(float x, float y){
        float sum = x + y;
        cout<<sum<<endl;
    }

};

int main(){
    Sum obj;
    obj.add(2,3);
    obj.add(10,20,30);
    obj.add(float(3.1),float(4.9));

    return 0;
}

//*****************************************2.OPERATOR OVERLOADING************************************************

class Complex{
    public:

    int real;
    int img;

    Complex(int x, int y){
        real = x;
        img = y;
    }

    Complex operator+ (Complex &c2){

        Complex ans(0,0);
        ans.real = real + c2.real;
        ans.img = img + c2.img;
        return ans;
        
    }
};

int main(){
    Complex c1(10,20);
    Complex c2(1,1);
    Complex c3 = c1 + c2;

    cout<<c3.real<<"  "<<c3.img<<endl;
}