#include<iostream>
using namespace std;

class parent1{
    public:
    parent1(){
            cout<<"this is parent1 class"<<endl;
    }
    
};
class parent2{
    public: 
    parent2(){
            cout<<"this is parent2 class"<<endl;
    }   
};

class child1: public parent1{         //single inheritance
    public:
    child1(){
           cout<<"this is child1 class"<<endl;
    }
};
class grandchild: public child1{     //multi-level inheritance
    public:
    grandchild(){
        cout<<"this is grandchild class"<<endl;
    }
};

class multiple: public parent1,parent2{     // multiple inheritance
    public:
    multiple(){
        cout<<"this is multiple class"<<endl;
    }
};

class child2: public parent1{         //hierarchical inheritance  child 1 and child2 both inherits from parent1
    public:
    child2(){
           cout<<"this is child12 class"<<endl;

    }
};

class hybrid: public grandchild, multiple{
    public:
    hybrid(){
        cout<<"this is hybrid class";
    }
};

int main(){

    // child1 c1;
    // grandchild gc;
    // multiple m;
    // child2 c2;
    hybrid h;
    return 0;
}