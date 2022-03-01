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
* �����������һ��Ԫ�أ�ֻ�ܴ�β�����
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
* �Ƴ������еĵ�һ��Ԫ�أ�ֻ�ܴӶ�ͷɾ��
*/
bool remove_q(PQueue p) {
	if (isEmpty(p)) {
		return false;
	}

	// ��ʣһ���ڵ�
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
* ��������
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
* ��ն���
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