#ifndef FOO_H
#define FOO_H FOO_H
#include "foo.h"
#endif // !FOO_H

#ifdef FOO_H
#else
#define FOO_H FOO_H
#include "foo.h"
#endif // !FOO_H

int main() {
	return 0;
}
