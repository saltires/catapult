/*
	�볢����ֻ��ģʽ��һ�� txt �ļ����������ݿ���Ϊ����һƪӢ�����£�������ȡ������е�����
*/
#if 0
#include <stdio.h>
#include <stdlib.h>
#pragma warning(disable:4996) 

int main() {
	FILE* file = NULL;
	// const �� * ǰ���ʾ *fileName �����޸ģ�����fileName���޸�
	const char* fileName = "../test1.txt";
	fileName = "../test.txt";

	file = fopen(fileName, "r");

	if (!file) {
		perror("File Open failed!");
		/* ����EXIT_FAILURE���ɲο���https://zh.cppreference.com/w/c/program/EXIT_status */
		exit(EXIT_FAILURE);
	}

	int c;
	while ((c = fgetc(file)) != EOF) {
		putchar(c);
	}

	return 0;
}
#endif
