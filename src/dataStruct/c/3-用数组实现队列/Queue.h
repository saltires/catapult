#pragma once
#define true 1
#define false 0
#include <stdbool.h>

typedef struct Queue {
	int * PBase;
	int front;
	int rear;
	int max;
} Queue, * PQueue;

/*
* 初始化生成一个队列
*/
PQueue init(int);

/*
* 判断队列是否为空
*/
bool isEmpty(PQueue);

/*
* 判断队列是否已满
*/
bool isFull(PQueue);

/*
* 向队列的尾部添加一个元素
*/
bool add(PQueue, int);

/*
* 移除队列头部的第一个元素
*/
bool remove_q(PQueue);

/*
* 遍历队列
*/
void travse(PQueue);

/*
* 清空队列
*/
bool flush(PQueue);
