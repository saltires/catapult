#pragma once
#include "Queue.h"
#include <stdio.h>
#include <stdlib.h>

/*
* 初始化生成一个队列
*/
PQueue init(int length) {
	int* arr = (int*)malloc(sizeof(int) * length);

	PQueue p = (PQueue)malloc(sizeof(Queue));

	p->PBase = arr;
	p->front = 0;
	p->rear = 0;
	p->max = length;

	return p;
}

/*
* 判断队列是否已满
*/
bool isFull(PQueue p) {
	if ((p->rear + 1) % p->max == p->front) {
		return true;
	} 
	return false;
}

/*
* 判断队列是否为空
*/
bool isEmpty(PQueue p) {
	if (p->front == p->rear && p->front == 0) {
		return true;
	}
	return false;
}

/*
* 向队列的尾部添加一个元素
*/
bool add(PQueue p, int val) {
	if (isFull(p)) {
		return false;
	}

	p->PBase[p->rear] = val;
	p->rear = (p->rear + 1) % p->max;
	return true;
}

/*
* 移除队列头部的第一个元素
*/
bool remove_q(PQueue p) {
	if (isEmpty(p)) {
		return false;
	}
	p->front = (p->front + 1) % p->max;
	return true;
}

/*
* 遍历队列
*/
void travse(PQueue p) {
	if (isEmpty(p)) {
		return;
	}

	int t = p->front;

	while (t != p->rear) {
		printf("%d\n", p->PBase[t]);
		t = (t + 1) % p->max;
	}

	return;
}

/*
* 清空队列
*/
bool flush(PQueue p) {
	if (isEmpty(p))
	{
		return false;
	}
	p->front = p->rear = 0;
}

