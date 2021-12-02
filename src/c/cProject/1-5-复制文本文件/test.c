#if 0
#include <stdio.h>
#include <stdlib.h>
#pragma warning(disable:4996)

int main() {
	FILE* fpFrom = NULL;
	FILE* fpTo = NULL;
	FILE* fpTo1 = NULL;

	fpFrom = fopen("../test.txt", "r");
	fpTo = fopen("../test1.txt", "w+");

	if (!fpFrom || !fpTo) {
		perror("File open failed");
		exit(EXIT_FAILURE);
	}

	int c;
	while ((c = fgetc(fpFrom)) != EOF) {
		fputc(c, fpTo);
	}

	fclose(fpFrom);
	fclose(fpTo);

	// 这段程序还需要再看，暂时不明白为什么内容没输出到屏幕(文件使用后必须关闭!!!这里因为文件未关闭，所以使用文件操作并到达文件尾部后，再次读取都是无效的)
	fpTo1 = fopen("../test1.txt", "r+");
	if (!fpTo1) {
		perror("File open failed");
		exit(EXIT_FAILURE);
	}
	int c1;
	while ((c1 = fgetc(fpTo1)) != EOF) {
		putchar(c1);
	}

	return 0;
}
#endif


// 上面代码复制文件时是逐个字符读取并复制，下面这种会建立一个缓冲区，更为合理高效
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#pragma warning(disable:4996)

char buffer[1024];
int len;

int main() {
	FILE* in = NULL, * out = NULL;

	const char* src = "../test.txt";
	const char* dest = "../test1.txt";

	in = fopen(src, "r");
	out = fopen(dest, "w");

	if (!in || !out) {
		perror("File Open Failed");
		exit(EXIT_FAILURE);
	}

	while (len = fread(buffer, 1, sizeof(buffer), in)) {
		fwrite(buffer, 1, len, out);
	}

	fclose(in);
	fclose(out);

	return 0;
}