#pragma once
#include <stdio.h>
#include "Queue.h"

int main() {
	PQueue p = init(6);

	add(p, 1);
	add(p, 2);
	add(p, 3);
	remove_q(p);
	add(p, 4);
	add(p, 5);
	add(p, 6);
	add(p, 7);

	travse(p);
	flush(p);
	travse(p);

	return 0;
}