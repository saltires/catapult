#pragma once
#include "Queue.h"
#include <stdio.h>
#include <stdlib.h>

PQueue init() {
	PQueue q = (PQueue)malloc(sizeof(Queue));

	q->front = NULL;
	q->rear = NULL;
	
	return q;
}

bool isEmpty(PQueue p) {
	if (p->front == p->rear && p->front == NULL) {
		return true;
	}
	else {
		return false;
	}
}

/*
* 朝队列中添加一个元素，只能从尾部添加
*/
bool add(PQueue p, int v) {
	PNode n = (PNode)malloc(sizeof(Node));
	n->data = v;
	n->PNext = NULL;
	if (isEmpty(p)) {
		p->front = n;
		p->rear = n;
	}
	else {
		p->rear->PNext = n;
		p->rear = n;
	}
}

/*
* 移除队列中的第一个元素，只能从队头删除
*/
bool remove_q(PQueue p) {
	if (isEmpty(p)) {
		return false;
	}

	// 仅剩一个节点
	if (p->front == p->rear && p->front != NULL) {
		PNode t = p->front;
		p->front = p->rear = NULL;
		free(t);
	}
	else {
		PNode t = p->front;

		p->front = t->PNext;
		free(t);
	}

	return true;
}

/*
* 遍历队列
*/
void travse(PQueue p) {
	if (isEmpty(p)) {
		return;
	}
	PNode t = p->front;

	while (t != NULL) {
		printf("%d", t->data);
		t = t->PNext;
	}
}

/*
* 清空队列
*/
bool flush(PQueue p) {
	if (isEmpty(p)) {
		return false;
	}

	while(p->front != NULL) {
		remove_q(p);
	}

	return true;
}