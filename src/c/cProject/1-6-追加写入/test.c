#include <stdio.h>
#include <stdlib.h>
#pragma warning(disable:4996)

const char* str = "\nhello c";

int main() {
	FILE* fp = NULL;

	fp = fopen("../test1.txt", "a+");

	if (!fp) {
		perror("File Open Failed!");
		exit(EXIT_FAILURE);
	}

	const char ret = fputs(str, fp);

	if (!ret) {
		exit(EXIT_FAILURE);
	}

	fclose(fp);

	return 0;
}


