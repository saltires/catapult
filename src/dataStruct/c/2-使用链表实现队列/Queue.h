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
* ��ʼ�����ɶ���
*/
PQueue init();

/*
* ��������
*/
void travse(PQueue);

/*
* �����������һ��Ԫ��
*/
bool add(PQueue, int);

/*
* �Ƴ������е�һ��Ԫ��
*/
bool remove_q(PQueue);

/*
* ��ն���
*/
bool flush(PQueue);

/*
* �ж϶����Ƿ�Ϊ��
*/
bool isEmpty(PQueue);
