#if 0
// 这里面的代码是不会和if预处理器块外面的代码冲突，起到了注释的效果
int ma = 10;
#endif
#include <stdio.h>
int ma = 11;

int main() {
	printf("%d", ma);
	return 0;
}