#include<iostream>
using namespace std;


class calculator{
    public:
    virtual void set(int a , int b) = 0;
    virtual int add() = 0;
};

class BasicCalc: public calculator{
    private:
    int x;
    int y;

    public:
    void set(int a , int b) override{
        x = a;
        y = b;
    }

    int add()override{
        int result = x + y;
        cout<<result<<endl;
    }
};

int main(){
    BasicCalc obj;
    obj.set(10,20);
    obj.add();

    return 0;

}

