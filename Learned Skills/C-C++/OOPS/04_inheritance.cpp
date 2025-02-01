#include<iostream>
using namespace std;

class parent{

    public:
    int x;

    protected:
    int y;

    private:
    int z;

};

class child1: public parent{
    //x remain public
    //y remain protected
    //z will not accessible
};

class child2: protected parent{
    //x will become protected
    //y will become protected
    //z will inaccessible
};

class child3: private parents{

};
