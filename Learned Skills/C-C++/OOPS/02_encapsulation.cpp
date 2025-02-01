#include<iostream>
using namespace std;

class box{
    private:
    
    int x; 

    public:

    void set(int n){
        x = n;

    }
    int get(){
        return x;
    }
};

int main(){
    box obj;
    obj.set(10);
    cout<<obj.get();

}



