#include <iostream>

using namespace std;

namespace sp1 {
	int A = 20;
	namespace sp2 {
		double B = 3.24;
		namespace sp3 {
			const char* str = "hello";
		}
	}
}

using namespace sp1;

int main() {
	cout << A << endl << sp2::B << endl  << sp2::sp3::str << endl;


	return 0;
}