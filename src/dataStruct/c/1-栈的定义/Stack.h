#pragma once
#define true 1
#define false 0
#include <stdbool.h>

typedef struct Node
{
	int data;
	struct Node* PNext;
} Node, * PNode;

typedef struct Stack {
	PNode PTop;
	PNode PBottom;
} Stack, * PStack;

/*
	��ʼ��һ��ջ
*/
PStack init();

/*
* ��ջ�в���һ��Ԫ��
*/
bool insert(PStack, int);

/*
* ����ջ
*/
bool travse(PStack);

/*
* �ж�ջ�Ƿ�Ϊ��
*/
bool isEmpty(PStack);

/*
* ȡ��ջ��Ԫ��
*/
bool pop(PStack, int*);