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

	// ��γ�����Ҫ�ٿ�����ʱ������Ϊʲô����û�������Ļ(�ļ�ʹ�ú����ر�!!!������Ϊ�ļ�δ�رգ�����ʹ���ļ������������ļ�β�����ٴζ�ȡ������Ч��)
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


// ������븴���ļ�ʱ������ַ���ȡ�����ƣ��������ֻὨ��һ������������Ϊ�����Ч
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