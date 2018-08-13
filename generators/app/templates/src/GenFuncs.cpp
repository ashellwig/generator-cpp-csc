#include "../include/GenFuncs.h"
#include <iostream>

static int GenFuncs::pausePrompt() {
  std::cout << "Press <RET> to continue..." << std::endl;
  std::cin.ignore();

  return 0;
}