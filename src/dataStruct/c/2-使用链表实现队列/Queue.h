#pragma once
#define true 1
#define false 0
#include <stdbool.h>

typedef struct Node {
	int data;
	struct Node* PNext;
} Node, * PNode;

typedef struct Queue {
	PNode front;
	PNode rear;
} Queue, * PQueue;

/*
* 初始化生成队列
*/
PQueue init();

/*
* 遍历队列
*/
void travse(PQueue);

/*
* 朝队列中添加一个元素
*/
bool add(PQueue, int);

/*
* 移除队列中的一个元素
*/
bool remove_q(PQueue);

/*
* 清空队列
*/
bool flush(PQueue);

/*
* 判断队列是否为空
*/
bool isEmpty(PQueue);
