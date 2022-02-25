#pragma once
#include <stdio.h>
#include "Stack.h"
#include <malloc.h>


int main() {
	PStack x = init();

	insert(x, 1);
	insert(x, 2);
	insert(x, 3);

	int val = 0;
	pop(x, &val);

	insert(x, 4);

	travse(x);

	return 0;
}