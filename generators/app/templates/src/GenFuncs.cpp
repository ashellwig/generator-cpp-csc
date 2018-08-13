#include "../include/GenFuncs.h"
#include <iostream>

int GenFuncs::pausePrompt() {
  std::cout << "Press <RET> to continue..." << std::endl;
  std::cin.ignore();

  return 0;
}
