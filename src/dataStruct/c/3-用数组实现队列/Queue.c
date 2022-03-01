#pragma once
#include "Queue.h"
#include <stdio.h>
#include <stdlib.h>

/*
* ��ʼ������һ������
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
* �ж϶����Ƿ�����
*/
bool isFull(PQueue p) {
	if ((p->rear + 1) % p->max == p->front) {
		return true;
	} 
	return false;
}

/*
* �ж϶����Ƿ�Ϊ��
*/
bool isEmpty(PQueue p) {
	if (p->front == p->rear && p->front == 0) {
		return true;
	}
	return false;
}

/*
* ����е�β�����һ��Ԫ��
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
* �Ƴ�����ͷ���ĵ�һ��Ԫ��
*/
bool remove_q(PQueue p) {
	if (isEmpty(p)) {
		return false;
	}
	p->front = (p->front + 1) % p->max;
	return true;
}

/*
* ��������
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
* ��ն���
*/
bool flush(PQueue p) {
	if (isEmpty(p))
	{
		return false;
	}
	p->front = p->rear = 0;
}

