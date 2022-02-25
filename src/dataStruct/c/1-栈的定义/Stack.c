#pragma once
#include "Stack.h"
#include <stdio.h>
#include <stdlib.h>

PStack init() {
	PNode node = (PNode)malloc(sizeof(Node));
	PStack stack = (PStack)malloc(sizeof(Stack));

	if (stack == NULL && node == NULL) {
		exit(-1);
	}

	stack->PTop = stack->PBottom = node;

	return stack;
}

bool insert(PStack stack, int val) {
	PNode node = (PNode)malloc(sizeof(Node));
	node->data = val;
	node->PNext = stack->PTop;

	stack->PTop = node;
}

bool travse(PStack stack) {
	if (isEmpty(stack)) {
		return false;
	}
	else {
		PNode temp = stack->PTop;
		while (temp != stack->PBottom) {
			printf("%d", temp->data);
			temp = temp->PNext;
		}
	}
}

bool isEmpty(PStack stack) {
	if (stack->PBottom == stack->PTop) {
		return true;
	}
	else {
		return false;
	}
}

bool pop(PStack s, int* v) {
	if (isEmpty(s)) {
		return false;
	}
	PNode t = s->PTop;
	*v = t->data;
	s->PTop = t->PNext;
	free(t);
}