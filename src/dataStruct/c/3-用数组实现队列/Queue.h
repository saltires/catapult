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
* ��ʼ������һ������
*/
PQueue init(int);

/*
* �ж϶����Ƿ�Ϊ��
*/
bool isEmpty(PQueue);

/*
* �ж϶����Ƿ�����
*/
bool isFull(PQueue);

/*
* ����е�β�����һ��Ԫ��
*/
bool add(PQueue, int);

/*
* �Ƴ�����ͷ���ĵ�һ��Ԫ��
*/
bool remove_q(PQueue);

/*
* ��������
*/
void travse(PQueue);

/*
* ��ն���
*/
bool flush(PQueue);
