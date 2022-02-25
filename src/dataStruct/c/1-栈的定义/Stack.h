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
	初始化一个栈
*/
PStack init();

/*
* 向栈中插入一个元素
*/
bool insert(PStack, int);

/*
* 遍历栈
*/
bool travse(PStack);

/*
* 判断栈是否为空
*/
bool isEmpty(PStack);

/*
* 取出栈顶元素
*/
bool pop(PStack, int*);